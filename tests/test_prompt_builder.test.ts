import { buildSystemPrompt } from '../lib/prompt-builder';

const mockConfig = {
  name: 'Atlas',
  category: 'Sales',
  role: 'Qualify leads and book meetings',
  personality: 'Sharp and direct',
  skills: ['email', 'calendar', 'crm'],
  tone: 'Professional',
  specialization: 'B2B SaaS sales',
};

describe('buildSystemPrompt', () => {
  it('includes agent name', () => {
    const prompt = buildSystemPrompt(mockConfig);
    expect(prompt).toContain('Atlas');
  });

  it('includes all skills', () => {
    const prompt = buildSystemPrompt(mockConfig);
    expect(prompt).toContain('email');
    expect(prompt).toContain('calendar');
    expect(prompt).toContain('crm');
  });

  it('includes personality', () => {
    const prompt = buildSystemPrompt(mockConfig);
    expect(prompt).toContain('Sharp and direct');
  });
});
