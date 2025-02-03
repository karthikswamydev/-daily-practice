import React from 'react'

function LoginLayout({children}) {
  return (
    <div className='border-2 border-gray-200 p-4 m-10 flex justify-center items-center'>
        {children}
    </div>
  )
}

export default LoginLayout