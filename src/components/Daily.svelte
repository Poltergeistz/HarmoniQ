<script>
	import { Sparkles, CalendarDays, PenLine, Focus } from '@lucide/svelte';
</script>

<section
	id="daily-flow"
	class="bg-primary flex min-h-screen flex-col justify-center px-4 py-20 text-white"
>
	<h2 class="font-montserrat mb-6 text-center text-2xl font-black uppercase md:text-3xl">
		Your Daily Flow with
		<span
			class="text-accent bg-gradient-to-r from-lime-100 to-white bg-clip-text text-transparent italic"
		>
			HarmoniQ
		</span>
	</h2>

	<p class="font-lato mx-auto mb-12 max-w-xl text-center text-sm text-white/90 italic sm:text-base">
		A coach that whispers — not pushes. More than a planner. More than a tracker. Your cycle-aligned
		emotional guide — in your pocket.
	</p>

	<!-- Bento Grid -->
	<div class="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 md:grid-cols-4">
		<!-- Card 1 -->
		<div
			class="bg-secondary flex flex-col justify-between rounded-2xl p-6 shadow-md transition hover:scale-[1.02]"
		>
			<Focus class="text-accent mx-auto mb-4 h-6 w-6" />
			<h3 class="font-montserrat mb-2 text-center text-sm font-bold tracking-wide uppercase">
				Focus Suggestion
			</h3>
			<p class="font-lato text-center text-xs text-white/90">
				Get daily prompts tuned to your current phase — spark clarity, not overload.
			</p>
		</div>

		<!-- Card 2 -->
		<div
			class="bg-secondary flex flex-col justify-between rounded-2xl p-6 shadow-md transition hover:scale-[1.02]"
		>
			<Sparkles class="text-accent mx-auto mb-4 h-6 w-6" />
			<h3 class="font-montserrat mb-2 text-center text-sm font-bold tracking-wide uppercase">
				Motivation
			</h3>
			<p class="font-lato text-center text-xs text-white/90">
				Receive gentle encouragement synced to your energy — no push, just presence.
			</p>
		</div>

		<!-- Card 3 -->
		<div
			class="bg-secondary flex flex-col justify-between rounded-2xl p-6 shadow-md transition hover:scale-[1.02]"
		>
			<CalendarDays class="text-accent mx-auto mb-4 h-6 w-6" />
			<h3 class="font-montserrat mb-2 text-center text-sm font-bold tracking-wide uppercase">
				Cycle-Aware Calendar
			</h3>
			<p class="font-lato text-center text-xs text-white/90">
				Plan with rhythm. Get suggestions that match your natural tempo.
			</p>
		</div>

		<!-- Card 4 -->
		<div
			class="bg-secondary flex flex-col justify-between rounded-2xl p-6 shadow-md transition hover:scale-[1.02]"
		>
			<PenLine class="text-accent mx-auto mb-4 h-6 w-6" />
			<h3 class="font-montserrat mb-2 text-center text-sm font-bold tracking-wide uppercase">
				Check-In
			</h3>
			<p class="font-lato text-center text-xs text-white/90">
				Stay centered with guided reflection. You’re allowed to pause — and reset.
			</p>
		</div>
	</div>

	<!-- CTA -->
	<div class="mt-14 text-center">
		<a
			href="/#hero"
			class="bg-accent hover:bg-accent/90 text-primary font-montserrat inline-block rounded-xl px-6 py-3 text-sm font-bold tracking-wide shadow-lg transition sm:text-base"
		>
			Join the Waitlist — and Flow
		</a>
	</div>
</section>
