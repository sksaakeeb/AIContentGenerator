export default [
  {
    name: "Blog Title Generator",
    desc: "Generate 5 creative and SEO-friendly blog titles.",
    icon: "https://cdn-icons-png.flaticon.com/128/1187/1187595.png",
    category: "Blog",
    slug: "generate-blog-title",
    aiPrompt: `You are a professional blog title generator. Generate exactly 5 engaging blog title ideas for the given niche and outline. Format them as a numbered list (1. ..., 2. ...).`,
    form: [
      {
        label: "Blog Niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Blog Outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Hashtag Generator",
    desc: "Generate 10 relevant and trending hashtags.",
    icon: "https://cdn-icons-png.flaticon.com/128/1628/1628649.png",
    category: "Social Media",
    slug: "generate-hashtags",
    aiPrompt: `You are a social media expert.
Generate 10 relevant and trending hashtags for the given content description.
Return as a comma-separated list.`,
    form: [
      {
        label: "Content Description",
        field: "textarea",
        name: "content",
        required: true,
      },
    ],
  },
  {
    name: "YouTube Title Generator",
    desc: "Suggest 5 eye-catching YouTube video titles.",
    icon: "https://cdn-icons-png.flaticon.com/128/49/49084.png",
    category: "YouTube",
    slug: "generate-youtube-title",
    aiPrompt: `You are a YouTube content strategist.
Suggest 5 attention-grabbing video titles based on the provided topic.
Return the titles as a numbered list, each starting with "1.", "2.", etc., followed by a space and the title. Do not skip the period after the numbers.`,
    form: [
      {
        label: "Video Topic",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Caption Generator",
    desc: "Generate 5 unique Instagram captions.",
    icon: "https://cdn-icons-png.flaticon.com/128/1077/1077042.png",
    category: "Social Media",
    slug: "generate-instagram-caption",
    aiPrompt: `You are a social media copywriter.
Generate 5 creative Instagram captions based on the given theme.
Return the captions in a numbered list.`,
    form: [
      {
        label: "Post Theme",
        field: "input",
        name: "theme",
        required: true,
      },
    ],
  },
  {
    name: "SEO Meta Description Generator",
    desc: "Generate 1 SEO-optimized meta description.",
    icon: "https://cdn-icons-png.flaticon.com/128/6033/6033713.png",
    category: "SEO",
    slug: "generate-seo-meta",
    aiPrompt: `You are an SEO expert.
Generate one compelling and optimized meta description for the given website description (max 160 characters).`,
    form: [
      {
        label: "Website Description",
        field: "textarea",
        name: "website_desc",
        required: true,
      },
    ],
  },
  {
    name: "Email Subject Line Generator",
    desc: "Generate 5 catchy email subject lines.",
    icon: "https://cdn-icons-png.flaticon.com/128/2165/2165061.png",
    category: "Email Marketing",
    slug: "generate-email-subject",
    aiPrompt: `You are an expert email marketer.
Generate 5 creative subject lines based on the provided topic.
Use a numbered list format.`,
    form: [
      {
        label: "Email Topic",
        field: "input",
        name: "email_topic",
        required: true,
      },
    ],
  },
  {
    name: "Ad Copy Generator",
    desc: "Generate 1 powerful ad copy for your product.",
    icon: "https://cdn-icons-png.flaticon.com/128/7253/7253092.png",
    category: "Marketing",
    slug: "generate-ad-copy",
    aiPrompt: `You are a digital ad copywriter.
Generate a single compelling ad copy for the given product or service.`,
    form: [
      {
        label: "Product/Service Description",
        field: "textarea",
        name: "product_details",
        required: true,
      },
    ],
  },
];
