import React from "react"
import StudentHome from "soundlogin/src/Components/StudentHome.jsx"
import SoundLogo from "./SoundLogo.png"

function App(){
  return(
      <div>
        <img class="pt-3" src={SoundLogo} />
        <StudentHome />
      </div>
  )
}

export default App;