import type { Metadata } from "next";
import Blog from "./Blog";

export const metadata: Metadata = {
  title: "Understanding gRPC",
  description: "Moving beyond REST APIs for efficient inter-service communication.",
  
  // 1. Open Graph (Used by LinkedIn, Facebook, Discord, Slack)
  openGraph: {
    title: "Understanding RPC and gRPC", // UPDATED
    description: "Moving beyond REST APIs for efficient inter-service communication.",
    url: "https://satyabuilds.xyz/blogs/technical/Understanding-gRPC", // Ensure URL casing matches folder
    siteName: "Satya's Blog",
    images: [
      {
        url: "/blogs/grpc_header.png", // Make sure to use a relevant image if you have one, or keep a default
        width: 1200,
        height: 630,
        alt: "Understanding RPC and gRPC",
      },
    ],
    type: "article",
  },

  // 2. Twitter Card (Used by X/Twitter)
  twitter: {
    card: "summary_large_image",
    title: "Understanding RPC and gRPC", // UPDATED (Was Multi-Agent)
    description: "RPC tries to hide the network entirely. It lets you write code that says do_something()...", // UPDATED
    images: ["/blogs/grpc_header.png"],
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