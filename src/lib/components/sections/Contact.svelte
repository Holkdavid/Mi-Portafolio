<script lang="ts">
  import Container from '$lib/components/layout/Container.svelte';
  import SectionTitle from '$lib/components/ui/SectionTitle.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  import Reveal from '$lib/components/ui/Reveal.svelte';
  import { contact } from '$lib/data/contact';
  import { socials } from '$lib/data/socials';

  import Mail from '@lucide/svelte/icons/mail';
  import MapPin from '@lucide/svelte/icons/map-pin';
  import Briefcase from '@lucide/svelte/icons/briefcase';
  import Clock from '@lucide/svelte/icons/clock';
  import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
  import LinkedinIcon from '$lib/components/icons/LinkedinIcon.svelte';

  const infoCards = [
    { icon: Mail, label: 'Email', value: contact.email },
    { icon: MapPin, label: 'Ubicación', value: contact.location },
    { icon: Briefcase, label: 'Disponibilidad', value: contact.availability },
    { icon: Clock, label: 'Respuesta', value: contact.responseTime }
  ];

  const github = socials.find((s) => s.platform === 'GitHub');
  const linkedin = socials.find((s) => s.platform === 'LinkedIn');

  // Muchos visitantes no tienen un cliente de correo configurado en el navegador,
  // así que el mailto: a veces parece "no hacer nada". Copiamos el correo al
  // portapapeles como respaldo, con confirmación visual, sin bloquear el mailto.
  let copied = $state(false);

  async function handleEmailClick() {
    try {
      await navigator.clipboard.writeText(contact.email);
      copied = true;
      setTimeout(() => (copied = false), 2000);
    } catch {
      // Si el navegador bloquea el portapapeles, el mailto sigue intentando abrirse igual.
    }
  }
</script>

<section id="contact" class="py-28">
  <Container size="md">

    <Reveal>
      <SectionTitle
        title="Construyamos algo increíble."
        subtitle="Estoy finalizando mi último semestre de Ingeniería de Sistemas y busco oportunidades donde pueda seguir creciendo como desarrollador, aportar soluciones reales y continuar aprendiendo de grandes equipos."
        align="center"
      />
    </Reveal>

    <!-- Tarjetas de información -->
    <Reveal delay={100} class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {#each infoCards as item}
        <Card padding="md" class="flex items-start gap-3">
          {@const Icon = item.icon}
          <span class="flex items-center justify-center w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--primary)]/10 text-[var(--secondary)] shrink-0">
            <Icon size={18} />
          </span>
          <div>
            <p class="text-xs uppercase tracking-wide text-[var(--text-secondary)]">{item.label}</p>
            <p class="text-sm font-medium text-[var(--text)] mt-0.5">{item.value}</p>
          </div>
        </Card>
      {/each}
    </Reveal>

    <!-- Botones de contacto -->
    <Reveal delay={200} class="flex flex-col sm:flex-row gap-3 mt-8">
      {#if github}
        <a href={github.url} target="_blank" rel="noopener noreferrer" class="no-underline flex-1">
          <Button variant="secondary" size="lg" class="w-full gap-2">
            <GithubIcon size={18} /> GitHub
          </Button>
        </a>
      {/if}

      {#if linkedin}
        <a href={linkedin.url} target="_blank" rel="noopener noreferrer" class="no-underline flex-1">
          <Button variant="secondary" size="lg" class="w-full gap-2">
            <LinkedinIcon size={18} /> LinkedIn
          </Button>
        </a>
      {/if}

      <a href="mailto:{contact.email}" onclick={handleEmailClick} class="no-underline flex-1">
        <Button variant="primary" size="lg" class="w-full gap-2">
          <Mail size={18} /> {copied ? '¡Correo copiado! ✓' : 'Enviar correo'}
        </Button>
      </a>
    </Reveal>

  </Container>
</section>
