import { GraduationCap, Globe, Users, Award, BookOpen, Mic, Handshake, UserCheck, MapPin, Quote } from 'lucide-react';

export const metadata = {
    title: 'Impact | AI Architect Portfolio',
    description: 'Teaching, mentoring, publications, and ecosystem impact in AI and data science.',
};

const universities = [
    'UMass Amherst', 'Northern Kentucky University', 'VIT University', 'PVP Siddhartha', 'JECRC University'
];

const globalPlatforms = [
    'DeepLearning.AI (Pie & AI)', 'Berlin School of Business & Innovation', 'Cloud Computing Conference (Boussias)'
];

const trainingPartners = [
    'Great Learning', 'Wiley', 'Verzeo', 'Analytics Vidhya', 'Kaggle'
];

const impactMetrics = [
    { value: '10+', label: 'Years AI/ML Experience', icon: GraduationCap },
    { value: '2', label: 'Publications', icon: BookOpen },
    { value: '500+', label: 'Teaching Hours', icon: Mic },
    { value: '18+', label: 'Guest Lectures', icon: GraduationCap },
    { value: '10+', label: 'Partners', icon: Handshake },
    { value: '1,000+', label: 'Learners', icon: Users },
    { value: '200+', label: 'Mentoring Sessions', icon: UserCheck },
    { value: '7', label: 'Countries', icon: MapPin },
];

const testimonials = [
    {
        quote: "Anudeep is incredibly insightful, listening carefully and offering technical yet straightforward comments that are truly beneficial for interview preparation.",
        author: "Michael",
        source: "via ADPList"
    },
    {
        quote: "Extremely insightful discussion. Anudeep's depth of knowledge in Data and AI is evident, and his willingness to openly share his expertise is commendable.",
        author: "Shashank H.V.",
        source: "via Topmate"
    },
    {
        quote: "His tailored advice on skills, job applications, and interviews was practical and insightful, leaving me confident and motivated. Highly recommended!",
        author: "Baran Khazaee",
        source: "via ADPList"
    }
];

export default function ImpactPage() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-accent-glow/5 to-background pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                        <Award className="text-accent" size={18} />
                        <span className="text-sm font-medium text-accent">Global Recognition</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-outfit mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
                            Teaching & Global Impact
                        </span>
                    </h1>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        Recognized by universities, AI organizations, and global platforms for advancing practical AI education, applied innovation, and workforce development.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {/* Universities */}
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 transition-colors">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-accent/10">
                                <GraduationCap className="text-accent" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Universities</h3>
                        </div>
                        <p className="text-sm text-gray-400 mb-4">
                            Invited to deliver lectures and workshops on AI, ML, CV, and data-driven innovation.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {universities.map((uni) => (
                                <span key={uni} className="px-3 py-1.5 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20">
                                    {uni}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Global Platforms */}
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 transition-colors">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-accent-secondary/10">
                                <Globe className="text-accent-secondary" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Global AI Platforms</h3>
                        </div>
                        <p className="text-sm text-gray-400 mb-4">
                            Speaker and contributor at international AI forums and conferences.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {globalPlatforms.map((platform) => (
                                <span key={platform} className="px-3 py-1.5 text-xs font-medium rounded-full bg-accent-secondary/10 text-accent-secondary border border-accent-secondary/20">
                                    {platform}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Training Partners */}
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-glow/30 transition-colors">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-emerald-glow/10">
                                <Users className="text-emerald-glow" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Training Partners</h3>
                        </div>
                        <p className="text-sm text-gray-400 mb-4">
                            Instructor and mentor for structured AI/ML programs.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {trainingPartners.map((partner) => (
                                <span key={partner} className="px-3 py-1.5 text-xs font-medium rounded-full bg-emerald-glow/10 text-emerald-300 border border-emerald-glow/20">
                                    {partner}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Impact Metrics */}
                <div className="mb-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {impactMetrics.map((metric, index) => (
                            <div
                                key={metric.label}
                                className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/5 border border-white/10 text-center hover:border-violet-glow/30 transition-all group"
                            >
                                <metric.icon className="mx-auto mb-2 text-violet-glow group-hover:scale-110 transition-transform" size={24} />
                                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{metric.value}</div>
                                <div className="text-xs text-gray-400">{metric.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Credibility-to-Conversion CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                        <a
                            href="mailto:anudeepsrib@gmail.com?subject=Speaking%20Inquiry"
                            className="px-6 py-3 bg-violet-glow/10 border border-violet-glow/20 text-violet-glow rounded-lg hover:bg-violet-glow/20 transition-all flex items-center justify-center gap-2 hover-lift"
                        >
                            Invite Me to Speak / Teach
                            <span className="text-xs">→</span>
                        </a>
                        <a
                            href="/assets/speaker-kit.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2 hover-lift"
                        >
                            Download Speaker Kit / One-Pager
                            <span className="text-xs">→</span>
                        </a>
                    </div>
                </div>

                {/* Mentoring Section */}
                <div className="mb-12">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Mentoring & Career Impact</h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            I guide learners and professionals through Great Learning, Topmate, ADPList, and global communities—helping them build strong foundations in AI, ML, data science, and cloud technologies.
                        </p>
                    </div>

                    {/* Mentorship CTAs - Above Testimonials */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <a
                            href="https://adplist.org/mentors/anudeep-sri-bathina"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-accent/10 border border-accent/20 text-accent rounded-lg hover:bg-accent/20 transition-all flex items-center justify-center gap-2 hover-lift"
                        >
                            See Mentoring Options
                            <span className="text-xs">→</span>
                        </a>
                        <a
                            href="https://adplist.org/mentors/anudeep-sri-bathina"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2 hover-lift"
                        >
                            Book a Session
                            <span className="text-xs">→</span>
                        </a>
                    </div>
                </div>

                {/* Testimonials */}
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:shadow-lg hover:shadow-accent/5 transition-all"
                        >
                            <Quote className="absolute top-4 right-4 text-accent/20" size={32} />
                            <p className="text-sm text-gray-400 mb-4 leading-relaxed italic">
                                &quot;{testimonial.quote}&quot;
                            </p>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center text-white text-xs font-bold">
                                    {testimonial.author[0]}
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-white">{testimonial.author}</div>
                                    <div className="text-xs text-gray-400">{testimonial.source}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mentorship CTAs - Below Testimonials */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <a
                        href="https://adplist.org/mentors/anudeep-sri-bathina"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-accent/10 border border-accent/20 text-accent rounded-lg hover:bg-accent/20 transition-all flex items-center justify-center gap-2 hover-lift"
                    >
                        See Mentoring Options
                        <span className="text-xs">→</span>
                    </a>
                    <a
                        href="https://adplist.org/mentors/anudeep-sri-bathina"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2 hover-lift"
                    >
                        Book a Session
                        <span className="text-xs">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
