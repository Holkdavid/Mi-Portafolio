<script lang="ts">
  import Container from '$lib/components/layout/Container.svelte';
  import SectionBackground from '$lib/components/effects/SectionBackground.svelte';
  import SectionTitle from '$lib/components/ui/SectionTitle.svelte';
  import TimelineItem from '$lib/components/ui/TimelineItem.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import Reveal from '$lib/components/ui/Reveal.svelte';
  import { timeline } from '$lib/data/timeline';
  import { profile } from '$lib/data/profile';
  import { semesterToOrdinal } from '$lib/utils/format';

  import GraduationCap from '@lucide/svelte/icons/graduation-cap';
  import MapPin from '@lucide/svelte/icons/map-pin';
  import Briefcase from '@lucide/svelte/icons/briefcase';
  import Coffee from '@lucide/svelte/icons/coffee';

  const quickFacts = [
    { icon: GraduationCap, label: profile.university },
    { icon: MapPin, label: profile.city },
    { icon: Briefcase, label: 'Disponible para prácticas' },
    { icon: Coffee, label: 'Apasionado por Java' }
  ];
</script>

<section id="about" class="py-28">
  <SectionBackground variant="grid">
  <Container>

    <SectionTitle
      title="Sobre mí"
      subtitle="Conoce un poco más sobre mi trayectoria y mis objetivos profesionales."
      align="left"
    />

    <div class="grid lg:grid-cols-2 gap-16 items-start">

      <Reveal class="space-y-6">

        <p class="text-lg leading-8 text-[var(--text-secondary)]">
          Soy estudiante de {profile.degree} de la {profile.university},
          actualmente cursando mi <span class="font-semibold text-[var(--text)]">{semesterToOrdinal(profile.semester)}{profile.isLastSemester ? ' y último' : ''} semestre</span>.
          Desde que inicié mi carrera en {profile.startYear} he trabajado en el desarrollo de aplicaciones
          y proyectos académicos que han fortalecido mis habilidades en programación, bases
          de datos y desarrollo web.
        </p>

        <p class="text-lg leading-8 text-[var(--text-secondary)]">
          Durante mi formación académica he desarrollado proyectos utilizando
          Java, MySQL, HTML, CSS, JavaScript y SvelteKit, fortaleciendo mis
          habilidades en el desarrollo de aplicaciones web y de escritorio.
        </p>

        <p class="text-lg leading-8 text-[var(--text-secondary)]">
          Me apasiona construir software de calidad, aprender nuevas
          tecnologías y afrontar desafíos que me permitan crecer como
          desarrollador.
        </p>

        <!-- Tarjetas rápidas de información -->
        <div class="grid grid-cols-2 gap-4 pt-4">
          {#each quickFacts as fact}
            <Card padding="sm" class="flex items-center gap-3">
              {@const Icon = fact.icon}
              <span class="flex items-center justify-center w-9 h-9 rounded-[var(--radius-sm)] bg-[var(--primary)]/10 text-[var(--secondary)] shrink-0">
                <Icon size={18} />
              </span>
              <span class="text-sm font-medium text-[var(--text)]">{fact.label}</span>
            </Card>
          {/each}
        </div>

      </Reveal>

      <!-- Timeline -->
      <Reveal delay={150}>
        {#each timeline as item, i}
          <TimelineItem {...item} isLast={i === timeline.length - 1} />
        {/each}
      </Reveal>

    </div>

  </Container>
  </SectionBackground>
</section>
