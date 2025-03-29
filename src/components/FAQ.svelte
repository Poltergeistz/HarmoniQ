<script>
	let activeIndex = null; // Track the currently active accordion item
</script>

<section id="faq" class="bg-primary py-20">
	<div class="mx-auto max-w-3xl px-4">
		<h2 class="font-montserrat mb-12 text-center text-3xl font-black text-white uppercase">
			Frequently Asked Questions
		</h2>

		<div class="space-y-4">
			<!-- Accordion Item 1 -->
			<div>
				<button
					class="flex w-full items-center justify-between border-b border-violet-300 bg-transparent p-4 text-white uppercase"
					aria-expanded={activeIndex === 0 ? 'true' : 'false'}
					aria-controls="faq-1"
					on:click={() => (activeIndex = activeIndex === 0 ? null : 0)}
				>
					<h3 class="font-montserrat text-sm font-semibold md:text-lg lg:text-lg">
						What is HarmoniQ?
					</h3>
					<span
						class="transform transition-transform duration-200"
						style:transform={activeIndex === 0 ? 'rotate(0deg)' : 'rotate(-90deg)'}
					>
						&#9660; <!-- Caret pointing down -->
					</span>
				</button>
				{#if activeIndex === 0}
					<div id="faq-1" class="p-4 text-left text-sm">
						<p class="font-lato text-white">
							HarmoniQ is a tool that syncs your productivity schedule with your menstrual cycle,
							helping you optimize your tasks and work in harmony with your natural rhythm.
						</p>
					</div>
				{/if}
			</div>

			<!-- Accordion Item 2 -->
			<div>
				<button
					class="flex w-full items-center justify-between border-b border-violet-300 bg-transparent p-4 text-white uppercase"
					aria-expanded={activeIndex === 1 ? 'true' : 'false'}
					aria-controls="faq-2"
					on:click={() => (activeIndex = activeIndex === 1 ? null : 1)}
				>
					<h3 class="font-montserrat text-sm font-semibold md:text-lg lg:text-lg">
						How do I join the waiting list?
					</h3>
					<span
						class="transform transition-transform duration-200"
						style:transform={activeIndex === 1 ? 'rotate(0deg)' : 'rotate(-90deg)'}
					>
						&#9660; <!-- Caret pointing down -->
					</span>
				</button>
				{#if activeIndex === 1}
					<div id="faq-2" class="p-4 text-left text-sm">
						<p class="font-lato text-white">
							Simply enter <a href="#hero" class="text-accent font-bold hover:underline"
								>your email</a
							> in the form at the top of the page to join the waiting list and get notified when HarmoniQ
							launches!
						</p>
					</div>
				{/if}
			</div>

			<!-- Accordion Item 3 -->
			<div>
				<button
					class="flex w-full items-center justify-between border-b border-violet-300 bg-transparent p-4 text-white uppercase"
					aria-expanded={activeIndex === 2 ? 'true' : 'false'}
					aria-controls="faq-3"
					on:click={() => (activeIndex = activeIndex === 2 ? null : 2)}
				>
					<h3 class="font-montserrat text-sm font-semibold md:text-lg lg:text-lg">
						When will HarmoniQ be available?
					</h3>
					<span
						class="transform transition-transform duration-200"
						style:transform={activeIndex === 2 ? 'rotate(0deg)' : 'rotate(-90deg)'}
					>
						&#9660; <!-- Caret pointing down -->
					</span>
				</button>
				{#if activeIndex === 2}
					<div id="faq-3" class="p-4 text-left text-sm">
						<p class="font-lato text-white">
							HarmoniQ is launching soon! Make sure to join the waiting list to stay updated on the
							release date and get early access.
						</p>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>
