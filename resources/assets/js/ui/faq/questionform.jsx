import React from "react";
import {Segment, Button, Message, Icon, Form} from 'semantic-ui-react';
import immutable from 'immutable';
import Login from '../user/loginform.jsx';


export default class QuestionForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: null,
			sent: false
		}
	}

	onChange(e) {
		this.setState({value: e.target.value});
	}

	onSubmit(e) {
		e.preventDefault();

		if (this.state.value && this.state.value.length >= 5) {
			this.props.onSend(this.state.value);
			this.setState({value: null, sent: true});
		}
	}

	render() {
		let me = CURRENT_USER;
		let canSend = this.state.value && this.state.value.length >= 5;
		let formContent = <Form onSubmit={this.onSubmit.bind(this)}>
				<Form.Input type="text" placeholder="Escribe aquí tu pregunta" className="attached-field" onChange={this.onChange.bind(this)}/>
				<Button primary type="submit" disabled={!canSend}>Enviar tu pregunta</Button>
			</Form>;

		if (!me) {
			formContent = <Segment vertical>
				<Message warning><Icon name="warning" /> Para participar en nuestra web necesitas identificarte.</Message>
				<Login />
			</Segment>;
		}

		if (this.state.sent) {
			formContent = <Message icon>
				<Icon name='thumbs outline up' />
				<Message.Content>
					¡Gracias por tu pregunta! Te contestaremos en cuanto podamos.
				</Message.Content>
			</Message>;
		}

		return formContent;
	}
};