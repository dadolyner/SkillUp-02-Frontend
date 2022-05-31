import * as React from 'react';
import { Header4 } from '../Typography/typography.styled';
import { Container, Background, Holder } from './location.styled';
import { Lock } from '../../images/ImageExporter'
import { EditLocation, DeleteLocation } from '../Buttons/buttons.styled';

type LocationProps = {
    image: string;
    distance: number;
    isLocked: boolean;
    isGuessed: boolean;
    isMyLocation: boolean;
    onClick?: () => void;
}

const Location: React.FC<LocationProps> = (props: LocationProps) => {
    const { image, isLocked, isGuessed, isMyLocation } = props;
    let { distance } = props;

    const getPropperDistance = (distance: number) => {
        if (distance < 1) return `${distance * 1000} m`;
        else return `${distance} km`;
    }


    return (
        <>
            <Container image={image} onClick={() => {}}>
                { isMyLocation && <EditLocation></EditLocation>}
                { isMyLocation && <DeleteLocation></DeleteLocation>}
            
                <Background className={((isLocked || isGuessed) && !isMyLocation) ? 'blured' : ''}></Background>
                <Holder>
                    { isLocked && !isMyLocation && <img src={Lock} alt="lock" height={'40px'} width={'30px'}/>}
                    { isGuessed && !isLocked && <Header4>{getPropperDistance(distance)}</Header4>}  
                </Holder>
            </Container>
        </>
    )
}

export default Location;