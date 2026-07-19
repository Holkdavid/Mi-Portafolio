<script lang="ts">
  import { profile } from '$lib/data/profile';
  import { roles } from '$lib/data/roles';
  import { socials } from '$lib/data/socials';
  import { siteConfig } from '$lib/data/site';

  const github = socials.find((s) => s.platform === 'GitHub')?.url;
  const linkedin = socials.find((s) => s.platform === 'LinkedIn')?.url;
  const email = socials.find((s) => s.platform === 'Email')?.url.replace('mailto:', '');

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.fullName,
    jobTitle: roles[0],
    url: siteConfig.url,
    image: `${siteConfig.url}${profile.avatar}`,
    email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: profile.city
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: profile.university
    },
    sameAs: [github, linkedin].filter(Boolean)
  };

  const jsonLdScript = `<script type="application/ld+json">${JSON.stringify(personSchema)}<\/script>`;
</script>

<svelte:head>
  {@html jsonLdScript}
</svelte:head>
