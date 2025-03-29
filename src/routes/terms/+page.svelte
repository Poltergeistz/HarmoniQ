<script>
	import Nav from '../../components/Nav.svelte';
	import Footer from '../../components/Footer.svelte';
</script>

<Nav />

<section class="bg-primary flex min-h-screen items-center justify-center py-12">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<h1 class="mb-4 text-3xl font-bold text-white">Terms of Service</h1>
		<p class="mb-6 text-sm text-lime-400">Last Updated: February 2025</p>

		<h2 class="mb-2 text-xl font-semibold text-white">1. Introduction</h2>
		<p class="mb-4 text-white">By using our services, you agree to these terms.</p>

		<h2 class="mb-2 text-xl font-semibold text-white">2. User Responsibilities</h2>
		<p class="mb-4 text-white">
			You agree to use our platform lawfully and not to misuse our services.
		</p>

		<h2 class="mb-2 text-xl font-semibold text-white">3. Data Usage</h2>
		<p class="mb-4 text-white">
			We collect anonymized data to enhance our service. See our
			<a href="/privacy" class="text-accent underline">Privacy Policy</a>.
		</p>

		<h2 class="mb-2 text-xl font-semibold text-white">4. Limitation of Liability</h2>
		<p class="mb-4 text-white">
			We are not responsible for any indirect damages caused by using our platform.
		</p>

		<h2 class="mb-2 text-xl font-semibold text-white">5. Changes to Terms</h2>
		<p class="mb-4 text-white">
			We may update these terms. Continued use means acceptance of changes.
		</p>

		<h2 class="mb-2 text-xl font-semibold text-white">6. Contact</h2>
		<p class="text-white">
			For questions, reach out to us at
			<a href="mailto:support@example.com" class="text-white underline">support@harmoniq.site.com</a
			>.
		</p>
	</div>
</section>

<Footer />
