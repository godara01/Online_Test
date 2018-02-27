import React from 'react';
import { render } from 'react-dom';

// import Header from './Header.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';


class Landing extends React.Component {
	render(){
		return(
			<div>
			<Content />
			<Footer />
			</div>
		);
	}
}

export default Landing;
