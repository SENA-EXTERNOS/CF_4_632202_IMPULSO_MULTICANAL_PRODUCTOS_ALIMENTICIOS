<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p La gestión comercial de productos alimenticios exige cada vez más a las empresas que se concentren en su actividad, buscando garantizar la calidad e idoneidad del suministro a los mercados donde operan, por lo cual el crecimiento y expansión se basa en delegar la distribución de los productos a terceros, empresas o personas especializadas en este ejercicio, lo que en consecuencia hará que las empresas aumenten su productividad. 
      br
      br
      |El siguiente mapa integra los criterios y especificidades de los conocimientos expuestos en el presente componente formativo

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
