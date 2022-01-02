import {
    Nav,
    Container,
    Offcanvas,
    Navbar,
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import TrashImg from '../../assets/img/littlecarts/trash.png'
import HeartImg from '../../assets/img/navbar/heart.png'
import CartImg from '../../assets/img/like/cartgreen.png'
import './styles.css'

export default function Like() {
    return (
        <>
            <Navbar className='navHeart' expand={false}>
                <Container className='containerNavHeart'>
                    <Navbar.Toggle className='ToggleHeart'>
                        <img className='HeartImg'
                            src={HeartImg} style={{ widht: '20px', height: '20px' }} />
                    </Navbar.Toggle>

                    <Navbar.Offcanvas
                        className='BodyNav'
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Meu Favoritos</Offcanvas.Title>
                            <Nav.Link href="#action1">Esvaziar</Nav.Link>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="BodyItemsCart">
                                <Nav.Link className='col-2' style={{ width: 20, height: 20, backgroundColor: 'grey' }} href="#"></Nav.Link>
                                <Nav.Link className='col mt-1' href="#">Nome do Filme</Nav.Link>
                                <Nav.Link className='col mt-1' href="#">1</Nav.Link>
                                <Nav.Link className='col mt-1' href="#">R$ 9,99</Nav.Link>
                                <Nav.Link className='col-1' href="#"><img src={TrashImg} style={{ width: 20, height: 20 }} /></Nav.Link>
                                <Nav.Link className='col-1' href="#"><img src={CartImg} style={{ width: 20, height: 20 }} /></Nav.Link>
                            </Nav>
                            <Nav className="BodyItemsCart">
                                <Nav.Link className='col-2' style={{ width: 20, height: 20, backgroundColor: 'grey' }} href="#"></Nav.Link>
                                <Nav.Link className='col mt-1' href="#">Nome do Filme</Nav.Link>
                                <Nav.Link className='col mt-1' href="#">1</Nav.Link>
                                <Nav.Link className='col mt-1' href="#">R$ 9,99</Nav.Link>
                                <Nav.Link className='col-1' href="#"><img src={TrashImg} style={{ width: 20, height: 20 }} /></Nav.Link>
                                <Nav.Link className='col-1' href="#"><img src={CartImg} style={{ width: 20, height: 20 }} /></Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

        </>
    )
}