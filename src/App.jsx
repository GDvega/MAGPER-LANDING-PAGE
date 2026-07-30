import { brands, categories, company, questions, steps, whatsapp } from './data.js'

const asset = (path) => `${import.meta.env.BASE_URL}${path}`
const brochure = asset('assets/docs/catalogo-magper-2024.pdf')

function Header() {
  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="shell utility-bar__inner">
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <a
            href={whatsapp('Hola MAGPER, quiero realizar una consulta.')}
            target="_blank"
            rel="noreferrer"
          >
            {company.phone}
          </a>
          <a href={company.mapUrl} target="_blank" rel="noreferrer">
            Los Olivos, Lima
          </a>
          <a className="utility-bar__download" href={brochure} download>
            Descargar brochure
          </a>
        </div>
      </div>

      <div className="main-nav">
        <div className="shell main-nav__inner">
          <a className="brand" href="#inicio" aria-label="MAGPER, ir al inicio">
            <img
              src={asset('assets/brand/magper-logo-color.png')}
              width="875"
              height="467"
              alt="MAGPER"
            />
          </a>

          <nav className="desktop-nav" aria-label="Navegación principal">
            <a href="#categorias">Categorías</a>
            <a href="#proceso">Cómo cotizar</a>
            <a href="#marcas">Marcas</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <a
            className="button button--primary nav-cta"
            href={whatsapp('Hola MAGPER, quiero cotizar suministros industriales.')}
            target="_blank"
            rel="noreferrer"
          >
            Cotizar por WhatsApp
          </a>

          <details className="mobile-menu">
            <summary>Menú</summary>
            <nav aria-label="Navegación móvil">
              <a href="#categorias">Categorías</a>
              <a href="#proceso">Cómo cotizar</a>
              <a href="#marcas">Marcas</a>
              <a href="#contacto">Contacto</a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <>
      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="shell hero__grid">
          <div className="hero__content">
            <p className="eyebrow">Abastecimiento industrial B2B</p>
            <h1 id="hero-title">Resuelve tus requerimientos industriales en un solo contacto.</h1>
            <p className="hero__lead">
              Comparte tu lista o describe tu necesidad. MAGPER revisa alternativas en siete
              categorías y confirma marca, presentación, disponibilidad y entrega antes de
              cotizar.
            </p>
            <div className="hero__actions">
              <a
                className="button button--primary button--large"
                href={whatsapp(
                  'Hola MAGPER, necesito ayuda con un requerimiento industrial.',
                )}
                target="_blank"
                rel="noreferrer"
              >
                Enviar mi requerimiento
              </a>
              <a className="button button--outline button--large" href="#categorias">
                Explorar categorías
              </a>
            </div>
            <p className="hero__note">
              Atención en Lima Metropolitana y despachos coordinados a otras regiones del Perú.
            </p>
          </div>

          <figure className="hero__visual">
            <img
              src={asset('assets/hero-magper-inspection.webp')}
              width="1888"
              height="833"
              alt="Especialista revisando un equipo industrial en una planta"
              fetchPriority="high"
            />
            <figcaption>Escena industrial referencial.</figcaption>
          </figure>
        </div>
      </section>

      <section className="proof-strip" aria-label="Datos verificables de la propuesta">
        <div className="shell proof-strip__grid">
          <div>
            <strong>7 categorías industriales</strong>
            <span>Una vista clara de las familias que puedes consultar.</span>
          </div>
          <div>
            <strong>25 marcas confirmadas</strong>
            <span>Alternativas multimarca según cada requerimiento.</span>
          </div>
          <div>
            <strong>Cotización por necesidad</strong>
            <span>Disponibilidad y entrega se validan antes de cotizar.</span>
          </div>
        </div>
      </section>
    </>
  )
}

function Categories() {
  return (
    <section className="section categories" id="categorias" aria-labelledby="categories-title">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Según brochure MAGPER 2024</p>
            <h2 id="categories-title">¿Qué productos ofrecemos?</h2>
          </div>
          <p>
            Revisa las líneas declaradas por MAGPER y envía tu lista, ficha o referencia por
            WhatsApp. La marca y disponibilidad se confirman antes de cotizar.
          </p>
        </div>

        <div className="category-showcase">
          {categories.map((category) => (
            <article className="category-feature" key={category.name}>
              <figure className="category-feature__visual">
                <img
                  src={asset(category.image)}
                  width={category.width}
                  height={category.height}
                  alt={`Selección de ${category.name.toLowerCase()}`}
                  loading="lazy"
                />
              </figure>
              <div className="category-card__body">
                <p className="category-feature__label">Línea del brochure</p>
                <h3>{category.name}</h3>
                <p className="category-feature__description">{category.description}</p>
                <p className="category-feature__products-title">Productos que puedes solicitar</p>
                <ul className="category-feature__products" aria-label="Productos que puede incluir">
                  {category.examples.map((product) => (
                    <li key={product}>{product}</li>
                  ))}
                </ul>
                <aside className="category-feature__guidance">
                  <strong>Para preparar tu consulta</strong>
                  <p>{category.guidance}</p>
                </aside>
                <a
                  className="category-feature__link"
                  href={whatsapp(`Hola MAGPER, quiero consultar por ${category.name}.`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Consultar esta categoría
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="category-cta">
          <div>
            <p className="eyebrow">¿Tu requerimiento combina varias categorías?</p>
            <h3>Envíalo completo y MAGPER lo revisará contigo.</h3>
          </div>
          <a
            className="button button--primary"
            href={whatsapp('Hola MAGPER, tengo un requerimiento con varias categorías.')}
            target="_blank"
            rel="noreferrer"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section process" id="proceso" aria-labelledby="process-title">
      <div className="shell process__layout">
        <div className="process__intro">
          <p className="eyebrow">Cotización sin fricción</p>
          <h2 id="process-title">De tu necesidad a una propuesta clara.</h2>
          <p>
            La landing evita formularios extensos: el proceso comienza en el canal que ya usas para
            coordinar con tu equipo.
          </p>
          <a
            className="text-link"
            href={whatsapp('Hola MAGPER, quiero iniciar una cotización.')}
            target="_blank"
            rel="noreferrer"
          >
            Iniciar cotización
          </a>
        </div>
        <ol className="process-list">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Brands() {
  return (
    <section className="section brands" id="marcas" aria-labelledby="brands-title">
      <div className="shell">
        <div className="section-heading section-heading--compact">
          <div>
            <p className="eyebrow">Respaldo multimarca</p>
            <h2 id="brands-title">Marcas con las que trabaja MAGPER</h2>
          </div>
          <p>Selección de las 25 marcas confirmadas por la empresa.</p>
        </div>
        <div className="brand-grid" role="group" aria-label="Selección de marcas">
          {brands.map(([name, logo]) => (
            <img key={name} src={asset(logo)} width="180" height="64" alt={name} />
          ))}
        </div>
        <p className="brands__note">
          La marca y la referencia final se confirman según cada solicitud.
        </p>
      </div>
    </section>
  )
}

function Questions() {
  return (
    <section className="section questions" aria-labelledby="questions-title">
      <div className="shell questions__layout">
        <div>
          <p className="eyebrow">Antes de consultar</p>
          <h2 id="questions-title">Respuestas directas a las dudas habituales.</h2>
        </div>
        <div className="faq-list">
          {questions.map(({ question, answer }) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCta() {
  return (
    <section className="final-cta" id="contacto" aria-labelledby="final-cta-title">
      <div className="shell final-cta__inner">
        <div>
          <p className="eyebrow">Tu requerimiento puede empezar hoy</p>
          <h2 id="final-cta-title">Cuéntanos qué necesitas para tu operación.</h2>
          <p>
            Envía la información disponible. MAGPER coordinará contigo los datos que falten antes
            de preparar la cotización.
          </p>
        </div>
        <div className="final-cta__actions">
          <a
            className="button button--light button--large"
            href={whatsapp('Hola MAGPER, quiero cotizar un requerimiento industrial.')}
            target="_blank"
            rel="noreferrer"
          >
            Cotizar por WhatsApp
          </a>
          <p className="final-cta__phone">
            O llama al <a href={company.phoneHref}>{company.phone}</a>
          </p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div>
          <img
            className="site-footer__logo"
            src={asset('assets/brand/magper-logo-white-small.webp')}
            width="320"
            height="171"
            alt="MAGPER"
          />
          <p>Suministros industriales por requerimiento para empresas.</p>
        </div>
        <div>
          <h2>Contacto</h2>
          <address>
            {company.address}
            <br />
            {company.district}
            <br />
            <a href={company.phoneHref}>{company.phone}</a>
            <br />
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </address>
        </div>
        <div>
          <h2>Empresa</h2>
          <p>
            MARCHENA GROUP PERU S.A.C.
            <br />
            RUC 20607843369
          </p>
          <a href={brochure} download>
            Descargar brochure
          </a>
        </div>
      </div>
      <div className="shell site-footer__bottom">
        <p>© 2026 MAGPER. Información comercial sujeta a confirmación.</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <Categories />
        <Process />
        <Brands />
        <Questions />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
