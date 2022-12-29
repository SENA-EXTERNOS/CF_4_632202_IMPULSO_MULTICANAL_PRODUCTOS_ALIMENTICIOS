<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.texto-blanco
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center
      .bloque-texto-g.color-primario.p-2.p-sm-4.p-md-5
        .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/intro.svg')})`}")
        .bloque-texto-g__texto.p-4
          p Apreciado aprendiz, bienvenido a este componente formativo donde encontrará  el concepto de comercialización, siguiendo las tendencias del mundo actual, el cual exige que las empresas proyecten e impulsen sus productos y marcas por medio de diversos canales de comunicación o de distribución y comercialización, en aras de su competitividad, crecimiento y desarrollo; esto implica impulsar los productos, no solo desde los puntos de venta propios, sino incursionando en nuevos caminos alternativos de comercialización, tales como los canales de distribución o de comunicación, comercialización y promoción de los mismos. 

    .row.justify-content-center.my-5
      .col-lg-8
        .cajon.color-cajon-1.p-4
          p.mb-0 Este proceso establece como metodología que, para el desarrollo de las competencias, el aprendiz se apropie de los contenidos temáticos a partir de la lectura del material y la consulta de los anexos, así como del desarrollo de las actividades planteadas en la guía de aprendizaje. Le deseamos éxito en el desarrollo de este componente formativo.

    p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
      
    .video
      figure
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
