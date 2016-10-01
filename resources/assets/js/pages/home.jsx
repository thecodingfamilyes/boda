import React from 'react';
import {Segment, Container, Grid, Header, Card, Image} from 'stardust';
import { Link } from 'react-router';
import Countdown from '../ui/countdown.jsx';
import PerlitaSignature from '../ui/signature.jsx';
import SliderHome from '../ui/sliderhome.jsx';

export default class Home extends React.Component {
	render() {
		return <div className="ui page home">
			<Segment vertical className="countdown-wrapper">
				<Countdown />
			</Segment>
			<Segment vertical className="presentation">
				<Container>
					<Grid>
						<Grid.Row>
							<Grid.Column width={16}>
								<Container text>
									<Header as="h2" content="¡Hola!"/>
									<p>Mi nombre es Perlita. Soy una <del>perrita</del> perrota muy sociable, buena, adorable e inteligente, aunque también soy un tanto envidiosa y egocéntrica y me gusta ser la prota de todo... por eso soy yo la que os cuenta todo esto.</p>
									<p>Hace ya más de un año que vivo con mi familia, Antonio y Cristina, y mi hermano mayor Lucas. Ellos me adoptaron siendo apenas un bebé pomposo y manejable... ¡Qué horror! ¡Me llevaban en brazos a todas partes! Uff... Pero, en el fondo, son muy molones; me dan comida, me miman, juegan conmigo, me llevan a pasear, me dan más comida, me compran juguetes... y lo mejor de todo... ¡Me dan comida! De vez en cuando me montan en una casa con ruedas y me llevan a sitios extraños que me dan miedo, ¡pero otras veces son sitios chulos y lo pasamos muy bien juntos!</p>
									<p>Como a cualquier peludo, me gusta mucho jugar en el parque con mis amigos. Mi más mejor amiga es Bujía, aunque también muero por jugar con mis otros mejores amigos: Akiles, Venus, Joker, Thor, Kobu y muchos más. Aquí os dejo algunos <i>selfies</i> que tengo con ellos, para guardar los momentos tan divertidos que pasamos y poder recordarlas cuando seamos viejitos.</p>

									<Segment vertical className="selfies">
										<Card.Group itemsPerRow={2} stackable>
											<Card>
												<Image src="/img/selfies/lucas.jpg" />
												<Card.Content>
													<Card.Description>Con mi hermano Lucas y Mica</Card.Description>
												</Card.Content>
											</Card>
											<Card>
												<Image src="/img/selfies/buji.jpg" />
												<Card.Content>
													<Card.Description>Con mi más mejor amiga Bujía</Card.Description>
												</Card.Content>
											</Card>
											<Card>
												<Image src="/img/selfies/akiles.jpg" />
												<Card.Content>
													<Card.Description>Con mi más mejor amigo Akiles</Card.Description>
												</Card.Content>
											</Card>
											<Card>
												<Image src="/img/selfies/thor.jpg" />
												<Card.Content>
													<Card.Description>Con mi amigo Thor</Card.Description>
												</Card.Content>
											</Card>
										</Card.Group>
									</Segment>

									<p>En fin, creo que ya va siendo hora que deje de hablar de mí y os cuente un poco sobre mis papis, los verdaderos protagonistas de ese GRAN día.</p>


									<Header as="h3" content="Mis Papis" />
									<p>Antonio y Cristina, además de ser los mejores papás del mundo mundial, son dos personas encantadoras, humildes, sencillas y muy amigables (o eso dicen todos los que le conocen... ni ellos mismos saben por qué les caen tan bien a todo el mundo). Ellos se conocieron a finales de 2007 en el instituto en el que ambos estudiaban por aquel entonces, cuando Cris tan sólo era una mocosa de 15 años y Antonio un tio hecho y derecho de 21 años. Desde ese momento, casi todo el tiempo libre que tenía Cristina lo dedicaba a "coquetear" con Antonio a través de algo que llamaban Messenger (yo no lo he conocido, por lo que no puedo daros más información al respecto), hasta que un día Cris se le declaró a Antonio, que parecía que era el único de su grupo de amigos que no sabía que mi mami estaba <i>colaíta</i> por él (Ains... papi siempre tan despistado...).</p>
									<p>Total, que tras muchos consejos de muchos de los más mejores amigos de mi papi, éste se decidió a quedar una tarde con mami con la intención de decirle que esa relación <strong>NO</strong> podía ser, puesto que al <i>caguica</i> de mi papi le daba miedo por la diferencia de edad entre ambos, pero al final no se pudo resistir a la inocencia de mi mami y.. bueno, ya sabéis, que a mí estas cosas me dan vergüenza contarlas... El caso es que después de ese momento, todo ha sido genial. En Octubre de 2014 comenzaron a vivir juntos en San Sebastián de los Reyes, trabajando en la misma empresa, con excelentes compañeros, con excelentes mascotas (tsss) y esforzándose para lograr cumplir sus sueños poco a poco como lo están haciendo. Uno de los más importantes es que el 17 de Junio de 2017 <Link to="/boda"><strong>¡Mis papis se casan!</strong></Link></p>

									<SliderHome />

									<PerlitaSignature />
									
								</Container>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Container>
			</Segment>
		</div>;
	}
};