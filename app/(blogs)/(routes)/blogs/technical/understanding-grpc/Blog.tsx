"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Moon, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Footer } from "@/app/(landing)/_components/footer";
import { SectionTitle, QuoteBox } from "@/app/(blogs)/_components/extras";
import { BlogSection } from "@/app/(blogs)/_components/Inner_blogsection";

const Grpc_Blog = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const lifeBlogs = [
        { title: "Building reliable multi-agent AI systems", desc: "Architecting reliability into non-deterministic systems.", slug: "/blogs/technical/Building-reliable-multi-agent-AI-systems" },
        { title: "Context window to full extent", desc: "Techniques for compaction and structured notes to maintain coherence.", slug: "/blogs/technical/Context-window-to-full-extent" },
    ];

    return (
        <main className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-800 dark:text-zinc-300 selection:bg-indigo-500/30 relative transition-colors duration-300">

            <article className="max-w-3xl mx-auto px-6 pt-12 pb-20">

                {/* Navigation Header with Toggle */}
                <div className="flex items-center justify-between mb-8">
                    <Link href="/" className="group flex items-center gap-2 text-zinc-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors w-fit">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-medium">Back to Orbit</span>
                    </Link>

                    {/* Theme Toggle Button */}
                    {mounted && (
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-all"
                            aria-label="Toggle Dark Mode"
                        >
                            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                    )}
                </div>

                {/* Content Body */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col text-lg leading-relaxed gap-6"
                >
                    <div className="relative h-[20rem] w-full overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50 shadow-2xl">
                        <Image
                            src="/blogs/grpc_header.png"
                            alt="Multi Agent System Header"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4 tracking-tight">
                        Understanding gRPC
                    </h1>

                    {/* Section 1: RPC */}
                    <SectionTitle>RPC, Remote Procedure Call</SectionTitle>
                    <p>
                        RPC is a form of Client-Server Communication Method that uses a form of function call rather than usual http call.
                    </p>
                    <p>
                        In programming, a function call is when a piece of code runs and returns a value. In a local function call, the logic lives in the same memory space as your code. In Remote Procedure Call (RPC), the logic lives on a different server, but you call it exactly the same way you call a local function.
                    </p>

                    <p>
                        RPC tries to hide the network entirely. It lets you write code that says <code className="text-indigo-600 dark:text-indigo-400 font-mono">do_something()</code>, and the system figures out how to send that command over the wire, run it, and bring the answer back. While in a HTTP/REST network we manually tell the HTTP client: &quot;I want to perform GET action on the /users/123 resource.&quot;
                    </p>

                    <p>Example: Lets imagine we want to calculate a sum.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
                        <div className="p-4 rounded-lg bg-zinc-200 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800">
                            <h4 className="font-bold text-sm mb-2 text-zinc-700 dark:text-zinc-400">Option A: HTTP/REST</h4>
                            <p className="text-sm mb-2">We manually construct a network request URLs, methods (GET/POST), headers and status codes.</p>
                            <pre className="text-xs bg-zinc-100 dark:bg-black p-2 rounded overflow-x-auto text-zinc-800 dark:text-zinc-300 font-mono">
                                {`import requests 
# Explicitly building a network message
response = requests.get(
  ".../calculator/add?a=5&b=10"
) 
result = response.json()["value"]`}
                            </pre>
                        </div>

                        <div className="p-4 rounded-lg bg-zinc-200 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800">
                            <h4 className="font-bold text-sm mb-2 text-zinc-700 dark:text-zinc-400">Option B: RPC</h4>
                            <p className="text-sm mb-2">We treat the server like an imported library. It looks like local code, but it executes remotely.</p>
                            <pre className="text-xs bg-zinc-100 dark:bg-black p-2 rounded overflow-x-auto text-zinc-800 dark:text-zinc-300 font-mono">
                                {`
# Looks like a local function call
result = client.add(5, 10)
`}
                            </pre>
                        </div>
                    </div>

                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mt-6">How it works conceptually?</h3>
                    <ul className="list-disc pl-5 space-y-2 marker:text-indigo-500">
                        <li><strong>Client:</strong> Calls a local function (the &apos;stub&apos;).</li>
                        <li><strong>Stub:</strong> Packs the function name and arguments into a packet.</li>
                        <li><strong>Network:</strong> Sends the packet to the server.</li>
                        <li><strong>Server:</strong> Unpacks the packet, finds the real function, runs it, and sends the result back.</li>
                    </ul>

                    {/* Placeholder for Image 1 */}
                    <div className="relative h-[26rem] w-full my-6 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50">
                        <Image
                            src="/blogs/rpc_diagram.png"
                            alt="RPC Concept Diagram"
                            fill
                            className="object-contain p-4 rounded-xl"
                        />
                    </div>

                    {/* Section 2: gRPC */}
                    <SectionTitle>gRPC</SectionTitle>
                    <p>
                        gRPC is a high-performance, open-source framework by Google which allows to connect services across different languages and platforms as if they were local function calls.
                    </p>
                    <p>
                        Unlike standard HTTP APIs (Rest) that typically send JSON over HTTP/1.1, gRPC is built on HTTP/2 and uses Protocol Buffers for data serializations. The HTTP/1.1 was incapable of sending multiple request or getting multiple response together in a single connection. A new layer, binary framing was introduced in HTTP/2. This binary layer does the encapsulation and encoding of the data. Hence, giving rise to gRPC.
                    </p>

                    {/* Placeholder for Image 2 */}
                    <div className="relative h-[20rem] w-full my-6 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50">
                        {/* Replace src with your actual image path */}
                        <Image
                            src="/blogs/grpc_layers.png"
                            alt="HTTP/2 Binary Framing Layer"
                            fill
                            className="object-contain p-4 rounded-xl"
                        />
                    </div>

                    {/* Section 3: Protocol Buffers */}
                    <SectionTitle>Protocol Buffers (The IDL)</SectionTitle>
                    <p>
                        Instead of JSON, gRPC uses Protocol Buffers. This is both an Interface Definition Language (IDL) and a binary serialization format. This is where we define a API contract in a <code className="bg-zinc-200 dark:bg-zinc-800 px-1 rounded font-mono text-sm">.proto</code> file.
                    </p>
                    <p>
                        As this is in the form of contract, both client and server side needs to have the same proto file, this will act as the intermediary contract for client to call any available functions from the server.
                    </p>
                    <p>
                        Browsers cannot speak native gRPC. They don&apos;t give enough control over HTTP/2 frames to support it. If we want to use gRPC from a Client side Component (frontend), we need a proxy called <strong>gRPC-Web</strong> to translate. gRPC shines in Server-to-server communication (including Next.js Server component talking to a Python backend).
                    </p>

                    <SectionTitle>A minimal microservice architecture using gRPC</SectionTitle>
                    <p>
                        By defining strict contracts using Protocol Buffers, services can evolve independently while maintaining type safety across boundaries. This architecture minimizes overhead and latency compared to traditional REST JSON communication.
                    </p>
                    <div className="relative h-[30rem] w-full my-6 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50">
                        <Image
                            src="/blogs/api_gateway.png"
                            alt="HTTP/2 Binary Framing Layer"
                            fill
                            className="object-contain p-4 rounded-xl"
                        />
                    </div>
                    <p>In an API Gateway architecture, gRPC and REST work together by treating the Gateway as a translation bridge. The Gateway exposes standard RESTful endpoints to the outside world, allowing browsers and mobile apps to communicate using familiar JSON over HTTP. When a request arrives, the Gateway "transcodes" the JSON payload into binary Protocol Buffers and forwards the request to internal microservices using high-performance gRPC. The response travels the reverse path: the microservice returns binary data, which the Gateway deserializes back into JSON for the client. This setup combines the accessibility of REST for the frontend with the speed, efficiency, and strict typing of gRPC for backend communication.</p>

                </motion.div>
                <BlogSection 
                    title="Life & Travel" 
                    blogs={lifeBlogs} 
                />
                <Footer />
            </article>
        </main>
    );
}

export default Grpc_Blog;