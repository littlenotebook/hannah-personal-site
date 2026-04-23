<script>
  import { base } from '$app/paths';
  import Project from "$lib/Project.svelte";
  import projects from "$lib/projects.json";
</script>

<svelte:head>
  <title>Glassblowing Projects</title>
  <link rel="stylesheet" href="style.css" />
</svelte:head>


<nav>
  <ul>
    <li><a href="{base}/">Intro</a></li>
    <li><a href="{base}/projects" class="current"> Glass Blowing Projects</a></li>
    <li><a href="{base}/hobbies"> Chinese Calligraphy</a></li>
    <li><a href="{base}/contact">Contact</a></li>
  </ul>
</nav>

<h1>Glass Blowing Projects</h1>

<div class="projects">
  {#each projects as p}
    <Project data={p} />
  {/each}
</div>