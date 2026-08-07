import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f14] text-white">
      {/* Navigation */}
              <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div className="text-xl font-bold tracking-wide">
            VANI<span className="text-cyan-400">.</span>
          </div>

          <div className="hidden gap-8 text-sm text-gray-300 md:flex">
                        <a href="#about" className="transition hover:text-cyan-400">
              About
            </a>
            <a href="#work" className="transition hover:text-cyan-400">
              Work
            </a>
            <a href="#ai-testing" className="transition hover:text-cyan-400">
              AI Testing
            </a>
             <a
    href="#leadership"
    className="transition hover:text-cyan-400"
  >
    Leadership
  </a>
            <a
  href="#experience"
  className="transition hover:text-cyan-400"
>
  Experience
</a>
<a
  href="#architecture"
  className="transition hover:text-cyan-400"
>
  Architecture
</a>
<a
  href="#ai-lab"
  className="transition hover:text-cyan-400"
>
  AI Lab
</a>
            <a href="#skills" className="transition hover:text-cyan-400">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-cyan-400">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          
          {/* Hero Content */}
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Senior SDET · Quality Engineering · Test Architecture
            </p>

            <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Engineering Quality.
              <span className="block text-cyan-400">
                Accelerating Testing with AI.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
              I build scalable quality engineering solutions that combine
              automation, test architecture, performance engineering, and
              AI-augmented testing to improve software quality and accelerate
              delivery.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#work"
                className="rounded-full bg-cyan-400 px-7 py-3 font-semibold text-black transition hover:bg-cyan-300"
              >
                Explore My Work
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/20 px-7 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Let's Connect
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-cyan-400/20 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Vani M - Senior SDET and Quality Engineering Leader"
                  width={500}
                  height={500}
                  priority
                  className="h-[500px] w-[380px] rounded-[1.5rem] object-cover object-top"
                />
              </div>

              <div className="absolute -bottom-5 -left-5 rounded-xl border border-white/10 bg-[#111820]/90 px-5 py-4 shadow-xl backdrop-blur">
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  Based in
                </p>
                <p className="mt-1 font-semibold">Visakhapatnam, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="border-y border-white/10 bg-[#0e141b]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
          
          <div className="border-b border-white/10 p-8 lg:border-b-0 lg:border-r">
            <p className="text-4xl font-bold text-cyan-400">11+</p>
            <p className="mt-2 text-sm text-gray-400">
              Years in Quality Engineering
            </p>
          </div>

          <div className="border-b border-white/10 p-8 lg:border-b-0 lg:border-r">
            <p className="text-4xl font-bold text-cyan-400">45 → 85%</p>
            <p className="mt-2 text-sm text-gray-400">
              Automation Coverage
            </p>
          </div>

          <div className="border-r border-white/10 p-8">
            <p className="text-4xl font-bold text-cyan-400">12h → 4h</p>
            <p className="mt-2 text-sm text-gray-400">
              Regression Execution
            </p>
          </div>

          <div className="p-8">
            <p className="text-4xl font-bold text-cyan-400">~50%</p>
            <p className="mt-2 text-sm text-gray-400">
              AI-Assisted Effort Reduction
            </p>
          </div>

        </div>
      </section>
      {/* Case Studies Section */}
<section
  id="work"
  className="border-t border-white/10 bg-[#0e141b]"
>
  <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

    {/* Section Header */}
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        Featured Work
      </p>

      <h2 className="mt-4 text-4xl font-bold md:text-5xl">
        Engineering challenges.
        <span className="block text-gray-500">
          Measurable quality outcomes.
        </span>
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-400">
        A selection of quality engineering initiatives where I worked across
        automation, API testing, performance engineering, cloud systems,
        and AI-assisted testing to solve complex engineering problems.
      </p>
    </div>

    {/* Case Study 1 */}
    <div className="mt-20 grid gap-10 lg:grid-cols-2 lg:items-center">

      <div>
        <div className="mb-6 flex flex-wrap gap-2">
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
            Test Leadership
          </span>

          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
            Automation Architecture
          </span>

          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
            API Testing
          </span>
        </div>

        <h3 className="text-3xl font-bold">
          Enterprise Employment Verification Platform
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          Test Lead · Enterprise Employment Verification
        </p>

        <p className="mt-6 leading-8 text-gray-400">
          Worked as a Test Lead on a complex employment verification platform,
          contributing across functional testing, API testing, UI automation,
          and automation framework development.
        </p>

        <p className="mt-4 leading-8 text-gray-400">
          Designed and developed automation capabilities from the ground up,
          improving regression coverage and release confidence across complex
          business workflows.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4">

          <div className="rounded-xl border border-white/10 bg-[#111820] p-5">
            <p className="text-3xl font-bold text-cyan-400">
              56
            </p>

            <p className="mt-2 text-sm text-gray-400">
              Complex forms promoted to production
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#111820] p-5">
            <p className="text-3xl font-bold text-cyan-400">
              0
            </p>

            <p className="mt-2 text-sm text-gray-400">
              Production defects
            </p>
          </div>

        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-[#111820] p-8">

        <p className="text-sm uppercase tracking-wider text-gray-500">
          Technology Stack
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "Java",
            "Angular",
            "GCP",
            "API Testing",
            "UI Automation",
            "Functional Testing",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-lg bg-white/5 px-4 py-3 text-sm text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">

          <p className="text-sm uppercase tracking-wider text-gray-500">
            Key Contribution
          </p>

          <p className="mt-4 leading-7 text-gray-400">
            Combined functional validation, API testing, and automation
            engineering to strengthen quality across complex enterprise
            workflows and support production-ready releases.
          </p>

        </div>

      </div>

    </div>


    {/* Case Study 2 */}
    <div className="mt-32 grid gap-10 lg:grid-cols-2 lg:items-center">

      <div className="order-2 rounded-2xl border border-white/10 bg-[#111820] p-8 lg:order-1">

        <p className="text-sm uppercase tracking-wider text-gray-500">
          Performance Engineering Journey
        </p>

        <div className="mt-8 flex items-center gap-4">

          <div className="rounded-xl border border-red-400/20 bg-red-400/10 px-5 py-4">
            <p className="text-2xl font-bold text-red-300">
              2 Users
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Initial stability
            </p>
          </div>

          <div className="text-2xl text-gray-600">
            →
          </div>

          <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-4">
            <p className="text-2xl font-bold text-cyan-300">
              500 Users
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Validated concurrency
            </p>
          </div>

        </div>

        <div className="mt-8 border-t border-white/10 pt-8">

          <p className="text-sm uppercase tracking-wider text-gray-500">
            Focus Areas
          </p>

          <div className="mt-5 flex flex-wrap gap-3">

            {[
              "API Performance",
              "Scalability",
              "SLA Validation",
              "Cloud Systems",
              "Load Testing",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-lg bg-white/5 px-4 py-3 text-sm text-gray-300"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>

      </div>


      <div className="order-1 lg:order-2">

        <div className="mb-6 flex flex-wrap gap-2">

          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
            Performance Engineering
          </span>

          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
            Cloud
          </span>

          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
            Scalability
          </span>

        </div>

        <h3 className="text-3xl font-bold">
          Cloud Compliance Performance Engineering
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          Test Lead · API Performance & Scalability
        </p>

        <p className="mt-6 leading-8 text-gray-400">
          Introduced API performance testing capabilities within the team
          from the ground up, focusing on complex business workflows and
          response-time optimization.
        </p>

        <p className="mt-4 leading-8 text-gray-400">
          Initial testing revealed severe stability issues, with application
          pods becoming unavailable even under approximately two concurrent
          users. Worked closely with developers, Technical Managers, Solution
          Architects, and Product Owners to understand system behavior and
          identify performance bottlenecks.
        </p>

        <p className="mt-4 leading-8 text-gray-400">
          Through iterative performance testing, analysis, and collaboration
          with engineering teams, the APIs were optimized to meet SLA
          expectations and support approximately 500 concurrent users.
        </p>

      </div>

    </div>


    {/* Case Study 3 */}
    <div className="mt-32 grid gap-10 lg:grid-cols-2 lg:items-center">

      <div>

        <div className="mb-6 flex flex-wrap gap-2">

          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
            Framework Architecture
          </span>

          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
            GCP
          </span>

          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
            Event-Driven Testing
          </span>

        </div>

        <h3 className="text-3xl font-bold">
          GCP Pub/Sub Test Automation Framework
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          Test Automation · Java · TestNG · GCP Pub/Sub
        </p>

        <p className="mt-6 leading-8 text-gray-400">
          Designed and developed a TestNG-based automation framework to
          validate asynchronous Pub/Sub messages triggered by form updates
          within a GCP-based application ecosystem.
        </p>

        <p className="mt-4 leading-8 text-gray-400">
          The framework enabled automated validation of event-driven workflows,
          helping the team verify that expected messages were published and
          processed correctly as part of end-to-end business flows.
        </p>

      </div>

      <div className="rounded-2xl border border-white/10 bg-[#111820] p-8">

        <p className="text-sm uppercase tracking-wider text-gray-500">
          Architecture Flow
        </p>

        <div className="mt-8 space-y-4">

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-gray-400">
              01
            </p>

            <p className="mt-1 font-semibold">
              Form Update
            </p>
          </div>

          <div className="text-center text-cyan-400">
            ↓
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-gray-400">
              02
            </p>

            <p className="mt-1 font-semibold">
              Application Event
            </p>
          </div>

          <div className="text-center text-cyan-400">
            ↓
          </div>

          <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
            <p className="text-sm text-cyan-300">
              03
            </p>

            <p className="mt-1 font-semibold">
              GCP Pub/Sub Message Validation
            </p>
          </div>

        </div>

      </div>

    </div>


    {/* Case Study 4 */}
    <div
      id="ai"
      className="mt-32 grid gap-10 rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-transparent p-8 lg:grid-cols-2 lg:p-12"
    >

      <div>

        <div className="mb-6 flex flex-wrap gap-2">

          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
            AI-Augmented Testing
          </span>

          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
            API Testing
          </span>

          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
            Karate
          </span>

        </div>

        <h3 className="text-3xl font-bold md:text-4xl">
          AI-Assisted Test Case Generation & Automation Maintenance
        </h3>

        <p className="mt-6 leading-8 text-gray-400">
          Used GitHub Copilot and ChatGPT as AI assistants to accelerate API
          test design, negative scenario generation, edge-case discovery,
          Karate feature creation, and automation maintenance.
        </p>

        <p className="mt-4 leading-8 text-gray-400">
          The workflow combines AI-generated test scenarios and automation
          suggestions with mandatory QA engineer review, validation, and
          execution before changes are committed to the repository.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">

          {[
            "GitHub Copilot",
            "ChatGPT",
            "Karate",
            "API Testing",
            "Negative Scenarios",
            "Edge Cases",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-lg bg-white/5 px-4 py-3 text-sm text-gray-300"
            >
              {tech}
            </span>
          ))}

        </div>

      </div>


      <div className="flex flex-col justify-center">

        <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
          Measured Impact
        </p>

        <div className="mt-6">

          <p className="text-7xl font-bold text-cyan-400">
            ~50%
          </p>

          <p className="mt-3 text-xl text-white">
            Reduction in test design and automation maintenance effort
          </p>

        </div>

        <div className="mt-10 grid grid-cols-2 gap-4">

          <div className="rounded-xl border border-white/10 bg-black/20 p-5">

            <p className="text-2xl font-bold">
              4h → 2h
            </p>

            <p className="mt-2 text-sm text-gray-400">
              Typical task effort
            </p>

          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-5">

            <p className="text-2xl font-bold">
              Human + AI
            </p>

            <p className="mt-2 text-sm text-gray-400">
              QA validation model
            </p>

          </div>

        </div>

        <div className="mt-8 border-t border-white/10 pt-8">

          <p className="text-sm font-semibold text-gray-300">
            AI-assisted workflow
          </p>

          <p className="mt-3 text-sm leading-7 text-gray-400">
            API Specification → AI Scenario Generation → Karate Feature
            Creation → AI-Assisted Maintenance → QA Review → Execution
          </p>

        </div>

      </div>

    </div>

  </div>
</section>
{/* AI-Augmented & Agentic Testing Section */}
<section
  id="ai-testing"
  className="border-t border-white/10 bg-[#0b0f14]"
>
  <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

    {/* Section Header */}
    <div className="max-w-4xl">

      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        AI & The Future of Quality Engineering
      </p>

      <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
        From AI-assisted testing
        <span className="block text-gray-500">
          to agentic quality engineering.
        </span>
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
        I am exploring how AI can evolve software testing from repetitive
        execution into intelligent, context-aware quality engineering.
        My current focus is using AI to accelerate test design and automation
        while exploring the future of agentic testing workflows.
      </p>

    </div>


    {/* AI Journey */}
    <div className="mt-20 grid gap-6 lg:grid-cols-3">

      {/* Current */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111820] p-8">

        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
              01
            </div>

            <p className="text-sm uppercase tracking-wider text-cyan-400">
              Today
            </p>

          </div>

          <h3 className="mt-6 text-2xl font-bold">
            AI-Assisted Testing
          </h3>

          <p className="mt-4 leading-7 text-gray-400">
            Using AI assistants to accelerate test design, scenario
            generation, automation development, and maintenance while
            keeping QA engineers responsible for validation and quality.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">

            {[
              "ChatGPT",
              "GitHub Copilot",
              "Claude",
              "Gemini",
              "GPT Models",
            ].map((tool) => (
              <span
                key={tool}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-300"
              >
                {tool}
              </span>
            ))}

          </div>

        </div>

      </div>


      {/* Augmented */}
      <div className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-8">

        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
              02
            </div>

            <p className="text-sm uppercase tracking-wider text-cyan-400">
              Building Toward
            </p>

          </div>

          <h3 className="mt-6 text-2xl font-bold">
            AI-Augmented Quality Engineering
          </h3>

          <p className="mt-4 leading-7 text-gray-400">
            Designing workflows where AI supports engineers across the
            quality lifecycle—from requirements analysis and test design
            to automation maintenance, defect investigation, and coverage
            optimization.
          </p>

          <div className="mt-8 space-y-3">

            {[
              "Requirement analysis",
              "Test scenario generation",
              "Negative & edge-case discovery",
              "Automation maintenance",
              "Defect analysis",
              "Test coverage optimization",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-sm text-gray-300"
              >
                <span className="text-cyan-400">✓</span>
                {item}
              </div>
            ))}

          </div>

        </div>

      </div>


      {/* Future */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111820] p-8">

        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-400/10 text-blue-300">
              03
            </div>

            <p className="text-sm uppercase tracking-wider text-blue-300">
              Exploring
            </p>

          </div>

          <h3 className="mt-6 text-2xl font-bold">
            Agentic Testing
          </h3>

          <p className="mt-4 leading-7 text-gray-400">
            Exploring the potential of AI agents to reason about application
            behavior, plan testing activities, execute workflows, analyze
            results, and continuously improve quality signals.
          </p>

          <div className="mt-8 space-y-3">

            {[
              "AI-powered test planning",
              "Autonomous test generation",
              "Intelligent test execution",
              "Failure investigation",
              "Adaptive regression testing",
              "Agent-driven quality workflows",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-sm text-gray-300"
              >
                <span className="text-blue-300">→</span>
                {item}
              </div>
            ))}

          </div>

        </div>

      </div>

    </div>


    {/* AI Workflow */}
    <div className="mt-24">

      <div className="mb-10">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          AI-Augmented Testing Workflow
        </p>

        <h3 className="mt-4 text-3xl font-bold md:text-4xl">
          Human expertise + AI acceleration.
        </h3>

      </div>


      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">

        {[
          {
            number: "01",
            title: "Understand",
            description:
              "Analyze requirements, API specifications, acceptance criteria, and existing automation.",
          },
          {
            number: "02",
            title: "Generate",
            description:
              "Use AI to identify scenarios, negative cases, edge cases, and test ideas.",
          },
          {
            number: "03",
            title: "Build",
            description:
              "Generate or improve automation scripts and reusable test components.",
          },
          {
            number: "04",
            title: "Validate",
            description:
              "QA engineers review AI output, verify business logic, and execute tests.",
          },
          {
            number: "05",
            title: "Improve",
            description:
              "Use execution results and failures to continuously improve test coverage.",
          },
        ].map((step) => (
          <div
            key={step.number}
            className="rounded-xl border border-white/10 bg-[#111820] p-6"
          >

            <p className="text-sm font-bold text-cyan-400">
              {step.number}
            </p>

            <h4 className="mt-4 text-lg font-semibold">
              {step.title}
            </h4>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              {step.description}
            </p>

          </div>
        ))}

      </div>

    </div>


    {/* AI Principles */}
    <div className="mt-24 grid gap-10 lg:grid-cols-2">

      <div>

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          My Approach
        </p>

        <h3 className="mt-4 text-3xl font-bold md:text-4xl">
          AI should amplify engineering judgment,
          not replace it.
        </h3>

      </div>


      <div className="space-y-6">

        <div className="border-l-2 border-cyan-400 pl-6">

          <h4 className="font-semibold">
            Human-in-the-loop validation
          </h4>

          <p className="mt-2 text-sm leading-7 text-gray-400">
            AI-generated test cases and automation are reviewed and validated
            by QA engineers before execution and integration.
          </p>

        </div>


        <div className="border-l-2 border-cyan-400 pl-6">

          <h4 className="font-semibold">
            Quality over quantity
          </h4>

          <p className="mt-2 text-sm leading-7 text-gray-400">
            The goal is not simply to generate more tests. The goal is to
            discover meaningful risks, improve coverage, and increase
            confidence in releases.
          </p>

        </div>


        <div className="border-l-2 border-cyan-400 pl-6">

          <h4 className="font-semibold">
            Responsible adoption
          </h4>

          <p className="mt-2 text-sm leading-7 text-gray-400">
            AI outputs are treated as suggestions that require engineering
            judgment, validation, and appropriate security and quality checks.
          </p>

        </div>

      </div>

    </div>


    {/* Future Vision */}
    <div className="mt-24 rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-transparent to-blue-500/10 p-8 md:p-12">

      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        Future Vision
      </p>

      <h3 className="mt-5 max-w-4xl text-3xl font-bold leading-tight md:text-5xl">
        Building intelligent quality engineering systems
        that can reason, act, and learn.
      </h3>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
        My long-term focus is exploring how AI agents can work alongside
        quality engineers to understand requirements, plan testing strategies,
        generate meaningful scenarios, execute workflows, investigate failures,
        and provide actionable quality insights.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">

        {[
          "AI Agents",
          "Agentic Testing",
          "MCP",
          "RAG",
          "Intelligent Test Automation",
          "Quality Engineering Architecture",
        ].map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-gray-300"
          >
            {item}
          </span>
        ))}

      </div>

    </div>

  </div>
</section>
{/* Leadership & Quality Engineering Section */}
<section
  id="leadership"
  className="border-t border-white/10 bg-[#0e141b]"
>
  <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

    {/* Section Header */}
    <div className="max-w-4xl">

      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        Leadership & Quality Engineering
      </p>

      <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
        Leading quality beyond
        <span className="block text-gray-500">
          test execution.
        </span>
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
        My approach to quality engineering extends beyond testing software.
        I focus on building strong engineering practices, mentoring teams,
        improving automation strategy, understanding system architecture,
        and collaborating with stakeholders to make quality a shared
        responsibility.
      </p>

    </div>


    {/* Leadership Cards */}
    <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {/* Team Leadership */}
      <div className="rounded-2xl border border-white/10 bg-[#111820] p-8">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
          01
        </div>

        <h3 className="mt-6 text-xl font-bold">
          Team Leadership
        </h3>

        <p className="mt-4 text-sm leading-7 text-gray-400">
          Led a team of 4 QA engineers, supporting sprint delivery,
          release validation, defect triage, automation adoption,
          and quality-focused decision making.
        </p>

        <div className="mt-6 border-t border-white/10 pt-5">

          <p className="text-xs uppercase tracking-wider text-gray-500">
            Focus
          </p>

          <p className="mt-2 text-sm text-gray-300">
            Delivery · Quality · Mentoring · Ownership
          </p>

        </div>

      </div>


      {/* Mentoring */}
      <div className="rounded-2xl border border-white/10 bg-[#111820] p-8">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
          02
        </div>

        <h3 className="mt-6 text-xl font-bold">
          Mentoring & Knowledge Sharing
        </h3>

        <p className="mt-4 text-sm leading-7 text-gray-400">
          Mentored QA engineers and peers on API testing, performance
          testing, automation practices, and practical adoption of AI
          tools for improving engineering productivity.
        </p>

        <div className="mt-6 border-t border-white/10 pt-5">

          <p className="text-xs uppercase tracking-wider text-gray-500">
            Areas
          </p>

          <p className="mt-2 text-sm text-gray-300">
            API Testing · Performance · Automation · AI
          </p>

        </div>

      </div>


      {/* Quality Strategy */}
      <div className="rounded-2xl border border-white/10 bg-[#111820] p-8">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
          03
        </div>

        <h3 className="mt-6 text-xl font-bold">
          Quality Strategy
        </h3>

        <p className="mt-4 text-sm leading-7 text-gray-400">
          Improved test coverage, regression efficiency, quality gates,
          and release validation through risk-based testing and
          automation-focused quality strategies.
        </p>

        <div className="mt-6 border-t border-white/10 pt-5">

          <p className="text-xs uppercase tracking-wider text-gray-500">
            Focus
          </p>

          <p className="mt-2 text-sm text-gray-300">
            Risk-Based Testing · Quality Gates · Release Readiness
          </p>

        </div>

      </div>


      {/* Architecture Collaboration */}
      <div className="rounded-2xl border border-white/10 bg-[#111820] p-8">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
          04
        </div>

        <h3 className="mt-6 text-xl font-bold">
          Architecture Collaboration
        </h3>

        <p className="mt-4 text-sm leading-7 text-gray-400">
          Worked closely with Technical Managers, Solution Architects,
          Developers, and Product Owners to understand system architecture,
          application behavior, and complex business workflows.
        </p>

        <div className="mt-6 border-t border-white/10 pt-5">

          <p className="text-xs uppercase tracking-wider text-gray-500">
            Collaboration
          </p>

          <p className="mt-2 text-sm text-gray-300">
            Architecture · System Behavior · Cross-Functional Teams
          </p>

        </div>

      </div>


      {/* Engineering Practices */}
      <div className="rounded-2xl border border-white/10 bg-[#111820] p-8">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
          05
        </div>

        <h3 className="mt-6 text-xl font-bold">
          Engineering Practices
        </h3>

        <p className="mt-4 text-sm leading-7 text-gray-400">
          Introduced additional quality checks during pull request reviews,
          encouraged automation best practices, and promoted stronger
          validation before changes moved through the delivery pipeline.
        </p>

        <div className="mt-6 border-t border-white/10 pt-5">

          <p className="text-xs uppercase tracking-wider text-gray-500">
            Focus
          </p>

          <p className="mt-2 text-sm text-gray-300">
            PR Reviews · Code Quality · Automation Standards
          </p>

        </div>

      </div>


      {/* Production Ownership */}
      <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-8">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
          06
        </div>

        <h3 className="mt-6 text-xl font-bold">
          Production Ownership
        </h3>

        <p className="mt-4 text-sm leading-7 text-gray-400">
          Worked directly with production users to investigate and resolve
          FrontDoor tickets, understand real-world application behavior,
          and collaborate with development teams to drive issues toward
          resolution.
        </p>

        <div className="mt-6 border-t border-white/10 pt-5">

          <p className="text-xs uppercase tracking-wider text-gray-500">
            Focus
          </p>

          <p className="mt-2 text-sm text-gray-300">
            Production Support · RCA · User Collaboration
          </p>

        </div>

      </div>

    </div>


    {/* Leadership Impact */}
    <div className="mt-24 rounded-3xl border border-white/10 bg-[#111820] p-8 md:p-12">

      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Leadership Mindset
          </p>

          <h3 className="mt-5 text-3xl font-bold leading-tight md:text-4xl">
            Quality is an engineering responsibility,
            not just a testing phase.
          </h3>

        </div>

        <div className="space-y-6">

          <div className="flex gap-4">

            <div className="mt-1 text-cyan-400">
              →
            </div>

            <div>

              <h4 className="font-semibold">
                Shift quality left
              </h4>

              <p className="mt-2 text-sm leading-7 text-gray-400">
                Encourage early collaboration between QA, developers,
                architects, and product teams to identify risks before
                they become expensive defects.
              </p>

            </div>

          </div>


          <div className="flex gap-4">

            <div className="mt-1 text-cyan-400">
              →
            </div>

            <div>

              <h4 className="font-semibold">
                Automate strategically
              </h4>

              <p className="mt-2 text-sm leading-7 text-gray-400">
                Focus automation on high-value business flows and repeatable
                validation while maintaining a balanced testing strategy.
              </p>

            </div>

          </div>


          <div className="flex gap-4">

            <div className="mt-1 text-cyan-400">
              →
            </div>

            <div>

              <h4 className="font-semibold">
                Use AI responsibly
              </h4>

              <p className="mt-2 text-sm leading-7 text-gray-400">
                Use AI to accelerate engineering work while keeping human
                expertise, validation, and accountability at the center
                of quality decisions.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>
{/* Engineering & Architecture Section */}
<section
  id="architecture"
  className="border-t border-white/10 bg-[#0b0f14]"
>
  <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

    {/* Header */}
    <div className="max-w-4xl">

      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        Engineering & Architecture
      </p>

      <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
        I don't just automate tests.
        <span className="block text-gray-500">
          I design quality engineering systems.
        </span>
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
        My approach to quality engineering combines automation architecture,
        API validation, performance engineering, cloud systems, CI/CD,
        and AI-assisted testing to build scalable and reliable quality
        solutions.
      </p>

    </div>


    {/* Architecture Flow */}
    <div className="mt-20 rounded-3xl border border-white/10 bg-[#111820] p-8 md:p-12">

      <div className="mb-12 text-center">

        <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
          Quality Engineering Architecture
        </p>

        <p className="mt-4 text-sm text-gray-400">
          A layered approach to building scalable quality systems
        </p>

      </div>


      {/* Flow */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

        {/* Layer 1 */}
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">

          <p className="text-xs font-semibold text-cyan-400">
            01
          </p>

          <h3 className="mt-4 text-lg font-bold">
            Quality Strategy
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            Define test strategy, risk areas, coverage goals, quality gates,
            and release readiness criteria.
          </p>

        </div>


        {/* Layer 2 */}
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">

          <p className="text-xs font-semibold text-cyan-400">
            02
          </p>

          <h3 className="mt-4 text-lg font-bold">
            Automation
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            Build scalable automation across UI, API, integration,
            asynchronous events, and end-to-end business workflows.
          </p>

        </div>


        {/* Layer 3 */}
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">

          <p className="text-xs font-semibold text-cyan-400">
            03
          </p>

          <h3 className="mt-4 text-lg font-bold">
            Engineering Infrastructure
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            Integrate automation with CI/CD, parallel execution, cloud
            platforms, and continuous quality validation.
          </p>

        </div>


        {/* Layer 4 */}
        <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-6">

          <p className="text-xs font-semibold text-cyan-400">
            04
          </p>

          <h3 className="mt-4 text-lg font-bold">
            Intelligent Quality
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            Apply AI and emerging agentic approaches to accelerate test
            design, automation, analysis, and quality decision making.
          </p>

        </div>

      </div>

    </div>


    {/* Architecture Capabilities */}
    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">


      {/* Automation Architecture */}
      <div className="rounded-2xl border border-white/10 bg-[#111820] p-8">

        <p className="text-sm font-semibold text-cyan-400">
          01 · Automation Architecture
        </p>

        <h3 className="mt-4 text-2xl font-bold">
          Scalable test automation
        </h3>

        <p className="mt-4 text-sm leading-7 text-gray-400">
          Design automation frameworks that support maintainability,
          reusability, parallel execution, and continuous integration.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">

          {[
            "Selenium",
            "Playwright",
            "TestNG",
            "Karate",
            "API Automation",
            "Parallel Execution",
          ].map((item) => (
            <span
              key={item}
              className="rounded-md bg-white/5 px-3 py-2 text-xs text-gray-300"
            >
              {item}
            </span>
          ))}

        </div>

      </div>


      {/* API Architecture */}
      <div className="rounded-2xl border border-white/10 bg-[#111820] p-8">

        <p className="text-sm font-semibold text-cyan-400">
          02 · API & Integration
        </p>

        <h3 className="mt-4 text-2xl font-bold">
          Validate beyond the UI
        </h3>

        <p className="mt-4 text-sm leading-7 text-gray-400">
          Focus on API-first validation and integration testing to provide
          faster feedback and deeper coverage of business logic.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">

          {[
            "REST APIs",
            "REST Assured",
            "Postman",
            "Karate",
            "Integration Testing",
            "Contract Validation",
          ].map((item) => (
            <span
              key={item}
              className="rounded-md bg-white/5 px-3 py-2 text-xs text-gray-300"
            >
              {item}
            </span>
          ))}

        </div>

      </div>


      {/* Performance */}
      <div className="rounded-2xl border border-white/10 bg-[#111820] p-8">

        <p className="text-sm font-semibold text-cyan-400">
          03 · Performance Engineering
        </p>

        <h3 className="mt-4 text-2xl font-bold">
          Test systems under pressure
        </h3>

        <p className="mt-4 text-sm leading-7 text-gray-400">
          Introduce performance testing early to identify scalability
          bottlenecks, validate SLAs, and understand system behavior
          under concurrent load.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">

          {[
            "JMeter",
            "Load Testing",
            "Stress Testing",
            "SLA Validation",
            "Scalability",
            "Performance Analysis",
          ].map((item) => (
            <span
              key={item}
              className="rounded-md bg-white/5 px-3 py-2 text-xs text-gray-300"
            >
              {item}
            </span>
          ))}

        </div>

      </div>


      {/* Cloud */}
      <div className="rounded-2xl border border-white/10 bg-[#111820] p-8">

        <p className="text-sm font-semibold text-cyan-400">
          04 · Cloud & Distributed Systems
        </p>

        <h3 className="mt-4 text-2xl font-bold">
          Understand system behavior
        </h3>

        <p className="mt-4 text-sm leading-7 text-gray-400">
          Work closely with engineering teams to understand cloud-native
          architectures, asynchronous workflows, and distributed system
          behavior from a quality perspective.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">

          {[
            "GCP",
            "Pub/Sub",
            "Event-Driven Systems",
            "Cloud Applications",
            "Distributed Systems",
          ].map((item) => (
            <span
              key={item}
              className="rounded-md bg-white/5 px-3 py-2 text-xs text-gray-300"
            >
              {item}
            </span>
          ))}

        </div>

      </div>


      {/* CI/CD */}
      <div className="rounded-2xl border border-white/10 bg-[#111820] p-8">

        <p className="text-sm font-semibold text-cyan-400">
          05 · Continuous Quality
        </p>

        <h3 className="mt-4 text-2xl font-bold">
          Quality integrated into delivery
        </h3>

        <p className="mt-4 text-sm leading-7 text-gray-400">
          Integrate automated validation into CI/CD pipelines to provide
          fast feedback and reduce the time required for release validation.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">

          {[
            "Jenkins",
            "GitHub Actions",
            "Azure DevOps",
            "CI/CD",
            "Quality Gates",
            "Parallel Execution",
          ].map((item) => (
            <span
              key={item}
              className="rounded-md bg-white/5 px-3 py-2 text-xs text-gray-300"
            >
              {item}
            </span>
          ))}

        </div>

      </div>


      {/* AI */}
      <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-8">

        <p className="text-sm font-semibold text-cyan-400">
          06 · AI-Augmented Quality
        </p>

        <h3 className="mt-4 text-2xl font-bold">
          The next evolution of testing
        </h3>

        <p className="mt-4 text-sm leading-7 text-gray-400">
          Explore AI-driven workflows that can assist engineers with
          test design, automation generation, maintenance, analysis,
          and eventually autonomous quality engineering activities.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">

          {[
            "LLMs",
            "AI Agents",
            "MCP",
            "RAG",
            "Agentic Testing",
            "AI Test Design",
          ].map((item) => (
            <span
              key={item}
              className="rounded-md bg-white/5 px-3 py-2 text-xs text-gray-300"
            >
              {item}
            </span>
          ))}

        </div>

      </div>

    </div>


    {/* Architect Mindset */}
    <div className="mt-20 rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 to-transparent p-8 md:p-12">

      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Architect Mindset
          </p>

          <h3 className="mt-5 text-3xl font-bold leading-tight md:text-4xl">
            Start with the system.
            Then design the quality strategy.
          </h3>

        </div>


        <div>

          <p className="leading-8 text-gray-400">
            I believe effective quality engineering starts with understanding
            how a system actually works. By understanding application
            architecture, APIs, data flows, asynchronous events, cloud
            infrastructure, and business risk, testing can move beyond
            checking requirements toward engineering meaningful quality
            solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            {[
              "Understand",
              "Identify Risk",
              "Design",
              "Automate",
              "Measure",
              "Improve",
            ].map((item, index) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-gray-300"
              >
                {index + 1}. {item}
              </span>
            ))}

          </div>

        </div>

      </div>

    </div>

  </div>
</section>
{/* AI Engineering Lab Section */}
<section
  id="ai-lab"
  className="border-t border-white/10 bg-[#0e141b]"
>
  <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

    {/* Header */}
    <div className="max-w-4xl">

      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        AI Engineering Lab
      </p>

      <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
        Exploring how AI can
        <span className="block text-gray-500">
          transform quality engineering.
        </span>
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
        I use generative AI as an engineering accelerator today while
        exploring how AI agents and agentic workflows can evolve the
        future of software testing and quality engineering.
      </p>

    </div>


    {/* AI Projects */}
    <div className="mt-20 grid gap-6 lg:grid-cols-3">


      {/* Project 1 */}
      <article className="group rounded-2xl border border-white/10 bg-[#111820] p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">

        <div className="flex items-center justify-between">

          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            01 · Real Project
          </span>

          <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
            ~50% Faster
          </span>

        </div>


        <h3 className="mt-6 text-2xl font-bold">
          AI-Assisted Test Case Generation
        </h3>


        <p className="mt-5 text-sm leading-7 text-gray-400">
          Used GitHub Copilot and ChatGPT to accelerate API test design,
          identify negative scenarios, discover edge cases, and generate
          automation scenarios from requirements and API specifications.
        </p>


        {/* Workflow */}
        <div className="mt-8 space-y-3">

          {[
            "API specification or user story",
            "AI-generated positive and negative scenarios",
            "Edge-case discovery",
            "Karate feature generation",
            "QA review and validation",
            "Execution and repository commit",
          ].map((step, index) => (
            <div
              key={step}
              className="flex items-start gap-3"
            >

              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/5 text-xs text-cyan-400">
                {index + 1}
              </span>

              <p className="text-sm text-gray-400">
                {step}
              </p>

            </div>
          ))}

        </div>


        {/* Impact */}
        <div className="mt-8 border-t border-white/10 pt-6">

          <p className="text-xs uppercase tracking-wider text-gray-500">
            Measured Impact
          </p>

          <p className="mt-3 text-lg font-semibold text-white">
            Approximately 50% reduction in test design effort
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Example: 4 hours of manual effort reduced to approximately
            2 hours with AI assistance and QA validation.
          </p>

        </div>

      </article>


      {/* Project 2 */}
      <article className="group rounded-2xl border border-white/10 bg-[#111820] p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">

        <div className="flex items-center justify-between">

          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            02 · Real Project
          </span>

          <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
            AI-Assisted
          </span>

        </div>


        <h3 className="mt-6 text-2xl font-bold">
          AI-Assisted Automation Maintenance
        </h3>


        <p className="mt-5 text-sm leading-7 text-gray-400">
          Applied AI assistants to analyze existing Karate feature files,
          identify syntax issues, improve assertions, suggest reusable
          automation patterns, and accelerate script maintenance.
        </p>


        {/* Workflow */}
        <div className="mt-8 space-y-3">

          {[
            "Provide existing feature file",
            "AI identifies syntax and structural issues",
            "Suggest improved assertions",
            "Recommend reusable code",
            "QA reviews generated changes",
            "Execute and validate automation",
          ].map((step, index) => (
            <div
              key={step}
              className="flex items-start gap-3"
            >

              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/5 text-xs text-cyan-400">
                {index + 1}
              </span>

              <p className="text-sm text-gray-400">
                {step}
              </p>

            </div>
          ))}

        </div>


        {/* AI Tools */}
        <div className="mt-8 border-t border-white/10 pt-6">

          <p className="text-xs uppercase tracking-wider text-gray-500">
            AI Toolkit
          </p>

          <div className="mt-4 flex flex-wrap gap-2">

            {[
              "GitHub Copilot",
              "ChatGPT",
              "Claude",
              "Gemini",
              "GPT Models",
            ].map((tool) => (
              <span
                key={tool}
                className="rounded-md bg-white/5 px-3 py-2 text-xs text-gray-300"
              >
                {tool}
              </span>
            ))}

          </div>

        </div>

      </article>


      {/* Project 3 */}
      <article className="group rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">

        <div className="flex items-center justify-between">

          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            03 · Exploring
          </span>

          <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
            Future Direction
          </span>

        </div>


        <h3 className="mt-6 text-2xl font-bold">
          Agentic Quality Engineering
        </h3>


        <p className="mt-5 text-sm leading-7 text-gray-400">
          Exploring how AI agents could orchestrate quality engineering
          workflows—from understanding requirements and generating tests
          to executing automation, analyzing failures, and producing
          actionable quality insights.
        </p>


        {/* Agent Workflow */}
        <div className="mt-8 space-y-3">

          {[
            "Analyze requirements",
            "Identify risks and test scenarios",
            "Generate API and UI tests",
            "Execute automated validation",
            "Analyze failures",
            "Generate quality insights",
          ].map((step, index) => (
            <div
              key={step}
              className="flex items-start gap-3"
            >

              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-xs text-cyan-400">
                {index + 1}
              </span>

              <p className="text-sm text-gray-400">
                {step}
              </p>

            </div>
          ))}

        </div>


        {/* Future Stack */}
        <div className="mt-8 border-t border-cyan-400/10 pt-6">

          <p className="text-xs uppercase tracking-wider text-gray-500">
            Exploring
          </p>

          <div className="mt-4 flex flex-wrap gap-2">

            {[
              "AI Agents",
              "MCP",
              "RAG",
              "LLMs",
              "Playwright",
              "API Automation",
            ].map((tool) => (
              <span
                key={tool}
                className="rounded-md bg-white/5 px-3 py-2 text-xs text-gray-300"
              >
                {tool}
              </span>
            ))}

          </div>

        </div>

      </article>

    </div>


    {/* Human-in-the-loop Principle */}
    <div className="mt-16 rounded-3xl border border-white/10 bg-[#111820] p-8 md:p-12">

      <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My AI Engineering Principle
          </p>

          <h3 className="mt-5 text-3xl font-bold">
            AI accelerates engineering.
            Engineers own the quality.
          </h3>

          <p className="mt-5 max-w-3xl leading-8 text-gray-400">
            AI-generated test cases and automation are treated as
            accelerators—not unquestioned outputs. Every generated
            scenario is reviewed, validated, executed, and assessed
            against business requirements before being accepted.
          </p>

        </div>


        <div className="flex h-28 w-28 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/5">

          <span className="text-center text-sm font-semibold text-cyan-300">
            Human
            <br />
            +
            <br />
            AI
          </span>

        </div>

      </div>

    </div>


    {/* Closing Statement */}
    <div className="mt-20 text-center">

      <p className="mx-auto max-w-3xl text-xl leading-9 text-gray-400">

        The goal isn't to replace testing with AI.
        <span className="text-white">
          {" "}
          It's to give quality engineers more intelligence,
          speed, and leverage.
        </span>

      </p>

    </div>

  </div>
</section>
{/* Skills & Expertise Section */}
<section
  id="skills"
  className="border-t border-white/10 bg-[#0b0f14]"
>
  <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

    {/* Header */}
    <div className="max-w-4xl">

      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        Skills & Expertise
      </p>

      <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
        A quality engineering toolkit
        <span className="block text-gray-500">
          built across the software lifecycle.
        </span>
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
        My experience spans test strategy, automation architecture, API
        validation, performance engineering, cloud platforms, CI/CD, and
        emerging AI-driven approaches to quality engineering.
      </p>

    </div>


    {/* Skills Grid */}
    <div className="mt-20 grid gap-6 md:grid-cols-2">

      {/* Quality Engineering */}
      <div className="group rounded-2xl border border-white/10 bg-[#111820] p-8 transition hover:border-cyan-400/30">

        <div className="flex items-start justify-between">

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              01
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Quality Engineering
            </h3>
          </div>

          <span className="text-3xl text-cyan-400/40">
            QE
          </span>

        </div>

        <p className="mt-5 text-sm leading-7 text-gray-400">
          Designing quality strategies that align testing with business
          risk, release goals, and engineering outcomes.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">

          {[
            "Test Strategy",
            "Test Planning",
            "Risk-Based Testing",
            "Regression Strategy",
            "Quality Gates",
            "Release Readiness",
            "Defect Triage",
            "Production Validation",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-lg bg-white/5 px-3 py-2 text-sm text-gray-300"
            >
              {skill}
            </span>
          ))}

        </div>

      </div>


      {/* Automation */}
      <div className="group rounded-2xl border border-white/10 bg-[#111820] p-8 transition hover:border-cyan-400/30">

        <div className="flex items-start justify-between">

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              02
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Test Automation
            </h3>
          </div>

          <span className="text-3xl text-cyan-400/40">
            AUTO
          </span>

        </div>

        <p className="mt-5 text-sm leading-7 text-gray-400">
          Building maintainable automation frameworks and scalable test
          suites across UI, API, and end-to-end workflows.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">

          {[
            "Selenium",
            "Playwright",
            "Java",
            "TypeScript",
            "TestNG",
            "Cucumber",
            "Karate",
            "Appium",
            "Page Object Model",
            "Framework Design",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-lg bg-white/5 px-3 py-2 text-sm text-gray-300"
            >
              {skill}
            </span>
          ))}

        </div>

      </div>


      {/* API & Performance */}
      <div className="group rounded-2xl border border-white/10 bg-[#111820] p-8 transition hover:border-cyan-400/30">

        <div className="flex items-start justify-between">

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              03
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              API & Performance Engineering
            </h3>
          </div>

          <span className="text-3xl text-cyan-400/40">
            API
          </span>

        </div>

        <p className="mt-5 text-sm leading-7 text-gray-400">
          Validating APIs, designing performance tests, analyzing system
          behavior, and collaborating with engineering teams to improve
          scalability and SLA compliance.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">

          {[
            "REST API Testing",
            "REST Assured",
            "Postman",
            "Bruno",
            "Karate",
            "JMeter",
            "Load Testing",
            "Performance Testing",
            "SLA Validation",
            "Scalability Testing",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-lg bg-white/5 px-3 py-2 text-sm text-gray-300"
            >
              {skill}
            </span>
          ))}

        </div>

      </div>


      {/* Cloud & CI/CD */}
      <div className="group rounded-2xl border border-white/10 bg-[#111820] p-8 transition hover:border-cyan-400/30">

        <div className="flex items-start justify-between">

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              04
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Cloud & Engineering
            </h3>
          </div>

          <span className="text-3xl text-cyan-400/40">
            CLOUD
          </span>

        </div>

        <p className="mt-5 text-sm leading-7 text-gray-400">
          Working across cloud-based application ecosystems and delivery
          pipelines to improve test execution, release confidence, and
          system understanding.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">

          {[
            "GCP",
            "Pub/Sub",
            "Cloud Systems",
            "Jenkins",
            "GitHub Actions",
            "Azure DevOps",
            "CI/CD",
            "Git",
            "Maven",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-lg bg-white/5 px-3 py-2 text-sm text-gray-300"
            >
              {skill}
            </span>
          ))}

        </div>

      </div>


      {/* AI */}
      <div className="group rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-8 transition hover:border-cyan-400/40">

        <div className="flex items-start justify-between">

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              05
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              AI-Augmented Testing
            </h3>
          </div>

          <span className="text-3xl text-cyan-400/40">
            AI
          </span>

        </div>

        <p className="mt-5 text-sm leading-7 text-gray-400">
          Applying generative AI and exploring agentic approaches to
          accelerate test design, automation development, maintenance,
          and quality engineering workflows.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">

          {[
            "ChatGPT",
            "GitHub Copilot",
            "Claude",
            "Gemini",
            "GPT Models",
            "Prompt Engineering",
            "AI Agents",
            "MCP",
            "RAG",
            "Agentic Testing",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-lg bg-white/5 px-3 py-2 text-sm text-gray-300"
            >
              {skill}
            </span>
          ))}

        </div>

      </div>


      {/* Leadership */}
      <div className="group rounded-2xl border border-white/10 bg-[#111820] p-8 transition hover:border-cyan-400/30">

        <div className="flex items-start justify-between">

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              06
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Leadership & Collaboration
            </h3>
          </div>

          <span className="text-3xl text-cyan-400/40">
            LEAD
          </span>

        </div>

        <p className="mt-5 text-sm leading-7 text-gray-400">
          Collaborating with engineering leaders and mentoring QA teams
          to establish quality practices and deliver reliable software
          at scale.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">

          {[
            "Team Leadership",
            "Mentoring",
            "Stakeholder Management",
            "Technical Collaboration",
            "Architecture Discussions",
            "Production Support",
            "Root Cause Analysis",
            "Knowledge Sharing",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-lg bg-white/5 px-3 py-2 text-sm text-gray-300"
            >
              {skill}
            </span>
          ))}

        </div>

      </div>

    </div>


    {/* Career Direction */}
    <div className="mt-20 rounded-3xl border border-white/10 bg-[#111820] p-8 md:p-12">

      <div className="grid gap-10 lg:grid-cols-3">

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
            Current Strength
          </p>

          <h3 className="mt-4 text-2xl font-bold">
            Quality Engineering
          </h3>

          <p className="mt-3 text-sm leading-7 text-gray-400">
            Strong hands-on experience across automation, API testing,
            performance engineering, and release quality.
          </p>
        </div>


        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
            Expanding Expertise
          </p>

          <h3 className="mt-4 text-2xl font-bold">
            Test Architecture
          </h3>

          <p className="mt-3 text-sm leading-7 text-gray-400">
            Growing deeper into system architecture, cloud platforms,
            scalable automation frameworks, and engineering practices.
          </p>
        </div>


        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
            Future Direction
          </p>

          <h3 className="mt-4 text-2xl font-bold">
            AI-Driven Quality Engineering
          </h3>

          <p className="mt-3 text-sm leading-7 text-gray-400">
            Exploring AI agents, MCP, RAG, and agentic testing to build
            intelligent quality engineering workflows.
          </p>
        </div>

      </div>

    </div>

  </div>
</section>
{/* Professional Experience Section */}
<section
  id="experience"
  className="border-t border-white/10 bg-[#0e141b]"
>
  <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

    {/* Header */}
    <div className="max-w-4xl">

      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        Professional Experience
      </p>

      <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
        11+ years of engineering
        <span className="block text-gray-500">
          quality at scale.
        </span>
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
        A career built across functional testing, automation engineering,
        API validation, performance testing, cloud systems, test leadership,
        and AI-augmented quality engineering.
      </p>

    </div>


    {/* Timeline */}
    <div className="relative mt-20">

      {/* Timeline Line */}
      <div className="absolute left-[11px] top-0 hidden h-full w-px bg-white/10 md:block" />


      {/* Experience 01 */}
      <div className="relative grid gap-8 md:grid-cols-[180px_1fr] md:gap-12">

        {/* Timeline Point */}
        <div className="relative">

          <div className="hidden h-6 w-6 rounded-full border-4 border-[#0e141b] bg-cyan-400 ring-1 ring-cyan-400/40 md:block" />

          <p className="mt-4 text-sm font-medium text-gray-500 md:ml-10 md:mt-[-25px]">
            Current
          </p>

        </div>


        {/* Content */}
        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-8 md:p-10">

          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

            <div>

              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                Test Lead / Senior SDET
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Sales Software Solutions
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Client: Equifax US · India
              </p>

            </div>

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs text-cyan-300">
              June 2023 — Present
            </span>

          </div>


          <p className="mt-8 leading-8 text-gray-400">
            Working in a client-facing Test Lead role across enterprise
            employment verification and cloud compliance platforms.
            Responsible for automation strategy, API testing, performance
            engineering, release validation, production support, mentoring,
            and quality improvements.
          </p>


          {/* Projects */}
          <div className="mt-10 grid gap-6 lg:grid-cols-2">

            {/* Project 1 */}
            <div className="rounded-xl border border-white/10 bg-[#111820] p-6">

              <p className="text-xs uppercase tracking-wider text-cyan-400">
                Project 01
              </p>

              <h4 className="mt-3 text-xl font-semibold">
                International Workforce Solutions
              </h4>

              <p className="mt-2 text-sm text-gray-500">
                Employment Verification Services · Equifax US
              </p>

              <p className="mt-5 text-sm leading-7 text-gray-400">
                Worked on automation testing, API testing, functional
                testing, and framework development for complex employment
                verification workflows.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                {[
                  "Java",
                  "Angular",
                  "GCP",
                  "API Testing",
                  "Automation",
                  "Functional Testing",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-white/5 px-3 py-2 text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </div>


            {/* Project 2 */}
            <div className="rounded-xl border border-white/10 bg-[#111820] p-6">

              <p className="text-xs uppercase tracking-wider text-cyan-400">
                Project 02
              </p>

              <h4 className="mt-3 text-xl font-semibold">
                Equifax Cloud Compliance
              </h4>

              <p className="mt-2 text-sm text-gray-500">
                API Performance · Cloud Systems · Scalability
              </p>

              <p className="mt-5 text-sm leading-7 text-gray-400">
                Introduced API performance testing from the ground up and
                worked with Technical Managers, Solution Architects,
                Developers, and Product Owners to improve complex business
                flow response times.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                {[
                  "API Performance",
                  "JMeter",
                  "Cloud",
                  "SLA",
                  "Scalability",
                  "Load Testing",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-white/5 px-3 py-2 text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </div>

          </div>


          {/* Key Responsibilities */}
          <div className="mt-10 border-t border-white/10 pt-10">

            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Leadership & Engineering Contributions
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">

              {[
                "Led a team of 4 QA engineers across releases and quality initiatives.",
                "Mentored QA peers on API testing, performance testing, and automation practices.",
                "Worked closely with Technical Managers, Solution Architects, Developers, and Product Owners.",
                "Introduced API performance testing practices and helped teams understand system behavior.",
                "Designed a TestNG-based framework to validate GCP Pub/Sub messages triggered by application events.",
                "Introduced additional quality checks during pull request reviews.",
                "Worked with production users to investigate and resolve FrontDoor production tickets.",
                "Used AI tools to accelerate test case design, automation maintenance, and edge-case discovery.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-4"
                >
                  <span className="mt-1 text-cyan-400">
                    →
                  </span>

                  <p className="text-sm leading-6 text-gray-400">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>


          {/* Impact Metrics */}
          <div className="mt-10 grid gap-4 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">

            <div>
              <p className="text-3xl font-bold text-cyan-400">
                85%
              </p>

              <p className="mt-2 text-xs text-gray-500">
                Automation coverage
              </p>
            </div>


            <div>
              <p className="text-3xl font-bold text-cyan-400">
                12h → 4h
              </p>

              <p className="mt-2 text-xs text-gray-500">
                Regression execution
              </p>
            </div>


            <div>
              <p className="text-3xl font-bold text-cyan-400">
                ~50%
              </p>

              <p className="mt-2 text-xs text-gray-500">
                AI-assisted test effort reduction
              </p>
            </div>


            <div>
              <p className="text-3xl font-bold text-cyan-400">
                0
              </p>

              <p className="mt-2 text-xs text-gray-500">
                Critical defects for a major production release
              </p>
            </div>

          </div>

        </div>

      </div>


      {/* Career Direction */}
      <div className="relative mt-16 grid gap-8 md:grid-cols-[180px_1fr] md:gap-12">

        <div className="relative">

          <div className="hidden h-6 w-6 rounded-full border-4 border-[#0e141b] bg-white/30 md:block" />

        </div>


        <div className="rounded-2xl border border-dashed border-white/10 p-8 md:p-10">

          <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
            Next Chapter
          </p>

          <h3 className="mt-4 text-3xl font-bold">
            From Test Lead to Quality Engineering Architect
          </h3>

          <p className="mt-5 max-w-3xl leading-8 text-gray-400">
            My next career goal is to move deeper into product-based
            engineering environments, take ownership of larger quality
            engineering strategies, lead larger teams, and design scalable
            testing architectures that incorporate cloud-native systems,
            AI, and agentic testing.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            {[
              "Product-Based Engineering",
              "Test Architecture",
              "Quality Engineering Architecture",
              "AI-Augmented Testing",
              "Agentic Testing",
              "Engineering Leadership",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
              >
                {item}
              </span>
            ))}

          </div>

        </div>

      </div>

    </div>

  </div>
</section>
      {/* About Section */}
      {/* About / Professional Story Section */}
<section
  id="about"
  className="border-t border-white/10 bg-[#0b0f14]"
>
  <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

    <div className="grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr]">

      {/* Profile Image */}
      <div className="relative">

        <div className="absolute -inset-4 rounded-3xl bg-cyan-400/10 blur-2xl" />

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#111820]">

          <img
            src="/profile.jpg"
            alt="Vani M - Senior SDET and Quality Engineering Leader"
            className="h-auto w-full object-cover"
          />

        </div>


        {/* Profile Badge */}
        <div className="absolute -bottom-6 -right-6 rounded-2xl border border-cyan-400/20 bg-[#111820] px-6 py-5 shadow-xl">

          <p className="text-3xl font-bold text-cyan-400">
            11+
          </p>

          <p className="mt-1 text-xs text-gray-400">
            Years in Quality Engineering
          </p>

        </div>

      </div>


      {/* About Content */}
      <div>

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          About Me
        </p>


        <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
          Quality engineering
          <span className="block text-gray-500">
            with an engineering mindset.
          </span>
        </h2>


        <div className="mt-8 space-y-5 text-base leading-8 text-gray-400">

          <p>
            I am a Senior SDET and Test Lead with over 11 years of experience
            in software quality engineering, working across functional
            testing, automation, API validation, performance engineering,
            cloud systems, and quality leadership.
          </p>

          <p>
            Throughout my career, I have evolved from hands-on testing and
            automation into designing scalable quality engineering solutions,
            leading QA teams, improving release confidence, and working
            closely with developers, technical managers, solution architects,
            and product owners.
          </p>

          <p>
            My current focus is on combining strong testing fundamentals
            with modern engineering practices. I am actively applying
            generative AI to accelerate test design and automation
            maintenance while exploring AI agents, MCP, RAG, and agentic
            testing approaches.
          </p>

        </div>


        {/* Profile Information */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">

            <p className="text-xs uppercase tracking-wider text-gray-500">
              Current Role
            </p>

            <p className="mt-2 font-semibold text-white">
              Senior SDET / Test Lead
            </p>

          </div>


          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">

            <p className="text-xs uppercase tracking-wider text-gray-500">
              Location
            </p>

            <p className="mt-2 font-semibold text-white">
              Visakhapatnam, India
            </p>

          </div>


          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">

            <p className="text-xs uppercase tracking-wider text-gray-500">
              Core Focus
            </p>

            <p className="mt-2 font-semibold text-white">
              Quality Engineering & Test Architecture
            </p>

          </div>


          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">

            <p className="text-xs uppercase tracking-wider text-gray-500">
              Exploring
            </p>

            <p className="mt-2 font-semibold text-white">
              AI-Augmented & Agentic Testing
            </p>

          </div>

        </div>


        {/* Career Direction */}
        <div className="mt-10 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Where I'm Heading
          </p>

          <p className="mt-4 leading-7 text-gray-300">
            I am working toward becoming a Quality Engineering / Test
            Architect, where I can lead larger engineering teams, design
            scalable test architectures, and help organizations adopt
            AI-augmented and agentic approaches to software quality.
          </p>

        </div>


        {/* Social Links */}
        <div className="mt-10 flex flex-wrap gap-4">

          <a
            href="https://www.linkedin.com/in/vanimenda"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium transition hover:border-cyan-400/30 hover:text-cyan-400"
          >
            LinkedIn →
          </a>


          <a
            href="https://github.com/vani3103"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium transition hover:border-cyan-400/30 hover:text-cyan-400"
          >
            GitHub →
          </a>


          <a
            href="#contact"
            className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
          >
            Let's Connect →
          </a>

        </div>

      </div>

    </div>

  </div>
</section>
{/* Contact & Resume Section */}
<section
  id="contact"
  className="border-t border-white/10 bg-[#0b0f14]"
>
  <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

    <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">

      {/* Main CTA */}
      <div>

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Let's Connect
        </p>

        <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
          Building better quality
          <span className="block text-gray-500">
            through engineering and AI.
          </span>
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
          I am open to opportunities where I can contribute as a Senior SDET,
          Test Lead, Quality Engineering Leader, or Test Architect—especially
          in teams building scalable products and exploring AI-augmented
          quality engineering.
        </p>


        {/* Primary Actions */}
        <div className="mt-10 flex flex-wrap gap-4">

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
          >
            View Resume →
          </a>


          <a
            href="/resume.pdf"
            download
            className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/30 hover:text-cyan-400"
          >
            Download Resume ↓
          </a>

        </div>

      </div>


      {/* Contact Information */}
      <div className="rounded-3xl border border-white/10 bg-[#111820] p-8 md:p-10">

        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
          Contact Information
        </p>


        <div className="mt-8 space-y-6">

          {/* Location */}
          <div>

            <p className="text-xs uppercase tracking-wider text-gray-500">
              Location
            </p>

            <p className="mt-2 text-lg font-medium text-white">
              Visakhapatnam, India
            </p>

          </div>


          {/* LinkedIn */}
          <div>

            <p className="text-xs uppercase tracking-wider text-gray-500">
              LinkedIn
            </p>

            <a
              href="https://www.linkedin.com/in/vanimenda"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-lg font-medium text-cyan-400 transition hover:text-cyan-300"
            >
              linkedin.com/in/vanimenda →
            </a>

          </div>


          {/* GitHub */}
          <div>

            <p className="text-xs uppercase tracking-wider text-gray-500">
              GitHub
            </p>

            <a
              href="https://github.com/vani3103"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-lg font-medium text-cyan-400 transition hover:text-cyan-300"
            >
              github.com/vani3103 →
            </a>

          </div>


          {/* Email */}
          <div>

            <p className="text-xs uppercase tracking-wider text-gray-500">
              Email
            </p>

            <a
  href="mailto:vaani.3103@gmail.com"
  className="mt-2 block text-lg font-medium text-cyan-400 transition hover:text-cyan-300"
>
  vaani.3103@gmail.com →
</a>

          </div>

        </div>

      </div>

    </div>


    {/* Open to Opportunities */}
    <div className="mt-20 rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-8 md:p-10">

      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

        <div>

          <div className="flex items-center gap-3">

            <span className="h-3 w-3 animate-pulse rounded-full bg-cyan-400" />

            <p className="text-sm font-semibold text-cyan-400">
              Open to meaningful opportunities
            </p>

          </div>


          <h3 className="mt-4 text-2xl font-bold">
            Let's build the next generation of quality engineering.
          </h3>


          <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-400">
            Interested in product engineering environments, quality
            architecture, AI-driven testing, and opportunities to lead
            engineering teams.
          </p>

        </div>


        <a
          href="https://www.linkedin.com/in/vanimenda"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-xl border border-cyan-400/30 px-6 py-3 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
        >
          Connect on LinkedIn →
        </a>

      </div>

    </div>

  </div>
</section>


{/* Footer */}
<footer className="border-t border-white/10 bg-[#080b0f]">

  <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between lg:px-8">

    {/* Copyright */}
    <div>

      <p className="font-semibold text-white">
        Vani M
      </p>

      <p className="mt-1 text-sm text-gray-500">
        Senior SDET · Test Lead · Quality Engineering
      </p>

    </div>


    {/* Footer Links */}
    <div className="flex flex-wrap gap-6 text-sm text-gray-500">

      <a
        href="#about"
        className="transition hover:text-cyan-400"
      >
        About
      </a>

      <a
        href="#work"
        className="transition hover:text-cyan-400"
      >
        Work
      </a>

      <a
        href="#architecture"
        className="transition hover:text-cyan-400"
      >
        Architecture
      </a>

      <a
        href="#ai-lab"
        className="transition hover:text-cyan-400"
      >
        AI Lab
      </a>

      <a
        href="#contact"
        className="transition hover:text-cyan-400"
      >
        Contact
      </a>

    </div>


    {/* Social */}
    <div className="flex gap-4">

      <a
        href="https://www.linkedin.com/in/vanimenda"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-sm text-gray-500 transition hover:text-cyan-400"
      >
        LinkedIn
      </a>

      <a
        href="https://github.com/vani3103"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-sm text-gray-500 transition hover:text-cyan-400"
      >
        GitHub
      </a>

    </div>

  </div>


  <div className="border-t border-white/5">

    <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">

      <p className="text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Vani M. Built with Next.js,
        TypeScript, and a quality engineering mindset.
      </p>

    </div>

  </div>

</footer>
          </main>
  );
}