import React from "react";
import {Divider, Segment, Button, Icon, Grid, Form, Header} from 'stardust';
import Register from './registerform.jsx';
import Recaptcha from 'react-recaptcha';


export default class RegisterForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			captchaValid: false
		};
	}

	onVerifyCaptcha(response) {
		this.setState({captchaValid: true});
	}

	onCaptchaExpired() {
		this.setState({captchaValid: false});
	}

	render() {
		return <Form action="/register" method="post">
			<Form.Field>
				<label>Nombre</label>
				<input placeholder="Tu nombre" type="text"/>
			</Form.Field>
			<Form.Field>
				<label>Email</label>
				<input placeholder="Email" type="email"/>
			</Form.Field>
			<Form.Field>
				<label>Contraseña</label>
				<input placeholder="Tu contraseña" type="password"/>
			</Form.Field>
			<Form.Field>
				<label>Repetir contraseña</label>
				<input placeholder="Tu contraseña" type="password"/>
			</Form.Field>
			<Recaptcha
				sitekey="6LclJwgUAAAAACYgdN7w1dwwrUysUNxtbLC5qb4h"
				render="explicit"
				onloadCallback={() => {}}
				verifyCallback={this.onVerifyCaptcha.bind(this)}
				expiredCallback={this.onCaptchaExpired.bind(this)}
			/>
			<Segment vertical>
				<Button type="submit" primary disabled={!this.state.captchaValid}>
					<Icon name="add user" />
					Registrarse
				</Button>
			</Segment>
		</Form>;
	}
};