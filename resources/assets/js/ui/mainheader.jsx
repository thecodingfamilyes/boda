import React from 'react';
import { Header, Container, Image, Segment} from 'semantic-ui-react';
import HeaderMenu from './headermenu.jsx';

export default class MainHeader extends React.Component {
	render() {
		return <Segment className="main-header" textAlign="center" vertical inverted>
			<Container>
				<HeaderMenu activePage={this.props.activePage} userInfo={this.props.userInfo}/>
			</Container>
		</Segment>;
	}
};