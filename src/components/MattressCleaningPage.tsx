import { useTranslation } from 'react-i18next';
import { 
  ArrowLeft, 
  MessageCircle, 
  ShieldCheck, 
  Check, 
  Sparkles, 
  AlertTriangle,
  HelpCircle,
  Clock,
  Heart,
  CheckCircle2,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

interface MattressCleaningPageProps {
  onBack: () => void;
  onWhatsApp: (msg: string) => void;
}

export default function MattressCleaningPage({ onBack, onWhatsApp }: MattressCleaningPageProps) {
  const { t, i18n } = useTranslation();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    // Dynamic SEO updates specifically for the Mattress Page
    const titles: Record<string, string> = {
      en: "Deep Mattress Cleaning KL & Dust Mite Removal Malaysia | i-Cuzi4U",
      ms: "Servis Cuci Tilam Dalaman KL & Basmi Hama Habuk Malaysia | i-Cuzi4U",
      zh: "雪兰莪深层床垫清洗与吉隆坡除尘螨服务 | i-Cuzi4U"
    };
    
    const descriptions: Record<string, string> = {
      en: "Professional deep mattress cleaning service in KL & Selangor. Eradicate 99.9% of dust mites, sweat, and urine stains using eco-friendly German Kärcher® technology.",
      ms: "Servis pembersihan mendalam tilam profesional di KL & Selangor. Basmi 99.9% hama habuk, peluh, dan kesan kotoran dengan teknologi Jerman Kärcher® yang mesra alam.",
      zh: "巴生谷专业床垫深层清洁及除螨杀菌。利用德国 Kärcher® 抽吸技术与温和环保香波，彻底清除床垫顽固尿渍、汗渍和过敏原。"
    };

    const currentLang = i18n.language.split('-')[0] || 'en';
    document.title = titles[currentLang] || titles.en;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptions[currentLang] || descriptions.en);
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [i18n.language]);

  const problems = [
    { id: 'mites', icon: <AlertTriangle className="text-[#FFD800]" size={28} /> },
    { id: 'sweat', icon: <Clock className="text-action" size={28} /> },
    { id: 'skin', icon: <Heart className="text-red-400" size={28} /> },
    { id: 'stains', icon: <Sparkles className="text-primary" size={28} /> }
  ];

  const stages = ['stage1', 'stage2', 'stage3', 'stage4', 'stage5', 'stage6'];

  const sizes = [
    {
      id: 'single',
      titleKey: 'mattress_page.sizes.single_title',
      priceKey: 'mattress_page.sizes.single_price',
      featuresKey: 'mattress_page.sizes.single_features',
      msg: 'Single / Super Single'
    },
    {
      id: 'queen',
      titleKey: 'mattress_page.sizes.queen_title',
      priceKey: 'mattress_page.sizes.queen_price',
      featuresKey: 'mattress_page.sizes.queen_features',
      msg: 'Queen Size',
      featured: true
    },
    {
      id: 'king',
      titleKey: 'mattress_page.sizes.king_title',
      priceKey: 'mattress_page.sizes.king_price',
      featuresKey: 'mattress_page.sizes.king_features',
      msg: 'King / Super King'
    }
  ];

  const faqs = [1, 2, 3, 4];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleBookClick = (sizeName: string) => {
    const baseMsg = t('mattress_page.cta_msg');
    onWhatsApp(`${baseMsg} ${sizeName}`);
  };

  return (
    <div className="bg-app-bg min-h-screen">
      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-gray-100 py-4 sticky top-[72px] z-30 shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-primary font-bold hover:translate-x-[-4px] transition-transform text-sm md:text-base"
          >
            <ArrowLeft size={18} />
            <span>{t('mattress_page.back_btn')}</span>
          </button>
          <div className="text-xs text-gray-500 font-mono">
            {t('nav.serving')}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden border-b border-gray-100">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#0D49CD]/10 text-[#0D49CD] rounded-full text-sm font-extrabold mb-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3AD2FF]" />
                  {t('services.mattress.title')}
                </span>
                
                <h1 className="text-3xl md:text-5xl font-extrabold text-primary leading-tight mb-6">
                  {t('mattress_page.hero_title')}
                </h1>
                
                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                  {t('mattress_page.hero_subtitle')}
                </p>

                {/* Micro highlights */}
                <div className="grid grid-cols-2 gap-4 mb-10 max-w-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-action" />
                    <span className="font-semibold text-sm text-gray-700">German Kärcher® Tech</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-action" />
                    <span className="font-semibold text-sm text-gray-700">Eco-Friendly Solutions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-action" />
                    <span className="font-semibold text-sm text-gray-700">100°C Steam Sanitization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-action" />
                    <span className="font-semibold text-sm text-gray-700">Anti-Dust Mite Barrier</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => handleBookClick('Queen Size')}
                    className="btn-primary text-lg w-full sm:w-auto"
                  >
                    <MessageCircle size={22} />
                    <span>{t('mattress_page.cta_book')}</span>
                  </button>
                  <a 
                    href="#pricing"
                    className="flex items-center justify-center gap-2 font-bold text-primary px-8 py-4 rounded-full border-2 border-primary/10 hover:bg-primary/5 transition-colors text-lg"
                  >
                    View Mattress Pricing
                  </a>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] md:aspect-square"
              >
                <img 
                  src="https://lh3.googleusercontent.com/d/1aox3sVNT3A2ng0WRMhhDO1Fdc-ms8zsH"
                  alt="Professional deep mattress cleaning service Selangor KL - i-Cuzi4U"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-lg border border-white/20">
                  <p className="text-xs font-bold text-primary tracking-wide uppercase mb-1">Powered by:</p>
                  <p className="text-lg font-extrabold text-primary">Kärcher's Spray Extraction Technology</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-20 bg-app-bg">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold text-primary mb-4">
              {t('mattress_page.why_section_title')}
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              {t('mattress_page.why_section_desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((prob, idx) => (
              <motion.div
                key={prob.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-app-bg rounded-2xl flex items-center justify-center mb-6">
                  {prob.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {t(`mattress_page.problems.${prob.id}_title`)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t(`mattress_page.problems.${prob.id}_desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold text-primary mb-4">
              {t('mattress_page.process_section_title')}
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              {t('mattress_page.process_section_desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stages.map((stage, idx) => (
              <motion.div
                key={stage}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-app-bg p-8 rounded-3xl border border-gray-100/50"
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0D49CD]/10 text-primary rounded-full text-xs font-bold mb-4">
                  Stage {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {t(`mattress_page.stages.${stage}_title`)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t(`mattress_page.stages.${stage}_desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-app-bg border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-primary mb-4">
              {t('mattress_page.pricing_section_title')}
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              {t('mattress_page.pricing_section_desc')}
            </p>
          </div>

          {/* Core Trust Highlights from Image */}
          <div className="bg-white border border-gray-100 rounded-[2rem] p-6 md:p-8 max-w-4xl mx-auto mb-12 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-14 h-14 bg-[#0D49CD]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="text-[#0D49CD]" size={28} />
              </div>
              <div>
                <h4 className="font-extrabold text-primary text-base leading-tight">
                  {t('mattress_page.highlights.effective_title')}
                </h4>
                <p className="text-xs text-gray-500 font-medium mt-1">
                  {t('mattress_page.highlights.effective_sub')}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center md:justify-start border-t md:border-t-0 md:border-x border-gray-100 pt-6 md:pt-0 md:px-8">
              <div className="w-14 h-14 bg-[#0D49CD]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="text-[#0D49CD]" size={28} />
              </div>
              <div>
                <h4 className="font-extrabold text-primary text-base leading-tight">
                  {t('mattress_page.highlights.dry_title')}
                </h4>
                <p className="text-xs text-gray-500 font-medium mt-1">
                  {t('mattress_page.highlights.dry_sub')}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center md:justify-start border-t md:border-t-0 border-gray-100 pt-6 md:pt-0">
              <div className="w-14 h-14 bg-[#0D49CD]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Sparkles className="text-[#0D49CD]" size={28} />
              </div>
              <div>
                <h4 className="font-extrabold text-primary text-base leading-tight">
                  {t('mattress_page.highlights.eco_title')}
                </h4>
                <p className="text-xs text-gray-500 font-medium mt-1">
                  {t('mattress_page.highlights.eco_sub')}
                </p>
              </div>
            </div>
          </div>

          {/* Everything Included Checklist */}
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-xl md:text-2xl font-extrabold text-primary text-center mb-8">
              {t('mattress_page.included_title')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 px-4">
              {(t('mattress_page.included_items', { returnObjects: true }) as string[]).map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check size={20} className="text-[#0D49CD] flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {sizes.map((sz) => (
              <div 
                key={sz.id}
                className={`bg-white rounded-3xl border p-8 flex flex-col justify-between relative transition-all duration-300 ${
                  sz.featured 
                    ? 'ring-4 ring-primary border-transparent shadow-xl scale-105 z-10' 
                    : 'border-gray-200/60 shadow-sm hover:border-gray-300'
                }`}
              >
                {sz.featured && (
                  <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-[#FFD800] text-primary font-black text-xs uppercase px-4 py-1.5 rounded-full tracking-wider shadow">
                    Best Value
                  </span>
                )}
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {t(sz.titleKey)}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-3xl md:text-4xl font-extrabold text-primary">{t(sz.priceKey)}</span>
                  </div>
                  <div className="border-t border-gray-100 pt-6 space-y-3.5 mb-8">
                    {(t(sz.featuresKey, { returnObjects: true }) as string[]).map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-sm text-gray-600">
                        <Check size={16} className="text-action flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button 
                  onClick={() => handleBookClick(sz.msg)}
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors ${
                    sz.featured 
                      ? 'bg-primary text-white hover:bg-primary/95 shadow-md shadow-primary/20' 
                      : 'bg-app-bg text-primary border border-primary/10 hover:bg-primary/5'
                  }`}
                >
                  <MessageCircle size={18} />
                  <span>Book {sz.msg}</span>
                </button>
              </div>
            ))}
          </div>

          {/* Pricing Note */}
          <p className="mt-8 text-center text-xs md:text-sm text-gray-500 font-medium italic leading-relaxed px-4">
            {t('mattress_page.pricing_note')}
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold text-primary mb-4">
              {t('mattress_page.faq_section_title')}
            </h2>
            <p className="text-gray-500">
              {t('mattress_page.faq_section_desc')}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={faq}
                className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-app-bg transition-colors"
                >
                  <span className="font-bold text-primary text-base md:text-lg">
                    {t(`mattress_page.faqs.q${faq}`)}
                  </span>
                  <HelpCircle className={`text-primary/40 flex-shrink-0 transition-transform ${activeFaq === idx ? 'rotate-180 text-action' : ''}`} size={20} />
                </button>
                <AnimatePresence initial={false}>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-gray-50 bg-app-bg/50"
                    >
                      <p className="p-6 text-gray-600 text-sm md:text-base leading-relaxed">
                        {t(`mattress_page.faqs.a${faq}`)}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-6">Enjoy Clinical Hygiene Sleep Tonight</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Book our sanitization and extraction team today and say goodbye to dust mites, morning allergies, and stubborn stains.
          </p>
          <button 
            onClick={() => handleBookClick('Queen Size')}
            className="bg-action text-primary font-bold py-4.5 px-8 rounded-full text-lg flex items-center justify-center gap-2.5 mx-auto hover:scale-105 transition-transform"
          >
            <MessageCircle size={22} />
            <span>Book Standard Mattress Clean</span>
          </button>
        </div>
      </section>
    </div>
  );
}
