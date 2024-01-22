import React from 'react'
import Link from 'next/link'
const Header = (props) => {
  return ( <>
    <div className='h-12 px-4 bg-green-400  flex items-center justify-between'>
  <h2>logo</h2>
  <div className='flex gap-4'>
    <Link  href='/Career'><h4>Career </h4></Link>
    <Link href='/Services'> <h4>Services </h4></Link>
    <Link href='/Blog'> <h4>Blog</h4></Link>
    <Link href=''> <h4>Account</h4></Link>
  </div>
  </div>
  </>
  )
   
}

export default Header