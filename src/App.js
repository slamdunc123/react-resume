import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Interests from './components/Interests';
import Awards from './components/Awards';
import Navbar from './components/Navbar';

function App() {
	return (
		<div classNameName='App'>
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
	);
}

export default App;
