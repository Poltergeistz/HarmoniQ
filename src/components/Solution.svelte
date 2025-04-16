<script>
	import { onMount } from 'svelte';

	let isVisible = false;

	onMount(() => {
		isVisible = true;
	});
</script>

<section
	id="solution"
	class="bg-primary flex min-h-screen flex-col justify-center px-4 py-20 text-white"
>
	<h2
		class="font-montserrat fade-up mb-4 text-center text-2xl font-black md:text-3xl"
		class:fade-up={isVisible}
	>
		EMPOWERING <span class="text-accent">YOUR TIME</span>, HONORING
		<span class="text-accent">YOUR RHYTHM</span>
	</h2>

	<p
		class="font-lato fade-up fade-delay-1 mx-auto mb-6 max-w-xl text-center text-sm italic"
		class:fade-up={isVisible}
	>
		No overwhelm. No shame. Just support — tuned to your inner compass.
	</p>

	<div class="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
		<!-- Feature 1 -->
		<div
			class="bg-secondary fade-up fade-delay-1 flex h-full max-h-[420px] flex-col justify-between overflow-hidden rounded-xl p-6"
			class:fade-up={isVisible}
		>
			<h3 class="font-montserrat mb-2 text-center text-lg font-black">Daily coaching tips.</h3>
			<p class="font-lato mb-4 text-center text-sm">
				Receive short, loving nudges aligned with your current energy phase: focus cues, mindset
				boosts, and cycle-specific tips — like a wise friend who knows your rhythm.
			</p>
			<div class="flex justify-center">
				<img
					src="praise.svg"
					alt="Flow with grace, your energy is sacred."
					class="max-h-40 w-auto"
				/>
			</div>
		</div>

		<!-- Feature 2 with image as soft background -->
		<div
			class="bg-secondary fade-up fade-delay-2 relative flex h-full max-h-[420px] flex-col justify-between overflow-hidden rounded-xl p-6"
			class:fade-up={isVisible}
		>
			<!-- Background image (soft and behind) -->
			<img
				src="surf_calendar.svg"
				alt="Calendar synced"
				class="pointer-events-none absolute inset-0 h-full w-full object-contain opacity-10"
			/>

			<!-- Content overlay -->
			<div class="relative z-10">
				<h3 class="font-montserrat mb-2 text-center text-lg font-black">
					Synced to your real flow.
				</h3>
				<p class="font-lato text-center text-sm">
					Integrate with your calendar and let HarmoniQ gently guide your schedule — suggesting the
					best types of tasks for each cycle phase, so you’re never forcing energy that isn’t there.
				</p>
			</div>
		</div>

		<!-- Feature 3 -->
		<div
			class="bg-secondary fade-up fade-delay-3 flex h-full max-h-[420px] flex-col items-center justify-between gap-4 overflow-hidden rounded-xl p-6 md:col-span-2 md:flex-row"
			class:fade-up={isVisible}
		>
			<div class="flex flex-1 flex-col justify-center">
				<h3 class="font-montserrat mb-2 text-center text-lg font-black">
					Your rhythm isn’t a <span class="italic">weakness</span>,<br />
					<span class="text-primary font-black uppercase">it’s your edge.</span>
				</h3>
				<p class="font-lato text-center text-sm">
					You’re not made to operate the same way every day. HarmoniQ helps you turn your natural
					rhythm into a business advantage — so you can lead with flow, not friction.
				</p>
			</div>

			<img
				src="thrive_with_your_body.svg"
				alt="women thriving"
				class="h-full w-auto object-contain"
			/>
		</div>
	</div>
</section>
