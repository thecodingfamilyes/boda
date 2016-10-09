import React from 'react';
import MainHeader from './ui/mainheader.jsx';
import Home from './pages/home.jsx';
import Boda from './pages/boda.jsx';
import Firmas from './pages/firmas.jsx';
import NotFound from './pages/notfound.jsx';
import {Segment} from 'semantic-ui-react';
import Footer from './ui/footer.jsx';

export default class Layout extends React.Component {
	getPage(path) {
		const paths = {
			'/': Home,
			'/boda': Boda,
			'/firmas': Firmas
		};

		let Page = paths[path] || NotFound;

		return <Page />;
	}

	render() {

		return <div className="ui">
			<MainHeader activePage={this.props.route.path} />
			<Segment className="content-wrapper" vertical>
				{this.getPage(this.props.route.path)}
			</Segment>
			<Footer />
		</div>;
	}
};
