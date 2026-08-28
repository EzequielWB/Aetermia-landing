import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Mail, MapPin, Phone, Send, CheckCircle, Loader2 } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio'
    if (!formData.email.trim()) newErrors.email = 'El email es obligatorio'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email inválido'
    if (!formData.message.trim()) newErrors.message = 'El mensaje es obligatorio'
    else if (formData.message.trim().length < 10) newErrors.message = 'Mínimo 10 caracteres'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')
    try {
      // TODO: Reemplazar con integración de API real
      await new Promise(resolve => setTimeout(resolve, 1500))
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'equipoaetermia@gmail.com', href: 'mailto:equipoaetermia@gmail.com' },
    { icon: MapPin, label: 'Ubicación', value: 'Buenos Aires, Argentina', href: '#' },
    { icon: Phone, label: 'Teléfono', value: '+34 900 123 456', href: '#' },
  ]

  return (
    <section
      id="contacto"
      className="py-20 sm:py-28 lg:py-32 bg-[#FEFEF5]"
      aria-labelledby="contact-title"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4">
            Contacto
          </span>
          <h2 id="contact-title" className="section-title">
            Hablemos de tu
            <br />
            <span className="text-primary-600">próximo proyecto</span>
          </h2>
          <p className="section-subtitle mx-auto">
            ¿Tienes una idea en mente? Cuéntanos tu proyecto y te responderemos en menos de 24 horas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Info de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-900">{item.label}</h3>
                    <a href={item.href} className="mt-1 text-dark-600 hover:text-primary-600 transition-colors">
                      {item.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-dark-900 mb-2">¡Mensaje enviado!</h3>
                    <p className="text-dark-600">Te contactaremos muy pronto. Gracias por confiar en AETERMIA.</p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 btn-secondary"
                    >
                      Enviar otro mensaje
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark-700 mb-1.5">
                        Nombre completo <span className="text-primary-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                          errors.name ? 'border-red-500 focus:ring-red-500' : 'border-dark-300 focus:ring-primary-500'
                        } focus:outline-none focus:ring-2 focus:ring-offset-2`}
                        placeholder="Tu nombre"
                        aria-invalid={errors.name ? 'true' : 'false'}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        disabled={status === 'submitting'}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1.5 text-sm text-red-600" role="alert">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark-700 mb-1.5">
                        Email <span className="text-primary-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                          errors.email ? 'border-red-500 focus:ring-red-500' : 'border-dark-300 focus:ring-primary-500'
                        } focus:outline-none focus:ring-2 focus:ring-offset-2`}
                        placeholder="tu@email.com"
                        aria-invalid={errors.email ? 'true' : 'false'}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        disabled={status === 'submitting'}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1.5 text-sm text-red-600" role="alert">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-dark-700 mb-1.5">
                        Mensaje <span className="text-primary-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${
                          errors.message ? 'border-red-500 focus:ring-red-500' : 'border-dark-300 focus:ring-primary-500'
                        } focus:outline-none focus:ring-2 focus:ring-offset-2`}
                        placeholder="Cuéntanos tu proyecto, objetivos, tecnologías..."
                        aria-invalid={errors.message ? 'true' : 'false'}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        disabled={status === 'submitting'}
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1.5 text-sm text-red-600" role="alert">{errors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-primary w-full sm:w-auto"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin mr-2" aria-hidden="true" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar mensaje
                          <Send className="ml-2 w-5 h-5" aria-hidden="true" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-dark-500 text-center sm:text-left">
                      Al enviar, aceptas nuestra <a href="#" className="text-primary-600 hover:underline">Política de Privacidad</a>.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
