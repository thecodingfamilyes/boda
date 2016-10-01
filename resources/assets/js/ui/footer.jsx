import React from 'react';
import {Container, Segment, Menu, Header} from 'stardust';
import HeaderMenu from './headermenu.jsx';
import { Link } from 'react-router';
import PerlitaSignature from '../ui/signature.jsx';

export default class Footer extends React.Component {
	render() {
		return <Segment className="footer">
			<Container>
				<div className="site-data">
					<Header as="h4" className="site-name" content="&copy; 2016 - 2017 El diario de Perlita"/>
					<Menu pointing secondary inverted borderless stackable size="large">
						<Menu.Menu>
							<Menu.Item name="Home"><Link to="/">Home</Link></Menu.Item>
							<Menu.Item name="La boda"><Link to="/boda">La Boda</Link></Menu.Item>
							<Menu.Item name="Libro de firmas"> <Link to="/firmas">Libro de firmas</Link> </Menu.Item>
							<Menu.Item name="Pregúntanos"> <Link to="/faq">Pregúntanos</Link> </Menu.Item>
							<Menu.Item name="Asistentes"> <Link to="/asistentes">Asistentes</Link> </Menu.Item>
						</Menu.Menu>
					</Menu>
				</div>
				<PerlitaSignature />
			</Container>
		</Segment>;
	}
};