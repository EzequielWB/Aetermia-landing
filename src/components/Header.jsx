import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useMobileMenu } from '../hooks/useMobileMenu';

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
];

export function Header() {
  const { isOpen, isScrolled, toggleMenu, closeMenu } = useMobileMenu();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-sm border-b border-dark-200' : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav className="section-container" aria-label="Navegación principal">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
            <a href="/" className="flex items-center space-x-2" aria-label="AETERMIA - Inicio">
              <img 
                src="/images/logo.png" 
                alt="" 
                className="h-16 w-auto"
                width="200"
                height="64"
                loading="eager"
              />
              <span className="hidden sm:block text-2xl font-bold text-dark-900">AETERMIA</span>
            </a>
          </motion.div>

          {/* Navegación Desktop */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden lg:flex items-center space-x-8"
            role="navigation"
            aria-label="Menú principal"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-dark-600 hover:text-primary-600 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-500 hover:after:w-full after:transition-all after:duration-300"
                onClick={closeMenu}
              >
                {link.label}
              </motion.a>
            ))}

            <motion.a
              href="#contacto"
              className="btn-primary hidden lg:inline-flex"
              onClick={closeMenu}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Solicitar Presupuesto
            </motion.a>
          </motion.div>

          {/* Botón Menú Móvil */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-dark-600 hover:bg-dark-100 transition-colors"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </motion.button>
        </div>

        {/* Menú Móvil */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden border-t border-dark-200 bg-white"
              role="navigation"
              aria-label="Menú móvil"
            >
              <div className="py-6 space-y-4">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="block px-4 py-3 text-base font-medium text-dark-600 hover:text-primary-600 hover:bg-dark-50 rounded-lg transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contacto"
                  onClick={closeMenu}
                  className="block mx-4 btn-primary text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Solicitar Presupuesto
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
