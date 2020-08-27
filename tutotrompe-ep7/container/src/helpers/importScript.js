export default ({ id, onload, src }) => {
  const script = document.createElement('script')
  script.id = id
  if (onload) {
    script.onload = onload
  }
  script.src = src
  document.head.appendChild(script)
}
