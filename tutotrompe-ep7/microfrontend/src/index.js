import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

global.mountMfeTutotrompe = (props) => {
  // It will render the MFE application inside the element
  // the launcher created.
  return ReactDOM.createPortal(<App {...props} />, document.getElementById(props.launcherId))
}

global.unmountMfeTutotrompe = () => {
  // Free the resources you want/need here.
}
