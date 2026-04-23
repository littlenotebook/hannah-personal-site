<script>
  import Project from "$lib/Project.svelte";
  import projects from "$lib/projects.json";
</script>

<svelte:head>
  <title>Glassblowing Projects</title>
  <link rel="stylesheet" href="style.css" />
</svelte:head>


<nav>
  <ul>
    <li><a href="/">Intro</a></li>
    <li><a href="/projects" class="current"> Glass Blowing Projects</a></li>
    <li><a href="/hobbies"> Chinese Calligraphy</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>

<h1>Glass Blowing Projects</h1>

<div class="projects">
  {#each projects as p}
    <Project data={p} />
  {/each}
</div>