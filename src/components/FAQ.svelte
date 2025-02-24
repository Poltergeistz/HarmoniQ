<script>
  let activeIndex = null; // Track the currently active accordion item
</script>

<section id="faq" class="py-16 bg-white text-center">
  <div class="max-w-3xl mx-auto px-4">

    <h2 class="text-3xl font-bold mb-8 text-indigo-700">Frequently Asked Questions</h2>
    
    <div class="space-y-4">
      <!-- Accordion Item 1 -->
      <div>
        <button 
          class="flex justify-between items-center w-full bg-transparent text-indigo-700 p-4 border-b"
          aria-expanded={activeIndex === 0 ? 'true' : 'false'}
          aria-controls="faq-1"
          on:click={() => activeIndex = activeIndex === 0 ? null : 0}
        >
          <h3 class="text-lg font-semibold">What is HarmoniQ?</h3>
          <span class="transform transition-transform duration-200" 
                style:transform={activeIndex === 0 ? 'rotate(90deg)' : 'rotate(0deg)'}>
            &#9660; <!-- Caret pointing down -->
          </span>
        </button>
        {#if activeIndex === 0}
          <div id="faq-1" class="text-left p-4 text-sm">
            <p>HarmoniQ is a tool that syncs your productivity schedule with your menstrual cycle, helping you optimize your tasks and work in harmony with your natural rhythm.</p>
          </div>
        {/if}
      </div>

      <!-- Accordion Item 2 -->
      <div>
        <button 
          class="flex justify-between items-center w-full bg-transparent text-indigo-700 p-4 border-b"
          aria-expanded={activeIndex === 1 ? 'true' : 'false'}
          aria-controls="faq-2"
          on:click={() => activeIndex = activeIndex === 1 ? null : 1}
        >
          <h3 class="text-lg font-semibold">How do I join the waiting list?</h3>
          <span class="transform transition-transform duration-200" 
                style:transform={activeIndex === 1 ? 'rotate(90deg)' : 'rotate(0deg)'}>
            &#9660; <!-- Caret pointing down -->
          </span>
        </button>
        {#if activeIndex === 1}
          <div id="faq-2" class="text-left p-4 text-sm">
            <p>Simply enter <a href="#hero" class="text-indigo-700 hover:underline">your email</a> in the form at the top of the page to join the waiting list and get notified when HarmoniQ launches!</p>
          </div>
        {/if}
      </div>

      <!-- Accordion Item 3 -->
      <div>
        <button 
          class="flex justify-between items-center w-full bg-transparent text-indigo-700 p-4 border-b"
          aria-expanded={activeIndex === 2 ? 'true' : 'false'}
          aria-controls="faq-3"
          on:click={() => activeIndex = activeIndex === 2 ? null : 2}
        >
          <h3 class="text-lg font-semibold">When will HarmoniQ be available?</h3>
          <span class="transform transition-transform duration-200" 
                style:transform={activeIndex === 2 ? 'rotate(90deg)' : 'rotate(0deg)'}>
            &#9660; <!-- Caret pointing down -->
          </span>
        </button>
        {#if activeIndex === 2}
          <div id="faq-3" class="text-left p-4 text-sm">
            <p>HarmoniQ is launching soon! Make sure to join the waiting list to stay updated on the release date and get early access.</p>
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>
