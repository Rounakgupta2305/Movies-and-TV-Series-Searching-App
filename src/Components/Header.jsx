import React from 'react'
function Header() {
  return (
    <span onClick={() => window.scroll(0, 0)} className="w-full cursor-pointer fixed flex justify-center uppercase bg-[#7F95A2] text-5xl shadow-md shadow-gray-900 text-blacks z-50 py-6 flex-nowrap">
      <img src="../../logo.png" className="object-cover w-12 pr-2"/>
      Popcornify 
      <img src="../../logo.png" className="object-cover w-12 pl-2"/>
    </span>
  )
}

export default Header
