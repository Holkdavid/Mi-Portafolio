<script lang="ts">
  import Container from '$lib/components/layout/Container.svelte';
  import SectionBackground from '$lib/components/effects/SectionBackground.svelte';
  import SectionTitle from '$lib/components/ui/SectionTitle.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import Reveal from '$lib/components/ui/Reveal.svelte';
  import SmartImage from '$lib/components/ui/SmartImage.svelte';
  import { certificates } from '$lib/data/certificates';
  import Award from '@lucide/svelte/icons/award';
  import Calendar from '@lucide/svelte/icons/calendar';
  import Clock from '@lucide/svelte/icons/clock';
  import ExternalLink from '@lucide/svelte/icons/external-link';
</script>

<section id="certificates" class="py-28">
  <SectionBackground variant="plain" glow="primary" glowPosition="top-1/4 left-[-10%]">
    <Container>
      <SectionTitle
        title="Certificados"
        subtitle="Formación complementaria que respalda mi camino como desarrollador."
        align="left"
      />

      <div class="grid gap-6 md:grid-cols-2">
        {#each certificates as cert, i (cert.title)}
          <Reveal delay={i * 100}>
            <Card padding="lg" hover={false} class="flex h-full flex-col overflow-hidden">
              {#if cert.image}
                <SmartImage
                  src={cert.image}
                  alt={`Certificado: ${cert.title} — ${cert.issuer}`}
                  objectFit="contain"
                  class="mb-6 aspect-[1024/724] w-full rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)]"
                />
              {/if}

              <div class="flex items-start gap-3">
                <span
                  class="mt-0.5 grid size-10 shrink-0 place-items-center rounded-[var(--radius-md)]
                         bg-[var(--primary)]/10 text-[var(--primary)]"
                >
                  <Award size={20} />
                </span>
                <div>
                  <h3 class="text-lg font-bold leading-snug text-[var(--text)]">
                    {cert.title}
                  </h3>
                  <p class="text-sm font-medium text-[var(--secondary)]">{cert.issuer}</p>
                </div>
              </div>

              <p class="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                {cert.description}
              </p>

              <div class="mt-5 flex flex-wrap items-center gap-2">
                <span
                  class="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)]
                         bg-[var(--surface)]/60 px-3 py-1 text-xs font-medium text-[var(--text-secondary)]"
                >
                  <Calendar size={13} />
                  {cert.date}
                </span>
                {#if cert.hours}
                  <span
                    class="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)]
                           bg-[var(--surface)]/60 px-3 py-1 text-xs font-medium text-[var(--text-secondary)]"
                  >
                    <Clock size={13} />
                    {cert.hours} horas
                  </span>
                {/if}
              </div>

              {#if cert.credentialUrl}
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-secondary mt-6 inline-flex items-center gap-2 self-start px-4 py-2 text-sm"
                >
                  Ver credencial
                  <ExternalLink size={15} />
                </a>
              {/if}
            </Card>
          </Reveal>
        {/each}
      </div>
    </Container>
  </SectionBackground>
</section>
