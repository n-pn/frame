<script>
  import MIcon from './MIcon'
</script>

<button
  class="m-button {$$props.class || ''}"
  m-button={$$props['m-button']}
  disabled={$$props.disabled}>
  {#if $$props.icon}
    <MIcon name={$$props.icon} />
  {/if}
  {#if $$props.text}
    <span>{$$props.text}</span>
  {/if}
  {#if $$props['icon-right']}
    <MIcon name={$$props['icon-right']} />
  {/if}
</button>
