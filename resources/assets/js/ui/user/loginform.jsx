import React from "react";
import {Divider, Segment, Button, Icon} from 'stardust';

export default class Login extends React.Component {
	render() {
		return <Segment padded>
			<Button color="facebook" href="/redirect">
				<Icon name="facebook" />
				Entrar con Facebook
			</Button>
			<Divider horizontal>Ó</Divider>
			<Segment vertical>
				test
			</Segment>
		</Segment>;
	}
};