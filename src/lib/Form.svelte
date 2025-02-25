<script lang="ts">
  export let email: string = '';
  export let source: string = '';
  export let isSubscribed: boolean = false;

  // Define the response type from the API call
  interface SubscribeResponse {
    success: boolean;
    message: string;
  }

  async function submitForm(event: Event) {
    event.preventDefault();

    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, source })
    });

    const data: SubscribeResponse = await response.json();

    if (data.success) {
      isSubscribed = true;
      email = ''; // Reset the field
    } else {
      alert('Error: ' + data.message);
    }
  }
</script>

<form on:submit={submitForm} class="w-full max-w-lg mx-auto p-6 bg-indigo-800 text-white rounded-lg shadow-lg">
  <h2 class="text-2xl font-semibold mb-4">Join the Waiting List</h2>
  
  <!-- Email Input -->
  <label for="email" class="sr-only">Email Address</label>
  <input 
    id="email"
    type="email"
    bind:value={email} 
    placeholder="Enter your email"
    required
    class="w-full p-3 mb-4 border-2 border-indigo-600 rounded-lg bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:border-lime-300 text-white"
    aria-required="true"
    aria-describedby="email-description"
  />
  <p id="email-description" class="sr-only">We will only use your email to notify you when HarmoniQ launches.</p>

  <!-- Source Selection -->
  <label for="source" class="sr-only">Where did you hear about us?</label>
  <select 
    id="source" 
    bind:value={source}
    class="w-full p-3 mb-4 border-2 border-indigo-600 rounded-lg bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:border-lime-300 text-white"
    aria-required="true"
    aria-describedby="source-description"
  >
    <option value="">Where did you hear about us?</option>
    <option value="Github">Github</option>
    <option value="LinkedIn">LinkedIn</option>
    <option value="Newsletter">Newsletter</option>
    <option value="Other">Other</option>
  </select>
  <p id="source-description" class="sr-only">Select how you heard about us to help improve our marketing efforts.</p>

  <!-- Submit Button -->
  <button 
    type="submit" 
    class="w-full p-3 bg-lime-200 text-indigo-700 rounded-lg font-semibold hover:bg-lime-300 transition focus:outline-none focus:ring-2 focus:ring-lime-400"
    aria-label="Join the waiting list"
  >
    Join Waiting List
  </button>

  {#if isSubscribed}
    <p class="text-green-200 mt-4" role="alert">
      Thank you for subscribing!
    </p>
  {/if}
</form>

