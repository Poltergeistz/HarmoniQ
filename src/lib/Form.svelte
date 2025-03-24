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
	<div class="flex flex-col gap-4 sm:flex-row sm:items-center">
		<!-- Label (Visible on all screen sizes) -->
		<label for="email" class="font-lato text-sm font-medium text-white sm:w-auto">Email:</label>

		<!-- Input Field -->
		<input
			id="email"
			type="email"
			bind:value={email}
			placeholder="Enter your email"
			required
			class="focus:border-accent focus:ring-accent font-lato w-full rounded-lg border border-violet-200 bg-violet-200/20 p-3 text-white placeholder-white/70 focus:ring-2 focus:outline-none sm:flex-1"
			aria-required="true"
		/>

		<!-- Submit Button -->
		<button
			type="submit"
			class="bg-accent text-primary hover:bg-accent-dark focus:ring-accent font-montserrat flex items-center justify-center rounded-lg px-4 py-3 font-bold uppercase transition focus:ring-2 focus:outline-none sm:ml-2"
			aria-label="Join the waiting list"
			disabled={isLoading}
		>
			{#if isLoading}
				<svg
					class="mr-2 h-5 w-5 animate-spin"
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
			class="border-accent text-accent focus:ring-accent h-4 w-4 rounded"
		/>
		<label for="consent" class="font-lato text-sm text-white">
			I consent to receive emails about HarmoniQ updates and announcements.
		</label>
	</div>

	<!-- Success Message -->
	{#if isSubscribed}
		<p class="text-accent font-lato mt-3 text-center text-sm" role="alert" aria-live="polite">
			Thank you for subscribing!
		</p>
	{/if}
</form>
