import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Alyne Aesthetics & Med Spa",
    tagline: "Beautiful Skin Starts Here.",
    phone: "(209) 407-2997",
    phoneHref: "tel:+12094072997",
    email: "info@alyneaesthetics.com",
    address: "2180 W Grant Line Rd suite 225, Tracy, CA 95377, USA",
    city: "Tracy",
    serviceAreas: ["Tracy"],
    license: "", 
    since: "2022", 
    google_rating: "5",
    review_count: "121",
    emergency: false,
    theme: "slate",
    niche: "medspa",
  },

  services: [
    { icon: "sparkles", title: "Neurotoxins (Botox®, Dysport®, Jeuveau)", desc: "Smooth away wrinkles and fine lines for a refreshed, youthful appearance.", urgent: false },
    { icon: "heart", title: "Dermal Fillers (Juvederm®, Restylane®)", desc: "Restore volume, enhance contours, and achieve natural-looking facial rejuvenation.", urgent: false },
    { icon: "shield-check", title: "Laser Treatments & Hair Removal", desc: "Target skin concerns, improve texture, and achieve permanent hair reduction with advanced laser technology.", urgent: false },
    { icon: "droplets", title: "HydraFacial & VI Peel®", desc: "Deeply cleanse, exfoliate, and hydrate your skin for an instant glow and improved complexion.", urgent: false },
    { icon: "thermometer", title: "IV Treatments & Vitamin Injections", desc: "Boost your energy, immunity, and overall wellness with essential vitamins and hydration.", urgent: false },
    { icon: "scissors", title: "Microneedling & Skin Boosters", desc: "Stimulate collagen production and improve skin texture, tone, and elasticity.", urgent: false }
  ],

  testimonials: [
    { name: "Shannon Washington", location: "Tracy, CA", stars: 5, text: "I’ve had nothing but a great experience here, I’ve been coming here since September of 2024 and I get top-notch service. I go to at least 7 medspas in the Bay Area, but Alyne Aesthetics is by far the greatest experience professionally AND personally. Gisselle does my Botox, Jen is an amazing owner and has never wavered as me as a customer and anyone else I’ve brought in here. She has always taken her time to explain the services and pricing. Her customer service is by far better than any of the Bay Area spas I have been to. The front desk Julianna is so nice and personable. Customer service is the most important part of a small business and she exceeds excellence in that! - Shannon Washington, S3CONCEPTS LLC" },
    { name: "Carrie H", location: "Tracy, CA", stars: 5, text: "Alyne Athletics is a standout in the esthetics industry, offering a wide range of services that include Botox, laser treatments, and advanced facial therapies. From the moment you enter, the professionalism of the staff is immediately evident. They are not only highly trained but also genuinely care about the well-being of their clients, creating a warm and inviting atmosphere.\n\nThe level of client care at Alyne Athletics is exceptional. The team takes the time to listen to your concerns and goals, ensuring that each treatment is tailored to your individual needs. This personalized approach fosters trust and confidence, making every visit feel special and valued.\n\nAlyne Athletics also utilizes the latest technology in esthetic treatments, ensuring clients receive the most effective and safe procedures available. Their equipment is state-of-the-art, enhancing the overall treatment experience and helping clients achieve the desired results efficiently.\n\nIn addition to their impressive services, Alyne Athletics offers an excellent selection of skincare products. These products are not only effective but also reasonably priced, making it easy for clients to maintain their skin health between appointments.\n\nOverall, Alyne Athletics excels in professionalism, attentive client care, and the use of innovative technology, all while providing high-quality skincare options at fair prices. For anyone looking to enhance their appearance and well-being, Alyne Athletics is a top-notch choice." },
    { name: "Kelsey Cover", location: "Tracy, CA", stars: 5, text: "Gisselle is absolutely amazing. So talented at her craft and just a wonderful human! She has done my Botox and microneedling. She is patient and listens intently to all concerns. She provides insight and suggestions based on her experience which is so helpful when you’re a beginner and learning all the possibilities within the industry. I get a bit woozy during the services and she goes out of her way to make me feel comfortable each time offering water, a fan, etc. The front desk staff are also incredible. So friendly and welcoming! Couldn’t recommend Alyne more!!" }
  ],

  trustBadges: [
    "Licensed & Insured", "5-Star Rated", "Free Consultations", "FDA-Approved Treatments", "Tues-Sat Open"
  ],

  stats: [
    { value: 5.0, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 121, label: "Happy Clients", suffix: "+", decimals: 0 },
    { value: 2, label: "Years Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "award", title: "Board-Certified Injectors", desc: "Our team consists of highly trained and certified professionals dedicated to your safety and results." },
    { icon: "shield-check", title: "FDA-Approved Treatments", desc: "We use only the safest, most effective, and FDA-approved products and technologies." },
    { icon: "clock", title: "Free Consultations", desc: "Discuss your aesthetic goals with our experts at no cost to create a personalized plan." },
    { icon: "dollar-sign", title: "Financing Available", desc: "Achieve your desired look with flexible payment options that fit your budget." },
    { icon: "sparkles", title: "Medical-Grade Products", desc: "Experience superior results with our curated selection of professional skincare products." },
    { icon: "heart", title: "Personalized Treatment Plans", desc: "Every treatment is tailored to your unique needs and desired outcomes for natural-looking results." }
  ],

  formServiceOptions: ["Neurotoxins (Botox®, Dysport®, Jeuveau)", "Dermal Fillers (Juvederm®, Restylane®)", "Sculptra®", "Skin Tightening (Xerf)", "Laser Treatments", "Laser Hair Removal", "HydraFacial", "VI Peel®", "Upneeq® Eye Lifting Drops", "NAD+ Injections", "Microneedling", "Klardie Skin Booster", "PRF & EZ Gel", "IV Treatments", "Vitamin B12 Injections", "Esthetic Treatments", "Hair Restoration", "Medical Weight Loss"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!