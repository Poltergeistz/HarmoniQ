<script>
  import Nav from '../components/Nav.svelte';
  import Hero from '../components/Hero.svelte';
  import Problem from '../components/Problem.svelte';
  import Solution from '../components/Solution.svelte';
  import Demo from '../components/Demo.svelte';
  import FAQ from '../components/FAQ.svelte';
  import Footer from '../components/Footer.svelte';
  
  let email = '';
  let isSubscribed = false;

  const handleSubscription = () => {
    // You would connect this to a backend or service to handle subscriptions
    isSubscribed = true;
  };
</script>

<main>
  <Nav />
  <Hero {email} {isSubscribed} on:subscribe={handleSubscription} />
  <Problem />
  <Solution />
  <Demo />
  <FAQ />
  <Footer />
</main>
