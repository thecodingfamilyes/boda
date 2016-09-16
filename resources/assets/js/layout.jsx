import React from 'react';
import MainHeader from './ui/mainheader.jsx';
import {Segment} from 'stardust';

export default class Layout extends React.Component {
	render() {
		return <div className="ui">
			<MainHeader />
			<Segment className="content-wrapper" vertical>
				contenido
			</Segment>
		</div>;
	}
};
