<script lang="ts">
  import { ArrowRightIcon, ExternalLinkIcon } from "lucide-svelte";
  import type { PortfolioItem } from "$lib/data/portfolio";

  interface Props {
    data: PortfolioItem[];
    showMoreHref?: string;
    showMoreLabel?: string;
  }

  let {
    data,
    showMoreHref,
    showMoreLabel = "View full portfolio",
  }: Props = $props();

  let failedImages = $state<Record<string, boolean>>({});

  function getDomain(link: string) {
    try {
      return new URL(link).hostname.replace(/^www\./, "");
    } catch {
      return link;
    }
  }

  function getInitial(name: string) {
    return name.trim().charAt(0).toUpperCase() || "?";
  }
</script>

<div id="portfolioSection" class="flex flex-col justify-start w-full mt-12">
  <div class="flex items-baseline justify-between gap-2">
    <div class="text-faint text-xs font-extrabold uppercase">Portfolio</div>
    {#if showMoreHref}
      <a
        href={showMoreHref}
        class="group/all inline-flex items-center gap-1 text-xs font-medium text-faint transition hover:text-secondary"
      >
        View all
        <ArrowRightIcon
          class="h-3 w-3 transition group-hover/all:translate-x-0.5"
          strokeWidth={1.5}
        />
      </a>
    {/if}
  </div>
  <div
    class="grid items-stretch justify-center mt-6 grid-cols-1 gap-6 sm:grid-cols-2"
  >
    {#each data as item}
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${item.name} in a new tab`}
        class="group h-full p-4 flex flex-col bg-radial from-background-secondary to-background rounded-md border border-background-tertiary transition hover:border-faint/40 hover:from-background-tertiary"
      >
        {#if item.image && !failedImages[item.link]}
          <img
            src={item.image}
            alt={`${item.name} preview`}
            loading="lazy"
            class="w-full aspect-video object-cover rounded-md bg-background-tertiary"
            onerror={() => (failedImages[item.link] = true)}
          />
        {:else}
          <div
            class="w-full aspect-video rounded-md bg-radial from-background-tertiary to-background border border-background-tertiary flex flex-col items-center justify-center"
          >
            <span class="text-3xl font-semibold text-faint/70">
              {getInitial(item.name)}
            </span>
            <span
              class="text-xs text-faint mt-1 px-4 text-center truncate w-full"
            >
              {getDomain(item.link)}
            </span>
          </div>
        {/if}
        <div class="flex flex-col h-full mt-4">
          <div class="flex justify-between items-center gap-2">
            <div
              class="text-primary text-lg font-medium flex items-center gap-1 min-w-0"
            >
              <span class="truncate">{item.name}</span>
              <ExternalLinkIcon
                class="h-3.5 w-3.5 shrink-0 text-faint group-hover:text-secondary transition"
                strokeWidth={1.5}
              />
            </div>
            {#if item.tech}
              <div class="text-xs text-faint font-medium shrink-0">
                {item.tech}
              </div>
            {/if}
          </div>
          {#if item.role}
            <div class="text-faint text-xs font-extrabold uppercase mt-1">
              {item.role}
            </div>
          {/if}
          {#if item.description}
            <div class="text-secondary mt-2 text-sm">{item.description}</div>
          {/if}
          <div class="text-faint text-xs mt-auto pt-2">
            {getDomain(item.link)}
          </div>
        </div>
      </a>
    {/each}
  </div>
  {#if showMoreHref}
    <div class="flex justify-center mt-8">
      <a
        href={showMoreHref}
        class="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-background-tertiary bg-background-secondary text-secondary text-sm font-medium transition hover:bg-background-tertiary hover:text-primary"
      >
        {showMoreLabel}
        <ArrowRightIcon class="h-4 w-4" strokeWidth={1.5} />
      </a>
    </div>
  {/if}
</div>
