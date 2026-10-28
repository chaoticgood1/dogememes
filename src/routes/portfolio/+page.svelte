<script lang="ts">
  import { ArrowLeftIcon } from "lucide-svelte";
  import Portfolio from "../Portfolio.svelte";
  import { portfolio } from "$lib/data/portfolio";
</script>

<svelte:head>
  <title>Portfolio — Monico A. Colete</title>
  <meta
    name="description"
    content="Websites and games built by Monico A. Colete, from 3D browser games to e-commerce storefronts."
  />
</svelte:head>

<div
  class="overflow-x-hidden bg-background flex flex-col justify-center items-center relative"
>
  <div
    class="w-full max-w-[680px] flex flex-col my-24 lg:px-0 px-5 mb-[100px] sm:mb-[200px]"
  >
    <a
      href="/"
      class="self-start inline-flex items-center gap-2 px-3 py-2 rounded-md border border-background-tertiary bg-background-secondary text-secondary text-sm font-medium transition hover:bg-background-tertiary hover:text-primary"
    >
      <ArrowLeftIcon class="h-4 w-4" strokeWidth={1.5} />
      Back to home
    </a>
    <div class="flex flex-col mt-8">
      <div class="text-primary text-3xl">Portfolio</div>
      <div class="text-faint text-sm mt-1">
        Websites and games I have built and shipped.
      </div>
    </div>
    <Portfolio data={portfolio} />
    <div class="flex justify-center mt-12">
      <a
        href="/"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-background-tertiary bg-background-secondary text-secondary text-sm font-medium transition hover:bg-background-tertiary hover:text-primary"
      >
        <ArrowLeftIcon class="h-4 w-4" strokeWidth={1.5} />
        Back to home
      </a>
    </div>
  </div>
  <div
    class="bg-gradient-to-b from-background to-background-secondary bg-background h-[200px] w-full"
  ></div>
</div>
