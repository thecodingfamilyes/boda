import React from 'react';
import {Segment, Container, Form, Button, Header, Grid} from 'semantic-ui-react';
import Guest from './guest.jsx';
import {clone, values} from 'underscore';

export default class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            asistentes: [
                {
                    name: props.name || '',
                    type: null
                }
            ]
        };
    }

    removeGuest(key) {
        let guests = clone(this.state.asistentes);

        guests.splice(key, 1);

        this.setState({asistentes: values(guests)});
    }

    updateGuest(value, key, field) {
        let guests = clone(this.state.asistentes);

        guests[key][field] = value;
        this.setState({asistentes: values(guests)});
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.name != this.state.asistentes[0].name) {
            let guests = clone(this.state.asistentes);
            guests[0].name = nextProps.name;

            this.setState({asistentes: values(guests)});
        }
    }

    componentDidUpdate() {
        this.props.onChange(clone(this.state.asistentes));
    }

    componentDidMount() {
        this.props.onChange(clone(this.state.asistentes));
    }

    buildList() {
        return this.state.asistentes.map((guest, k) => {
        	return <Guest {...guest} index={k} key={'guest-'+k} onChange={(field, e) => {
                if (field == 'type') {
                    this.updateGuest(e, k, field);
                } else {
                    this.updateGuest(e.target.value, k, field);
                }
        	}} onDelete={this.removeGuest.bind(this)}/>;
        });
    }

    addGuest(e) {
        e.preventDefault();

        let guests = clone(this.state.asistentes);

        guests.push({
            name: '',
            type: null
        });

        this.setState({asistentes: guests});
    }

    render() {
        let {asistentes} = this.state;

        return <div className="asistentes-field">
            <Form.Field>
                <Button default
                    compact
                    onClick={this.addGuest.bind(this)}
                    content="Añadir asistente"
                    label={{
                        as: 'span',
                        basic: true,
                        content: asistentes.length
                    }}
                />
            </Form.Field>
            <Form.Field>
                {this.buildList()}
            </Form.Field>
        </div>;
    }
};
