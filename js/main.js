// logo hamburguesa
document.querySelector('.hamburger').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('is-active');
  })



  /* .container-informacion {
    display: flex;
    flex-wrap: wrap;
   padding: 4em;
   margin-bottom: 4em;
}
.column {
    flex: 50%;
    padding: 5px;
    box-sizing: border-box;
}
.column2 {
    flex: 50%;
    padding: 5px;
    box-sizing: border-box;
} */

.container-informacion {
    flex-direction: column;
    padding: 5px;
    padding-top: 2em;
  }
  .column,
  .column2 {
    flex: 100%;
    padding: 0px;
  }

.icono {
    display: inline-block;
    vertical-align: middle; /* opcional: para alinear verticalmente */
    font-size: 30px; /* ajusta el tamaño del icono a 30px */
  }
.icono i{
    font-size: 20px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    width: 40px;
    border-radius: 100%;
    color:rgb(255, 147, 59);
    box-shadow: inset 0 0 0 1px rgb(255, 147, 59);
    -webkit-box-shadow: inset 0 0 0 1px rgb(255, 147, 59);
}
  .titulo-y-parrafo {
    display: inline-block;
    vertical-align: middle; /* opcional: para alinear verticalmente */
    margin-left: 10px; /* opcional: para separar el texto del icono */
  }
  .titulo-y-parrafo h2{
    font-size: 16px;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
  }
  .titulo-y-parrafo p{
    font-size: 10px;
    font-family: 'Roboto', sans-serif;
  }

  .media-body {
    display: table-cell;
    vertical-align: top;
}


<div id="servicios" class="titulo-nuestros-servicios text-center">
    <h2>NUESTROS SERVICIOS</h2>
    <p><i class="bi bi-three-dots"></i> <i class="bi bi-circle-fill"></i> <i class="bi bi-three-dots"></i></p>
    <p>Conocé nuestra variedad de servicios de transporte <br>
        y elegí el que más se ajuste a tus necesidades.</p>
</div>
<div class="container-informacion">
    <div class="column">
        <div>
            <div class="icono">
                <i class="fa fa-book"></i>
            </div>
            <div class="titulo-y-parrafo">
              <h2>Transporte escolar</h2>
              <p>Brindamos un servicio personalizado trasladando <br> alumnos tanto a sus hogares, como a cualquier <br> actividad educativa.</p>
            </div>
          </div>
          <div class="mt-5">
            <div class="icono">
                <i class="fa fa-camera"></i>
            </div>
            <div class="titulo-y-parrafo">
              <h2>Traslados turísticos</h2>
              <p>Brindamos servicios de transporte turístico.</p>
            </div>
          </div>
          <div class="mt-5">
            <div class="icono">
                <i class="fa-solid fa-location-dot" style="color: #ff933b;"></i>
            </div>
            <div class="titulo-y-parrafo">
              <h2>Zonas de servicio</h2>
              <div class="carousel-item active gallery-block compact-gallery text-center texto-protocolo-covid">
                <p>Servicios en todo Capital Federal y alrededores. <a href="./imagenes/buenosairesprovincia.jpg">Ver mapa</a></p>
            </div>
            </div>
          </div>
    </div>
    <div class="column2">
        <div>
            <div class="icono">
                <i class="fa fa-briefcase"></i>
            </div>
            <div class="titulo-y-parrafo">
              <h2>Charter para empresas</h2>
              <p>Es un servicio muy requerido por las empresas  <br> para transportar a su personal desde y hacia  <br> la empresa diariamente.</p>
            </div>
          </div>
          <div  class="mt-5">
            <div class="icono">
                <i class="fa fa-calculator"></i>
            </div>
            <div class="titulo-y-parrafo">
              <h2>Servicios personalizados</h2>
              <p>Servicios de transporte a medida de las necesidades  <br> de cada cliente.</p>
            </div>
          </div>
    </div>
</div>
















