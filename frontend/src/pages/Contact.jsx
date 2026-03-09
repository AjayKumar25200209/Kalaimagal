import { useState } from 'react'
import { useTranslation } from '../i18n'
import { submitContact } from '../services/api'
import { Send, MapPin, Phone, Mail, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'

export default function Contact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState({ loading: false, success: false, error: null })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: false, error: null })
    try {
      await submitContact(formData)
      setStatus({ loading: false, success: true, error: null })
      setFormData({ name: '', email: '', phone: '', message: '' }) // reset
    } catch (error) {
      console.error(error)
      setStatus({ loading: false, success: false, error: t('contact.error') })
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Information */}
        <div className="space-y-10">
          <div>
            <h1 className="text-4xl font-extrabold text-foreground mb-4">{t('contact.title')}</h1>
            <div className="w-24 h-1 bg-primary rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-4 rounded-2xl flex-shrink-0">
                <MapPin className="text-primary w-6 h-6" />
              </div>
              <div className="pt-1">
                <h3 className="font-semibold text-foreground text-lg mb-1">{t('contact.office')}</h3>
                <p className="text-muted-foreground leading-relaxed">{t('hero.address')}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-4 rounded-2xl flex-shrink-0">
                <Phone className="text-primary w-6 h-6" />
              </div>
              <div className="pt-1">
                <h3 className="font-semibold text-foreground text-lg mb-1">{t('contact.phoneTitle')}</h3>
                <div className="text-muted-foreground space-y-1">
                  <p>+91 91509 05325, +91 91507 69623</p>
                  <p>+91 94871 12872, 0427 2445693</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-4 rounded-2xl flex-shrink-0">
                <Mail className="text-primary w-6 h-6" />
              </div>
              <div className="pt-1">
                <h3 className="font-semibold text-foreground text-lg mb-1">{t('contact.emailTitle')}</h3>
                <p className="text-muted-foreground">senthilrajan@example.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-card border border-border p-8 rounded-3xl shadow-sm">
          {status.success ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{t('contact.thankYou')}</h3>
              <p className="text-muted-foreground">{t('contact.success')}</p>
              <button 
                onClick={() => setStatus(prev => ({ ...prev, success: false }))}
                className="mt-6 text-primary hover:underline font-medium"
              >
                {t('contact.sendAnother')}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {status.error && (
                <div className="bg-destructive/10 text-destructive p-4 rounded-xl flex items-center space-x-3 text-sm font-medium">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{status.error}</span>
                </div>
              )}
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">{t('contact.name')}</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                  placeholder={t('contact.placeholder.name')}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">{t('contact.email')}</label>
                  <input 
                    type="email" 
                    name="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                    placeholder={t('contact.placeholder.email')}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">{t('contact.phone')}</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                    placeholder={t('contact.placeholder.phone')}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">{t('contact.message')}</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none"
                  placeholder={t('contact.placeholder.message')}
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status.loading}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-4 rounded-xl flex items-center justify-center space-x-2 transition-colors disabled:opacity-70"
              >
                {status.loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <span>{t('contact.submit')}</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  )
}
