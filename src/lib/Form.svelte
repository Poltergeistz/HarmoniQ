<script lang="ts">
	export let email: string = '';
	export let source: string = '';
	export let isSubscribed: boolean = false;
	let isLoading: boolean = false;

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

<!-- Responsive Form -->
<form
	on:submit={submitForm}
	class="mx-auto w-full max-w-lg rounded-lg bg-violet-300/30 p-6 text-white shadow-lg backdrop-blur-md"
>
	<!-- FLEX: Desktop (Row) | Mobile (Stacked) -->
	<div class="flex flex-col sm:flex-row sm:items-center gap-4">
		<!-- Label (Visible on all screen sizes) -->
		<label for="email" class="text-sm font-medium text-white sm:w-auto">Email:</label>

		<!-- Input Field -->
		<input
			id="email"
			type="email"
			bind:value={email}
			placeholder="Enter your email"
			required
			class="w-full rounded-lg border border-violet-200 bg-violet-200/20 p-3 text-white placeholder-white/70 focus:border-accent focus:ring-2 focus:ring-accent focus:outline-none sm:flex-1"
			aria-required="true"
		/>

		<!-- Submit Button -->
		<button
			type="submit"
			class="rounded-lg bg-accent px-4 py-3 text-primary transition hover:bg-accent-dark focus:ring-2 focus:ring-accent focus:outline-none uppercase font-bold flex items-center justify-center sm:ml-2"
			aria-label="Join the waiting list"
			disabled={isLoading}
		>
			{#if isLoading}
				<svg class="mr-2 h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
					<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
					<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0"></path>
				</svg>
				Submitting...
			{:else}
				Join Waitlist
			{/if}
		</button>
	</div>

<!-- Consent Checkbox (Centered & Properly Aligned) -->
<div class="mt-4 flex items-start justify-center gap-3">
	<input
		id="consent"
		type="checkbox"
		required
		class="h-4 w-4 rounded border-accent text-accent focus:ring-accent"
	/>
	<label for="consent" class="text-sm text-white">
		I consent to receive emails about HarmoniQ updates and announcements.
	</label>
</div>


	<!-- Success Message -->
	{#if isSubscribed}
		<p class="mt-3 text-center text-sm text-green-200" role="alert" aria-live="polite">
			Thank you for subscribing!
		</p>
	{/if}
</form>
