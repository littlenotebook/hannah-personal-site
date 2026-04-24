<script>
  import { base } from '$app/paths';
  import Project from "$lib/Project.svelte";
  import projects from "$lib/projects.json";
</script>

<svelte:head>
  <title>Introduction</title>
  <link rel="stylesheet" href="/style.css" />
</svelte:head>  

<nav>
  <ul>
    <li><a href="{base}/" class="current">Intro</a></li>
    <li><a href="{base}/projects"> Glass Blowing Projects</a></li>
    <li><a href="{base}/hobbies"> Chinese Calligraphy</a></li>
    <li><a href="{base}/contact">Contact</a></li>
  </ul>
</nav>

<div class="intro-container">   

    <div class = "intro-text">
        <h1>Hannah Han</h1>
        <p> MIT Undergraduate &middot Glass Blowing Student in MIT Glass Lab &middot Chinese Calligraphy &middot Chinese Traditional Dance</p>
        <h2>Welcome to my personal website!</h2>
    </div>
    <div class = "intro-image">
        <img
            src="images/hannahpfp.JPG"
            alt="Profile Image">
            
    </div>
</div>

<!-- <h1>Hannah Han</h1>
<p> MIT Undergraduate &middot Glass Blower &middot Chinese Calligraphy &middot Chinese Traditional Dance</p>
<h2>Welcome to my personal website!</h2> -->

<!-- <img
  src="images/hannahpfp.JPG"
  alt="Profile Image"
  style="width: 500px; height: auto" /> -->

<!-- <h1>Glass Blowing Projects</h1>

<div class = "projects">
    {#each projects.slice(0, 3) as p}
    <Project data={p} />
    {/each}
</div> -->
