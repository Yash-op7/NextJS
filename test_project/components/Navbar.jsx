import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <div className='h-14 flex justify-between p-3'>
      <div>
        <Link href='/'>CRUD APP</Link>
      </div>
      <div className='flex gap-5'>
        <div>
          <Link href='/login'>Login</Link>
        </div>
        <div>
          <Link href='/logout'>Logout</Link>
        </div>
      </div>
    </div>
    <hr/>
    </div>
  )
}

export default Navbar