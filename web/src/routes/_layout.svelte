<script>
    import XNavi from './_partials/navi.svelte'

    export let segment
</script>

<style>
    x-content {
        display: block;
        margin-left: 16rem;
    }

    main {
        position: relative;
        max-width: 56rem;
        padding: 1.5rem;
        /* margin: 0 auto; */
        box-sizing: border-box;
    }
</style>

<XNavi {segment} />

<x-content>
    <main>
        <slot />
    </main>
</x-content>
