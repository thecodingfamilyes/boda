import React from 'react';
import { Header, Container, Image, Segment, Menu} from 'stardust';
import { Link } from 'react-router';

export default class HeaderMenu extends React.Component {
	render() {
		return <Menu pointing secondary inverted borderless size="large">
			<Menu.Header as="h1" content="El diario de Perlita" />
			<Menu.Menu position="right">
				<Menu.Item name="Home" active><Link to="/">Home</Link></Menu.Item>
				<Menu.Item name="La boda" />
				<Menu.Item name="Libro de firmas" />
				<Menu.Item name="Pregúntanos" />
				<Menu.Item name="Asistentes" />
			</Menu.Menu>
		</Menu>
	}
};