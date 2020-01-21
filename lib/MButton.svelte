<script>
  import MIcon from './MIcon.svelte'

  export let text
  export let icon
  export let icon_right
</script>

<button class="m-button {$$props.class}">
  {#if icon}
    <MIcon ico={icon} />
  {/if}

  {#if text}
    <span>{text}</span>
  {/if}

  {#if icon_right}
    <MIcon ico={icon_right} />
  {/if}
</button>
