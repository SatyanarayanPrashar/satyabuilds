import type { Metadata } from "next";
import Blog from "./Blog";

export const metadata: Metadata = {
  title: "Building reliable multi-agent AI systems",
  description: "LLMs are limited to frame their answers within their context window, which can be very limited in some cases. Agents working in loop have massive prompts, conversation history, system instructions, or documents, all lies inside that window leaving a very little space for the next step. This becomes more relevent in agents which works in longer duration. In such senarios a single agent system might run out of context and the quality of the result regrades exponentialy. Here comes the need of multi-agent systems.",
  
  // 1. Open Graph (Used by LinkedIn, Facebook, Discord, Slack)
  openGraph: {
    title: "Building reliable multi-agent AI systems",
    description: "LLMs are limited to frame their answers within their context window...",
    url: "https://satyabuilds.xyz/blogs/technical/Building-reliable-multi-agent-AI-systems",
    siteName: "Satya's Blog",
    images: [
      {
        url: "/blogs/multi_agent.png",
        width: 1200,
        height: 630,
        alt: "Building reliable multi-agent AI systems",
      },
    ],
    type: "article",
  },

  // 2. Twitter Card (Used by X/Twitter)
  twitter: {
    card: "summary_large_image",
    title: "Building reliable multi-agent AI systems",
    description: "LLMs are limited to frame their answers within their context window...",
    images: ["/blogs/multi_agent.png"],
  },

  icons: {
    icon: "/icon.svg",
  },
};

const BlogsPage = () => {
  return (
    <Blog />
  );
}

export default BlogsPage;