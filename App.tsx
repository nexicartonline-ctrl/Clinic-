import React, { useEffect, useState } from 'react';
import { 
  NAV_ITEMS, 
  TESTIMONIALS, 
  PHILOSOPHY_CARDS, 
  EXPERIENCE_CARDS, 
  ABOUT_CARDS, 
  SERVICES, 
  DOCTORS 
} from './constants';
import { SectionHeader } from './components/SectionHeader';
import { ImageCard } from './components/ImageCard';
import { Chatbot } from './components/Chatbot';

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-[60] bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-800 tracking-tight">
            ELITE <span className="text-teal-500">DENTAL</span>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-md active:scale-95">
              Book Appointment
            </button>
          </nav>

          <button 
            className="lg:hidden p-2 text-slate-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-white border-b border-slate-200 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                className="text-lg font-medium text-slate-700 border-b border-slate-50 pb-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold mt-2 shadow-lg">
              Book Appointment
            </button>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="home" className="relative h-[95vh] md:h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover scale-105"
          >
            <source src="https://res.cloudinary.com/dlkktoq16/video/upload/v1768807562/From_KlickPin_CF_STUDIO_FRACAS_-_Teeth_loop___Motion_design_Hard_surface_modeling_3d_art_niubce.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl text-white scroll-reveal reveal-left visible">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.05] text-shadow">
              Gentle, Trusted Dental Care
            </h1>
            <p className="text-xl md:text-2xl text-blue-50 mb-12 opacity-90 leading-relaxed font-light max-w-2xl">
              Precision meets comfort. Experience the next generation of dentistry with our world-class specialist team.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="px-12 py-5 bg-white text-blue-900 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl shadow-blue-900/30 active:scale-95">
                BOOK APPOINTMENT
              </button>
              <button className="px-12 py-5 border-2 border-white/40 text-white backdrop-blur-md rounded-full font-bold text-lg hover:bg-white/10 transition-all active:scale-95">
                OUR SERVICES
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / SOCIAL PROOF (Text-based) */}
      <section id="reviews" className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionHeader title="Patient Voices" subtitle="Hear from those who trust their smiles to us." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div 
                key={t.id} 
                className={`bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col scroll-reveal reveal-up delay-${(idx + 1) * 100}`}
              >
                <div className="mb-6 flex justify-between items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-10 h-10 text-blue-100" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.34315 15.3602 2 17.017 2H20.017C21.6739 2 23.017 3.34315 23.017 5V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1 21L1 18C1 16.8954 1.89543 16 3 16H6C6.55228 16 7 15.5523 7 15V9C7 8.44772 6.55228 8 6 8H3C1.89543 8 1 7.10457 1 6V5C1 3.34315 2.34315 2 4 2H7C8.65685 2 10 3.34315 10 5V15C10 18.3137 7.31371 21 4 21H1Z" />
                  </svg>
                  <div className="flex gap-0.5 text-yellow-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                </div>

                <h4 className="text-xl font-bold mb-4 text-slate-800">{t.title}</h4>
                <p className="text-slate-600 italic mb-8 flex-grow leading-relaxed text-lg">"{t.text}"</p>
                
                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg shadow-inner">
                      {t.author[0]}
                    </div>
                    <div>
                      <div className="font-bold text-slate-800">{t.author}</div>
                      <div className="text-[10px] uppercase text-teal-500 font-bold tracking-[0.2em]">Loyal Patient</div>
                    </div>
                  </div>
                  <div className="bg-teal-50 text-teal-600 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase flex items-center gap-2 border border-teal-100">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                    </span>
                    Verified
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="relative py-40 md:py-60 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/valueprop/1920/1080" 
            alt="Happy Patient" 
            className="w-full h-full object-cover scale-110 scroll-reveal reveal-zoom"
          />
          <div className="absolute inset-0 bg-blue-900/75 backdrop-blur-[2px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white max-w-4xl scroll-reveal reveal-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-10 text-shadow leading-tight">Your Journey to a Perfect Smile Starts Here</h2>
          <p className="text-xl md:text-2xl text-blue-50 mb-14 leading-relaxed opacity-90 font-light">
            We blend artistry with clinical excellence to provide dental care that feels as good as it looks. 
            Join over 5,000 happy patients who have transformed their lives through Elite Dental.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="px-12 py-5 bg-white text-blue-900 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl active:scale-95">
              START YOUR JOURNEY
            </button>
            <button className="px-12 py-5 border border-white/40 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all active:scale-95">
              VIEW OUR RESULTS
            </button>
          </div>
        </div>
      </section>

      {/* CARE PHILOSOPHY */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionHeader title="OUR CARE PHILOSOPHY" subtitle="A commitment to excellence and empathy in every procedure." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {PHILOSOPHY_CARDS.map((card, idx) => (
              <ImageCard 
                key={card.id} 
                title={card.title} 
                description={card.description} 
                image={card.image}
                className={`delay-${(idx % 4 + 1) * 100}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* OUR EXPERIENCE */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionHeader title="OUR EXPERIENCE" subtitle="Decades of clinical precision at your service." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXPERIENCE_CARDS.map((card, idx) => (
              <ImageCard 
                key={card.id} 
                title={card.title} 
                description={card.description} 
                image={card.image}
                overlayClass="bg-teal-900/40"
                className={`delay-${(idx + 1) * 100} reveal-up`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* THE CLINIC STANDARD */}
      <section className="relative py-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://picsum.photos/seed/standard/1920/1080" alt="Clinic Interior" className="w-full h-full object-cover scale-105" />
        </div>
        <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-20 items-center">
          <div className="scroll-reveal reveal-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight">THE CLINIC STANDARD</h2>
            <div className="space-y-8 text-blue-50 text-xl leading-relaxed opacity-80 font-light">
              <p className="border-l-4 border-teal-400 pl-6">We maintain hospital-grade sterilization protocols, ensuring that your health and safety are never compromised.</p>
              <p className="border-l-4 border-blue-500 pl-6">Every member of our team is trained in the latest ethical guidelines, prioritizing your long-term health.</p>
              <p className="border-l-4 border-teal-400 pl-6">Consistent treatment quality is our hallmark, from routine care to complex restorative surgery.</p>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl p-12 rounded-[3rem] border border-white/10 scroll-reveal reveal-right delay-200 shadow-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-16 h-16 text-teal-400 mb-8 opacity-40" viewBox="0 0 24 24">
              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.34315 15.3602 2 17.017 2H20.017C21.6739 2 23.017 3.34315 23.017 5V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1 21L1 18C1 16.8954 1.89543 16 3 16H6C6.55228 16 7 15.5523 7 15V9C7 8.44772 6.55228 8 6 8H3C1.89543 8 1 7.10457 1 6V5C1 3.34315 2.34315 2 4 2H7C8.65685 2 10 3.34315 10 5V15C10 18.3137 7.31371 21 4 21H1Z" />
            </svg>
            <p className="text-3xl text-white italic font-light mb-10 leading-snug">
              "The professionalism here is unmatched. They restored my confidence and my health. Best medical experience I've ever had."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center font-bold">DM</div>
              <div>
                <div className="font-bold text-white uppercase tracking-widest text-sm">David Miller</div>
                <div className="text-teal-400 text-xs font-semibold uppercase tracking-widest">Patient Since 2018</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT THE CLINIC */}
      <section id="about" className="py-24 relative overflow-hidden bg-slate-50">
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader title="ABOUT THE CLINIC" subtitle="Our history of care and vision for the future." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {ABOUT_CARDS.map((card, idx) => (
              <ImageCard 
                key={card.id} 
                title={card.title} 
                description={card.description} 
                image={card.image}
                height="h-[500px]"
                className={`delay-${(idx + 1) * 150}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section id="services" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionHeader title="OUR SERVICES" subtitle="Specialized treatments tailored to your aesthetic and health goals." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((s, idx) => (
              <ImageCard 
                key={s.id} 
                title={s.name} 
                description={s.description} 
                image={s.image}
                buttonLabel="BOOK CONSULTATION"
                height="h-[450px]"
                overlayClass="bg-slate-900/60"
                className={`delay-${(idx % 3 + 1) * 100} reveal-up`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* MEET OUR DOCTORS */}
      <section id="doctors" className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionHeader title="MEET OUR DOCTORS" subtitle="Elite specialists dedicated to your smile." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {DOCTORS.map((d, idx) => (
              <div 
                key={d.id} 
                className={`relative group h-[600px] rounded-[3rem] overflow-hidden shadow-2xl scroll-reveal reveal-zoom delay-${(idx + 1) * 200}`}
              >
                <img src={d.image} alt={d.name} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/40 to-transparent flex flex-col justify-end p-12 text-white">
                  <div className="text-teal-400 font-bold uppercase tracking-[0.2em] text-xs mb-3">{d.qualification}</div>
                  <h3 className="text-4xl font-bold mb-2 group-hover:-translate-y-1 transition-transform duration-500">{d.name}</h3>
                  <p className="text-blue-100 text-xl mb-6 opacity-90">{d.specialization}</p>
                  <div className="flex items-center gap-3 text-sm font-semibold mb-8 py-2.5 px-5 bg-white/10 backdrop-blur-md rounded-2xl self-start border border-white/5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-teal-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {d.experience}+ Years Clinical Excellence
                  </div>
                  <button className="w-full bg-white text-blue-900 py-5 rounded-[1.5rem] font-bold text-lg hover:bg-blue-50 transition-all active:scale-95 shadow-xl">
                    BOOK APPOINTMENT
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT THE CLINIC */}
      <section className="py-24 relative bg-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader title="VISIT THE CLINIC" subtitle="Located in the heart of the dental medical district." />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-10 scroll-reveal reveal-left">
              <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-slate-100 border border-slate-50 group hover:border-blue-100 transition-colors duration-500">
                <h4 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-4">
                  <div className="p-3 bg-blue-50 rounded-2xl text-blue-600 group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  Location
                </h4>
                <p className="text-slate-500 mb-8 text-xl leading-relaxed">123 Medical Center Way, Suite 400<br />Downtown Metro, DM 54321</p>
                <button className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-black transition-all active:scale-95 shadow-xl shadow-slate-200">
                  GET DIRECTIONS
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </button>
              </div>

              <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-slate-100 border border-slate-50 group hover:border-teal-100 transition-colors duration-500">
                <h4 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-4">
                  <div className="p-3 bg-teal-50 rounded-2xl text-teal-600 group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  Speak With Us
                </h4>
                <p className="text-slate-500 mb-8 text-xl leading-relaxed">(555) 0123-4567<br />Mon-Sat: 09:00 - 19:00</p>
                <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all active:scale-95 shadow-xl shadow-blue-100">
                  CALL NOW
                </button>
              </div>
            </div>

            <div className="h-[700px] rounded-[3rem] overflow-hidden shadow-2xl scroll-reveal reveal-right delay-200 border-8 border-white group">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjgiVw!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Elite Dental Clinic Map"
                className="grayscale contrast-125 brightness-90 group-hover:grayscale-0 transition-all duration-1000"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative pt-32 pb-12 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://picsum.photos/seed/footer/1920/1080" alt="Medical Abstract" className="w-full h-full object-cover scale-110 scroll-reveal reveal-zoom" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="space-y-8 scroll-reveal reveal-up">
              <div className="text-3xl font-bold tracking-tight">
                ELITE <span className="text-teal-400">DENTAL</span>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed font-light">
                Setting the global standard for oral healthcare excellence. Our mission is to transform lives, one smile at a time.
              </p>
              <div className="flex gap-5">
                {[1, 2, 3].map((_, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:-translate-y-1">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="scroll-reveal reveal-up delay-100">
              <h4 className="text-xl font-bold mb-10 tracking-widest uppercase text-slate-500 text-sm">Navigation</h4>
              <ul className="space-y-6">
                {NAV_ITEMS.map(item => (
                  <li key={item.href}>
                    <a href={item.href} className="text-slate-400 hover:text-white transition-colors text-lg flex items-center gap-2 group">
                      <span className="w-0 h-0.5 bg-teal-400 group-hover:w-4 transition-all duration-300"></span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="scroll-reveal reveal-up delay-200">
              <h4 className="text-xl font-bold mb-10 tracking-widest uppercase text-slate-500 text-sm">HQ Office</h4>
              <ul className="space-y-8 text-slate-400">
                <li className="flex items-start gap-4">
                  <div className="p-2 bg-blue-500/10 rounded-xl text-blue-400">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <span className="text-lg leading-relaxed">123 Medical Center Way, Suite 400<br />Downtown, Metro City</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-2 bg-teal-500/10 rounded-xl text-teal-400">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-lg">(555) 0123-4567</span>
                </li>
              </ul>
            </div>

            <div className="scroll-reveal reveal-up delay-300">
              <h4 className="text-xl font-bold mb-10 tracking-widest uppercase text-slate-500 text-sm">Clinic Schedule</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex justify-between py-2 border-b border-white/5"><span>Mon - Fri:</span> <span>09:00 - 19:00</span></li>
                <li className="flex justify-between py-2 border-b border-white/5"><span>Saturday:</span> <span>09:00 - 17:00</span></li>
                <li className="flex justify-between py-2 text-teal-400 font-bold"><span>Emergency:</span> <span>24/7 Response</span></li>
              </ul>
              <button className="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl mt-10 hover:bg-blue-700 transition-all active:scale-95 shadow-xl shadow-blue-900/40">
                BOOK APPOINTMENT
              </button>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-12 text-center text-slate-500 text-sm tracking-[0.2em] font-medium">
            © {new Date().getFullYear()} ELITE DENTAL CLINIC | PREMIUM ORAL CARE | LICENSE #DE-98765
          </div>
        </div>
      </footer>

      {/* STICKY BOTTOM MOBILE CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 p-5 bg-white/90 backdrop-blur-xl border-t border-slate-100 flex gap-4 shadow-[0_-10px_30px_rgba(0,0,0,0.08)]">
        <button className="flex-1 bg-slate-900 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-lg">
          CALL NOW
        </button>
        <button className="flex-1 bg-blue-600 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-lg">
          BOOK NOW
        </button>
      </div>

      <Chatbot />
    </div>
  );
};

export default App;