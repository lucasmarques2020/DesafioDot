import {
    Button,
    Navbar,
    Container,
    FormControl,
    InputGroup
} from 'react-bootstrap'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchImg from '../../assets/img/navbar/search.png'
import CartImg from '../../assets/img/navbar/cart.png'
import HeartImg from '../../assets/img/navbar/heart.png'

export default function NavBar() {
    return (
        <>
            <Container collapseOnSelect className='container' style={{ background: '#8dd7cf' }}>
                <Navbar className='justify-content-md-center' expand="lg">
                    <Container>
                        <Navbar.Brand href="#"
                            style={{
                                fontSize: '20px',
                                fontWeight: 'bold',
                                color: 'white'
                            }}>LOGO</Navbar.Brand>
                    </Container>
                    <InputGroup className='SearchProducts'>
                        <FormControl
                            style={{ borderRadius: '5px', marginRight: '10px', height: '40px' }}
                            placeholder="Pesquisa"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button className='SearchImg' variant="transparent"
                            style={{
                                height: '40px',
                                widht: '40px',
                                position: 'absolute',
                                right: '20px',
                                top: '0px'
                            }}>
                            <img src={SearchImg}
                                style={{
                                    height: '20px',
                                    widht: '20px',
                                }} />
                        </Button>
                    </InputGroup>
                    <Container className="d-flex flex-wrap justify-content-end">
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse className=" justify-content-end" id="navbarScroll">
                                <Navbar.Brand href="#"><img className='HeartImg'src={HeartImg} style={{ widht: '20px', height: '20px' }} /></Navbar.Brand>
                                <div className='notif'><p>2</p></div>
                                <Navbar.Brand href="#"><img className='CartImg'src={CartImg} style={{ widht: '20px', height: '20px', marginLeft: '10px' }} /></Navbar.Brand>
                        </Navbar.Collapse>
                    </Container>    
                </Navbar>
            </Container>
        </>
    )
}


