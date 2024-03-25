<script>
  export let showB;
  export let aLabel;
  export let bLabel;
</script>

<div
  role="tablist"
  aria-label="Switch before and after images"
  aria-orientation="horizontal"
  data-orientation="horizontal"
  class="group"
>
  <button
    type="button"
    role="tab"
    data-orientation="horizontal"
    data-state={!showB ? 'active' : 'inactive'}
    aria-selected={!showB}
    on:click={() => (showB = !showB)}
  >
    {aLabel}
  </button>
  <div class="line" />
  <button
    type="button"
    role="tab"
    data-orientation="horizontal"
    data-state={showB ? 'active' : 'inactive'}
    aria-selected={showB}
    on:click={() => (showB = !showB)}
  >
    {bLabel}
  </button>
</div>

<style lang="scss">
  .group {
    display: flex;
    background: #fff;
    border: 1px solid #cccccc;
    border-radius: 10px;
    overflow: hidden;
    font-family: ABCSans;
    min-height: 30px;
    align-items: center;
  }

  button {
    border: none;
    background: none;
    font-family: inherit;
    font-size: 18px;
    color: rgba(17, 17, 17, 0.5);
    font-weight: 400;
    padding: 0 10px;
    cursor: pointer;

    &[data-state='active'] {
      color: #111;
      font-weight: 700;
    }
  }

  .line {
    border-left: 1px solid black;
    height: 16px;
  }
</style>
