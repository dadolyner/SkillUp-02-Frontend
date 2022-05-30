import * as React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import '../styles/GlobalStyles.css'
import Login from './login';
import SignUp from './signup';


const App: React.FC = () => {
  return (
    <> 
        <BrowserRouter>
            <Routes>
	    		<Route path='/' element={''} />
	    		<Route path='/login' element={<Login />} />
	    		<Route path='/register' element={<SignUp />} />
	    	</Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
