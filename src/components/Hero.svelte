<script lang="ts">
	import Form from '$lib/Form.svelte'; // Import the form component
	let email = '';
	let source = '';
	let isSubscribed = false;
</script>
<section
	id="hero"
	class="bg-primary relative flex min-h-screen flex-col items-center md:items-start justify-center text-white md:pl-40 px-4 md:px-0"
	aria-labelledby="hero-heading"
>
	<div class="absolute grid w-full max-w-2xl z-10 text-center md:text-left pr-0 md:pr-8">
		<h1 id="hero-heading" class="font-montserrat mb-8 text-3xl font-black uppercase sm:text-6xl leading-tight">
			Unlock Your Full Potential with <span
				class="from-accent bg-gradient-to-r via-lime-100 to-white bg-clip-text text-transparent italic"
				>HarmoniQ</span
			>
		</h1>
		<Form bind:email bind:source bind:isSubscribed />
	</div>
	<!-- Container for the grid layout with two columns -->
	<div class="relative grid w-full max-w-6xl grid-cols-1 md:grid-cols-2 items-center">
		<!-- Content (title and form) in the first column -->
		<div class="relative z-10 text-center md:text-left">
			<!-- The content here, like text or other elements -->
		</div>
		<!-- Image in the second column -->
		<div class="relative hidden md:block">
			<img
				class="absolute top-1/2 left-1/2 z-0 h-128 w-128 -translate-x-1/2 -translate-y-1/2"
				src="/unlock_true_potential.svg"
				alt="women embracing her true potential, rays of energy are casting around her"
			/>
		</div>
	</div>
</section>