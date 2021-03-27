import posts from './_posts.js'

const lookup = new Map()
posts.forEach((post) => {
  lookup.set(post.slug, post)
})

export function get({ params }) {
  const { slug } = params
  const post = lookup.get(slug)
  if (post) return { body: post }
}
