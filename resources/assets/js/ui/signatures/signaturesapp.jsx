import React from "react";
import {Segment, Container, Grid, Header, Card, Image, Loader, Message, Icon} from 'stardust';
import fetch from 'fetchival';
import immutable from 'immutable';
import SignatureList from './signaturelist.jsx';
import SignatureForm from './signatureform.jsx';

export default class SignatureApp extends React.Component {

	constructor(props) {
		super(props);

		this.signatures = fetch('/api/signatures');
		this.state = {
			signatures: null
		}
	}

	componentWillMount() {
		this.signatures.get({embed: 'author'}).then((response) => {
			console.log(response);
			this.setState({signatures: immutable.fromJS(response.data)});
		});
	}

	buildContent() {
		let content = <Message icon>
				<Icon name='warning circle' />
				<Message.Content>
					<Message.Header>No hay firmas por el momento</Message.Header>
					No te cortes, ¡déjanos tu firma!
				</Message.Content>
			</Message>;
		let signatures = this.state.signatures;

		if (signatures && signatures.size) {
			content = <SignatureList signatures={signatures} />;
		}

		return content;
	}

	render() {
		let loaderActive = !this.state.signatures;
		let loader = <Loader active={loaderActive}>Cargando...</Loader>;
		let content = this.buildContent();

		return <Segment className="signatures-page" vertical>
			{loader}
			<Container>
				<Header as="h2" content="Libro de firmas" />
				<SignatureForm />
				{content}
			</Container>
		</Segment>;
	}
};