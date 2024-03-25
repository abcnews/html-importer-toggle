<script>
  import { onMount } from 'svelte';

  export let htmlText;
  export let showB = false;

  let parentEl;

  $: {
    if (parentEl) {
      const bImages = parentEl.querySelectorAll('.b-image');

      bImages.forEach(img => {
        if (showB) {
          img.style.display = 'block';
        } else {
          img.style.display = 'none';
        }
      });
    }
  }

  // https://github.com/newsdev/ai2html/blob/gh-pages/_includes/resizer-script.html
  function resizer() {
    const elements = Array.prototype.slice.call(parentEl.querySelectorAll('.g-artboard[data-min-width]'));
    const widthById = {};

    elements.forEach(function (el) {
      const parent = el.parentNode,
        width = widthById[parent.id] || parent.getBoundingClientRect().width,
        minwidth = el.getAttribute('data-min-width'),
        maxwidth = el.getAttribute('data-max-width');
      widthById[parent.id] = width;

      if (+minwidth <= width && (+maxwidth >= width || maxwidth === null)) {
        el.style.display = 'block';
      } else {
        el.style.display = 'none';
      }
    });
    try {
      if (window.parent && window.parent.$) {
        window.parent.$('body').trigger('resizedcontent', [window]);
      }
    } catch (e) {
      console.log(e);
    }
  }

  onMount(() => {
    resizer();
  });
</script>

<svelte:window on:resize={resizer} />

<div bind:this={parentEl}>
  {#if htmlText}
    {@html htmlText}
  {/if}
</div>
