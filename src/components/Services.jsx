import { motion } from 'framer-motion';
import { 
  Code, 
  Layers, 
  Monitor, 
  Wrench, 
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Desarrollo Web',
    description: 'Aplicaciones web modernas, escalables y performantes. React, Next.js, Vue, TypeScript y las últimas tecnologías.',
    features: ['SPAs y PWAs', 'E-commerce', 'Dashboards', 'SEO Optimizado'],
  },
  {
    icon: Layers,
    title: 'Software a Medida',
    description: 'Soluciones enterprise personalizadas que se adaptan exactamente a tus procesos de negocio.',
    features: ['ERP/CRM Custom', 'APIs & Microservicios', 'Integraciones', 'Migración Legacy'],
  },
  {
    icon: Monitor,
    title: 'Consultoría IT',
    description: 'Estrategia tecnológica, arquitectura de software y auditorías técnicas para tomar las mejores decisiones.',
    features: ['Arquitectura Cloud', 'Code Review', 'DevOps', 'Seguridad'],
  },
  {
    icon: Wrench,
    title: 'Mantenimiento y Soporte',
    description: 'Soporte continuo, monitorización 24/7 y evolución constante de tus aplicaciones.',
    features: ['SLA Garantizado', 'Monitoring Proactivo', 'Actualizaciones', 'Backup & Recovery'],
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export function Services() {
  return (
    <section 
      id="servicios"
      className="py-20 sm:py-28 lg:py-32 bg-cream-200"
      aria-labelledby="services-title"
    >
      <div className="section-container">
        {/* Header de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4">
            Nuestros Servicios
          </span>
          <h2 id="services-title" className="section-title">
            Soluciones tecnológicas
            <br />
            <span className="text-primary-600">para tu negocio</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Cubrimos todo el ciclo de vida del desarrollo de software: desde la ideación 
            hasta el mantenimiento continuo.
          </p>
        </motion.div>

        {/* Grid de Servicios */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          role="list"
          aria-label="Lista de servicios"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={item}
              className="card group h-full flex flex-col"
              role="listitem"
              whileHover={{ y: -4, boxShadow: '0 20px 40px -10px rgba(41, 86, 71, 0.15)' }}
            >
              {/* Icono */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ duration: 0.3 }}
                className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-100 transition-all duration-300"
                aria-hidden="true"
              >
                <service.icon className="w-7 h-7" />
              </motion.div>

              {/* Contenido */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-dark-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-dark-600 leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>

                {/* Características */}
                <ul className="space-y-2" aria-label={`Características de ${service.title}`}>
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-dark-500 group-hover:text-dark-700 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Enlace al contacto */}
              <div className="mt-6 pt-4 border-t border-dark-100 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <a href="#contacto" className="text-sm font-medium text-primary-600 hover:text-primary-700">
                  Consultar servicio
                </a>
                <span className="text-primary-500" aria-hidden="true">
                  →
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA Inferior */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-dark-600 mb-4">¿Necesitas algo más específico?</p>
          <motion.a
            href="#contacto"
            className="btn-primary inline-flex"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Hablemos de tu proyecto
            <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
