import React, { createContext } from 'react';
import './App.css';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Interests from './components/Interests';
import Awards from './components/Awards';
import Navbar from './components/Navbar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { profile, experience } from './constants/data';

export const AppContext = createContext();

function App() {
	return (
		<AppContext.Provider
			value={{
				profile,
				experience,
			}}
		>
			<div className='App'>
				<Navbar />

				<div className='container-fluid p-0'>
					<Profile />
					<hr className='m-0' />
					<Experience />
					<hr className='m-0' />
					<Education />
					<hr className='m-0' />
					<Skills />
					<hr className='m-0' />
					<Interests />
					<hr className='m-0' />
					<Awards />
				</div>
			</div>
		</AppContext.Provider>
	);
}

export default App;
