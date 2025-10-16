"use client";

import { useState } from "react";
import { Footer } from "@/app/(landing)/_components/footer";;
import { useMediaQuery } from "usehooks-ts";
import { LoadingBox } from "@/components/loading";
import Image from "next/image";
import { cn } from "@/lib/utils";

const BlogsPage = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [loading, setLoading] = useState(false);

  if(loading) {
    return (
      <div className="min-h-full w-full flex justify-center items-center">
          <LoadingBox/>
      </div>
    )
  }

  return (
    <div className={cn("min-h-screen justify-between flex flex-col gap-y-8 flex-1 pb-10 lg:px-[45vh] md:px-[20px] sm:px-[10px]", isMobile && "px-[14px]")}>
      <div className="flex flex-col text-justify gap-4">
        <div className="relative h-[20rem] w-full overflow-hidden rounded-xl">
            <Image src={"/blogs/transformers.png"} alt={""} fill/>
        </div>
        <h1 className="text-3xl font-bold">Transformers Explained</h1>
        <p>
            With the release of <a href="https://arxiv.org/abs/1706.03762" className="underline" target="blank">"Attention is All You Need"</a> paper in 2017, the translation of text from one language to another took a giant leap forward.
            The Neural Networks which originated with an aim to translate texts, started writting code in just few years.
            The addition of one layer "Attention", sparked this revolution, so I dove into the paper and summed up my understanding here.
        </p>
        <p className="text-xl font-semibold">Why was even Transformers were introduced, what did it solved?</p>
        <p>
            The Transformer model was introduced to overcome the major limitations of recurrent and convolutional sequence models (RNNs and CNNs), particularly in handling long-range dependencies and achieving efficient parallelization during training.
        </p>
        <p>
            RNNs process input tokens one step at a time, making it impossible to parallelize computations across sequence elements. This results in slow training and inference, especially for long sequences. Even with gating mechanisms like LSTMs and GRUs, they struggle to connect distant positions effectively. Their training involves backpropagation through time, which often suffers from vanishing or exploding gradients, further limiting their ability to learn long-term dependencies.
        </p>
        <p>
            CNN-based models, while more parallelizable, require many layers or large convolutional kernels to capture long-range relationships. This increases computational cost and still fails to model sequential order dynamically, as CNNs rely on fixed-size convolutional windows rather than a true temporal process.
        </p>
        <p>
            Transformers were introduced to eliminate this dependence on sequential computation. By relying entirely on the attention mechanism, they enable direct connections between any two tokens in a sequence, regardless of their distance, allowing for massive parallelization and more effective modeling of long-range dependencies.
        </p>
        <p className="text-xl font-semibold">How Transformers Work, The Architecture Explained</p>
        <p>In progress...</p>
      </div>
      <Footer />
    </div>
  );
}

export default BlogsPage;