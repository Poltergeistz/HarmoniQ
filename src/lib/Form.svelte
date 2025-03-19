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

<!-- Small form replacing the "Join here" link -->
<form
	on:submit={submitForm}
	class="mx-auto w-full max-w-md rounded-lg bg-violet-300/30 p-4 text-white shadow-lg backdrop-blur-md"
>
	<div class="mb-3 flex flex-col justify-center gap-2 sm:flex-row">
	<label>Email<label/>
		<input
			id="email"
			type="email"
			bind:value={email}
			placeholder="Enter your email"
			required
			class="flex-1 rounded-lg border-2 border-violet-200 bg-violet-200/20 p-2 text-white placeholder-white/70 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none"
			aria-required="true"
		/>
		<button
			type="submit"
			class="rounded-lg bg-accent p-2 text-primary transition hover:bg-accent focus:ring-2 focus:ring-accent focus:outline-none uppercase font-black"
			aria-label="Join the waiting list"
			disabled={isLoading}
		>
			{#if isLoading}
				<span class="flex items-center justify-center">
					<svg
						class="mr-2 h-4 w-4 animate-spin"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"
						></circle>
						<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0"></path>
					</svg>
					Submitting...
				</span>
			{:else}
				Join Waitlist
			{/if}
		</button>
	</div>

	<div class="flex items-start gap-2">
		<input
			id="consent"
			type="checkbox"
			required
			class="mt-1 h-4 w-4 rounded border-accent text-accent focus:ring-accent"
		/>
		<label for="consent" class="text-sm">
			I consent to receive emails about HarmoniQ updates and announcements
		</label>
	</div>

	{#if isSubscribed}
		<p class="mt-3 text-sm text-green-200" role="alert">Thank you for subscribing!</p>
	{/if}
</form>
