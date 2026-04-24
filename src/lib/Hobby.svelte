<script>
import { base } from '$app/paths';
    export let data = {};
</script>

<article>
    <h2>{data.title}</h2>
   <img src="{base}{data.image}" alt="" />
    <p>{data.description}</p>
    <p>{data.story}</p>
</article>

<style>
  article {
    /* border: 1px solid #ccc; */
    /* border-radius: 3px; */
    padding: 1rem;
    margin-bottom: 1rem;
    /* background-color: #f9f9f9; */
    text-align: center;
  }
  
  img {
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 1px;
    display: block;
    margin-bottom: 2em;
    margin-left: auto;    /* Auto margins center block elements */
    margin-right: auto;
  }
  
  h2 {
    color: #333;
    margin-top: 0;
  }
  
  p {
    color:darkgray;
    margin-top: 0;
  }
</style>