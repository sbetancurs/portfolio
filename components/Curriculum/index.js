import Link from "next/link";
import { breakpoints, colors, fontSizes } from "/styles/theme.js";

const Curriculum = () => {
  const info = {
    cel: "3168216424",
    email: "julianangel94@gmail.com",
    // github: "julianangel",
    // domain: "www.elapadelosapaces.com",
    name: "Julian Angel Arango",
  };

  const print = () => {
    if (window) {
      window.print();
    }
  };

  return (
    <>
      <section id="hv" className="container-fluid min-vh-100">
        <div className="row content">
          <div className="left-section col-lg-2 d-flex flex-column align-items-center py-3">
            <img
              src="/images/me.jpg"
              alt="Curriculum"
              className="photo rounded w-100"
            />
            <div className="w-100 mt-3 px-2">
              <h2 className="mb-2 text-center">Contactame</h2>
              <ul>
                <li>
                  <img src="/icons/mail.svg" alt="mail" />
                  <span className="mx-2">{info.email}</span>
                </li>
                <li>
                  <img src="/icons/phone.svg" alt="phone" />
                  <span className="mx-2">{info.cel}</span>
                </li>
                {/* <li>
                  <img src="/icons/github.svg" alt="github" />
                  <span className="mx-2">
                    <a href={`https://github.com/sbetancurs${info.github}`}>
                      {info.github}
                    </a>
                  </span>
                </li> */}
                <li>
                  <img src="/icons/geo.svg" alt="localization" />
                  <span className="mx-2">Medellín, Colombia.</span>
                </li>
              </ul>
            </div>
            <div className="line w-100 ">
              <div className="arrow">
                <div className="pin"></div>
                <div className="pin"></div>
              </div>
            </div>
            <div className="w-100 mt-5 px-2">
              <h2 className="mb-2  text-center">Educacion</h2>
              <ul>
                <li>
                  <img src="/icons/award.svg" alt="award" />
                  <span className="mx-2">
                    Tecnologo de sistemas, ITM(Instituto Tecnologico
                    Metropolitano), junio 2015.
                  </span>
                </li>
                <li>
                  <img src="/icons/award.svg" alt="award" />
                  <span className="mx-2">
                    Ingeniro de sistemas, ITM(Instituto Tecnologico
                    Metropolitano), Abril 2018.
                  </span>
                </li>
              </ul>
            </div>
            <div id="language" className="line w-100 ">
              <div className="arrow">
                <div className="pin"></div>
                <div className="pin"></div>
              </div>
            </div>
            <div id="languageMenu" className="w-100 mt-5 px-2">
              <div className="printFeature d-flex justify-content-center mb-3">
                <img src="/icons/printer.svg" alt="print" />
                <a className="mx-2 print" onClick={print}>
                  imprimir
                </a>
              </div>
            </div>
          </div>
          <div className="right-section col-lg-10 pt-2 pt-lg-0">
            <div
              id="contact-info"
              className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center align-items-start"
            >
              <h1>{info.name}</h1>
              <div>
                <a id="email" href={`mailto:${info.email}`}>
                  {info.email}
                </a>
                <br />
                <a target="_blank">{info.domain}</a>
                <br />
                Medellín, Colombia
              </div>
            </div>
            <div className="hv-section">
              <h2>Conocimientos</h2>
            </div>
            <div className="hv-content">
              <ul>
                <li>
                  <b>Leguajes:</b> C#, Blazor, .Net Core, JavaScript.
                </li>
                <li>
                  <b>Frameworks:</b> NextJS.
                </li>
                <li>
                  <b>Librerias:</b> React.
                </li>
                <li>
                  <b>Repositorios:</b> Git, Github, GitLab, Azure
                </li>
              </ul>
            </div>

            <div className="hv-section">
              <h2>Experiencia laboral</h2>
            </div>
            <div className="hv-content">
              <p className="date">Abril 2019 &rArr; Actualmente </p>
              <div className="d-flex subtitle">
                <h3>Sourcecol S.A.S</h3>
              </div>
              <address>Medellín, Colombia.</address>
              <p>
                Desarrollador de backend y frontend en los lenguajes y
                frameworks ASP.NET C#, .NET Core, Web Forms, Razor Pages, Html5,
                CSS3, Bootstrap y manejo de base de datos SQL Server para crear
                formularios web donde los usuarios pueden realizar
                adquisiciones, generar pedidos, rastrear contratos.
              </p>
              <p>
                Administrar roles y permisos para habilitar algunas funciones a
                los usuarios y restringir otras.
              </p>
              <p>
                Diseñar la web principal para ser más amigable con los usuarios.
              </p>

              <p className="date">Enero 2018 &rArr; Abril 2019</p>
              <div className="d-flex subtitle">
                <h3>1cero1 Softaware S.A.S</h3>
              </div>
              <address>Medellín, Colombia.</address>
              <p>
                Desarrollo de aplicaciones en los lenguajes de ASP.NET C#,
                Windows Forms, MVC 5, Web Forms, WPF, y manejo de base de datos
                SQL Server
              </p>
              <p>
                Implementacion y administracion de la infraestructura de las
                aplicaciones frontend y backend.
              </p>

              <p className="date">Abril 2017 &rArr; Octubre 2017</p>
              <div className="d-flex subtitle">
                <h3>ARUS</h3>
              </div>
              <address>Medellín, Colombia.</address>
              <p>
                Brindar apoyo en todo lo relacionado con soporte a los
                aplicativos del área, tanto desarrollando como corrigiendo
                posibles errores en ellos, con Oracle como motor de base de
                datos y php como lenguaje de programacion. También apoyando en
                labores administrativas tales como la gestión de las
                transferencias y de los indicadores del área.
              </p>

              {/* <p className="date">("hv:january" 2017 &rArr ("hv:march" 2018</p>
              <div className="d-flex subtitle">
                <img src="/icons/arrow-right-short.svg" alt="mail" />
                <h3>1Cero1 Software</h3>
              </div>
              <address>Junio ("hv:developer" - Medellín, Colombia.</address>
              <p>"hv:1cero1Exp"</p> */}
            </div>

            {/* <div className="hv-section">
              <h2>"hv:entrepreneurship"</h2>
            </div>
            <div className="hv-content mb-3">
              <div className="d-flex subtitle">
                <img src="/icons/arrow-right-short.svg" alt="mail" />
                <h3>Oxigiovanny App</h3>
              </div>
              <p>"hv:oxigiovannyExp"</p>
            </div> */}

            {/* <div className="hv-section">
              <h2>"hv:openSource"</h2>
            </div>
            <div className="hv-content mb-3">
              <h3>
                <div className="d-flex subtitle">
                  <img src="/icons/arrow-right-short.svg" alt="mail" />
                  <Link href="/">
                    <a target="_blank">"hv:portfolio"</a>
                  </Link>
                </div>
              </h3>
              <p>"hv:portfolioExp"</p>
            </div> */}

            <div className="hv-section">
              <h2>Educacion</h2>
            </div>
            <div className="hv-content">
              <p>
                Ingeniero de sistemas,ITM(Instituto Tecnologico Metropolitano),
                obtenido en abril del 2018.
              </p>
              <p>
                Tecnologo de sistemas, ITM(Instituto Tecnologico Metropolitano),
                obtenido en junio del 2015.
              </p>
              <p>Certificaciones de Platzi, Platzi,obtenidas desde el 2019.</p>
            </div>

            <div className="hv-section">
              <h2>Intereses</h2>
            </div>
            <div className="hv-content">
              <p></p>
            </div>
          </div>
        </div>
      </section>
      <style jsx global>{`
        div.scroll-to-top {
          visibility: hidden !important;
        }
        @media (max-width: ${breakpoints.mobile}),
          (max-width: ${breakpoints.ipad}) {
          nav {
            width: 20%!important;
        }
      `}</style>
      <style jsx>{`
        section {
          background: ${colors.white};
        }

        .content {
          min-height: 100vh;
        }

        .left-section {
          background: ${colors.secondary};
          color: ${colors.white};
          white-space: pre-line;
        }

        .right-section {
          background: ${colors.white};
          color: ${colors.black};
          white-space: pre-line;
        }

        h1 {
          font-size: ${fontSizes.font_size_md};
        }

        h2 {
          font-size: ${fontSizes.font_size_md};
          border-bottom: 1px solid ${colors.white};
        }

        span {
        }

        h3 {
          font-size: ${fontSizes.font_size_sm};
        }

        a {
          text-decoration: none;
        }

        .left-section a {
          color: ${colors.white};
        }

        .right-section a {
          color: ${colors.black};
        }

        .photo {
          box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
        }

        .hv-section {
          background-color: ${colors.secondary};
          color: ${colors.white};
          text-align: left !important;
          padding: 10px;
        }

        .hv-content {
          padding: 10px;
        }

        .line {
          border-bottom: solid 2px #fff;
          height: 40px;
          position: relative;
          width: 100%;
          z-index: 1;
        }
        .arrow {
          content: "";
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          height: 20px;
          width: 80px;
          z-index: 2;
          background-color: ${colors.secondary};
        }
        .arrow .pin {
          width: calc(50% + 5px);
          height: 2px;
          background: #fff;
          display: inline-block;
          float: left;
          transform: rotate(25deg);
          transform-origin: 0 0;
        }
        .arrow .pin:last-child {
          transform: rotate(-25deg);
          transform-origin: 100% 0;
          float: right;
          margin-top: -2px;
        }

        #address h3 {
          border-bottom: none;
          margin-top: 0;
        }
        p.date {
          font-size: 0.8em;
          margin-top: 0.4em;
          float: right;
        }
        address {
          font-style: italic;
          color: #333;
          font-size: 0.9em;
        }

        .subtitle {
          margin: 1em 0 0 0;
        }
        li {
          font-size: 0.9em;
        }

        .print {
          cursor: pointer;
        }
        .print:hover {
          text-decoration: underline;
        }

        footer {
          display: none !important;
        }

        @media (max-width: ${breakpoints.ipad}) {
          span {
            font-size: ${fontSizes.font_size_sm};
          }

          .photo {
            width: 50% !important;
          }

          .printFeature {
            display: none !important;
          }
        }

        @media print {
          html {
            background-color: #eee;
          }
          body {
            background-color: #fff;
            font-family: Helvetica, Arial, sans-serif;
            padding: 1em;
            border: solid #aaa;
            border-width: 1px 3px 3px 1px;
            margin: 1em auto;
            max-width: 50em;
          }

          .left-section,
          #language,
          #languageMenu {
            display: none !important;
          }

          #address h3 {
            border-bottom: none;
            margin-top: 0;
            margin-bottom: 0;
          }

          h2 {
            margin-top: 0;
            margin-bottom: 0;
          }

          hv-section,
          hv-content {
            margin-bottom: 0;
            padding: 0;
          }

          div#contact-info {
            float: right;
            margin-bottom: 12px;
            text-align: right;
          }
          p.date {
            float: right;
            font-size: 0.8em;
            margin-top: 0.4em;
          }
          address {
            font-style: italic;
            color: #333;
            font-size: 0.9em;
          }
          h1 {
            font-size: 1.3em;
            font-family: Helvetica, Arial, sans-serif;
          }
          h2 {
            clear: both;
            font-size: 1.2em;
            font-weight: bold;
            margin-top: 1.3em;
            font-variant: small-caps;
            padding-left: 0.25em;
            background-color: #eee;
            border-bottom: 1px solid #999;
            letter-spacing: 0.06em;
          }
          h3 {
            margin: 1em 0 0 0;
          }
          li {
            font-size: 0.9em;
          }
        }
      `}</style>
    </>
  );
};

export default Curriculum;
