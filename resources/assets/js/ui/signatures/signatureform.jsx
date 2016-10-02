import React from "react";
import {Segment, Button, Message, Icon} from 'stardust';
import immutable from 'immutable';
import Login from '../user/loginform.jsx';


export default class SignatureForm extends React.Component {

	render() {
		let me = CURRENT_USER;
		let formContent = <Segment padded><form className="ui reply form">
			<div className="textarea">
				<textarea defaultValue="" placeholder="Escribe aquí tu firma" />
			</div>
			<Button fluid color="blue" attached="bottom">Enviar tu firma</Button>
		</form></Segment>;

		if (!me) {
			formContent = <div>
				<Message attached warning><Icon name="warning" /> Para participar en nuestra web necesitas identificarte.</Message>
				<Login />
			</div>;
		}

		return formContent;
	}
};