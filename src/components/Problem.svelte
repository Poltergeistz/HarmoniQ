<script>
	import { fade } from 'svelte/transition';
	let revealed = false;
	function reveal() {
		if (!revealed) {
			revealed = true;
		}
	}
</script>
<!-- Section "Feeling out of sync" -->
<section id="problem" class="bg-primary px-4 py-16 text-white">
	<div class="relative">
		<!-- SVG Background -->
		<svg
			class="absolute top-0 left-0 -z-10 h-24 w-full md:h-32"
			viewBox="0 0 500 150"
			preserveAspectRatio="none"
		>
			<path d="M0,100 C150,200 350,0 500,100 L500,150 L0,150 Z" fill="rgb(229, 231, 235)">
				<animateTransform
					attributeName="transform"
					type="translate"
					values="0,0; -10,0; 0,0"
					dur="3s"
					repeatCount="indefinite"
				/>
			</path>
		</svg>
		<!-- Text Content -->
		<h2 class="relative mb-8 text-center text-2xl md:text-3xl font-black">
			FEELING OUT OF SYNC WITH YOUR WORKLOAD?
		</h2>
	</div>
	<p class="mx-auto my-8 max-w-2xl text-center italic">
		❝ As a wonder woman, your ambitions are limitless. But when productivity seems to fluctuate —
		when focus fades, energy dips, and creativity feels out of reach — it can be frustrating.❞
	</p>
	<h3 class="mb-10 text-center text-xl font-bold">THE HIDDEN CHALLENGE NO ONE TALKS ABOUT</h3>
	<!-- Section "Click to reveal" -->
	<div class="reveal-container mx-auto mb-16 max-w-2xl">
		<div
			class="relative cursor-pointer rounded-lg border-2 border-purple-300 overflow-hidden h-80 w-full"
			class:cursor-default={revealed}
			on:click={reveal}
		>
			<!-- Blurred background (without image) -->
			<div class="absolute inset-0 bg-gradient-to-br from-violet-200/70 to-violet-600/70" class:backdrop-blur-lg={!revealed}>
			</div>
			
			<!-- Content overlay -->
			<div class="relative z-10 h-full w-full flex items-center justify-center p-6">
				{#if !revealed}
					<p class="text-xl font-black text-accent bg-violet-800/30 px-6 py-3 rounded-lg">
						CLICK TO REVEAL
					</p>
				{:else}
					<div transition:fade class="bg-violet-900/80 p-6 rounded-lg h-full w-full flex flex-col justify-center">
						<p class="pb-4 text-lg">
							If you've ever blamed yourself for feeling burnt out, unmotivated, or unable to
							concentrate, here's the truth:
						</p>
						<ol class="space-y-2">
							<li><b>🔸 It's not you—it's biology</b></li>
							<li><b>🔸 Hormonal shifts impact mental clarity, stamina, and decision-making</b></li>
							<li><b>🔸 Yet, most productivity systems assume every day is the same</b></li>
						</ol>
						<p class="pt-4">
							The result? You're constantly pushing against your natural rhythm, making work feel
							harder than it should.
						</p>
					</div>
				{/if}
			</div>
		</div>
	</div>
	<h3 class="mb-6 text-center text-xl font-black text-accent md:text-2xl">
		WHAT IF YOUR WORK SCHEDULE WORKED WITH YOU — NOT AGAINST YOU?
	</h3>
</section>