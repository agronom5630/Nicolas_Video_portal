import React from "react"
import AppHeaderLogo from "../Ui/AppHeaderLogo";
import AppHeaderSearch from "../Ui/AppHeaderSearch";
import AppHeaderUserInterfaces from "../Ui/AppHeaderUserInterfaces";

function AppHeader(props) {


  return (
    <header className='AppHeader'>
      <div className="AppHeader--row">
        <div className="AppHeader--cell">
          <AppHeaderLogo />
        </div>

        <div className="AppHeader--cell">
          <AppHeaderSearch />
        </div>

        <div className="AppHeader--cell">
          <AppHeaderUserInterfaces />
        </div>
      </div>
    </header>
  )
}

export default AppHeader;
