<script lang="ts">
  let { data } = $props();
</script>

<!--

  Coastal UI Design Basics:

  Main padding: 4
  Smaller alert / etc padding: 2
  border color: #222222
  card bg color: #0a0a0a
  rounded: lg

-->

<div class="w-full flex flex-col items-center justify-center">
  <div class="flex flex-col sm:flex-row items-center justify-between w-full">
    <div class="flex flex-col sm:flex-row items-center w-full">
      <img
        alt="avatar of Jonathan"
        src={data.avatar}
        class="sm:h-16 sm:w-16 w-24 h-24 rounded-full shadow-lg shadow-background-secondary mb-2 sm:mb-0"
      />
      <div class="flex flex-col items-center sm:items-start sm:ml-4 w-full">
        <div class="text-primary text-3xl">{data.name}</div>
        <div class="text-faint text-sm sm:-mt-[2px]">{data.occupation}</div>
      </div>
    </div>
    <div class="flex items-center space-x-5 sm:space-x-3 mt-6 sm:mt-2">
      <button
        aria-label="Github Social Media link"
        onclick={() => window.open(data.socials.github, "_blank")}
        class="cursor-pointer"
      >
        <svg
          class="h-11 w-11 p-1 sm:p-0 sm:h-5 sm:w-5 text-faint hover:text-secondary"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          ><path
            fill="currentColor"
            d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
          /></svg
        >
      </button>
      <button
        aria-label="X Social Media link"
        onclick={() => window.open(data.socials.xSocialLink, "_blank")}
        class="cursor-pointer"
      >
        <svg
          class="h-11 w-11 p-1 sm:p-0 sm:h-5 sm:w-5 text-faint hover:text-secondary"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          ><path
            fill="currentColor"
            d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z"
          /></svg
        >
      </button>
      <div class="h-5 sm:h-3.5 w-[1px] bg-faint/50"></div>
      <button
        aria-label="send an email"
        onclick={() => (window.location.href = data.socials.email)}
        class="cursor-pointer"
      >
        <svg
          class="h-11 w-11 sm:h-6 sm:w-6 text-faint hover:text-secondary"
          viewBox="0 0 24 24"
          ><path
            fill="currentColor"
            d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
          /></svg
        >
      </button>
      <div class="h-5 sm:h-3.5 w-[1px] bg-faint/50"></div>
      <button
        aria-label="LinkedIn Social Media link"
        onclick={() => window.open(data.socials.linkedInSocialLink, "_blank")}
        class="cursor-pointer"
      >
        <svg
          class="h-11 w-11 sm:h-6 sm:w-6 text-faint hover:text-secondary"
          viewBox="0 0 1024 1024"
          ><path
            fill="currentColor"
            d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32M349.3 793.7H230.6V411.9h118.7zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8m503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2c-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7c120.2 0 142.3 79.1 142.3 181.9z"
          /></svg
        >
      </button>
    </div>
  </div>
  <div id="aboutSection" class="flex flex-col justify-start w-full mt-16">
    <div class="text-faint text-xs font-extrabold uppercase">About</div>
    <div class="text-primary mt-3">{data.description}</div>
  </div>
</div>
