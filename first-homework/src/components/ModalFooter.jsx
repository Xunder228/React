import React from 'react'

function ModalFooter({ firstText, secondaryText, firstClick, secondaryClick, mStyle, fStyle }) {
    return (
        <div>
            <button style={fStyle} className='firstBtn' onClick={firstClick}>{firstText}</button>
            <button style={mStyle} className='secBtn' onClick={secondaryClick}>{secondaryText}</button>
        </div>
    )
}

export default ModalFooter


//  {firstText && (
//         <button onClick={firstClick}>
//             {firstText}
//         </button>
//       )}

//       {secondaryText && (
//         <button onClick={secondaryClick}>
//             {secondaryText}
//         </button>
//       )} 