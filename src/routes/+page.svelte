<script>
	import Nav from '../components/Nav.svelte';
	import Hero from '../components/Hero.svelte';
	import Problem from '../components/Problem.svelte';
	import Solution from '../components/Solution.svelte';
	import Demo from '../components/Demo.svelte';
	import FAQ from '../components/FAQ.svelte';
	import Reassurance from '../components/Reassurance.svelte';
	import Daily from '../components/Daily.svelte';
	import Footer from '../components/Footer.svelte';
	import ScrollToTop from '$lib/ScrollToTop.svelte';
</script>

<main>
	<Nav />
	<Hero />
	<Problem />
	<Solution />
	<Reassurance />
	<Daily />
	<Demo />
	<FAQ />
	<Footer />
	<ScrollToTop />
</main>
