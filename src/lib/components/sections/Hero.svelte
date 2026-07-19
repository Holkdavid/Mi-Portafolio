<script lang="ts">
  import { profile } from '$lib/data/profile';
  import { roles } from '$lib/data/roles';
  import SectionBackground from '../effects/SectionBackground.svelte';
  import Container from '../layout/Container.svelte';
  import HeroContent from './HeroContent.svelte';
  import HeroActions from './HeroActions.svelte';
  import HeroStats from './HeroStats.svelte';
  import ScrollIndicator from './ScrollIndicator.svelte';
  import HeroCard from '../ui/HeroCard.svelte';
</script>

<!-- 🧠 Aplicamos la clase semántica section-padding en vez de márgenes quemados a mano -->
<section id="home" class="relative w-full min-h-screen flex items-center justify-center section-padding">
  <SectionBackground variant="grid" glow="dual">
    <Container size="xl">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8 items-center w-full">

        <div class="flex flex-col space-y-6 order-2 md:order-1">
          <HeroContent />
          <HeroActions />
          <HeroStats />
        </div>

        <div class="flex items-center justify-center order-1 md:order-2">
          <!-- 🧠 Pasamos los parámetros de forma limpia y transparente al componente reutilizable -->
          <HeroCard 
            imageSrc={profile.avatar}
            fullName={profile.fullName}
            role={roles[0]}
            degree={profile.degree}
            university={profile.university}
            city={profile.city}
            semester={profile.semester}
          />
        </div>

      </div>
    </Container>
  </SectionBackground>

  <ScrollIndicator />
</section>
