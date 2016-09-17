import React from 'react';
import MainHeader from './ui/mainheader.jsx';
import Home from './pages/home.jsx';
import {Segment} from 'stardust';


export default class Layout extends React.Component {
	getPage(path) {
		const paths = {
			'/': Home
		};

		let Page = paths[path];

		return <Page />;
	}

	render() {		

		return <div className="ui">
			<MainHeader />
			<Segment className="content-wrapper" vertical>
				{this.getPage(this.props.route.path)}
			</Segment>			
		</div>;
	}
};
