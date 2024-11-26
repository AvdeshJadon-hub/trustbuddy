export const siteConfig = {
    name: "trustbuddy",
    description: "Your SaaS Description",
    url: process.env.NEXT_PUBLIC_APP_URL,
    ogImage: "https://your-og-image.png",
    links: {
      twitter: "https://twitter.com/fiston_user",
      github: "https://github.com/fiston-user/starterkit",
    },
    emails: {
      from: {
        name: "trustbuddy",
        email: "notifications@onboarding.dev", // Must be verified in Resend
      },
    },
  };
  
  export type SiteConfig = typeof siteConfig;