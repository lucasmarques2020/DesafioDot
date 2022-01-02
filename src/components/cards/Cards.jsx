import {
    Button,
    Card
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import Star from '../../assets/img/cards/star.png'

export default function Cards(props) {
    return (
        <>
            <Card className='Cards'>
                <Card.Img className='CardsImg' variant="top"
                    src={'https://image.tmdb.org/t/p/w500/' + props.image}
                />
                <div className='InformationDate'>
                <Card.Text className='CardsTextDate'>{props.date}</Card.Text>
                </div>
                <Card.Body className='CardsBody'>
                    <Card.Title className='CardsTitle'>{props.title}</Card.Title>
                    <Card.Body className='CardsBodyInformation'>
                        <Card.Img className='CardsImgStar mb-0 m-2' variant="top" src={Star} />
                        <Card.Text className='CardsTextVote mb-0 m-2'>{props.vote}</Card.Text>
                        <Card.Text className='CardsTextGener mb-0 m-2'>{props.gener}</Card.Text>
                    </Card.Body>
                    <Card.Text>{props.value}</Card.Text>
                    <Button className='ButtonAdc'>Adicionar</Button>
                </Card.Body>
            </Card>
        </>
    )
}

