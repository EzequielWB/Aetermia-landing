import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section 
      className="relative min-h-screen flex items-center pt-16 lg:pt-20 overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFFDF0] via-[#FEFEF5] to-primary-50" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-100/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-primary-100/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contenido Principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Título Principal */}
            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-900 leading-tight tracking-tight text-balance"
            >
              Soluciones Informáticas
              <br />
              <span className="text-primary-600">de Excelencia</span>
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-lg sm:text-xl text-dark-600 leading-relaxed max-w-xl text-balance"
            >
              Potenciamos tu negocio con desarrollo web y software a medida.
              Innovación, rendimiento y diseño minimalista.
            </motion.p>

            {/* Botones CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#contacto"
                className="btn-primary group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Solicitar Presupuesto
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </motion.a>
              <motion.a
                href="#servicios"
                className="btn-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Conoce Nuestros Servicios
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Espacio decorativo derecha */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="hidden lg:flex justify-end items-center"
            aria-hidden="true"
          >
            <div className="w-full h-[300px] bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl"></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <ChevronDown className="w-6 h-6 text-dark-400" />
      </motion.div>
    </section>
  );
}
