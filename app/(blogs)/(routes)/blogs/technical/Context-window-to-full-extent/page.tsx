"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CosmicBackground } from "@/components/CosmicBG";
import { Footer } from "@/app/(landing)/_components/footer";
import { ExternalLink, QuoteBox, SectionTitle } from "@/app/(blogs)/_components/extras";

const ContextWindowBlog = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center bg-zinc-950 text-indigo-500">
          <div className="animate-pulse flex flex-col items-center gap-2">
            <Sparkles className="animate-spin" />
            <span className="text-zinc-500 text-sm">Loading Neural Pathways...</span>
          </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen text-zinc-300 selection:bg-indigo-500/30 relative">
      <CosmicBackground />

      <article className="max-w-3xl mx-auto px-6 pt-12 pb-20">
        
        {/* Navigation */}
        <Link href="/" className="group flex items-center gap-2 text-zinc-500 hover:text-indigo-400 transition-colors mb-8 w-fit">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Orbit</span>
        </Link>

        {/* Content Body */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col text-lg leading-relaxed gap-4"
        >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Context Window to full extent
            </h1>
            
            <p>
                Every large language model has a context window, the finite stretch of text it can “see” at any particular time. Your prompt, conversation history, system instructions, or documents, all lies inside that window and shapes the next output token. Everything outside it might as well not exist.
            </p>
            
            <QuoteBox author="Andrej Karpathy">
                In every industrial-strength LLM app, context engineering is the delicate art and science of filling the context window with just the right information for the next step.
            </QuoteBox>
            
            <p>
                For years, this window was painfully small, while the increase in context window sounds revolutionary, but they only delay the bottleneck, not remove it.
            </p>
            
            {/* Section 1 */}
            <SectionTitle>With such huge windows, why even bother?</SectionTitle>
            
            <div className="flex flex-col md:flex-row gap-8 my-4">
                <p className="flex-1">
                    Even when all the necessary information still lies within the window, the model can degrade, producing inconsistent or even hallucinated responses, this is because models have "attention budget" which they process at once when parsing large amount of data. Every new token introduced depletes this budget by some amount, increasing the need to carefully curate the tokens available to the LLM.
                </p>
                <div className="relative h-[290px] md:w-[300px] shrink-0 rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/50">
                    <Image src="/blogs/llm_rot.png" alt="LLM Attention Rot Diagram" fill className="object-fill" />
                </div>
            </div>

            <p>
                For example, while using response_format as JSON, you might explicitly instruct the model to reply in JSON. Yet, if you omit the word “JSON” in a later prompt — even though that instruction is technically still within the window — the model may fall back to plain text.
                Models with million-token windows like Gemini 1.5 Pro and Claude 3 Opus exhibit instruction loss mid-context, requiring explicit reinforcement of critical directives (e.g., repeating “Respond strictly in JSON” at each turn).
            </p>
            <p>
                This illustrates a subtle but crucial point: the model doesn&apos;t truly “recall” — it only reweighs attention across visible tokens.
                And that limitation defines the boundary of what your Agent can do.
            </p>
            <p>
                As your AI agent iterates through its reasoning loop, it accumulates an expanding set of potentially relevant data (state updates, retrieved facts, user inputs, and generated hypotheses) for the next turns. Since the model&apos;s context window is finite, this data cannot stay in the window all at once, we must define systems to selectely reintroduce this data when the LLM needs it.
            </p>
            <p>
                This selective process is known as context engineering: the systematic curation of information that enters the model&apos;s active context to maximize coherence and efficiency.
            </p>

            {/* Section 2 */}
            <SectionTitle>Understanding what a good context means?</SectionTitle>
            <p>
                A good context is not just everything that&apos;s relevant — it&apos;s the minimal, well-structured subset of information that maximizes the model&apos;s ability to stay coherent, factual, and task-aligned.
                Think of it as attention economy management.
                Every token competes for a limited share of the model&apos;s limited attention budget. A good context ensures that the right tokens win that competition.
            </p>
            <p>
                Anthropic recommends organizing prompts into distinct sections (like background_information, instructions, ## Tool guidance, ## Output description, etc) and using techniques like XML tagging or Markdown headers to delineate these sections.
            </p>
            <p>
                The goal isn&apos;t to remind the model of everything, but to equip it with just enough to act intelligently in the moment. A well-engineered context is lean yet expressive: it captures the user&apos;s intent, reinforces critical rules, and surfaces only the most relevant past information or retrieved facts.
            </p>
            <p>
                A good context is deliberate, not accidental — but keeping it that way gets harder as conversations grow. To manage this, we need techniques that actively decide what to keep, what to drop, and what to retrieve when needed. This is where methods like Context Compactation, RAG, Memory files, and Sub-agent architectures come into play.
            </p>

            {/* Section 3 */}
            <SectionTitle>Retrieval Augmented Generation</SectionTitle>
            <p>
                RAG is a very vast topic, and can be traced all over the AI application layer. Code agents are some of the best examples of RAG in large-scale production.
            </p>
            <p>
                In agentic systems, RAG offers a powerful way to make reasoning loops more efficient. Rather than forcing the model to regenerate or reprocess information each time, RAG can be utilised to cache subqueries. When a similar query appears again, instead of asking the LLM to rebuild the plan from scratch, the system can retrieve prior results from a vector store. These stored results act like reusable knowledge blocks, ready to plug back into the reasoning chain whenever needed. This not only saves time but also reduces cost, since every avoided LLM call trims both latency and token usage. What makes this approach especially elegant is that it redefines what “context” means. Context isn&apos;t just a static window of past tokens; it&apos;s a dynamic resource, something that can be searched, filtered, and reused based on similarity and intent.
            </p>
            
            <p>
                RAG can also be extended beyond data retrieval into tool selection. When an agent is given too many tools often with overlapping or ambiguous descriptions, it can become uncertain about which one to use. By applying RAG here, the system retrieves only the most semantically relevant tools for the task at hand. The paper <ExternalLink href="https://arxiv.org/abs/2410.14594">Toolshed: Scale Tool-Equipped Agents..</ExternalLink> showcases how this simple step can improve tool selection accuracy by up to threefold.
            </p>

            {/* Section 4 */}
            <SectionTitle>Compaction</SectionTitle>
            <p>
                Context compaction is the practice of summarizing accumulated interactions and reinitializing a new, lighter context window seeded with that summary. Instead of endlessly expanding the context, compaction distills what&apos;s already there, preserving key goals, facts, and reasoning steps while reducing token load.
            </p>
            
            <div className="flex flex-col md:flex-row gap-8 my-4 items-start">
                 <div className="relative h-[350px] w-full md:w-[300px] shrink-0 rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/50">
                    <Image src="/blogs/context_overload.png" alt="Context Overload Diagram" fill className="object-fill" />
                </div>
                <p className="flex-1">
                    Think of it like playing Minecraft. As you roam the world searching for a llama, you pass through forests, rivers, and villages. Once you finally reach the desert, you don&apos;t consciously remember every single block you walked past. Instead, your brain keeps a compact summary: “You&apos;re in the desert, looking for a llama, last spotted near the dunes.” That&apos;s compaction in spirit: forgetting irrelevant details while keeping a coherent mental snapshot that lets you keep progressing toward your goal.
                </p>
            </div>
            
            <p>
                Systems like Claude Code use a similar mechanism called “auto-compact,” automatically summarizing interactions once the context nears its limit. These summaries can follow recursive or hierarchical strategies to maintain fidelity across long trajectories. Compaction can also be applied at more granular levels, such as summarizing token-heavy tool outputs or compressing information at agent agent boundaries to reduce transfer overhead.
            </p>
            <p>
                The art of compaction lies in deciding what to keep versus what to discard. Compress too lightly, and the model wastes tokens on noise; too aggressively, and you risk erasing subtle details that only prove important later. Engineers designing compaction systems often tune prompts iteratively: start by maximizing recall and capturing every potentially relevant detail,then refine for precision by trimming superfluous content.
            </p>

            {/* Section 5 */}
            <SectionTitle>Structured note-taking / Memory files</SectionTitle>
            <p>
                Structed note taking, is a technique where the agent regularly writes notes persisted to memory outside of the context window. These memory files can be tool call results, a mega plan which the agent have to follow, or any kind of fact or information the agent might need in future and can be pulled anytime.
            </p>
            <p>
                Imagine you&apos;re playing Minecraft again on your quest to find a llama, but also to build a base, and craft a saddle. Along the way, you keep a notebook: where you last saw llamas, coordinates of useful villages, and which materials you still need. You don&apos;t carry all those details in your head (your “context”); instead, you&apos;ve written them down so you can check them anytime. That notebook is your memory file—structured, persistent, and evolving with each step of your journey.
            </p>
            <p>
                For an AI agent, the same principle applies. Instead of retaining every interaction or computation inside its prompt, it stores distilled, structured notes—like JSON records, key-value pairs, or summaries—into external memory. Later, when the agent needs that information, it can retrieve and reintroduce it selectively. This allows for scalable reasoning across long tasks, continuous improvement, and resilience even when the raw context is reset.
            </p>

            {/* Section 6 */}
            <SectionTitle>Sub-agent architectures</SectionTitle>
            <p>
                Sub-agent architectures solve the context build up by dividing one large, monolithic agent into specialized smaller agents. Each with its own context, prompt, and area of responsibility.
            </p>
            <p>
                Imagine an customer support agent that handles everything from returns and warranties to billing inquiries. If a single agent tried to juggle all of that, its context would quickly become bloated with conflicting instructions — details about refund policies, warranty timelines, and invoice generation competing for attention. The model&apos;s focus would blur, and even simple queries might produce inconsistent or incorrect responses.
            </p>
            
            <div className="relative h-[700px] w-full my-6 rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/50">
                <Image src="/blogs/subagetnt.png" alt="Sub-agent Architecture Diagram" fill className="object-fill" />
            </div>

            <p>
                By splitting this system into specialized sub-agents — a Return Agent, Warranty Agent, and Billing Agent — each operates within a compact, well-defined context. The Return Agent only needs return policies and workflows; the Warranty Agent handles product coverage and repair rules; the Billing Agent focuses solely on payment history and invoices. The main customer support agent agent simply routes the query to the right specialist and aggregates the responses.
            </p>
            <p>
                This architecture dramatically reduces context overload, improves accuracy, and allows each sub-agent to evolve independently. Instead of one overworked generalist, you get a team of focused experts — each efficient in its own domain, yet coordinated toward the same goal.
            </p>

            {/* Conclusion */}
            <SectionTitle>Conclusion</SectionTitle>
            <p>
                Designing effective agentic systems is as much about managing context as it is about reasoning or tool use. Techniques like RAG, context compaction, structured note-taking, and sub-agent architectures all tackle the same core challenge: helping the agent focus on what truly matters while avoiding overload. RAG teaches the value of retrieving relevant information dynamically, compaction distills ongoing interactions without losing coherence, structured note-taking builds persistent memory for long-term goals, and sub-agent architectures divide responsibilities to maintain clarity and precision.
            </p>
            <p>
                Together, these strategies form a toolkit for scalable, reliable, and efficient agents. They allow agents to handle long conversations, complex workflows, and multiple tools without getting bogged down by their own history. At its heart, context engineering is about balance—deciding what to remember, what to retrieve, and what to hand off. Mastering this balance is what transforms a capable AI model into a truly effective, agentic system.
            </p>
        </motion.div>

        <Footer />
      </article>
    </main>
  );
}

export default ContextWindowBlog;