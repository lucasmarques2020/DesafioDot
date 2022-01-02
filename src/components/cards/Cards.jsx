import {
    Button,
    Card
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

export default function Cards(props) {
    return (
        <>
            <Card className='Cards'>
                <Card.Img className='CardsImg'variant="top" src={'https://image.tmdb.org/t/p/w500/'+props.image} />
                <Card.Body className='CardsBody'>
                    <Card.Title className='CardsTitle'>{props.title}</Card.Title>
                    <Card.Text>{props.genero}</Card.Text>
                    <Card.Text>{props.value}</Card.Text>
                    <Button className='ButtonAdc'>Adicionar</Button>
                </Card.Body>
            </Card>
        </>
    )
}

