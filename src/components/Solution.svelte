<script>
	import { BicepsFlexed, Sparkles, CalendarHeart } from '@lucide/svelte';
</script>

<!-- Section "Empowering your time" -->
<section id="solution" class="bg-primary px-2 py-10 text-white">
	<h2 class="font-montserrat my-8 text-center text-2xl font-black md:text-3xl">
		EMPOWERING <span class="text-accent">YOUR TIME</span>, HONORING
		<span class="text-accent">YOUR RHYTHM</span>
	</h2>
	<!-- Features grid -->
	<div class="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
		<!-- Feature 1 -->
		<div class="bg-secondary rounded-lg p-6">
			<div class="mb-4 flex justify-center">
				<span class="text-accent"><Sparkles /></span>
			</div>
			<h3 class="font-montserrat mb-2 text-center text-lg font-bold">
				PERSONALIZED RECOMMENDATIONS
			</h3>
			<p class="font-lato text-center text-sm">
				Receive task suggestions and productivity tips based on your hormonal cycle, ensuring you
				shine on any given day.
			</p>
		</div>
		<!-- Feature 2 -->
		<div class="bg-secondary rounded-lg p-6">
			<div class="mb-4 flex justify-center">
				<span class="text-accent"><CalendarHeart /></span>
			</div>
			<h3 class="font-montserrat mb-2 text-center text-lg font-bold">
				SEAMLESS CALENDAR INTEGRATION
			</h3>
			<p class="font-lato text-center text-sm">
				Sync directly with your existing calendar, organizing your schedule, assigning you work with
				your natural rhythm in mind.
			</p>
		</div>
		<!-- Feature 3 - Full width on md screens -->
		<div
			class="bg-secondary flex flex-col items-center gap-6 rounded-lg p-6 md:col-span-2 md:flex-row"
		>
			<div class="flex flex-1 flex-col">
				<div class="mb-4 flex justify-center">
					<span class="text-accent"><BicepsFlexed /></span>
				</div>
				<h3 class="font-montserrat mb-2 text-center text-lg font-bold">USE YOUR BODY TO THRIVE</h3>
				<p class="font-lato text-center text-sm">
					Every woman has ups and downs. It's okay! HarmoniQ understands that and aligns with your
					cycle to maximize your goals.
				</p>
			</div>
			<div class="flex flex-1 justify-center rounded-xl bg-violet-100">
				<img src="smartphone-exemple.svg" alt="smartphone" class="max-h-64" />
			</div>
		</div>
	</div>
</section>
