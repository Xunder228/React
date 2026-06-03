import React from 'react'

function ModalBody({ children, text, photo, style, secText, textStyle }) {
    return (
        <div>
            <div>
                <img src={photo} alt="" style={style} />
            </div>
            <p style={textStyle} className='mainText'>
                {secText}
            </p>
            <p className='secText'>
                {text}
            </p>
        </div>
    )
}

export default ModalBody
