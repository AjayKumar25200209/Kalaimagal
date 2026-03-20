import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from '../../i18n'
import { useStore } from '../../store/useStore'
import { Menu, X, Languages } from 'lucide-react'
import { useState } from 'react'
import saraswati from '@/assets/saraswati.png'

export function Navbar() {
  const { t, language } = useTranslation()
  const toggleLanguage = useStore((state) => state.toggleLanguage)
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/services', label: t('nav.services') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') },
  ]

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16"> 
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
            {/* <img src={saraswati} alt="saraswati" className="w-10 h-10" /> */}
              <span className="font-bold text-lg text-primary md:text-2xl">
                
                {t('nav.brand')}
              </span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-foreground/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1.5 rounded-full transition-colors font-medium text-sm"
            >
              <Languages size={18} />
              <span>{language === 'ta' ? 'EN' : 'தமிழ்'}</span>
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={toggleLanguage}
              className="mr-4 flex items-center space-x-1 bg-primary/10 text-primary px-2 py-1 rounded-md text-sm"
            >
              <Languages size={16} />
              <span>{language === 'ta' ? 'EN' : 'TA'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
