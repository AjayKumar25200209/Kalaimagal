import { Star, Clock, ShieldCheck } from 'lucide-react'
import { useTranslation } from '../i18n'

export default function FeatureHighlights() {
    const { t } = useTranslation()

    return (
        <section className="py-16 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 bg-card rounded-2xl shadow-sm border border-border flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                            <Clock size={28} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-foreground mb-1">{t('about.experience')}</h3>
                            <p className="text-muted-foreground text-sm">{t('home.feature1.desc')}</p>
                        </div>
                    </div>
                    <div className="p-6 bg-card rounded-2xl shadow-sm border border-border flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                            <Star size={28} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-foreground mb-1">{t('home.feature2.title')}</h3>
                            <p className="text-muted-foreground text-sm">{t('home.feature2.desc')}</p>
                        </div>
                    </div>
                    <div className="p-6 bg-card rounded-2xl shadow-sm border border-border flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
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
    )
}
