import React from 'react';
import MainHeader from './ui/mainheader.jsx';
import Home from './pages/home.jsx';
import Boda from './pages/boda.jsx';
import Firmas from './pages/firmas.jsx';
import Faq from './pages/faq.jsx';
import Asistencia from './pages/asistencia.jsx';
import NotFound from './pages/notfound.jsx';
import {Segment} from 'semantic-ui-react';
import Footer from './ui/footer.jsx';
import HeaderMenu from './ui/headermenu.jsx';

export default class Layout extends React.Component {
	getPage(path) {
		const paths = {
			'/': Home,
			'/boda': Boda,
			'/firmas': Firmas,
			'/faq': Faq,
			'/asistencia': Asistencia
		};

		let Page = paths[path] || NotFound;

		return <Page />;
	}

	render() {
		let header = <HeaderMenu activePage={this.props.route.path}/>
		let isHome = this.props.route.path == '/';
		let homeclass = '';

		if (isHome) {
			header = <MainHeader activePage={this.props.route.path} />;
			homeclass = ' home'
		}

		return <div className="ui">
			{header}
			<Segment className={"content-wrapper" + homeclass} vertical>
				{this.getPage(this.props.route.path)}
			</Segment>
			<Footer />
		</div>;
	}
};
