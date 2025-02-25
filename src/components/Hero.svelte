<script lang="ts">
  import Form from '$lib/Form.svelte'; // Import the form component

  let email = '';
  let source = '';
  let isSubscribed = false;
</script>

<section
	id="hero"
	class="flex min-h-screen flex-col items-center justify-center bg-indigo-900 px-6 text-center text-lime-200"
	aria-labelledby="hero-heading"
>
	<div class="w-full max-w-6xl">
		<!-- Accessible heading -->
		<h1 id="hero-heading" class="mb-4 text-3xl font-bold sm:text-4xl">
			Unlock Your Full Potential with HarmoniQ: The First AI-Powered Productivity Tool That Works in
			Harmony with Your Body
		</h1>

		<!-- Descriptive supporting text -->
		<p class="mb-6 text-lg sm:text-xl" id="hero-subheading">Empower Your Time, Honor Your Rhythm</p>

    <!-- Use the Form component here -->
    <Form bind:email={email} bind:source={source} bind:isSubscribed={isSubscribed} />
	</div>
</section>
