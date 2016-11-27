import React from 'react';
import {Form, Button, Popup} from 'semantic-ui-react';

const options = [
    {
        text: 'Hombre',
        value: 'hombre'
    },
    {
        text: 'Mujer',
        value: 'mujer'
    },
    {
        text: 'Niño/a',
        value: 'niño'
    }
];

export default (props) => {
    return <Form.Group>
        <Form.Input width={7} required readOnly={props.index == 0} label="Nombre" name="name" value={props.name || ''} placeholder="Nombre del invitado" onChange={props.onChange.bind(props.index, 'name')} />
        <Form.Select
            width={7}
            label="Tipo"
            name="type"
            value={props.type || ''}
            placeholder="Seleccionar"
            options={options}
            onChange={function(e, data) {
                props.onChange('type', data.value);
            }}
            required
        />
        <Popup
            trigger={<Form.Button width={2} negative color="red" size="small" icon="trash" circular onClick={(e) => {
            	e.preventDefault();
                props.onDelete(props.index);
            }} disabled={props.index == 0} />}
            content="Eliminar de la lista"
        />

    </Form.Group>;
};
