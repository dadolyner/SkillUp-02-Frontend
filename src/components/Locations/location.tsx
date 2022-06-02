import * as React from 'react';
import { Header4 } from '../Typography/typography.styled';
import { Container, Background, Holder } from './location.styled';
import { Lock } from '../../images/ImageExporter'
import { EditLocation, DeleteLocation } from '../Buttons/buttons.styled';
import Distance from '../distance';

type LocationProps = {
    image: string;
    distance?: number;
    isLocked?: boolean;
    isGuessed?: boolean;
    isMyLocation?: boolean;
    className?: string;
    onClick?: () => void;
}

const Location: React.FC<LocationProps> = (props: LocationProps) => {
    const { image, isLocked, isGuessed, isMyLocation, className } = props;
    let { distance } = props;

    return (
        <>
            <Container image={image} onClick={() => {}} className={className ? className : ''}>
                { isMyLocation && <EditLocation></EditLocation>}
                { isMyLocation && <DeleteLocation></DeleteLocation>}
            
                <Background className={((isLocked || isGuessed) && !isMyLocation) ? 'blured' : ''}></Background>
                <Holder>
                    { isLocked && !isMyLocation && <img src={Lock} alt="lock" height={'40px'} width={'30px'}/>}
                    { isGuessed && !isLocked && <Header4>{Distance(distance)}</Header4>}  
                </Holder>
            </Container>
        </>
    )
}

export default Location;