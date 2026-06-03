import './App.scss'
import { useState } from 'react'
import Button from './components/Button'
import ModalWrapper from './components/Modal/ModalWrapper'
import ModalBody from './components/ModalBody'
import ModalClose from './components/ModalClose'
import ModalFooter from './components/ModalFooter'

function App() {
  const [openFirst, setOpenFirst] = useState(false)
  const [openSec, setOpenSec] = useState(false)

  return (
    <div>
      <Button />

      <button onClick={() => setOpenFirst(true)}>Open first modal</button>
      {openFirst && (

        <ModalWrapper onClose={() => setOpenFirst(false)}>
          <ModalClose onClick={() => setOpenFirst(false)} />
          <ModalBody text="By clicking the “Yes, Delete” button, PRODUCT NAME will be deleted."
            secText="Product Delete"
            textStyle={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "32px",
              paddingLeft: "162px",
              paddingTop: "60px",
            }}
            photo={'../images2283/cotost2.jpg'}
            style={{
              width: "276px",
              height: "140px",
              marginLeft: "142px"
            }} />
          <ModalFooter
            firstText="NO, CANCEL"
            secondaryText="YES, DELETE"
            secondaryClick={() => setOpenFirst(false)} />
        </ModalWrapper>
      )}

      <button onClick={() => setOpenSec(true)}>Open second modal</button>
      {openSec && (
        <ModalWrapper onClose={() => setOpenSec(false)}>
          <ModalClose onClick={() => setOpenSec(false)} />
          <ModalBody text="Description for you product"
            secText="Add Product “NAME”"
            textStyle={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "32px",
              paddingLeft: "122px",
              paddingTop: "0",
              margin: 0,
            }} />
          <ModalFooter
            mStyle={{
              display: "none"
            }}
            fStyle={{
              marginLeft: "184px",
              marginBottom: "25px"
            }}
            firstText="ADD TO FAVORITE"
          />
        </ModalWrapper>
      )}
    </div>
  )
}

export default App
