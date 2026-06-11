import localFont from "next/font/local";

export const fontHeading = localFont({
  src: "../public/fonts/staatliches/regular.ttf",
  variable: "--font-heading",
  weight: "400",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const fontBody = localFont({
  src: [
    {
      path: "../public/fonts/roobertpro/light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/roobertpro/regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/roobertpro/medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/roobertpro/bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const fontVariables = `${fontHeading.variable} ${fontBody.variable}`;
