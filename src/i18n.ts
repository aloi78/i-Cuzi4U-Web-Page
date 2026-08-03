import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      mattress_page: {
        hero_title: "Clinical-Grade Deep Mattress Cleaning",
        hero_subtitle: "Breathe cleaner, sleep deeper. Complete elimination of dust mites, bacteria, and stubborn stains.",
        back_btn: "Back to Home",
        why_section_title: "Why Professional Mattress Cleaning is Crucial",
        why_section_desc: "You spend 1/3 of your life on your bed. But your mattress is also home to millions of unseen health hazards.",
        problems: {
          mites_title: "Up to 10 Million Dust Mites",
          mites_desc: "Dust mites feed on your dead skin cells. Their waste particles are the #1 cause of morning sneezing, asthma, and skin allergies.",
          sweat_title: "Sweat & Body Fluids",
          sweat_desc: "An average adult releases about 200ml of moisture per night, creating a damp breeding ground for bacteria, mold, and odor.",
          skin_title: "Skin Dander Accumulation",
          skin_desc: "We shed roughly 1.5g of dead skin cells every night, which sinks deep into the mattress fabric and feeds dust mite colonies.",
          stains_title: "Stubborn Organic Stains",
          stains_desc: "Urine, blood, spillages, and sweat stains not only look unsightly but also produce persistent, musty odors and bacteria."
        },
        process_section_title: "Our Clinical 6-Stage Mattress Sanitization",
        process_section_desc: "We don't just vacuum; we deep sanitize and extract. Powered by German Kärcher® extraction and eco-friendly cleaning solutions.",
        stages: {
          stage1_title: "1. Dry Power Extraction",
          stage1_desc: "German high-powered extraction to pull dust, skin flakes, and allergen particles from up to 6 inches deep.",
          stage2_title: "2. Eco Stain Treatment",
          stage2_desc: "We apply specialized eco-friendly enzymes to target urine, sweat, or food stains without bleaching the fibers.",
          stage3_title: "3. Clinical Shampooing",
          stage3_desc: "Gently agitating the fabric with bio-degradable shampoo to dissolve deeply embedded grime.",
          stage4_title: "4. High-Vacuum Extraction",
          stage4_desc: "Deep-rinsing and pulling out the dirty water, shampoo residue, and deep-seated bacteria.",
          stage5_title: "5. 100°C Dry Steam Sanitization",
          stage5_desc: "High-temperature dry steam sterilization that neutralizes 99.9% of bacteria, germs, and dust mites instantly.",
          stage6_title: "6. Anti-Dust Mite Shield",
          stage6_desc: "Applying a final protective spray that repels dust mites and keeps your bed fresh and sanitized for months."
        },
        pricing_section_title: "Simple, Transparent Mattress Pricing",
        pricing_section_desc: "Professional clinical-grade cleaning at affordable local rates in Klang Valley. Zero hidden charges.",
        pricing_note: "*Prices may vary based on location, mattress condition and additional treatments required.",
        sizes: {
          single_title: "Single / Super Single",
          single_price: "From RM100",
          single_features: ["1x Mattress Dry & Wet Wash", "100°C Steam Sanitization", "Anti-Dust Mite Shield", "Deep Fiber Extraction"],
          queen_title: "Queen Size",
          queen_price: "From RM130",
          queen_features: ["1x Mattress Dry & Wet Wash", "100°C Steam Sanitization", "Anti-Dust Mite Shield", "Deep Fiber Extraction"],
          king_title: "King / Super King",
          king_price: "From RM150",
          king_features: ["1x Mattress Dry & Wet Wash", "100°C Steam Sanitization", "Anti-Dust Mite Shield", "Deep Fiber Extraction"]
        },
        faq_section_title: "Frequently Asked Questions",
        faq_section_desc: "Everything you need to know about professional mattress cleaning.",
        faqs: {
          q1: "How long does the mattress take to dry?",
          a1: "Typically between 4 to 6 hours depending on room ventilation and fans. We recommend switching on the AC or ceiling fan during this period.",
          q2: "Are the cleaning agents used safe and eco-friendly?",
          a2: "Absolutely. We strictly use biodegradable and eco-friendly sanitizers, leaving zero chemical residues.",
          q3: "Can you remove old urine, sweat, or blood stains?",
          a3: "Our dual wet extraction & chemical stain spotters are highly effective. We guarantee that organic stains will fade significantly, and in most cases, disappear completely if treated early. However, old aged stains might have permanently bleached the fabric dye, which cannot be reversed.",
          q4: "How often should I get my mattress professionally cleaned?",
          a4: "Allergists recommend deep cleaning your mattress every 6 to 12 months to prevent asthma, rhinitis, and skin allergy flare-ups."
        },
        cta_book: "Book Mattress Clean Now",
        cta_msg: "Hi i-Cuzi4U, I would like to book a professional mattress deep cleaning. My mattress size is:",
        included_title: "Everything Included:",
        included_items: [
          "Deep steam extraction cleaning",
          "99.9% dust mite & bacteria elimination",
          "Stubborn stain removal treatment",
          "Odor neutralization process",
          "Anti-bacterial sanitization",
          "UV-C disinfection (optional)",
          "Quick-dry technology",
          "100% satisfaction guarantee"
        ],
        highlights: {
          effective_title: "99.9% Effective",
          effective_sub: "Dust mite removal",
          dry_title: "Same Day Dry",
          dry_sub: "Sleep tonight",
          eco_title: "Eco-Safe",
          eco_sub: "Premium solutions"
        }
      },
      sofa_page: {
        hero_title: "Clinical-Grade Deep Sofa Cleaning Service",
        hero_subtitle: "Restore your sofa's premium look. Deep extraction and sanitation to eliminate tough stains, spills, pet dander, and bad odors.",
        back_btn: "Back to Home",
        why_section_title: "Why Professional Sofa Cleaning is Vital",
        why_section_desc: "Your sofa is the most used furniture in your home. Over time, it traps sweat, body oils, dust, food crumbs, and allergens, creating an unhygienic surface.",
        problems: {
          mites_title: "Dust Mites & Allergens",
          mites_desc: "Fabric couches act like giant air filters, trapping skin flakes, dust mites, and pet hair that trigger sneezing and allergies.",
          sweat_title: "Sweat & Body Oils",
          sweat_desc: "Daily contact transfers sweat, hair grease, and body oils directly to the sofa cushions, leading to discoloration and dark grime.",
          spills_title: "Stubborn Food Spills",
          spills_desc: "Spilled coffee, tea, milk, and sauces sink deep into the upholstery, turning into breeding grounds for bacteria, mold, and odor.",
          pet_title: "Pet Odor & Grime",
          pet_desc: "Pets leave behind hair, muddy paw prints, saliva, and sometimes accidents, causing deep-seated odors that are hard to mask."
        },
        process_section_title: "Our 6-Stage Sofa Deep Cleaning & Sanitization",
        process_section_desc: "Whether fabric or leather, we use specialized German Kärcher® spray-extraction and specialized enzymes to deep wash and restore your couch.",
        stages: {
          stage1_title: "1. Industrial High-Power Vacuum",
          stage1_desc: "Deep vacuuming using high-airflow commercial machines to extract surface dust, loose debris, hair, and crumbs from joints and seams.",
          stage2_title: "2. Eco-Safe Stain Spotting",
          stage2_desc: "Applying targeted organic stain lifters to break down tough coffee, grease, ink, or urine marks without discoloring delicate fabrics.",
          stage3_title: "3. Deep Fiber Shampooing",
          stage3_desc: "Gently agitating the fabric using specialized rotary soft brushes and premium, biodegradable upholstery shampoo.",
          stage4_title: "4. Kärcher® Hot Spray Extraction",
          stage4_desc: "Simultaneously injecting warm water deep into the fibers and extracting dirty liquid, shampoo residue, and dislodged dirt under high suction.",
          stage5_title: "5. High-Temperature Steam Sanitization",
          stage5_desc: "Sterilizing the sofa with 100°C dry steam to neutralize 99.9% of hidden bacteria, germs, dust mites, and stubborn surface odors.",
          stage6_title: "6. Fabric Protectant or Leather Conditioning",
          stage6_desc: "Applying fabric stain-repellent spray or massaging premium, moisturizing beeswax and oils on leather to prevent dryness and cracking."
        },
        pricing_section_title: "Affordable & Transparent Sofa Pricing",
        pricing_section_desc: "Clinical-grade sofa restoration by trained experts. Honest upfront pricing in Klang Valley, with zero hidden fees.",
        pricing_addon: "Add on RM40 for each additional seat / L-Shape.",
        pricing_note: "*Prices may vary based on location, sofa condition and additional treatments required.",
        sizes: {
          single_title: "1 Seater / Armchair",
          single_price: "From RM100",
          single_features: ["Fabric or Leather Wash", "Eco-Friendly Grime Removal", "Steam Sterilization", "Deep Fiber Extraction"],
          queen_title: "2 Seater Sofa",
          queen_price: "From RM140",
          queen_features: ["Fabric or Leather Wash", "Eco-Friendly Grime Removal", "Steam Sterilization", "Deep Fiber Extraction", "Odor Neutralization"],
          king_title: "3 Seater Sofa",
          king_price: "From RM180",
          king_features: ["Fabric or Leather Wash", "Eco-Friendly Grime Removal", "Steam Sterilization", "Deep Fiber Extraction", "Odor Neutralization"]
        },
        faq_section_title: "Frequently Asked Questions",
        faq_section_desc: "Everything you need to know about professional sofa deep cleaning.",
        faqs: {
          q1: "How long does a fabric sofa take to dry after cleaning?",
          a1: "Fabric sofas typically take between 4 to 6 hours to dry completely, depending on room ventilation. Running ceiling fans or air conditioning helps speed up the process. Leather sofas are wiped dry immediately and conditioned, so they can be used almost right away.",
          q2: "Can you remove old, tough stains like ink, coffee, or wine?",
          a2: "Our biological enzymes and stain spotters are highly effective. We successfully fade or completely remove up to 90% of food, beverage, grease, and pet stains. However, stains that have been left for months or treated with harsh home remedies may have permanently altered the fabric color.",
          q3: "Do you clean leather sofas, and what is your process?",
          a3: "Yes, we clean both genuine and synthetic leather. We hand-wash using specialized pH-balanced leather cleaners, sanitize, wipe dry, and apply a premium moisturizing conditioner to keep the leather soft, supple, and protected against cracking.",
          q4: "Are the cleaning products eco-friendly and safe?",
          a4: "Yes, 100%. We use bio-safe and hypoallergenic cleaning agents. They leave absolutely no harsh chemicals or sticky residues behind, making them highly effective and safe for your living environment."
        },
        cta_book: "Book Sofa Deep Clean Now",
        cta_msg: "Hi i-Cuzi4U, I would like to book a professional sofa deep cleaning. My sofa type/size is:",
        included_title: "Everything Included:",
        included_items: [
          "Deep fabric/leather hot extraction wash",
          "99.9% dust mite, allergen & bacteria removal",
          "Stubborn grease & beverage stain treatment",
          "Pet odor & dander neutralization",
          "Eco-friendly shampooing",
          "100°C steam sterilizing & deodorizing",
          "Leather moisturizing & conditioning (if leather)",
          "100% satisfaction guarantee"
        ],
        highlights: {
          effective_title: "99.9% Effective",
          effective_sub: "Stain & bacteria removal",
          dry_title: "Same Day Dry",
          dry_sub: "Use your couch tonight",
          eco_title: "Eco-Safe",
          eco_sub: "Safe & premium solutions"
        }
      },
      car_page: {
        hero_title: "Clinical-Grade Deep Car Interior & Seat Cleaning",
        hero_subtitle: "Restore your vehicle's interior to a factory-fresh, sterilized condition. Deep suction extraction, tough stain removal, and full odor sanitization.",
        back_btn: "Back to Home",
        why_section_title: "Why Deep Car Interior Cleaning is Vital",
        why_section_desc: "Your car cabin is a confined space where you spend hours daily. It traps sweat, food spills, muddy soil, mold spores, and dust, creating poor cabin air quality.",
        problems: {
          mites_title: "Dust Mites & Allergens",
          mites_desc: "Car seat fabrics and cabin carpets collect dust, dead skin cells, and pet dander, which breed dust mites and trigger allergy flare-ups.",
          sweat_title: "Sweat, Oils & Grime",
          sweat_desc: "Daily driving transfers body sweat, hair grease, and skin oils to the seat fabric, steering wheel, and armrests, leaving sticky, dark residues.",
          spills_title: "Beverage & Food Spills",
          spills_desc: "Spilled coffee, sweet drinks, milk, and crumbs fall into seat joints, creating deep-seated stains and sticky areas that breed bacteria and mold.",
          pet_title: "Confined cabin odors",
          pet_desc: "Damp weather, sweat, pet accidents, or tobacco smoke create persistent, musty odors in the car's upholstery that typical air fresheners can't resolve."
        },
        process_section_title: "Our 6-Stage Car Interior Restoration Process",
        process_section_desc: "Whether fabric or leather upholstery, we use specialized German Kärcher® spray-extraction and deep-cleaning systems to wash and sanitize your vehicle.",
        stages: {
          stage1_title: "1. Commercial High-Power Vacuum",
          stage1_desc: "Thorough vacuuming using high-suction industrial machines to extract loose dust, sand, food crumbs, and hair from car seats, carpets, and cracks.",
          stage2_title: "2. Eco-Safe Pre-Treatment",
          stage2_desc: "Applying specialized, biodegradable stain lifters targeting grease, food spillages, coffee, or mud stains without harming car upholstery.",
          stage3_title: "3. Deep Fiber Shampooing",
          stage3_desc: "Gently agitating seat upholstery, floor carpets, and mats with soft rotary brushes and premium bio-safe cleaning shampoo.",
          stage4_title: "4. Kärcher® Hot Spray Extraction",
          stage4_desc: "Simultaneously spraying warm water deep into the seats/carpets and extracting the dissolved dirt and soap residue under high negative pressure vacuum.",
          stage5_title: "5. 100°C Dry Steam Sanitization",
          stage5_desc: "Sterilizing car seat cushions, seatbelts, and AC vents with dry steam to destroy 99.9% of bacteria, allergens, mold spores, and musty odors.",
          stage6_title: "6. Odor Neutralizer & Leather Care",
          stage6_desc: "Applying an active enzyme deodorizer on fabrics, or massaging rich protective conditioning cream into leather seats to prevent cracking."
        },
        pricing_section_title: "Transparent & Affordable Car Cleaning",
        pricing_section_desc: "Professional deep car sanitization at your doorstep in Klang Valley. Honest upfront pricing based on vehicle size.",
        pricing_note: "*Prices may vary based on location, vehicle size/condition and additional treatments required.",
        addons_title: "Optional Add-ons",
        addons_subtitle: "Customize your service with individual targeted area deep cleaning",
        addons_items: [
          { label: "Roof lining", price: "RM70 Sedan / RM80 MPV" },
          { label: "Door panel · each", price: "RM10" },
          { label: "Floor mat · each", price: "RM10" },
          { label: "Floor carpet", price: "RM70 Sedan / RM80 MPV" },
          { label: "Boot", price: "RM40" }
        ],
        not_included_tag: "Not included",
        sizes: {
          sedan_title: "Sedan / Hatchback (Standard 5-Seater)",
          sedan_price: "From RM140",
          sedan_features: [
            { text: "All Car Seats Deep Wash (Fabric/Leather)", included: true },
            { text: "100°C Steam Sterilization & Sanitization", included: true },
            { text: "Odor Neutralization Treatment", included: true },
            { text: "Dashboard & Center Console Wipe Down", included: true },
            { text: "Door Panels Cleaning", included: false },
            { text: "Floor Carpet Deep Extraction", included: false },
            { text: "Roof Lining Cleaning", included: false },
            { text: "Boot / Trunk Area Cleaning", included: false }
          ],
          suv_title: "SUV / Crossover (Mid-Size 5-Seater)",
          suv_price: "From RM180",
          suv_features: [
            { text: "5-Seater Deep Wash (Fabric/Leather)", included: true },
            { text: "100°C Steam Sterilization & Sanitization", included: true },
            { text: "Odor Neutralization Treatment", included: true },
            { text: "Dashboard & Center Console Wipe Down", included: true },
            { text: "Door Panels Cleaning", included: false },
            { text: "Floor Carpet Deep Extraction", included: false },
            { text: "Roof Lining Cleaning", included: false },
            { text: "Boot / Trunk Area Cleaning", included: false }
          ],
          mpv_title: "MPV / Large SUV (7 to 8-Seater)",
          mpv_price: "From RM240",
          mpv_features: [
            { text: "7-8 Seater Deep Wash (Fabric/Leather)", included: true },
            { text: "100°C Steam Sterilization & Sanitization", included: true },
            { text: "Odor Neutralization Treatment", included: true },
            { text: "Dashboard & Center Console Wipe Down", included: true },
            { text: "Door Panels Cleaning", included: false },
            { text: "Floor Carpet Deep Extraction", included: false },
            { text: "Roof Lining Cleaning", included: false },
            { text: "Boot / Trunk Area Cleaning", included: false }
          ]
        },
        faq_section_title: "Frequently Asked Questions",
        faq_section_desc: "Everything you need to know about professional car seat and interior deep cleaning.",
        faqs: {
          q1: "How long do the car seats take to dry after cleaning?",
          a1: "Fabric car seats typically take about 3 to 5 hours to dry. Parking the vehicle in a well-ventilated, sunny area with windows opened slightly or running the car heater helps speed it up. Leather seats are dried immediately and can be used right away.",
          q2: "Do you clean leather car seats as well?",
          a2: "Yes, we clean both fabric and leather seats. For leather, we use pH-neutral leather cleaner, sanitize with steam, and apply premium leather conditioner to restore luster, flexibility, and protect it from dry cracking.",
          q3: "Can you remove tough stains like milk spills, vomit, or mold?",
          a3: "Yes! Our Kärcher® hot water extraction system paired with bio-safe stain lifters is highly effective at dissolving, sanitizing, and extracting milk, coffee, sweat, pet stains, and light mold. We guarantee organic spots will fade significantly or vanish.",
          q4: "Is this service mobile (do you come to my location)?",
          a4: "Yes, we provide fully on-site services. We bring our professional equipment directly to your home, condo, or office in Klang Valley. We only require a power outlet and water access to complete the service."
        },
        cta_book: "Book Car Deep Clean Now",
        cta_msg: "Hi i-Cuzi4U, I would like to book a professional car interior deep cleaning. My vehicle type is:",
        included_title: "Everything Included:",
        included_items: [
          "Deep fabric/leather seat hot extraction wash",
          "Full cabin floor carpet & boot vacuum/extraction",
          "Door panels, dashboard & console wipe down",
          "100°C steam sanitization of seats & AC vents",
          "99.9% dust mite, allergen & mold eradication",
          "100% satisfaction guarantee"
        ],
        highlights: {
          effective_title: "99.9% Effective",
          effective_sub: "Bacteria & odor removal",
          dry_title: "Fast Dry Tech",
          dry_sub: "Drive same day",
          eco_title: "Eco-Friendly",
          eco_sub: "Chemical-free residue"
        }
      },
      curtain_page: {
        hero_title: "On-Site High-Temperature Steam Curtain Cleaning",
        hero_subtitle: "Zero hassle. No dismantling needed. We deep clean, sanitize, and remove dust mites directly on your rails with 100°C steam and extraction.",
        back_btn: "Back to Home",
        why_section_title: "Why Professional Curtain Cleaning is Vital",
        why_section_desc: "Curtains act as a giant shield for your windows, trapping outdoor pollutants, household dust, and allergens. Over time, they become a primary trigger for respiratory allergies.",
        problems: {
          dust_title: "Massive Dust Accumulation",
          dust_desc: "Curtains absorb ambient dust and wind-borne pollen daily, turning them into allergy triggers whenever they are opened or closed.",
          mites_title: "Dust Mite Breeding Ground",
          mites_desc: "Microscopic dust mites breed easily in fabric layers, feeding on skin scales and dander trapped in curtain fibers.",
          odors_title: "Odors & Smoke Absorption",
          odors_desc: "Fabrics readily absorb cooking fumes, pet odors, cigarette smoke, and moisture, leading to stale smells and mold spores.",
          dismantling_title: "The Dismantling Chore",
          dismantling_desc: "Taking down heavy curtains, laundry washing them, ironing, and rehanging them takes hours and can shrink or damage premium fabrics."
        },
        process_section_title: "Our Specialized On-Site Curtain Sanitization",
        process_section_desc: "Our trained experts use high-temperature German Kärcher® steam sanitization and delicate high-suction extraction to restore your drapes right where they hang.",
        stages: {
          stage1_title: "1. High-Suction Dry Vacuuming",
          stage1_desc: "Using specialized soft-brush nozzles to thoroughly extract loose dust, pet fur, and webs from the top pleats down to the hem.",
          stage2_title: "2. Eco Stain Treatment",
          stage2_desc: "Carefully applying gentle eco-friendly stain lifters to spots, watermarks, or discoloration on fabric surfaces.",
          stage3_title: "3. 100°C Steam Sterilization",
          stage3_desc: "Applying high-temperature dry steam to penetrate fibers deeply, instantly killing 99.9% of bacteria, dust mites, and mold spores.",
          stage4_title: "4. Delicate Shampoo Wash",
          stage4_desc: "Gently misting eco-friendly upholstery shampoo to lift embedded dirt and smoke particles without risking fabric shrinkage.",
          stage5_title: "5. Spray Extraction Rinse",
          stage5_desc: "Using Kärcher® spray-extraction technology to rinse and pull out dissolved dirt, shampoo, and allergens, leaving curtains clean.",
          stage6_title: "6. On-Rail Drying & Deodorizing",
          stage6_desc: "Removing excess moisture so curtains dry beautifully on the rail. Finished with an organic deodorizing spray."
        },
        pricing_section_title: "Transparent & Affordable Curtain Pricing",
        pricing_section_desc: "Professional on-site cleaning per piece/track. No hidden dismantling charges. Shop Wash / Takeaway laundry service is coming soon!",
        pricing_note: "*Prices may vary based on location, curtain type/condition and additional treatments required.",
        sizes: {
          day_title: "Day Curtain (Per Piece/Track)",
          day_price: "From RM30",
          day_features: ["On-Site Rail Cleaning", "100°C Steam Sterilization", "Eco-Friendly Odor Removal", "Delicate Extraction Rinse"],
          night_title: "Night / Blackout Curtain (Per Piece/Track)",
          night_price: "From RM50",
          night_features: ["On-Site Rail Cleaning", "100°C Steam Sterilization", "Eco-Friendly Odor Removal", "Delicate Extraction Rinse", "Stubborn Stain Treatment"],
          double_title: "Double-Layer (Day + Night Pair)",
          double_price: "From RM75",
          double_features: ["Complete Double Track Wash", "Deep Extraction & Steam Sanitization", "Anti-Dust Mite Treatment", "Eco-Friendly Solutions", "100% On-Site - No Removal Required"]
        },
        faq_section_title: "Frequently Asked Questions",
        faq_section_desc: "Everything you need to know about professional on-site curtain cleaning.",
        faqs: {
          q1: "Do I need to take down my curtains before your team arrives?",
          a1: "Not at all! Our service is 100% on-site. We deep clean, sanitize, and wash your curtains directly on their hanging rails. You don't have to lift a finger.",
          q2: "Is this service suitable for all fabric types?",
          a2: "Yes. Our expert team will conduct a thorough pre-treatment inspection and fabric identification before starting the cleaning process. This allows us to adjust the steam temperature and extraction pressure precisely depending on the fabric type (such as velvet, blackout, cotton, lace, or linen), guaranteeing safe care with zero shrinkage risk.",
          q3: "How long do the curtains take to dry after on-site cleaning?",
          a3: "Since we use specialized low-moisture dry steam and high-suction extraction, curtains dry incredibly fast—usually within 1 to 2 hours with standard room ventilation.",
          q4: "Do you offer offline shop washing / takeaway laundry service?",
          a4: "Our offline Shop Wash Service is coming soon! Currently, we focus on our highly popular on-site rail steam extraction service, which saves you the hassle of dismantling."
        },
        cta_book: "Book Curtain Clean Now",
        cta_msg: "Hi i-Cuzi4U, I would like to book a professional curtain deep cleaning. My curtains are:",
        included_title: "Everything Included:",
        included_items: [
          "100% on-rail cleaning (no dismantling needed)",
          "100°C dry steam sanitization",
          "99.9% dust mite & allergen eradication",
          "Eco-friendly smoke & odor elimination",
          "Watermark & light stain removal",
          "Quick-dry (dries within 1-2 hours)",
          "100% satisfaction guarantee"
        ],
        highlights: {
          effective_title: "On-Rail Clean",
          effective_sub: "No dismantling hassle",
          dry_title: "Fast 1-Hr Dry",
          dry_sub: "Low-moisture technology",
          eco_title: "Eco-Friendly",
          eco_sub: "Safe & non-toxic solutions"
        }
      },
      carpet_page: {
        hero_title: "Professional Deep Carpet & Rug Extraction Cleaning",
        hero_subtitle: "Breathe new life into your carpets. We remove embedded dirt, tough stains, and allergy-inducing dust mites using professional German Kärcher® spray-extraction technology.",
        back_btn: "Back to Home",
        why_section_title: "Why Professional Carpet Cleaning is Essential",
        why_section_desc: "Carpets act as massive air filters in your home or office, trapping dust, pollen, pet dander, and spill residues. Without regular deep cleaning, they harbor bacteria, cause odors, and wear out prematurely.",
        problems: {
          spills_title: "Stubborn Stains & Spillages",
          spills_desc: "Coffee, tea, pet urine, ink, and food spills quickly seep deep into carpet fibers, leading to unsightly spots and permanent discoloration if not extracted professionally.",
          allergens_title: "Trapped Dust & Allergens",
          allergens_desc: "Carpets lock in dust mites, mold spores, and pollen. Walking on uncleaned carpets recirculates these particles into the air, triggering asthma and sneezing.",
          odors_title: "Deep-Seated Bad Odors",
          odors_desc: "Moisture, pet accidents, and foot traffic create a breeding ground for bacteria, resulting in a persistent musty smell that simple vacuuming cannot remove.",
          wear_title: "Premature Fiber Wear",
          wear_desc: "Embedded sand and grit act like sandpaper, grinding down carpet fibers with every step. Deep cleaning extends the life of your expensive carpet."
        },
        process_section_title: "Our Professional Carpet Extraction Process",
        process_section_desc: "We utilize multi-stage commercial-grade deep extraction systems to scrub, sanitize, rinse, and extract ground-in soil, leaving carpets fresh and hygienic.",
        stages: {
          stage1_title: "1. Industrial High-Suction Dry Vacuuming",
          stage1_desc: "Extracting loose dirt, sand particles, and pet hair deeply embedded within the pile before washing.",
          stage2_title: "2. Targeted Spot & Stain Treatment",
          stage2_desc: "Applying specialized eco-friendly pre-treatment agents to lift heavy stains like coffee, grease, and pet spots.",
          stage3_title: "3. Rotary Brush Agitation",
          stage3_desc: "Using professional rotary machines with soft brushes to gently scrub and break down soil from the carpet fibers.",
          stage4_title: "4. Powerful Dual-Vacuum Suction Rinse",
          stage4_desc: "Using Kärcher® high-performance vacuums to pull out 95% of moisture along with dissolved soil and shampoo residues."
        },
        pricing_section_title: "Affordable & Transparent Carpet Pricing",
        pricing_section_desc: "Professional cleaning tailored to your space. Simple per-sqft or per-piece rates. Shop Wash / Takeaway laundry service is coming soon!",
        pricing_note: "* Prices vary based on carpet area, condition, and location. Contact us for accurate quotes.",
        sizes: {
          rug_title: "Rug, Residential & Small Office / SOHO",
          rug_price: "From RM1.50 / sqft",
          rug_features: ["Perfect for Rugs, Living Rooms & Small Offices", "Removes Tough Stains & Pet Urine/Coffee Spots", "Eco-Friendly Low-Moisture Spray-Extraction", "Starting from minimum 80 sqft", "Includes Deodorizer & Sanitization"],
          office_title: "Wall-to-Wall Office Carpet",
          office_price: "From RM1.20 / sqft",
          office_features: ["Best for Commercial & Office Spaces", "Minimum area requirements apply", "Heavy-Duty Traffic Spot Extraction", "Quick Drying System", "Flexible After-Hours Scheduling"],
          event_title: "Event / Exhibition Carpet",
          event_price: "From RM1.00 / sqft",
          event_features: ["Perfect for Halls, Exhibitions & Stages", "Rapid High-Volume Dry Vacuum & Clean", "Removes Mud, Footprints & Tape Residues", "Eco-Friendly Odor Neutralizer", "On-Time Event Completion Guarantee"]
        },
        faq_section_title: "Frequently Asked Questions",
        faq_section_desc: "Everything you need to know about professional on-site carpet cleaning.",
        faqs: {
          q1: "How long does a carpet take to dry after deep cleaning?",
          a1: "Thanks to our commercial-grade German Kärcher® spray extraction machine with dual high-suction vacuums, 95% of moisture is immediately extracted. Your carpet will typically be fully dry and ready to walk on in just 2 to 4 hours with standard air conditioning or fan ventilation.",
          q2: "Are the cleaning solutions safe for infants, pets, and wool carpets?",
          a2: "Absolutely. We strictly use premium Eco-Friendly Solutions that are fully non-toxic, biodegradable, and pH-balanced. They contain zero harsh chemical residues, making them completely safe for your family, pets, and even sensitive wool or Persian fibers.",
          q3: "Can you remove dark coffee stains, grease, or pet urine smells?",
          a3: "Yes, we specialize in tough stain and odor extraction. Our biological stain lifters and deodorizers are highly effective at neutralizing pet urine smells and lifting coffee, tea, oil, and grease. We recommend treating spills as soon as possible for the best results.",
          q4: "Do you offer offline Shop Wash / Takeaway laundry washing?",
          a4: "Our offline Shop Wash Service is coming soon! Currently, we focus on on-site commercial and residential deep spray-extraction cleaning, which is extremely convenient as it avoids the need to pack and transport heavy carpets."
        },
        cta_book: "Book Carpet Clean Now",
        cta_msg: "Hi i-Cuzi4U, I would like to book a professional carpet deep cleaning. My carpet is:",
        included_title: "Everything Included:",
        included_items: [
          "Deep high-pressure shampoo spray extraction",
          "Eco-friendly sanitization & deodorization",
          "99.9% dust mite & allergen elimination",
          "Professional coffee, grease & urine spot treatment",
          "Low-moisture technology (dries in 2-4 hours)",
          "Heavy-duty commercial and residential expert service",
          "100% satisfaction guarantee"
        ],
        highlights: {
          effective_title: "Deep Extraction",
          effective_sub: "Dissolves and extracts embedded soil",
          dry_title: "Fast Dry Tech",
          dry_sub: "Dries within 2 to 4 hours",
          eco_title: "Eco-Friendly",
          eco_sub: "Safe, non-toxic & zero residues"
        }
      },
      seo: {
        title: "Professional Deep Cleaning Services Klang Valley | i-Cuzi4U",
        meta_desc: "i-Cuzi4U deep cleaning services in Klang Valley. Clinical-grade mattress, sofa, curtain, carpet, and car interior extraction & sanitization using eco-friendly German Kärcher® technology.",
        mattress_alt: "Deep mattress cleaning KL and professional dust mite removal Malaysia - i-Cuzi4U",
        sofa_alt: "Sofa cleaning service Selangor and professional couch extraction PJ - i-Cuzi4U",
        "car-seat_alt": "Professional car interior sanitization and upholstery wash Klang Valley - i-Cuzi4U",
        curtain_alt: "On-site high-temperature steam curtain cleaning and sanitization - i-Cuzi4U",
        carpet_alt: "Commercial and residential carpet cleaning service in Klang Valley - i-Cuzi4U",
        "hood-hob_alt": "Professional kitchen hood and hob degreasing service Selangor - i-Cuzi4U"
      },
      nav: {
        services: 'Services',
        packages: 'Packages',
        about: 'About',
        whatsapp: 'WhatsApp Us',
      },
      hero: {
        badge: "HYGIENE EXPERTS IN KLANG VALLEY",
        title1: 'Professional Deep Cleaning Services In Klang Valley',
        title2: 'Specialized 4U.',
        slogan: '"Cleaning is Our Responsibility. i-Cuzi4U Je!"',
        desc: 'We specialize in Mattress, Sofa, Curtain, Carpet, and Car Interior hygiene. Using German Kärcher® technology and Eco-Friendly chemicals for a truly clean home.',
        cta_quote: 'Get Instant Quote',
        cta_services: 'View Services',
      },
      trust: {
        staff: 'Local Trained Staff',
        tech: 'German Kärcher® Tech',
        chemicals: 'Eco-Friendly Chemicals',
        satisfaction: '100% Satisfaction',
      },
      services: {
        title: 'Our Core Services',
        desc: 'We deliver clinical-grade hygiene and specialized deep cleaning across Klang Valley. Our core expertise covers Mattress Cleaning, Sofa Cleaning, Car Interior Cleaning, Curtain Cleaning, Carpet Cleaning, and Kitchen Hood & Hob Cleaning—all powered by German Kärcher® technology and 100% Eco-Friendly solutions.',
        book_now: 'Book Now',
        from: 'From',
        coming_soon: 'Coming Soon',
        modal_title: 'Service Coming Soon!',
        modal_desc: 'We are currently preparing to launch our professional {{serviceTitle}} service in Klang Valley. Stay tuned! You can also reach out to us on WhatsApp for early inquiries and priority booking.',
        modal_cta_whatsapp: 'Inquire via WhatsApp',
        modal_close: 'Got It',
        mattress: {
          title: 'Mattress Cleaning',
          desc: "i-Cuzi4U's mattress cleaning combines Karcher deep extraction and steam technology to completely eradicate dust mites, bed bugs, stains, and bacteria—leaving your bed sterile, fresh, and spotless.",
        },
        sofa: {
          title: 'Sofa Cleaning',
          desc: 'i-Cuzi4U offers expert leather and fabric sofa cleaning. Our advanced deep-cleaning technology removes tough stains, sanitizes, and extends the lifespan of your favorite furniture.',
        },
        'car-seat': {
          title: 'Car Interior Cleaning',
          desc: "i-Cuzi4U deep-cleans both leather and fabric car interiors and seats, expertly removing tough stains, dust mites, and bacteria for a sanitized, pristine cabin.",
        },
        curtain: {
          title: 'Curtain Cleaning',
          desc: 'i-Cuzi4U offers premium curtain cleaning services for homes and offices. Using effective, fabric-safe techniques, we completely remove stubborn stains, dust, and trapped odors.',
        },
        carpet: {
          title: 'Carpet Cleaning',
          desc: 'i-Cuzi4U delivers expert carpet cleaning tailored to your specific fabric. Using professional shampooing and deep-washing techniques, we revitalize your carpets for a spotless, fresh, and healthy environment.',
        },
        'hood-hob': {
          title: 'Kitchen Hood & Hob Cleaning',
          desc: 'i-Cuzi4U provide professional degreasing, carbon removal, and complete sanitization for your kitchen stovetop, exhaust ventilation, and filters.',
        },
      },
      process: {
        title: 'The i-Cuzi4U 6-Stage Process',
        guarantee_title: 'Hygiene Guaranteed',
        guarantee_desc: 'Our process ensures your home is not just visually clean, but clinically hygienic.',
        karcher_tech: 'Kärcher® Tech',
        karcher_desc: 'Professional grade equipment for superior results.',
        steps: {
          1: { title: 'Industrial HEPA Vacuuming', desc: 'Removing surface dust and deep-seated particles.' },
          2: { title: 'Pre-treatment/Stain Spray', desc: 'Targeting stubborn stains with specialized solutions.' },
          3: { title: 'Deep Extraction / Steam', desc: 'German technology for deep fiber sanitization.' },
          4: { title: 'Deodorizing', desc: 'Eliminating odors at the source, not just masking them.' },
          5: { title: 'Antibacterial Sterilization', desc: 'Killing 99.9% of germs and bacteria.' },
          6: { title: 'Air Purification', desc: 'Leaving your space fresh and healthy.' },
        }
      },
      packages: {
        title: 'Promo & Packages',
        desc: 'Get more value with our curated cleaning bundles.',
        book_bundle: 'Book Bundle',
        tags: {
          best_seller: 'Best Seller',
          popular: 'Popular',
          essential: 'Essential',
        },
        items: {
          healthy_home: {
            title: 'Healthy Home Bundle',
            desc: '1x Mattress + 1x Sofa',
            discount: 'Save 15%',
          },
          living_room: {
            title: 'Living Room Refresh',
            desc: 'Sofa + Carpet + Curtains',
            discount: 'Value Deal',
          },
          move_in: {
            title: 'New Move-In',
            desc: 'Whole-house fabric sanitization',
            discount: 'Custom Quote',
          }
        }
      },
      footer: {
        desc: 'Professional deep cleaning specialists serving the Klang Valley. Hygiene focused, mobile-first, and customer driven.',
        services: 'Services',
        company: 'Company',
        contact: 'Contact',
        serving: 'Serving KL, Selangor, PJ, Subang, Shah Alam, Rawang & more.',
        rights: '© 2026 i-Cuzi4U Cleaning Services. All rights reserved.',
      },
      privacy: {
        title: 'Privacy Policy',
        last_updated: 'Last updated: May 20, 2026',
        introduction: 'At i-Cuzi4U, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner.',
        sections: {
          collection_title: '1. Information We Collect',
          collection_desc: 'We may collect personal information such as your name, address, phone number, and email when you request a quote or book a service through our platform or WhatsApp.',
          usage_title: '2. How We Use Your Information',
          usage_desc: 'Your information is used purely to provide our deep cleaning services, process your bookings, and communicate with you regarding your service requests.',
          third_party_title: '3. Third-Party Disclosure',
          third_party_desc: 'We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted partners who assist us in operating our website or conducting our business, as long as those parties agree to keep this information confidential.',
          security_title: '4. Security',
          security_desc: 'We implement a variety of security measures to maintain the safety of your personal information.',
          contact_title: '5. Contact Us',
          contact_desc: 'If you have any questions regarding this privacy policy, you may contact us at +6011-6263 8228.',
        }
      },
      cta: {
        title: 'Ready for a Cleaner Home?',
        desc: 'Join thousands of satisfied customers in Klang Valley. Get a free quote within minutes via WhatsApp.',
        whatsapp: 'WhatsApp Us Now',
        call: 'Call +6011-6263 8228',
      }
    }
  },
  ms: {
    translation: {
      mattress_page: {
        hero_title: "Pembersihan Tilam Dalaman Gred Klinikal",
        hero_subtitle: "Bernafas lebih bersih, tidur lebih lena. Penghapusan lengkap hama habuk, bakteria dan kotoran degil.",
        back_btn: "Kembali ke Laman Utama",
        why_section_title: "Mengapa Pembersihan Tilam Profesional Sangat Penting",
        why_section_desc: "Anda menghabiskan 1/3 daripada hidup anda di atas katil. Namun, tilam anda juga menjadi tempat pembiakan berjuta-juta bahaya kesihatan yang tidak kelihatan.",
        problems: {
          mites_title: "Sehingga 10 Juta Hama Habuk",
          mites_desc: "Hama habuk hidup dengan memakan sel kulit mati kita. Najis hama habuk adalah punca utama bersin pagi, asma dan alahan kulit.",
          sweat_title: "Peluh & Cecair Badan",
          sweat_desc: "Secara purata, orang dewasa mengeluarkan kira-kira 200ml peluh setiap malam, mewujudkan persekitaran lembap untuk bakteria, kulat dan bau.",
          skin_title: "Pengumpulan Sel Kulit Mati",
          skin_desc: "Kita gugur sekitar 1.5g sel kulit mati setiap malam, yang meresap jauh ke dalam tilam dan memberi makanan kepada koloni hama habuk.",
          stains_title: "Kotoran Organik yang Degil",
          stains_desc: "Kotoran air kencing, darah, tumpahan air, dan peluh bukan sahaja kelihatan tidak menyenangkan tetapi juga menghasilkan bakteria dan bau hapak yang berterusan."
        },
        process_section_title: "Proses Sanitasi Tilam Klinikal 6-Peringkat Kami",
        process_section_desc: "Kami bukan sekadar vakum; kami membersih dan mengekstrak secara mendalam. Dikuasakan oleh pengekstrakan Jerman Kärcher® dan bahan kimia mesra alam.",
        stages: {
          stage1_title: "1. Pengekstrakan Kuasa Kering",
          stage1_desc: "Pengekstrakan berkuasa tinggi Jerman untuk menarik debu, sel kulit mati, dan partikel alahan dari kedalaman sehingga 6 inci.",
          stage2_title: "2. Rawatan Kotoran Mesra Alam",
          stage2_desc: "Kami menggunakan enzim mesra alam khusus untuk menyasarkan kotoran air kencing, peluh, atau tumpahan makanan tanpa melunturkan warna tilam.",
          stage3_title: "3. Syampu Klinikal",
          stage3_desc: "Menyental kain lembut menggunakan syampu biodegradable yang mesra alam untuk melarutkan kotoran minyak yang tersumbat di dalam.",
          stage4_title: "4. Pengekstrakan Vakum Tinggi",
          stage4_desc: "Membilas secara mendalam dan menyedut keluar air kotor, sisa syampu, dan bakteria yang tertanam jauh di dalam.",
          stage5_title: "5. Sanitasi Stim Kering 100°C",
          stage5_desc: "Sterilisasi stim kering bersuhu tinggi yang membunuh 99.9% bakteria, kuman, dan hama habuk dengan serta-merta.",
          stage6_title: "6. Pelindung Anti-Hama Habuk",
          stage6_desc: "Menyembur semburan pelindung akhir yang menolak hama habuk dan memastikan tilam anda kekal segar dan bersih selama berbulan-bulan."
        },
        pricing_section_title: "Harga Pembersihan Tilam yang Mudah & Jelas",
        pricing_section_desc: "Pembersihan gred klinikal profesional pada kadar tempatan yang berpatutan di Lembah Klang. Tiada caj tersembunyi.",
        pricing_note: "*Harga mungkin berbeza mengikut lokasi, keadaan tilam, dan rawatan tambahan yang diperlukan.",
        sizes: {
          single_title: "Single / Super Single",
          single_price: "Dari RM100",
          single_features: ["1x Cuci Kering & Basah Tilam", "Sanitasi Stim 100°C", "Pelindung Anti-Hama Habuk", "Pengekstrakan Gentian Jauh"],
          queen_title: "Saiz Queen",
          queen_price: "Dari RM130",
          queen_features: ["1x Cuci Kering & Basah Tilam", "Sanitasi Stim 100°C", "Pelindung Anti-Hama Habuk", "Pengekstrakan Gentian Jauh"],
          king_title: "Saiz King / Super King",
          king_price: "Dari RM150",
          king_features: ["1x Cuci Kering & Basah Tilam", "Sanitasi Stim 100°C", "Pelindung Anti-Hama Habuk", "Pengekstrakan Gentian Jauh"]
        },
        faq_section_title: "Soalan Lazim (FAQ)",
        faq_section_desc: "Semua yang anda perlu tahu mengenai pembersihan tilam profesional.",
        faqs: {
          q1: "Berapa lamakah masa yang diambil untuk tilam kering?",
          a1: "Biasanya antara 4 hingga 6 jam bergantung kepada pengudaraan bilik dan kipas. Kami mengesyorkan agar anda menghidupkan penyaman udara atau kipas siling dalam tempoh ini.",
          q2: "Adakah produk pembersihan yang digunakan mesra alam?",
          a2: "Sudah tentu. Kami hanya menggunakan bahan pembersih biodegradable dan mesra alam, meninggalkan sisa kimia sifar.",
          q3: "Bolehkah anda menghilangkan kotoran air kencing, peluh, atau darah yang lama?",
          a3: "Sistem pengekstrakan basah dwi kami & agen pembersih kotoran kimia adalah sangat berkesan. Kami menjamin bahawa kotoran organik akan pudar dengan ketara, dan dalam kebanyakan kes, hilang sepenuhnya jika dirawat awal. Walau bagaimanapun, kotoran yang terlalu lama mungkin telah melunturkan pewarna fabrik secara kekal, yang tidak boleh dikembalikan.",
          q4: "Berapa kerapkah saya perlu membersihkan tilam saya secara profesional?",
          a4: "Pakar alahan mengesyorkan pembersihan mendalam tilam setiap 6 hingga 12 bulan untuk mengelakkan serangan asma, resdung, dan alahan kulit."
        },
        cta_book: "Tempah Pembersihan Tilam Sekarang",
        cta_msg: "Hi i-Cuzi4U, saya ingin menempah pembersihan mendalam tilam profesional. Saiz tilam saya ialah:",
        included_title: "Semuanya Termasuk:",
        included_items: [
          "Pembersihan pengekstrakan stim mendalam",
          "99.9% pembasmian hama habuk & bakteria",
          "Rawatan penghapusan kotoran degil",
          "Proses peneutralan bau",
          "Sanitasi anti-bakteria",
          "Disinfeksi UV-C (pilihan)",
          "Teknologi cepat kering",
          "Jaminan kepuasan 100%"
        ],
        highlights: {
          effective_title: "99.9% Berkesan",
          effective_sub: "Pembasmian hama habuk",
          dry_title: "Kering Hari Sama",
          dry_sub: "Tidur lena malam ini",
          eco_title: "Mesra Alam",
          eco_sub: "Bahan berkualiti premium"
        }
      },
      sofa_page: {
        hero_title: "Servis Pembersihan Mendalam Sofa Gred Klinikal",
        hero_subtitle: "Kembalikan rupa premium sofa anda. Pengekstrakan mendalam dan sanitasi untuk menghapuskan kotoran degil, peluh, dander haiwan, dan bau hapak.",
        back_btn: "Kembali ke Laman Utama",
        why_section_title: "Mengapa Pembersihan Sofa Profesional Sangat Penting",
        why_section_desc: "Sofa anda adalah perabot yang paling kerap digunakan di rumah. Lama-kelamaan, ia memerangkap peluh, minyak badan, habuk, sisa makanan, dan bakteria.",
        problems: {
          mites_title: "Hama Habuk & Alergen",
          mites_desc: "Sofa fabrik bertindak seperti penapis udara gergasi, memerangkap sel kulit mati, hama habuk, dan bulu haiwan yang memicu bersin dan asma.",
          sweat_title: "Peluh & Minyak Badan",
          sweat_desc: "Sentuhan harian memindahkan peluh, minyak rambut, dan rembesan badan ke kusyen sofa, menghasilkan daki hitam yang kotor.",
          spills_title: "Tumpahan Makanan & Air",
          spills_desc: "Tumpahan kopi, teh, susu, dan kuah meresap jauh ke dalam upholstery, menjadi tempat pembiakan bakteria, kulat, dan bau busuk.",
          pet_title: "Bulu & Bau Haiwan Peliharaan",
          pet_desc: "Haiwan peliharaan meninggalkan bulu, kesan kaki berlumpur, air liur, dan adakalanya air kencing, menghasilkan bau busuk yang sangat sukar dihilangkan."
        },
        process_section_title: "Proses Pembersihan & Sanitasi Mendalam Sofa 6-Peringkat Kami",
        process_section_desc: "Sama ada fabrik atau kulit, kami menggunakan pengekstrakan semburan Jerman Kärcher® yang khusus dan enzim mesra alam untuk mencuci dan memulihkan sofa anda.",
        stages: {
          stage1_title: "1. Vakum Industri Kuasa Tinggi",
          stage1_desc: "Pembersihan vakum mendalam menggunakan mesin komersil untuk menarik keluar debu permukaan, habuk halus, bulu, dan sisa makanan di celah sofa.",
          stage2_title: "2. Rawatan Kotoran Mesra Alam",
          stage2_desc: "Menyembur ejen pembersih organik khusus untuk memecahkan kotoran degil kopi, minyak, dakwat, atau air kencing tanpa memudarkan fabrik.",
          stage3_title: "3. Syampu Gentian Kusyen",
          stage3_desc: "Menyental fabrik dengan lembut menggunakan berus putar lembut dan syampu fabrik premium yang biodegradable.",
          stage4_title: "4. Pengekstrakan Semburan Kärcher®",
          stage4_desc: "Menyuntik air suam ke dalam gentian dan menyedut semula cecair kotoran, sisa syampu, dan kuman keluar serta-merta dengan kuasa vakum tinggi.",
          stage5_title: "5. Sanitasi Stim Suhu Tinggi 100°C",
          stage5_desc: "Mensterilkan sofa menggunakan stim kering 100°C untuk membunuh 99.9% bakteria, kuman, hama habuk, dan meneutralkan bau hapak.",
          stage6_title: "6. Pelindung Fabrik & Pelembap Kulit",
          stage6_desc: "Menyembur pelindung anti-stain pada fabrik atau mengurut lilin lebah (beeswax) premium pada sofa kulit untuk mengelakkan retakan."
        },
        pricing_section_title: "Harga Pembersihan Sofa yang Jelas & Berpatutan",
        pricing_section_desc: "Pemulihan sofa gred klinikal oleh pakar terlatih. Kadar harga terus terang di Lembah Klang, tanpa caj tersembunyi.",
        pricing_addon: "Tambahan RM40 untuk setiap tempat duduk tambahan / Bentuk-L.",
        pricing_note: "*Harga mungkin berbeza mengikut lokasi, keadaan sofa dan rawatan tambahan yang diperlukan.",
        sizes: {
          single_title: "1 Tempat Duduk / Armchair",
          single_price: "Dari RM100",
          single_features: ["Cuci Fabrik atau Kulit", "Pembersihan Daki & Habuk", "Sanitasi Stim 100°C", "Pengekstrakan Gentian Jauh"],
          queen_title: "Sofa 2 Tempat Duduk",
          queen_price: "Dari RM140",
          queen_features: ["Cuci Fabrik atau Kulit", "Pembersihan Daki & Habuk", "Sanitasi Stim 100°C", "Pengekstrakan Gentian Jauh", "Peneutralan Bau Hapak"],
          king_title: "Sofa 3 Tempat Duduk",
          king_price: "Dari RM180",
          king_features: ["Cuci Fabrik atau Kulit", "Pembersihan Daki & Habuk", "Sanitasi Stim 100°C", "Pengekstrakan Gentian Jauh", "Peneutralan Bau Hapak"]
        },
        faq_section_title: "Soalan Lazim (FAQ)",
        faq_section_desc: "Semua yang anda perlu tahu mengenai pembersihan mendalam sofa profesional.",
        faqs: {
          q1: "Berapa lamakah masa diambil untuk sofa fabrik kering selepas dicuci?",
          a1: "Sofa fabrik biasanya mengambil masa 4 hingga 6 jam untuk kering sepenuhnya bergantung kepada aliran udara. Menghidupkan kipas atau penyaman udara membantu mempercepatkan pengeringan. Sofa kulit dilap kering serta-merta dan dilembapkan, jadi ia boleh digunakan terus.",
          q2: "Bolehkah anda menghilangkan kotoran degil seperti dakwat, kopi atau air kencing haiwan?",
          a2: "Enzim biologi dan ejen penghilang kotoran kami sangat berkesan. Kami berjaya memudarkan atau menyingkirkan sehingga 90% kotoran makanan, minuman, gris dan haiwan peliharaan. Bagaimanapun, kotoran yang dibiarkan berbulan-bulan mungkin telah mengubah warna pewarna fabrik secara kekal.",
          q3: "Adakah anda membersihkan sofa kulit, dan apakah prosesnya?",
          a3: "Ya, kami mencuci kedua-dua jenis kulit asli dan sintetik. Kami mencuci menggunakan cecair pembersih kulit seimbang pH, mensanitasi, mengelap kering, dan menyapu krim pelembap premium untuk mengelakkan kulit daripada menjadi kering atau retak.",
          q4: "Adakah produk pembersihan mesra alam?",
          a4: "Ya, 100% mesra alam. Kami menggunakan ejen pembersih biodegradable dan hipoalergenik. Ia tidak meninggalkan sisa bahan kimia berbahaya atau melekit."
        },
        cta_book: "Tempah Pembersihan Sofa Sekarang",
        cta_msg: "Hi i-Cuzi4U, saya ingin menempah pembersihan mendalam sofa profesional. Jenis/saiz sofa saya ialah:",
        included_title: "Semuanya Termasuk:",
        included_items: [
          "Cuci pengekstrakan basah/kulit sofa secara mendalam",
          "99.9% pembasmian hama habuk, alergen & bakteria",
          "Rawatan tumpahan minyak, sisa makanan & kotoran air",
          "Peneutralan bau hapak & bulu haiwan peliharaan",
          "Syampu organik & mesra alam",
          "Sanitasi stim suhu tinggi 100°C & deodorizing",
          "Pelembap & kondisioner premium sofa kulit",
          "Jaminan kepuasan 100%"
        ],
        highlights: {
          effective_title: "99.9% Berkesan",
          effective_sub: "Penyingkiran kotoran & kuman",
          dry_title: "Kering Hari Sama",
          dry_sub: "Gunakan sofa anda malam ini",
          eco_title: "Mesra Alam",
          eco_sub: "Penyelesaian premium & selamat"
        }
      },
      car_page: {
        hero_title: "Servis Pembersihan Mendalam Kusyen & Dalaman Kereta",
        hero_subtitle: "Kembalikan kesegaran dan kebersihan kabin kereta anda seperti baru keluar kedai. Pengekstrakan kotoran dalam, pembuangan kotoran degil, dan sanitasi bau.",
        back_btn: "Kembali ke Laman Utama",
        why_section_title: "Sebab Pembersihan Mendalam Dalaman Kereta Amat Penting",
        why_section_desc: "Kabin kereta anda adalah ruang tertutup di mana anda menghabiskan masa berjam-jam setiap hari. Ia mengumpul peluh, tumpahan makanan, tanah lumpur, spora kulat, dan habuk, menjejaskan kualiti udara dalam kereta.",
        problems: {
          mites_title: "Hama Habuk & Alergen",
          mites_desc: "Kusyen fabrik dan permaidani kereta mengumpul habuk, sel kulit mati, dan dander haiwan peliharaan, yang membiakkan hama habuk dan mencetuskan alahan.",
          sweat_title: "Peluh, Minyak & daki",
          sweat_desc: "Pemanduan harian memindahkan peluh badan, minyak rambut, dan sebum terus ke permukaan tempat duduk, stereng, dan tempat letak tangan, meninggalkan kesan melekit dan daki gelap.",
          spills_title: "Tumpahan Makanan & Minuman",
          spills_desc: "Tumpahan kopi, air manis, susu, dan serbuk makanan jatuh ke celah tempat duduk, menghasilkan kotoran dalaman dan kawasan melekit yang membiakkan bakteria dan kulat.",
          pet_title: "Bau Kabin Tertutup",
          pet_desc: "Cuaca lembap, peluh, tumpahan cecair, atau asap rokok menghasilkan bau hapak yang berterusan di dalam kereta yang tidak dapat diselesaikan oleh pewangi kereta biasa."
        },
        process_section_title: "Proses Restorasi 6-Peringkat Dalaman Kereta Kami",
        process_section_desc: "Sama ada kusyen fabrik atau kulit, kami menggunakan pengekstrakan semburan Jerman Kärcher® yang khusus untuk mencuci dan mensanitasi kenderaan anda.",
        stages: {
          stage1_title: "1. Vakum Industri Kuasa Tinggi",
          stage1_desc: "Vakum menyeluruh menggunakan mesin industri sedutan tinggi untuk menarik habuk, pasir, serbuk makanan, dan rambut dari tempat duduk, permaidani, dan celah-celah kabin.",
          stage2_title: "2. Rawatan Kotoran Pra-Sembur Mesra Alam",
          stage2_desc: "Menyembur ejen pembersih organik khusus yang mensasarkan daki, tumpahan makanan, kopi, atau lumpur tanpa merosakkan fabrik atau kulit tempat duduk.",
          stage3_title: "3. Syampu Gentian & Kusyen Kereta",
          stage3_desc: "Menyental kusyen tempat duduk, permaidani lantai, dan alas kaki secara lembut menggunakan berus putar lembut dan syampu organik yang mesra alam.",
          stage4_title: "4. Pengekstrakan Semburan Kärcher®",
          stage4_desc: "Menyuntik air suam ke dalam kusyen/permaidani dan menyedut semula daki terlarut bersama sisa sabun dengan kuasa vakum tekanan tinggi.",
          stage5_title: "5. Sanitasi Stim Suhu Tinggi 100°C",
          stage5_desc: "Mensterilkan kusyen tempat duduk, tali pinggang keledar, dan corong penyaman udara dengan stim kering untuk membasmi 99.9% bakteria, alergen, dan bau hapak.",
          stage6_title: "6. Peneutral Bau & Penjagaan Kulat/Kulit",
          stage6_desc: "Menyembur deodorizer enzim aktif pada fabrik, atau menyapu krim pelembap premium pada kusyen kulit untuk mengelakkan kulit daripada merekah."
        },
        pricing_section_title: "Harga Pembersihan Kereta yang Telus & Berpatutan",
        pricing_section_desc: "Pembersihan mendalam dan sanitasi kereta profesional terus ke lokasi anda di Lembah Klang. Harga jujur mengikut saiz kenderaan.",
        pricing_note: "*Harga mungkin berbeza mengikut lokasi, saiz/keadaan kenderaan dan rawatan tambahan yang diperlukan.",
        addons_title: "Pilihan Add-on Tambahan",
        addons_subtitle: "Sesuaikan perkhidmatan anda dengan pembersihan kawasan khusus secara berasingan",
        addons_items: [
          { label: "Roof lining (Lining bumbung)", price: "RM70 Sedan / RM80 MPV" },
          { label: "Door panel · setiap satu", price: "RM10" },
          { label: "Floor mat · setiap satu", price: "RM10" },
          { label: "Floor carpet (Karpet lantai)", price: "RM70 Sedan / RM80 MPV" },
          { label: "Boot (Ruang kargo / but)", price: "RM40" }
        ],
        not_included_tag: "Tidak Termasuk",
        sizes: {
          sedan_title: "Sedan / Hatchback (Standard 5 Tempat Duduk)",
          sedan_price: "Dari RM140",
          sedan_features: [
            { text: "Cucian Mendalam Semua Kusyen (Fabrik/Kulit)", included: true },
            { text: "Sterilisasi Stim Suhu Tinggi 100°C", included: true },
            { text: "Rawatan Peneutral Bau & Bakteria", included: true },
            { text: "Pembersihan Dashboard & Konsol Tengah", included: true },
            { text: "Pembersihan Panel Pintu", included: false },
            { text: "Pengekstrakan Karpet Lantai Kabin", included: false },
            { text: "Roof Lining (Lining Bumbung)", included: false },
            { text: "Pembersihan Ruang But / Kargo", included: false }
          ],
          suv_title: "SUV / Crossover (Sederhana 5 Tempat Duduk)",
          suv_price: "Dari RM180",
          suv_features: [
            { text: "Cucian Mendalam 5 Kusyen (Fabrik/Kulit)", included: true },
            { text: "Sterilisasi Stim Suhu Tinggi 100°C", included: true },
            { text: "Rawatan Peneutral Bau & Bakteria", included: true },
            { text: "Pembersihan Dashboard & Konsol Tengah", included: true },
            { text: "Pembersihan Panel Pintu", included: false },
            { text: "Pengekstrakan Karpet Lantai Kabin", included: false },
            { text: "Roof Lining (Lining Bumbung)", included: false },
            { text: "Pembersihan Ruang But / Kargo", included: false }
          ],
          mpv_title: "MPV / SUV Besar (7 hingga 8 Tempat Duduk)",
          mpv_price: "Dari RM240",
          mpv_features: [
            { text: "Cucian Mendalam 7-8 Kusyen (Fabrik/Kulit)", included: true },
            { text: "Sterilisasi Stim Suhu Tinggi 100°C", included: true },
            { text: "Rawatan Peneutral Bau & Bakteria", included: true },
            { text: "Pembersihan Dashboard & Konsol Tengah", included: true },
            { text: "Pembersihan Panel Pintu", included: false },
            { text: "Pengekstrakan Karpet Lantai Kabin", included: false },
            { text: "Roof Lining (Lining Bumbung)", included: false },
            { text: "Pembersihan Ruang But / Kargo", included: false }
          ]
        },
        faq_section_title: "Soalan Lazim (FAQ)",
        faq_section_desc: "Semua yang anda perlu tahu mengenai pembersihan mendalam kusyen dan dalaman kereta profesional.",
        faqs: {
          q1: "Berapakah masa yang diambil untuk kusyen kereta kering?",
          a1: "Kusyen fabrik biasanya mengambil masa 3 hingga 5 jam untuk kering. Letak kenderaan di bawah matahari dengan tingkap dibuka sedikit atau hidupkan heater/AC kereta untuk mempercepatkan pengeringan. Kusyen kulit dilap kering dan boleh digunakan terus.",
          q2: "Adakah anda membersihkan kusyen kereta kulit juga?",
          a2: "Ya, kami mencuci kedua-dua kusyen fabrik dan kulit asli/sintetik. Untuk kulit, kami menggunakan pembersih neutral-pH, sterilisasi stim, dan krim pelembap kulit premium untuk mengembalikan kilauan dan melindungi daripada retak.",
          q3: "Bolehkah anda menghilangkan kotoran degil seperti kesan susu, muntah, atau kulat?",
          a3: "Ya! Sistem pengekstrakan air panas Kärcher® kami bersama ejen pembersih organik sangat berkesan untuk melarutkan, mensanitasi, dan menarik keluar kotoran susu, kopi, peluh, dan kulat ringan. Kami menjamin kotoran organik akan pudar ketara atau hilang.",
          q4: "Adakah servis ini mudah alih (adakah anda datang ke tempat saya)?",
          a4: "Ya, kami menyediakan perkhidmatan sepenuhnya di lokasi anda. Kami membawa peralatan profesional terus ke rumah, kondo, atau pejabat anda di seluruh Lembah Klang. Kami hanya memerlukan soket elektrik dan punca air untuk persediaan."
        },
        cta_book: "Tempah Pembersihan Kereta Sekarang",
        cta_msg: "Hi i-Cuzi4U, saya ingin menempah pembersihan mendalam dalaman kereta profesional. Jenis kenderaan saya ialah:",
        included_title: "Semua Termasuk:",
        included_items: [
          "Cucian pengekstrakan basah kusyen fabrik/kulit",
          "Vakum & pengekstrakan permaidani lantai & but kereta",
          "Lap bersih panel pintu, papan pemuka & konsol",
          "Sanitasi stim 100°C untuk kusyen & corong AC",
          "Basmi 99.9% hama habuk, alergen & spora kulat",
          "Jaminan kepuasan 100%"
        ],
        highlights: {
          effective_title: "99.9% Berkesan",
          effective_sub: "Membasmi bakteria & bau",
          dry_title: "Teknologi Cepat Kering",
          dry_sub: "Boleh dipandu hari sama",
          eco_title: "Mesra Alam",
          eco_sub: "Tiada sisa bahan kimia"
        }
      },
      curtain_page: {
        hero_title: "Servis Pembersihan Langsir Profesional Tanpa Cabut",
        hero_subtitle: "Sifar kerumitan. Tiada dismantle diperlukan. Kami membersih, mensanitasi, dan membasmi hama habuk terus pada rel anda menggunakan stim 100°C.",
        back_btn: "Kembali ke Laman Utama",
        why_section_title: "Mengapa Pembersihan Langsir Profesional Sangat Penting",
        why_section_desc: "Langsir bertindak sebagai penapis habuk gergasi untuk tingkap anda, memerangkap pencemar luar, habuk rumah, dan alergen. Lama-kelamaan, ia menjadi punca utama alahan pernafasan.",
        problems: {
          dust_title: "Pengumpulan Habuk Tebal",
          dust_desc: "Langsir menyerap habuk harian dan debunga bawaan angin, menjadikannya pencetus bersin dan alahan setiap kali ditarik atau ditutup.",
          mites_title: "Sarang Hama Habuk",
          mites_desc: "Hama habuk mikroskopik membiak dengan mudah di dalam lapisan fabrik, memakan sel kulit mati dan daki yang terperangkap pada serat langsir.",
          odors_title: "Menyerap Bau & Asap",
          odors_desc: "Fabrik langsir menyerap asap masakan, bau haiwan petiharaan, asap rokok, dan kelembapan, menyebabkan bau kepam dan spora kulat.",
          dismantling_title: "Renyah Untuk Diturunkan",
          dismantling_desc: "Menurunkan langsir yang berat, membasuhnya secara konvensional, menyeterika, dan menggantungnya semula mengambil masa berjam-jam serta berisiko mengecutkan fabrik premium."
        },
        process_section_title: "Proses Pembersihan Langsir Terus Pada Rel",
        process_section_desc: "Pakar kami menggunakan teknologi sanitasi stim Jerman Kärcher® suhu tinggi dan pengekstrakan vakum sensitif untuk menyegarkan langsir anda tanpa perlu diturunkan.",
        stages: {
          stage1_title: "1. Vakum Kering Kuasa Tinggi",
          stage1_desc: "Menggunakan muncung berus lembut khas untuk menyedut habuk halus, bulu haiwan, dan sawang dari lipatan atas hingga ke bawah.",
          stage2_title: "2. Rawatan Kotoran Mesra Alam",
          stage2_desc: "Menyapu formula penghilang kotoran mesra alam secara teliti pada kesan air, tompokan kotoran, atau perubahan warna fabrik.",
          stage3_title: "3. Sterilisasi Stim Suhu Tinggi 100°C",
          stage3_desc: "Stim kering suhu tinggi menembusi gentian fabrik secara mendalam untuk membunuh 99.9% bakteria, kuman, dan hama habuk secara serta-merta.",
          stage4_title: "4. Semburan Syampu Lembut",
          stage4_desc: "Semburan halus syampu fabrik mesra alam untuk melarutkan kotoran minyak dan partikel asap tanpa merosakkan atau mengecutkan langsir.",
          stage5_title: "5. Pembilasan & Pengekstrakan Kärcher®",
          stage5_desc: "Menggunakan teknologi semburan-pengekstrakan Kärcher® untuk membilas serta menyedut keluar air kotor, syampu, dan alergen terlarut.",
          stage6_title: "6. Pengeringan Atas Rel & Pewangi",
          stage6_desc: "Menyerap kelembapan berlebihan supaya langsir kering dengan cantik di atas rel. Diakhiri dengan semburan pewangi organik."
        },
        pricing_section_title: "Sebut Harga Pembersihan Langsir Yang Jelas & Berpatutan",
        pricing_section_desc: "Pembersihan profesional terus di lokasi mengikut keping/rel. Tiada caj buka langsir yang tersembunyi. Servis Cucian Kedai (Shop Wash) akan datang tidak lama lagi!",
        pricing_note: "*Harga mungkin berbeza mengikut lokasi, jenis/keadaan langsir dan rawatan tambahan yang diperlukan.",
        sizes: {
          day_title: "Langsir Nipis / Day Curtain (Per Keping/Rel)",
          day_price: "Dari RM30",
          day_features: ["Pembersihan Terus di Atas Rel", "Sterilisasi Stim Suhu Tinggi 100°C", "Penyahbauan Organik Mesra Alam", "Bilas Pengekstrakan Sensitif"],
          night_title: "Langsir Tebal / Night Curtain (Per Keping/Rel)",
          night_price: "Dari RM50",
          night_features: ["Pembersihan Terus di Atas Rel", "Sterilisasi Stim Suhu Tinggi 100°C", "Penyahbauan Organik Mesra Alam", "Bilas Pengekstrakan Sensitif", "Rawatan Kotoran Degil"],
          double_title: "Dua Lapisan (Set Day + Night)",
          double_price: "Dari RM75",
          double_features: ["Cucian Lengkap Dua Rel", "Pengekstrakan Dalam & Sanitasi Stim", "Rawatan Anti-Hama Habuk", "Larutan Bahan Kimia Mesra Alam", "100% Di Lokasi - Sifar Kerumitan Dismantle"]
        },
        faq_section_title: "Soalan Lazim (FAQ)",
        faq_section_desc: "Semua yang anda perlu tahu mengenai pembersihan langsir di lokasi profesional.",
        faqs: {
          q1: "Adakah saya perlu menurunkan langsir sebelum pasukan anda sampai?",
          a1: "Sama sekali tidak! Servis kami adalah 100% di lokasi. Kami membersih secara mendalam, mensanitasi, dan mencuci langsir anda terus di atas rel gantungannya. Anda tidak perlu bersusah payah.",
          q2: "Adakah servis ini sesuai untuk semua jenis fabrik langsir?",
          a2: "Ya. Pasukan pakar kami akan menjalankan pemeriksaan pra-rawatan dan pengenalpastian fabrik yang teliti sebelum memulakan proses pembersihan. Ini membolehkan kami melaras suhu stim dan tekanan pengekstrakan dengan tepat mengikut jenis fabrik (seperti baldu, blackout, kapas, renda, atau linen), sekali gus menjamin penjagaan selamat tanpa risiko mengecut.",
          q3: "Berapa lama masa yang diambil untuk langsir kering selepas dibersihkan?",
          a3: "Oleh kerana kami menggunakan stim kering kelembapan rendah dan pengekstrakan vakum kuasa tinggi, langsir kering dengan sangat cepat—biasanya dalam 1 hingga 2 jam sahaja dengan pengudaraan bilik biasa.",
          q4: "Adakah anda menawarkan servis cucian kedai / dobi bawa balik?",
          a4: "Servis Cucian Kedai (Shop Wash) kami akan datang tidak lama lagi! Buat masa ini, kami fokus kepada servis cucian stim atas rel di lokasi yang sangat popular, kerana ia menjimatkan masa dan tenaga anda daripada mencabut langsir."
        },
        cta_book: "Tempah Cuci Langsir Sekarang",
        cta_msg: "Hi i-Cuzi4U, saya ingin menempah servis pembersihan mendalam langsir profesional. Butiran langsir saya:",
        included_title: "Semua Termasuk:",
        included_items: [
          "100% cuci terus di atas rel (tanpa perlu dismantle)",
          "Sterilisasi stim kering suhu tinggi 100°C",
          "Membasmi 99.9% hama habuk & alergen",
          "Penyahbauan asap & bau mesra alam",
          "Rawatan kotoran tompok air & habuk tebal",
          "Teknologi cepat kering (kering dalam 1-2 jam)",
          "Jaminan kepuasan 100%"
        ],
        highlights: {
          effective_title: "Cuci Atas Rel",
          effective_sub: "Tanpa renyah dismantle",
          dry_title: "Kering Dalam 1 Jam",
          dry_sub: "Teknologi kelembapan rendah",
          eco_title: "Mesra Alam",
          eco_sub: "Larutan selamat & mesra alam"
        }
      },
      carpet_page: {
        hero_title: "Servis Pembersihan & Pengekstrakan Mendalam Karpet Profesional",
        hero_subtitle: "Kembalikan kesegaran karpet anda. Kami membasmi kotoran terbenam, kesan degil, dan hama habuk pencetus alahan dengan teknologi pengekstrakan semburan Kärcher® Jerman.",
        back_btn: "Kembali ke Laman Utama",
        why_section_title: "Mengapa Pembersihan Karpet Profesional Sangat Penting",
        why_section_desc: "Karpet bertindak sebagai penapis udara gergasi di rumah atau pejabat anda, memerangkap habuk, debunga, bulu haiwan, dan sisa tumpahan. Tanpa cucian mendalam, ia menjadi sarang bakteria dan rosak sebelum waktunya.",
        problems: {
          spills_title: "Kesan Degil & Tumpahan",
          spills_desc: "Kopi, teh, air kencing haiwan, dan sisa makanan meresap jauh ke dalam serat karpet, meninggalkan tompokan hodoh dan pudarnya warna jika tidak disedut keluar dengan segera.",
          allergens_title: "Debu & Alergen Terperangkap",
          allergens_desc: "Karpet mengunci hama habuk, spora kulat, dan debunga. Memijak karpet yang kotor akan menyebarkan semula partikel ini ke udara, mencetuskan asma.",
          odors_title: "Bau Busuk Yang Mendalam",
          odors_desc: "Kelembapan, sisa kotoran haiwan, dan tapak kaki membina bakteria di dalam karpet, menghasilkan bau hapak berterusan yang tidak dapat dihilangkan dengan vakum biasa.",
          wear_title: "Kehausan Serat Karpet",
          wear_desc: "Pasir dan habuk tajam yang terperangkap bertindak seperti kertas pasir, menghakis serat karpet setiap kali dipijak. Pembersihan mendalam memanjangkan hayat karpet anda."
        },
        process_section_title: "Proses Pengekstrakan Karpet Profesional Kami",
        process_section_desc: "Kami menggunakan sistem cucian semburan dan sedutan kuasa tinggi gred komersial untuk menyental, mensanitasi, membilas, dan menyedut keluar kotoran degil.",
        stages: {
          stage1_title: "1. Vakum Kering Kuasa Tinggi",
          stage1_desc: "Menyedut habuk longgar, pasir halus, dan bulu haiwan yang terperangkap jauh di dasar karpet sebelum dicuci.",
          stage2_title: "2. Rawatan Kotoran Khusus",
          stage2_desc: "Menyapu agen pra-rawatan mesra alam untuk melarutkan kotoran tebal seperti kesan kopi, minyak, dan najis haiwan.",
          stage3_title: "3. Sentalan Mesin Berputar",
          stage3_desc: "Menggunakan mesin berputar profesional dengan berus lembut untuk menyental dan melonggarkan daki daripada serat karpet.",
          stage4_title: "4. Bilasan Sedutan Vakum Berkembar",
          stage4_desc: "Menggunakan vakum Kärcher® kuasa tinggi untuk menyedut keluar 95% kelembapan bersama kotoran dan sisa syampu."
        },
        pricing_section_title: "Sebut Harga Pembersihan Karpet Yang Jelas & Berpatutan",
        pricing_section_desc: "Pembersihan profesional mengikut keluasan kaki persegi atau keping. Harga telus tanpa caj tersembunyi. Servis Cucian Kedai (Shop Wash) akan datang tidak lama lagi!",
        pricing_note: "* Harga berbeza mengikut keluasan, keadaan kotoran karpet, dan lokasi. Hubungi kami untuk sebut harga tepat.",
        sizes: {
          rug_title: "Karpet Kediaman, Hiasan & Pejabat Kecil / SOHO",
          rug_price: "Dari RM1.50 / kaki persegi",
          rug_features: ["Sesuai untuk Karpet Rumah, SOHO & Kedai Kecil", "Menghilangkan Kesan Degil, Bau Haiwan & Kopi", "Cucian Pengekstrakan Rendah Kelembapan", "Bermula dari minimum 80 kaki persegi", "Termasuk Sanitasi & Penyahbauan Mesra Alam"],
          office_title: "Karpet Pejabat (Wall-to-Wall)",
          office_price: "Dari RM1.20 / kaki persegi",
          office_features: ["Sesuai untuk Ruang Komersial & Pejabat", "Tertakluk kepada keluasan minimum", "Pengekstrakan Kawasan Laluan Padat", "Sistem Cepat Kering", "Jadual Fleksibel Selepas Waktu Pejabat"],
          event_title: "Karpet Acara / Pameran",
          event_price: "Dari RM1.00 / kaki persegi",
          event_features: ["Sesuai untuk Dewan, Pameran & Pentas", "Sedutan Vakum Kering & Basuh Berkapasiti Tinggi", "Membuang Lumpur, Kesan Tapak Kaki & Pita Pelekat", "Penyahbau Mesra Alam", "Jaminan Siap Menepati Masa Acara"]
        },
        faq_section_title: "Soalan Lazim (FAQ)",
        faq_section_desc: "Semua yang anda perlu tahu mengenai pembersihan karpet di lokasi profesional.",
        faqs: {
          q1: "Berapa lama masa yang diambil untuk karpet kering selepas pembersihan?",
          a1: "Dengan mesin pengekstrakan semburan Kärcher® gred komersial kami yang dilengkapi vakum berkembar, 95% kelembapan disedut keluar dengan serta-merta. Karpet anda biasanya akan kering sepenuhnya dalam masa 2 hingga 4 jam sahaja dengan bantuan penghawa dingin atau kipas.",
          q2: "Adakah cecair pencuci yang digunakan selamat untuk bayi, haiwan peliharaan, dan karpet bulu?",
          a2: "Ya, sudah tentu. Kami hanya menggunakan Larutan Mesra Alam premium yang tidak toksik, biodegradable, dan seimbang pH. Ia tidak meninggalkan sisa kimia berbahaya, menjadikannya selamat untuk keluarga, haiwan peliharaan, serta serat sensitif seperti karpet bulu biri-biri atau Parsi.",
          q3: "Bolehkah anda menghilangkan kesan kopi, minyak, atau bau kencing kucing?",
          a3: "Ya, kami pakar dalam mengekstrak kotoran dan bau degil. Ejen penghilang kotoran biologi kami sangat berkesan untuk meneutralkan bau kencing haiwan serta memudarkan kesan kopi, teh, dan minyak. Kami mengesyorkan cucian segera selepas tumpahan berlaku untuk hasil terbaik.",
          q4: "Adakah anda menawarkan servis cucian kedai / bawa pulang?",
          a4: "Servis Cucian Kedai (Shop Wash) kami akan datang tidak lama lagi! Buat masa ini, kami fokus kepada servis cucian pengekstrakan di lokasi, yang sangat mudah kerana anda tidak perlu mengangkat dan mengangkut karpet yang berat."
        },
        cta_book: "Tempah Cuci Karpet Sekarang",
        cta_msg: "Hi i-Cuzi4U, saya ingin menempah servis pembersihan mendalam karpet profesional. Butiran karpet saya:",
        included_title: "Semua Termasuk:",
        included_items: [
          "Pengekstrakan semburan syampu tekanan tinggi",
          "Sanitasi & penyahbauan mesra alam",
          "Membasmi 99.9% hama habuk & alergen",
          "Rawatan kotoran kopi, minyak & air kencing haiwan",
          "Teknologi kelembapan rendah (kering dalam 2-4 jam)",
          "Servis profesional untuk kediaman & komersial",
          "Jaminan kepuasan 100%"
        ],
        highlights: {
          effective_title: "Pengekstrakan Dalam",
          effective_sub: "Melarut dan menyedut keluar kotoran terbenam",
          dry_title: "Teknologi Cepat Kering",
          dry_sub: "Kering sepenuhnya dalam 2 hingga 4 jam",
          eco_title: "Mesra Alam",
          eco_sub: "Selamat, tidak toksik & sifar sisa kimia"
        }
      },
      seo: {
        title: "Servis Pembersihan Mendalam Profesional Lembah Klang | i-Cuzi4U",
        meta_desc: "Servis pembersihan mendalam i-Cuzi4U di Lembah Klang. Servis basuh dan sanitasi tilam, sofa, langsir, permaidani, dan dalaman kereta menggunakan teknologi Jerman Kärcher® yang mesra alam.",
        mattress_alt: "Servis cuci tilam dalaman dan basmi hama habuk rumah di KL Selangor - i-Cuzi4U",
        sofa_alt: "Servis cuci sofa Selangor KL dan pengekstrakan kusyen sofa PJ - i-Cuzi4U",
        "car-seat_alt": "Servis cuci dalaman kereta dan sanitasi dalaman kenderaan Lembah Klang - i-Cuzi4U",
        curtain_alt: "Servis cuci langsir stim suhu tinggi tanpa buka di Lembah Klang - i-Cuzi4U",
        carpet_alt: "Servis cuci karpet pejabat dan kediaman gred industri di Lembah Klang - i-Cuzi4U",
        "hood-hob_alt": "Servis cuci hood dan hob dapur, cuci berminyak profesional Selangor - i-Cuzi4U"
      },
      nav: {
        services: 'Perkhidmatan',
        packages: 'Pakej',
        about: 'Tentang Kami',
        whatsapp: 'WhatsApp Kami',
      },
      hero: {
        badge: "PAKAR KEBERSIHAN DI LEMBAH KLANG",
        title1: 'Pembersihan Dalaman Profesional Di Lembah Klang.',
        title2: 'Dikhususkan Untuk Anda.',
        slogan: '"Pembersihan adalah Tanggungjawab Kami. i-Cuzi4U Je!"',
        desc: 'Kami pakar dalam kebersihan Tilam, Sofa, Langsir, Permaidani, dan Dalaman Kereta. Menggunakan teknologi Kärcher® Jerman dan bahan kimia mesra alam untuk rumah yang benar-benar bersih.',
        cta_quote: 'Dapatkan Sebut Harga',
        cta_services: 'Lihat Perkhidmatan',
      },
      trust: {
        staff: 'Kakitangan Tempatan Terlatih',
        tech: 'Teknologi Kärcher® Jerman',
        chemicals: 'Bahan Kimia Mesra Alam',
        satisfaction: '100% Kepuasan',
      },
      services: {
        title: 'Perkhidmatan Teras Kami',
        desc: 'Kami menawarkan kebersihan gred klinikal dan pembersihan dalaman khusus di seluruh Lembah Klang. Kepakaran teras kami merangkumi Pembersihan Tilam, Pembersihan Sofa, Pembersihan Dalaman Kereta, Pembersihan Langsir, Pembersihan Permaidani, dan Pembersihan Hood & Hob Dapur—dikuasakan oleh teknologi Kärcher® Jerman dan larutan 100% mesra alam.',
        book_now: 'Tempah Sekarang',
        from: 'Dari',
        coming_soon: 'Akan Datang',
        modal_title: 'Perkhidmatan Akan Datang!',
        modal_desc: 'Kami sedang bertungkus-lumus menyediakan perkhidmatan {{serviceTitle}} profesional di Lembah Klang tidak lama lagi. Nantikan! Anda juga boleh bersembang terus dengan kami di WhatsApp untuk pertanyaan awal.',
        modal_cta_whatsapp: 'Tanya di WhatsApp',
        modal_close: 'Faham',
        mattress: {
          title: 'Pembersihan Tilam',
          desc: "Pembersihan tilam i-Cuzi4U menggabungkan pengekstrakan mendalam Karcher dan teknologi stim untuk menghapuskan sepenuhnya hama habuk, pepijat katil, kotoran, dan bakteria—menjadikan katil anda steril, segar, dan bersih tanpa noda.",
        },
        sofa: {
          title: 'Pembersihan Sofa',
          desc: 'i-Cuzi4U menawarkan pembersihan sofa kulit dan fabrik yang pakar. Teknologi pembersihan mendalam termaju kami menyingkirkan kotoran degil, mensanitasi, dan memanjangkan jangka hayat perabot kegemaran anda.',
        },
        'car-seat': {
          title: 'Pembersihan Dalaman Kereta',
          desc: 'i-Cuzi4U membersih secara mendalam bahagian dalaman dan kerusi kereta jenis kulit dan fabrik, menyingkirkan kotoran degil, hama habuk, dan bakteria secara pakar untuk kabin yang bersih dan sanitasi sepenuhnya.',
        },
        curtain: {
          title: 'Pembersihan Langsir',
          desc: 'i-Cuzi4U menawarkan perkhidmatan pembersihan langsir premium untuk rumah dan pejabat. Menggunakan teknik yang berkesan dan selamat untuk fabrik, kami menyingkirkan sepenuhnya kotoran degil, habuk, dan bau yang terperangkap.',
        },
        carpet: {
          title: 'Pembersihan Permaidani',
          desc: 'i-Cuzi4U menawarkan perkhidmatan pembersihan permaidani pakar yang disesuaikan dengan jenis fabrik anda. Menggunakan teknik syampu profesional dan basuhan mendalam, kami menghidupkan semula permaidani anda untuk persekitaran yang bersih tanpa noda, segar, dan sihat.',
        },
        'hood-hob': {
          title: 'Pembersihan Hood & Hob Dapur',
          desc: 'i-Cuzi4U menyediakan penyahgrisan profesional, penyingkiran karbon, dan sanitasi lengkap untuk dapur memasak, sistem pengudaraan ekzos, dan penapis anda.',
        },
      },
      process: {
        title: 'Proses 6-Peringkat i-Cuzi4U',
        guarantee_title: 'Kebersihan Dijamin',
        guarantee_desc: 'Proses kami memastikan rumah anda bukan sahaja bersih secara visual, tetapi bersih secara klinikal.',
        karcher_tech: 'Teknologi Kärcher®',
        karcher_desc: 'Peralatan gred profesional untuk hasil yang unggul.',
        steps: {
          1: { title: 'Vakum HEPA Industri', desc: 'Menghilangkan habuk permukaan dan zarah yang tertanam dalam.' },
          2: { title: 'Pra-rawatan/Semburan Kesan', desc: 'Menyasarkan kesan degil dengan penyelesaian khusus.' },
          3: { title: 'Pengekstrakan Dalam / Stim', desc: 'Teknologi Jerman untuk sanitasi gentian dalam.' },
          4: { title: 'Penyahbauan', desc: 'Menghilangkan bau pada punca, bukan sekadar menutupnya.' },
          5: { title: 'Sterilisasi Antibakteria', desc: 'Membunuh 99.9% kuman dan bakteria.' },
          6: { title: 'Pembersihan Udara', desc: 'Meninggalkan ruang anda segar dan sihat.' },
        }
      },
      packages: {
        title: 'Promo & Pakej',
        desc: 'Dapatkan lebih nilai dengan bundle pembersihan kami.',
        book_bundle: 'Tempah Bundle',
        tags: {
          best_seller: 'Paling Laris',
          popular: 'Popular',
          essential: 'Penting',
        },
        items: {
          healthy_home: {
            title: 'Bundle Rumah Sihat',
            desc: '1x Tilam + 1x Sofa',
            discount: 'Jimat 15%',
          },
          living_room: {
            title: 'Segarkan Ruang Tamu',
            desc: 'Sofa + Permaidani + Langsir',
            discount: 'Tawaran Hebat',
          },
          move_in: {
            title: 'Pindah Masuk Baru',
            desc: 'Sanitasi fabrik seluruh rumah',
            discount: 'Sebut Harga Khas',
          }
        }
      },
      footer: {
        desc: 'Pakar pembersihan dalaman profesional yang berkhidmat di Lembah Klang. Fokus pada kebersihan, mesra mudah alih, dan didorong oleh pelanggan.',
        services: 'Perkhidmatan',
        company: 'Syarikat',
        contact: 'Hubungi',
        serving: 'Berkhidmat di KL, Selangor, PJ, Subang, Shah Alam, Rawang & banyak lagi.',
        rights: '© 2026 i-Cuzi4U Cleaning Services. Hak cipta terpelihara.',
      },
      privacy: {
        title: 'Dasar Privasi',
        last_updated: 'Terakhir dikemas kini: 20 Mei 2026',
        introduction: 'Di i-Cuzi4U, kami komited untuk melindungi privasi anda dan memastikan maklumat peribadi anda dikendalikan dengan cara yang selamat dan bertanggungjawab.',
        sections: {
          collection_title: '1. Maklumat yang Kami Kumpul',
          collection_desc: 'Kami mungkin mengumpul maklumat peribadi seperti nama, alamat, nombor telefon, dan e-mel anda apabila anda meminta sebut harga atau menempah perkhidmatan melalui platform kami atau WhatsApp.',
          usage_title: '2. Cara Kami Menggunakan Maklumat Anda',
          usage_desc: 'Maklumat anda digunakan semata-mata untuk menyediakan perkhidmatan pembersihan dalaman kami, memproses tempahan anda, dan berkomunikasi dengan anda mengenai permintaan perkhidmatan anda.',
          third_party_title: '3. Pendedahan kepada Pihak Ketiga',
          third_party_desc: 'Kami tidak menjual, berdagang, atau memindahkan maklumat peribadi anda kepada pihak luar. Ini tidak termasuk rakan kongsi yang dipercayai yang membantu kami dalam mengendalikan laman web kami atau menjalankan perniagaan kami, selagi pihak tersebut bersetuju untuk merahsiakan maklumat ini.',
          security_title: '4. Keselamatan',
          security_desc: 'Kami melaksanakan pelbagai langkah keselamatan untuk mengekalkan keselamatan maklumat peribadi anda.',
          contact_title: '5. Hubungi Kami',
          contact_desc: 'Jika anda mempunyai sebarang soalan mengenai dasar privasi ini, anda boleh menghubungi kami di +6011-6263 8228.',
        }
      },
      cta: {
        title: 'Bersedia untuk Rumah yang Lebih Bersih?',
        desc: 'Sertai beribu-ribu pelanggan yang berpuas hati di Lembah Klang. Dapatkan sebut harga percuma dalam masa beberapa minit melalui WhatsApp.',
        whatsapp: 'WhatsApp Kami Sekarang',
        call: 'Hubungi +6011-6263 8228',
      }
    }
  },
  zh: {
    translation: {
      mattress_page: {
        hero_title: "临床级床垫深层除螨清洁",
        hero_subtitle: "呼吸更清新，睡眠更深沉。全面消除尘螨、细菌和顽固污渍。",
        back_btn: "返回首页",
        why_section_title: "为什么专业床垫清洁至关重要",
        why_section_desc: "您有三分之一的时间是在床上度过的。然而，您的床垫也是数百万看不见的健康危害的温床。",
        problems: {
          mites_title: "高达 1000 万只尘螨",
          mites_desc: "尘螨依靠您的死皮细胞生存。它们的排泄物是晨起打喷嚏、哮喘和皮肤过敏的首要元凶。",
          sweat_title: "汗液与身体分泌物",
          sweat_desc: "成年人每晚平均排出约 200 毫升汗液，这为细菌、霉菌和异味创造了一个潮湿的滋生环境。",
          skin_title: "死皮屑长期累积",
          skin_desc: "我们每晚脱落大约 1.5 克的死皮细胞，它们会沉入床垫面料深处，成为尘螨繁殖的养分。",
          stains_title: "顽固有机污渍",
          stains_desc: "尿渍、血渍、饮料洒漏和汗渍不仅影响美观，还会产生持续的霉味和细菌群落。"
        },
        process_section_title: "我们的 6 阶段临床级床垫消毒清洗流程",
        process_section_desc: "我们不只是吸尘，我们进行深层抽洗与杀菌。采用德国 Kärcher® 专业设备及环保清洁剂。",
        stages: {
          stage1_title: "1. 大功率干式抽吸",
          stage1_desc: "利用德国大功率专业设备，强力吸出深达6英寸的灰尘、死皮屑及尘螨过敏原颗粒。",
          stage2_title: "2. 环保去渍预处理",
          stage2_desc: "针对尿渍、汗渍或食物残留，喷洒专用环保生物活性酶进行分解，不伤面料不褪色。",
          stage3_title: "3. 临床级深层香波清洗",
          stage3_desc: "使用环保可降解的专业香波进行刷洗，使纤维深处的污垢迅速溶解。",
          stage4_title: "4. 高负压湿式抽吸",
          stage4_desc: "进行深度漂洗，强力抽吸出床垫内部残留的污水、多余香波及深层细菌。",
          stage5_title: "5. 100°C 高温干蒸汽消毒",
          stage5_desc: "利用 100°C 以上的高温纯干蒸汽，瞬间杀灭 99.9% 的顽固细菌、霉菌和深层尘螨。",
          stage6_title: "6. 纳米防尘螨隔离保护",
          stage6_desc: "喷洒最后一层环保驱螨保护剂，建立长效隔离屏障，让床垫数月保持清新与洁净。"
        },
        pricing_section_title: "简单透明的床垫清洁价格",
        pricing_section_desc: "巴生谷地区超值的专业临床级深层清洁服务。价格公开透明，无任何隐形消费。",
        pricing_note: "*价格可能根据地区、床垫实际脏污状况和所需的额外处理程序有所浮动。",
        sizes: {
          single_title: "单人床垫 / 单人加宽 (Single / Super Single)",
          single_price: "RM100 起",
          single_features: ["1x 床垫干湿抽吸清洗", "100°C 高温蒸汽杀菌", "长效驱螨保护屏障", "深层纤维物理抽取"],
          queen_title: "双人床垫 (Queen Size)",
          queen_price: "RM130 起",
          queen_features: ["1x 床垫干湿抽吸清洗", "100°C 高温蒸汽杀菌", "长效驱螨保护屏障", "深层纤维物理抽取"],
          king_title: "特大双人床垫 (King / Super King)",
          king_price: "RM150 起",
          king_features: ["1x 床垫干湿抽吸清洗", "100°C 高温蒸汽杀菌", "长效驱螨保护屏障", "深层纤维物理抽取"]
        },
        faq_section_title: "常见问题解答 (FAQ)",
        faq_section_desc: "关于专业床垫深层清洁，您需要了解的一切。",
        faqs: {
          q1: "清洗后床垫需要多长时间才能干？",
          a1: "通常需要 4 到 6 小时，具体取决于房间通风情况和是否开启风扇。我们建议在清洗后开启空调或吊风扇以加速风干。",
          q2: "所使用的清洁剂环保吗？",
          a2: "绝对安全环保。我们严格采用可生物降解的专用清洁剂，零有害化学残留。",
          q3: "陈旧的尿渍、汗渍或血渍可以完全洗掉吗？",
          a3: "我们的湿式双重抽取系统配合专业去渍剂非常高效。我们保证有机污渍会显著淡化。如果是在产生初期及时清洗，绝大多数都可以完全去除。但陈旧性污渍可能已将面料纤维染色氧化，这种情况无法完全逆转还原。",
          q4: "我应该多久对床垫进行一次专业深层清洁？",
          a4: "过敏专家建议每 6 至 12 个月进行一次专业深层除螨清洁，能有效预防哮喘、鼻炎以及各种皮肤过敏症状。"
        },
        cta_book: "立即预约床垫深层除螨",
        cta_msg: "您好 i-Cuzi4U，我想预约专业床垫深层除螨清洁，我的床垫尺寸是：",
        included_title: "服务包含所有项目：",
        included_items: [
          "深层蒸汽抽吸清洁",
          "99.9% 尘螨与细菌消除",
          "顽固污渍清除处理",
          "异味中和分解程序",
          "抗菌消毒净化",
          "UV-C 紫外线杀菌（可选）",
          "快速烘干技术",
          "100% 满意度保证"
        ],
        highlights: {
          effective_title: "99.9% 极其有效",
          effective_sub: "彻底清除尘螨",
          dry_title: "当天即干",
          dry_sub: "今晚安心入睡",
          eco_title: "安全环保",
          eco_sub: "高效环保清洁配方"
        }
      },
      sofa_page: {
        hero_title: "临床级沙发深层抽洗与消毒服务",
        hero_subtitle: "恢复沙发原有质感。通过深层抽洗与高温杀菌，彻底消除顽固污渍、汗水积累、宠物皮屑及异味。",
        back_btn: "返回首页",
        why_section_title: "为什么专业沙发清洁至关重要",
        why_section_desc: "沙发是家中日常接触最频繁的家具。久而久之，它会吸收汗液、人体油脂、尘螨、食物残渣，极易滋生病菌。",
        problems: {
          mites_title: "尘螨与过敏原滋生",
          mites_desc: "织物沙发就像一个大型空气滤网，积聚死皮屑、粉尘和宠物毛发，这极易引发过敏性鼻炎、打喷嚏等症状。",
          sweat_title: "汗渍与人体油脂",
          sweat_desc: "每日坐卧会将皮肤汗液、头发油脂转移到沙发垫上，在面料上形成一圈圈黑色和黄色的顽固污垢和皮屑。",
          spills_title: "顽固咖啡茶水洒漏",
          spills_desc: "不小心打翻的咖啡、茶水、牛奶或酱汁会瞬间渗入海绵深处，形成难以去除的水渍，并产生持久霉味。",
          pet_title: "宠物异味与毛发",
          pet_desc: "宠物在沙发上玩耍会留下爪印、皮屑、口水，甚至是尿渍，这会散发出极其难闻、普通香水无法掩盖的深层异味。"
        },
        process_section_title: "我们专业的 6 阶段沙发深层抽洗与护理流程",
        process_section_desc: "无论是布艺还是皮革，我们均采用德国 Kärcher® 高负压温水喷抽系统及环保去污剂，对沙发进行深度水洗并温和修复。",
        stages: {
          stage1_title: "1. 工业级高负压干式吸尘",
          stage1_desc: "使用大功率吸尘设备深层抽吸沙发表面及所有缝隙、死角，将死皮、松散灰尘、毛发彻底清除。",
          stage2_title: "2. 环保去渍靶向预处理",
          stage2_desc: "针对顽固的水渍、咖啡渍、油渍、墨水或宠物尿迹，喷洒专用的生物活性酶进行降解，不伤纤维。",
          stage3_title: "3. 纤维深层香波刷洗",
          stage3_desc: "使用专业的软质旋转刷和可生物降解的温和香波轻轻擦拭，使深层污垢与油渍迅速溶解。",
          stage4_title: "4. Kärcher® 蒸汽/温水高负压喷抽",
          stage4_desc: "德国喷抽设备同时喷入温水并强力吸出深层污水。将残留香波、剥离的脏物及霉菌一网打尽。",
          stage5_title: "5. 100°C 高温干蒸汽消毒",
          stage5_desc: "使用 100°C 以上的高温纯干蒸汽，快速杀灭 99.9% 隐藏的细菌、过敏原，并中和消除发霉的异味。",
          stage6_title: "6. 织物防污保护或皮革抛光滋养",
          stage6_desc: "在布艺沙发上喷涂长效防污隔离保护；若为真皮沙发，则手工涂抹天然蜂蜡和滋润油防止皮革开裂。"
        },
        pricing_section_title: "透明公道的沙发清洁价格",
        pricing_section_desc: "专业团队为您提供临床级沙发去污与杀菌服务。巴生谷地区明码标价，无任何隐形增项消费。",
        pricing_addon: "每增加一个座位 / L型转角加收 RM40。",
        pricing_note: "*价格可能根据位置、沙发实际状况和所需的额外处理程序而有所浮动。",
        sizes: {
          single_title: "单人位沙发 / 扶手椅 (1 Seater)",
          single_price: "RM100 起",
          single_features: ["布艺或真皮清洗", "生态去污与皮垢清洁", "100°C 高温蒸汽杀菌", "深层纤维物理抽取"],
          queen_title: "双人沙发 (2 Seater)",
          queen_price: "RM140 起",
          queen_features: ["布艺或真皮清洗", "生态去污与皮垢清洁", "100°C 高温蒸汽杀菌", "深层纤维物理抽取", "异味分解与中和"],
          king_title: "三人沙发 (3 Seater)",
          king_price: "RM180 起",
          king_features: ["布艺或真皮清洗", "生态去污与皮垢清洁", "100°C 高温蒸汽杀菌", "深层纤维物理抽取", "异味分解与中和"]
        },
        faq_section_title: "常见问题解答 (FAQ)",
        faq_section_desc: "关于专业沙发深层清洁，您需要了解的一切。",
        faqs: {
          q1: "清洗布艺沙发后需要多长时间才能干？",
          a1: "通常需要 4 到 6 小时彻底风干，具体取决于空气流通度。建议在清洗后打开吊扇或空调以加速风干。如果是皮沙发，我们用超细纤维毛巾擦干并进行滋养抛光，基本上可以立即使用。",
          q2: "你们可以去除墨水、咖啡、或宠物的尿渍吗？",
          a2: "我们的生物酶清洁剂和专业去渍剂十分高效，能显著淡化或完全清除 90% 以上的饮料、油脂及宠物污渍。但若污渍已存留数月，面料纤维可能已被永久染色或脱色，此类污渍难以百分之百还原。",
          q3: "你们清洗皮沙发吗？具体流程是什么？",
          a3: "是的，我们专业清洗真皮和人造皮革沙发。采用 pH 中性皮具专用清洁液手工温和刷洗、消毒、擦干，最后涂抹进口高级皮革保养膏，锁住水分、恢复光泽、防止皮革干燥开裂。",
          q4: "你们所使用的清洁产品环保吗？",
          a4: "完全环保，100% 放心。我们使用的是可生物降解、低致敏原的专业香波与消毒剂。它们清洗后绝无有害化学残留。"
        },
        cta_book: "立即预约沙发深层抽洗",
        cta_msg: "您好 i-Cuzi4U，我想预约专业沙发深层清洁，我的沙发类型/尺寸是：",
        included_title: "服务包含所有项目：",
        included_items: [
          "沙发深层湿式抽洗或皮具深度清洗",
          "99.9% 消除尘螨、过敏原及顽固细菌",
          "咖啡茶渍、食品油脂及陈旧污垢预处理",
          "中和分解宠物异味、尿味与多余皮屑",
          "环保可降解、低过敏温和清洁香波",
          "100°C 蒸汽高温杀菌与高效除臭",
          "真皮沙发抛光、涂抹专用滋养保护油（若为皮质）",
          "100% 满意度保证"
        ],
        highlights: {
          effective_title: "99.9% 高效净除",
          effective_sub: "除渍除油、杀灭顽固病菌",
          dry_title: "当天即可干燥",
          dry_sub: "今晚即可重新享受沙发",
          eco_title: "环保无害",
          eco_sub: "高效环保清洁配方"
        }
      },
      car_page: {
        hero_title: "临床级汽车内饰与座椅深层抽洗服务",
        hero_subtitle: "让您的爱车内饰恢复出厂般的洁净与无菌状态。深层高压抽洗、顽固污渍清除、车舱异味深度消毒。",
        back_btn: "返回首页",
        why_section_title: "为什么专业汽车内饰深层清洁至关重要",
        why_section_desc: "汽车座舱是您每天度过数小时的密闭空间。它极易积聚汗渍、食物残渣、泥土、霉菌孢子和灰尘，严重影响车内空气质量。",
        problems: {
          mites_title: "尘螨与过敏原",
          mites_desc: "汽车座椅面料和车内地毯极易积聚灰尘、死皮细胞和宠物毛发，滋生尘螨并诱发呼吸道和皮肤过敏。",
          sweat_title: "汗渍、油脂与污垢",
          sweat_desc: "日常驾驶会将身体汗液、头发油脂和皮肤油脂直接转移到座椅、方向盘和扶手上，形成黏腻、发黑的顽固污垢。",
          spills_title: "食物与饮料洒漏",
          spills_desc: "不小心洒出的咖啡、含糖饮料、牛奶以及零食碎屑掉入座椅缝隙，形成深层霉斑和黏腻区域，成为细菌繁殖温床。",
          pet_title: "密闭车舱异味",
          pet_desc: "潮湿天气、汗水、宠物污渍或烟味在座椅和内饰纤维中堆积，形成顽固酸臭或霉味，普通车载香水根本无法消除。"
        },
        process_section_title: "我们的 6 阶段汽车内饰深度修复流程",
        process_section_desc: "无论是布艺还是真皮座椅，我们均采用德国 Kärcher® 专业喷抽清洗设备，进行深度水洗和消毒处理。",
        stages: {
          stage1_title: "1. 工业级高功率吸尘",
          stage1_desc: "使用大吸力工业吸尘设备，彻底吸出汽车座椅、地毯、脚垫以及边角缝隙中的浮尘、沙粒、零食碎屑和毛发。",
          stage2_title: "2. 环保去渍靶向预处理",
          stage2_desc: "喷洒专用环保生物活性酶去渍剂，针对油脂、食物残留、咖啡、茶渍或泥土污渍进行分解，温和不伤面料。",
          stage3_title: "3. 纤维深层香波刷洗",
          stage3_desc: "使用专业的软质旋转刷，配合温和且可生物降解的专用内饰香波，对座椅和地毯进行温和刷洗，使深层污垢迅速溶解。",
          stage4_title: "4. Kärcher® 高负压温水喷抽",
          stage4_desc: "德国喷抽设备将温水喷入座椅/地毯纤维，同时以强劲负压将脏水、香波残留及深层污垢彻底抽吸干净。",
          stage5_title: "5. 100°C 高温干蒸汽消毒",
          stage5_desc: "利用 100°C 干蒸汽对汽车座椅、安全带及空调出风口进行高温灭菌，彻底消灭 99.9% 的细菌、过敏原、霉菌和异味。",
          stage6_title: "6. 异味中和与真皮保养",
          stage6_desc: "在织物座椅上喷洒活性酶异味中和剂；针对真皮座椅，则涂抹进口高级皮革保养霜，防止干燥开裂、恢复光泽。"
        },
        pricing_section_title: "透明且公道的汽车内饰清洁价格",
        pricing_section_desc: "我们在巴生谷提供上门专业深层车内消毒与抽洗服务。按车型大小统一定价，绝无隐藏收费。",
        pricing_note: "*价格可能根据位置、车辆大小/状况和所需的额外处理程序而有所浮动。",
        addons_title: "可选附加服务 (Optional Add-ons)",
        addons_subtitle: "根据您的个人需求，定制特定区域的单项深层抽洗服务",
        addons_items: [
          { label: "车顶顶棚 (Roof lining)", price: "RM70 轿车 / RM80 MPV" },
          { label: "车门内饰板 (Door panel · 单个)", price: "RM10" },
          { label: "汽车脚垫 (Floor mat · 单张)", price: "RM10" },
          { label: "车舱地毯 (Floor carpet)", price: "RM70 轿车 / RM80 MPV" },
          { label: "后备箱 (Boot)", price: "RM40" }
        ],
        not_included_tag: "不包含",
        sizes: {
          sedan_title: "普通轿车 / 两厢车 (标准 5 座)",
          sedan_price: "RM140 起",
          sedan_features: [
            { text: "全车座椅深层洗涤 (织物/皮革)", included: true },
            { text: "100°C 高温蒸汽干蒸汽消毒", included: true },
            { text: "车内异味分解与中和处理", included: true },
            { text: "仪表台及中控台擦拭清洁", included: true },
            { text: "车门内饰板清洁 (Door panel)", included: false },
            { text: "车舱地毯深层抽洗 (Floor carpet)", included: false },
            { text: "车顶顶棚清洁 (Roof lining)", included: false },
            { text: "后备箱 / 尾箱清洁 (Boot)", included: false }
          ],
          suv_title: "SUV / 跨界车 (中型 5 座)",
          suv_price: "RM180 起",
          suv_features: [
            { text: "5座全车座椅深层洗涤 (织物/皮革)", included: true },
            { text: "100°C 高温蒸汽干蒸汽消毒", included: true },
            { text: "车内异味分解与中和处理", included: true },
            { text: "仪表台及中控台擦拭清洁", included: true },
            { text: "车门内饰板清洁 (Door panel)", included: false },
            { text: "车舱地毯深层抽洗 (Floor carpet)", included: false },
            { text: "车顶顶棚清洁 (Roof lining)", included: false },
            { text: "后备箱 / 尾箱清洁 (Boot)", included: false }
          ],
          mpv_title: "MPV / 大型 SUV (7-8 座家庭车)",
          mpv_price: "RM240 起",
          mpv_features: [
            { text: "7-8座全车座椅深层洗涤 (织物/皮革)", included: true },
            { text: "100°C 高温蒸汽干蒸汽消毒", included: true },
            { text: "车内异味分解与中和处理", included: true },
            { text: "仪表台及中控台擦拭清洁", included: true },
            { text: "车门内饰板清洁 (Door panel)", included: false },
            { text: "车舱地毯深层抽洗 (Floor carpet)", included: false },
            { text: "车顶顶棚清洁 (Roof lining)", included: false },
            { text: "后备箱 / 尾箱清洁 (Boot)", included: false }
          ]
        },
        faq_section_title: "常见问题解答 (FAQ)",
        faq_section_desc: "关于专业汽车座椅及内饰深层清洁，您需要了解的一切。",
        faqs: {
          q1: "清洗后汽车座椅需要多久才能完全干？",
          a1: "织物座椅通常需要 3 到 5 小时风干。我们建议在清洗后，将车停在通风晴朗的地方并摇下少许车窗，或开启车内暖风/空调加速风干。真皮座椅在清洁后会立即擦干并涂抹保养膏，可以立即使用。",
          q2: "你们也清洗真皮汽车座椅吗？",
          a2: "是的，我们专业清洗布艺和真皮座椅。真皮座椅清洗采用 pH 中性皮革专用清洗液、蒸汽消毒，并涂抹高级滋润皮革霜，使皮革恢复弹性和光泽，防止干燥开裂。",
          q3: "像牛奶洒漏、呕吐物、霉斑等顽固污渍能彻底洗净吗？",
          a3: "可以！我们的 Kärcher® 喷抽设备配合专业去渍剂十分高效，能显著淡化并清除 90% 以上的饮料、牛奶、汗渍、呕吐物以及轻微霉斑。越早清洗，清除效果越好。",
          q4: "这个服务是上门（Mobile）服务的吗？",
          a4: "是的，我们提供全上门服务。我们的专业团队会携带设备直接前往您在巴生谷的住宅、公寓或办公室停车场进行施工。我们仅需接入您那里的电源和水源即可。"
        },
        cta_book: "立即预约汽车座椅抽洗",
        cta_msg: "您好 i-Cuzi4U，我想预约专业汽车内饰深层清洁，我的车型是：",
        included_title: "服务内容全包：",
        included_items: [
          "织物/真皮座椅高压喷水与深层抽吸清洗",
          "全车地板、地毯及尾箱吸尘与深层抽洗",
          "车门内饰板、仪表盘及中控台擦拭清洁",
          "100°C 高温蒸汽汽车座椅及空调口物理杀菌",
          "彻底消灭 99.9% 尘螨、过敏原和霉菌孢子",
          "100% 客户满意度保证"
        ],
        highlights: {
          effective_title: "99.9% 杀菌率",
          effective_sub: "彻底消灭霉菌与异味",
          dry_title: "高效速干技术",
          dry_sub: "当天清洗当天开走",
          eco_title: "绿色环保",
          eco_sub: "无有害化学残留成分"
        }
      },
      curtain_page: {
        hero_title: "免拆卸上门高温蒸汽窗帘深层清洁",
        hero_subtitle: "零繁琐，无需拆卸挂钩。我们直接在轨道上使用100°C干蒸汽与深层抽洗技术，为您深度除尘、消灭尘螨并全面杀菌。",
        back_btn: "返回首页",
        why_section_title: "为什么专业窗帘清洁至关重要",
        why_section_desc: "窗帘如同窗户的巨大防尘盾，每天都在吸附室外的污染物、室内的飞尘和过敏原。长期不清洗，它们将成为诱发呼吸道过敏的主要源头。",
        problems: {
          dust_title: "大量灰尘与微粒堆积",
          dust_desc: "窗帘每日吸附飞尘、风吹进的花粉与毛发，每次拉动窗帘时，这些微小的过敏原都会在空气中扬起，诱发打喷嚏和过敏。",
          mites_title: "尘螨滋生的温床",
          mites_desc: "显微镜下的尘螨极易在温暖多褶的布艺窗帘中繁殖，以附着在纤维上的皮屑、死皮细胞为食，形成尘螨滋生链。",
          odors_title: "强力吸附异味与油烟",
          odors_desc: "布艺极易吸收厨房油烟、宠物异味、香烟烟雾以及空气中的水分，进而导致窗帘发霉、散发难闻的陈旧霉味。",
          dismantling_title: "拆卸与清洗极度繁琐",
          dismantling_desc: "拆卸沉重的高挂窗帘、清洗、熨烫然后再重新挂回需要耗费一整天的时间，而且常规水洗极易导致高档面料缩水变形。"
        },
        process_section_title: "专业免拆卸上门窗帘深层净化流程",
        process_section_desc: "我们的专业团队利用德国 Kärcher® 顶尖高温干蒸汽设备与微量高压抽洗技术，直接在您的轨道上为您焕新窗帘，无需拆卸。",
        stages: {
          stage1_title: "1. 高压无损干式吸尘",
          stage1_desc: "使用配有专业软毛刷的商用吸尘机，从窗帘褶皱顶部开始垂直向下深度吸除浮尘、花粉和蜘蛛网。",
          stage2_title: "2. 环保去污与水渍处理",
          stage2_desc: "针对窗帘表面的轻微水渍、顽固污斑或污渍，小心涂抹天然环保的温和去污配方进行预处理。",
          stage3_title: "3. 100°C 蒸汽瞬时物理杀菌",
          stage3_desc: "高压干蒸汽均匀穿透多层纤维，瞬间消灭隐藏在窗帘深处 99.9% 的细菌、真菌和尘螨过敏原。",
          stage4_title: "4. 专业环保香波微喷洗",
          stage4_desc: "轻柔喷洒天然环保香波，有效溶解深层油脂、尼古丁残留和陈年油烟味，而不损害精致面料。",
          stage5_title: "5. Kärcher® 喷水抽吸冲洗",
          stage5_desc: "利用 Kärcher® 顶尖的喷水抽吸（Spray-Extraction）技术，在冲洗的同时瞬间吸干脏水，彻底清除洗涤剂残留与过敏原。",
          stage6_title: "6. 轨道速干与精油除味",
          stage6_desc: "强力抽吸技术带走绝大部分水分，让窗帘直接挂在轨道上自然风干。最后喷洒有机植物香氛除味。"
        },
        pricing_section_title: "清晰透明的窗帘深层清洁定价",
        pricing_section_desc: "根据窗帘片数或轨道长幅透明报价，绝无拆卸服务等隐形收费。线下到店水洗与取送服务（Shop Wash）即将上线！",
        pricing_note: "*价格可能根据位置、窗帘类型/状况和所需的额外处理程序而有所浮动。",
        sizes: {
          day_title: "纱帘 Day Curtain（单片/每条轨道）",
          day_price: "From RM30",
          day_features: ["免拆卸轨道直接清洗", "100°C 高温蒸汽物理杀菌", "环保天然植物除味", "温和喷抽去污冲洗"],
          night_title: "遮光帘 / 遮光布 Night Curtain（单片/每条轨道）",
          night_price: "From RM50",
          night_features: ["免拆卸轨道直接清洗", "100°C 高温蒸汽物理杀菌", "环保天然植物除味", "温和喷抽去污冲洗", "局部顽固污渍处理"],
          double_title: "双层窗帘组合（纱帘 + 遮光帘成对套组）",
          double_price: "From RM75",
          double_features: ["整条双轨道双层全面清洗", "深层高压抽洗与高温杀菌", "抗尘螨滋生双重护理", "100% 环保温和清洁剂", "100% 上门服务——零拆卸繁琐"]
        },
        faq_section_title: "常见问题解答",
        faq_section_desc: "关于免拆卸上门窗帘深层清洁，您需要了解的一切。",
        faqs: {
          q1: "在你们团队上门清洁前，我需要提前把窗帘拆下来吗？",
          a1: "完全不需要！我们的服务是 100% 免拆卸上门的。我们直接在窗帘悬挂的轨道上进行深度抽吸、香波刷洗和蒸汽消毒。您无需动手，省心省力。",
          q2: "这种免拆卸上门清洗服务适用于所有的窗帘材质吗？",
          a2: "是的。我们的专业团队在开始清洁程序之前，会先进行仔细的清洗前检查与材质鉴定。这能让我们根据织物类型（如天鹅绒、遮光布、纯棉、蕾丝、亚麻等）精准调整蒸汽温度和抽吸压力，确保安全洗护，绝不缩水变形。",
          q3: "免拆卸上门清洗后，窗帘需要多长时间才能干透？",
          a3: "因为我们采用的是超低含水量的干蒸汽以及大吸力喷抽清洗技术，大部分水分在清洗时已被带走。通常在普通室内通风环境下，只需 1 到 2 小时即可完全干透。",
          q4: "你们提供线下门店拆卸带走水洗的服务吗？",
          a4: "我们的线下门店洗衣服务（Shop Wash Service）即将推出！目前我们专注于上门免拆卸的高温蒸汽抽洗服务，这是目前最受欢迎的清洁方式，能完美避免拆装带来的麻烦和缩水风险。"
        },
        cta_book: "立即预约窗帘上门抽洗",
        cta_msg: "您好 i-Cuzi4U，我想预约专业窗帘免拆上门深层清洁，我的窗帘情况是：",
        included_title: "服务内容全包：",
        included_items: [
          "100% 免拆卸原位轨道直接抽洗",
          "100°C 高温物理干蒸汽杀菌消毒",
          "深度消灭 99.9% 尘螨与隐蔽细菌",
          "天然植物提取环保去油烟异味",
          "顽固浮尘与霉斑水渍去污处理",
          "特快风干技术（1-2小时内干透）",
          "100% 客户满意度保证"
        ],
        highlights: {
          effective_title: "原位直接洗",
          effective_sub: "免去繁琐拆卸挂装",
          dry_title: "1小时快速干",
          dry_sub: "采用低水分干蒸汽技术",
          eco_title: "绿色环保",
          eco_sub: "安全环保清洁剂"
        }
      },
      carpet_page: {
        hero_title: "专业商用与家用温水喷抽地毯深层清洁",
        hero_subtitle: "让您的地毯焕然一新。我们采用德国 Kärcher® 专业喷抽技术，深度清除顽固污渍、吸除沉淀沙尘、彻底消灭过敏原和尘螨。",
        back_btn: "返回首页",
        why_section_title: "为什么定期深度清洗地毯至关重要",
        why_section_desc: "地毯如同室内庞大的空气过滤器，每天都在吸附灰尘、花粉、宠物毛发和鞋底脏污。若不定期进行深度喷抽清洗，地毯会滋生大量细菌、散发异味，且纤维极易磨损老化。",
        problems: {
          spills_title: "顽固污渍与饮品倾洒",
          spills_desc: "咖啡、茶水、宠物尿渍和各种食物污渍会迅速渗入地毯纤维深处，如果不及时进行专业高压喷抽，会导致永久性变色和难看污斑。",
          allergens_title: "积存灰尘与过敏原",
          allergens_desc: "地毯极易锁死尘螨、霉菌孢子和皮屑。人在地毯上走动时会使这些有害微粒重新扬起，诱发呼吸道过敏或哮喘。",
          odors_title: "地毯深层难闻异味",
          odors_desc: "环境潮气、宠物意外以及鞋底水渍会促使地毯内层滋生细菌，散发出普通吸尘器完全无法消除的陈年霉味和酸臭味。",
          wear_title: "沙尘磨损地毯纤维",
          wear_desc: "陷入地毯根部的沙粒和硬质尘土在踩踏时会产生类似砂纸的摩擦作用，加速磨断地毯纤维。深度清洗能显著延长高档地毯寿命。"
        },
        process_section_title: "专业的多阶段地毯喷抽洗护流程",
        process_section_desc: "我们使用商用级高压喷抽和专业梳理设备，深度溶解脏污、彻底杀菌，并将多余水分和残留洗涤剂一并强力抽走。",
        stages: {
          stage1_title: "1. 工业级大吸力干式吸尘",
          stage1_desc: "在清洗前进行彻底吸尘，深入清除吸附在地毯表层和毛绒根部的浮尘、沙粒和毛发。",
          stage2_title: "2. 局部重度污渍预处理",
          stage2_desc: "针对咖啡、油脂、宠物尿渍等难除污渍，涂抹专用的环保去渍剂，使其深度溶解、便于提取。",
          stage3_title: "3. 专业机械旋转刷洗",
          stage3_desc: "使用专业地毯旋转刷洗机搭配极软毛刷，温柔揉搓、打散纤维深处的顽固污垢和结块泥尘。",
          stage4_title: "4. 强力双真空喷抽回收",
          stage4_desc: "在喷水冲洗的同时利用强大的真空负压瞬间抽干 95% 的水分和洗涤剂残留，将污垢连根拔起。"
        },
        pricing_section_title: "清晰合理的透明地毯清洁报价",
        pricing_section_desc: "专业清洁按平方英尺或件数透明报价，绝无任何隐形消费。线下门店水洗及取送服务（Shop Wash）即将上线！",
        pricing_note: "* 价格根据地毯实际面积、脏污状况和具体巴生谷区域可能有所浮动。欢迎随时联系我们获取精准报价。",
        sizes: {
          rug_title: "家用块毯、住宅及小型办公室 / SOHO 地毯",
          rug_price: "From RM1.50 / 平方英尺",
          rug_features: ["适用于客厅块毯、卧室、SOHO及小型店面", "强力祛除宠物尿渍、烟味、重度咖啡与茶渍", "低水分温水物理喷洗与多效抽吸技术", "最少 80 平方英尺起清洁", "包含植物提取环保消毒除味与除螨"],
          office_title: "办公室满铺地毯 (Wall-to-Wall)",
          office_price: "From RM1.20 / 平方英尺",
          office_features: ["最适合商业办公、展厅及整栋办公区", "根据实际清洁面积享受批量优惠", "重度踩踏区域特殊预处理与除渍", "强力回收水份、特快风干系统", "支持非工作时间及夜间灵活预约"],
          event_title: "活动 / 展览及舞台地毯",
          event_price: "From RM1.00 / 平方英尺",
          event_features: ["适用于会堂、婚礼、活动舞台及展会", "超高效高频干吸与温水清洗", "彻底清除泥渍、脚印与双面胶残留", "环保无毒异味中和处理", "确保活动前准时高标准交付保证"]
        },
        faq_section_title: "常见问题解答",
        faq_section_desc: "关于专业上门地毯深层清洁，您需要了解的一切。",
        faqs: {
          q1: "地毯深度清洗后需要多长时间才能干透？",
          a1: "由于我们采用德国 Kärcher® 顶尖商用温水喷抽设备以及强大的双真空负压回收技术，95% 以上的水分在清洗时已被瞬间抽干。地毯通常在空调或风扇通风环境下，只需 2 到 4 小时即可完全干透并恢复踩踏。",
          q2: "你们使用的地毯清洁剂对婴儿、宠物和纯羊毛地毯安全吗？",
          a2: "完全安全。我们严格选用高品质的环保清洁液（Eco-Friendly Solutions），无毒、可生物降解且 pH 值中性。绝无任何刺鼻性或有害化学残留，对婴儿、猫狗宠物极其友好，同样适用于敏感的高级波斯或纯羊毛地毯。",
          q3: "你们能洗掉咖啡渍、动物尿味或者顽固茶渍吗？",
          a3: "是的，我们非常擅长处理顽固污渍和异味提取。我们特制的环保生物去渍剂能有效溶解并提取咖啡、茶水、果汁、食用油等，植物去味剂能彻底中和宠物尿液异味。我们建议您在发生倾洒后尽快联系我们，清洗越及时效果越佳。",
          q4: "你们提供线下带走洗涤的传统洗衣店服务吗？",
          a4: "我们的线下洗衣店服务（Shop Wash Service）即将推出！目前我们专注于上门现场商业和家用高效温水喷抽清洁服务，由于不需繁琐的打包搬运，对客户来说效率最高、体验最便捷。"
        },
        cta_book: "立即预约地毯深度抽洗",
        cta_msg: "您好 i-Cuzi4U，我想预约专业地毯上门深层清洁，我的地毯情况是：",
        included_title: "服务内容全包：",
        included_items: [
          "商用高压温水喷洗与多效抽吸",
          "环保深度物理除尘螨与杀菌消毒",
          "植物提取物异味中和与清香喷雾",
          "专业咖啡、红酒、油污与宠物尿渍除渍",
          "低水分回收速干技术（2-4小时干透）",
          "适合家用中高档地毯及商业写字楼大面积清洗",
          "100% 客户满意度保证"
        ],
        highlights: {
          effective_title: "高压深层喷抽",
          effective_sub: "彻底溶解并抽取藏在纤维底部的泥沙",
          dry_title: "特快干技术",
          dry_sub: "可在 2 至 4 小时内完全风干",
          eco_title: "绿色环保",
          eco_sub: "安全、无毒、零有害化学成分残留"
        }
      },
      seo: {
        title: "巴生谷专业深层清洁服务 | i-Cuzi4U",
        meta_desc: "i-Cuzi4U 巴生谷专业深层清洁服务。采用安全环保的德国 Kärcher® 技术，为您提供床垫、沙发、窗帘、地毯及汽车内饰的深层抽吸与除螨消毒服务。",
        mattress_alt: "吉隆坡除尘螨服务与雪兰莪深层床垫清洗消毒 - i-Cuzi4U",
        sofa_alt: "巴生谷专业沙发清洗与雪兰莪布艺及真皮沙发深度去污 - i-Cuzi4U",
        "car-seat_alt": "巴生谷汽车内饰消毒与汽车织物及皮革座椅深层清洗抽吸 - i-Cuzi4U",
        curtain_alt: "巴生谷免拆卸上门高温蒸汽窗帘除尘消毒服务 - i-Cuzi4U",
        carpet_alt: "巴生谷专业地毯清洁与商用及家用重度污渍除螨清洗 - i-Cuzi4U",
        "hood-hob_alt": "雪兰莪厨房抽油烟机与灶台深度去油污和高温杀菌服务 - i-Cuzi4U"
      },
      nav: {
        services: '服务项目',
        packages: '优惠套餐',
        about: '关于我们',
        whatsapp: '联系我们',
      },
      hero: {
        badge: "巴生谷卫生专家",
        title1: '巴生谷专业深层清洁服务。',
        title2: '为您量身定制。',
        slogan: '"清洁是我们的责任。i-Cuzi4U Je!"',
        desc: '我们专注于床垫、沙发、窗帘、地毯和汽车内饰的卫生。采用德国 Kärcher® 技术和环保清洁剂，为您打造真正干净的家。',
        cta_quote: '立即获取报价',
        cta_services: '查看服务',
      },
      trust: {
        staff: '本地受训员工',
        tech: '德国 Kärcher® 技术',
        chemicals: '环保清洁剂',
        satisfaction: '100% 满意度',
      },
      services: {
        title: '我们的核心服务',
        desc: '我们为巴生谷地区提供临床级的专业深层清洁解决方案。核心服务涵盖床垫清洁、沙发清洁、汽车内饰清洁、窗帘清洁、地毯清洁以及厨房抽油烟机与灶台清洁——全程采用德国 Kärcher® 顶尖设备与 100% 环保清洁剂。',
        book_now: '立即预订',
        from: '起',
        coming_soon: '即将推出',
        modal_title: '服务即将推出！',
        modal_desc: '我们正在积极筹备并即将在巴生谷正式上线 {{serviceTitle}} 服务。敬请期待！您也可以通过 WhatsApp 直接与我们沟通并优先咨询。',
        modal_cta_whatsapp: '通过 WhatsApp 咨询',
        modal_close: '知道了',
        mattress: {
          title: '床垫清洁',
          desc: 'i-Cuzi4U 的床垫清洁结合了 Karcher 深层抽吸与蒸汽技术，彻底根除尘螨、床虱、污渍和细菌，让您的床垫恢复无菌、清新且洁净无瑕。',
        },
        sofa: {
          title: '沙发清洁',
          desc: 'i-Cuzi4U 提供专业的真皮与布艺沙发清洁。我们先进的深层清洁技术能有效去除顽固污渍、进行深度消毒，并延长您心爱家具的使用寿命。',
        },
        'car-seat': {
          title: '汽车内饰清洁',
          desc: 'i-Cuzi4U 专业深层清洁皮质和布艺汽车座椅及内饰，高效去除顽固污渍、尘螨和细菌，为您打造无菌且整洁如新的车舱内饰空间。',
        },
        curtain: {
          title: '窗帘清洁',
          desc: 'i-Cuzi4U 为住宅和办公室提供优质的窗帘清洁服务。我们采用高效且对面料安全的专业技术，彻底清除顽固污渍、灰尘和残留异味。',
        },
        carpet: {
          title: '地毯清洁',
          desc: 'i-Cuzi4U 提供针对您特定材质量身定制的专业地毯清洁服务。我们采用专业的清洗与深层洗涤技术，让您的地毯焕然一新，为您营造洁净、清新且健康的居家环境。',
        },
        'hood-hob': {
          title: '厨房抽油烟机与灶台清洁',
          desc: 'i-Cuzi4U 提供专业的去油污、去碳化和全面消毒服务，适用于您的厨房炉灶、排烟通风系统和过滤网。',
        },
      },
      process: {
        title: 'i-Cuzi4U 6步清洁流程',
        guarantee_title: '卫生保障',
        guarantee_desc: '我们的流程确保您的家不仅视觉上干净，而且达到临床级别的卫生。',
        karcher_tech: 'Kärcher® 技术',
        karcher_desc: '专业级设备，确保卓越效果。',
        steps: {
          1: { title: '工业级 HEPA 吸尘', desc: '去除表面灰尘和深层颗粒。' },
          2: { title: '预处理/污渍喷雾', desc: '使用专业溶液针对顽固污渍。' },
          3: { title: '深层抽吸 / 蒸汽', desc: '德国技术，深层纤维消毒。' },
          4: { title: '除臭处理', desc: '从源头消除异味，而非仅仅掩盖。' },
          5: { title: '抗菌消毒', desc: '杀灭 99.9% 的病菌和细菌。' },
          6: { title: '空气净化', desc: '让您的空间清新健康。' },
        }
      },
      packages: {
        title: '促销与套餐',
        desc: '通过我们精心策划的清洁组合获得更多价值。',
        book_bundle: '预订组合',
        tags: {
          best_seller: '畅销',
          popular: '热门',
          essential: '必备',
        },
        items: {
          healthy_home: {
            title: '健康家居组合',
            desc: '1张床垫 + 1套沙发',
            discount: '节省 15%',
          },
          living_room: {
            title: '客厅焕新',
            desc: '沙发 + 地毯 + 窗帘',
            discount: '超值优惠',
          },
          move_in: {
            title: '新居入住',
            desc: '全屋织物消毒',
            discount: '定制报价',
          }
        }
      },
      footer: {
        desc: '服务于巴生谷的专业深层清洁专家。专注于卫生、移动优先、客户驱动。',
        services: '服务',
        company: '公司',
        contact: '联系',
        serving: '服务范围包括吉隆坡、雪兰莪、八打灵再也、梳邦、莎阿南、万挠等。',
        rights: '© 2026 i-Cuzi4U 清洁服务。版权所有。',
      },
      privacy: {
        title: '隐私政策',
        last_updated: '最后更新日期：2026年5月20日',
        introduction: '在 i-Cuzi4U，我们致力于保护您的隐私，并确保以安全且负责任的方式处理您的个人信息。',
        sections: {
          collection_title: '1. 我们收集的信息',
          collection_desc: '当您通过我们的平台或 WhatsApp 请求报价或预订服务时，我们可能会收集您的姓名、地址、电话号码和电子邮件等个人信息。',
          usage_title: '2. 我们如何使用您的信息',
          usage_desc: '您的信息仅用于提供我们的深层清洁服务、处理您的预订以及就您的服务请求与您沟通。',
          third_party_title: '3. 第三方披露',
          third_party_desc: '我们不会将您的个人信息出售、交易或以其他方式转让给外部各方。这不包括协助我们运营网站或开展业务的合作伙伴，只要这些各方同意对这些信息保密。',
          security_title: '4. 安全保障',
          security_desc: '我们采取各种安全措施来维护您个人信息的安全。',
          contact_title: '5. 联系我们',
          contact_desc: '如果您对本隐私政策有任何疑问，请致电 +6011-6263 8228 与我们联系。',
        }
      },
      cta: {
        title: '准备好迎接更干净的家了吗？',
        desc: '加入巴生谷数千名满意的客户。通过 WhatsApp 在几分钟内获取免费报价。',
        whatsapp: '立即 WhatsApp 我们',
        call: '致电 +6011-6263 8228',
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
