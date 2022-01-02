import {
    Nav,
    Container,
    Offcanvas,
    Navbar,
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import CartImg from '../../assets/img/navbar/cart.png'
import TrashImg from '../../assets/img/littlecarts/trash.png'
import './styles.css'

export default function LittleCart() {
    return (
        <>
                <Navbar className='navCart' expand={false}>
                <Container className='containerNavCart'>
                    <Navbar.Toggle className='ToggleCart'>
                        <img className='CartImg'
                            src={CartImg} style={{ widht: '20px', height: '20px' }} />
                    </Navbar.Toggle>

                    <Navbar.Offcanvas
                        className='BodyNav'
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Meu Carrinho</Offcanvas.Title>
                            <Nav.Link href="#action1">Esvaziar</Nav.Link>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="BodyItemsCart">
                                <Nav.Link className='col-2' style={{ width: 20, height: 20, backgroundColor: 'grey' }} href="#"></Nav.Link>
                                <Nav.Link className='col mt-1' href="#">Nome do Filme</Nav.Link>
                                <Nav.Link className='col mt-1' href="#">1</Nav.Link>
                                <Nav.Link className='col mt-1' href="#">R$ 9,99</Nav.Link>
                                <Nav.Link className='col-2' href="#"><img src={TrashImg} style={{ width: 20, height: 20 }} /></Nav.Link>
                            </Nav>
                            <Nav className="BodyItemsCart">
                                <Nav.Link className='col-2' style={{ width: 20, height: 20, backgroundColor: 'grey' }} href="#"></Nav.Link>
                                <Nav.Link className='col mt-1' href="#">Nome do Filme</Nav.Link>
                                <Nav.Link className='col mt-1' href="#">1</Nav.Link>
                                <Nav.Link className='col mt-1' href="#">R$ 9,99</Nav.Link>
                                <Nav.Link className='col-2' href="#"><img src={TrashImg} style={{ width: 20, height: 20 }} /></Nav.Link>
                            </Nav>

                        </Offcanvas.Body>
                        <div className='FinishBuy d-flex'>
                            <h2 className='col'>Total:</h2>
                            <h2 className='col'>R$: 19,98</h2>
                        </div>
                       <a href="/finish"><button className='ButtonAdcF'>Finalizar compra</button></a> 
                    </Navbar.Offcanvas>
                    </Container>
                </Navbar>

        </>
    )
}