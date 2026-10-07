// YouTube videos shown on /youtube. Add a new object here to publish a new section —
// the page, structured data, sitemap and llms.txt all read from this list.

export type Chapter = {
  /** Start time in seconds */
  start: number;
  title: string;
  /** Transcript paragraphs spoken during this chapter */
  paragraphs: string[];
};

export type Video = {
  id: string; // YouTube video id
  slug: string; // anchor on /youtube
  title: string;
  description: string;
  summary: string;
  uploadDate: string; // ISO 8601
  duration: string; // ISO 8601 duration
  durationLabel: string;
  topics: string[];
  takeaways: string[];
  chapters: Chapter[];
  faqs: { q: string; a: string }[];
};

export const CHANNEL = {
  name: "Invisigent",
  handle: "@invisigent",
  url: "https://www.youtube.com/@invisigent",
  subscribeUrl: "https://www.youtube.com/@invisigent?sub_confirmation=1",
  tagline: "Architecture and infrastructure behind modern AI systems.",
};

export const videos: Video[] = [
  {
    id: "4EJ4-WXrf74",
    slug: "openai-astra-looped-transformers",
    title: "OpenAI's Astra: The Strange Idea of Reusing AI Layers",
    description:
      "What if an AI model didn't need more layers to become more capable — what if it could reuse the same layers and compute more? A breakdown of looped transformers, the parameters-versus-compute trade-off, and what reports about OpenAI's Astra suggest about a different way to scale AI.",
    summary:
      "Most AI scaling means adding layers and parameters. A looped transformer instead runs the same blocks several times, reusing their parameters while the representation keeps changing. That saves memory but not compute: four blocks run three times is still twelve block applications. Harsh Gupta explains the trade-off, why it matters for inference cost, and why reports that OpenAI's Astra may use looped computation are interesting — while noting the architecture has not been officially disclosed.",
    uploadDate: "2026-09-15T06:30:23-07:00",
    duration: "PT5M48S",
    durationLabel: "5:48",
    topics: ["Looped transformers", "AI scaling", "OpenAI Astra", "Test-time compute", "Model architecture", "Inference cost"],
    takeaways: [
      "A standard transformer scales by adding blocks, and every new block brings its own learned parameters.",
      "A looped transformer reuses the same blocks multiple times: same parameters, but a different input state on every pass.",
      "Looping saves memory, not compute — four blocks run three times is still twelve block applications.",
      "The trade-off is where you spend resources: more unique parameters, or more computation through existing ones. Neither is automatically better.",
      "OpenAI has not disclosed Astra's internal architecture; looped or recurrent computation is suggested by reports and technical analysis only.",
      "Looped computation is not the same thing as a hidden chain of thought — it describes how compute is structured, not what the model reasons about.",
    ],
    chapters: [
      {
        start: 0,
        title: "A different way to scale AI",
        paragraphs: [
          "OpenAI's new Astra model may be using an interesting way of scaling AI: using the same computation multiple times and spending more on one problem. Both approaches come with their trade-offs.",
          "Wait — why would you use the same layers? If you have to give the model more, why don't you just add more layers? To understand this, we have to understand the idea of a looped transformer. And if the Astra reports are accurate, then this AI model is scaled up in a completely different way.",
          "Hi, I am Harsh, and in this video we are going to break down exactly how this works.",
        ],
      },
      {
        start: 29,
        title: "How we normally make models bigger",
        paragraphs: [
          "Normally, when we talk about making AI models bigger, what do we imagine? More layers, more parameters, a bigger model. But here is a different question: what if the model doesn't need more layers? What if it just needs to use the layers it has more times?",
          "Sounds simple, right? But it's a very important architectural trade-off.",
        ],
      },
      {
        start: 46,
        title: "A standard transformer, block by block",
        paragraphs: [
          "First, let's take a normal transformer. Imagine a simplified one: the input goes through the first block, then the second, then the third, and then the fourth. Every block transforms the representation of the input, so as information moves through the model, it changes after every block.",
          "Now let's say we want the model to do more computation. What's the normal approach? Add more blocks. Let's say we now have eight blocks.",
        ],
      },
      {
        start: 71,
        title: "Looped computation: reusing the same blocks",
        paragraphs: [
          "The important part is that these new blocks come with their own learned parameters. So the model not only has more computation, but also more unique transformations.",
          "But now imagine a second possibility. Instead of stopping after four blocks, we use those four blocks again — maybe one more time. This is the basic intuition behind looped computation.",
          "Here is an important distinction. When we say \"same layers\", it does not mean the model is repeating exactly the same calculations. What is being reused are the parameters, but the representation changes after every pass. So: same parameters, but a different input state. And this is the reason repeated computation is useful.",
        ],
      },
      {
        start: 114,
        title: "Why not just add more layers?",
        paragraphs: [
          "Now an obvious question: if we need more computation, why not add more layers? Because adding more layers is not free. In a deeper model, every new block generally has its own parameters. In a looped model, you can use existing parameters in multiple computational steps.",
          "So you can increase the amount of computation without increasing the number of unique parameters, which saves memory.",
        ],
      },
      {
        start: 138,
        title: "The catch: looping is not free",
        paragraphs: [
          "But now an important catch: this is not computation-free. If we run four blocks three times, we have performed twelve block applications. So you are saving on creating additional unique parameters, but you are still paying for the computation required to run those blocks.",
          "Basically, you are changing where you spend your resources. The first approach is more unique parameters; the second approach is more computation using existing parameters — and neither one is automatically better. The real question is whether these additional computational passes make the model much better at solving problems.",
        ],
      },
      {
        start: 175,
        title: "Scaling computation, not just parameters",
        paragraphs: [
          "This connects to a much bigger idea in modern AI. The obvious way of improving models was to make them bigger. But now there's another dimension we can play with: how much computation does the model actually perform?",
          "So it's not enough to just ask how many parameters there are. You also have to ask how much computation it is actually doing.",
        ],
      },
      {
        start: 210,
        title: "What we actually know about Astra",
        paragraphs: [
          "Now let's go to Astra. The public information tells us what the system can do, but OpenAI has not disclosed its exact internal architecture. Some reports and technical analysis suggest Astra may use some form of looped or recurrent computation.",
          "If those reports are right, this is interesting because a big model is then not just representing more capacity — it represents a fundamentally different approach. Instead of saying \"let's keep adding more layers\", you can ask: can these learned transformations be applied repeatedly to the evolving representations?",
        ],
      },
      {
        start: 244,
        title: "Inference cost at production scale",
        paragraphs: [
          "Of course, there is a practical side. If we are doing more passes at inference time, then we need to run more computation. And at production scale, this becomes very important, because compute is not an abstract number — GPU utilization, latency, throughput, and cost all depend on how much a model is running.",
        ],
      },
      {
        start: 264,
        title: "Looping is not a hidden chain of thought",
        paragraphs: [
          "There's one more distinction I want to make. Looped computation does not automatically mean the model has some hidden chain of thought happening internally. These are two different concepts.",
          "Looping describes how computation is structured. It doesn't by itself tell us what the model is reasoning about, or how its internal reasoning actually works.",
          "So the interesting part about Astra isn't just whether it has loops — it's the bigger direction this represents. We have spent years improving AI by making models larger: more parameters, more layers, more capacity. But another question has become increasingly important: how should we spend the computation? Looped architectures are one way of exploring that design space.",
        ],
      },
      {
        start: 305,
        title: "The main takeaway",
        paragraphs: [
          "Here's the main idea I want you to take away. An AI model doesn't necessarily become more capable only by becoming bigger. You can increase the number of parameters, or you can potentially reuse the parameters and spend more computation applying them.",
          "Looped architectures have explored that second idea, and if the reports about Astra are eventually confirmed, it would be a pretty interesting example of frontier AI exploring a different way to scale computation. So next time you hear a model is bigger, don't just ask how many parameters there are. Ask how much computation it is actually doing.",
          "If you enjoyed this breakdown and want more videos on the architecture and infrastructure behind modern AI systems, subscribe to my channel. I will see you in the next one.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is a looped transformer?",
        a: "A looped transformer runs the same set of transformer blocks more than once instead of stacking new blocks. The parameters are reused on every pass, but the representation flowing through them changes each time, so each pass does new work.",
      },
      {
        q: "Does reusing layers make a model cheaper to run?",
        a: "It saves memory, not compute. Reusing blocks avoids adding unique parameters, but every pass still costs computation: four blocks run three times is twelve block applications, the same as a twelve-block model.",
      },
      {
        q: "Does OpenAI's Astra use a looped architecture?",
        a: "It is not confirmed. OpenAI has not disclosed Astra's internal architecture. Some reports and technical analysis suggest it may use some form of looped or recurrent computation.",
      },
      {
        q: "Is looped computation the same as a hidden chain of thought?",
        a: "No. Looping describes how computation is structured inside the model. It does not by itself say what the model is reasoning about or how its internal reasoning works.",
      },
      {
        q: "Why does looped computation matter in production?",
        a: "More passes at inference time means more computation per request, which directly affects GPU utilization, latency, throughput and cost at scale.",
      },
    ],
  },
  {
    id: "H5PVnjhDF6E",
    slug: "ai-agent-harness",
    title: "Your AI Agent Is Failing for the Wrong Reason",
    description:
      "A smart model doesn't automatically make a smart agent. A breakdown of the agent harness — the layer around the model that decides what it can see, what tools it can use, what it's allowed to do, and how it finds out whether its actions actually worked.",
    summary:
      "An AI model is a reasoning engine; the harness is the system that lets that reasoning act on the real world. Harsh Gupta walks through the four questions every useful agent has to answer — what the model knows, what it can use, what it's permitted to do, and how it verifies success — using a coding agent's think → act → observe → feedback loop as the example. He also covers why more tools can make an agent worse, why permissions and sandboxing belong in the harness, and why the same model in two different harnesses behaves like two different agents.",
    uploadDate: "2026-09-23T07:30:00-07:00",
    duration: "PT4M44S",
    durationLabel: "4:44",
    topics: ["AI agents", "Agent harness", "Tool use", "Feedback loops", "Permissions & sandboxing", "Harness engineering"],
    takeaways: [
      "An agent is not just a model — the harness around it supplies context, tools, permissions and verification.",
      "Every useful agent answers four questions: what does the model know, what can it use, what is it allowed to do, and how does it know the task actually worked?",
      "The act → observe → feedback loop (edit code, run tests, read results, try again) is a major reason coding agents succeed.",
      "The same model in two different harnesses behaves completely differently, because you changed the environment, not the reasoning engine.",
      "More tools is not better: each extra tool is another choice to make, another interface to understand and another result to interpret.",
      "Permissions, approval boundaries and sandboxing live in the harness — you wouldn't give a new developer unrestricted production access either.",
      "Prompt engineering can't rescue bad context, unreliable tools, missing verification or wrong permissions. That's harness engineering.",
    ],
    chapters: [
      {
        start: 0,
        title: "The developer with no access",
        paragraphs: [
          "Imagine you hire a smart developer who can reason extremely well. But you don't give them access to your codebase. You don't give them access to the terminal. You don't give them access to the database. You don't even give them browser access, and they can't run tests. So will they actually be able to fix your production bug? Probably not.",
          "And that is basically the problem when we think an AI agent is just an AI model.",
          "Hi, I'm Harsh, and in this video we'll talk about the AI agent harness. We'll understand why an AI agent isn't just a model, what a harness is, what it does around a model, and how tools, context and feedback turn a simple AI model into an actual agent. The most interesting part: give the same model a different harness and see how its behavior becomes completely different.",
        ],
      },
      {
        start: 42,
        title: "What is an agent harness?",
        paragraphs: [
          "So let's first understand what is happening inside an agent. When we say an AI agent can browse the web, edit files, run code, make API calls, use memory and even retry if something fails — the model isn't doing all of this magically. There is another layer around the model that makes all of this possible, and this layer is called the agent harness.",
          "You can think of the model as a reasoning engine, and the harness is the system that lets that reasoning engine interact with the real world. The model performs the reasoning. The harness manages what the model can see, what it can use, what permissions it has to act, and what happens after it takes an action.",
        ],
      },
      {
        start: 82,
        title: "The four questions every agent answers",
        paragraphs: [
          "Almost every useful agent has to answer four basic questions. What does the model know? What can the model use? What permissions does the model have? And how will the model know if its task was actually completed or not? The harness handles a big part of these things.",
        ],
      },
      {
        start: 96,
        title: "A coding agent, step by step",
        paragraphs: [
          "Let's take the example of a coding agent. You tell it to fix the authentication bug. The model can't magically fix the entire codebase just by looking at one sentence, right? The model can reason about the code it has received, then it decides what to change and what not to.",
          "But here comes the interesting part. The harness can also run the code tests, and the result of the tests goes back to the model. If there is any problem, the model makes changes to the code again, runs the tests again, and it goes on until all test cases pass.",
        ],
      },
      {
        start: 126,
        title: "Why the feedback loop matters",
        paragraphs: [
          "This loop is a major reason why AI agents become successful. Now the model is not just generating answers. It is taking action, observing what happened, and deciding what to do next based on that feedback.",
        ],
      },
      {
        start: 137,
        title: "Same model, different harness",
        paragraphs: [
          "Now here comes an interesting part. If you run the exact same model in two different harnesses, the behavior of both agents can be completely different — because you are not just changing the model, you are changing the entire environment in which the model operates.",
        ],
      },
      {
        start: 150,
        title: "Why more tools can make agents worse",
        paragraphs: [
          "If tools make agents more capable, then what should be the simple solution? Give the agent 100 or 200 tools. But there is a problem with this too: having too many tools can actually make the agent worse. The model will have to decide which tool to use, it will have to understand the tool's interface, and then interpret the result that comes back.",
          "So a good harness does not mean giving the model everything. Instead, it means providing the right capability at the right time.",
        ],
      },
      {
        start: 177,
        title: "Permissions, approvals and sandboxing",
        paragraphs: [
          "Now imagine the agent wants to do something dangerous. A production harness will obviously not let the agent perform that action blindly. The harness can enforce permissions, define approval boundaries, provide sandboxing, and place safety controls around the model's actions.",
          "Remember the developer we saw in the beginning? You wouldn't give a developer unrestricted production access, so you shouldn't blindly give an AI agent unrestricted access.",
        ],
      },
      {
        start: 202,
        title: "Harness engineering, not just prompting",
        paragraphs: [
          "And this is where building production agents gets interesting, because building an agent is not just about crafting a clever system prompt. You might have an amazing prompt, but if the agent is getting the wrong context, the tools are unreliable, there is no verification, or the permissions are wrong, then the prompt won't save you.",
          "That is why there is another concept: harness engineering. Instead of just asking how do we make the model smarter, you start asking how do we build a better environment around the model — because the model's reasoning is only useful when the surrounding system can convert that reasoning into reliable work.",
        ],
      },
      {
        start: 237,
        title: "Designing an operating environment",
        paragraphs: [
          "When you build an AI agent for a real business workflow, you are actually not just deploying a model. You are designing an entire operating environment around the model, and this is a completely different way of understanding AI agents.",
          "So next time someone tells you they built an agent, don't just ask which model are you using. Ask: what does it see? What can it do? What is it allowed to do? How does it know when it's wrong? Because a model can generate a brilliant answer, but an agent has to operate in the real world — and that is the job of the system around the model.",
        ],
      },
      {
        start: 271,
        title: "Wrapping up",
        paragraphs: [
          "If you like these behind-the-scenes breakdowns of AI, then subscribe — because in these systems there is a lot more happening than just the model.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is an AI agent harness?",
        a: "The harness is the layer around an AI model that lets its reasoning act on the real world. It manages what the model can see, which tools it can use, what permissions it has, and what happens after it takes an action.",
      },
      {
        q: "Why isn't an AI agent just a model?",
        a: "A model reasons; it can't browse, edit files, run code or retry on its own. Those capabilities come from the harness. Without context, tools, permissions and feedback, even a very capable model can't complete real work.",
      },
      {
        q: "Why can giving an agent more tools make it worse?",
        a: "Every extra tool adds a decision and an interface. The model has to pick the right tool, understand how to call it and interpret what comes back. A good harness provides the right capability at the right time rather than everything at once.",
      },
      {
        q: "How does a coding agent know it actually fixed the bug?",
        a: "Through the feedback loop. The harness runs the tests and returns the results to the model, which edits the code and runs them again until they pass. The agent acts, observes the outcome, and decides the next step from that feedback.",
      },
      {
        q: "What is harness engineering?",
        a: "Shifting the question from \"how do we make the model smarter\" to \"how do we build a better environment around the model\" — context, tools, verification and permissions. A great prompt can't compensate for wrong context or unreliable tools.",
      },
      {
        q: "Why does the same model behave differently in different agents?",
        a: "Because the environment changed, not the reasoning engine. Different context, tools, permissions and feedback mechanisms produce completely different behavior from identical model weights.",
      },
    ],
  },
  {
    id: "HtM_fq0SXa4",
    slug: "wg-kv-write-gated-kv-cache",
    title: "AI Is Wasting Its Memory: WG-KV",
    description:
      "AI doesn't need to remember everything. A breakdown of WG-KV (Write-Gated KV Cache): instead of storing every token in the KV cache and evicting later, a lightweight write-gate predicts which tokens are worth keeping before they are ever written to long-term memory.",
    summary:
      "In long-context AI systems the KV cache grows with every token, and during decoding the model keeps reading all of it, so memory becomes the bottleneck. Harsh Gupta explains WG-KV, which moves the keep-or-drop decision earlier: recent tokens sit in a local sliding window, and a lightweight, head-specific write-gate decides which ones get promoted to a global cache. He covers why a smaller cache doesn't automatically mean faster inference, the reported Llama 3.1 results, and the core risk: a gate that discards a token the model needs later.",
    uploadDate: "2026-09-30T07:30:27-07:00",
    duration: "PT7M52S",
    durationLabel: "7:52",
    topics: ["KV cache", "WG-KV", "LLM inference", "Long-context AI", "Memory bandwidth", "AI infrastructure"],
    takeaways: [
      "The KV cache stores key and value representations for every token so the model doesn't recompute them, and it grows with context length.",
      "During decoding the model repeatedly reads that cache, so long contexts and many concurrent requests turn memory into a system bottleneck.",
      "Quantization, GQA/MQA, paged KV cache and eviction all still write everything first. Write-gating asks whether a token is worth storing before it is stored.",
      "WG-KV keeps recent tokens in a local sliding window, then decides whether each one is promoted to a global cache or discarded as it leaves the window.",
      "The write-gate is lightweight and can be head-specific, because different attention heads care about different kinds of information.",
      "A smaller cache doesn't automatically mean proportionally faster inference. Latency depends on memory bandwidth, access patterns, batch size and workload.",
      "The core risk is prediction: a token that looks irrelevant now may be exactly what the model needs thousands of tokens later.",
    ],
    chapters: [
      {
        start: 0,
        title: "Does AI really need to remember everything?",
        paragraphs: [
          "Imagine you give an AI a document with 1.5 million tokens and ask it a very basic question. The model might only need one specific piece of information from that document, but to maintain that much context, it has to hold a huge amount of memory.",
          "So the question is: does an AI really need to remember everything?",
          "Hey, I'm Harsh, and on this channel we break down what's actually happening inside the systems, from models and agents all the way to the infrastructure running them at scale. Today we'll talk about WG-KV, an approach that asks a really interesting question: what does a model actually need to remember?",
        ],
      },
      {
        start: 35,
        title: "Why the KV cache becomes a bottleneck",
        paragraphs: [
          "Model systems use something called the KV cache so they can remember previous tokens. As the context gets longer, the KV cache gets bigger too. But here's the interesting part: not every token is equally useful.",
          "When a model processes a token, key and value representations are created and stored in the KV cache. Then, when the model generates the next token, it can reuse these representations instead of recalculating everything from scratch. The problem is that as the context grows, the KV cache grows right along with it.",
          "During generation, the model repeatedly reads from this stored context. So in long conversations, large documents, or when many users are running at once, memory becomes a serious system bottleneck. In production there isn't just one user: hundreds or thousands of requests run simultaneously, and each one can have its own KV cache.",
          "So the core problem becomes: how do we retain context without carrying everything forever? There are many ways to tackle this. We can quantize the cache, reduce the number of KV heads with techniques like GQA and MQA, use a paged KV cache to use memory more efficiently, or selectively evict information from the cache.",
        ],
      },
      {
        start: 107,
        title: "Why write everything in the first place?",
        paragraphs: [
          "But there's an even more interesting question: why write everything in the first place? If we have to decide later whether a token is useful, why not make that decision upfront, before storing it permanently?",
          "That is the core idea behind write-gating. Instead of saying \"store everything first and clean it up later\", the system asks right at the start: is this token worth remembering? If yes, it goes into the persistent cache. If not, it never gets committed to long-term memory.",
          "But there's a catch. What if a token seems useless right now but turns out to be critically important later? If we drop it immediately and the model needs that information in the future, it's permanently lost.",
        ],
      },
      {
        start: 145,
        title: "WG-KV: local vs global memory",
        paragraphs: [
          "So in WG-KV, you don't have to make an immediate, permanent decision. Recent tokens can be kept inside a local sliding-window context; think of it as short-term memory. As tokens slide out of the window, the system decides whether to promote them to the global cache or simply discard them.",
          "We humans do something very similar. We don't permanently store every sentence of every conversation. Recent exchanges stay easily accessible in active memory, while notable things, like someone's name, a deadline or a great idea, stay fixed in our mind.",
        ],
      },
      {
        start: 177,
        title: "How the write-gate works",
        paragraphs: [
          "Technically, WG-KV uses a lightweight write-gate. It examines token representations and computes a score predicting how useful that token will be in the future.",
          "And here's another interesting detail: different attention heads care about different types of information. One head might focus on local relationships while another focuses on broader semantic patterns. So gating can also be head-specific, meaning different attention heads don't all assign the same importance to a token. The gate can evaluate different representations of the key states, for example operating on pre-RoPE or post-RoPE representations. But memorizing the exact math isn't the main point.",
          "The important principle is that before committing anything to memory, the system actively tries to estimate the token's value. So now there are two tiers of memory. The local cache holds recent context that remains temporarily available, and the global cache holds tokens the system decided were worth preserving.",
          "When the model generates subsequent tokens, it uses both the recent local context and the selectively retained global context. So instead of treating the entire history as equally important, the system maintains a much leaner, higher-utility memory.",
        ],
      },
      {
        start: 244,
        title: "The shift: write selectively",
        paragraphs: [
          "This is the core conceptual shift. The traditional approach is: write everything, read everything, and evict later. WG-KV moves that decision earlier in the pipeline: predict utility, write selectively, and retain what truly matters.",
          "Imagine a coding agent working with a massive repository. It encounters function signatures, class definitions, imports, variables, documentation, and thousands of lines of boilerplate. Over the long run, a function signature or class structure is essential, while repetitive boilerplate doesn't need to be preserved at the same level.",
          "Now there's an important distinction. During prefill, the model processes the existing context and builds the KV cache. During decoding, it repeatedly uses cached information to generate new tokens. But we have to be careful here: a smaller cache doesn't automatically make the model proportionately faster. Real-world latency depends on memory bandwidth, hardware utilization, memory access patterns, batch sizes and workloads.",
          "Especially during decoding, systems can be heavily constrained by memory bandwidth. So if we can avoid storing and repeatedly reading unnecessary KV states, memory traffic drops significantly, which can be a huge win for long contexts and coding workloads.",
          "Reportedly, experiments with WG-KV on Llama 3.1 showed roughly 46% to 57% lower memory footprint, around 3.03x to 3.45x higher throughput, and around 1.8x to 2.0x faster decoding under the evaluated settings. This matters more as context length grows: the larger the context, the more expensive it is to carry every single token forward. Long-context evaluations were run on contexts stretching into hundreds of thousands of tokens.",
        ],
      },
      {
        start: 350,
        title: "What if the gate is wrong?",
        paragraphs: [
          "However, this approach has one fundamental vulnerability: the system is trying to predict future utility, which is inherently hard. A token that seems irrelevant right now might become mission-critical later.",
          "Imagine an obscure fact inside a long document that appears only once in the entire text. The gate might decide that since it only showed up once, it's probably unimportant. Then the user asks about exactly that fact, and the information is already gone from the persistent cache.",
          "In codebases this gets even more delicate. A variable name might not look significant at first, until an external function references it later. Or a class definition suddenly becomes essential because of a dependency thousands of tokens away. Predicting importance is not simple, and selective memory isn't magic. It's a trade-off between memory efficiency and the real risk of discarding useful information.",
        ],
      },
      {
        start: 396,
        title: "Smarter memory for AI",
        paragraphs: [
          "That's why, to me, the most compelling part of WG-KV isn't just its benchmark numbers. It's the architectural philosophy. The common trend in the industry has been to throw more compute, more GPUs, more memory and longer contexts at the problem. But we could also ask: what if the system simply stopped carrying around information it never actually needs?",
          "Just remember this mental model. The old approach: store everything, then evict what you don't need. The WG-KV approach: estimate what matters, then store selectively.",
          "And this principle isn't limited to KV cache optimization. Whenever AI systems manage massive volumes of information, there's a fundamental design question: does everything have to stay active all the time? Maybe the future isn't just about giving AI larger memory, but smarter memory management.",
          "So WG-KV tries to instill a simple discipline: don't store everything first and then decide what was valuable. Try to predict upfront what might matter, and make the decision as memory is written, because sometimes the fastest memory is the memory you never had to keep.",
          "If you enjoy deep engineering breakdowns of AI systems, not just what models can do but how these architectures are actually engineered at scale, subscribe to the channel and hit the bell for more videos like this.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the KV cache?",
        a: "When a transformer processes a token, it creates key and value representations and stores them in the KV cache. When generating the next token it reuses them instead of recomputing the whole context. The cache grows with context length, and the model reads from it repeatedly during decoding.",
      },
      {
        q: "What is WG-KV?",
        a: "WG-KV (Write-Gated KV Cache) uses a lightweight write-gate to score each token's predicted future usefulness before it is committed to the persistent cache. Instead of storing everything and evicting later, it writes selectively and retains only what is likely to matter.",
      },
      {
        q: "How is write-gating different from KV cache eviction?",
        a: "Eviction stores every token and removes some later. Write-gating makes the decision earlier, as memory is written, so tokens judged low-value are never committed to the long-term cache in the first place.",
      },
      {
        q: "What are local and global memory in WG-KV?",
        a: "Recent tokens stay in a local sliding-window cache, like short-term memory. As they slide out of the window, the gate decides whether to promote them to the global cache or discard them. During generation the model attends to both.",
      },
      {
        q: "Does a smaller KV cache make inference faster?",
        a: "Not automatically or proportionally. Real latency depends on memory bandwidth, hardware utilization, memory access patterns, batch size and workload. But decoding is often memory-bandwidth bound, so reading fewer KV states can cut memory traffic significantly.",
      },
      {
        q: "What results were reported for WG-KV?",
        a: "Reported experiments on Llama 3.1 showed roughly 46-57% lower memory footprint, around 3.03x-3.45x higher throughput and around 1.8x-2.0x faster decoding under the evaluated settings, with long-context evaluations reaching hundreds of thousands of tokens.",
      },
      {
        q: "What is the main risk of write-gating?",
        a: "The gate has to predict future usefulness. A fact that appears once in a long document, or a variable referenced much later in a codebase, may be discarded even though the model needs it later. It's a trade-off between memory efficiency and losing useful information.",
      },
    ],
  },
  {
    id: "AxQdBgvTuWE",
    slug: "how-ai-agent-proxies-work",
    title: "How AI Agent Proxies Actually Work",
    description:
      "What happens when an AI agent has access to your GitHub, database, payment system, MCP tools and multiple LLMs? If the agent decides to issue a ₹90 refund but its limit is ₹50, who stops it? A breakdown of proxies and gateways for AI agents: from basic network proxies to LLM gateways, tool access and policy enforcement.",
    summary:
      "A proxy is a simple middleman: the application talks to the proxy, the proxy routes to the destination, and the response comes back the same way. AI agents change the problem because an agent chooses its own next action, so the question stops being how to route a request and becomes what the agent should be allowed to do. Harsh Gupta walks through the three boundaries that follow: a network proxy for outbound traffic, an LLM gateway that centralizes model access, credentials and cost tracking, and a tool gateway that inspects tool calls and their parameters against policy. The mental model is one sentence: the agent decides, the gateway enforces.",
    uploadDate: "2026-10-07T05:25:20-07:00",
    duration: "PT6M52S",
    durationLabel: "6:52",
    topics: ["AI agents", "AI gateway", "LLM gateway", "Proxies", "MCP", "Policy enforcement", "System design"],
    takeaways: [
      "A proxy sits between an application and a server, routes requests and returns responses along the same path. That middleman position enables routing, traffic control, logging, access policies and infrastructure isolation.",
      "Agents change the problem: a normal application has a fixed set of API calls written in code, while an agent decides its next action at runtime, so it has countless possible destinations.",
      "A network proxy answers where and how to route a request. An LLM gateway gives the agent one unified interface to many model providers and centralizes credentials, routing, rate limits, logging and cost tracking.",
      "Having a tool is not the same as being allowed every action through it. A gateway can inspect which tool is called and with what parameters, and block a ₹90 refund when the policy caps refunds at ₹50.",
      "The agent and the gateway do different jobs. The agent decides what to do next; the gateway checks whether that request complies with policy. The gateway isn't intelligent, it evaluates rules.",
      "Writing authorization logic inside every tool works at first but scatters policy as the system grows. A gateway gives one central control boundary.",
      "That central point is also a critical component: it must handle auth, rate limiting, retries, logging, timeouts and sensitive traffic, and a misconfigured gateway becomes a single point of failure.",
    ],
    chapters: [
      {
        start: 0,
        title: "Who stops the AI agent?",
        paragraphs: [
          "Imagine an AI agent has access to your GitHub, your database, the payment system, MCP tools and multiple LLMs. Then the agent says: \"I need to issue a refund of 90 rupees.\" But there is a problem. The agent only has permission to issue refunds up to 50 rupees. So the question is: who will stop the agent?",
          "Hey, I'm Harsh. On this channel we break down what is actually happening inside AI systems, from models and agents to the infrastructure running them at scale.",
        ],
      },
      {
        start: 21,
        title: "What is an AI agent proxy?",
        paragraphs: [
          "Today we'll talk about proxies for AI agents. The interesting part is that the basic idea of a proxy is actually very simple. However, when the same concept is applied to AI agents, a proxy doesn't just remain something that forwards traffic. It can become a critical boundary between the agent and its access.",
          "By the end of this video we will clearly understand what a proxy does, what role a proxy plays in the case of AI agents, and what a gateway actually controls.",
        ],
      },
      {
        start: 53,
        title: "What is a proxy?",
        paragraphs: [
          "First, let's understand a basic proxy. There is an application and a server. Whenever our application needs to send a request to the server, it sends the request directly, and the response is sent directly back to the application.",
          "Now let's place a proxy in the middle. Your application is no longer directly connected to the server; the proxy sits in between. The application sends the request to the proxy, the proxy routes it to the destination, and the response returns along the exact same path: the server sends it to the proxy, and the proxy delivers it to your application.",
          "Because of this simple \"middleman\" idea, a proxy can be very useful: for routing, traffic control, logging, access policies, or isolating infrastructure from the destination.",
        ],
      },
      {
        start: 95,
        title: "Why agents change the problem",
        paragraphs: [
          "In the case of AI agents, a new challenge arises. In a normal application, you first decide which API to call and then write the code for it. With an agent, it decides on its own what the next action should be. Today it calls a database, tomorrow it calls GitHub, and the next day it calls a payment system.",
          "This means the agent doesn't have just one destination; it has countless possible actions. And this is where the role of the proxy becomes interesting, because the question is no longer just how to deliver the request to the destination. The question is what the agent should actually be allowed to do.",
        ],
      },
      {
        start: 127,
        title: "Network proxy vs LLM gateway",
        paragraphs: [
          "Remember this simple distinction: a network proxy asks where and how to route a request. If an agent needs internet access, the network proxy can route the request, manage traffic control, and provide an infrastructure boundary.",
          "But an agent doesn't just talk to the internet; it also needs to communicate with models. On one side you have the external world: websites, APIs and search engines. On the other side is the agent's brain: the model. That is where the second proxy comes in, the LLM gateway.",
          "Suppose our application uses different models: sometimes OpenAI, sometimes Anthropic, sometimes a local model. Without a gateway, we would need to integrate every provider into our application individually. With a gateway, we connect the agent to the gateway and the gateway connects to all the models. It provides a unified interface, and at the same time credentials, routing, rate limits, logging, cost tracking and traffic policies can all be centralized.",
          "So both sides are clear: the network proxy handles how the agent's traffic goes out to the outside world, and the LLM gateway manages model traffic between the agent and the application.",
        ],
      },
      {
        start: 193,
        title: "Tools, MCP and the ₹90 refund problem",
        paragraphs: [
          "Agents also possess another crucial element: tools. An agent doesn't just need models; it needs tools as well, and this is where protocols like MCP can be very useful. Consider an agent that has access to a payment refund tool and triggers a tool call.",
          "Now comes the obvious question: just because a tool is available, should the agent be allowed to execute every single action through it? Not necessarily.",
          "Return to the refund example. The agent decides it wants to issue a refund of 90 rupees. However, the policy states that the agent can only issue a maximum refund of 50 rupees. If we only verify whether the agent has refund capability, the answer is yes. But that doesn't mean the agent should be able to refund 90 rupees. This is where the real value of a gateway becomes apparent.",
        ],
      },
      {
        start: 242,
        title: "Agent decides. Gateway enforces.",
        paragraphs: [
          "A gateway can inspect the request: which tool the caller is invoking, what parameters are inside the request, and then enforce the policy. If the refund amount is greater than 50, the request to issue a 90-rupee refund is blocked before it ever reaches the payment system.",
          "Here an important distinction emerges: the agent and the gateway do not do the same job. The agent's job is to decide what to do next, and the gateway's job is to check whether that request complies with policy. The agent decides, and the gateway enforces.",
          "A gateway is not an intelligent entity on its own. It is given rules, and it evaluates incoming requests against those policies. Because of this, the gateway can serve as a centralized control boundary.",
        ],
      },
      {
        start: 284,
        title: "Why centralized gateways matter, and the trade-off",
        paragraphs: [
          "Imagine you have an agent in production with access to your GitHub, your database and your payment system, and more tools keep getting added over time. Writing individual authorization logic inside every single tool is possible, but as the system scales, policies quickly become scattered. A gateway provides a single, central boundary.",
          "Still, adding a gateway isn't trivial. It introduces another critical component to your architecture. The gateway must now correctly manage authentication, authorization, rate limiting, retries, logging, timeouts and potentially sensitive traffic. If the gateway is misconfigured, that centralized control point can turn into a single point of failure.",
        ],
      },
      {
        start: 330,
        title: "The one-door mental model",
        paragraphs: [
          "Picture a building. Inside are many rooms: one houses the database, another the LLM, another payments, and others hold various tools. If the agent needs access to these rooms and each room has its own unmonitored entrance, control becomes nearly impossible. A gateway acts as the secure main entrance. The agent arrives with a request, the gateway inspects it, and only then routes it to the permitted destination.",
          "In a real-world system it looks like this: user to agent, agent to gateway, and gateway connected to multiple tools. A gateway isn't a single magical black box. Across different architectures, the network proxy, LLM gateway, tool gateway and authorization layer might be distinct components.",
        ],
      },
      {
        start: 368,
        title: "The core principle",
        paragraphs: [
          "Yet the core architectural principle is simple: place a control boundary between the agent and the systems it can impact.",
          "Perhaps the most useful way to understand a proxy for AI agents is this: its purpose is not merely forwarding traffic down the line. When an agent accesses dozens of systems, that middle layer doesn't dictate what the agent thinks; it controls which of the agent's intended actions are actually permitted to reach the system. The agent decides, and the gateway enforces. And as agents gain wider access, this boundary will only become more critical.",
          "If you enjoy deep dives into AI system architecture, let me know in the comments which AI infrastructure concept we should break down next.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is a proxy?",
        a: "A proxy is a middleman between an application and a server. The application sends requests to the proxy, the proxy routes them to the destination, and responses come back along the same path. That position makes it useful for routing, traffic control, logging, access policies and isolating infrastructure.",
      },
      {
        q: "Why do AI agents need a different kind of proxy?",
        a: "A normal application has a fixed set of API calls written in code. An agent decides its next action at runtime, so it may call a database today, GitHub tomorrow and a payment system the day after. The question shifts from how to route a request to what the agent should be allowed to do.",
      },
      {
        q: "What is the difference between a network proxy and an LLM gateway?",
        a: "A network proxy handles how the agent's traffic goes out to the external world: websites, APIs and search engines. An LLM gateway sits between the agent and the models, giving one unified interface to providers like OpenAI, Anthropic or a local model while centralizing credentials, routing, rate limits, logging and cost tracking.",
      },
      {
        q: "What is a tool gateway for AI agents?",
        a: "A layer that inspects an agent's tool calls, including which tool is invoked and what parameters are in the request, and enforces policy before the call reaches the real system. For example, it can block a ₹90 refund when the policy caps refunds at ₹50, even though the agent has the refund tool.",
      },
      {
        q: "What does \"the agent decides, the gateway enforces\" mean?",
        a: "The agent's job is to decide what to do next. The gateway's job is to check whether that request complies with policy. The gateway isn't intelligent on its own: it is given rules and evaluates incoming requests against them.",
      },
      {
        q: "Why not put authorization logic inside each tool?",
        a: "It works at first, but as more tools are added the policies become scattered across the system. A gateway provides a single, central control boundary where policies live in one place.",
      },
      {
        q: "What are the risks of a centralized agent gateway?",
        a: "It becomes a critical component that must correctly handle authentication, authorization, rate limiting, retries, logging, timeouts and sensitive traffic. If it is misconfigured, the central control point turns into a single point of failure.",
      },
    ],
  },
];

// `videos` is kept in publication order. Display order is derived from the upload date,
// so a new entry can be appended anywhere in the list above.

/** Oldest first — the order episode numbers follow */
export const videosByDate = [...videos].sort((a, b) => +new Date(a.uploadDate) - +new Date(b.uploadDate));
/** Newest first — the order videos are listed on the site */
export const videosNewestFirst = [...videosByDate].reverse();
/** 1-based episode number, counted from the oldest video */
export const episodeNumber = (v: Video) => videosByDate.findIndex((x) => x.slug === v.slug) + 1;

/** Path of a video's own page on this site */
export const videoPath = (v: Video) => `/youtube/${v.slug}`;
export const findVideo = (slug: string) => videos.find((v) => v.slug === slug);
export const watchUrl = (v: Video, start = 0) => `https://www.youtube.com/watch?v=${v.id}${start ? `&t=${start}s` : ""}`;
// youtube-nocookie keeps the player from setting cookies until the viewer actually plays it
export const embedUrl = (v: Video) => `https://www.youtube-nocookie.com/embed/${v.id}`;
export const thumbnailUrl = (v: Video) => `https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg`;
export const formatTime = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
export const transcriptText = (v: Video) => v.chapters.flatMap((c) => c.paragraphs).join(" ");
