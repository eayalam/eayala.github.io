import React from 'react';
import { RevealJS, Slide, H1, Image, H3 } from '@cenk1cenk2-presentations/react-reveal-base';
import HighlightPlugin from '@cenk1cenk2-presentations/react-reveal-base/dist/plugins/HighlightPlugin'
import '@cenk1cenk2-presentations/react-reveal-base/assets/plugins/styles/PrismHighlight.css'
import './styles.css'
import { Helmet } from 'react-helmet-async';

export const App = () => {
  return (
    <>
      <Helmet>
        <title>Betty: 7 razones para salir conmigo. La #3 te sorprenderá</title>
      </Helmet>
      <RevealJS plugins={[HighlightPlugin]} controlsLayout="bottom-right" touch progress slideNumber minScale={1.1} color="white">
        <Slide>
          <section data-background-color="#501837">
            {/* <Image src='./assets/img1.png' height={200} /> */}
            <Image src={`${process.env.PUBLIC_URL}/assets/img1.png`} height={200} />
            <H1>7 ventajas y desventajas </H1>
            <H3>de salir conmigo </H3>
            <p>(desliza hacia arriba para la siguiente)</p>
          </section>

          {/* 1 */}
          <section data-background-color="#501837">
            {/* <Image src='./assets/img2.png' height={200} /> */}
            <Image src={`${process.env.PUBLIC_URL}/assets/img2.png`} height={200} />

            <H1>Ventaja #1</H1>
            <H3>La pasaremos muy bien juntos </H3>
          </section>
          <section data-background-color="#501837">
            {/* <Image src='./assets/img3.png' height={200} /> */}
            <Image src={`${process.env.PUBLIC_URL}/assets/img3.png`} height={200} />
            <H1>Desventaja</H1>
            <H3>Ninguna, siempre nos hemos llevado bien :D </H3>
          </section>

          <section data-background-color="#501837">
            {/* <Image src='./assets/img5.png' height={200} /> */}
            <Image src={`${process.env.PUBLIC_URL}/assets/img5.png`} height={200} />
            <H1>Ventaja #2</H1>
            <H3>Demuestro mi interés abiertamente</H3>
            <H3>y trabajo en mi responsabilidad afectiva </H3>
          </section>
          <section data-background-color="#501837">
            {/* <Image src='./assets/img4.png' height={200} /> */}
            <Image src={`${process.env.PUBLIC_URL}/assets/img4.png`} height={200} />
            <H1>Desventaja</H1>
            <H3>soy onvre</H3>
          </section>

          <section data-background-color="#501837">
            {/* <Image src='./assets/img13.gif' height={200} /> */}
            <Image src={`${process.env.PUBLIC_URL}/assets/img13.gif`} height={200} />
            <H1>Ventaja #3</H1>
            <H3>Te quiero cocinar cosas ricas</H3>
          </section>
          <section data-background-color="#501837">
            {/* <Image src='./assets/img14.gif' height={200} /> */}
            <Image src={`${process.env.PUBLIC_URL}/assets/img14.gif`} height={200} />
            <H1>Desventaja</H1>
            <H3>Prefiero comprar comida hecha jaja</H3>
          </section>

          {/* 3 */}
          <section data-background-color="#501837">
            {/* <Image src='./assets/img6.gif' height={200} /> */}
            <Image src={`${process.env.PUBLIC_URL}/assets/img6.gif`} height={200} />
            <H1>Ventaja #4</H1>
            <H3>No me molestaría ver mucho anime contigo</H3>
          </section>
          <section data-background-color="#501837">
            {/* <Image src='./assets/img7.gif' height={200} /> */}
            <Image src={`${process.env.PUBLIC_URL}/assets/img7.gif`} height={200} />
            <H1>Desventaja</H1>
            <H3>No hay nada bueno que ver :c</H3>
          </section>

          {/* 3 */}
          <section data-background-color="#501837">
            {/* <Image src='./assets/img8.gif' height={200} /> */}
            <Image src={`${process.env.PUBLIC_URL}/assets/fuerte.gif`} height={200} />
            <H1>Ventaja #5</H1>
            <H3>Te voy a cuidar mucho</H3>
          </section>
          <section data-background-color="#501837">
            <Image src={`${process.env.PUBLIC_URL}/assets/frenar.gif`} height={200} />
            <H1>Desventaja</H1>
            <H3>Menos cuando frene</H3>
          </section>

          <section data-background-color="#501837">
            {/* <Image src='./assets/think.gif' height={200} /> */}
            <Image src={`${process.env.PUBLIC_URL}/assets/think.gif`} height={200} />
            <H1>Ventaja #6</H1>
            <H3>No se me ocurre otra pero seguro hay muchas</H3>
          </section>
          <section data-background-color="#501837">
            <Image src={`${process.env.PUBLIC_URL}/assets/love.png`} height={200} />
            <H1>Desventaja</H1>
            <H3>Seguro también sobran</H3>
            <H3>pero te voy a tratar bonito &#60;3</H3>
          </section>

          {/* 7 */}
          <section data-background-color="#501837">
            {/* <Image src='./assets/img12.png' height={200} /> */}
            <Image src={`${process.env.PUBLIC_URL}/assets/img12.png`} height={200} />
            <H1>Razón #7</H1>
            <H3>Porfis</H3>
          </section>

          {/* final */}
          <section data-background-color="#501837">
            {/* <Image src='./assets/img16.gif' height={200} /> */}
            <Image src={`${process.env.PUBLIC_URL}/assets/img16.gif`} height={200} />
            <H1>¿A qué hora paso por ti?</H1>
            <a
              href="https://calendly.com/bettybella/cita-2"
              style={{
                color: 'white'
              }}
            >
              Agendar cita aquí
            </a>
          </section>

        </Slide>
      </RevealJS>
    </>
  )
}