import posts from './_posts.js'
const index = posts.map(({ title, slug }) => ({ title, slug }))

export function get() {
  return { body: index }
}
