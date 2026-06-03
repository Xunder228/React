import React from 'react'

function ModalClose({onClick}) {
  return (
    <div>
      <button className='closeBtn' onClick={onClick}>
      ×
    </button>
    </div>
  )
}

export default ModalClose 
