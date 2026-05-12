# MrNothing Studio

> Build your agent. Define your empire.

[![License: MIT](https://img.shields.io/badge/License-MIT-gold.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![Part of](https://img.shields.io/badge/MrNothing-Ecosystem-purple)](https://github.com/Davidcarmelalex/MrNothing)

**MrNothing Studio** is a bespoke AI agent builder — a digital atelier where you intuitively design, configure, and deploy custom AI agents that perfectly mirror your operational requirements and creative vision.

No engineering required. Build an agent in minutes.

---

## What You Can Build

| Agent Type | Example |
|-----------|---------|
| Sales agent | Qualifies leads, follows up, books meetings |
| Support agent | Handles tickets, resolves FAQs, escalates |
| Research agent | Monitors sources, summarizes, reports |
| Personal assistant | Manages schedule, drafts emails, tracks tasks |
| Custom | Define skills, personality, tone, specialization |

---

## Architecture

```
mrnothing-studio/
├── src/app/
│   ├── page.tsx         Agent gallery — browse your builds
│   ├── build/           Agent builder (step-by-step wizard)
│   ├── agent/[id]/      Individual agent chat + config
│   └── deploy/          Deployment options (API, embed, webhook)
├── lib/
│   ├── agent-engine.ts  Core agent execution runtime
│   └── prompt-builder.ts Dynamic system prompt generator
└── tests/
```

---

## Stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · OpenAI / Ollama runtime

---

## Quick Start

```bash
git clone https://github.com/Davidcarmelalex/mrnothing-studio
cd mrnothing-studio && npm install
cp .env.example .env.local
npm run dev
```

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
