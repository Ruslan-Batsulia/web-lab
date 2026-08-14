import localFont from "next/font/local";

export const Inter = localFont({
  src: [
    {
      path: "./../../public/fonts/Inter-Regular.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./../../public/fonts/Inter-Italic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});
