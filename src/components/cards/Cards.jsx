import {
    Button,
    Card
} from 'react-bootstrap'
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import Star from '../../assets/img/cards/star.png'
import Lottie from 'react-lottie'
import Lotties from '../../assets/img/cards/heart.json'

export default function Cards(props) {
    const [isLiked, setLikeState] = useState(false);
    const [animationState, setAnimationState] = useState({
        isStopped: true, isPaused: false,
        direction: -1,
    });

    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: Lotties,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <>
            <Card className='Cards'>
                <Card.Img className='CardsImg' variant="top"
                    src={'https://image.tmdb.org/t/p/w500/' + props.image}
                />
                <Button className='ButtonLotties' variant="transparent" onClick={() => {
                    const reverseAnimation = -1;
                    const normalAnimation = 1;

                    setAnimationState({
                        ...animationState,
                        isStopped: false,
                        direction: animationState.direction === normalAnimation
                            ? reverseAnimation
                            : normalAnimation,
                    })
                    setLikeState(!isLiked);
                }}>
                    <Lottie
                        options={defaultOptions}
                        width={200}
                        height={200}
                        direction={animationState.direction}
                        isStopped={animationState.isStopped}
                        isPaused={animationState.isPaused}
                    />
                </Button>


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

