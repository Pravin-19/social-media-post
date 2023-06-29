import { FaLaptop, FaTabletAlt, FaMobileAlt} from 'react-icons/fa'



// import React from 'react'

// const Header = ({title}) => {
//   return (
//   <header className='Header'>
//     <h1>{title}</h1>
//   </header>
//   )
// }

// export default Header


const Header=({ title,width})=>{
  return(
    <header className="Header">
    <h1>{title}</h1>
    {width < 768 ? <FaMobileAlt/> : width < 992 ? <FaTabletAlt/> : <FaLaptop/> }
    </header>
  )
}

export default Header