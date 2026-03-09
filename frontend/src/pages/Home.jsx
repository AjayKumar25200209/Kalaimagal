import { Link } from 'react-router-dom'
import { useTranslation } from '../i18n'
import { Star, Clock, ShieldCheck, ArrowRight } from 'lucide-react'

export default function Home() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/90 to-primary/40 text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="relative max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 drop-shadow-md max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className="pt-8">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-muted transition-colors shadow-xl"
            >
              <span>{t('hero.cta')}</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-card rounded-2xl shadow-sm border border-border flex items-start space-x-4">
              <div className="p-3 bg-primary/10 rounded-xl text-primary flex-shrink-0">
                <Clock size={28} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-1">{t('about.experience')}</h3>
                <p className="text-muted-foreground text-sm">{t('home.feature1.desc')}</p>
              </div>
            </div>
            <div className="p-6 bg-card rounded-2xl shadow-sm border border-border flex items-start space-x-4">
              <div className="p-3 bg-primary/10 rounded-xl text-primary flex-shrink-0">
                <Star size={28} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-1">{t('home.feature2.title')}</h3>
                <p className="text-muted-foreground text-sm">{t('home.feature2.desc')}</p>
              </div>
            </div>
            <div className="p-6 bg-card rounded-2xl shadow-sm border border-border flex items-start space-x-4">
              <div className="p-3 bg-primary/10 rounded-xl text-primary flex-shrink-0">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-1">{t('home.feature3.title')}</h3>
                <p className="text-muted-foreground text-sm">{t('home.feature3.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brief About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">{t('about.title')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.description1')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.description2')}
            </p>
            <Link
              to="/about"
              className="inline-block mt-4 text-primary font-semibold hover:underline"
            >
              {t('home.readMore')}
            </Link>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-primary/10 flex items-center justify-center">
            {/* Real image would go here, placeholder for now */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent"></div>
            <Star size={120} className="text-primary/40" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur text-card-foreground p-4 rounded-xl shadow-lg text-center">
              <p className="font-bold text-lg">{t('hero.title')}</p>
              <p className="text-sm text-muted-foreground">{t('hero.address')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
