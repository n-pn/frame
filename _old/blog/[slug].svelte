<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].html
		const res = await this.fetch(`api/posts/${params.slug}`)
		const data = await res.json()

		if (res.status === 200) {
			return { post: data }
		} else {
			this.error(res.status, data.message)
		}
	}
</script>

<script>
	import SText from '../../components/SText.svelte'

	export let post
</script>

<svelte:head>
	<title>Sussy - {post.title}</title>
</svelte:head>

<SText>
	<h1>{post.title}</h1>

	<div class="content">
		{@html post.html}
	</div>
</SText>
