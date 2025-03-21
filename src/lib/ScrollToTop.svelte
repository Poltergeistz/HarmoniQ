<script>
  import { onMount } from "svelte";

  let showButton = false;

  const handleScroll = () => {
    showButton = window.scrollY > 200;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  onMount(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<style>
  .hidden {
    opacity: 0;
    transform: translateY(20px);
    pointer-events: none;
  }
</style>

{#if showButton}
  <button
    class="fixed bottom-5 right-5 w-12 h-12 bg-accent cursor-pointer text-primary rounded-full flex items-center justify-center shadow-lg hover:bg-accent/70 transition-all duration-300 focus:outline-none"
    on:click={scrollToTop}
    aria-label="Scroll to top"
  >
    &#9650;
  </button>
{/if}
