<script>
  export let name = 'circle'
</script>

<svg class="m-icon {$$props.class || ''}" m-icon={name}>
  <use xlink:href="/feather.svg#{name}" />
</svg>
