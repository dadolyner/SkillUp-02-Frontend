import * as React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ChangeInfo from './changeInfo';
import '../styles/GlobalStyles.css'
import Home from './home';
import Login from './login';
import SignUp from './signup';
import ChangePassword from './changePassword';
import ChangeProfileImage from './changeProfileImage';
import Profile from './profile';
import GuessLocation from './guessLocation';

const App: React.FC = () => {
  return (
    <> 
        <BrowserRouter>
            <Routes>
	    		<Route path='/' element={<Home />} />
	    		<Route path='/login' element={<Login />} />
	    		<Route path='/register' element={<SignUp />} />
	    		<Route path='/profile-settings' element={<ChangeInfo />} />
	    		<Route path='/profile' element={<Profile />} />
	    		<Route path='/change-password/:token' element={<ChangePassword />} />
	    		<Route path='/change-profile-image' element={<ChangeProfileImage />} />
	    		<Route path='/add-location' element={<ChangeProfileImage />} />
	    		<Route path='/edit-location' element={<ChangeProfileImage />} />
	    		<Route path='/location/guess/:id' element={<GuessLocation />} />
	    	</Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
