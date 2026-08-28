import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Terminal, Sparkles, Cpu, CheckCircle2 } from 'lucide-react';

export function Hero() {
  return (
    <section 
      className="relative min-h-screen flex items-center pt-16 lg:pt-20 overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-cream-100 to-primary-50" />
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
            {/* Tag superior */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-200/60 text-primary-700 text-xs font-semibold uppercase tracking-wider mb-6"
            >

              Software y Desarrollo Web a Medida
            </motion.div>

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

          {/* Tarjeta Visual de Hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="hidden lg:flex justify-end items-center"
            aria-hidden="true"
          >
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-dark-200 overflow-hidden relative">
              {/* Header de la ventana */}
              <div className="bg-dark-900 px-4 py-3 flex items-center justify-between border-b border-dark-800">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center space-x-1 text-xs text-dark-400 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-primary-400" />
                  <span>aetermia-app.tsx</span>
                </div>
                <div className="w-10"></div>
              </div>

              {/* Contenido Visual */}
              <div className="p-6 space-y-4 bg-gradient-to-b from-white to-primary-50/20">
                <div className="flex items-center justify-between p-3 rounded-lg bg-primary-50/80 border border-primary-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-primary-600 text-white flex items-center justify-center">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-dark-900">Alto Rendimiento</h4>
                      <p className="text-xs text-dark-500">Arquitectura moderna y optimizada</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 bg-primary-200/60 text-primary-800 rounded-md">99.9%</span>
                </div>

                {/* Bloque de código estilizado */}
                <div className="p-4 rounded-lg bg-dark-950 text-dark-200 font-mono text-xs leading-relaxed">
                  <p className="text-primary-400">// Solución hecha a medida</p>
                  <p><span className="text-purple-400">const</span> stack = [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Node'</span>, <span className="text-green-400">'Cloud'</span>];</p>
                  <p><span className="text-blue-400">await</span> aetermia.<span className="text-yellow-300">boostBusiness</span>();</p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="flex items-center space-x-2 text-xs font-medium text-dark-700">
                    <CheckCircle2 className="w-4 h-4 text-primary-600" />
                    <span>Diseño Responsivo</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-medium text-dark-700">
                    <CheckCircle2 className="w-4 h-4 text-primary-600" />
                    <span>Código Escalable</span>
                  </div>
                </div>
              </div>
            </div>
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
