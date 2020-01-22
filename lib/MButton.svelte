<script>
  import MIcon from './MIcon'

  export let icon
  export let text
  export let right_icon
</script>

<button class="m-button {$$props.class}">
  {#if icon}
    <MIcon name={icon} />
  {/if}
  {#if text}
    <span>{text}</span>
  {/if}
  {#if right_icon}
    <MIcon name={right_icon} />
  {/if}
</button>
