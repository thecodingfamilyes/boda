import React from "react";
import {Modal, Button, Icon, Header, Segment} from 'stardust';
import Login from './loginform.jsx'

export default class LoginModal extends React.Component {
	render() {
		return <Modal dimmer="blurring" active={this.props.active}>
			<Header><Icon name='sign in' /> Entrar</Header>
			<Modal.Content>
				<Segment vertical>
					<p>Por favor, identifícate para poder participar en nuestra web.</p>
				</Segment>
				<Login />
			</Modal.Content>
			<Modal.Actions>
				<Button color='red' onClick={this.props.onHide}>
					<Icon name='remove' /> Cancelar
				</Button>
			</Modal.Actions>
		</Modal>
	}
};