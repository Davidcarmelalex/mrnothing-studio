/**
 * Dynamic system prompt generator for MrNothing Studio agents.
 * Builds a structured system prompt from agent configuration.
 */

export interface AgentConfig {
  name: string;
  category: string;
  role: string;
  personality: string;
  skills: string[];
  tone: string;
  specialization: string;
}

export function buildSystemPrompt(config: AgentConfig): string {
  return `You are ${config.name}, an AI agent specialized in ${config.category}.

## Role
${config.role}

## Personality
${config.personality}

## Communication Style
Tone: ${config.tone}
Specialization: ${config.specialization}

## Capabilities
${config.skills.map((s) => `- ${s}`).join("\n")}

## Operating Principles
- Be direct and actionable
- Stay within your defined scope
- Ask for clarification when needed
- Never fabricate data or make up facts
- Always confirm before taking irreversible actions`.trim();
}
