import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-800 text-white py-4 px-5'>
      <div className='logo font-bold px-4'>Facebook</div>
      <ul className='flex gap-6 pl-4'>
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/contact"><li>Contact</li></Link>
      </ul>
    </nav>
  )
}

export default Navbar
