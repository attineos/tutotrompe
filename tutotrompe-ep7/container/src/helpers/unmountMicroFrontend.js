export default ({ args = {}, name, ...parameters }) => {
  const functionName = `unmount${name}`
  if (global[functionName]) {
    return global[functionName]({ ...args, ...parameters })
  }
}
