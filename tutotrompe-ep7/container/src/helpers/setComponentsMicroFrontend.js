export default ({ components, name, }) => {
  const functionName = `setComponents${name}`
  if (global[functionName]) {
    return global[functionName](components)
  }
}