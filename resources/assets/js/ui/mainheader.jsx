import React from 'react';
import { Header, Container, Image, Segment} from 'semantic-ui-react';
import HeaderMenu from './headermenu.jsx';
import VisibilitySensor from 'react-visibility-sensor';

export default class MainHeader extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			photoVisible: true
		};
	}

	onChange(visible) {
		this.setState({photoVisible: visible});
	}

	render() {
		let headermode = 'home';

		if (!this.state.photoVisible) {
			headermode = 'normal';
		}

		return <Segment className="main-header" textAlign="center" vertical inverted>
			<Segment vertical textAlign="center">
				<HeaderMenu mode={headermode} activePage={this.props.activePage} userInfo={this.props.userInfo}/>
			</Segment>
			<VisibilitySensor minTopValue={250} onChange={this.onChange.bind(this)} delay={250} />
		</Segment>;
	}
};