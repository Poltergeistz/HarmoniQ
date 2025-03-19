<script>
  import { onMount } from "svelte";

  let showButton = false;

  // Update the button's visibility when scrolling
  const handleScroll = () => {
    showButton = window.scrollY > 200;
  };

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Ensure Svelte reacts to scrolling
  onMount(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<style>
  .scroll-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color:rgb(237, 253, 179); /* Tailwind violet-600 */
    color: white;
    border: none;
    padding: 12px 16px;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .hidden {
    opacity: 0;
    transform: translateY(20px);
    pointer-events: none;
  }
</style>

<!-- Button with proper Svelte reactivity -->
{#if showButton}
  <button
    class="scroll-to-top shadow-lg hover:bg-violet-700 transition-all duration-300"
    on:click={scrollToTop}
    aria-label="Scroll to top"
  >
    ⬆️
  </button>
{/if}
