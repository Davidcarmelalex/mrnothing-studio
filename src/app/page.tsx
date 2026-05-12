"use client";
import Link from "next/link";
import { Bot, Zap, MessageSquare, Settings, Plus } from "lucide-react";

const sampleAgents = [
  { id: "a1", name: "Atlas — Sales Agent", category: "Sales", personality: "Sharp, direct, persuasive", status: "active", color: "blue" },
  { id: "a2", name: "Nova — Support", category: "Support", personality: "Patient, empathetic, precise", status: "active", color: "emerald" },
  { id: "a3", name: "Rex — Research", category: "Research", personality: "Analytical, thorough, concise", status: "draft", color: "purple" },
];

const steps = [
  { n: "01", title: "Name & Category", desc: "Give your agent an identity and define its primary role." },
  { n: "02", title: "Personality & Tone", desc: "Sharp? Warm? Formal? Configure how your agent communicates." },
  { n: "03", title: "Skills & Specialization", desc: "Choose capabilities — web search, email, calendar, CRM." },
  { n: "04", title: "Test & Deploy", desc: "Live preview, then deploy as API endpoint or embed." },
];

export default function StudioHome() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="border-b border-white/8 px-6 py-4 flex items-center justify-between">
        <div>
          <span className="font-bold text-white">MrNothing <span className="text-purple-400">Studio</span></span>
        </div>
        <Link href="/build" className="flex items-center gap-2 rounded border border-purple-500/40 bg-purple-500/10 px-4 py-2 text-xs text-purple-300 hover:bg-purple-500/20 transition-colors">
          <Plus className="h-3.5 w-3.5" /> Build Agent
        </Link>
      </nav>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h1 className="text-5xl font-bold md:text-6xl">Build your agent.<br/><span className="text-purple-400">Define your empire.</span></h1>
        <p className="mt-6 text-xl text-silver max-w-2xl mx-auto">Design, configure, and deploy AI agents that work exactly the way you think — no engineering required.</p>
        <Link href="/build" className="inline-block mt-10 rounded-lg border border-purple-500/40 bg-purple-500/20 px-8 py-3.5 font-medium text-purple-200 hover:bg-purple-500/30 transition-colors">
          Start Building
        </Link>
      </section>

      <section className="border-t border-white/8 bg-white/2 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-xl font-bold text-white mb-8">How it works</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="rounded-xl border border-white/8 bg-black p-6">
                <span className="text-3xl font-bold text-purple-500/30">{s.n}</span>
                <h3 className="font-semibold text-white mt-3 mb-2">{s.title}</h3>
                <p className="text-sm text-silver">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {sampleAgents.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-xl font-bold text-white mb-8">Your agents</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {sampleAgents.map((a) => (
              <Link key={a.id} href={`/agent/${a.id}`} className="rounded-xl border border-white/8 bg-white/3 p-5 hover:border-purple-500/20 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <Bot className="h-5 w-5 text-purple-400" />
                  <span className={`text-xs px-2 py-0.5 rounded-full ${a.status === "active" ? "bg-emerald-500/20 text-emerald-400" : "bg-white/10 text-silver"}`}>{a.status}</span>
                </div>
                <h3 className="font-semibold text-white mb-1">{a.name}</h3>
                <p className="text-xs text-purple-400 mb-2">{a.category}</p>
                <p className="text-xs text-silver/60">{a.personality}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
