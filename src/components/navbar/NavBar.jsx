import {
    Button,
    Navbar,
    Container,
    Form,
    FormControl

} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function NavBar() {
    return (
        <>
            <Container style={{background: '#8dd7cf'}}>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand href="#">Logo</Navbar.Brand>
                    </Container>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="transparent">icon</Button>
                    </Form>
                </Navbar>
            </Container>
        </>
    )
}


