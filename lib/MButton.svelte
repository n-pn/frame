<script>
  import MIcon from './MIcon.svelte'

  export let addon = ''
  export let label = 'Button'

  export let left_icon
  export let right_icon
</script>

<button class="m-button {addon}">
  {#if left_icon}
    <MIcon name={left_icon} />
  {/if}

  {#if label}
    <span>{label}</span>
  {/if}

  {#if right_icon}
    <MIcon name={right_icon} />
  {/if}
</button>
