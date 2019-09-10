<script>
  export let name = "feather";
</script>

<style>
  svg {
    /* display: inline-block; */
    padding: 0;
    margin: 0;
    vertical-align: text-bottom;
    vertical-align: auto;
    width: 1rem;
    height: 1rem;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }
</style>

<svg>
  <use xlink:href="/feather-sprite.svg#{name}" />
</svg>
