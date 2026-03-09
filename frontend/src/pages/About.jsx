import { useTranslation } from '../i18n'
import { CheckCircle2 } from 'lucide-react'

export default function About() {
  const { t } = useTranslation()

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold text-foreground mb-4">
          {t('about.title')}
        </h1>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
        <p className="text-xl text-primary font-medium bg-primary/10 inline-block px-4 py-2 rounded-full">
          {t('about.experience')}
        </p>
      </div>

      <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>{t('about.description1')}</p>
          <p>{t('about.description2')}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-3">
            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-foreground font-medium">{t('about.list1')}</span>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-foreground font-medium">{t('about.list2')}</span>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-foreground font-medium">{t('about.list3')}</span>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-foreground font-medium">{t('about.list4')}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
