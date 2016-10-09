import React from "react";
import {Segment, Button, Message, Icon, Form} from 'semantic-ui-react';
import immutable from 'immutable';


export default class AnswerForm extends React.Component {
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
		let canSend = this.state.value && this.state.value.length >= 5;
		let formContent = <Form onSubmit={this.onSubmit.bind(this)}>
				<Form.TextArea placeholder="Respuesta" name="answer" className="attached-field" onChange={this.onChange.bind(this)}/>
				<Button primary type="submit" disabled={!canSend}>Contestar</Button>
			</Form>;

		return formContent;
	}
};