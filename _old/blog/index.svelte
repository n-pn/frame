<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`api/posts`)
			.then(r => r.json())
			.then(posts => {
				return { posts }
			})
	}
</script>

<script>
	import SText from '../../components/SText.svelte'

	export let posts
</script>

<svelte:head>
	<title>Sussy - Blog</title>
</svelte:head>

<SText>
	<h1>Recent posts</h1>

	<ul>
		{#each posts as post}
		<li><a rel="prefetch" href="blog/{post.slug}">{post.title}</a></li>
		{/each}
	</ul>
</SText>
