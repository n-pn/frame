<script>
    import MIcon from '$melte/MIcon.svelte'

    const colors = [
        'gray',
        'red',
        'orange',
        'yellow',
        'green',
        'teal',
        'blue',
        'indigo',
        'purple',
        'pink',
    ]
    const styles = ['text', 'line', 'fill', 'rise']
    const sizes = ['tiny', 'small', 'medium', 'large', 'huge']
    // your script goes here
</script>

<style lang="scss" scope="global">
    .button-list {
        // display: block;
        display: flex;
        // justify-content: space-around;

        > .button-group {
            margin: 1rem;
        }

        .m-button + .m-button {
            margin-left: 1rem;
        }

        &.-color .m-button {
            width: 6rem;
        }
    }

    // button groups
    .button-group {
        display: inline-flex;
        margin-bottom: 1rem;
        margin-right: 1rem;

        &.-block {
            display: flex;
            width: 100%;
        }

        .m-button {
            flex: 1;
            @include corner(0);

            // prettier-ignore
            & + & { margin-left: -1px; }
            // prettier-ignore
            &:first-child { @include corner-left(md); }
            // prettier-ignore
            &:last-child { @include corner-right(md); }
        }
    }
</style>

<article>
    <h1>Buttons</h1>

    <hr />

    <h2>Button sizes</h2>

    <div class="button-list">
        {#each sizes as size}
            <button class="m-button -{size}">{size}</button>
        {/each}
    </div>

    <hr />

    <h2>Button widths</h2>

    <div class="button-list">
        <button class="m-button -narrow">Narrow button</button>
        <button class="m-button -normal">Normal button</button>
        <button class="m-button -widely">Widely button</button>
    </div>

    <div class="button-list">
        <button class="m-button -block">Button block</button>
    </div>

    <hr />

    <h2>Button styles</h2>

    <div class="button-list">
        <button class="m-button -icon">
            <MIcon />
        </button>
        {#each styles as style}
            <button class="m-button -{style}">{style}</button>
        {/each}
    </div>

    <hr />

    <h2>Button variants</h2>

    {#each styles as style}
        <div class="button-list">
            <button class="m-button -{style} -default">Default</button>
            <button class="m-button -{style} -primary">Primary</button>
            <button class="m-button -{style} -success">Success</button>
            <button class="m-button -{style} -harmful">Harmful</button>
            <button class="m-button -{style} -disable">Disable</button>
            <a href="/" class="m-button -{style}">Link</a>
        </div>
    {/each}

    <hr />

    <h2>Button colors</h2>

    {#each colors as color}
        <div class="button-list -color">
            {#each styles as style}
                <button class="m-button -{style} -{color}">{color}</button>
            {/each}
        </div>
    {/each}

    <hr />

    <h2>Button layouts</h2>

    <div class="button-group">
        <button class="m-button -line">One</button>
        <button class="m-button -line">Two</button>
        <button class="m-button -line">Three</button>
    </div>

    <div class="button-group">
        <button class="m-button -line -primary">One</button>
        <button class="m-button -line -primary">Two</button>
        <button class="m-button -line -primary">Three</button>
    </div>

    <div class="button-group">
        <button class="m-button -line -harmful">One</button>
        <button class="m-button -line -harmful">Two</button>
        <button class="m-button -line -harmful">Three</button>
    </div>

    <div class="button-group">
        <button class="m-button _fill">One</button>
        <button class="m-button _fill">Two</button>
        <button class="m-button _fill">Three</button>
    </div>

    <div class="button-group">
        <button class="m-button _fill -primary">One</button>
        <button class="m-button _fill -primary">Two</button>
        <button class="m-button _fill -primary">Three</button>
    </div>

    <div class="button-group">
        <button class="m-button _fill -harmful">One</button>
        <button class="m-button _fill -harmful">Two</button>
        <button class="m-button _fill -harmful">Three</button>
    </div>

    <div class="button-group -block">
        <button class="m-button -line">Full</button>
        <button class="m-button -line">Width</button>
        <button class="m-button -line">Block</button>
    </div>

</article>
