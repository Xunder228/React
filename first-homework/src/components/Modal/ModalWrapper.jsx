import React from 'react'

function ModalWrapper({ children, onClose }) {
    return (
        <div className='overlay' onClick={onClose}>
            <div className='modal' onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default ModalWrapper
 