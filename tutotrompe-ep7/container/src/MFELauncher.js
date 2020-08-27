import React, {useEffect, useState} from "react"
import * as superagent from "superagent";

import exportDependenciesToGlobal from "./helpers/exportDependenciesToGlobal";
import importScript from "./helpers/importScript";
import mountMicroFrontend from "./helpers/mountMicroFrontend";
import setComponentsMicroFrontend from "./helpers/setComponentsMicroFrontend";
import unmountMicroFrontend from "./helpers/unmountMicroFrontend";

const MFELauncher = ({
                       args = {},
                       components,
                       configMFE = {},
                       dependencies,
                     }) => {
  const [mfeContent, setMfeContent] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  const {manifestPath, mfePath, name, scriptName} = configMFE

  const launcherId = `Launcher-${name}`
  const scriptId = `Script-${name}`

  useEffect(() => {
    exportDependenciesToGlobal(dependencies)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      setComponentsMicroFrontend({components, name})
    }
  }, [components, name, isLoaded])

  useEffect(() => {
    exportDependenciesToGlobal(dependencies)

    superagent
      .get(mfePath + manifestPath)
      .then(({body: manifest}) => {
        importScript({
          id: scriptId,
          onload: () => {
            setMfeContent(mountMicroFrontend({args, name, launcherId}))
            setIsLoaded(true)
          },
          src: mfePath + [manifest[scriptName]],
        })
      })
      .catch(() => {
        // Handle the error more gracefully.
        console.error("CANNOT FIND MANIFEST")
      })

    return () => {
      unmountMicroFrontend({launcherId, name})
    }
  }, [])


  return (
    <div>
      {!isLoaded && <p>Loading the MFE ...</p>}
      <main id={launcherId}/>
      {mfeContent}
    </div>
  )
}

export default MFELauncher
