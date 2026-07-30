import { readFile, readdir } from 'node:fs/promises'

const files = await readdir('dist/assets')
const script = files.find((file) => file.endsWith('.js'))

if (!script) throw new Error('No se encontró el JavaScript compilado.')

const bundle = await readFile(`dist/assets/${script}`, 'utf8')

if (!bundle.includes('Vista demostrativa') || !bundle.includes('aria-disabled')) {
  throw new Error('El build de Pages no deshabilitó los CTA comerciales.')
}

console.log('Build demostrativo verificado.')
