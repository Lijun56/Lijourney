const CONFIG = {
  // profile setting (required)
  profile: {
    name: "lijun",
    image: "none.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "",
    bio: "Backend Engineer, ML Engineer, fitness enthusiast, Life-long Learner, Investor",
    email: "zlijun@gmail.com",
    linkedin: "zlijun",
    github: "lijun56",
    instagram: "",
  },
  projects: [
    {
      name: `lijourney`,
      href: "https://github.com/lijun56s/lijourney",
    },
  ],
  // blog setting (required)
  blog: {
    title: "lijourney",
    description: "where lijun shares his thoughts",
  },

  // CONFIG configration (required)
  link: "https://lijourney.vercel.app",
  since: 2024, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },


  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      // repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      repo: "lijun56/lijourney",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 10 * 6, // revalidate time for [slug], index
}

module.exports = { CONFIG }
