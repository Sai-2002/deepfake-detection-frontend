import React from 'react'

function Navbar() {
  return (
    <nav className="p-4 fixed w-full z-50 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex justify-between items-center">
      {/* <!-- Logo --> */}
      <div className="flex-shrink-0">
        <span className="font-semibold text-xl tracking-tight">E2TC</span>
      </div>
      {/* <!-- Links --> */}
      <div className="hidden lg:block">
      <a href="#" className="mr-4 pr-4">Authors</a>
        <a href="#videoUpload" className=" mr-4 pr-4"><button className='bg-gray-200 text-black font-bold hover:bg-gray-600 rounded-lg transition-all ease-in pl-4 pr-4 pt-2 pb-2'>Detect</button></a>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar