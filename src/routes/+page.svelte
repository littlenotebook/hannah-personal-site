<script>
  import { base } from '$app/paths';
  import { onMount, onDestroy } from 'svelte';
  import Project from "$lib/Project.svelte";
  import projects from "$lib/projects.json";

  let featuredIndex = 1;
  let playing = true;
  let animating = false;
  let interval;
  const DURATION = 3000;

  function advance(dir = 1) {
    if (animating) return;
    animating = true;
    featuredIndex = (featuredIndex + dir + projects.length) % projects.length;
    setTimeout(() => { animating = false; }, 520);
  }

  function startCarousel() {
    stopCarousel();
    interval = setInterval(() => advance(1), DURATION);
  }

  function stopCarousel() {
    clearInterval(interval);
  }

  function togglePlay() {
    playing = !playing;
    playing ? startCarousel() : stopCarousel();
  }

  onMount(() => { if (playing) startCarousel(); });
  onDestroy(() => stopCarousel());

  $: visibleProjects = [-2, -1, 0, 1, 2].map(offset => {
    const idx = (featuredIndex + offset + projects.length * 10) % projects.length;
    return { data: projects[idx], offset };
  });
</script>

<svelte:head>
  <title>Glassblowing Projects</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Gaegu:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</svelte:head>

<nav>
  <ul>
    <!-- <li><a href="{base}/">Intro</a></li> -->
    <li><a href="{base}/" class="current">Home</a></li>
    <li><a href="{base}/hobbies">Chinese Calligraphy</a></li>
    <li><a href="{base}/contact">Contact</a></li>
  </ul>
</nav>

<!-- <div class="page-content">
  <div class="intro-container">   

      <div class = "intro-text">
          <h1>Hannah Han</h1>
          <p> MIT Undergraduate &middot Glass Blowing Student in MIT Glass Lab &middot Chinese Calligraphy &middot Chinese Traditional Dance</p>
      </div>
      <div class = "intro-image">
          <img
              src="images/hannahpfp.JPG"
              alt="Profile Image">
              
      </div>
  </div>
</div> -->

<!-- <hr> -->
<div class="wave-container">
 <div class="page-content">
  <div class="intro-container">   

      <div class = "intro-text">
          <h1>Hannah Han</h1>
          <p> MIT Undergraduate &middot Glass Blowing Student in MIT Glass Lab &middot Chinese Calligraphy &middot Chinese Traditional Dance</p>
      </div>
      <div class = "intro-image">
          <img
              src="images/hannahpfp.JPG"
              alt="Profile Image">
              
      </div>
  </div>
</div>
</div>

<section class="carousel-page">
  <h1>Glass Blowing Projects</h1>

  <div class="controls">
    <button class="arrow" on:click={() => advance(-1)} aria-label="Previous">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M13 4L7 10L13 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>

    <button class="play-pause" on:click={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
      {#if playing}
        <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
          <rect x="4" y="3" width="3.5" height="12" rx="1.5" fill="currentColor"/>
          <rect x="10.5" y="3" width="3.5" height="12" rx="1.5" fill="currentColor"/>
        </svg>
        <span>Pause</span>
      {:else}
        <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
          <path d="M5 3.5L15 9L5 14.5V3.5Z" fill="currentColor"/>
        </svg>
        <span>Play</span>
      {/if}
    </button>

    <button class="arrow" on:click={() => advance(1)} aria-label="Next">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M7 4L13 10L7 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>

  <div class="track-wrapper">
    <div class="track">
      {#each visibleProjects as proj (proj.offset)}
        <div
          class="slot"
          class:half-left={proj.offset === -2}
          class:half-right={proj.offset === 2}
          class:side={proj.offset === -1 || proj.offset === 1}
          class:center={proj.offset === 0}
        >
          <Project data={proj.data} featured={proj.offset === 0} />
        </div>
      {/each}
    </div>
  </div>

</section>