import {
    Button,
    Card
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Filme from '../../assets/img/cards/filme.png'
import './styles.css'

export default function Cards() {
    return (
        <>
            <Card className='Cards'>
                <Card.Img className='CardsImg'variant="top" src={Filme} />
                <Card.Body className='CardsBody'>
                    <Card.Title>Nome do Filme</Card.Title>
                    <Card.Text>Genero</Card.Text>
                    <Card.Text>R$ 77,99</Card.Text>
                    <Button className='ButtonAdc'>Adicionar</Button>
                </Card.Body>
            </Card>
        </>
    )
}

