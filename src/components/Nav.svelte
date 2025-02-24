<script>
  export let active = 'home';
  let isMobileMenuOpen = false;
</script>

<!-- Semantic <nav> element with ARIA landmark -->
<nav 
  class="bg-indigo-200/70 backdrop-blur-md text-lime-200 py-4 fixed top-0 left-0 w-full z-50"
  role="navigation"
  aria-label="Main Navigation"
>
  <div class="max-w-6xl mx-auto px-4 flex justify-between items-center">
    
    <!-- Logo as a clickable Home link -->
    <a href="#hero" class="flex items-center space-x-2" aria-label="Go to homepage">
      <span class="text-2xl font-bold">HarmoniQ</span>
    </a>

    <!-- Mobile Hamburger Menu Button -->
    <button 
      class="lg:hidden flex flex-col space-y-2 p-2" 
      aria-label="Toggle navigation menu" 
      on:click={() => isMobileMenuOpen = !isMobileMenuOpen}
    >
      <span class="block w-6 h-1 bg-lime-200 rounded-full"></span>
      <span class="block w-6 h-1 bg-lime-200 rounded-full"></span>
      <span class="block w-6 h-1 bg-lime-200 rounded-full"></span>
    </button>

    <!-- Navigation Menu -->
    <ul 
      class={`lg:flex flex-col lg:flex-row space-x-6 lg:space-x-6 lg:space-y-0 space-y-4 lg:block ${
        isMobileMenuOpen ? 'block' : 'hidden'
      }`}
      role="menu"
    >
      <li role="none">
        <a href="#hero" class="hover:underline focus:outline-none focus:ring-2 focus:ring-lime-400 px-2 py-1"
          role="menuitem" aria-current={active === 'home' ? 'page' : undefined}>
          Home
        </a>
      </li>
      <li role="none">
        <a href="#problem" class="hover:underline focus:outline-none focus:ring-2 focus:ring-lime-400 px-2 py-1"
          role="menuitem" aria-current={active === 'problem' ? 'page' : undefined}>
          Problem
        </a>
      </li>
      <li role="none">
        <a href="#solution" class="hover:underline focus:outline-none focus:ring-2 focus:ring-lime-400 px-2 py-1"
          role="menuitem" aria-current={active === 'solution' ? 'page' : undefined}>
          Solution
        </a>
      </li>
      <li role="none">
        <a href="#demo" class="hover:underline focus:outline-none focus:ring-2 focus:ring-lime-400 px-2 py-1"
          role="menuitem" aria-current={active === 'demo' ? 'page' : undefined}>
          Demo
        </a>
      </li>
      <li role="none">
        <a href="#faq" class="hover:underline focus:outline-none focus:ring-2 focus:ring-lime-400 px-2 py-1"
          role="menuitem" aria-current={active === 'faq' ? 'page' : undefined}>
          FAQ
        </a>
      </li>
      <li role="none">
        <a href="#footer" class="hover:underline focus:outline-none focus:ring-2 focus:ring-lime-400 px-2 py-1"
          role="menuitem" aria-current={active === 'legal' ? 'page' : undefined}>
          Legal
        </a>
      </li>
    </ul>
  </div>
</nav>
