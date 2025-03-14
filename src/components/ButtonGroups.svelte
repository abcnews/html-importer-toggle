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
    data-state={!showB ? 'inactive' : 'active'}
    aria-selected={!showB}
    on:click={() => (showB = !showB)}
  >
    {aLabel}
  </button>
  <button
    type="button"
    role="tab"
    data-orientation="horizontal"
    data-state={showB ? 'inactive' : 'active'}
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
    overflow: hidden;
    font-family: ABCSans;
    border-radius: 9999px;
    height: 50px;
    padding: 4px;
  }

  button {
    border: none;
    background: none;
    font-family: inherit;
    cursor: pointer;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    outline: none;
    color: white;
    background-color: #3d392f;
    border-radius: 9999px;
    font-size: 14px;
    font-weight: 700;

    &[data-state='active'] {
      color: black;
      background-color: unset;
    }
  }
</style>
