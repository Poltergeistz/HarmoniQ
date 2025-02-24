<script>
  export let email;
  export let isSubscribed;
  export let onSubscribe;
</script>

<section id="hero" class="bg-indigo-700 text-lime-200 py-20 text-center">
  <div class="max-w-6xl mx-auto">
    <h1 class="text-4xl font-bold mb-4">Unlock Your Full Potential with HarmoniQ: The First AI-Powered Productivity Tool That Works in Harmony with Your Body</h1>
    <p class="text-xl mb-6">Empower Your Time, Honor Your Rhythm</p>

    {#if !isSubscribed}
      <form class="mb-6" on:submit|preventDefault={onSubscribe}>
        <input 
          type="email" 
          bind:value={email} 
          placeholder="Enter your email" 
          class="px-4 py-2 rounded-l-lg border border-lime-200 text-white"
          required
        />
        <button type="submit" class="px-6 py-2 bg-lime-200 text-indigo-700 rounded-r-lg">
          Join the Waiting List
        </button>
      </form>
    {:else}
      <p class="text-lg text-green-200">Thank you for subscribing!</p>
    {/if}
  </div>
</section>
