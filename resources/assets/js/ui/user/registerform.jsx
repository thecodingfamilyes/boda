import React from "react";
import {Divider, Segment, Button, Icon, Grid, Form, Header} from 'stardust';
import Register from './registerform.jsx';
import Recaptcha from 'react-recaptcha';
import Schema from './schema/registerschema.jsx';
import Winterfell from 'winterfell';

export default class RegisterForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			captchaValid: false,
			data: null
		};
	}

	onVerifyCaptcha(response) {
		this.setState({captchaValid: true});
	}

	onCaptchaExpired() {
		this.setState({captchaValid: false});
	}

	onUpdate(data) {
		this.setState({data: data});
	}

	render() {
		let schema = Schema;
		let canSubmit = this.state.captchaValid;

		return <div className="register-form">
			<Winterfell schema={schema} onUpdate={this.onUpdate.bind(this)} disableSubmit />

			<Segment vertical>
				<Recaptcha
					sitekey="6LclJwgUAAAAACYgdN7w1dwwrUysUNxtbLC5qb4h"
					render="explicit"
					onloadCallback={() => {}}
					verifyCallback={this.onVerifyCaptcha.bind(this)}
					expiredCallback={this.onCaptchaExpired.bind(this)}
				/>
			</Segment>
			<Segment vertical>
				<Button labeled icon primary disabled={!canSubmit} onClick={() => {alert('submit')}}>
					<Icon name="add user" />
					Registrarse
				</Button>
			</Segment>
		</div>;
	}
};