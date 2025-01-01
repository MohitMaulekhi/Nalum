export default function manifest() {
  return {
    name: "Nalum",
    short_name: "Nalum",
    description:
      "Connect with NSUT, NSIT, and DIT alumni to expand your network, explore career opportunities, and give back through Nalum, the official NSUT Alumni Portal.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
        alt: "Logo of Nalum - ALumni Portal of NSUT",
      },
      {
        src: "/logo.png",
        sizes: "250x193",
        type: "image/png",
      },
      {
        src: "/banner.png",
        sizes: "4412x2475",
        type: "image/png",
      },
      {
        src: "/square-logo.png",
        sizes: "500x500",
        type: "image/png",
      },
      {
        src: "/square-logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
