<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.texto-blanco
        span 4
      h1 Promoción

    .row.justify-content-center.mt-5.mb-3
      .col-lg-2
        img(src='@/assets/curso/temas/tema4/t4-1.svg', alt='Texto que describa la imagen')
      .col-lg-10
        p La promoción es un conjunto de iniciativas que las empresas desarrollan para vincular a los clientes y consumidores de manera continua con los productos y sus marcas, se apalancan en la publicidad, las relaciones públicas y las ventas en sí del portafolio; su objetivo fundamental es ampliar la rotación de los productos por medio de las ventas, aumentando los ingresos. Cada promoción debe motivar, generando un sentido de algo único, inigualable y limitado, a fin de conseguir resultados en el corto plazo.
      P Todas las promociones, independientemente del canal y de la iniciativa de gestión estratégica, bien sea multicanal u omnicanal, tienen las siguientes características:

    .row.justify-content-center.mt-5
      .col-lg-8


        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema4/t4-2.svg', alt='', style='')

          .tarjeta.color-acento-botones.p-4(x="22%" y="69.2%" numero="+" style='border-radius: 10px; border: solid 4px #26c7db; background-color: #DEF7FA')
            h5.mb-3 Motivación
            p.mb-0 Exaltar los beneficios adicionales a través de la promoción, e incentivar a los distribuidores a hacer parte del proyecto.

          .tarjeta.color-acento-botones.p-4(x="38.2%" y="36.7%" numero="+" style='border-radius: 10px; border: solid 4px #26c7db; background-color: #DEF7FA')
            h5.mb-3 Difusión
            p.mb-0 Dar a conocer, atraer la atención y despertar interés por el producto o beneficio.

          .tarjeta.color-acento-botones.p-4(x="81.4%" y="72.3%" numero="+" style='border-radius: 10px; border: solid 4px #26c7db; background-color: #DEF7FA')
            h5.mb-3 Participación
            p.mb-0 Buscar la toma de decisiones por parte del cliente, y que los distribuidores deseen participar.

    separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-down")
      h2.mt-3 4.1 Objetivos de la promoción

    .row.justify-content-center.mt-5
      p Si bien la promoción busca la vinculación intensiva de los clientes con el producto y sus marcas, la empresa, desde el punto de vista estratégico, debe establecer una serie de objetivos, los cuales se pueden clasificar de la siguiente manera:
      .col-lg-10.mt-3
        img(src='@/assets/curso/temas/tema4/t4-3.svg', alt='', style='')

    separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-down")
      h2.mt-3 4.2 Efectividad de la promoción

    .row.justify-content-center
      .bloque-texto-g.color-acento-contenido.p-2.p-sm-4.p-md-5
        .blq2.bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/t4-4.svg')})`}")
        .blq2.bloque-texto-g__texto.p-4
          p Las iniciativas estratégicas de promoción que emprenden las empresas no se deben catalogar como buenas o malas meramente desde el criterio de ventas, pues se debe evaluar su efectividad y que permitan cumplir los objetivos que se plantearon, y no solo si generan o no ingresos; las iniciativas estratégicas buscan refrescar la imagen de la marca o producto, además de mitigar riesgos, como pérdidas de productos próximos a vencer, devaluación, etc. Lo anterior hace que sea esencial pensar en los escenarios en los cuales es útil tener promociones, y reconocer aquellas situaciones que no son recomendables porque pueden afectar la consecución de los objetivos. A continuación, se presentan algunas de las situaciones donde es recomendable realizar promociones.

    
    .row.justify-content-center.mt-5
      p.mt-4.text-center Escenarios donde es recomendable realizar promociones.
      .col-lg-8.mt-3
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 4
          br
          em Promociones
        img(src='@/assets/curso/temas/tema4/t4-5.svg', alt='', style='')

    .cajon.color-acento-contenido.p-4
      p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
