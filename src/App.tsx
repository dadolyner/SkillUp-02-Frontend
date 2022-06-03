import * as React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './styles/GlobalStyles.css'
import ChangeInfo from './pages/ChangeInfo';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ChangePassword from './pages/ChangePassword';
import ChangeProfileImage from './pages/ChangeProfileImage';
import Profile from './pages/Profile';
import GuessLocation from './pages/LocationGuess';
import AddLocation from './pages/AddLocation';
import EditLocation from './pages/EditLocation';
import DeleteLocation from './pages/DeleteLocation';
import LocationConfirmation from './pages/DeleteLocationConfirmation';

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
	    		<Route path='/delete-location/:id' element={<DeleteLocation />} />
	    		<Route path='/delete-location/confirm' element={<LocationConfirmation />} />
	    		<Route path='/location/guess/:id' element={<GuessLocation />} />
	    		<Route path='/location/create' element={<AddLocation />} />
	    	</Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
