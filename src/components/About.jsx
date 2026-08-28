import { motion } from 'framer-motion'
import { Target, Heart, Users, Award } from 'lucide-react'

export function About() {
  return (
    <section
      id="nosotros"
      className="py-20 sm:py-28 lg:py-32 bg-[#FEFEF5]"
      aria-labelledby="about-title"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Contenido de texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4">
              Sobre Nosotros
            </span>

            <h2 id="about-title" className="section-title">
              Un equipo apasionado
              <br />
              <span className="text-primary-600">por la excelencia tecnológica</span>
            </h2>

            <p className="section-subtitle mt-6">
              En AETERMIA, creemos que el código limpio y las soluciones efectivas transforman negocios.
              Nuestro equipo multidisciplinario combina experiencia en desarrollo web, arquitectura de software
              y diseño de user experience para entregar resultados excepcionales.
            </p>

            <p className="mt-6 text-lg text-dark-600 leading-relaxed">
              Trabajamos con transparencia, comunicación constante y enfoque en resultados.
              Desde startups hasta empresas establecidas, cada proyecto es único y merece una solución a medida.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { icon: Target, label: 'Equipo comprometido' },
                { icon: Users, label: '20+ proyectos' },
                { icon: Heart, label: 'Pasión por el código' },
                { icon: Award, label: 'Calidad garantizada' },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-3 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <item.icon className="w-5 h-5 text-primary-500 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm font-medium text-dark-700">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Imagen decorativa o placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:justify-self-end"
          >
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-500/10 to-primary-600/5 border border-primary-200">
                <div className="w-full h-full flex items-center justify-center">
                  <Users className="w-24 h-24 text-primary-300" aria-hidden="true" />
                </div>
              </div>

              {/* Círculo decorativo flotante */}
              <motion.div
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-white rounded-full shadow-xl border border-dark-200 flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Target className="w-10 h-10 text-primary-500" aria-hidden="true" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
