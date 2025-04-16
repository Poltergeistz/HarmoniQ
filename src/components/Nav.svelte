<script>
	export let active = 'home';
	let isMobileMenuOpen = false;
</script>

<nav
	class="bg-primary/70 fixed top-0 left-0 z-50 w-full py-4 text-white backdrop-blur-md"
	aria-label="Main Navigation"
>
	<div class="mx-auto flex max-w-6xl items-center justify-between px-4">
		<!-- Logo -->
		<a href="#hero" class="flex items-center space-x-2" aria-label="Go to homepage">
			<span
				class="font-montserrat from-accent bg-gradient-to-r via-lime-100 to-white bg-clip-text text-2xl font-black text-transparent uppercase italic"
			>
				HarmoniQ
			</span>
		</a>

		<!-- Hamburger -->
		<button
			class="lg:hidden flex flex-col justify-center items-center p-2"
			on:click={() => (isMobileMenuOpen = !isMobileMenuOpen)}
			aria-label="Toggle navigation"
		>
			<span class="block h-0.5 w-5 rounded-full bg-lime-200 mb-1"></span>
			<span class="block h-0.5 w-5 rounded-full bg-lime-200 mb-1"></span>
			<span class="block h-0.5 w-5 rounded-full bg-lime-200"></span>
		</button>

		<!-- Menu -->
		<ul
			class={`text-xxs sm:text-xs lg:text-sm font-lato font-bold ${
				isMobileMenuOpen ? 'block' : 'hidden'
			} absolute top-full left-0 w-full bg-primary px-6 py-6 space-y-4 lg:static lg:flex lg:w-auto lg:space-y-0 lg:space-x-4 lg:bg-transparent lg:px-0 lg:py-0`}
			role="menu"
		>
			<li><a href="/#problem" class="nav-link" aria-current={active === 'problem' ? 'page' : undefined}>Why Off?</a></li>
			<li><a href="/#solution" class="nav-link" aria-current={active === 'solution' ? 'page' : undefined}>How It Helps</a></li>
			<li><a href="/#daily-flow" class="nav-link" aria-current={active === 'daily-flow' ? 'page' : undefined}>Daily Flow</a></li>
			<li><a href="/#reassurance" class="nav-link" aria-current={active === 'reassurance' ? 'page' : undefined}>For You?</a></li>
			<li><a href="/#demo" class="nav-link" aria-current={active === 'demo' ? 'page' : undefined}>Preview</a></li>
			<li><a href="/#faq" class="nav-link" aria-current={active === 'faq' ? 'page' : undefined}>FAQ</a></li>
		</ul>
	</div>

	<style>
		.nav-link {
			@apply px-2 py-1 hover:underline focus:outline-none focus:ring-2 focus:ring-lime-400 transition block text-center lg:inline;
		}
	</style>
</nav>
