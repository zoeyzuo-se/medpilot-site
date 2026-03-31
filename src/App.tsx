import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Shield,
    Search,
    DollarSign,
    FileCheck,
    Calculator,
    ClipboardCheck,
    Zap,
    Clock,
    Brain,
    ArrowRight,
    CheckCircle,
    ChevronRight,
    Activity,
    Lock,
    MessageSquare,
} from "lucide-react";
import { useState } from "react";

/* ─── Navbar ─── */
function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/60">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-700 flex items-center justify-center">
                        <Activity className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-900"
                        style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>
                        MedPilot
                    </span>
                </div>
                <div className="hidden md:flex items-center gap-8 text-sm text-slate-600">
                    <a href="#features" className="hover:text-emerald-700 transition-colors">Features</a>
                    <a href="#architecture" className="hover:text-emerald-700 transition-colors">How It Works</a>
                    <a href="#servers" className="hover:text-emerald-700 transition-colors">Platform</a>
                    <a href="#faq" className="hover:text-emerald-700 transition-colors">FAQ</a>
                </div>
                <div className="hidden md:flex items-center gap-3">
                    <Button variant="ghost" className="text-sm text-slate-600">Log in</Button>
                    <Button className="text-sm bg-emerald-700 hover:bg-emerald-800 text-white">
                        Get Started <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                </div>
                <button
                    className="md:hidden text-slate-600"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {mobileOpen
                            ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
                    </svg>
                </button>
            </div>
            {mobileOpen && (
                <div className="md:hidden bg-white border-t border-slate-200 px-6 py-4 space-y-3">
                    <a href="#features" className="block text-sm text-slate-600">Features</a>
                    <a href="#architecture" className="block text-sm text-slate-600">How It Works</a>
                    <a href="#servers" className="block text-sm text-slate-600">Platform</a>
                    <a href="#faq" className="block text-sm text-slate-600">FAQ</a>
                    <Separator />
                    <Button className="w-full bg-emerald-700 hover:bg-emerald-800 text-white text-sm">Get Started</Button>
                </div>
            )}
        </nav>
    );
}

/* ─── Hero ─── */
function Hero() {
    return (
        <section className="pt-32 pb-20 px-6 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-emerald-100/50 blur-3xl" />
            <div className="absolute top-40 right-0 w-80 h-80 rounded-full bg-amber-100/40 blur-3xl" />
            <div className="relative max-w-4xl mx-auto text-center">
                <Badge variant="outline" className="mb-6 px-4 py-1.5 text-xs tracking-wide border-emerald-200 bg-emerald-50 text-emerald-800">
                    <Zap className="w-3 h-3 mr-1.5" /> AI-Powered Insurance Intelligence
                </Badge>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.08]">
                    Stop guessing.
                    <br />
                    <span className="text-emerald-700">Know your coverage.</span>
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                    MedPilot reads your policy, checks your claims, estimates costs, and tells you
                    if you need pre-authorization — all in plain English, in seconds.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 h-12 text-base shadow-lg shadow-emerald-700/20">
                        Try MedPilot Free <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button size="lg" variant="outline" className="px-8 h-12 text-base border-slate-300 text-slate-700 hover:bg-slate-50">
                        Watch Demo
                    </Button>
                </div>
                <p className="mt-4 text-xs text-slate-400">No credit card required · HIPAA-ready architecture</p>
            </div>

            {/* Chat mockup */}
            <div className="relative max-w-3xl mx-auto mt-16">
                <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/60 border border-slate-200/80 overflow-hidden">
                    {/* Title bar */}
                    <div className="bg-slate-50 border-b border-slate-200/60 px-5 py-3 flex items-center gap-3">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-amber-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                        <span className="text-xs text-slate-400 ml-2">MedPilot Assistant</span>
                    </div>
                    {/* Messages */}
                    <div className="p-6 space-y-4">
                        <div className="flex justify-end">
                            <div className="bg-emerald-700 text-white px-4 py-2.5 rounded-2xl rounded-br-sm max-w-md text-sm text-left">
                                Will my knee surgery be covered under my Gold plan?
                            </div>
                        </div>
                        <div className="flex justify-start">
                            <div className="bg-slate-100 text-slate-700 px-4 py-3 rounded-2xl rounded-bl-sm max-w-lg text-sm text-left space-y-2">
                                <p className="font-medium text-slate-900">Here's what I found for your Gold PPO plan:</p>
                                <div className="space-y-1.5 text-[13px]">
                                    <p className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> <span><strong>Covered</strong> — Arthroscopic knee surgery (CPT 29881) is an in-network benefit</span></p>
                                    <p className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> <span><strong>Your cost:</strong> ~$850 (you've met $1,200 of your $2,000 deductible)</span></p>
                                    <p className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" /> <span><strong>Prior auth required</strong> — I can help you start the request</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Input */}
                    <div className="border-t border-slate-200/60 px-5 py-3 flex items-center gap-3">
                        <div className="flex-1 bg-slate-50 rounded-lg px-4 py-2 text-sm text-slate-400">
                            Ask about your coverage…
                        </div>
                        <div className="w-9 h-9 bg-emerald-700 rounded-lg flex items-center justify-center">
                            <ArrowRight className="w-4 h-4 text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─── Stats ribbon ─── */
function Stats() {
    const stats = [
        { value: "2.4s", label: "Average response time" },
        { value: "50+", label: "Policy documents supported" },
        { value: "$1,200", label: "Avg. savings found per user" },
        { value: "99.2%", label: "Coverage accuracy rate" },
    ];
    return (
        <section className="py-12 bg-slate-900">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((s) => (
                    <div key={s.label} className="text-center">
                        <p className="text-3xl font-bold text-white">{s.value}</p>
                        <p className="text-sm text-slate-400 mt-1">{s.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ─── Problem ─── */
function Problem() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <Badge variant="outline" className="mb-4 text-xs border-red-200 bg-red-50 text-red-700">The Problem</Badge>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                        Insurance is designed to protect you.<br />
                        <span className="text-slate-400">But nobody can understand it.</span>
                    </h2>
                    <p className="mt-6 text-slate-500 leading-relaxed">
                        It's 10 PM. You need a knee surgery. You open your insurer's website — and immediately face
                        a maze of PDFs, benefit grids, prior-auth forms, and customer service hold music. Three hours
                        later, you still don't know if you're covered.
                    </p>
                    <p className="mt-4 text-slate-500 leading-relaxed">
                        Millions of people leave money on the table every year — not because they aren't covered, but
                        because navigating insurance is a full-time job nobody signed up for.
                    </p>
                </div>
                <div className="space-y-4">
                    {[
                        { icon: Clock, text: "Average 3+ hours researching coverage questions", color: "text-red-500" },
                        { icon: DollarSign, text: "$1,800 per year left unclaimed due to confusion", color: "text-red-500" },
                        { icon: FileCheck, text: "62% of prior-auth denials are preventable", color: "text-red-500" },
                    ].map(({ icon: Icon, text, color }) => (
                        <Card key={text} className="border-red-100 bg-red-50/30 shadow-none">
                            <CardContent className="flex items-center gap-4 p-5">
                                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                                    <Icon className={`w-5 h-5 ${color}`} />
                                </div>
                                <p className="text-sm text-slate-700">{text}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─── Features ─── */
function Features() {
    const features = [
        {
            icon: Search,
            title: "Policy Intelligence",
            desc: "Semantic search across your policy documents. Ask in plain English, get precise answers with source citations.",
            color: "bg-emerald-100 text-emerald-700",
        },
        {
            icon: DollarSign,
            title: "Real-Time Cost Estimates",
            desc: "CPT-level procedure pricing adjusted for your deductible status. Know your out-of-pocket before you schedule.",
            color: "bg-amber-100 text-amber-700",
        },
        {
            icon: ClipboardCheck,
            title: "Claim Tracking",
            desc: "Live view of your deductible progress, copays paid, and remaining OOP exposure for the plan year.",
            color: "bg-sky-100 text-sky-700",
        },
        {
            icon: Calculator,
            title: "Benefits Calculator",
            desc: "HSA contribution optimizer, FSA burn-down alerts, and OOP maximum projections based on planned procedures.",
            color: "bg-violet-100 text-violet-700",
        },
        {
            icon: FileCheck,
            title: "Prior Auth Checker",
            desc: "Instantly know if a procedure needs pre-authorization, verify provider network status, and get the required docs checklist.",
            color: "bg-rose-100 text-rose-700",
        },
        {
            icon: Shield,
            title: "Plan Comparison",
            desc: "Compare Gold, Silver, and Bronze plans side by side. Understand trade-offs in premiums, deductibles, and coverage limits.",
            color: "bg-teal-100 text-teal-700",
        },
    ];

    return (
        <section id="features" className="py-24 px-6 bg-slate-50/50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4 text-xs border-emerald-200 bg-emerald-50 text-emerald-800">Features</Badge>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                        Everything you need in one conversation
                    </h2>
                    <p className="mt-4 text-slate-500">
                        Five specialized AI servers work together to give you a complete picture of your insurance — no phone calls, no PDF digging.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {features.map((f) => (
                        <Card key={f.title} className="bg-white hover:shadow-lg transition-shadow duration-300 border-slate-200/60 shadow-sm">
                            <CardContent className="p-6">
                                <div className={`w-11 h-11 rounded-xl ${f.color} flex items-center justify-center mb-4`}>
                                    <f.icon className="w-5 h-5" />
                                </div>
                                <h3 className="font-semibold text-slate-900 text-lg mb-2">{f.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─── How It Works ─── */
function HowItWorks() {
    const steps = [
        { step: "01", title: "Ask a question", desc: "Type your insurance question in plain English — like talking to a knowledgeable friend.", icon: MessageSquare },
        { step: "02", title: "AI agents activate", desc: "Your query is routed to specialized servers that search policies, check costs, and verify coverage.", icon: Brain },
        { step: "03", title: "Get your answer", desc: "A clear, actionable response streams back in seconds with costs, coverage details, and next steps.", icon: Zap },
    ];
    return (
        <section id="architecture" className="py-24 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4 text-xs border-emerald-200 bg-emerald-50 text-emerald-800">How It Works</Badge>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                        Three steps. Zero headaches.
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((s) => (
                        <div key={s.step} className="relative">
                            <span className="text-6xl font-bold text-emerald-100 absolute -top-4 -left-2"
                                style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>{s.step}</span>
                            <div className="relative pt-10">
                                <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center mb-4">
                                    <s.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">{s.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─── Architecture / Servers ─── */
function ServerSection() {
    const servers = [
        {
            port: "8001",
            name: "medpilot-rag",
            label: "Policy Intelligence",
            desc: "Ingests insurance PDFs, EOBs, and FAQs. Chunks and embeds with sentence-transformers, stores in FAISS. Retrieves the most relevant policy clauses via semantic search.",
            tool: "policy_lookup(query, plan_id, top_k)",
            color: "border-l-emerald-500",
            bgColor: "bg-emerald-50",
        },
        {
            port: "8002",
            name: "medpilot-cost",
            label: "Procedure Pricing",
            desc: "CPT code lookups with negotiated in-network rates and out-of-network pricing. Adjusts patient responsibility based on current deductible stage.",
            tool: "cost_lookup(cpt_code, plan_id, deductible_met)",
            color: "border-l-amber-500",
            bgColor: "bg-amber-50",
        },
        {
            port: "8003",
            name: "medpilot-claims",
            label: "Claims History",
            desc: "Per-patient claim ledger tracking deductible applied, copays paid, and OOP accumulator. Provides the context for 'how much more will I owe?'",
            tool: "claim_history(member_id, plan_year)",
            color: "border-l-sky-500",
            bgColor: "bg-sky-50",
        },
        {
            port: "8004",
            name: "medpilot-benefits",
            label: "Benefits Calculator",
            desc: "OOP maximum estimator, HSA contribution optimizer, and FSA burn-down alerts. Projects when you hit your annual cap.",
            tool: "benefit_calc(member_id, projected_procedures[])",
            color: "border-l-violet-500",
            bgColor: "bg-violet-50",
        },
        {
            port: "8005",
            name: "medpilot-priorauth",
            label: "Prior Auth & Eligibility",
            desc: "Checks if a procedure needs pre-authorization, verifies in-network provider status by NPI, returns required documentation checklist.",
            tool: "check_prior_auth(cpt_code, plan_id, npi)",
            color: "border-l-rose-500",
            bgColor: "bg-rose-50",
        },
    ];

    return (
        <section id="servers" className="py-24 px-6 bg-slate-50/50">
            <div className="max-w-5xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4 text-xs border-emerald-200 bg-emerald-50 text-emerald-800">Platform</Badge>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                        Five specialized AI servers.<br />One seamless experience.
                    </h2>
                    <p className="mt-4 text-slate-500">
                        Each MCP server is purpose-built for a specific domain, then orchestrated together to answer complex insurance questions.
                    </p>
                </div>
                <div className="space-y-4">
                    {servers.map((s) => (
                        <Card key={s.port} className={`border-l-4 ${s.color} shadow-sm hover:shadow-md transition-shadow`}>
                            <CardContent className="p-6 flex flex-col md:flex-row md:items-start gap-4">
                                <div className="flex-shrink-0">
                                    <div className={`w-14 h-14 rounded-xl ${s.bgColor} flex items-center justify-center`}>
                                        <span className="text-xs font-bold text-slate-600 font-mono">:{s.port}</span>
                                    </div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-baseline gap-3 flex-wrap">
                                        <h3 className="text-lg font-semibold text-slate-900">{s.label}</h3>
                                        <code className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded font-mono">{s.name}</code>
                                    </div>
                                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">{s.desc}</p>
                                    <div className="mt-3 flex items-center gap-2">
                                        <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">MCP Tool</span>
                                        <code className="text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md font-mono">{s.tool}</code>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─── Tech stack pills ─── */
function TechStack() {
    const techs = ["Python", "FastAPI", "MCP Protocol", "FAISS", "sentence-transformers", "Streaming SSE", "uv"];
    return (
        <section className="py-16 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-sm uppercase tracking-wider text-slate-400 mb-6 font-medium">Built With</p>
                <div className="flex flex-wrap justify-center gap-3">
                    {techs.map((t) => (
                        <span key={t} className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 shadow-sm">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─── Key Terms ─── */
function KeyTerms() {
    const terms = [
        { term: "OOP", full: "Out-of-Pocket Maximum", desc: "The most you pay in a plan year before insurance covers 100%." },
        { term: "HSA", full: "Health Savings Account", desc: "Tax-free account for high-deductible plans. Funds roll over and can be invested." },
        { term: "FSA", full: "Flexible Spending Account", desc: "Tax-free medical expense account. Use-it-or-lose-it by year-end." },
        { term: "CPT", full: "Current Procedural Terminology", desc: "Standard numeric codes identifying medical procedures for billing." },
        { term: "NPI", full: "National Provider Identifier", desc: "Unique 10-digit number assigned to every US healthcare provider." },
        { term: "EOB", full: "Explanation of Benefits", desc: "Post-claim document showing what was covered and what you owe." },
    ];
    return (
        <section className="py-24 px-6 bg-slate-50/50">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <Badge variant="outline" className="mb-4 text-xs border-slate-300 bg-white text-slate-600">Glossary</Badge>
                    <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Insurance terms, decoded</h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {terms.map((t) => (
                        <Card key={t.term} className="bg-white shadow-sm border-slate-200/60">
                            <CardContent className="p-5">
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className="text-lg font-bold text-emerald-700">{t.term}</span>
                                    <span className="text-xs text-slate-400">— {t.full}</span>
                                </div>
                                <p className="text-sm text-slate-500">{t.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─── FAQ ─── */
function FAQ() {
    const faqs = [
        { q: "Is MedPilot a replacement for my insurance company?", a: "No. MedPilot helps you understand your existing insurance coverage. It reads your policy documents and claim history to give you clear, actionable answers — but all coverage decisions are still made by your insurer." },
        { q: "Is my health data secure?", a: "MedPilot is built with a HIPAA-ready architecture. All data is processed locally within your environment, and no personal health information is sent to external servers. For the demo, all data is mocked." },
        { q: "What insurance plans are supported?", a: "MedPilot works with any plan that provides standard policy documents (PDFs, EOBs). The demo includes Gold, Silver, and Bronze plan templates." },
        { q: "How accurate are the cost estimates?", a: "Cost estimates are based on negotiated in-network rates and your current deductible status. They represent the best available projection, not a guarantee — actual costs may vary based on specific provider contracts." },
        { q: "Can MedPilot submit prior-auth requests?", a: "Currently, MedPilot identifies when prior authorization is needed and provides the required documentation checklist. Automated submission is on the roadmap." },
    ];
    return (
        <section id="faq" className="py-24 px-6">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <Badge variant="outline" className="mb-4 text-xs border-emerald-200 bg-emerald-50 text-emerald-800">FAQ</Badge>
                    <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Common questions</h2>
                </div>
                <Accordion type="single" collapsible className="space-y-2">
                    {faqs.map((f, i) => (
                        <AccordionItem key={i} value={`faq-${i}`} className="bg-white border border-slate-200/60 rounded-xl px-6 shadow-sm">
                            <AccordionTrigger className="text-left text-sm font-medium text-slate-800 hover:no-underline py-5">
                                {f.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-sm text-slate-500 pb-5 leading-relaxed">
                                {f.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}

/* ─── CTA ─── */
function CTA() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-4xl mx-auto relative">
                <div className="bg-emerald-700 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
                    {/* Decorative shapes */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600 rounded-full -translate-y-1/2 translate-x-1/3" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-800 rounded-full translate-y-1/2 -translate-x-1/4" />
                    <div className="relative z-10">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                            Ready to understand your insurance?
                        </h2>
                        <p className="mt-4 text-emerald-200 text-lg max-w-xl mx-auto">
                            Join thousands of patients who stopped guessing about their coverage and started making informed decisions.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="lg" className="bg-white text-emerald-800 hover:bg-emerald-50 px-8 h-12 text-base font-semibold shadow-lg">
                                Get Started Free <ChevronRight className="w-4 h-4 ml-1" />
                            </Button>
                            <Button size="lg" variant="outline" className="border-emerald-400 text-white hover:bg-emerald-600 px-8 h-12 text-base">
                                <Lock className="w-4 h-4 mr-2" /> Book a Demo
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─── Footer ─── */
function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white py-12 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-7 h-7 rounded-md bg-emerald-700 flex items-center justify-center">
                                <Activity className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-lg font-bold tracking-tight text-slate-900"
                                style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>MedPilot</span>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Your AI-powered medical insurance co-pilot. Making insurance understandable for everyone.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-3">Product</h4>
                        <ul className="space-y-2 text-sm text-slate-500">
                            <li><a href="#features" className="hover:text-emerald-700 transition-colors">Features</a></li>
                            <li><a href="#servers" className="hover:text-emerald-700 transition-colors">Platform</a></li>
                            <li><a href="#" className="hover:text-emerald-700 transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-emerald-700 transition-colors">Roadmap</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-3">Resources</h4>
                        <ul className="space-y-2 text-sm text-slate-500">
                            <li><a href="#" className="hover:text-emerald-700 transition-colors">Documentation</a></li>
                            <li><a href="#faq" className="hover:text-emerald-700 transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-emerald-700 transition-colors">API Reference</a></li>
                            <li><a href="#" className="hover:text-emerald-700 transition-colors">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-3">Legal</h4>
                        <ul className="space-y-2 text-sm text-slate-500">
                            <li><a href="#" className="hover:text-emerald-700 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-emerald-700 transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-emerald-700 transition-colors">HIPAA Compliance</a></li>
                        </ul>
                    </div>
                </div>
                <Separator className="my-8" />
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-slate-400">
                        © 2026 MedPilot. Built for demonstration purposes. Not a substitute for professional insurance or medical advice.
                    </p>
                    <div className="flex items-center gap-1">
                        {["Python", "FastAPI", "MCP", "RAG", "SSE"].map((t) => (
                            <Badge key={t} variant="secondary" className="text-[10px] bg-slate-100 text-slate-500 font-normal">{t}</Badge>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

/* ─── App ─── */
export default function App() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <Hero />
            <Stats />
            <Problem />
            <Features />
            <HowItWorks />
            <ServerSection />
            <TechStack />
            <KeyTerms />
            <FAQ />
            <CTA />
            <Footer />
        </div>
    );
}
