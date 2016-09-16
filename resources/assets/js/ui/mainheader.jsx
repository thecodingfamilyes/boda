import React from 'react';
import { Header, Container, Image, Segment, Menu} from 'stardust';

export default class MainHeader extends React.Component {
	render() {
		return <Segment className="main-header" textAlign="center" vertical inverted>
			<Container>
				<Menu pointing secondary inverted borderless size="large">
					<Menu.Header as="h1" content="El diario de Perlita" />
					<Menu.Menu position="right">
						<Menu.Item name="Home" active />
						<Menu.Item name="La boda" />
						<Menu.Item name="Libro de firmas" />
						<Menu.Item name="Pregúntanos" />
						<Menu.Item name="Asistentes" />
					</Menu.Menu>
				</Menu>
			</Container>
		</Segment>;
	}
};