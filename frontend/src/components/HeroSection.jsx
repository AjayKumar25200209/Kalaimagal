import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from '../i18n'
import imageCenter from '@/assets/image.png'
import imageLeft from '@/assets/image copy.png'
import saraswati from '@/assets/saraswati.png'
import vallar from '@/assets/vallar.png'

export default function HeroSection() {
    const { t } = useTranslation()

    return (
        <section className="flex flex-col items-center w-full min-h-[calc(100vh-80px)] pt-12 pb-10 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-[#e8c697]/10 to-transparent">
            {/* 1. Top: Company Name */}

            <div className="flex  justify-center items-center w-full">
                {/* <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 w-full max-w-4xl mb-8 md:mb-12 px-4 drop-shadow-md"> */}
                <p className="order-1 md:order-1 text-[5px] md:text-[9px] font-bold text-primary text-center leading-relaxed">
                    <img src={saraswati} alt="saraswati" className="w-28 h-28 md:w-60 md:h-60 object-contain" />
                    <p className="relative top-[-20px]" >ஓம் ஹிரீம் ஐம் ஸ்ரீம் ஸ்ரீ <br />கமலதாரிண்யை நமக வசியம்</p>
                </p>
                <h1 className="text-3xl sm:text-3xl mt-12 md:w-full md:text-4xl lg:text-5xl order-2 md:order-2 font-extrabold text-primary mb-12 text-center drop-shadow-md px-2">
                    {t('hero.title')}
                </h1>


                <p className="order-2 md:order-3 text-[5px] md:text-[9px]  font-bold text-primary text-center leading-relaxed">
                    <img src={vallar} alt="vallalar" className="order-3 rotate-2  md:order-3 w-28 h-28 md:w-50 md:h-50 object-contain" />
                    அருட்பெருஞ்ஜோதி <br /> அருட்பெருஞ்ஜோதி

                    தனிப்பெருங்கருணை <br /> அருட்பெருஞ்ஜோதி
                </p>
                {/* </div> */}


            </div>



            {/* 2. Middle Row: Left Image, Center Image, Right Slogan */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-25 items-center w-full max-w-6xl mb-16">
                {/* Left Side: Image Copy */}
                <div className="flex justify-center md:justify-end">
                    <img
                        src={imageLeft}
                        alt="Astrology Guide"
                        className="w-56 h-56 md:w-64 md:h-64 object-contain shadow-2xl rounded-3xl bg-white/60 p-2 border border-white/40 transform transition hover:scale-105 duration-300"
                    />
                </div>

                {/* Center: Image */}
                <div className="flex justify-center">
                    <div className="relative">
                        {/* Glow behind image */}
                        <div className="absolute inset-0 bg-[#e8c697] rounded-full blur-3xl opacity-40 animate-pulse"></div>
                        <img
                            src={imageCenter}
                            alt="Astrology Reading"
                            className="relative w-64  h-64 md:w-80 animate-[spin_20s_linear_infinite] md:h-80 object-contain shadow-2xl rounded-full bg-[#fdfaf5] p-4 border-4 border-[#e8c697]/50 transform transition hover:scale-105 duration-300"
                        />
                    </div>
                </div>

                {/* Right Side: Slogan */}
                <div className="flex justify-center md:justify-start text-center md:text-left h-full items-center">
                    <p className="text-xl md:text-2xl font-bold text-foreground/90 leading-relaxed max-w-md p-6 bg-white/0 backdrop-blur-0 rounded-3xl border border-white/0">
                        {t('hero.slogan')}
                    </p>
                </div>
            </div>

            {/* 3. Bottom Area: Subtitle & CTA */}
            <div className="flex flex-col items-center text-center space-y-8 max-w-2xl mt-4">
                <p className="text-xl md:text-2xl lg:text-3xl text-foreground font-semibold drop-shadow-sm px-4">
                    {t('hero.subtitle')}
                </p>

                <Link
                    to="/contact"
                    className="group inline-flex items-center space-x-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                    <span>{t('hero.cta')}</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
                </Link>
            </div>
        </section>
    )
}
