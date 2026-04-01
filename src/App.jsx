import React, { useState, useEffect, useRef } from 'react';
import {
    Megaphone,
    Users,
    Headphones,
    Briefcase,
    BarChart3,
    Share2,
    Mail,
    ArrowRight,
    ExternalLink,
    ChevronRight
} from 'lucide-react';

// Custom component for scroll reveal animations
const RevealOnScroll = ({ children, className = "", delay = 0, direction = "up" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Run once
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    let baseClass = "transition-all duration-1000 ease-out";
    let hiddenClass = "opacity-0 ";

    if (direction === "up") hiddenClass += "translate-y-12";
    if (direction === "down") hiddenClass += "-translate-y-12";
    if (direction === "left") hiddenClass += "-translate-x-12";
    if (direction === "right") hiddenClass += "translate-x-12";

    let visibleClass = "opacity-100 translate-y-0 translate-x-0";

    return (
        <div
            ref={ref}
            className={`${className} ${baseClass} ${isVisible ? visibleClass : hiddenClass}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

const App = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const whatsappNumber = "2349163460203";
    const whatsappText = "Hi Nnenna, I just saw your portfolio. I'd like to discuss a project. Are you available?";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

    // Handle scroll for navbar glass effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-black text-gray-200 font-sans selection:bg-white/30 overflow-x-hidden">

            {/* --- Ambient Background Effects (Web3 Vibe) --- */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[150px]"></div>
                <div className="absolute top-[40%] left-[50%] translate-x-[-50%] w-[60%] h-[20%] bg-gray-500/10 rounded-full blur-[100px] rotate-45"></div>
            </div>

            {/* --- Navigation --- */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
                <div className="container mx-auto px-6 md:px-12">
                    <div className={`flex items-center justify-between ${scrolled ? 'bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl' : 'bg-transparent'} rounded-2xl px-6 py-4 transition-all duration-500`}>
                        <div className="text-xl font-bold tracking-tighter text-white">
                            NNENNA<span className="text-gray-500">.</span>
                        </div>
                        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-400">
                            <a href="#services" className="hover:text-white transition-colors">Expertise</a>
                            <a href="#about" className="hover:text-white transition-colors">About</a>
                            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                        </div>
                        <a href={whatsappLink} target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-black bg-white rounded-full hover:bg-gray-200 transition-colors">
                            Let's Talk
                        </a>
                        {/* Mobile Menu Button (Simplified for this build) */}
                        <button
                            type="button"
                            className="md:hidden text-gray-300 hover:text-white"
                            onClick={() => setMenuOpen((open) => !open)}
                            aria-expanded={menuOpen}
                            aria-controls="mobile-nav"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                        </button>
                    </div>
                    <div
                        id="mobile-nav"
                        className={`${menuOpen ? "block" : "hidden"} md:hidden mt-3 rounded-2xl border border-white/10 bg-black/70 backdrop-blur-md`}
                    >
                        <div className="flex flex-col px-6 py-4 space-y-3 text-sm font-medium text-gray-300">
                            <a href="#services" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">Expertise</a>
                            <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">About</a>
                            <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">Contact</a>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noreferrer"
                                onClick={() => setMenuOpen(false)}
                                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-black bg-white rounded-full hover:bg-gray-200 transition-colors"
                            >
                                Let's Talk
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* --- Main Content --- */}
            <main className="relative z-10">

                {/* Hero Section */}
                <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6">
                    <div className="container mx-auto max-w-5xl text-center">
                        <RevealOnScroll delay={0} direction="down">
                            <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium text-gray-300 mb-8 uppercase tracking-widest">
                                <span className="w-2 h-2 rounded-full bg-gray-400 mr-2 animate-pulse"></span>
                                Available for new projects
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll delay={150}>
                            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 mb-8 leading-tight">
                                Digital Architect & <br className="hidden md:block" /> Growth Strategist.
                            </h1>
                        </RevealOnScroll>

                        <RevealOnScroll delay={300}>
                            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                                I am <span className="text-white font-semibold">Nnenna Emefo</span>. I build digital presence, drive growth through strategic marketing, and streamline operations with top-tier administrative and customer care.
                            </p>
                        </RevealOnScroll>

                        <RevealOnScroll delay={450}>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group">
                                    Start a Project
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white backdrop-blur-sm rounded-full font-semibold hover:bg-white/10 transition-colors flex items-center justify-center">
                                    Explore Expertise
                                </a>
                            </div>
                        </RevealOnScroll>
                    </div>
                </section>

                {/* About Section - Glassmorphism Split */}
                <section id="about" className="py-24 px-6">
                    <div className="container mx-auto max-w-6xl">
                        <div className="rounded-3xl bg-white/[0.02] border border-white/[0.05] p-1 md:p-8 backdrop-blur-lg">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8">

                                {/* Image/Abstract Graphic representation */}
                                <RevealOnScroll direction="right">
                                    <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center group">
                                        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-10 transition-all duration-500 group-hover:bg-black/0"></div>
                                        {/* Abstract shapes representing a portrait */}
                                        <div className="relative z-0 w-full h-full flex items-center justify-center">
                                            <div className="w-48 h-48 rounded-full border border-white/20 absolute animate-[spin_10s_linear_infinite]"></div>
                                            <div className="w-64 h-64 rounded-full border border-dashed border-white/10 absolute animate-[spin_15s_linear_infinite_reverse]"></div>
                                            <Users className="w-24 h-24 text-gray-500" />
                                        </div>
                                        <div className="absolute bottom-6 left-6 z-20 backdrop-blur-md bg-black/40 border border-white/10 p-4 rounded-xl">
                                            <p className="text-white font-medium">Nnenna Emefo</p>
                                            <p className="text-xs text-gray-400">Digital Specialist</p>
                                        </div>
                                    </div>
                                </RevealOnScroll>

                                {/* Text Content */}
                                <RevealOnScroll direction="left" delay={200}>
                                    <div>
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Redefining the digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">experience.</span></h2>
                                        <p className="text-gray-400 mb-6 leading-relaxed">
                                            With a deep understanding of both the administrative backbone and the digital forefront of modern businesses, I help brands and individuals navigate the complex digital landscape.
                                        </p>
                                        <p className="text-gray-400 mb-8 leading-relaxed">
                                            Whether it's setting up your first professional profile, scaling a massive ad campaign, or ensuring your customers feel heard and valued, I bring a unique, multidisciplinary approach to problem-solving.
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                                <div className="text-3xl font-bold text-white mb-1">100%</div>
                                                <div className="text-sm text-gray-500">Client Satisfaction</div>
                                            </div>
                                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                                <div className="text-3xl font-bold text-white mb-1">Omni</div>
                                                <div className="text-sm text-gray-500">Channel Marketing</div>
                                            </div>
                                        </div>
                                    </div>
                                </RevealOnScroll>

                            </div>
                        </div>
                    </div>
                </section>

                {/* Services / Expertise Section */}
                <section id="services" className="py-24 px-6 relative">
                    <div className="container mx-auto max-w-6xl">
                        <RevealOnScroll>
                            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                                <div>
                                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Competencies</h2>
                                    <p className="text-gray-400 max-w-lg">Leveraging a multifaceted skill set to scale businesses, optimize operations, and engage audiences in the Web3 and Web2 space.</p>
                                </div>
                            </div>
                        </RevealOnScroll>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Service Card 1 */}
                            <RevealOnScroll delay={100} className="h-full">
                                <div className="group relative h-full p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md hover:bg-white/[0.06] transition-all duration-500 overflow-hidden">
                                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Share2 className="w-24 h-24" />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/5">
                                            <Share2 className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-3">Social Media Management</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                            End-to-end management of your digital persona. I create, optimize, and manage social media accounts for both individuals and businesses to ensure maximum visibility and engagement.
                                        </p>
                                        <ul className="space-y-2 text-sm text-gray-500">
                                            <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Profile Optimization</li>
                                            <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Content Strategy</li>
                                            <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Community Building</li>
                                        </ul>
                                    </div>
                                </div>
                            </RevealOnScroll>

                            {/* Service Card 2 */}
                            <RevealOnScroll delay={200} className="h-full">
                                <div className="group relative h-full p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md hover:bg-white/[0.06] transition-all duration-500 overflow-hidden">
                                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Megaphone className="w-24 h-24" />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/5">
                                            <BarChart3 className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-3">Digital Marketing & Ads</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                            Data-driven advertising campaigns that convert. Proficient in running targeted adverts across various social media and digital platforms to maximize your ROI.
                                        </p>
                                        <ul className="space-y-2 text-sm text-gray-500">
                                            <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Paid Social Ads</li>
                                            <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Conversion Tracking</li>
                                            <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Analytics & Reporting</li>
                                        </ul>
                                    </div>
                                </div>
                            </RevealOnScroll>

                            {/* Service Card 3 */}
                            <RevealOnScroll delay={300} className="h-full md:col-span-2 lg:col-span-1">
                                <div className="group relative h-full p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md hover:bg-white/[0.06] transition-all duration-500 overflow-hidden">
                                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Headphones className="w-24 h-24" />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/5">
                                            <Briefcase className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-3">Admin & Customer Care</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                            Bridging the gap between businesses and their clients. I provide stellar administrative support and act as the frontline representative to ensure client satisfaction and operational efficiency.
                                        </p>
                                        <ul className="space-y-2 text-sm text-gray-500">
                                            <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Client Onboarding</li>
                                            <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Operations Management</li>
                                            <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Support Ticketing</li>
                                        </ul>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-24 px-6 relative">
                    <div className="container mx-auto max-w-4xl text-center">
                        <RevealOnScroll>
                            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">Let's build something <br className="hidden md:block" /> extraordinary.</h2>
                        </RevealOnScroll>

                        <RevealOnScroll delay={150}>
                            <p className="text-gray-400 mb-12 max-w-xl mx-auto">
                                Ready to elevate your digital presence or streamline your business operations? Reach out and let's discuss how we can work together.
                            </p>
                        </RevealOnScroll>

                        <RevealOnScroll delay={300}>
                            <form
                                name="contact"
                                method="POST"
                                data-netlify="true"
                                netlify-honeypot="bot-field"
                                className="max-w-md mx-auto space-y-4 text-left relative z-20"
                            >
                                <input type="hidden" name="form-name" value="contact" />
                                <p className="hidden">
                                    <label>
                                        Don't fill this out if you're human: <input name="bot-field" />
                                    </label>
                                </p>
                                <div>
                                    <input
                                        name="name"
                                        type="text"
                                        placeholder="Your Name"
                                        required
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all"
                                    />
                                </div>
                                <div>
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="Your Email"
                                        required
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        name="message"
                                        placeholder="Tell me about your project or needs..."
                                        rows={4}
                                        required
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all resize-none"
                                    ></textarea>
                                </div>
                                <a href={whatsappLink} target="_blank" rel="noreferrer" className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors flex justify-center items-center gap-2">
                                    Send Message <ExternalLink className="w-4 h-4" />
                                </a>
                            </form>
                        </RevealOnScroll>
                    </div>
                </section>

            </main>

            {/* Footer */}
            <footer className="border-t border-white/10 bg-black py-8 relative z-10">
                <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between">
                    <div className="text-xl font-bold tracking-tighter text-white mb-4 md:mb-0">
                        NNENNA<span className="text-gray-500">.</span>
                    </div>

                    <div className="text-sm text-gray-600">
                        © {new Date().getFullYear()} Nnenna Emefo. All rights reserved.
                    </div>

                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                            <Mail className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                            <Share2 className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default App;
