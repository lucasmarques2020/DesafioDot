import 'bootstrap/dist/css/bootstrap.min.css'
import {
    Button,
    Form,
    Nav,
    Container,
} from 'react-bootstrap'
import './styles.css'
import {Modals} from '../modal/Modal'
import TrashImg from '../../assets/img/littlecarts/trash.png'
import React, { useRef } from 'react'

export default function FinishBuy() {
    const childRef = useRef();
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-6'>
                        <Form className='row'>
                            <Form.Group className="mb-5" controlId="NomeCompleto">
                                <Form.Control className='Inputs' type="email" placeholder="Nome Completo" />
                            </Form.Group>
                            <Form.Group className="mb-5 col-md-6" controlId="CPF">
                                <Form.Control className='Inputs' type="text" placeholder="CPF" />
                            </Form.Group>
                            <Form.Group className="mb-5 col-md-6" controlId="Celular">
                                <Form.Control className='Inputs' type="text" placeholder="Celular" />
                            </Form.Group>
                            <Form.Group className="mb-5" controlId="Email">
                                <Form.Control className='Inputs' type="email" placeholder="E-mail" />
                            </Form.Group>
                            <Form.Group className="mb-5 col-md-4" controlId="CEP">
                                <Form.Control className='Inputs' type="text" placeholder="CEP" />
                            </Form.Group>
                            <Form.Group className="mb-5 col-md-8" controlId="Endereco">
                                <Form.Control className='Inputs' type="text" placeholder="Endereço" />
                            </Form.Group>
                            <Form.Group className="mb-5 col-md-6" controlId="Cidade">
                                <Form.Control className='Inputs' type="text" placeholder="Cidade" />
                            </Form.Group>
                            <Form.Group className="mb-5 col-md-6" controlId="Estado">
                                <Form.Control className='Inputs' type="text" placeholder="Estado" />
                            </Form.Group>
                        </Form>
                    </div>
                    <div className='col-md-6'>
                        <Container className='ContaineFinish container-fluid'>
                            <div
                                className='BodyNav row'
                                id="offcanvasNavbar"
                                aria-labelledby="offcanvasNavbarLabel"
                                placement="end"
                            >
                                <Nav className="Menu col-md-12">
                                    <Nav.Link className='col mt-1' href="#">Imagem</Nav.Link>
                                    <Nav.Link className='col mt-1' href="#">Nome</Nav.Link>
                                    <Nav.Link className='col mt-1' href="#">Qtd</Nav.Link>
                                    <Nav.Link className='col mt-1' href="#">Preço</Nav.Link>
                                </Nav>
                                <div>
                                    <div className='row'>
                                        <Nav className="BodyItemsCart col-md-12 mb-5">
                                            <Nav.Link className='col-md' style={{ width: 45, height: 45, backgroundColor: 'grey' }} href="#"></Nav.Link>
                                            <Nav.Link className='col-md mt-1' href="#">Nome do Filme</Nav.Link>
                                            <Nav.Link className='col-md mt-1' href="#">1</Nav.Link>
                                            <Nav.Link className='col-md mt-1' href="#">R$ 9,99</Nav.Link>
                                            <Nav.Link className='col-md' href="#"><img src={TrashImg} style={{ width: 20, height: 20 }} /></Nav.Link>
                                        </Nav>
                                        <div style={{ height: 4, backgroundColor: 'grey' }}></div>
                                        <Nav className="BodyItemsCart col-md-12 mb-5">
                                            <Nav.Link className='col-md' style={{ width: 45, height: 45, backgroundColor: 'grey' }} href="#"></Nav.Link>
                                            <Nav.Link className='col-md mt-1' href="#">Nome do Filme</Nav.Link>
                                            <Nav.Link className='col-md mt-1' href="#">1</Nav.Link>
                                            <Nav.Link className='col-md mt-1' href="#">R$ 9,99</Nav.Link>
                                            <Nav.Link className='col-md' href="#"><img src={TrashImg} style={{ width: 20, height: 20 }} /></Nav.Link>
                                        </Nav>
                                    </div>
                                </div>
                                <div className='FinishBuy d-flex'>
                                    <h2 className='col'>Total:</h2>
                                    <h2 className='col'>R$: 19,98</h2>
                                </div>
                                <Button onClick={() => childRef.current.handleShow()}className='ButtonAdcBuy'>Finalizar</Button>
                            </div>
                        </Container>
                        <Modals ref={childRef}/>
                    </div>
                </div>
            </div>
        </>
    )
}

