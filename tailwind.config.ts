import type { Config } from "tailwindcss";
import {createThemes} from "tw-colors";
import colors from "tailwindcss/colors";

//**  Light/Dark theme setup -start**//
// create baseColor scheme<array>
  const baseColor =[
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
  ];
  // create color mapping
  /**
   * Used to create light/dark theme
   * 
   */
  const shadeMapping ={
    "50":"900",
    "100":"800",
    "200":"700",
    "300":"600",
    "400":"500",
    "500":"400",
    "600":"300",
    "700":"200",
    "800":"100",
    "900":"50",
  };
  /**
   * generateThemeObject()
   */
const generateThemeObject = (colors:any, mapping:any, invert = false) =>{
  const theme: any = {};

  baseColor.forEach((color)=>{
  theme[color] = {};
  Object.entries(mapping).forEach(([key,value]:any)=>{
    const shadeKey = invert ? value: key;
    theme[color][key] = colors[color][shadeKey];
  });
  });
  return theme;
}
// lightTheme
const lightTheme = generateThemeObject(colors,shadeMapping);
const darkTheme = generateThemeObject(colors,shadeMapping,true);
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
