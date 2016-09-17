import React from 'react';
import { Header, Container, Image, Segment, Menu} from 'stardust';
import { Link } from 'react-router';

export default class HeaderMenu extends React.Component {
	render() {
		let activePath = this.props.activePage;

		return <Menu pointing secondary inverted borderless size="large">
			<Menu.Header as="h1" content="El diario de Perlita" />
			<Menu.Menu position="right"> 
				<Menu.Item name="Home" active={activePath == '/'}><Link to="/">Home</Link></Menu.Item>
				<Menu.Item name="La boda" active={activePath == '/boda'}><Link to="/boda">La Boda</Link></Menu.Item>
				<Menu.Item name="Libro de firmas" active={activePath == '/firmas'}> <Link to="/firmas">Libro de firmas</Link> </Menu.Item>
				<Menu.Item name="Pregúntanos" active={activePath == '/faq'}> <Link to="/faq">Pregúntanos</Link> </Menu.Item>
				<Menu.Item name="Asistentes" active={activePath == '/asistentes'}> <Link to="/asistentes">Asistentes</Link> </Menu.Item>
			</Menu.Menu>
		</Menu>
	}
};