<script lang="ts">
	export let email: string = '';
	export let source: string = '';
	export let isSubscribed: boolean = false;
	let isLoading: boolean = false;

	// Define the response type from the API call
	interface SubscribeResponse {
		success: boolean;
		message: string;
	}

	async function submitForm(event: Event) {
		event.preventDefault();
		isLoading = true;

		try {
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
		} catch (error) {
			console.error('Error submitting form:', error);
			alert('An error occurred. Please try again.');
		} finally {
			isLoading = false;
		}
	}
</script>

<form
	on:submit={submitForm}
	class="mx-auto w-full max-w-lg rounded-lg bg-indigo-800 p-6 text-white shadow-lg"
>
	<h2 class="mb-4 text-2xl font-semibold">Join the Waiting List</h2>

	<!-- Email Input -->
	<label for="email" class="sr-only">Email Address</label>
	<input
		id="email"
		type="email"
		bind:value={email}
		placeholder="Enter your email"
		required
		class="mb-4 w-full rounded-lg border-2 border-indigo-600 bg-indigo-700 p-3 text-white focus:border-lime-300 focus:ring-2 focus:ring-lime-300 focus:outline-none"
		aria-required="true"
		aria-describedby="email-description"
	/>
	<p id="email-description" class="sr-only">
		We will only use your email to notify you when HarmoniQ launches.
	</p>

	<!-- Source Selection -->
	<label for="source" class="sr-only">Where did you hear about us?</label>
	<select
		id="source"
		bind:value={source}
		class="mb-4 w-full rounded-lg border-2 border-indigo-600 bg-indigo-700 p-3 text-white focus:border-lime-300 focus:ring-2 focus:ring-lime-300 focus:outline-none"
		aria-required="true"
		aria-describedby="source-description"
	>
		<option value="">Where did you hear about us?</option>
		<option value="Github">Github</option>
		<option value="LinkedIn">LinkedIn</option>
		<option value="Newsletter">Newsletter</option>
		<option value="Other">Other</option>
	</select>
	<p id="source-description" class="sr-only">
		Select how you heard about us to help improve our marketing efforts.
	</p>

	<!-- Submit Button -->
	<button
		type="submit"
		class="flex w-full items-center justify-center rounded-lg bg-lime-200 p-3 font-semibold text-indigo-700 transition hover:bg-lime-300 focus:ring-2 focus:ring-lime-400 focus:outline-none"
		aria-label="Join the waiting list"
		disabled={isLoading}
	>
		{#if isLoading}
			<svg
				class="mr-2 h-5 w-5 animate-spin text-indigo-700"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"
				></circle>
				<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0"></path>
			</svg>
			Submitting...
		{:else}
			Join Waiting List
		{/if}
	</button>

	{#if isSubscribed}
		<p class="mt-4 text-green-200" role="alert">Thank you for subscribing!</p>
	{/if}
</form>
