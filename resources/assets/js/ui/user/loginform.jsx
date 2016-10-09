import React from "react";
import {Divider, Segment, Button, Icon, Grid, Form, Header} from 'stardust';
import Register from './registerform.jsx';

export default class Login extends React.Component {
	render() {
		return <Segment vertical>
			<Button color="facebook" href="/redirect">
				<Icon name="facebook" />
				Entrar con Facebook
			</Button>
			<Button color="google plus" href="/google/redirect">
				<Icon name="google" />
				Entrar con Google
			</Button>
		</Segment>;
	}
};