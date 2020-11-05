import React, { useState, useContext } from 'react';
import { AppContext } from '../App';

const Experience = () => {
	const { experience } = useContext(AppContext);
	const { development } = experience[0];
	const { projects } = experience[1];
	const { infrastructure } = experience[2];

	const [prevExp, setPrevExperience] = useState(false);

	const handlePrevExp = () => {
		setPrevExperience(!prevExp);
	};

	const renderExp = (exp) => {
		return exp.map((item) => (
			<div
				className='d-flex flex-column flex-md-row justify-content-between mb-5'
				key={item.id}
			>
				<div className='flex-grow-1'>
					<h3 className='mb-0'>{item.title}</h3>
					<div className='subheading mb-3'>{item.company}</div>
					<p>{item.duties}</p>
				</div>
				<div className='flex-shrink-0'>
					<span className='text-primary'>{item.dates}</span>
				</div>
			</div>
		));
	};

	return (
		<section className='resume-section' id='experience'>
			<div className='resume-section-content'>
				<h2 className='mb-5'>Experience</h2>
				{renderExp(development)}
				<button className='btn btn-secondary' onClick={handlePrevExp}>
					{!prevExp
						? '...show previous IT experience'
						: '...hide previous IT experience'}
				</button>
				{prevExp ? renderExp(projects) : null}
				{prevExp ? renderExp(infrastructure) : null}
			</div>
		</section>
	);
};

export default Experience;
