import * as React from 'react';
import Location from './location'
import { GridContainer } from './location.styled';

const LocationContainer: React.FC = () => {
    return (
        <>
            <GridContainer>
                <Location key='uuid1' image={'https://static.dw.com/image/60208186_303.jpg'} distance={250} isLocked={true} isGuessed={false} isMyLocation={true}  onClick={() => {}}/>
                <Location key='uuid2' image={'https://static.dw.com/image/60208186_303.jpg'} distance={250} isLocked={true} isGuessed={false} isMyLocation={false} onClick={() => {}}/>
                <Location key='uuid3' image={'https://static.dw.com/image/60208186_303.jpg'} distance={250} isLocked={true} isGuessed={false} isMyLocation={false} onClick={() => {}}/>
                <Location key='uuid4' image={'https://static.dw.com/image/60208186_303.jpg'} distance={250} isLocked={true} isGuessed={false} isMyLocation={false} onClick={() => {}}/>
                <Location key='uuid5' image={'https://static.dw.com/image/60208186_303.jpg'} distance={250} isLocked={true} isGuessed={false} isMyLocation={false} onClick={() => {}}/>
                <Location key='uuid6' image={'https://static.dw.com/image/60208186_303.jpg'} distance={250} isLocked={true} isGuessed={false} isMyLocation={false} onClick={() => {}}/>
                <Location key='uuid7' image={'https://static.dw.com/image/60208186_303.jpg'} distance={250} isLocked={true} isGuessed={false} isMyLocation={false} onClick={() => {}}/>
                <Location key='uuid8' image={'https://static.dw.com/image/60208186_303.jpg'} distance={250} isLocked={true} isGuessed={false} isMyLocation={false} onClick={() => {}}/>
            </GridContainer>
        </>
    )
}

export default LocationContainer;