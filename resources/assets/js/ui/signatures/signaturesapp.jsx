import React from "react";
import {Segment, Container, Grid, Header, Card, Image, Loader, Message, Icon} from 'semantic-ui-react';
import fetch from 'fetchival';
import immutable from 'immutable';
import moment from 'moment';
import SignatureList from './signaturelist.jsx';
import SignatureForm from './signatureform.jsx';

export default class SignatureApp extends React.Component {

	constructor(props) {
		super(props);
		const userinfo = CURRENT_USER;
		this.signatures = fetch('/api/signatures', {
			headers: {
				'Authorization': 'Bearer ' + (userinfo ? userinfo.token : null)
			}
		});
		this.state = {
			signatures: null
		}
	}

	componentWillMount() {
		this.fetchData();
	}

	fetchData() {
		this.signatures.get({embed: 'author'}).then((response) => {
			this.setState({signatures: immutable.fromJS(response.data)});
		});
	}

	onDelete(id) {
		if (confirm('¿Seguro que quieres borrar esta firma?')) {
			this.signatures(id).delete();
			let newdata = this.state.signatures.filter(row => row.get('id') != id);

			this.setState({signatures: newdata});
		}
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
			content = <SignatureList signatures={signatures} onDelete={this.onDelete.bind(this)}/>;
		}

		return content;
	}

	createSignature(data) {
		this.signatures.post(data).then((resp) => {
			console.log('save', resp);
		});
	}

	onAdd(text) {
		const userinfo = CURRENT_USER;
		let signatures = this.state.signatures;
		let newdata = {
			id: moment().unix(),
			body: text,
			user_id: userinfo.id,
			created_at: moment().format(),
			author: {data: userinfo}
		};
		let savedata = {
			body: text
		};

		signatures = signatures.unshift(immutable.fromJS(newdata));
		this.createSignature(savedata);

		this.setState({signatures: signatures});

	}

	render() {
		let loaderActive = !this.state.signatures;
		let loader = <Loader active={loaderActive}>Cargando...</Loader>;
		let content = this.buildContent();

		return <Segment className="signatures-page" vertical>
			{loader}
			<Container>
				<Header as="h2" content="Libro de firmas" />
				<SignatureForm onSend={this.onAdd.bind(this)}/>
				{content}
			</Container>
		</Segment>;
	}
};
