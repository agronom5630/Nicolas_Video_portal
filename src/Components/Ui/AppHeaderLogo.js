import React from "react"

/* -== assets ==- */
import img from "../../assets/images/Logo-Demo.png"

function AppHeaderLogo(props){
  return (
    <div className="AppHeaderLogo">
      <button className="Menu">

      </button>

      <div className="logo">
        <img src="Logo-Demo.png" alt="DEMO"/>
      </div>
    </div>
  )
}

export default AppHeaderLogo
