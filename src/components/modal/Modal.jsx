import 'bootstrap/dist/css/bootstrap.min.css'
import {
    Button,
    Modal
} from 'react-bootstrap'
import React, { useState, useImperativeHandle, forwardRef } from 'react'
import './styles.css'

export const Modals = forwardRef((props, ref) => {
    const [show, setShow] = useState(false)
  
    const handleClose = () => setShow(false)

    useImperativeHandle(ref, () => ({
        handleShow () {setShow(true)}
    
      }))
    return (
      <>
        <Modal className='Modals' show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Obrigado Uzumaki Naruto!</Modal.Title>
        </Modal.Header>
          <Modal.Body>Sua compra foi finalizada com sucesso!</Modal.Body>
          <Modal.Footer>
            <Button href='/'className='ButtonAdc'variant="transparent" onClick={handleClose}>
              Ir para loja
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
)