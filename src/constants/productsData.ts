import iphoneImg1 from "@/assets/image/1_z4Ud449.jpeg";
import iphoneImg2 from "@/assets/image/2_IvFVG3u.jpeg";
import iphoneImg3 from "@/assets/image/3_dJQrIfp.jpeg";
import iphoneImg4 from "@/assets/image/4_Oy841BB.jpeg";

import airpods1 from "@/assets/image/1_QXhtI9e.jpeg";
import airpods2 from "@/assets/image/2_VEjruA8.jpeg";
import airpods3 from "@/assets/image/3_jxumXgJ.jpeg";
import airpods4 from "@/assets/image/4.jpeg";

import light1 from "@/assets/image/1_mecQ4bX.jpeg";
import light2 from "@/assets/image/3_vsOKXWk.jpeg";
import light3 from "@/assets/image/4_6sT1Ukh.jpeg";

import power1 from "@/assets/image/4.webp";
import power2 from "@/assets/image/3 (1).webp";
import power3 from "@/assets/image/3.webp";
import power4 from "@/assets/image/1-1_8yMenYh.webp";
import { Iproduct } from "@/types";

export const productCategories = [
  {
    category: "IPHONE CASE",
    id: "#iphone",
  },
  {
    category: "AIRPODS PRO CASE",
    id: "#airpods",
  },
  {
    category: "LIGHTNING CABLE",
    id: "#lighting",
  },
  {
    category: "POWER BANK",
    id: "#power",
  },
];

export const ProductsData: Iproduct[] = [
  {
    id: "01iphone",
    name: "FOX IPHONE CASE",
    category: "IPHONE CASE",
    price: 6500,
    oldPrice: 7000,
    img: iphoneImg1,
    othersImg: [
      {
        img: iphoneImg1,
      },
      {
        img: iphoneImg3,
      },
    ],
    colors: [
      {
        color: "#a1aba3",
        quantity: 86,
      },
      {
        color: "#000",
        quantity: 25,
      },
    ],
    description: {
      box: "Maison Kitsuné Case for AirPods Pro.",
      material: "PC, Silicone Rubber.",
      height: "161.5mm",
      width: "82.5mm",
      Depth: "11.5mm",
      Weight: "0.06 lbs / 0.03 kg",
    },
  },

  {
    id: "02iphone",
    name: "SLEEK ZED IPHONE CASE",
    category: "IPHONE CASE",
    price: 1500,
    oldPrice: 3999,
    img: iphoneImg3,
    othersImg: [
      {
        img: iphoneImg3,
      },
      {
        img: iphoneImg2,
      },
    ],
    colors: [
      {
        color: "#a1aba3",
        quantity: 86,
      },
      {
        color: "#000",
        quantity: 25,
      },
      {
        color: "blue",
        quantity: 20,
      },
    ],
    description: {
      box: "Maison Kitsuné Case for AirPods Pro.",
      material: "PC, Silicone Rubber.",
      height: "161.5mm",
      width: "82.5mm",
      Depth: "11.5mm",
      Weight: "0.06 lbs / 0.03 kg",
    },
  },

  {
    id: "03iphone",
    name: "SLEEK+ IPHONE CASE",
    category: "IPHONE CASE",
    price: 5999,
    oldPrice: 7000,
    img: iphoneImg4,
    othersImg: [
      {
        img: iphoneImg4,
      },
      {
        img: iphoneImg1,
      },
    ],
    colors: [
      {
        color: "#460a5c",
        quantity: 45,
      },
      {
        color: "#ddd",
        quantity: 30,
      },
    ],
    description: {
      box: "Maison Kitsuné Case for AirPods Pro.",
      material: "PC, Silicone Rubber.",
      height: "161.5mm",
      width: "82.5mm",
      Depth: "11.5mm",
      Weight: "0.06 lbs / 0.03 kg",
    },
  },

  {
    id: "04iphone",
    name: "SLEEK IPHONE CASE",
    category: "IPHONE CASE",
    price: 2499,
    oldPrice: 5000,
    img: iphoneImg2,
    othersImg: [
      {
        img: iphoneImg2,
      },
      {
        img: iphoneImg1,
      },
    ],
    colors: [
      {
        color: "#460a5c",
        quantity: 25,
      },
      {
        color: "#000",
        quantity: 60,
      },
    ],
    description: {
      box: "Maison Kitsuné Case for AirPods Pro.",
      material: "PC, Silicone Rubber.",
      height: "161.5mm",
      width: "82.5mm",
      Depth: "11.5mm",
      Weight: "0.06 lbs / 0.03 kg",
    },
  },

  {
    id: "05airpods",
    name: "FOXIT CASE FOR AIRPODS PRO",
    category: "AIRPODS PRO CASE",
    price: 1500,
    oldPrice: 5000,
    img: airpods1,
    othersImg: [
      {
        img: airpods1,
      },
      {
        img: airpods3,
      },
    ],
    colors: [
      {
        color: "#ccff66",
        quantity: 55,
      },
      {
        color: "red",
        quantity: 80,
      },
    ],
    description: {
      box: "Maison Kitsuné Case for AirPods Pro.",
      material: "PC, Silicone Rubber.",
      height: "161.5mm",
      width: "82.5mm",
      Depth: "11.5mm",
      Weight: "0.06 lbs / 0.03 kg",
    },
  },

  {
    id: "06airpods",
    name: "KATZE+ CASE FOR AIRPODS PRO Z",
    category: "AIRPODS PRO CASE",
    price: 250,
    oldPrice: 700,
    img: airpods2,
    othersImg: [
      {
        img: airpods2,
      },
      {
        img: airpods3,
      },
    ],
    colors: [
      {
        color: "#ddd",
        quantity: 20,
      },
      {
        color: "green",
        quantity: 60,
      },
    ],
    description: {
      box: "Maison Kitsuné Case for AirPods Pro.",
      material: "PC, Silicone Rubber.",
      height: "161.5mm",
      width: "82.5mm",
      Depth: "11.5mm",
      Weight: "0.06 lbs / 0.03 kg",
    },
  },
  {
    id: "07airpods",
    name: "FOXIT CASE FOR AIRPODS PRO",
    category: "AIRPODS PRO CASE",
    price: 1500,
    oldPrice: 5000,
    img: airpods3,
    othersImg: [
      {
        img: airpods3,
      },
      {
        img: airpods4,
      },
    ],
    colors: [
      {
        color: "#ddd",
        quantity: 29,
      },
      {
        color: "#green",
        quantity: 45,
      },
    ],
    description: {
      box: "Maison Kitsuné Case for AirPods Pro.",
      material: "PC, Silicone Rubber.",
      height: "161.5mm",
      width: "82.5mm",
      Depth: "11.5mm",
      Weight: "0.06 lbs / 0.03 kg",
    },
  },
  {
    id: "08airpods",
    name: "KATZE CASE FOR AIRPODS PRO",
    category: "AIRPODS PRO CASE",
    price: 2500,
    oldPrice: 4999,
    img: airpods4,
    othersImg: [
      {
        img: airpods4,
      },
      {
        img: airpods1,
      },
    ],
    colors: [
      {
        color: "red",
        quantity: 29,
      },
      {
        color: "orange",
        quantity: 45,
      },
    ],
    description: {
      box: "Maison Kitsuné Case for AirPods Pro.",
      material: "PC, Silicone Rubber.",
      height: "161.5mm",
      width: "82.5mm",
      Depth: "11.5mm",
      Weight: "0.06 lbs / 0.03 kg",
    },
  },

  {
    id: "09light",
    name: "CYAN+ CABLE",
    category: "LIGHTNING CABLE",
    price: 999,
    oldPrice: 1500,
    img: light1,
    othersImg: [
      {
        img: light1,
      },
      {
        img: light2,
      },
    ],
    colors: [
      {
        color: "black",
        quantity: 29,
      },
      {
        color: "#ddd",
        quantity: 45,
      },
    ],
    description: {
      box: "Maison Kitsuné Case for AirPods Pro.",
      material: "PC, Silicone Rubber.",
      height: "161.5mm",
      width: "82.5mm",
      Depth: "11.5mm",
      Weight: "0.06 lbs / 0.03 kg",
    },
  },
  {
    id: "10light",
    name: "CYAN+ CABLE",
    category: "LIGHTNING CABLE",
    price: 999,
    oldPrice: 1500,
    img: light2,
    othersImg: [
      {
        img: light2,
      },
      {
        img: light3,
      },
    ],
    colors: [
      {
        color: "red",
        quantity: 22,
      },
      {
        color: "#ffcc99",
        quantity: 48,
      },
    ],
    description: {
      box: "Maison Kitsuné Case for AirPods Pro.",
      material: "PC, Silicone Rubber.",
      height: "161.5mm",
      width: "82.5mm",
      Depth: "11.5mm",
      Weight: "0.06 lbs / 0.03 kg",
    },
  },

  {
    id: "11light",
    name: "BELT CABLE (SNIPPE EDITION)",
    category: "LIGHTNING CABLE",
    price: 2200,
    oldPrice: 2600,
    img: light3,
    othersImg: [
      {
        img: light3,
      },
      {
        img: light1,
      },
    ],
    colors: [
      {
        color: "red",
        quantity: 22,
      },
      {
        color: "#ffcc99",
        quantity: 48,
      },
    ],
    description: {
      box: "Maison Kitsuné Case for AirPods Pro.",
      material: "PC, Silicone Rubber.",
      height: "161.5mm",
      width: "82.5mm",
      Depth: "11.5mm",
      Weight: "0.06 lbs / 0.03 kg",
    },
  },

  {
    id: "12light",
    name: "COAL++ CABLE (SNIPPE EDITION)",
    category: "LIGHTNING CABLE",
    price: 980,
    oldPrice: 3000,
    img: light1,
    othersImg: [
      {
        img: light1,
      },
      {
        img: light3,
      },
    ],
    colors: [
      {
        color: "blue",
        quantity: 22,
      },
      {
        color: "#ffcc99",
        quantity: 48,
      },
    ],
    description: {
      box: "Maison Kitsuné Case for AirPods Pro.",
      material: "PC, Silicone Rubber.",
      height: "161.5mm",
      width: "82.5mm",
      Depth: "11.5mm",
      Weight: "0.06 lbs / 0.03 kg",
    },
  },

  {
    id: "13power",
    name: "POWER S+ WIRELESS POWER BANK",
    category: "POWER BANK",
    price: 980,
    oldPrice: 3000,
    img: power1,
    othersImg: [
      {
        img: power1,
      },
      {
        img: power2,
      },
    ],
    colors: [
      {
        color: "blue",
        quantity: 22,
      },
      {
        color: "#ffcc99",
        quantity: 48,
      },
    ],
    description: {
      box: "Maison Kitsuné Case for AirPods Pro.",
      material: "PC, Silicone Rubber.",
      height: "161.5mm",
      width: "82.5mm",
      Depth: "11.5mm",
      Weight: "0.06 lbs / 0.03 kg",
    },
  },
  {
    id: "14power",
    name: "POWER++ WIRELESS POWER BANK",
    category: "POWER BANK",
    price: 4330,
    oldPrice: 6500,
    img: power2,
    othersImg: [
      {
        img: power2,
      },
      {
        img: power3,
      },
    ],
    colors: [
      {
        color: "blue",
        quantity: 22,
      },
      {
        color: "#ffcc99",
        quantity: 48,
      },
    ],
    description: {
      box: "Maison Kitsuné Case for AirPods Pro.",
      material: "PC, Silicone Rubber.",
      height: "161.5mm",
      width: "82.5mm",
      Depth: "11.5mm",
      Weight: "0.06 lbs / 0.03 kg",
    },
  },
  {
    id: "15power",
    name: "POWER++ WIRELESS POWER BANK",
    category: "POWER BANK",
    price: 4330,
    oldPrice: 6500,
    img: power3,
    othersImg: [
      {
        img: power3,
      },
      {
        img: power4,
      },
    ],
    colors: [
      {
        color: "blue",
        quantity: 22,
      },
      {
        color: "#ffcc99",
        quantity: 48,
      },
    ],
    description: {
      box: "Maison Kitsuné Case for AirPods Pro.",
      material: "PC, Silicone Rubber.",
      height: "161.5mm",
      width: "82.5mm",
      Depth: "11.5mm",
      Weight: "0.06 lbs / 0.03 kg",
    },
  },
  {
    id: "16power",
    name: "POWER++ WIRELESS POWER BANK",
    category: "POWER BANK",
    price: 4330,
    oldPrice: 6500,
    img: power4,
    othersImg: [
      {
        img: power4,
      },
      {
        img: power1,
      },
    ],
    colors: [
      {
        color: "blue",
        quantity: 22,
      },
      {
        color: "#ffcc99",
        quantity: 48,
      },
    ],
    description: {
      box: "Maison Kitsuné Case for AirPods Pro.",
      material: "PC, Silicone Rubber.",
      height: "161.5mm",
      width: "82.5mm",
      Depth: "11.5mm",
      Weight: "0.06 lbs / 0.03 kg",
    },
  },
];
