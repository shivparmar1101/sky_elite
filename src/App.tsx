import { useState } from 'react'
import {
  Menu,
  X,
  Shield,
  Clock,
  Star,
  Headphones,
  Plane,
  Globe,
  Award,
  ChevronDown,
  ChevronUp,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Share2,
  Link2,
} from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Story', href: '#story' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'Rates', href: '#rates' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

const fleet = [
  {
    name: 'Light Jet',
    capacity: '6-7 Passengers',
    range: '1,500 NM',
    speed: '480 kts',
    desc: 'Perfect for short business trips and regional travel with efficiency.',
  },
  {
    name: 'Midsize Jet',
    capacity: '7-9 Passengers',
    range: '2,800 NM',
    speed: '470 kts',
    desc: 'Ideal for coast-to-coast flights with spacious cabin comfort.',
  },
  {
    name: 'Heavy Jet',
    capacity: '10-16 Passengers',
    range: '4,500 NM',
    speed: '490 kts',
    desc: 'Long-range international travel with luxury amenities and full galley.',
  },
]

const plans = [
  {
    name: 'Single Trip',
    price: '$5,900',
    unit: 'per flight hour',
    features: [
      'On-demand booking',
      'Any aircraft type',
      'Ground transportation',
      'In-flight catering',
      '24/7 concierge',
    ],
    featured: false,
  },
  {
    name: 'Membership',
    price: '$4,200',
    unit: 'per flight hour',
    features: [
      'Priority scheduling',
      'Guaranteed availability',
      'Dedicated account manager',
      'Complimentary upgrades',
      'Global lounge access',
      'Empty leg discounts',
    ],
    featured: true,
  },
  {
    name: 'Charter Card',
    price: '$150K',
    unit: 'prepaid balance',
    features: [
      'Locked-in rates',
      'No expiration',
      'Transferable credits',
      'Premium fleet access',
      'VIP terminal access',
    ],
    featured: false,
  },
]

const benefits = [
  {
    icon: Shield,
    title: 'Safety First',
    desc: 'Every aircraft undergoes rigorous safety checks. ARG/US and Wyvern certified pilots.',
  },
  {
    icon: Clock,
    title: 'Time Efficient',
    desc: 'Skip terminals. Fly on your schedule with as little as 4 hours notice.',
  },
  {
    icon: Star,
    title: 'Luxury Experience',
    desc: 'Handcrafted interiors, gourmet catering, and personalized service at 40,000 feet.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    desc: 'Access to 5,000+ airports worldwide. No runway is too short.',
  },
  {
    icon: Award,
    title: 'Trusted by Leaders',
    desc: 'Serving Fortune 500 executives, celebrities, and discerning travelers since 2010.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    desc: 'Dedicated concierge team available around the clock for any request.',
  },
]

const testimonials = [
  {
    name: 'James Mitchell',
    role: 'CEO, Mitchell Capital',
    text: 'SkyElite transformed how I travel. The time savings alone justify the investment. Simply unmatched service.',
    rating: 5,
  },
  {
    name: 'Sarah Chen',
    role: 'Partner, Chen & Associates',
    text: 'From booking to landing, everything was flawless. The crew remembered my preferences from day one.',
    rating: 5,
  },
  {
    name: 'David Rodriguez',
    role: 'Founder, TechVentures',
    text: 'We switched from commercial first class and never looked back. The flexibility is invaluable for our business.',
    rating: 5,
  },
]

const faqs = [
  {
    q: 'How far in advance do I need to book?',
    a: 'We recommend booking 24-48 hours in advance, but we can accommodate same-day requests with as little as 4 hours notice depending on aircraft availability.',
  },
  {
    q: 'What is included in the flight price?',
    a: 'Your charter includes the aircraft, crew, fuel, landing fees, standard catering, and ground transportation coordination. No hidden fees.',
  },
  {
    q: 'Can I bring pets on board?',
    a: 'Absolutely. We welcome pets of all sizes. Just let us know during booking so we can prepare the cabin accordingly.',
  },
  {
    q: 'What happens if my schedule changes?',
    a: 'We understand flexibility is key. Members enjoy free schedule changes up to 4 hours before departure. Single trip bookings can be rescheduled with 24 hours notice.',
  },
  {
    q: 'Do you offer international flights?',
    a: 'Yes, we operate worldwide. Our heavy jets can reach destinations across continents with customs and immigration handled seamlessly.',
  },
]

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleScroll = () => {
    setScrolled(window.scrollY > 50)
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll)
  }

  return (
    <div className="min-h-screen bg-gray-50 font-['Inter',sans-serif]">
      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 shadow-md backdrop-blur-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
          <span
            className={`text-2xl font-semibold transition-colors ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            SkyElite
          </span>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`transition-colors hover:text-gray-500 ${
                    scrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden rounded-full bg-white px-5 py-2 text-sm font-medium text-gray-900 shadow-sm transition-all hover:bg-gray-100 md:block"
          >
            Book Now
          </a>

          <button
            className={`md:hidden ${scrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {mobileOpen && (
          <div className="absolute inset-x-0 top-full z-20 mx-4 rounded-2xl bg-white/95 p-6 shadow-lg backdrop-blur-sm md:hidden">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-gray-900 transition-colors hover:text-gray-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 block rounded-full bg-gray-900 px-5 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-gray-800"
            >
              Book Now
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/80">
            Private Jets
          </p>
          <h1 className="leading-none tracking-tighter">
            <span className="block text-6xl font-normal text-white/60 md:text-7xl lg:text-8xl">
              Premium.
            </span>
            <span className="block text-6xl font-normal text-white md:text-7xl lg:text-8xl" style={{ marginTop: '-12px' }}>
              Accessible.
            </span>
          </h1>
          <p className="mx-auto mt-6 mb-8 max-w-2xl text-lg text-white/80 md:text-xl">
            Your dedication deserves recognition.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="#story"
              className="rounded-full border border-white/40 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Discover
            </a>
            <a
              href="#contact"
              className="rounded-full bg-white px-6 py-3 font-medium text-gray-900 transition-all hover:bg-gray-100"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-400">
                Our Story
              </p>
              <h2 className="mb-6 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
                Redefining Private Aviation
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-gray-600">
                Founded in 2010, SkyElite was born from a simple belief: luxury air travel
                should be exceptional, not exclusive. We saw an industry stuck in tradition
                and decided to rewrite the rules.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                Today, we serve thousands of clients worldwide — from Fortune 500 executives
                to families celebrating milestones. Every flight is a promise: safety,
                comfort, and a experience that exceeds expectations.
              </p>
              <div className="flex gap-12">
                <div>
                  <p className="text-3xl font-bold text-gray-900">15+</p>
                  <p className="text-sm text-gray-500">Years of Excellence</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">50K+</p>
                  <p className="text-sm text-gray-500">Flights Completed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">98%</p>
                  <p className="text-sm text-gray-500">Client Retention</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-200">
                <div className="flex h-full items-center justify-center">
                  <Plane size={80} className="text-gray-400" />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-gray-900 p-6 text-white shadow-xl">
                <p className="text-2xl font-bold">5,000+</p>
                <p className="text-sm text-gray-300">Airports Worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-400">
              Our Fleet
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
              Aircraft for Every Journey
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {fleet.map((jet) => (
              <div
                key={jet.name}
                className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gray-100 transition-colors group-hover:bg-gray-900 group-hover:text-white">
                  <Plane size={28} />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{jet.name}</h3>
                <p className="mb-6 text-sm text-gray-500">{jet.desc}</p>
                <div className="space-y-2 border-t border-gray-100 pt-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Capacity</span>
                    <span className="font-medium text-gray-900">{jet.capacity}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Range</span>
                    <span className="font-medium text-gray-900">{jet.range}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Speed</span>
                    <span className="font-medium text-gray-900">{jet.speed}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rates Section */}
      <section id="rates" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-400">
              Pricing
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
              Simple, Transparent Rates
            </h2>
          </div>
          <div className="grid items-stretch gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 transition-all ${
                  plan.featured
                    ? 'bg-gray-900 text-white shadow-2xl scale-105'
                    : 'bg-gray-50 text-gray-900 hover:shadow-lg'
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-semibold text-gray-900 shadow">
                    Most Popular
                  </span>
                )}
                <h3 className="mb-2 text-xl font-semibold">{plan.name}</h3>
                <div className="mb-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                </div>
                <p className={`mb-8 text-sm ${plan.featured ? 'text-gray-300' : 'text-gray-500'}`}>
                  {plan.unit}
                </p>
                <ul className="mb-8 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <Star
                        size={14}
                        className={plan.featured ? 'text-white' : 'text-gray-900'}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block rounded-full py-3 text-center font-medium transition-all ${
                    plan.featured
                      ? 'bg-white text-gray-900 hover:bg-gray-100'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-400">
              Why SkyElite
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
              The SkyElite Difference
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100">
                  <b.icon size={24} className="text-gray-700" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{b.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-400">
              Testimonials
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl bg-gray-50 p-8">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-gray-900 text-gray-900" />
                  ))}
                </div>
                <p className="mb-6 text-gray-600 leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-3xl px-8">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-400">
              FAQ
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white shadow-sm transition-all"
              >
                <button
                  className="flex w-full items-center justify-between p-6 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="pr-4 font-medium text-gray-900">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp size={20} className="shrink-0 text-gray-500" />
                  ) : (
                    <ChevronDown size={20} className="shrink-0 text-gray-500" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="contact" className="bg-gray-900 py-24">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-400">
                Get in Touch
              </p>
              <h2 className="mb-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Ready to Fly?
              </h2>
              <p className="mb-8 text-lg text-gray-400">
                Tell us your destination and preferences. Our team will have a custom
                quote ready within 30 minutes.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-300">
                  <Phone size={20} className="text-gray-500" />
                  <span>+1 (800) 555-FLY</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <Mail size={20} className="text-gray-500" />
                  <span>charter@skyelite.com</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <MapPin size={20} className="text-gray-500" />
                  <span>New York · London · Dubai</span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-white/5 p-8 backdrop-blur-sm">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors focus:border-white/30"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors focus:border-white/30"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors focus:border-white/30"
                />
                <input
                  type="text"
                  placeholder="Destination"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors focus:border-white/30"
                />
                <textarea
                  placeholder="Tell us about your trip..."
                  rows={4}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors focus:border-white/30"
                />
                <button
                  type="submit"
                  className="w-full rounded-xl bg-white py-3 font-medium text-gray-900 transition-colors hover:bg-gray-100"
                >
                  Request Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-16">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid gap-12 md:grid-cols-4">
            <div>
              <span className="text-2xl font-semibold text-white">SkyElite</span>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                Premium private jet charter. Safety, luxury, and reliability — since 2010.
              </p>
              <div className="mt-6 flex gap-4">
                <a href="#" className="text-gray-500 transition-colors hover:text-white">
                  <Globe size={20} />
                </a>
                <a href="#" className="text-gray-500 transition-colors hover:text-white">
                  <Share2 size={20} />
                </a>
                <a href="#" className="text-gray-500 transition-colors hover:text-white">
                  <Link2 size={20} />
                </a>
                <a href="#" className="text-gray-500 transition-colors hover:text-white">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                Company
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#story" className="transition-colors hover:text-white">About Us</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Careers</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Press</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                Services
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#fleet" className="transition-colors hover:text-white">Fleet</a></li>
                <li><a href="#rates" className="transition-colors hover:text-white">Pricing</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Empty Legs</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Group Charters</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                Support
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#faq" className="transition-colors hover:text-white">FAQ</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Safety</a></li>
                <li><a href="#contact" className="transition-colors hover:text-white">Contact</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} SkyElite. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
