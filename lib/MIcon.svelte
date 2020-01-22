<script>
  export let name = 'circle'
</script>

<svg class={$$props.class} m-icon={name}>
  <use xlink:href="/feather.svg#{name}" />
</svg>
