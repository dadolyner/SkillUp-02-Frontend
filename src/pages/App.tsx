import * as React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ChangeInfo from './ChangeInfo';
import '../styles/GlobalStyles.css'
import Home from './Home';
import Login from './Login';
import Register from './Register';
import ChangePassword from './ChangePassword';
import ChangeProfileImage from './ChangeProfileImage';
import Profile from './Profile';
import GuessLocation from './LocationGuess';
import AddLocation from './AddLocation';
import EditLocation from './EditLocation';

const App: React.FC = () => {
  return (
    <> 
        <BrowserRouter>
            <Routes>
	    		<Route path='/' element={<Home />} />
	    		<Route path='/login' element={<Login />} />
	    		<Route path='/register' element={<Register />} />
	    		<Route path='/profile-settings' element={<ChangeInfo />} />
	    		<Route path='/profile' element={<Profile />} />
	    		<Route path='/change-password/:token' element={<ChangePassword />} />
	    		<Route path='/change-profile-image' element={<ChangeProfileImage />} />
	    		<Route path='/add-location' element={<ChangeProfileImage />} />
	    		<Route path='/edit-location/:id' element={<EditLocation />} />
	    		<Route path='/location/guess/:id' element={<GuessLocation />} />
	    		<Route path='/location/create' element={<AddLocation />} />
	    	</Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
