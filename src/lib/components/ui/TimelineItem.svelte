<script lang="ts">
  interface Props {
    year: string;
    title: string;
    description: string;
    isLast?: boolean;
  }

  let { year, title, description, isLast = false }: Props = $props();
</script>

<div class="flex gap-5">
  <div class="flex flex-col items-center">
    <div class="w-4 h-4 rounded-full bg-[var(--primary)] shadow-glow shrink-0"></div>
    {#if !isLast}
      <div class="flex-1 w-px bg-[var(--border)]"></div>
    {/if}
  </div>

  <div class="pb-10">
    <span class="text-sm text-[var(--secondary)] font-semibold">
      {year}
    </span>
    <h3 class="text-xl font-semibold mt-1 text-[var(--text)]">
      {title}
    </h3>
    <p class="mt-2 text-[var(--text-secondary)] leading-relaxed">
      {description}
    </p>
  </div>
</div>
