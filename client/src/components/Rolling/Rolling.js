import React,{useState} from 'react'
import { FaHamburger, FaCross } from 'react-icons/fa'

const Rolling = () => {
  const [hamActive,setHamActive] = useState(true)
  const handleClick = () => {
    setHamActive(!hamActive)
  }
  return (
    <div style={{height:"100vh", display:"flex",justifyContent:"center",alignItems:"center"}}>
      <div style={{ border:"1px solid red",padding:"5px",overflow:"hidden", position:"relative"}} onClick={handleClick}>
        <FaHamburger className={`ham ${hamActive ? "activeHam" : ''}`} />
        <FaCross className={`cross ${hamActive ? '' : "activeCross"}`} />
      </div>
      <div className="glowing-wrapper"
      //  style={{marginLeft:"60px", border:"1px solid red", borderRadius:"50%" , width:"160px",height:"160px",display:"flex",justifyContent:"center",alignItems:"center"}}
       >
        <div className="circle">Hello</div>
      </div>
    </div>
  )
}

export default Rolling
