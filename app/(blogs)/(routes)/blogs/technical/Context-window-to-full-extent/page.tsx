import type { Metadata } from "next";
import ContextWindow_Blog from "./Blog";

export const metadata: Metadata = {
    title: "",
    description: "",
    
    // 1. Open Graph (Used by LinkedIn, Facebook, Discord, Slack)
    openGraph: {
      title: "Context Window to Full Extent",
      description: "LLMs are limited to frame their answers within their context window...",
      url: "https://satyabuilds.xyz/blogs/technical/Building-reliable-multi-agent-AI-systems",
      siteName: "Satya's Blog",
      images: [
        {
          url: "/blogs/context_overload.png",
          width: 1200,
          height: 630,
          alt: "Context Window to Full Extent",
        },
      ],
      type: "article",
    },
  
    // 2. Twitter Card (Used by X/Twitter)
    twitter: {
      card: "summary_large_image",
      title: "Context Window to Full Extent",
      description: "LLMs are limited to frame their answers within their context window...",
      images: ["/blogs/context_overload.png"],
    },
  
    icons: {
      icon: "/icon.svg",
    },
  };

const ContextWindowBlog = () => {

  return (
    <ContextWindow_Blog />
  );
}

export default ContextWindowBlog;