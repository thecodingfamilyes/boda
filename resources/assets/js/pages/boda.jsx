import React from 'react';
import {Segment, Container, Grid, Header, Icon, Image} from 'stardust';

export default class Boda extends React.Component {
	render() {
		return <div className="ui page wedding">
			<Segment vertical className="wedding-timeline">
				<Container>
					<Grid>
						<Grid.Row>
							<Grid.Column width={16}>
								<Header as="h2" content="La Boda"/>
								<p>Bueno gentes, os voy a hablar de lo que realmente nos importa: la organización del GRAN día de mis papis. ¡Mirad que <i>timeline</i> más bonito me he currado!</p>
								<Grid className="timeline-grid">
									<Grid.Row>
										<Grid.Column width={8} className="left with-content">
											<div className="event-wrapper">
												<Header className="event-title" as="h3" content="Ceremonia"/>
												<div className="event-content">
												La ceremonia tendrá lugar en el Complejo "La Tortuga Azul" de Linares. Será una ceremonia civil con un decorado a gusto de los novios que tratarán de conseguir un ambiente agradable y acogedor en el que se sientan cómodos y pasen un día inolvidable. Son muy <i>frikis</i> así que algo <i>chulo</i> se les ocurrirá. <br/>
												Además, durante la ceremonia, se le dará el gusto al <del>manco</del> amigo Domi (con o sin acompañante) para que les de ese discurso que tanto ansía darles ya que mis papis siempre piensan en los demás y no son capaces de decir que no a esta criaturica <del>del infierno</del>.
													<Image className="mt-10" src="/img/manquiel.jpg" />
												</div>
											</div>
										</Grid.Column>
										<Grid.Column width={8} className="right">
											<div className="event-time">
												<div className="icon-box">
													<Icon bordered circular size="big" name='heart' className="coral" />
													<span className="time">13:30 h.</span>
												</div>
											</div>
										</Grid.Column>
									</Grid.Row>

									<Grid.Row>
										<Grid.Column width={8} className="left">
											<div className="event-time">
												<div className="icon-box">
													<span className="time">14:15 h.</span>
													<Icon bordered circular size="big" name='cocktail' className="coral" />
												</div>
											</div>
										</Grid.Column>
										<Grid.Column width={8} className="right with-content">
											<div className="event-wrapper">
												<Header className="event-title" as="h3" content="Copa de espera"/>
												<div className="event-content">
												La copa de espera no se realizará muy lejos, pues está en el patio que da al salón en el que se realizará la Ceremonia, así que podréis empezar a comer/beber cosas ricas rápidamente pero, ¡eh, no os pongáis finos aún que todavía queda mucho día!
												</div>
											</div>
										</Grid.Column>
									</Grid.Row>

									<Grid.Row>
										<Grid.Column width={8} className="left with-content">
											<div className="event-wrapper">
												<Header className="event-title" as="h3" content="Banquete"/>
												<div className="event-content">
												Querréis seguir bebiendo y comiendo como cerdos, así que pasaréis al banquete que estará justo al lado del patio donde se habrá realizado la copa de espera, para que no tengáis que moveros mucho en el estado en el que mucho estaréis por entonces.<br/>
												Durante el banquete podréis degustar un riquísimo menú, amplio y variado. No os podéis dejar nada en los platos, recordad que otros como yo estaremos sólo a base de pienso y pensar que sobra dicha <i>ricura</i>... uff, me mata.
												</div>
											</div>
										</Grid.Column>
										<Grid.Column width={8} className="right">
											<div className="event-time">
												<div className="icon-box">
													<Icon bordered circular size="big" name='food' className="coral" />
													<span className="time">15:30 h.</span>
												</div>
											</div>
										</Grid.Column>
									</Grid.Row>

									<Grid.Row>
										<Grid.Column width={8} className="left">
											<div className="event-time">
												<div className="icon-box">
													<span className="time">18:00</span>
													<Icon bordered circular size="big" name='child' className="coral" />
												</div>
											</div>
										</Grid.Column>
										<Grid.Column width={8} className="right with-content">
											<div className="event-wrapper">
												<Header className="event-title" as="h3" content="Barra libre"/>
												<div className="event-content">
												Contaréis con dos horas de barra libre.
												Mis papis no quieren que esta sea como las típicas de baile <i>chunda-chunda</i> y baile tradicional de los novios, pues mis papis odian bailar, mucho, y no lo harán. Ellos quieren que la barra libre sea para vosotros, para que lo déis todo, para que os lo paséis genial y agradeceros con ésto que les acompañéis en ese día tan importante para ellos. Disfrutad mucho, disfrutad a tope pero tranquilos ¡¡que la cosa no termina aquí!!
												</div>
											</div>
										</Grid.Column>
									</Grid.Row>

									<Grid.Row>
										<Grid.Column width={8} className="left with-content">
											<div className="event-wrapper">
												<Header className="event-title" as="h3" content="Recena"/>
												<div className="event-content">
												Como os decía antes, esto aún no habrá terminado (al menos no para los más valientes). Tras la barra libre, ya caída la noche, se intentará (digo "intentará" porque esta parte está aún por confirmar, pero es la intención que tienen los novios) que os paséis a la zona de la piscina de La Tortuga Azul donde podréis seguir bebiendo y comiendo distintos aperitivos que se os ofrecerán. Además, si alguno tiene una <i>tajá</i> más grande de lo normal, sin problema os podéis meter en la piscina, así que quien quiera puede llevarse toalla y bañador para terminar la noche de un día 10.
												</div>
											</div>
										</Grid.Column>
										<Grid.Column width={8} className="right">
											<div className="event-time">
												<div className="icon-box">
													<Icon bordered circular size="big" name='moon' className="coral" />
													<span className="time">15:30 h.</span>
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