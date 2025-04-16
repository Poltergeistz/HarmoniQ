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
<section id="problem" class="bg-primary text-white px-4 min-h-screen flex flex-col justify-center">
<div class="relative justify-center">
		<svg
			width="1118"
			height="75"
			viewBox="0 0 1118 75"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="absolute bottom-1 z-0 hidden w-full max-w-full object-contain lg:block"
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
		<h2 class="font-montserrat text-center text-xl sm:text-3xl font-black mb-4 relative z-10 md:text-3xl uppercase">
			You’re Not Unmotivated. You’re Misaligned.
		</h2>
	</div>

	<p class="font-lato text-center text-sm italic text-white/80 max-w-md mx-auto my-8">
		❝ Your energy isn’t random — it’s rhythmic. Yet, most systems ignore that. ❞
	</p>

	<!-- Reveal Block -->
	<div class="mx-auto mb-8 max-w-md w-full">
		<div
			class="relative h-60 cursor-pointer overflow-hidden rounded-xl border border-purple-300"
			on:click={reveal}
			class:cursor-default={revealed}
		>
			<div class="absolute inset-0 bg-gradient-to-br from-violet-200/70 to-violet-600/70" class:backdrop-blur-lg={!revealed}></div>

			<div class="relative z-10 flex h-full w-full items-center justify-center p-4">
				{#if !revealed}
					<p class="text-accent rounded-lg bg-violet-800/30 px-4 py-2 text-sm font-bold">
						CLICK TO REVEAL
					</p>
				{:else}
					<div transition:fade class="font-lato flex flex-col justify-center rounded-lg bg-violet-900/80 p-4 text-xs sm:text-sm">
						<p class="pb-2">Some days you glow. Others, you can’t focus no matter how hard you try.</p>
						<ul class="list-disc list-inside space-y-1">
							<li><b>That’s not laziness. It’s biology.</b></li>
							<li><b>Hormones shape focus, mood, and clarity.</b></li>
							<li><b>Linear systems don’t get that. HarmoniQ does.</b></li>
						</ul>
						<p class="pt-2">You were built to flow — not force.</p>
					</div>
				{/if}
			</div>
		</div>
	</div>

	<h3 class="text-accent font-montserrat text-center text-base sm:text-lg font-black uppercase">
		Meet your cycle-aware productivity coach.
	</h3>
</section>
