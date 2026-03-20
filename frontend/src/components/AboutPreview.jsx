import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { useTranslation } from '../i18n'

export default function AboutPreview() {
    const { t } = useTranslation()

    return (
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
                    <div className="absolute inset-0 bg-linear-to-tr from-primary/40 to-transparent"></div>
                    <Star size={120} className="text-primary/40" />
                    <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur text-card-foreground p-4 rounded-xl shadow-lg text-center">
                        <p className="font-bold text-lg">{t('hero.title')}</p>
                        <p className="text-sm text-muted-foreground">{t('hero.address')}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
