import { forEach } from 'lodash'

// Will copy the dependencies inside global.
export default dependencies => {
    forEach(dependencies, (dependencyObject, dependencyName) => {
        if (dependencyObject) {
            global[dependencyName] = dependencyObject.mainFunction || {}
        }

        forEach(dependencyObject, (functionValue, functionName) => {
            global[dependencyName][functionName] = functionValue
        })
    })
}
