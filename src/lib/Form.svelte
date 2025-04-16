<script lang="ts">
	export let email: string = '';
	export let source: string = '';
	export let isSubscribed: boolean = false;
	let isLoading: boolean = false;
	let isConsentGiven: boolean = false;
	
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
				body: JSON.stringify({ email, source, consent: isConsentGiven })
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
	class="mx-auto w-full max-w-full pt-8"
>
	<div class="flex flex-col md:flex-row rounded-lg border-2 overflow-hidden bg-violet-300/30 shadow-lg border-accent backdrop-blur-md">
		<!-- Section WAITLIST -->
		<div class="text-white px-6 py-4 flex items-center justify-center md:justify-start font-black font-montserrat uppercase text-lg md:border-r-2 border-b-2 md:border-b-0 border-accent">
			WAITLIST
		</div>
		
		<!-- Section Email -->
		<div class="flex flex-col px-4 py-2 flex-grow">
			<label for="email" class="text-white text-sm font-lato font-black mb-1">Email</label>
			<input
				id="email"
				type="email"
				bind:value={email}
				placeholder="isha@wonder.ly"
				required
				class="w-full px-3 py-2 bg-violet-300 bg-opacity-50 text-white placeholder-white placeholder-opacity-80 focus:outline-none"
				aria-required="true"
			/>
			
			<!-- Consent -->
			<div class="flex items-center mt-1">
				<input
					id="consent"
					type="checkbox"
					bind:checked={isConsentGiven}
					required
					class="h-4 w-4 rounded mr-2 cursor-pointer"
				/>
				<label for="consent" class="text-white text-sm">
					I consent to recieve emails about HarmoniQ
				</label>
			</div>
		</div>
		
		<!-- Button JOIN -->
		<button
			type="submit"
			class="bg-accent font-black font-montserrat text-primary px-8 py-4 text-lg cursor-pointer w-full md:w-auto"
			aria-label="Join the waiting list"
			disabled={isLoading}
		>
			{#if isLoading}
				<svg
					class="inline-block mr-1 h-4 w-4 animate-spin"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
					<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0"></path>
				</svg>
				...
			{:else}
				JOIN
			{/if}
		</button>
	</div>
	
	<!-- Success -->
	{#if isSubscribed}
		<p class="text-lime-200 mt-3 text-center text-sm" role="alert" aria-live="polite">
			Thank you for subscribing!
		</p>
	{/if}
</form>