import React from 'react';
import {Segment, Message, Container, Form, Button, Header, Grid, Dimmer, Loader, Icon} from 'semantic-ui-react';
import List from '../ui/asistencia/list.jsx';
import {clone, isEqual, values} from 'underscore';
import validate from 'validate.js';
import fetch from 'fetchival';
import Cookies from 'cookies-js';

const constraints = {
	name: {
		presence: {
			message: 'Por favor, indica tu nombre'
		},
		length: {
			minimum: 5,
			message: 'El nombre es demasiado corto'
		}
	},
	phone: {
		presence: {
			message: 'Por favor, indica un número de contacto'
		},
		format: {
			pattern: '[0-9]{9}',
			flags: 'i',
			message: 'Número de teléfono no válido'
		}
	},
	email: {
		presence: {
			allowEmpty: true
		},
		email: {
			message: 'Introduce un email válido'
		}
	}
};

export default class Asistencia extends React.Component {
	constructor(props) {
		super(props);

		this.form = fetch('/api/guests');

		this.state = {
			data: {
				name: '',
				relationship: '',
				city: '',
				phone: '',
				email: '',
				alojamiento: false,
				asistentes: []
			},
			hasError: false,
			validationErrors: [],
			errorField: null,
			sent: Cookies('going')
		};
	}

	onFieldChange(field, value) {
		let data = clone(this.state.data);

		if (!isEqual(data[field], value)) {
			data[field] = value;
			let hasError = false;
			let error = validate.single(value, constraints[field] || {}) || [];
			let errorField = null;

			if (error.length) {
				hasError = true;
				errorField = field;
			}

			this.setState({data: data, hasError: hasError, validationErrors: error, errorField: errorField});
		}
	}

	componentDidUpdate() {
		console.log(this.state.data);
	}

	onSubmit(e) {
		e.preventDefault();

		let errors = validate(this.state.data, constraints) || {};

		if (values(errors).length) {
			this.setState({
				hasError: true,
				validationErrors: values(errors).reduce((a,b) => a.concat(b)).map(msg => msg.split(' ').slice(1).join(' '))
			});
		} else {
			this.setState({'saving': true});

			this.form.post(this.state.data).then(() => {
				Cookies.set('going', 'true', { expires: Infinity });

				this.setState({
					sent: true,
					saving: false
				});
			});
		}
	}

	render() {
		let {data, hasError, validationErrors, errorField, saving, sent} = this.state;
		let form = <Form error={hasError}>
			<Form.Field>
				<Form.Input required label="Nombre" name="name" placeholder="Tu nombre" value={data.name} onChange={(proxy, data) => {
					this.onFieldChange('name', data.value);
				}} error={errorField =='name'} />
			</Form.Field>

			<Form.Group widths="equal">
				<Form.Input required label="Teléfono" name="phone" placeholder="Teléfono de contacto" onChange={(proxy, data) => {
					this.onFieldChange('phone', data.value);
				}}  error={errorField =='phone'}/>
				<Form.Input type="email" label="Email" name="email" placeholder="Email de contacto" onChange={(proxy, data) => {
					this.onFieldChange('email', data.value);
				}}  error={errorField =='email'}/>
			</Form.Group>

			<Form.Field>
				<Form.Select required name="relationship" label="¿Quién eres?" placeholder="Por favor, selecciona una opción" options={[
					{
						text: 'Amigos',
						value: 'amigos'
					},
					{
						text: 'Familia del novio',
						value: 'familia-novio'
					},
					{
						text: 'Familia de la novia',
						value: 'familia-novia'
					},
					{
						text: 'Otros',
						value: 'otros'
					},
					{
						text: 'Domi (En serio, amigo y mi fotógrafo personal)',
						value: 'domi'
					}
				]} onChange={(proxy, data) => {
					this.onFieldChange('relationship', data.value);
				}}  error={errorField =='relationship'}/>
				{data.relationship == 'domi' ? <Message negative>
					<Message.Header>Se necesita un discurso</Message.Header>
					<p>Es necesario presentar un discurso para poder completar el formulario. Por favor, vuelve cuando lo termines.</p>
				</Message> : null}
			</Form.Field>

			<Form.Field>
				<Form.Input required label="Ciudad" name="city" placeholder="¿De dónde vienes?" onChange={(proxy, data) => {
					this.onFieldChange('city', data.value);
				}}  error={errorField =='city'}/>
			</Form.Field>

			<Form.Field>
				<Form.Checkbox value={data.alojamiento ? 'checked' : ''} name="alojamiento" label="Marca esta casilla si necesitas alojamiento" onChange={(proxy, data) => {
					this.onFieldChange('alojamiento', data.checked);
				}}/>
			</Form.Field>

			<Form.Field>
				<label>Información sobre los asistentes</label>
				<List name={data.name} onChange={(asistentes) => {
					this.onFieldChange('asistentes', asistentes);
				}} />
			</Form.Field>

			<Form.Field>
				<Form.TextArea name="notas" label="Observaciones" placeholder="Alergias, dudas, sugerencias, etc" onChange={(proxy, data) => {
					this.onFieldChange('note', data.value);
				}}/>
			</Form.Field>

			<Button disabled={hasError} type="submit" fluid size="big" icon="mail" content="Enviar" primary onClick={this.onSubmit.bind(this)} />
			<Message error>
				<Message.Header>No se puede enviar el formulario</Message.Header>
				<ul className="ui list">
					{validationErrors.map((err, k) => <li key={'err-' + k}>{err}</li>)}
				</ul>
			</Message>
		</Form>;
		let dimmerContent = <Loader>Guardando...</Loader>;

		if (sent) {
			dimmerContent = <Header as='h2' icon className="animated rubberBand">
				<Icon name="checkmark" color="green"/>
				Tus datos de asistencia se han guardado correctamente.
            </Header>;
		}

		return <div className="ui page asistencia">
			<Segment vertical>
				<Container>
					<Header as="h2" content="Confirmación de asistencia"/>
					<Grid divided="vertically" reversed="mobile" stackable relaxed>
						<Grid.Column width={10}>
							<Dimmer active={saving || sent} inverted>
								{dimmerContent}
					    	</Dimmer>
							{form}
						</Grid.Column>
						<Grid.Column width={6}>
							<Container>
								<Header as="h3">¡Gracias por venir a nuestra boda!</Header>
								<Segment vertical>
									<p>Por favor, completa el formulario para confirmar tu asistencia a nuestra boda.</p>
									<p>Recuerda que puedes contactar con nosotros si tienes alguna duda (nuestro contacto está en tu invitación).</p>
									<p>
										Es importante que la información que proporciones sea lo más exacta posible para que podamos ultimar los detalles
										y asignarte los sitios necesarios en tu mesa.
									</p>
								</Segment>
							</Container>
						</Grid.Column>
					</Grid>
				</Container>
			</Segment>
		</div>;
	}
};
