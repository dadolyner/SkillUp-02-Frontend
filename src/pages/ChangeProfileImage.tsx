import * as React from 'react';
import { GreenButton, WhiteButton } from '../components/Buttons/buttons.styled';
import { Header3, Paragraph, GreenText } from '../components/Typography/typography.styled';
import { BigContainer, Container, ButtonsContainer, ImageConatiner } from '../components/Modals/options.styled';
import { Avatar } from '../images/ImageExporter';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import { generateUploadURL } from '../api/s3';
import UpdateUserInfo from '../components/updateUserInfo';

const ChangeProfileImage: React.FC = () => {
    const navigate = useNavigate();
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    const [image, setImage] = React.useState(null);
    const inputFile = React.useRef(null);
    const uploadImage = async() => {
        try {
            const s3Options = { headers: { 'Content-Type': 'image/png' } };
            const url = await generateUploadURL(); 
            await axios.put(url, inputFile.current.files[0] , s3Options)
            const imageUrl = url.split('?')[0];
            setImage(imageUrl);
        } catch (error) {}
    }

    const changeProfileImage = async() => {
        try {
            const response = await axios.patch('/auth/change-profile-image', {
                image: image
            }, { headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` } });
            if (response.status === 200) {
                await UpdateUserInfo()
                navigate('/profile');
            }
        } catch (error) {}
    }
    return (
		<>
            <BigContainer>
                <Container>
                    <Header3>Profile <GreenText>settings.</GreenText></Header3>
                    <Paragraph>Change your profile photo</Paragraph>

                    <ImageConatiner>
                        <input type='file' id='avatar' ref={inputFile} style={{ display: 'none'}} onChange={() => uploadImage() }/>
		    	        <img src={image ? image ?? Avatar : userInfo.avatar} alt='avatar' height={'64px'} width={'64px'} style={{cursor: 'pointer'}} />
                    </ImageConatiner>

		    	    <GreenButton onClick={() => { inputFile.current.click() }}>UPLOAD NEW IMAGE</GreenButton>

                    <ButtonsContainer>
                        <GreenButton onClick={() => changeProfileImage()}>Submit</GreenButton>
                        <WhiteButton onClick={() => navigate('/profile-settings')}>Cancel</WhiteButton>
                    </ButtonsContainer>
                </Container>
            </BigContainer>
		</>
	);
}

export default ChangeProfileImage;
