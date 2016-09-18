import React from "react";
import {Segment, Button} from 'stardust';
import immutable from 'immutable';


export default class SignatureForm extends React.Component {

	render() {
		return <Segment>
			<form className="ui reply form">
				<div className="textarea">
					<textarea defaultValue="" placeholder="Escribe aquí tu firma" />
				</div>
				<Button fluid color="blue" attached="bottom">Enviar tu firma</Button>
			</form>
		</Segment>;
	}
};