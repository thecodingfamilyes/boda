import React from 'react';
import { Header, Container, Image, Segment} from 'stardust';
import HeaderMenu from './headermenu.jsx';

export default class MainHeader extends React.Component {
	render() {
		return <Segment className="main-header" textAlign="center" vertical inverted>
			<Container>
				<HeaderMenu />
			</Container>
		</Segment>;
	}
};