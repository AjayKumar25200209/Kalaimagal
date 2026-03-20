import { Star, Clock, ShieldCheck, BookOpenText, ALargeSmall ,ArrowUpAZ  } from 'lucide-react'
import { useTranslation } from '../i18n'

export default function FeatureHighlights() {
    const { t } = useTranslation()

    return (
        <section className="pb-16 pt-2 bg-muted/30">
            <p className='text-center text-xl w-3/4 mx-auto font-bold text-primary mb-12 drop-shadow-md'>
                {t('home.feature.title')}
            </p>
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
                            <p className="text-muted-foreground font-bold text-sm">{t('home.feature2.desc1')}</p>

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

                    <div className="p-6 bg-card rounded-2xl shadow-sm border border-border flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                            <BookOpenText size={28} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-foreground mb-1">{t('home.feature4.title')}</h3>
                            <p className="text-muted-foreground text-sm">{t('home.feature4.desc')}</p>
                        </div>
                    </div>


                    <div className="p-6 bg-card rounded-2xl shadow-sm border border-border flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                            <ALargeSmall size={28} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-foreground mb-1">{t('home.feature5.title')}</h3>
                            <p className="text-muted-foreground text-sm">{t('home.feature5.desc')}</p>
                        </div>
                    </div>


                    <div className="p-6 bg-card rounded-2xl shadow-sm border border-border flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                            <ArrowUpAZ  size={28} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-foreground mb-1">{t('home.feature6.title')}</h3>
                            <p className="text-muted-foreground text-sm">{t('home.feature6.desc')}</p>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}
