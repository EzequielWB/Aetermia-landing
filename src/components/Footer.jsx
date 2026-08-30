import { Github, Linkedin, Twitter, Dribbble, Mail } from 'lucide-react';

const footerLinks = {
  empresa: [
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Contacto', href: '#contacto' },
  ],
  servicios: [
    { label: 'Desarrollo Web', href: '#servicios' },
    { label: 'Software a Medida', href: '#servicios' },
    { label: 'Consultoría IT', href: '#servicios' },
    { label: 'Mantenimiento', href: '#servicios' },
  ],
  legal: [
    { label: 'Privacidad', href: '#contacto' },
    { label: 'Términos', href: '#contacto' },
  ],
};

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

export function Footer() {
  return (
    <footer className="bg-dark-900 text-dark-300" role="contentinfo">
      <div className="section-container py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <a href="/" className="flex items-center space-x-2 mb-6" aria-label="AETERMIA - Inicio">
              <img src="/images/logo-blanco.png" alt="Logo AETERMIA" className="h-16 w-auto" width="200" height="64" loading="eager" />
              <span className="text-2xl font-bold text-white">AETERMIA</span>
            </a>
            <p className="text-dark-400 text-sm leading-relaxed mb-6 max-w-sm">
              Agencia de soluciones informáticas especializada en desarrollo web y software a medida. Innovación y excelencia en cada entrega.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center text-dark-400 hover:bg-primary-900/30 hover:text-primary-400 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Empresa */}
          <nav aria-label="Enlaces de empresa">
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Servicios */}
          <nav aria-label="Enlaces de servicios">
            <h3 className="text-white font-semibold mb-4">Servicios</h3>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Enlaces legales">
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-800 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-dark-500">
            © {new Date().getFullYear()} AETERMIA. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <a href="mailto:contacto@aetermia.site" className="flex items-center gap-1.5 text-dark-400 hover:text-white transition-colors">
              <Mail className="w-4 h-4" aria-hidden="true" />
              contacto@aetermia.site
            </a>
            <span className="text-dark-700">|</span>
            <a href="#contacto" className="text-dark-400 hover:text-white transition-colors">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
