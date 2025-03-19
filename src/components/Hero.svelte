<script lang="ts">
	import Form from '$lib/Form.svelte'; // Import the form component
	let email = '';
	let source = '';
	let isSubscribed = false;
</script>

<section
	id="hero"
	class="relative flex min-h-screen flex-col items-center justify-center bg-primary px-6 text-white"
	aria-labelledby="hero-heading"
>
	<!-- Container for the target and centered content -->
	<div class="relative flex w-full max-w-6xl flex-col items-center">
		<!-- Target SVG positioned absolutely and centered -->
		<img
			class="absolute top-1/2 left-1/2 z-0 h-128 w-128 -translate-x-1/2 -translate-y-1/2"
			src="/target.svg"
			alt="Target"
		/>
		<!-- Content container that will be centered over the target -->
		<div class="relative z-10 text-center">
			<!-- Accessible heading -->
			<h1 id="hero-heading" class="mb-8 text-3xl font-black sm:text-4xl font-montserrat uppercase">
				Unlock Your Full Potential with <span class="bg-clip-text text-transparent bg-gradient-to-r from-accent via-lime-100 to-white italic">HarmoniQ</span>
			</h1>

			<Form bind:email bind:source bind:isSubscribed />
		</div>
	</div>
</section>
