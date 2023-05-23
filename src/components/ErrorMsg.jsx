import React from 'react'

function ErrorMsg({children}) {
  return (
    <div className='errorMessage'>
      {children}
    </div>
  )
}

export default ErrorMsg
