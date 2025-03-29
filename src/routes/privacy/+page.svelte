<script>
	import Nav from '../../components/Nav.svelte';
	import Footer from '../../components/Footer.svelte';
</script>

<Nav />

<section class="bg-primary flex min-h-screen items-center justify-center py-12">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<h1 class="mb-4 text-3xl font-bold text-white">Privacy Policy</h1>
		<p class="mb-6 text-sm text-lime-400">Last Updated: February 2025</p>

		<h2 class="mb-2 text-xl font-semibold text-white">1. Introduction</h2>
		<p class="mb-4 text-white">
			We value your privacy. This policy explains how we collect, use, and protect your information.
		</p>

		<h2 class="mb-2 text-xl font-semibold text-white">2. Data Collection</h2>
		<p class="mb-4 text-white">
			We only collect anonymized data to improve our service. We do not share or sell your
			information to third parties.
		</p>

		<h2 class="mb-2 text-xl font-semibold text-white">3. Use of Data</h2>
		<ul class="mb-4 list-inside list-disc text-white">
			<li>To improve our services</li>
			<li>To provide customer support</li>
			<li>To analyze trends and enhance user experience</li>
		</ul>

		<h2 class="mb-2 text-xl font-semibold text-white">4. Your Rights</h2>
		<p class="mb-4 text-white">
			You have the right to request data deletion, access your information, and control your privacy
			settings.
		</p>

		<h2 class="mb-2 text-xl font-semibold text-white">5. Contact</h2>
		<p class="text-white">
			If you have any questions about this policy, contact us at <a
				href="mailto:support@harmoniq.site.com"
				class="text-accent underline">support@harmoniq.site.com</a
			>.
		</p>
	</div>
</section>

<Footer />
