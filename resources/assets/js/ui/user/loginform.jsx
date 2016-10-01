import React from "react";
import {Divider, Segment, Button, Icon, Grid, Form, Header} from 'stardust';
import Register from './registerform.jsx';

export default class Login extends React.Component {
	render() {
		return <Segment padded>
			<Button color="facebook" href="/redirect">
				<Icon name="facebook" />
				Entrar con Facebook
			</Button>
			<Divider horizontal>Ó</Divider>
			<Segment vertical>
				<Grid columns={2}>
					<Grid.Column>
						<Header><Icon name="sign in" />Entrar</Header>
						<Form action="/login" method="post">
							<Form.Field>
								<label>Email</label>
								<input placeholder="Email" type="email"/>
							</Form.Field>
							<Form.Field>
								<label>Contraseña</label>
								<input placeholder="Tu contraseña" type="password"/>
							</Form.Field>
							<Segment vertical>
								<Grid columns={2}>
									<Button.Group>
										<Button type="submit" primary labeled icon>
											<Icon name="sign in" />
											Entrar
										</Button>
									</Button.Group>
								</Grid>
							</Segment>
						</Form>
					</Grid.Column>
					<Grid.Column>
						<Header><Icon name="add user" /> Registro</Header>
						<Register />
					</Grid.Column>
				</Grid>
			</Segment>
		</Segment>;
	}
};