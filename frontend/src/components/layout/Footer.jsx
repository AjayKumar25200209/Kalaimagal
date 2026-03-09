import { useTranslation } from '../../i18n'
import { MapPin, Phone, Mail } from 'lucide-react'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-primary/5 border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">
              {t('hero.title')}
            </h3>
            <p className="text-muted-foreground">
              {t('hero.subtitle')}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">{t('nav.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>{t('hero.address')}</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="flex flex-col">
                  <span>91509 05325, 91507 69623</span>
                  <span>94871 12872, 0427 2445693</span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/" className="hover:text-primary transition-colors">{t('nav.home')}</a></li>
              <li><a href="/services" className="hover:text-primary transition-colors">{t('nav.services')}</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors">{t('nav.about')}</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">{t('nav.contact')}</a></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}
