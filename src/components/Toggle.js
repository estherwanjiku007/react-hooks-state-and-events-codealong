import React ,{useState} from "react";

function Toggle() {
  const [isOn,setisON]=useState(false)
  function handleClick(){
    setisON((isOn)=>!isOn)
  }
 return( 
 <div>
 <button onClick={handleClick}>{isOn ? "OFF" : "ON"}<button/>
 </button>
 </div>
 )
}
export default Toggle;

