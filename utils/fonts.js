import {
  Jost,
  DM_Serif_Display,
  Playfair_Display,
  Montserrat,
} from "next/font/google";

export const jost = Jost({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-jost",
});

export const serif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

export const playfair = Playfair_Display({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const montserrat = Montserrat({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

