import React from 'react';

const Profile = () => {
	return (
		<section className='resume-section' id='profile'>
			<div className='resume-section-content'>
				<h1 className='mb-0 profile-name'>
					Duncan
					<span className='text-primary'>Laidlaw</span>
				</h1>
				<div className='subheading mb-5'>
					+44 7968903859 ·
					<a href='mailto:name@email.com'>
						duncan.laidlaw@btinternet.com
					</a>
				</div>
				<p className='lead mb-5'>
					I am experienced in leveraging agile frameworks to provide a
					robust synopsis for high level overviews. Iterative
					approaches to corporate strategy foster collaborative
					thinking to further the overall value proposition.
				</p>
				<div className='social-icons'>
					<a className='social-icon' href='#'>
						<i className='fab fa-linkedin-in'></i>
					</a>
					<a className='social-icon' href='#'>
						<i className='fab fa-github'></i>
					</a>
					<a className='social-icon' href='#'>
						<i className='fab fa-twitter'></i>
					</a>
					<a className='social-icon' href='#'>
						<i className='fab fa-facebook-f'></i>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Profile;
