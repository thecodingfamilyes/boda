import React from "react";
import Questions from '../ui/faq/faqapp.jsx';
import {Segment, Container, Grid, Header, Menu, List, Icon} from 'semantic-ui-react';
import Map from '../ui/map.jsx';

export default class Faq extends React.Component {

	constructor(props) {
		super(props);

		this.state = { activeItem: 'peluqueria' };
	}

	handleItemClick(e, { name }) {
		this.setState({ activeItem: name });
	}

	render() {
		const { activeItem } = this.state;

		const tabs_content = {
			peluqueria: <div className="util-info"><p>Linares cuenta con numerosas peluquerías en las que poder ponerte guap@ para la boda. Nosotros, personalmente, conocemos las siguientes:</p>
				<List relaxed horizontal className="legend" size="tiny">
					<List.Item>
						<List.Icon name='female' size='large' verticalAlign='middle' />
						<List.Content>Mujeres</List.Content>
					</List.Item>
					<List.Item>
						<List.Icon name='male' size='large' verticalAlign='middle' />
						<List.Content>Hombres</List.Content>
					</List.Item>
				</List>
				<List divided relaxed>
			    <List.Item>
			      <List.Icon name='female' size='large' verticalAlign='middle' />
						<List.Icon name='male' size='large' verticalAlign='middle' />
			      <List.Content>
			        <List.Header>Peluquería Bubbles</List.Header>
			        <List.Description>Corredera de San Marcos, 46.<br/>
							<a href="tel:953 60 06 69"><Icon name='phone' />953 60 06 69</a></List.Description>
			      </List.Content>
			    </List.Item>
					<List.Item>
						<List.Icon name='female' size='large' verticalAlign='middle' />
			      <List.Icon name='male' size='large' verticalAlign='middle' />
			      <List.Content>
			        <List.Header>Peluquería Lillo</List.Header>
			        <List.Description>Calle Cervantes, 10.<br/>
							<a href="tel:953 65 22 21"><Icon name='phone' />953 65 22 21</a></List.Description>
			      </List.Content>
			    </List.Item>
					<List.Item>
						<List.Icon name='female' size='large' verticalAlign='middle' disabled />
			      <List.Icon name='male' size='large' verticalAlign='middle' />
			      <List.Content>
			        <List.Header>Nacho peluquero</List.Header>
			        <List.Description>Calle Julio Burell, 30.<br/>
							<a href="tel:606 10 53 79"><Icon name='phone' />606 10 53 79</a></List.Description>
			      </List.Content>
			    </List.Item>
				</List>
			</div>,
			alojamiento: <div className="util-info">
				<p>Según el número de personas de fuera que necesiten alojamiento en Linares, intentaremos que nos hagan precio por número de habitaciones en algún hotel. Por ello, es importante que cuando confirmes tu asistencia nos indiques si necesitas alojamiento. De todos modos, os dejamos los datos de los hoteles buenos de los que tenemos buenas referencias:</p>
				<List divided relaxed>
			    <List.Item>
						<List.Icon name='building outline' size='large' verticalAlign='middle' />
			      <List.Content>
			        <List.Header>Hotel Santiago</List.Header>
			        <List.Description>Calle Santiago, 3.<br/>
							<a href="tel:953 69 30 40"><Icon name='phone' />953 69 30 40</a></List.Description>
			      </List.Content>
			    </List.Item>
					<List.Item>
						<List.Icon name='building outline' size='large' verticalAlign='middle' />
			      <List.Content>
			        <List.Header>Hotel Aníbal</List.Header>
			        <List.Description>Calle Cid Campeador, 11.<br/>
							<a href="tel:953 65 04 00"><Icon name='phone' />953 65 04 00</a></List.Description>
			      </List.Content>
			    </List.Item>
					<List.Item>
						<List.Icon name='building outline' size='large' verticalAlign='middle' />
			      <List.Content>
			        <List.Header>Hotel Cervantes</List.Header>
			        <List.Description>Calle Cervantes, 23.<br/>
							<a href="tel:953 69 05 00"><Icon name='phone' />953 69 05 00</a></List.Description>
			      </List.Content>
			    </List.Item>
				</List>
			</div>,
			transporte: <div className="util-info">
				<p><Icon name="taxi"/> Teléfono Taxi: 953 27 10 10</p>
			</div>,
			bares: <div className="util-info">
				<p>Añadimos esta nueva sección de Bares/Restaurantes porque creemos que no os podéis marchar de Linares sin degustar las ricas tapas de algunos de los que, para nosotros, son los mejores sitios de Linares:</p>
				<List relaxed horizontal className="legend" size="tiny">
					<List.Item>
						<List.Icon name='beer' size='large' verticalAlign='middle' />
						<List.Content>Tapas</List.Content>
					</List.Item>
					<List.Item>
						<List.Icon name='food' size='large' verticalAlign='middle' />
						<List.Content>Restaurante</List.Content>
					</List.Item>
					<List.Item>
						<List.Icon name='cocktail' size='large' verticalAlign='middle' />
						<List.Content>Copas</List.Content>
					</List.Item>
				</List>
				<List divided relaxed>
			    <List.Item>
						<List.Icon name='beer' size='large' verticalAlign='middle' />
						<List.Icon name='food' size='large' verticalAlign='middle' />
						<List.Icon name='cocktail' size='large' verticalAlign='middle' disabled />
			      <List.Content>
			        <List.Header>Taberna/Restaurante "Canela en Rama"</List.Header>
			        <List.Description>Taberna: Calle Espronceda, 22<br/>
							Restaurante: Calle República Argentina, 12.<br/>
							<a href="tel:953 60 25 32"><Icon name='phone' />953 60 25 32</a></List.Description>
			      </List.Content>
			    </List.Item>
					<List.Item>
						<List.Icon name='beer' size='large' verticalAlign='middle' disabled />
						<List.Icon name='food' size='large' verticalAlign='middle' />
						<List.Icon name='cocktail' size='large' verticalAlign='middle' disabled />
			      <List.Content>
			        <List.Header>Restaurante "Los Sentidos"</List.Header>
			        <List.Description>Calle Doctor, 13.<br/>
							<a href="tel:953 65 10 72"><Icon name='phone' />953 65 10 72</a></List.Description>
			      </List.Content>
			    </List.Item>
					<List.Item>
						<List.Icon name='beer' size='large' verticalAlign='middle' />
						<List.Icon name='food' size='large' verticalAlign='middle' disabled />
						<List.Icon name='cocktail' size='large' verticalAlign='middle' disabled />
			      <List.Content>
			        <List.Header>Café "Mañas" - Bar "Los Jamones"</List.Header>
			        <List.Description>Avenida de España, 83.<br/>
							<a href="tel:953 69 40 09"><Icon name='phone' />953 69 40 09</a></List.Description>
			      </List.Content>
			    </List.Item>
					<List.Item>
						<List.Icon name='beer' size='large' verticalAlign='middle' />
						<List.Icon name='food' size='large' verticalAlign='middle' disabled />
						<List.Icon name='cocktail' size='large' verticalAlign='middle' disabled />
			      <List.Content>
			        <List.Header>Taberna "El Largartijo"</List.Header>
			        <List.Description>Calle Pérez Galdós (Ventanas), 27.<br/>
							<a href="tel:697 92 49 93"><Icon name='phone' />697 92 49 93</a></List.Description>
			      </List.Content>
			    </List.Item>
					<List.Item>
						<List.Icon name='beer' size='large' verticalAlign='middle' disabled />
						<List.Icon name='food' size='large' verticalAlign='middle' disabled />
						<List.Icon name='cocktail' size='large' verticalAlign='middle' />
			      <List.Content>
			        <List.Header>"La Galería"</List.Header>
			        <List.Description>Calle Espronceda, 3.<br/>
							<a href="tel:953 09 75 32"><Icon name='phone' />953 09 75 32</a></List.Description>
			      </List.Content>
			    </List.Item>
					<List.Item>
						<List.Icon name='beer' size='large' verticalAlign='middle' disabled />
						<List.Icon name='food' size='large' verticalAlign='middle' disabled />
						<List.Icon name='cocktail' size='large' verticalAlign='middle' />
			      <List.Content>
			        <List.Header>Pub "Long Rock"</List.Header>
			        <List.Description>Calle Cervantes, 15.<br/>
							<Icon name='phone' />-</List.Description>
			      </List.Content>
			    </List.Item>
				</List>
			</div>,
		};

		return <Segment className="questions page" vertical>
			<Container>
				<Grid columns={2}>
					<Grid.Row>
						<Grid.Column width={8}>
							<Segment className="details-segment" vertical>
								<Header as="h2" content="¿Dónde nos vemos?"/>
								<p>La Ceremonia Civil tendrá lugar en el Complejo "La Tortuga Azul" de Linares, a las 13:30 horas el día 17 de junio de 2017.</p>
								<Map />
							</Segment>
							<Segment className="utils-segment" vertical>
								<Menu tabular>
					        <Menu.Item content={<span className="item-name">Peluquería</span>} icon="cut" name='peluqueria' active={activeItem === 'peluqueria'} onClick={this.handleItemClick.bind(this)} />
					        <Menu.Item content={<span className="item-name">Alojamiento</span>} icon="building outline" name='alojamiento' active={activeItem === 'alojamiento'} onClick={this.handleItemClick.bind(this)} />
									<Menu.Item content={<span className="item-name">Transporte</span>} icon="taxi" name='transporte' active={activeItem === 'transporte'} onClick={this.handleItemClick.bind(this)} />
									<Menu.Item content={<span className="item-name">Bares/Restaurantes</span>} icon="beer" name='bares' active={activeItem === 'bares'} onClick={this.handleItemClick.bind(this)} />
					      </Menu>

								<Segment className="tabs-content" attached='bottom'>
									<div className={activeItem}>{tabs_content[activeItem]}</div>
				        </Segment>

							</Segment>

						</Grid.Column>
						<Grid.Column width={8}>
							<Questions />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</Segment>;
	}
};
