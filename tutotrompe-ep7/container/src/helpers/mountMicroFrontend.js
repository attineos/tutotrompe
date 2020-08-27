export default ({ args = {}, name, ...parameters }) => {
  const functionName = `mount${name}`
  if (global[functionName]) {
    return global[functionName]({ ...args, ...parameters })
  }
}
