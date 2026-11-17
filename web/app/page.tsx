
const projects = [
  {
    category: "DESARROLLO WEB",
    title: "Hermanos Núñez Salas",
    description:
      "Sitio web empresarial orientado a presentar servicios, fortalecer la presencia digital y facilitar el contacto con potenciales clientes.",
    tags: ["Next.js", "TypeScript", "Diseño web"],
    link: "https://hermanos-nunez-salas.vercel.app",
    featured: true,
  },
];

const skills = [
  {
    number: "01",
    title: "Marketing digital",
    description:
      "Interés en estrategias digitales, comportamiento del consumidor, captación de clientes y medición de campañas.",
  },
  {
    number: "02",
    title: "Analítica comercial",
    description:
      "Análisis de información mediante Excel y Power BI para interpretar indicadores y apoyar decisiones empresariales.",
  },
  {
    number: "03",
    title: "Soluciones tecnológicas",
    description:
      "Desarrollo de soluciones web y aplicación de herramientas tecnológicas para mejorar procesos y experiencias digitales.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#081426] text-white">
      {/* Navegación */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#081426]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
          <a href="#inicio" className="text-xl font-bold tracking-tight">
            JN<span className="text-teal-400">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#sobre-mi" className="hover:text-teal-300">
              Sobre mí
            </a>
            <a href="#competencias" className="hover:text-teal-300">
              Competencias
            </a>
            <a href="#proyectos" className="hover:text-teal-300">
              Proyectos
            </a>
            <a href="#contacto" className="hover:text-teal-300">
              Contacto
            </a>
          </div>

          <a
            href="#contacto"
            className="rounded-full border border-teal-400/50 px-5 py-2 text-sm font-semibold text-teal-300 transition hover:bg-teal-400 hover:text-[#081426]"
          >
            Conversemos
          </a>
        </nav>
      </header>

      {/* Presentación */}
      <section
        id="inicio"
        className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-center px-6 py-24 lg:px-12"
      >
        <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-teal-400/10 blur-[110px]" />

        <div className="relative max-w-4xl">
          <p className="mb-7 inline-flex rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
            Portafolio profesional
          </p>

          <p className="mb-4 text-lg text-slate-300">
            Hola, soy
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Juandiego
            <br />
            <span className="text-teal-300">Núñez Salas.</span>
          </h1>

          <h2 className="mt-8 max-w-3xl text-2xl font-semibold text-slate-100 sm:text-3xl">
            Marketing Digital
            <span className="text-teal-300"> &amp; </span>
            Analítica Comercial
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            Estudiante de Ingeniería de Sistemas e Informática,
            interesado en conectar tecnología, marketing y análisis
            de datos para comprender oportunidades comerciales y
            contribuir a mejores decisiones empresariales.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#proyectos"
              className="rounded-full bg-teal-400 px-7 py-3.5 font-semibold text-[#081426] transition hover:bg-teal-300"
            >
              Explorar proyectos ↗
            </a>

            <a
              href="#sobre-mi"
              className="rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white transition hover:border-teal-400"
            >
              Conocer mi perfil
            </a>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap gap-3">
          {["Marketing Digital", "Power BI", "Excel", "Tecnología", "Análisis Comercial"].map(
            (item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
              >
                {item}
              </span>
            )
          )}
        </div>
      </section>

      {/* Sobre mí */}
      <section id="sobre-mi" className="border-t border-white/10 bg-[#0D1C32]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
              01 / Sobre mí
            </p>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Tecnología, datos
              <br />
              <span className="text-teal-300">y visión comercial.</span>
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-400">
            <p>
              Soy estudiante del décimo ciclo de Ingeniería de
              Sistemas e Informática, con interés profesional
              en marketing digital, análisis de datos y desarrollo
              de soluciones tecnológicas.
            </p>
            <p>
              Mi objetivo es aplicar conocimientos técnicos y
              analíticos para interpretar información, detectar
              oportunidades de mejora y aportar valor a las empresas.
            </p>
            <div className="border-l-2 border-teal-400 pl-5 text-base text-slate-200">
              Enfoque profesional: aprender, analizar, proponer
              y desarrollar soluciones orientadas a resultados.
            </div>
          </div>
        </div>
      </section>

      {/* Competencias */}
      <section
        id="competencias"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-12"
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
          02 / Competencias
        </p>

        <h2 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
          Áreas en las que estoy construyendo mi perfil profesional.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {skills.map((skill) => (
            <article
              key={skill.number}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:-translate-y-1 hover:border-teal-400/40"
            >
              <span className="text-sm font-bold text-teal-300">
                {skill.number}
              </span>
              <h3 className="mt-10 text-2xl font-semibold">
                {skill.title}
              </h3>
              <p className="mt-5 leading-7 text-slate-400">
                {skill.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="bg-[#0D1C32]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
            03 / Proyectos
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Proyectos seleccionados.
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-slate-400">
            Una selección de trabajos tecnológicos y proyectos
            prácticos que reflejan mis conocimientos y proceso
            de desarrollo profesional.
          </p>

          <div className="mt-12 grid gap-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="grid overflow-hidden rounded-3xl border border-white/10 bg-[#10243E] lg:grid-cols-2"
              >
                <div className="flex min-h-72 flex-col justify-center bg-gradient-to-br from-[#12324A] via-[#0C2740] to-[#0A1628] p-10">
                  <div className="mb-8 text-sm font-semibold tracking-[0.2em] text-teal-300">
                    PROYECTO DESTACADO
                  </div>
                  <div className="text-5xl font-bold tracking-tight text-white/90">
                    HNS<span className="text-teal-300">.</span>
                  </div>
                  <p className="mt-4 text-slate-300">
                    Presencia digital empresarial
                  </p>
                  <div className="mt-10 h-px w-full bg-white/20" />
                  <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-400">
                    Proyecto web
                  </p>
                </div>

                <div className="flex flex-col justify-center p-8 sm:p-12">
                  <p className="text-xs font-bold tracking-[0.2em] text-teal-300">
                    {project.category}
                  </p>
                  <h3 className="mt-5 text-3xl font-bold">
                    {project.title}
                  </h3>
                  <p className="mt-5 leading-8 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-9 inline-flex w-fit font-semibold text-teal-300 hover:text-teal-200"
                  >
                    Visitar proyecto ↗
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm text-slate-500">
            Próximamente se incorporarán casos prácticos de marketing
            digital, dashboards y análisis comercial.
          </p>
        </div>
      </section>

      {/* Formación */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
          04 / Formación
        </p>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Formación académica.
        </h2>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
          <p className="text-sm font-semibold text-teal-300">
            Formación universitaria
          </p>
          <h3 className="mt-4 text-2xl font-bold">
            Ingeniería de Sistemas e Informática
          </h3>
          <p className="mt-3 text-slate-300">
            Universidad Nacional Santiago Antúnez de Mayolo
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Décimo ciclo · Huaraz, Perú
          </p>
        </div>
      </section>

      {/* Contacto */}
      <section
        id="contacto"
        className="border-t border-white/10 bg-[#0D1C32]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-12">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
            05 / Contacto
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Conectemos ideas.
            <br />
            <span className="text-teal-300">Construyamos oportunidades.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl leading-8 text-slate-400">
            Me interesa participar en oportunidades profesionales
            relacionadas con marketing digital, analítica comercial
            y tecnología.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/juandimax"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-teal-400 px-7 py-3 font-semibold text-[#081426] hover:bg-teal-300"
            >
              Mi GitHub ↗
            </a>
          </div>
        </div>
      </section>

      {/* Pie de página */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Juandiego Núñez Salas.
        Portafolio profesional.
      </footer>
    </main>
  );
}
