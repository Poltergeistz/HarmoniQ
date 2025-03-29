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
<section id="problem" class="bg-primary px-4 pt-18 text-white">
	<div class="relative justify-center">
		<svg
			width="1118"
			height="75"
			viewBox="0 0 1118 75"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="absolute bottom-1 z-0 w-full max-w-full object-contain hidden lg:block"
			alt="Workflow Wave"
		>
			<path
				id="wave-path"
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M0 67.0137L6 65.5616C12 64.1096 23 61.4475 35 52.0091C47 42.5707 58 26.3561 70 19.5798C82 12.8035 93 15.4656 105 23.694C116 31.6803 128 45.2328 140 42.5707C151 39.9086 163 21.0319 175 18.3698C186 15.4656 198 29.0182 210 34.5844C221 39.9086 233 37.2465 245 39.9086C256 42.5707 268 50.799 280 45.2328C291 39.9086 303 21.0319 314 11.5935C326 2.15511 338 2.15511 349 4.81722C361 7.47932 373 12.8035 384 21.0319C396 29.0182 408 39.9086 419 46.6849C431 53.4611 443 56.1232 454 47.8949C466 39.9086 477 21.0319 489 10.1414C501 -0.749004 512 -3.41111 524 4.81722C536 12.8035 547 31.6803 559 34.3424C571 37.2465 582 23.694 594 27.8081C606 31.6803 617 53.4611 629 57.3333C641 61.4475 652 47.8949 664 41.1187C675 34.5844 687 34.5844 699 34.5844C710 34.5844 722 34.5844 734 33.1323C745 31.6803 757 29.0182 769 22.2419C780 15.4656 792 4.81722 804 3.36516C815 2.15511 827 10.1414 839 23.694C850 37.2465 862 56.1232 873 54.6712C885 53.4611 897 31.6803 908 23.694C920 15.4656 932 21.0319 943 21.0319C955 21.0319 967 15.4656 978 14.2556C990 12.8035 1002 15.4656 1013 23.694C1025 31.6803 1036 45.2328 1048 45.2328C1060 45.2328 1071 31.6803 1083 33.1323C1095 34.5844 1106 50.799 1112 58.7854L1118 67.0137V75H1112C1106 75 1095 75 1083 75C1071 75 1060 75 1048 75C1036 75 1025 75 1013 75C1002 75 990 75 978 75C967 75 955 75 943 75C932 75 920 75 908 75C897 75 885 75 873 75C862 75 850 75 839 75C827 75 815 75 804 75C792 75 780 75 769 75C757 75 745 75 734 75C722 75 710 75 699 75C687 75 675 75 664 75C652 75 641 75 629 75C617 75 606 75 594 75C582 75 571 75 559 75C547 75 536 75 524 75C512 75 501 75 489 75C477 75 466 75 454 75C443 75 431 75 419 75C408 75 396 75 384 75C373 75 361 75 349 75C338 75 326 75 314 75C303 75 291 75 280 75C268 75 256 75 245 75C233 75 221 75 210 75C198 75 186 75 175 75C163 75 151 75 140 75C128 75 116 75 105 75C93 75 82 75 70 75C58 75 47 75 35 75C23 75 12 75 6 75H0V67.0137Z"
				fill="#A289FC"
			/>
		</svg>

		<!-- Text Content -->
		<h2 class="font-montserrat relative z-10 mb-8 text-center text-2xl font-black md:text-3xl">
			FEELING OUT OF SYNC WITH YOUR WORKLOAD?
		</h2>
	</div>

	<p class="font-lato mx-auto my-8 max-w-2xl text-center text-xs italic sm:text-base">
		❝ As a wonder woman, your ambitions are limitless. But when productivity seems to fluctuate —
		when focus fades, energy dips, and creativity feels out of reach — it can be frustrating.❞
	</p>

	<h3 class="font-montserrat mb-10 text-center text-xl font-bold sm:text-2xl">
		THE HIDDEN CHALLENGE NO ONE TALKS ABOUT
	</h3>

	<!-- Section "Click to reveal" -->
	<div class="reveal-container mx-auto mb-16 max-w-2xl">
		<div
			class="relative h-80 w-full cursor-pointer overflow-hidden rounded-lg border-2 border-purple-300"
			class:cursor-default={revealed}
			on:click={reveal}
		>
			<!-- Blurred background (without image) -->
			<div
				class="absolute inset-0 bg-gradient-to-br from-violet-200/70 to-violet-600/70"
				class:backdrop-blur-lg={!revealed}
			></div>

			<!-- Content overlay -->
			<div class="relative z-10 flex h-full w-full items-center justify-center p-6">
				{#if !revealed}
					<p class="text-accent rounded-lg bg-violet-800/30 px-6 py-3 text-xl font-black">
						CLICK TO REVEAL
					</p>
				{:else}
					<div
						transition:fade
						class="font-lato flex h-full w-full flex-col justify-center rounded-lg bg-violet-900/80 p-6"
					>
						<p class="pb-4 text-xs sm:text-lg">
							If you've ever blamed yourself for feeling burnt out, unmotivated, or unable to
							concentrate, here's the truth:
						</p>
						<ol class="space-y-2 text-xs sm:text-base">
							<li><b>🔸 It's not you—it's biology</b></li>
							<li><b>🔸 Hormonal shifts impact mental clarity, stamina, and decision-making</b></li>
							<li><b>🔸 Yet, most productivity systems assume every day is the same</b></li>
						</ol>
						<p class="pt-4 text-xs sm:text-base">
							The result? You're constantly pushing against your natural rhythm, making work feel
							harder than it should.
						</p>
					</div>
				{/if}
			</div>
		</div>
	</div>

	<h3 class="text-accent font-montserrat pb-4 text-center text-xl font-black md:text-2xl">
		WHAT IF YOUR WORK SCHEDULE WORKED WITH YOU — NOT AGAINST YOU?
	</h3>
</section>
