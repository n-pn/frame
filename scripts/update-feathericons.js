const feather = require('feather-icons')
const icons = Object.values(feather.icons)

// width='24' height='24' viewBox='0 0 24 24'
function to_data_uri(icon) {
  paths = icon.contents
    .replace(/</g, '%3C')
    .replace(/>/g, '%3E')
    .replace(/"/g, "'")
  console.log(paths)
  return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E${paths}%3C/svg%3E")`
}

// console.log(decodeURI(to_data_uri(icons[1])))

console.log(feather.icons.github)
