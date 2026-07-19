<script lang="ts">
  import { siteConfig } from '$lib/data/site';

  interface Props {
    title?: string;
    description?: string;
    path?: string;
  }

  let { title, description, path = '/' }: Props = $props();

  let pageTitle = $derived(title ?? siteConfig.defaultTitle);
  let pageDescription = $derived(description ?? siteConfig.defaultDescription);
  let url = $derived(`${siteConfig.url}${path}`);
  let ogImage = $derived(`${siteConfig.url}${siteConfig.ogImage}`);
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  <link rel="canonical" href={url} />
  <meta name="robots" content="index, follow" />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:url" content={url} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:locale" content={siteConfig.locale} />
  <meta property="og:site_name" content={siteConfig.name} />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={pageTitle} />
  <meta name="twitter:description" content={pageDescription} />
  <meta name="twitter:image" content={ogImage} />
</svelte:head>
