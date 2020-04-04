<script>
  import MIcon from './MIcon'
</script>

<button class={$$props.class} disabled={$$props.disabled}>
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
