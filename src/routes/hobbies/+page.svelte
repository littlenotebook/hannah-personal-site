<script>
  import { base } from '$app/paths';
  import Hobby from "$lib/Hobby.svelte";
  import hobbies from "$lib/hobbies.json";
</script>

<svelte:head>
  <title>Chinese Calligraphy</title>
</svelte:head>


<nav>
  <ul>
    <!-- <li><a href="{base}/">Intro</a></li> -->
    <li><a href="{base}/">Home</a></li>
    <li><a href="{base}/hobbies" class="current"> Chinese Calligraphy</a></li>
    <li><a href="{base}/contact">Contact</a></li>
  </ul>
</nav>

<div class="page-content">
  <h1>Chinese Calligraphy</h1>

  <div class="hobbies">
    {#each hobbies as h}
      <Hobby data={h} />
    {/each}
  </div>

</div>



