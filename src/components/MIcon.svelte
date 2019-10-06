<script>
  export let name = 'feather'
</script>

<style lang="scss">
  svg {
    display: inline-block;
    padding: 0;
    margin: 0;
    /*vertical-align: auto;*/
    /*vertical-align: middle;*/
    /*margin-top: -3px;*/
    width: 1em;
    height: 1em;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }
</style>

<svg><use xlink:href="/feather-sprite.svg#{name}" /></svg>
