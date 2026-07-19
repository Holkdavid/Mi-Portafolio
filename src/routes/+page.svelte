<script lang="ts">
  import Seo from '$lib/components/seo/Seo.svelte';
  import PersonJsonLd from '$lib/components/seo/PersonJsonLd.svelte';
  import Hero from '$lib/components/sections/Hero.svelte';
  import StatsBand from '$lib/components/sections/StatsBand.svelte';
  import About from '$lib/components/sections/About.svelte';
  import Skills from '$lib/components/sections/Skills.svelte';
  import CurrentlyLearning from '$lib/components/sections/CurrentlyLearning.svelte';
  import Projects from '$lib/components/sections/Projects.svelte';
  import Certificates from '$lib/components/sections/Certificates.svelte';
  import Contact from '$lib/components/sections/Contact.svelte';
</script>

<Seo />
<PersonJsonLd />

<!-- Secciones del Portafolio organizadas secuencialmente -->
<Hero />
<StatsBand />
<About />
<Skills />
<CurrentlyLearning />
<Projects />
<Certificates />
<Contact />
