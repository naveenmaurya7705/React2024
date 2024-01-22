import React from 'react'

const Header = (props) => {
  return ( <>
    <div className='h-12 px-4 bg-green-400  flex items-center justify-between'>
  <h2>{props.user}</h2>
  <div className='flex gap-4'>
    <a href='/About'><h4>About</h4></a>
    <a href='/Career'><h4>Career </h4></a>
    <a href='/Services'> <h4>Services </h4></a>
    <a href='/Blog'> <h4>Blog</h4></a>
    <a href=''> <h4>Account</h4></a>
  </div>
  </div>
  </>
  )
   
}

export default Header