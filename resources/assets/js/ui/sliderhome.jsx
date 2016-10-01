import React from "react";
import {Segment} from 'stardust';
import {Carousel} from 'react-responsive-carousel';

const photos = [
	{
		'url': '/img/slider-images/peques.jpg',
		'description': 'Nosotros de peques'
	},
	{
		'url': '/img/slider-images/2009_principios.jpg',
		'description': '2009 - Cuando no estábamos gruesos xP'
	},
	{
		'url': '/img/slider-images/frikipandi.jpg',
		'description': 'Parte de la frikipandi'
	},
	{
		'url': '/img/slider-images/2013_puntacana.jpg',
		'description': '2013 - Sufriendo en Punta Cana'
	},
	{
		'url': '/img/slider-images/2013_caseteando.jpg',
		'description': '2013 - Caseteando'
	},
	{
		'url': '/img/slider-images/2014_gazquez.jpg',
		'description': '2014 - Playeando con los Gazquez'
	},
	{
		'url': '/img/slider-images/2014_megias.jpg',
		'description': '2014 - De tertulia con los Megías'
	},
	{
		'url': '/img/slider-images/2014_retiro.jpg',
		'description': '2014 - En el parque del Retiro'
	},
	{
		'url': '/img/slider-images/2015_letiboda.jpg',
		'description': '2015 - En la boda de dos grandes personas: Leti & Ángel'
	},
	{
		'url': '/img/slider-images/2015_benidorm.jpg',
		'description': '2015 - En Benidorm con la ratona'
	},
	{
		'url': '/img/slider-images/2015_mirabel.jpg',
		'description': '2015 - En Mirabel con los super titos madrileños'
	},
	{
		'url': '/img/slider-images/2015_nochevieja.jpg',
		'description': '2015 - Nochevieja'
	},
	{
		'url': '/img/slider-images/2016_fiesta.jpg',
		'description': '2016 - De fiesta con los mejores'
	},
	{
		'url': '/img/slider-images/2016_tapeando.jpg',
		'description': '2016 - Tapeando con nuestros frikis'
	},
	{
		'url': '/img/slider-images/2016_alpujarra.jpg',
		'description': '2016 - Haciendo el tonto alpujarradamente'
	},
];

export default class SliderHome extends React.Component {

	buildSlider() {
		return photos.map((photo, i) => {
			return <div key={'photo-'+i} ><img src={photo.url} /><p className="legend">{photo.description}</p></div>;
		});
	}

	render() {
		return (
			<Carousel showArrows={true} infiniteLoop={true} showThumbs={false} showIndicators={false}>
				{this.buildSlider()}
			</Carousel>
		);
	}

};