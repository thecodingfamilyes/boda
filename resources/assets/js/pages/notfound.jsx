import React from 'react';
import {Image, Container} from 'semantic-ui-react';

export default class NotFound extends React.Component {
	render() {
		return <div className="page notfound">
			<Container>
				<Image src="/img/notfound.jpg" size='medium' shape='circular' />
				<div className="notfound-msg">Página no encontrada</div>
			</Container>
		</div>;
	}
}