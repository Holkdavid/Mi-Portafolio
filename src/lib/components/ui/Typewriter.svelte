<script lang="ts">
  import { onMount } from 'svelte';

  interface Props {
    words: string[];
  }

  let { words = [] }: Props = $props();

  let currentWordIndex = $state(0);
  let currentText = $state("");
  let isDeleting = $state(false);
  let typingSpeed = $state(100);

  onMount(() => {
    if (words.length === 0) return;
    let timer: number;
    
    const handleTyping = () => {
      const fullText = words[currentWordIndex];
      
      if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
        typingSpeed = 50;
      } else {
        currentText = fullText.substring(0, currentText.length + 1);
        typingSpeed = 100;
      }

      if (!isDeleting && currentText === fullText) {
        typingSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && currentText === "") {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        typingSpeed = 500;
      }

      timer = window.setTimeout(handleTyping, typingSpeed);
    };

    timer = window.setTimeout(handleTyping, typingSpeed);
    return () => window.clearTimeout(timer);
  });
</script>

<div class="h-10 sm:h-12 flex items-center pt-2">
  <p class="text-xl sm:text-2xl font-extrabold text-[var(--text)] tracking-tight bg-[var(--surface)]/30 border border-[var(--border)] px-3 py-1 rounded-[var(--radius-sm)]">
    {currentText}<span class="text-[var(--secondary)] animate-cursor-pulse ml-1">|</span>
  </p>
</div>
