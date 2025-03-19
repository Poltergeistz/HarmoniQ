<script>
	export let active = 'home';
	let isMobileMenuOpen = false;
</script>

<!-- Semantic <nav> element with ARIA landmark -->
<nav
	class="fixed top-0 left-0 z-50 w-full bg-primary/70 py-4 text-white backdrop-blur-md"
	aria-label="Main Navigation"
>
	<div class="mx-auto flex max-w-6xl items-center justify-between px-4">
		<!-- Logo as a clickable Home link -->
		<a href="#hero" class="flex items-center space-x-2" aria-label="Go to homepage">
			<span class="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-accent via-lime-100 to-white italic uppercase">HarmoniQ</span>
		</a>

		<!-- Mobile Hamburger Menu Button -->
		<button
			class="flex flex-col space-y-2 p-2 lg:hidden"
			aria-label="Toggle navigation menu"
			on:click={() => (isMobileMenuOpen = !isMobileMenuOpen)}
		>
			<span class="block h-1 w-6 rounded-full bg-lime-200"></span>
			<span class="block h-1 w-6 rounded-full bg-lime-200"></span>
			<span class="block h-1 w-6 rounded-full bg-lime-200"></span>
		</button>

		<!-- Navigation Menu -->
		<ul
			class={`flex-col space-y-4 space-x-6 lg:block lg:flex lg:flex-row lg:space-y-0 lg:space-x-6 ${
				isMobileMenuOpen ? 'block' : 'hidden'
			}`}
			role="menu"
		>
			<li role="none">
				<a
					href="#hero"
					class="px-2 py-1 hover:underline focus:ring-2 focus:ring-lime-400 focus:outline-none font-bold"
					role="menuitem"
					aria-current={active === 'home' ? 'page' : undefined}
				>
					Home
				</a>
			</li>
			<li role="none">
				<a
					href="#problem"
					class="px-2 py-1 hover:underline focus:ring-2 focus:ring-lime-400 focus:outline-none font-bold"
					role="menuitem"
					aria-current={active === 'problem' ? 'page' : undefined}
				>
					Problem
				</a>
			</li>
			<li role="none">
				<a
					href="#solution"
					class="px-2 py-1 hover:underline focus:ring-2 focus:ring-lime-400 focus:outline-none font-bold"
					role="menuitem"
					aria-current={active === 'solution' ? 'page' : undefined}
				>
					Solution
				</a>
			</li>
			<li role="none">
				<a
					href="#demo"
					class="px-2 py-1 hover:underline focus:ring-2 focus:ring-lime-400 focus:outline-none font-bold"
					role="menuitem"
					aria-current={active === 'demo' ? 'page' : undefined}
				>
					Demo
				</a>
			</li>
			<li role="none">
				<a
					href="#faq"
					class="px-2 py-1 hover:underline focus:ring-2 focus:ring-lime-400 focus:outline-none font-bold"
					role="menuitem"
					aria-current={active === 'faq' ? 'page' : undefined}
				>
					FAQ
				</a>
			</li>
		</ul>
	</div>
</nav>
