import React from 'react';
import {Segment, Container, Grid, Header, Icon, Image} from 'semantic-ui-react';

export default class Boda extends React.Component {
	render() {
		let ceremoniaTime = "13:30 h.";
		let copaesperaTime = "14:15 h.";
		let banqueteTime = "15:30 h.";
		let barralibreTime = "18:00 h.";
		let recenaTime = "20:00 h.";
		let endingTime = "21:30 h.";

		return <div className="ui page wedding">
			<Segment vertical className="wedding-timeline">
				<Container>
					<Grid>
						<Grid.Row>
							<Grid.Column width={16}>
								<Header as="h2" content="La Boda"/>
								<p>Bueno gentes, os voy a hablar de lo que realmente nos importa: la organización del GRAN día de mis papis. ¡Mirad que <i>timeline</i> más bonito me he currado!</p>
								<Grid className="timeline-grid stackable">
									<Grid.Row>
										<Grid.Column width={8} className="left with-content with-image">
											<div className="event-wrapper">
												<Header className="event-title" as="h3" content="Ceremonia"/>
												<span className="ctime"> - {ceremoniaTime}</span>
												<div className="event-content">
													<p>La ceremonia tendrá lugar en la capilla del <strong>Palacio de los Marqueses de Linares</strong>. Será una ceremonia civil con un decorado a gusto de los novios que tratarán de conseguir un ambiente agradable y acogedor en el que se sientan cómodos y pasen un día inolvidable.</p>
												<p>Además, durante la ceremonia, se le dará el gusto al <del>manco</del> amigo Domi (con o sin acompañante) para que les de ese discurso que tanto ansía darles ya que mis papis siempre piensan en los demás y no son capaces de decir que no a esta criaturica <del>del infierno</del>.</p>
													<Image className="mt-15" src="/img/manquiel.jpg" />
												</div>
											</div>
										</Grid.Column>
										<Grid.Column width={8} className="right">
											<div className="event-time">
												<div className="icon-box">
													<Icon bordered circular size="big" name='heart' className="coral" />
													<span className="time">{ceremoniaTime}</span>
												</div>
											</div>
										</Grid.Column>
									</Grid.Row>

									<Grid.Row>
										<Grid.Column width={8} className="left">
											<div className="event-time">
												<div className="icon-box">
													<span className="time">{copaesperaTime}</span>
													<Icon bordered circular size="big" name='cocktail' className="coral" />
												</div>
											</div>
										</Grid.Column>
										<Grid.Column width={8} className="right with-content">
											<div className="event-wrapper">
												<Header className="event-title" as="h3" content="Copa de espera"/>
												<span className="ctime"> - {copaesperaTime}</span>
												<div className="event-content">
													<p>Una vez finalizada la ceremonia, os dirijiréis hacia el Complejo "La Tortuga Azul" para la copa de espera. Se realizará en el patio adjunto al salón donde se realizará el banquete. Allí podréis empezar a comer/beber cosas ricas rápidamente, además de disfrutar de un cortador de jamón y un delicioso buffet de quesos, pero, ¡eh, no os pongáis finos aún que todavía queda mucho día!</p>
												</div>
											</div>
										</Grid.Column>
									</Grid.Row>

									<Grid.Row>
										<Grid.Column width={8} className="left with-content">
											<div className="event-wrapper">
												<Header className="event-title" as="h3" content="Banquete"/>
												<span className="ctime"> - {banqueteTime}</span>
												<div className="event-content">
												<p>Querréis seguir bebiendo y comiendo como cerdos, así que pasaréis al banquete que estará justo al lado del patio donde se habrá realizado la copa de espera, para que no tengáis que moveros mucho en el estado en el que mucho estaréis por entonces.</p>
												<p>Durante el banquete podréis degustar un riquísimo menú, amplio y variado. No os podéis dejar nada en los platos, recordad que otros como yo estaremos sólo a base de pienso y pensar que sobra dicha <i>ricura</i>... uff, me mata.</p>
												</div>
											</div>
										</Grid.Column>
										<Grid.Column width={8} className="right">
											<div className="event-time">
												<div className="icon-box">
													<Icon bordered circular size="big" name='food' className="coral" />
													<span className="time">{banqueteTime}</span>
												</div>
											</div>
										</Grid.Column>
									</Grid.Row>

									<Grid.Row>
										<Grid.Column width={8} className="left">
											<div className="event-time">
												<div className="icon-box">
													<span className="time">{barralibreTime}</span>
													<Icon bordered circular size="big" name='child' className="coral" />
												</div>
											</div>
										</Grid.Column>
										<Grid.Column width={8} className="right with-content">
											<div className="event-wrapper">
												<Header className="event-title" as="h3" content="Barra libre"/>
												<span className="ctime"> - {barralibreTime}</span>
												<div className="event-content">
												<p>Contaréis con dos horas de barra libre.
												Mis papis no quieren que esta sea como las típicas de baile <i>chunda-chunda</i> y baile tradicional de los novios, pues mis papis odian bailar, mucho, y no lo harán. Ellos quieren que la barra libre sea para vosotros, para que lo déis todo, para que os lo paséis genial y agradeceros con ésto que les acompañéis en ese día tan importante para ellos. Disfrutad mucho, disfrutad a tope pero tranquilos ¡¡que la cosa no termina aquí!!</p>
												</div>
											</div>
										</Grid.Column>
									</Grid.Row>

									<Grid.Row>
										<Grid.Column width={8} className="left with-content">
											<div className="event-wrapper">
												<Header className="event-title" as="h3" content="Recena"/>
												<span className="ctime"> - {recenaTime}</span>
												<div className="event-content">
												<p>Como os decía antes, esto aún no habrá terminado (al menos no para los más valientes). Tras la barra libre, ya caída la noche, pasaréis a la zona de la piscina de La Tortuga Azul donde podréis seguir bebiendo y comiendo distintos aperitivos que se os ofrecerán. Además, si alguno tiene una <i>tajá</i> más grande de lo normal, sin problema os podéis meter en la piscina, así que quien quiera puede llevarse toalla y bañador para terminar la noche de un día 10.</p>
												</div>
											</div>
										</Grid.Column>
										<Grid.Column width={8} className="right">
											<div className="event-time">
												<div className="icon-box">
													<Icon bordered circular size="big" name='moon' className="coral" />
													<span className="time">{recenaTime}</span>
												</div>
											</div>
										</Grid.Column>
									</Grid.Row>

									<Grid.Row>
										<Grid.Column width={8} className="left">
											<div className="event-time">
												<div className="icon-box">
													<span className="time">{endingTime}</span>
													<Icon bordered circular size="big" name='bomb' className="coral" />
												</div>
											</div>
										</Grid.Column>
										<Grid.Column width={8} className="right with-content">
											<div className="event-wrapper">
												<Header className="event-title" as="h3" content="La noche es joven"/>
												<span className="ctime"> - {endingTime}</span>
												<div className="event-content">
												<p>¿He dicho terminar la noche? ¡Pues no! ¡Aún no ha terminado! Los más valientes, la élite, entre la élite, podrán continuar la velada en la discoteca de La Tortuga Azul y dispondrán de tickets para poder seguir disfrutando de todo tipo de bebidas.</p>
												<p>Los tickets serán limitados y cuando se agoten podréis seguir estando allí, pero a partir de ese momento pagaréis las copas de vuestro bolsillo... si es que aún seguís en pie.</p>
												</div>
											</div>
										</Grid.Column>
									</Grid.Row>

								</Grid>
							</Grid.Column>
						</Grid.Row>
					</Grid>

				</Container>
			</Segment>
		</div>;
	}
};
