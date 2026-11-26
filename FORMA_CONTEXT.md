# FORMA_CONTEXT.md

The main source of project context and instructions for Forma. Read all of it before doing any development work, and update it when important decisions are made or features are built.

---

## Contents

- Part A: Website content and brand messaging (supplied by the owner, 2026-11-25)
- Part B: Product, history and business objectives
- Part C: Technical architecture
- Part D: Advertising strategy
- Part E: Product functionality status
- Part F: Immediate priorities
- Part G: Current state and decision log

---

## Part A: Website content and brand messaging

### 1. Brand positioning

**Forma – Your AI Business Assistant**

Forma helps small businesses handle customer enquiries and business communications more efficiently.

The tone should be:

- Confident, not arrogant.
- Professional, not corporate.
- Friendly, not childish.
- Simple, not overly technical.
- Trustworthy, not exaggerated.

We are selling a practical business solution, not AI technology for its own sake.

### 2. Homepage: Hero section

- **Headline:** Run your business. Let Forma handle the busywork.
- **Supporting text:** Meet your AI business assistant. Forma helps you manage customer enquiries and everyday business tasks, giving you more time to focus on your customers and your work.
- **Primary button:** Get Early Access
- **Secondary button:** See How It Works
- **Small supporting statement:** Built for small businesses. Designed to make everyday work easier.

### 3. The problem we solve

- **Heading:** Running a small business is busy enough.
- **Text:**
  Between customer enquiries, missed messages and everyday administration, it's easy for things to get on top of you.
  You started your business to do what you do best — not spend all day managing messages and paperwork.
  Forma is designed to make those everyday tasks easier.

### 4. Introducing Forma

- **Heading:** Meet your new business assistant.
- **Text:**
  Forma brings AI-powered business assistance into one simple place.
  Spend less time dealing with routine administration and more time focusing on your customers and growing your business.

### 5. Product demonstration section

- **Heading:** Everything starts with a simpler way to work.
- Show genuine screenshots of the actual Forma product.
- Potential sections, **only where the functionality exists**:
  - Customer enquiries.
  - Enquiry management.
  - AI-assisted responses.
  - Business activity overview.
  - Everyday business assistance.
- Each section should explain a real benefit rather than simply listing technical features.

### 6. Why Forma?

- **Heading:** More time for the work that matters.
- Potential benefit statements:
  - Spend less time on repetitive administration.
  - Keep customer enquiries organised.
  - Make everyday business communication easier.
  - Have AI assistance available when you need it.
- **Only publish claims supported by working product functionality.**

### 7. Final call to action

- **Heading:** Your business deserves a helping hand.
- **Text:** Discover a simpler way to manage your everyday business tasks with Forma.
- **Button:** Get Early Access

### 8. Brand identity

The brand should feel:

- Modern.
- Dependable.
- Intelligent.
- Approachable.
- Premium.

Avoid describing Forma as a magical solution or claiming it runs an entire business automatically.

**Central message:** Forma gives small business owners a smarter way to manage their everyday work.

---

## Part B: Product, history and business objectives

_Supplied by the owner, 2026-11-26._

### Product history

- Forma is an AI Business Assistant for small businesses.
- The original aim was a modular AI assistant that helps small businesses with everyday work, especially customer enquiries and communication.
- Target users include businesses that run on little more than a phone number, with no established website or sophisticated software. The goal is to make AI useful and accessible to them.
- Forma is the chosen product and brand name.
- **The product is still being developed and validated.** Never present it as a fully established commercial product.

### Business objectives

The founder wants to build entrepreneurial skills while building a commercially viable business.

Initial constraints:

- Maximum initial risk budget: **£500**.
- Available time: **7–10 hours per week**.
- Demand is **not yet proven**.
- Focus: build an MVP and validate customer demand.

Priorities, in order:

1. Identify real problems small businesses face.
2. Build a product that solves a genuine problem.
3. Test it with potential customers.
4. Establish willingness to pay.
5. Develop a sustainable business model.
6. Scale only when there is evidence of demand.

Notes:

- AI automation for small businesses was explored earlier as a business opportunity.
- **The pricing model is not decided.** Don't assume one.

---

## Part C: Technical architecture

### Development history (historical observations only, unverified)

- The founder previously worked on Forma locally with VS Code, Node.js, Claude, HTML and JavaScript.
- An earlier VS Code screenshot showed these folders:
  - `ai-business-assistant`
  - `forma-claude-integration`
- Files visible at the time: `index.html`, `server.mjs`, `.env`, `package.json`, `package-lock.json`.
- This suggests a plain HTML/JS front end with a small Node server (`server.mjs`) calling the Claude API, with the key in `.env`. **That is an inference, not confirmed.**

### Rules

- The real source code hasn't been found in any GitHub repository this project's Claude sessions can reach. It is probably only on the founder's computer.
- `santhrupthk/santhrupth1` holds unrelated projects. It is **not** the Forma product.
- The OKTAI Computer Next.js project is **not** Forma.
- **Don't rebuild the product until the original code has been checked.**
- **Never commit `.env`**: it likely holds the Claude API key. Add it to `.gitignore` before the project goes on GitHub.

---

## Part D: Advertising strategy

### Fixed rule for both adverts

Both adverts **must** open with the same first six seconds: **a plumber receives a phone notification.** This opening is fixed. Don't change it or suggest alternatives.

### Advertisement 1: problem/solution-led

The detailed sequence is not yet recorded here.

### Advertisement 2: product-led demonstration (agreed sequence)

| Time | Content |
|------|---------|
| 0–6s | The same plumber receives the phone notification. |
| 6–8s | Transition from the phone notification to the actual Forma website. |
| 8–11s | The actual homepage and brand proposition. |
| 11–16s | The actual dashboard, a real customer enquiry and a genuine AI assistant interaction, if implemented. |
| 16–20s | Forma logo and brand reveal. Text: "Your AI Business Assistant". CTA: "Get Early Access". |

### Style requirements

- It should look like a premium software commercial.
- **No** AI-generated people, talking avatars, fake dashboards or fabricated functionality.
- Use real screen recordings of the actual website.

### Previous marketing experiments (not current campaign results)

- Instagram advert: 221 views, 11 profile visits reported.
- YouTube Video Views campaign explored.
- Viewmax.io used for video creation.
- CapCut considered for editing.
- ElevenLabs considered for voiceovers.

---

## Part E: Product functionality status

The vision is known, but **which features actually work has not been verified.** Don't invent functionality.

After inspecting the original code, fill this in:

| Feature | Status (works / partial / planned / to build) | Notes |
|---------|-----------------------------------------------|-------|
| Customer enquiries | unknown | |
| Enquiry management | unknown | |
| AI-assisted responses | unknown | |
| Business activity overview | unknown | |
| Everyday business assistance | unknown | |

Then propose a realistic MVP.

---

## Part F: Immediate priorities

1. Locate the original Forma source code.
2. Get the local website running.
3. Inspect the existing product.
4. Improve its visual quality.
5. Establish which features genuinely work.
6. Create an authentic product demonstration.
7. Complete the two advertisements.
8. Validate interest from real small businesses.

### Working with the founder

- Give simple, practical, step-by-step technical instructions.
- Don't overwhelm them with complicated technical explanations.
- Preserve existing work wherever possible.

---

## Part G: Current state and decision log

### Current state (2026-11-26)

- No Forma code exists in `santhrupthk/santhrupth1` (any branch) or `santhrupthk/basic-timelapse`.
- The founder's computer is not yet connected to Claude cloud sessions. No folders are shared through Remote Control.
- Website sections 5 and 6 and advert seconds 11–16 depend on working product features. Until those are verified, they stay as placeholders.

### Decision log

| Date | Decision | Notes |
|------|----------|-------|
| 2026-11-25 | Created this file from the owner's website and brand brief (Part A). | |
| 2026-11-26 | Added history, objectives, technical history, ad strategy, functionality status and priorities (Parts B–G). | Next: locate the original local code. |
