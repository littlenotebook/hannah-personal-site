<script>
  import { base } from '$app/paths';
  export let data = {};
  export let featured = false;
</script>

<article class:featured>
  <img src="{base}{data.image}" alt="" />
  <div class="content">
    <h2>{data.title}</h2>
    <p>{data.description}</p>
  </div>
</article>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Gaegu:wght@400;700&display=swap');

  article {
    border-radius: 12px;
    background-color: white;
    overflow: hidden;
    width: 100%;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1),
                box-shadow 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  }

  article.featured {
    transform: translateY(-12px) scale(1.04);
    box-shadow: 0 16px 48px rgba(153, 155, 155, 0.28), 0 4px 16px rgba(0,0,0,0.10);
    z-index: 2;
    position: relative;
  }

  img {
    width: 100%;
    /* 2:1 height:width — image fills top two thirds of the card */
    aspect-ratio: 1 / 1.35;
    object-fit: cover;
    display: block;
  }

  .content {
    background-color: white;
    padding: 0.85rem 1rem 1rem;
    text-align: left;
  }

  h2 {
    font-family: 'Gaegu', cursive;
    font-size: 1.15rem;
    font-weight: 700;
    color: #3a4a44;
    margin: 0 0 0.1rem;
  }

  article.featured h2 {
    font-size: 1.4rem;
  }

  p {
    font-family: 'Sofia Pro', 'DM Sans', sans-serif;
    font-size: 0.85rem;
    color: #6b7c7d;
    margin: 0;
    line-height: 1.5;
    text-align: left;
  }

  article.featured p {
    font-size: 0.92rem;
  }
</style>