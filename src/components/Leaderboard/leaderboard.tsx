import * as React from 'react';
import TimeAgo from '../timeAgo';
import Distance from '../distance';
import { Container, Place, UserInfoContainer, TimestampContainer, DistanceContainer } from './leaderboard.styled';

type LeaderBoardProps = {
    user: string;
    userPosition: number;
    distance: string;
    image: string;
    timestamp: string;
    isMeUser: boolean;
}

const Leaderboard: React.FC<LeaderBoardProps> = (props: LeaderBoardProps) => {
    const { user, userPosition, image, distance, timestamp, isMeUser } = props;
    return (
        <>
            <Container ifUser={isMeUser}>
                <Place position={userPosition}>{userPosition}</Place>

                <img src={image} alt="profile" width={'45px'} height={'45px'} style={{borderRadius: '50%'}}/>

                <div>
                    <UserInfoContainer ifUser={isMeUser}>{ isMeUser ? 'You' : user}</UserInfoContainer>
                    <TimestampContainer ifUser={isMeUser}>{ TimeAgo(timestamp) }</TimestampContainer>
                </div>

                <DistanceContainer ifUser={isMeUser}>{ Distance(+distance) }</DistanceContainer>
            </Container>
        </>
    );
}

export default Leaderboard;