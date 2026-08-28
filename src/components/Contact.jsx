import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    botcheck: '',
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio';
    if (!formData.email.trim()) newErrors.email = 'El email es obligatorio';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email inválido';
    if (!formData.message.trim()) newErrors.message = 'El mensaje es obligatorio';
    else if (formData.message.trim().length < 10) newErrors.message = 'Mínimo 10 caracteres';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setErrorMessage('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '64b16b1f-b3a1-4a7f-909d-2f078126ec98';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Nuevo mensaje de ${formData.name} - AETERMIA Web`,
          from_name: 'AETERMIA Landing',
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          botcheck: formData.botcheck,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', botcheck: '' });
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'No se pudo enviar el mensaje. Por favor intenta nuevamente.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Ocurrió un error de conexión al enviar el mensaje.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const contactInfo = [
    { icon: Mail, label: 'Email Corporativo', value: 'contacto@aetermia.site', href: 'mailto:contacto@aetermia.site' },
    { icon: Mail, label: 'Email Alternativo', value: 'equipoaetermia@gmail.com', href: 'mailto:equipoaetermia@gmail.com' },
    { icon: MapPin, label: 'Ubicación', value: 'Buenos Aires, Argentina', href: null },
    { icon: Phone, label: 'Teléfono', value: '+54 9 11 0000-0000', href: 'tel:+5491100000000' },
  ];

  return (
    <section
      id="contacto"
      className="py-20 sm:py-28 lg:py-32 bg-cream-100"
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
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label + item.value}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + index * 0.08 }}
                  className="flex items-start gap-4 p-5 bg-primary-50/70 border border-primary-100/80 rounded-xl hover:bg-primary-100/80 transition-colors"
                >
                  <div className="w-11 h-11 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <item.icon className="w-5 h-5 text-primary-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-dark-900">{item.label}</h3>
                    {item.href ? (
                      <a href={item.href} className="mt-0.5 block text-sm text-dark-600 hover:text-primary-600 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm text-dark-600">
                        {item.value}
                      </p>
                    )}
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
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-dark-200 shadow-sm">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-10"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-dark-900 mb-2">¡Mensaje enviado con éxito!</h3>
                    <p className="text-dark-600 max-w-md mx-auto">
                      Hemos recibido tu consulta. Nos pondremos en contacto contigo a la brevedad.
                    </p>
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
                    {/* Campo Honeypot antispam invisible */}
                    <input
                      type="checkbox"
                      name="botcheck"
                      className="hidden"
                      style={{ display: 'none' }}
                      checked={formData.botcheck}
                      onChange={(e) => setFormData(prev => ({ ...prev, botcheck: e.target.checked ? 'true' : '' }))}
                    />

                    {status === 'error' && (
                      <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 flex items-start gap-3 text-sm">
                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-500" />
                        <div>
                          <p className="font-medium">Hubo un problema al enviar</p>
                          <p className="text-xs mt-0.5">{errorMessage || 'Por favor intenta de nuevo o escríbenos directamente a contacto@aetermia.site'}</p>
                        </div>
                      </div>
                    )}

                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark-700 mb-1.5">
                        Nombre completo <span className="text-primary-600">*</span>
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
                        Email <span className="text-primary-600">*</span>
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
                        Mensaje <span className="text-primary-600">*</span>
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
                          Enviando mensaje...
                        </>
                      ) : (
                        <>
                          Enviar mensaje
                          <Send className="ml-2 w-5 h-5" aria-hidden="true" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-dark-500 text-center sm:text-left">
                      Al enviar, aceptas ser contactado por el equipo de AETERMIA.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
