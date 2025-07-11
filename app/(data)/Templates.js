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
    aiPrompt: `You are a social media expert. Generate 10 relevant and trending hashtags for the given content description. Return as a comma-separated list.`,
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
    aiPrompt: `You are a YouTube content strategist. Suggest 5 attention-grabbing video titles based on the provided topic. Return the titles as a numbered list, each starting with "1.", "2.", etc., followed by a space and the title. Do not skip the period after the numbers.`,
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
    aiPrompt: `You are a social media copywriter. Generate 5 creative Instagram captions based on the given theme. Return the captions in a numbered list.`,
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
    aiPrompt: `You are an SEO expert. Generate one compelling and optimized meta description for the given website description (max 160 characters).`,
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
    aiPrompt: `You are an expert email marketer. Generate 5 creative subject lines based on the provided topic. Use a numbered list format.`,
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
    aiPrompt: `You are a digital ad copywriter. Generate a single compelling ad copy for the given product or service.`,
    form: [
      {
        label: "Product/Service Description",
        field: "textarea",
        name: "product_details",
        required: true,
      },
    ],
  },
  {
    name: "Resume Summary Generator",
    desc: "Generate a professional resume summary for any job title.",
    icon: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",
    category: "Career",
    slug: "generate-resume-summary",
    aiPrompt: `You are a resume expert. Generate a concise and impressive resume summary based on the user's job title and experience. Limit it to 2-3 sentences.`,
    form: [
      {
        label: "Job Title",
        field: "input",
        name: "job_title",
        required: true,
      },
      {
        label: "Years of Experience",
        field: "input",
        name: "experience",
      },
    ],
  },
  {
    name: "Poem Generator",
    desc: "Create a short, beautiful poem on any topic or theme.",
    icon: "https://cdn-icons-png.flaticon.com/128/2583/2583347.png",
    category: "Creative Writing",
    slug: "generate-poem",
    aiPrompt: `You are a creative poet. Write a short and meaningful poem based on the provided theme. Return in 4 to 6 lines.`,
    form: [
      {
        label: "Poem Theme",
        field: "input",
        name: "theme",
        required: true,
      },
    ],
  },
  {
    name: "Product Description Writer",
    desc: "Generate a persuasive product description for e-commerce.",
    icon: "https://cdn-icons-png.flaticon.com/128/2917/2917996.png",
    category: "E-Commerce",
    slug: "generate-product-description",
    aiPrompt: `You are a professional product copywriter.
Write a compelling and SEO-optimized product description for the provided item.
Limit to 100 words.`,
    form: [
      {
        label: "Product Details",
        field: "textarea",
        name: "product_info",
        required: true,
      },
    ],
  },
  {
    name: "Startup Pitch Generator",
    desc: "Create a short elevator pitch for a startup idea.",
    icon: "https://cdn-icons-png.flaticon.com/128/10433/10433731.png",
    category: "Startup",
    slug: "generate-startup-pitch",
    aiPrompt: `You are a startup pitch expert.
Generate a 2-3 sentence elevator pitch for the given startup idea.`,
    form: [
      {
        label: "Startup Idea",
        field: "textarea",
        name: "startup_idea",
        required: true,
      },
    ],
  },
  {
    name: "Code Explanation Tool",
    desc: "Explain any code snippet in simple English.",
    icon: "https://cdn-icons-png.flaticon.com/128/906/906343.png",
    category: "Programming",
    slug: "explain-code",
    aiPrompt: `You are a programming tutor.
Explain the provided code in simple, beginner-friendly English.`,
    form: [
      {
        label: "Code Snippet",
        field: "textarea",
        name: "code",
        required: true,
      },
    ],
  },
  {
    name: "Quote Generator",
    desc: "Generate 5 inspirational quotes on a specific theme.",
    icon: "https://cdn-icons-png.flaticon.com/128/4203/4203381.png",
    category: "Inspiration",
    slug: "generate-quotes",
    aiPrompt: `You are a wisdom quote writer.
Generate 5 original inspirational quotes on the provided theme.
Number each one.`,
    form: [
      {
        label: "Theme",
        field: "input",
        name: "quote_theme",
        required: true,
      },
    ],
  },
  {
    name: "Slogan Generator",
    desc: "Generate catchy slogans for brands or campaigns.",
    icon: "https://cdn-icons-png.flaticon.com/128/4701/4701482.png",
    category: "Branding",
    slug: "generate-slogan",
    aiPrompt: `You are a branding expert.
Generate 3 catchy slogans for the provided brand or campaign idea.`,
    form: [
      {
        label: "Brand / Campaign",
        field: "input",
        name: "brand_name",
        required: true,
      },
    ],
  },
  {
    name: "App Name Generator",
    desc: "Generate unique and brandable names for your app.",
    icon: "https://cdn-icons-png.flaticon.com/128/985/985418.png",
    category: "App Ideas",
    slug: "generate-app-name",
    aiPrompt: `You are a brand naming expert.
Generate 5 unique and short app name ideas based on the app's purpose.`,
    form: [
      {
        label: "App Purpose",
        field: "textarea",
        name: "app_purpose",
        required: true,
      },
    ],
  },
  {
    name: "Study Notes Generator",
    desc: "Summarize any topic into concise, bullet-point study notes.",
    icon: "https://cdn-icons-png.flaticon.com/128/2965/2965879.png",
    category: "Education",
    slug: "generate-study-notes",
    aiPrompt: `You are an academic tutor.
Summarize the following topic into clear, bullet-point study notes.`,
    form: [
      {
        label: "Enter your study topic",
        field: "textarea",
        name: "study_topic",
        required: true,
      },
    ],
  },
  {
    name: "Health Tips Generator",
    desc: "Get 5 daily health and wellness tips based on your goal.",
    icon: "https://cdn-icons-png.flaticon.com/128/2965/2965567.png",
    category: "Health",
    slug: "generate-health-tips",
    aiPrompt: `You are a certified health coach.
Suggest 5 practical and safe health tips based on the user's goal.`,
    form: [
      {
        label: "Enter your health goal",
        field: "input",
        name: "goal",
        required: true,
      },
    ],
  },
  {
    name: "Story Plot Generator",
    desc: "Generate a creative story plot based on a genre or idea.",
    icon: "https://cdn-icons-png.flaticon.com/128/894/894817.png",
    category: "Writing",
    slug: "generate-story-plot",
    aiPrompt: `You are a fiction writer.
Create a short story plot based on the given genre or idea.`,
    form: [
      {
        label: "Enter story idea or genre",
        field: "input",
        name: "idea",
        required: true,
      },
    ],
  },
  {
    name: "UI Design Prompt Generator",
    desc: "Generate prompts to use in Figma or Midjourney for UI ideas.",
    icon: "https://cdn-icons-png.flaticon.com/128/9790/9790797.png",
    category: "Design",
    slug: "generate-ui-prompts",
    aiPrompt: `You are a UI/UX designer.
Generate 3 creative and specific UI design prompts for the following idea.`,
    form: [
      {
        label: "Describe your UI concept",
        field: "textarea",
        name: "ui_idea",
        required: true,
      },
    ],
  },
  {
    name: "Language Translator",
    desc: "Translate any text from English into your selected language.",
    icon: "https://cdn-icons-png.flaticon.com/128/3079/3079334.png",
    category: "Language",
    slug: "translate-text",
    aiPrompt: `Translate the following English text into {{targetLanguage}}:`,
    form: [
      {
        label: "Text to Translate (English)",
        field: "textarea",
        name: "text",
        required: true,
      },
      {
        label: "Target Language (e.g., Spanish, Hindi)",
        field: "input",
        name: "targetLanguage",
        required: true,
      },
    ],
  },
  {
    name: "Meeting Summary Generator",
    desc: "Summarize meeting notes into bullet points and key takeaways.",
    icon: "https://cdn-icons-png.flaticon.com/128/942/942748.png",
    category: "Productivity",
    slug: "generate-meeting-summary",
    aiPrompt: `You are an executive assistant.
Summarize the meeting transcript into bullet points and key takeaways.`,
    form: [
      {
        label: "Paste your meeting notes",
        field: "textarea",
        name: "meeting_notes",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Reel Ideas",
    desc: "Generate 5 viral Instagram reel content ideas based on your niche.",
    icon: "https://cdn-icons-png.flaticon.com/128/733/733558.png",
    category: "Social Media",
    slug: "generate-reel-ideas",
    aiPrompt: `You're a viral content strategist.
Generate 5 engaging and creative Instagram reel content ideas for this niche.`,
    form: [
      {
        label: "Enter your niche (e.g., fitness, travel)",
        field: "input",
        name: "reel_niche",
        required: true,
      },
    ],
  },
  {
    name: "Blog Intro Paragraph Generator",
    desc: "Craft a compelling blog introduction based on your topic.",
    icon: "https://cdn-icons-png.flaticon.com/128/2965/2965388.png",
    category: "Blog",
    slug: "generate-blog-intro",
    aiPrompt: `You are a blog writing expert.
Write a powerful and engaging introduction paragraph for this topic.`,
    form: [
      {
        label: "Blog Topic",
        field: "input",
        name: "blog_topic",
        required: true,
      },
    ],
  },
  {
    name: "Daily Affirmations Generator",
    desc: "Get personalized positive affirmations to boost your mindset.",
    icon: "https://cdn-icons-png.flaticon.com/128/4275/4275497.png",
    category: "Wellness",
    slug: "generate-affirmations",
    aiPrompt: `You are a motivational coach.
Generate 5 short daily affirmations for someone who is feeling {{emotion}}.`,
    form: [
      {
        label: "What are you feeling today?",
        field: "input",
        name: "emotion",
        required: true,
      },
    ],
  },
  {
    name: "Exam Question Generator",
    desc: "Generate practice exam questions from any topic.",
    icon: "https://cdn-icons-png.flaticon.com/128/11162/11162408.png",
    category: "Education",
    slug: "generate-exam-questions",
    aiPrompt: `You are a subject expert.
Generate 5 multiple-choice exam questions from the given topic.`,
    form: [
      {
        label: "Enter a subject/topic",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "Parenting Tip Generator",
    desc: "Get practical parenting tips based on your child's age.",
    icon: "https://cdn-icons-png.flaticon.com/128/1752/1752840.png",
    category: "Parenting",
    slug: "generate-parenting-tips",
    aiPrompt: `You are a child psychologist.
Give 5 parenting tips for a child who is {{child_age}} years old.`,
    form: [
      {
        label: "Child's age",
        field: "input",
        name: "child_age",
        required: true,
      },
    ],
  },
  {
    name: "Startup Name Ideas",
    desc: "Generate brandable and unique startup name ideas.",
    icon: "https://cdn-icons-png.flaticon.com/128/4204/4204600.png",
    category: "Startup",
    slug: "generate-startup-names",
    aiPrompt: `You are a branding consultant.
Generate 5 unique, brandable startup name ideas based on the description.`,
    form: [
      {
        label: "Startup description",
        field: "textarea",
        name: "description",
        required: true,
      },
    ],
  },
  {
    name: "Cold Email Generator",
    desc: "Craft a short cold outreach email to potential clients.",
    icon: "https://cdn-icons-png.flaticon.com/128/2099/2099191.png",
    category: "Marketing",
    slug: "generate-cold-email",
    aiPrompt: `You are a B2B marketing expert.
Write a cold outreach email to introduce this service to a potential client.`,
    form: [
      {
        label: "Describe your service/product",
        field: "textarea",
        name: "pitch",
        required: true,
      },
    ],
  },
  {
    name: "Productivity Hack Generator",
    desc: "Get short, actionable productivity tips for daily life.",
    icon: "https://cdn-icons-png.flaticon.com/128/3515/3515433.png",
    category: "Productivity",
    slug: "generate-productivity-hacks",
    aiPrompt: `You are a productivity coach.
List 5 short, effective productivity tips for someone who wants to be more efficient.`,
    form: [
      {
        label: "Describe your main struggle (optional)",
        field: "textarea",
        name: "struggle",
      },
    ],
  },
  {
    name: "YouTube Script Hook Generator",
    desc: "Write an engaging hook for your YouTube video script.",
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
    category: "YouTube",
    slug: "generate-youtube-hook",
    aiPrompt: `You are a YouTube scriptwriter.
Write an attention-grabbing hook (2-3 lines) for the given topic.`,
    form: [
      {
        label: "Enter your video topic",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "Song Lyric Generator",
    desc: "Generate short song lyrics for your idea or theme.",
    icon: "https://cdn-icons-png.flaticon.com/128/727/727218.png",
    category: "Entertainment",
    slug: "generate-song-lyrics",
    aiPrompt: `You are a songwriter.
Write 4-6 lines of original lyrics based on the provided theme.`,
    form: [
      {
        label: "Enter theme or mood",
        field: "input",
        name: "theme",
        required: true,
      },
    ],
  },
  {
    name: "Tweet Generator",
    desc: "Craft a short, engaging tweet for your idea or niche.",
    icon: "https://cdn-icons-png.flaticon.com/128/733/733579.png",
    category: "Social Media",
    slug: "generate-tweet",
    aiPrompt: `You are a Twitter influencer.
Generate a short, witty, or insightful tweet on the following idea.`,
    form: [
      {
        label: "What’s the tweet about?",
        field: "input",
        name: "tweet_idea",
        required: true,
      },
    ],
  },
  {
    name: "FAQ Generator",
    desc: "Generate frequently asked questions and answers for a topic.",
    icon: "https://cdn-icons-png.flaticon.com/128/2490/2490413.png",
    category: "Support",
    slug: "generate-faq",
    aiPrompt: `You are a content strategist.
Generate 3-5 common questions and short answers for the given topic.`,
    form: [
      {
        label: "Enter topic/product/service",
        field: "input",
        name: "faq_topic",
        required: true,
      },
    ],
  },
];
