import {
    Button,
    Navbar,
    Container,
    FormControl,
    InputGroup

} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchImg from '../../search.png'
import CartImg from '../../cart.png'
import HeartImg from '../../heart.png'

export default function NavBar() {
    return (
        <>
            <Container className='container' style={{ background: '#8dd7cf' }}>
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
                         <Button variant="transparent"
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
                            }}/>
                            </Button>
                    </InputGroup>
                    <Container className="d-flex flex-wrap justify-content-end">
                        <Navbar.Brand href="#"><img src={HeartImg} style={{widht: '20px', height: '20px'}}/></Navbar.Brand>
                        <Navbar.Brand href="#"><img src={CartImg} style={{widht: '20px', height: '20px', marginLeft: '10px'}}/></Navbar.Brand>
                    </Container>
                </Navbar>
            </Container>
        </>
    )
}


