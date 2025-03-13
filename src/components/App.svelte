<script>
  import { onMount } from 'svelte';
  import Html from './HTML.svelte';
  import ButtonGroups from './ButtonGroups.svelte';
  import { BASE_URL } from '../_constants';

  export let foldername;
  export let htmlname;

  let showB = false;
  let htmlText = null;

  let aLabel = 'Before';
  let bLabel = 'After';

  onMount(async () => {
    const res = await fetch(`${BASE_URL}${foldername}/${htmlname}.html`);
    let text = await res.text();

    const dummyEl = document.createElement('div');
    dummyEl.innerHTML = text;

    const images = dummyEl.querySelectorAll('img');
    images.forEach(img => {
      const src = img.getAttribute('src');
      if (src && !src.includes(BASE_URL)) {
        img.setAttribute('src', `${BASE_URL}${foldername}/${src}`);
      }
    });

    const ai2html = dummyEl.querySelector('.ai2html');
    const dataset = ai2html.dataset;

    showB = Boolean(dataset.startB);
    if (dataset.aLabel) aLabel = dataset.aLabel;
    if (dataset.bLabel) bLabel = dataset.bLabel;

    htmlText = dummyEl.innerHTML;
  });
</script>

<svelte:head>
  {#if window.__IS_ODYSSEY_FORMAT__}
    <style>
      /* styles required to make position sticky work */
      /* existing styles on an Odyssey body are preventing position sticky from 'sticking' */
      body {
        overflow: visible;
      }
    </style>
  {/if}
</svelte:head>

{#if htmlText}
  <div class="app">
    <div class="sticky">
      <ButtonGroups {aLabel} {bLabel} bind:showB />
    </div>
    <Html {htmlText} {showB} />
  </div>
{/if}

<style lang="scss">
  .app {
    position: relative;
  }

  .sticky {
    position: sticky;
    top: 20px;
    z-index: 1;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
</style>
