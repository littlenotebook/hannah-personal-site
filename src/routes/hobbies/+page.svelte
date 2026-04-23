<script>
  import Hobby from "$lib/Hobby.svelte";
  import hobbies from "$lib/hobbies.json";
</script>

<svelte:head>
  <title>Chinese Calligraphy</title>
</svelte:head>


<nav>
  <ul>
    <li><a href="/">Intro</a></li>
    <li><a href="/projects"> Glass Blowing Projects</a></li>
    <li><a href="/hobbies" class="current"> Chinese Calligraphy</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>

<h1>Chinese Calligraphy</h1>

<div class="hobbies">
  {#each hobbies as h}
    <Hobby data={h} />
  {/each}
</div>

