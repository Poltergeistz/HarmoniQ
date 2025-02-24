<script>
  export let email = '';
  export let isSubscribed = false;
  export let onSubscribe = submitForm;

  const notionApiKey = import.meta.env.VITE_NOTION_INTEGRATION_KEY;
  const notionDatabaseId = import.meta.env.VITE_NOTION_DATABASE_ID;

  // Form submit handler
  async function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Debugging: Check if email is correctly captured
    console.log('Email captured:', email);
    console.log('Notion API Key:', notionApiKey);
console.log('Notion Database ID:', notionDatabaseId);

    
    if (!email) {
      console.log('No email provided!');
      return; // Don't proceed if no email is entered
    }

    const formData = {
      email: email,
    };

    // Make a POST request to Notion API to store the email in the database
    try {
      const response = await fetch('https://api.notion.com/v1/pages', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${notionApiKey}`,
          'Content-Type': 'application/json',
          'Notion-Version': '2021-05-13', // or the latest version
        },
        body: JSON.stringify({
          parent: { database_id: notionDatabaseId },
          properties: {
            'Email': {
              title: [
                {
                  text: {
                    content: formData.email,
                  },
                },
              ],
            },
            'Status': {
              select: {
                name: 'Waiting List',
              },
            },
          },
        }),
      });

      if (response.ok) {
        alert('Successfully subscribed!');
        isSubscribed = true;
      } else {
        alert('Something went wrong.');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }

    // Reset email field after submission
    email = '';
  }
</script>

<section 
  id="hero" 
  class="bg-indigo-900 text-lime-200 min-h-screen flex flex-col items-center justify-center px-6 text-center"
  aria-labelledby="hero-heading"
  role="region"
>
  <div class="max-w-6xl w-full">
    <!-- Accessible heading -->
    <h1 id="hero-heading" class="text-3xl sm:text-4xl font-bold mb-4">
      Unlock Your Full Potential with HarmoniQ: The First AI-Powered Productivity Tool That Works in Harmony with Your Body
    </h1>
    
    <!-- Descriptive supporting text -->
    <p class="text-lg sm:text-xl mb-6" id="hero-subheading">
      Empower Your Time, Honor Your Rhythm
    </p>

    {#if !isSubscribed}
      <form 
        class="flex flex-col sm:flex-row items-center justify-center gap-2 w-full max-w-md mx-auto" 
        on:submit|preventDefault={submitForm}
        aria-labelledby="subscribe-form-heading"
      >
        <h2 id="subscribe-form-heading" class="sr-only">Subscribe to the Waiting List</h2>

        <!-- Email input with accessible labels -->
        <label for="email-input" class="sr-only">Enter your email</label>
        <input 
          id="email-input"
          type="email" 
          bind:value={email} 
          placeholder="Enter your email" 
          class="w-full sm:w-auto px-4 py-2 rounded-lg sm:rounded-l-lg border border-lime-200 text-white bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-lime-300"
          required
          aria-required="true"
          aria-describedby="email-description"
        />
        <p id="email-description" class="sr-only">We will only use your email to notify you when HarmoniQ launches.</p>

        <!-- Button with ARIA role -->
        <button 
          type="submit" 
          class="px-6 py-2 bg-lime-200 text-indigo-700 rounded-lg sm:rounded-r-lg font-semibold hover:bg-lime-300 transition focus:outline-none focus:ring-2 focus:ring-lime-400"
          aria-label="Join the waiting list"
        >
          Join the Waiting List
        </button>
      </form>
    {:else}
      <p class="text-lg text-green-200" role="alert">
        Thank you for subscribing!
      </p>
    {/if}
  </div>
</section>
