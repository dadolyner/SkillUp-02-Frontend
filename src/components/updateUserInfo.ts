import axios from '../api/axios';

const UpdateUserInfo = async () => {
    const accessToken = localStorage.getItem('accessToken')
    const userInfoResponse = await axios.get('/user/me', { headers: { Authorization: `Bearer ${accessToken}` } });
    localStorage.setItem('userInfo', JSON.stringify(userInfoResponse.data));
}

export default UpdateUserInfo;