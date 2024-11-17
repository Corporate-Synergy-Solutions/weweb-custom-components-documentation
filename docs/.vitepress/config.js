import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Weweb custom components",
  description: "Guideline how to use our custom component for your weweb app",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Weweb", link: "/weweb/introduction", activeMatch: "/weweb/" },
      {
        text: "Components",
        link: "/components/calendar",
        activeMatch: "/components/",
      },
    ],

    sidebar: [
      {
        text: "Weweb",
        items: [
          { text: "Introduction", link: "/weweb/introduction" },
          { text: "Installation", link: "/weweb/installation" },
          { text: "Activation", link: "/weweb/activation" },
          { text: "Common issues", link: "/weweb/common-issues" },
        ],
      },
      {
        text: "Components",
        items: [{ text: "Synergy calendar", link: "/components/calendar" }],
      },
    ],
  },
});
