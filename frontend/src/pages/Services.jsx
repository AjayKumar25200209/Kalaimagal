import { useState, useEffect } from 'react'
import { getServices } from '../services/api'
import { useTranslation } from '../i18n'
import { 
  Sparkles, ScrollText, Compass, HeartHandshake, Baby, 
  Gem, AlignVerticalSpaceAround, Diamond, Triangle 
} from 'lucide-react'

// Map icon strings to components
const IconMap = {
  predict: Sparkles,
  horoscope: ScrollText,
  kp: Compass,
  marriage: HeartHandshake,
  baby: Baby,
  gemstone: Gem,
  japamalai: AlignVerticalSpaceAround,
  rings: Diamond,
  hebrew: Triangle
}

export default function Services() {
  const { t } = useTranslation()
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch services from API
    getServices()
      .then(data => {
        setServices(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to fetch services:', err)
        setLoading(false)
      })
  }, [])

  return (
    <div className="bg-background min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl font-extrabold text-foreground tracking-tight">
            {t('services.title')}
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64 text-muted-foreground">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = IconMap[service.iconKey] || Sparkles
              
              return (
                <div 
                  key={service.id} 
                  className="bg-card hover:shadow-xl transition-all duration-300 border border-border shadow-sm rounded-3xl p-8 hover:-translate-y-1 group"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(service.descriptionKey)}
                  </p>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
