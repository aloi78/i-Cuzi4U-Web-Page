import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Bed, 
  Armchair, 
  Car, 
  Wind, 
  Waves, 
  CookingPot,
  MessageCircle, 
  Phone, 
  CheckCircle2, 
  ShieldCheck, 
  UserCheck, 
  Zap,
  Menu,
  X,
  ArrowRight,
  Globe,
  Clock
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES, PACKAGES, WHATSAPP_LINK, LOGO_URL } from './constants';
import MattressCleaningPage from './components/MattressCleaningPage';
import SofaCleaningPage from './components/SofaCleaningPage';
import CarCleaningPage from './components/CarCleaningPage';
import CurtainCleaningPage from './components/CurtainCleaningPage';
import CarpetCleaningPage from './components/CarpetCleaningPage';

const IconMap: Record<string, any> = {
  Bed,
  Armchair,
  Car,
  Wind,
  Waves,
  CookingPot,
};

export default function App() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'privacy' | 'mattress' | 'sofa' | 'car-seat' | 'curtain' | 'carpet'>('home');
  const [comingSoonModalService, setComingSoonModalService] = useState<{ id: string; title: string } | null>(null);

  const handleServiceClick = (service: typeof SERVICES[number]) => {
    if (service.comingSoon || (service as any).comingSoon) {
      setComingSoonModalService({
        id: service.id,
        title: t(`services.${service.id}.title`)
      });
      return;
    }
    if (service.id === 'mattress') navigateTo('mattress');
    else if (service.id === 'sofa') navigateTo('sofa');
    else if (service.id === 'car-seat') navigateTo('car-seat');
    else if (service.id === 'curtain') navigateTo('curtain');
    else if (service.id === 'carpet') navigateTo('carpet');
    else {
      handleWhatsAppClick(`Hi i-Cuzi4U, I'm interested in ${t(`services.${service.id}.title`)}. Please provide a quote.`);
    }
  };

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ms', name: 'Malay' },
    { code: 'zh', name: '中文' },
  ];

  const getAssetPath = (path: string) => {
    if (!path) return '';
    if (path.startsWith('http') || path.startsWith('data:')) return path;
    const base = import.meta.env.BASE_URL || './';
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
    setIsMenuOpen(false);
  };

  const navigateTo = (view: 'home' | 'privacy' | 'mattress' | 'sofa' | 'car-seat' | 'curtain' | 'carpet') => {
    setCurrentView(view);
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  const renderBrandText = (text: string, type?: 'hero' | 'process') => {
    if (!type) return text;

    return text.split(/(Untuk|Anda|为|您|4|U)/gi).map((part, i) => {
      const lowerPart = part.toLowerCase();
      
      // Hero Title highlights: Malay (Untuk/Anda), Chinese (为/您), and English (4/U)
      if (type === 'hero') {
        if (lowerPart === 'untuk') return <span key={i} className="text-[#FFD800]">{part}</span>;
        if (lowerPart === 'anda') return <span key={i} className="text-[#3AD2FF]">{part}</span>;
        if (part === '为') return <span key={i} className="text-[#FFD800]">{part}</span>;
        if (part === '您') return <span key={i} className="text-[#3AD2FF]">{part}</span>;
        if (part === '4') return <span key={i} className="text-[#FFD800]">{part}</span>;
        if (part === 'U') return <span key={i} className="text-[#3AD2FF]">{part}</span>;
      }

      // Process Section highlights: English/Global branding (4/U)
      if (type === 'process') {
        if (part === '4') return <span key={i} className="text-[#FFD800]">{part}</span>;
        if (part === 'U') return <span key={i} className="text-[#3AD2FF]">{part}</span>;
      }
      
      return part;
    });
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Dynamic metadata update (SEO titles & descriptions)
    const localizedTitle = t('seo.title');
    const localizedDesc = t('seo.meta_desc');
    
    if (localizedTitle) {
      document.title = localizedTitle;
    }
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && localizedDesc) {
      metaDescription.setAttribute('content', localizedDesc);
    }
    
    // Inject Dynamic JSON-LD Structured Data
    const existingScript = document.getElementById('jsonld-schema');
    if (existingScript) {
      existingScript.remove();
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "i-Cuzi4U Cleaning Services",
      "image": getAssetPath(LOGO_URL),
      "url": window.location.origin + (import.meta.env.BASE_URL || "/"),
      "telephone": "+601162638228",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kuala Lumpur",
        "addressRegion": "Selangor",
        "addressCountry": "MY"
      },
      "geo": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "3.1390",
          "longitude": "101.6869"
        },
        "areaServed": "Klang Valley (Kuala Lumpur, Selangor, Petaling Jaya, Subang Jaya, Shah Alam, Rawang)"
      },
      "sameAs": [
        "https://www.facebook.com/icuzi4u",
        "https://www.instagram.com/icuzi4u"
      ],
      "description": localizedDesc || "Professional Deep Cleaning Services Klang Valley"
    };

    const script = document.createElement('script');
    script.id = 'jsonld-schema';
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const addedScript = document.getElementById('jsonld-schema');
      if (addedScript) {
        addedScript.remove();
      }
    };
  }, [i18n.language, t]);

  const handleWhatsAppClick = (message: string) => {
    window.open(WHATSAPP_LINK(message), '_blank');
  };

  const SwappingBackground = () => {
    const serviceImages = SERVICES.map(s => getAssetPath(s.image));
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % serviceImages.length);
      }, 5000); // Swap every 5 seconds
      return () => clearInterval(timer);
    }, [serviceImages.length]);

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50 z-0 bg-primary/5">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.7, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img 
              src={serviceImages[index]} 
              alt="" 
              className="w-full h-full object-cover grayscale-[20%] blur-[1px]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    );
  };

  const PrivacyPolicy = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 py-20 max-w-4xl"
    >
      <button 
        onClick={() => navigateTo('home')}
        className="flex items-center gap-2 text-primary font-bold mb-8 hover:translate-x-[-4px] transition-transform"
      >
        <ArrowRight className="rotate-180" size={20} />
        <span>Back to Home</span>
      </button>

      <h1 className="text-4xl font-bold text-primary mb-4">{t('privacy.title')}</h1>
      <p className="text-gray-400 mb-8">{t('privacy.last_updated')}</p>
      
      <div className="prose prose-lg max-w-none text-gray-600">
        <p className="mb-8 leading-relaxed">
          {t('privacy.introduction')}
        </p>

        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">{t('privacy.sections.collection_title')}</h2>
            <p>{t('privacy.sections.collection_desc')}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">{t('privacy.sections.usage_title')}</h2>
            <p>{t('privacy.sections.usage_desc')}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">{t('privacy.sections.third_party_title')}</h2>
            <p>{t('privacy.sections.third_party_desc')}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">{t('privacy.sections.security_title')}</h2>
            <p>{t('privacy.sections.security_desc')}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">{t('privacy.sections.contact_title')}</h2>
            <p>{t('privacy.sections.contact_desc')}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className={`sticky-header transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div 
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => navigateTo('home')}
          >
            <img 
              src={getAssetPath(LOGO_URL)} 
              alt="i-Cuzi4U Logo" 
              className="h-[52px] w-auto"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-gray-600">
            {currentView === 'home' ? (
              <>
                <a href="#services" className="hover:text-primary transition-colors">{t('nav.services')}</a>
                <a href="#packages" className="hover:text-primary transition-colors">{t('nav.packages')}</a>
                <a href="#about" className="hover:text-primary transition-colors">{t('nav.about')}</a>
              </>
            ) : (
              <button onClick={() => navigateTo('home')} className="hover:text-primary transition-colors">Home</button>
            )}
            
            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-1 hover:text-primary transition-colors"
              >
                <Globe size={18} />
                <span className="uppercase">{i18n.language.split('-')[0]}</span>
              </button>
              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-primary/5 transition-colors ${i18n.language === lang.code ? 'text-primary font-bold' : 'text-gray-600'}`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button 
              onClick={() => handleWhatsAppClick(t('nav.whatsapp_msg', { defaultValue: "Hi i-Cuzi4U, I'd like to get a quote." }))}
              className="bg-action text-primary px-6 py-2.5 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity font-bold"
            >
              <MessageCircle size={18} />
              <span>{t('nav.whatsapp')}</span>
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-4 font-medium">
                {currentView === 'home' ? (
                  <>
                    <a href="#services" onClick={() => setIsMenuOpen(false)}>{t('nav.services')}</a>
                    <a href="#packages" onClick={() => setIsMenuOpen(false)}>{t('nav.packages')}</a>
                    <a href="#about" onClick={() => setIsMenuOpen(false)}>{t('nav.about')}</a>
                  </>
                ) : (
                  <button onClick={() => navigateTo('home')} className="text-left py-2">Home</button>
                )}
                
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider font-bold">Language</p>
                  <div className="flex gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`px-3 py-1.5 rounded-lg text-sm font-bold border ${i18n.language === lang.code ? 'bg-primary text-white border-primary' : 'bg-white text-gray-600 border-gray-200'}`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => handleWhatsAppClick(t('nav.whatsapp_msg', { defaultValue: "Hi i-Cuzi4U, I'd like to get a quote." }))}
                  className="bg-action text-primary px-6 py-4 rounded-xl flex items-center justify-center gap-2 font-bold"
                >
                  <MessageCircle size={20} />
                  <span>{t('nav.whatsapp')}</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        {currentView === 'home' ? (
          <>
            {/* Hero Section */}
            <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden bg-white/10">
              <SwappingBackground />
              <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="inline-block px-4 py-1.5 bg-[#FFD800] text-primary rounded-full text-sm font-bold mb-6">
                      {t('hero.badge')}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-primary leading-tight mb-4">
                      {t('hero.title1')} <br />
                      {renderBrandText(t('hero.title2'), 'hero')}
                    </h1>
                    <p className="text-xl md:text-2xl font-medium text-primary/80 mb-6 italic">
                      {renderBrandText(t('hero.slogan'), 'hero')}
                    </p>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
                      {renderBrandText(t('hero.desc'))}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button 
                        onClick={() => handleWhatsAppClick(t('hero.whatsapp_msg', { defaultValue: "Hi i-Cuzi4U, I'm interested in a professional cleaning service. Please provide a quote." }))}
                        className="btn-primary text-lg"
                      >
                        <MessageCircle size={24} />
                        <span>{t('hero.cta_quote')}</span>
                      </button>
                      <a href="#services" className="flex items-center justify-center gap-2 font-bold text-primary px-8 py-4 rounded-full border-2 border-primary/10 hover:bg-primary/5 transition-colors">
                        {t('hero.cta_services')}
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Background Decoration removed for scrolling images */}
            </section>

            {/* Trust Bar */}
            <section className="bg-white py-12 border-y border-gray-100">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 bg-[#FFD800] rounded-full flex items-center justify-center text-primary">
                      <UserCheck size={24} />
                    </div>
                    <span className="font-bold text-sm md:text-base">{t('trust.staff')}</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 bg-[#FFD800] rounded-full flex items-center justify-center text-primary">
                      <Zap size={24} />
                    </div>
                    <span className="font-bold text-sm md:text-base">{t('trust.tech')}</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 bg-[#FFD800] rounded-full flex items-center justify-center text-primary">
                      <ShieldCheck size={24} />
                    </div>
                    <span className="font-bold text-sm md:text-base">{t('trust.chemicals')}</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 bg-[#FFD800] rounded-full flex items-center justify-center text-primary">
                      <CheckCircle2 size={24} />
                    </div>
                    <span className="font-bold text-sm md:text-base">{t('trust.satisfaction')}</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Service Grid */}
            <section id="services" className="py-20 bg-app-bg">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{renderBrandText(t('services.title'))}</h2>
                  <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">{renderBrandText(t('services.desc'))}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   {SERVICES.map((service, index) => {
                     const Icon = IconMap[service.icon];
                     const isComingSoon = Boolean(service.comingSoon);

                     return (
                       <motion.div
                         key={service.id}
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: index * 0.1 }}
                         className="relative min-h-[360px] h-full rounded-3xl overflow-hidden group cursor-pointer shadow-lg"
                         onClick={() => handleServiceClick(service)}
                       >
                        {/* Background Image */}
                        <img 
                          src={getAssetPath(service.image)} 
                          alt={t(`seo.${service.id}_alt`)}
                          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${isComingSoon ? 'brightness-90' : ''}`}
                          referrerPolicy="no-referrer"
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent" />

                        {/* Coming Soon Top Badge */}
                        {isComingSoon && (
                          <div className="absolute top-4 right-4 bg-[#FFD800] text-primary font-extrabold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 z-20 border border-[#FFD800]/50">
                            <Clock size={14} className="animate-pulse" />
                            <span>{t('services.coming_soon')}</span>
                          </div>
                        )}
                        
                        {/* Content */}
                        <div className="relative h-full p-8 flex flex-col justify-end text-white z-10">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4">
                            <Icon size={24} />
                          </div>
                          <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                            <span>{t(`services.${service.id}.title`)}</span>
                          </h3>
                          <p className="text-white/80 text-sm mb-6">{t(`services.${service.id}.desc`)}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-[#FFD800] font-bold">{t('services.from')} {service.price.split('From ')[1] || service.price}</span>
                            {isComingSoon ? (
                              <div className="flex items-center gap-1.5 font-extrabold text-xs md:text-sm bg-[#FFD800] text-primary px-3.5 py-1.5 rounded-full shadow-md hover:bg-white transition-colors">
                                <Clock size={14} />
                                <span>{t('services.coming_soon')}</span>
                              </div>
                            ) : (
                              <div className="flex items-center gap-1 font-bold text-sm">
                                <span>{t('services.book_now')}</span>
                                <ArrowRight size={16} />
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Promo & Packages */}
            <section id="packages" className="py-20 bg-app-bg">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('packages.title')}</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">{t('packages.desc')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { id: 'healthy_home', tag: 'best_seller' },
                    { id: 'living_room', tag: 'popular' },
                    { id: 'move_in', tag: 'essential' }
                  ].map((pkg, index) => (
                    <motion.div
                      key={pkg.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col relative overflow-hidden"
                    >
                      <div className="absolute top-4 right-4 px-3 py-1 bg-[#FFD800] text-primary text-xs font-bold rounded-full">
                        {t(`packages.tags.${pkg.tag}`)}
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-2">{renderBrandText(t(`packages.items.${pkg.id}.title`))}</h3>
                      <p className="text-gray-600 mb-6">{renderBrandText(t(`packages.items.${pkg.id}.desc`))}</p>
                      <div className="text-3xl font-extrabold text-action mb-8">{renderBrandText(t(`packages.items.${pkg.id}.discount`))}</div>
                      <button 
                        onClick={() => handleWhatsAppClick(`Hi i-Cuzi4U, I'm interested in the ${t(`packages.items.${pkg.id}.title`)} package. Please provide a quote.`)}
                        className="mt-auto w-full py-4 bg-primary text-white font-bold rounded-2xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                      >
                        <span>{t('packages.book_bundle')}</span>
                        <ArrowRight size={18} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-white overflow-hidden relative">
              <div className="container mx-auto px-4 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-8">{renderBrandText(t('cta.title'))}</h2>
                <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                  {renderBrandText(t('cta.desc'))}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => handleWhatsAppClick(t('cta.whatsapp_msg', { defaultValue: "Hi i-Cuzi4U, I'd like to book a cleaning service." }))}
                    className="bg-action text-primary font-bold py-5 px-10 rounded-full text-xl flex items-center justify-center gap-3 hover:scale-105 transition-transform"
                  >
                    <MessageCircle size={28} />
                    <span>{t('cta.whatsapp')}</span>
                  </button>
                  <button className="bg-white/10 backdrop-blur-md text-white font-bold py-5 px-10 rounded-full text-xl flex items-center justify-center gap-3 hover:bg-white/20 transition-colors">
                    <Phone size={24} />
                    <span>{t('cta.call')}</span>
                  </button>
                </div>
              </div>
              
              {/* Decorative Circles */}
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-action/10 rounded-full blur-3xl" />
            </section>
          </>
        ) : currentView === 'mattress' ? (
          <MattressCleaningPage 
            onBack={() => navigateTo('home')} 
            onWhatsApp={handleWhatsAppClick} 
          />
        ) : currentView === 'sofa' ? (
          <SofaCleaningPage 
            onBack={() => navigateTo('home')} 
            onWhatsApp={handleWhatsAppClick} 
          />
        ) : currentView === 'car-seat' ? (
          <CarCleaningPage 
            onBack={() => navigateTo('home')} 
            onWhatsApp={handleWhatsAppClick} 
          />
        ) : currentView === 'curtain' ? (
          <CurtainCleaningPage 
            onBack={() => navigateTo('home')} 
            onWhatsApp={handleWhatsAppClick} 
          />
        ) : currentView === 'carpet' ? (
          <CarpetCleaningPage 
            onBack={() => navigateTo('home')} 
            onWhatsApp={handleWhatsAppClick} 
          />
        ) : (
          <PrivacyPolicy />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div 
                className="flex items-center gap-1 mb-6 cursor-pointer"
                onClick={() => navigateTo('home')}
              >
                <img 
                  src={getAssetPath(LOGO_URL)} 
                  alt="i-Cuzi4U Logo" 
                  className="h-[42px] w-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-primary font-bold text-sm mb-4 italic">
                {renderBrandText(t('hero.slogan'), 'hero')}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t('footer.desc')}
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-6">{t('footer.services')}</h3>
              <ul className="space-y-4 text-sm text-gray-500">
                {SERVICES.map(s => (
                  <li key={s.id}>
                    <button 
                      onClick={() => handleServiceClick(s)}
                      className="hover:text-primary transition-colors text-left cursor-pointer flex items-center gap-2"
                    >
                      <span>{t(`services.${s.id}.title`)}</span>
                      {s.comingSoon && (
                        <span className="text-[10px] bg-[#FFD800] text-primary px-1.5 py-0.5 rounded-full font-extrabold uppercase">
                          {t('services.coming_soon')}
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-6">{t('footer.company')}</h3>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#about" onClick={() => navigateTo('home')} className="hover:text-primary transition-colors">{t('nav.about')}</a></li>
                <li><a href="#packages" onClick={() => navigateTo('home')} className="hover:text-primary transition-colors">{t('nav.packages')}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                <li><button onClick={() => navigateTo('privacy')} className="hover:text-primary transition-colors">Privacy Policy</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-6">{t('footer.contact')}</h3>
              <ul className="space-y-4 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-primary" />
                  <span>+6011-6263 8228</span>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle size={16} className="text-action" />
                  <span>WhatsApp Available</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1"><Zap size={16} className="text-primary" /></div>
                  <span>{t('footer.serving')}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400">{t('footer.rights')}</p>
            <div className="flex gap-6 text-xs text-gray-400">
              <a href="#" className="hover:text-primary">Facebook</a>
              <a href="#" className="hover:text-primary">Instagram</a>
              <a href="#" className="hover:text-primary">TikTok</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button for Mobile */}
      <button 
        onClick={() => handleWhatsAppClick(t('nav.whatsapp_msg', { defaultValue: "Hi i-Cuzi4U, I'd like to get a quote." }))}
        className="fixed bottom-6 right-6 w-16 h-16 bg-action text-primary rounded-full shadow-2xl flex items-center justify-center z-50 md:hidden animate-bounce"
      >
        <MessageCircle size={32} />
      </button>

      {/* Coming Soon Modal Notification */}
      <AnimatePresence>
        {comingSoonModalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative border border-gray-100 text-center overflow-hidden"
            >
              <button 
                onClick={() => setComingSoonModalService(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
              
              <div className="w-16 h-16 bg-[#FFD800]/20 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock size={32} className="text-[#0D49CD]" />
              </div>

              <span className="inline-block px-3.5 py-1 bg-[#FFD800] text-primary text-xs font-extrabold rounded-full uppercase tracking-wider mb-2">
                {t('services.coming_soon')}
              </span>

              <h3 className="text-2xl font-extrabold text-primary mb-3">
                {t('services.modal_title')}
              </h3>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                {t('services.modal_desc', { serviceTitle: comingSoonModalService.title })}
              </p>

              <div>
                <button
                  onClick={() => setComingSoonModalService(null)}
                  className="bg-primary text-white font-bold py-3.5 px-6 rounded-full text-sm hover:opacity-90 transition-opacity w-full shadow-md cursor-pointer"
                >
                  {t('services.modal_close')}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
