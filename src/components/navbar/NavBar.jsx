import {
    Button,
    Navbar,
    Container,
    FormControl,
    InputGroup,
} from 'react-bootstrap'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchImg from '../../assets/img/navbar/search.png'
import LittleCart from '../littlecart/LittleCart'
import Like from '../like/Like'
export default function NavBar() {
    return (
            <Container className='container'>
                <Navbar className='justify-content-md-center' expand="lg">
                    <Container>
                        <Navbar.Brand className='NavBrand' href="#">LOGO</Navbar.Brand>
                    </Container>
                    <InputGroup className='SearchProducts'>
                        <FormControl className='FormControls'
                            placeholder="Pesquisa"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button className='SearchImg' variant="transparent"
                            style={{
                                height: '40px',
                                widht: '40px',
                                position: 'absolute',
                                right: '10px',
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
                        <Navbar.Toggle className='Toggle row'/>
                        <Navbar.Collapse className=" container justify-content-end" id="navbarScroll">
                            <div className='justify-content-start row'>
                            <Like />
                            <LittleCart />
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
    )
}


