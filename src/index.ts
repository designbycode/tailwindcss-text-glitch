import { comment } from "postcss"

const version = require("../package.json")
const plugin = require("tailwindcss/plugin")

module.exports = plugin.withOptions(
  function () {
    return function ({ addUtilities, addBase, matchUtilities, theme }: any) {
      addBase([
        comment({
          text: `!  tailwindcss-text-glitch v${version} | MIT License | https://designbycode.co.za`,
        }),
      ])

      addBase({
        ":root": {
          "--tg-rgb-r": "red",
          "--tg-rgb-g": "limegreen",
          "--tg-rgb-b": "blue",
          "--tg-rgb-blur": "1px",
          "--tg-rgb-duration": "3s",
          "@keyframes glitch": {
            "0%": { textShadow: "0.3rem 0 0 var(--tg-rgb-r), -0.3rem 0 0 var(--tg-rgb-b)", filter: "blur(0)" },
            "1%": { textShadow: "0.3rem 0 0 var(--tg-rgb-r), -0.3rem 0 0 var(--tg-rgb-b)", filter: "blur(0)" },
            "2%": { textShadow: "0.3rem 0 0 var(--tg-rgb-r), -0.3rem 0 0 var(--tg-rgb-b)", filter: "blur(0)" },
            "3%": { textShadow: "0.3rem 0 0 var(--tg-rgb-r), -0.3rem 0 0 var(--tg-rgb-b)", filter: "blur(0)" },
            "4%": { textShadow: "0.3rem 0 0 var(--tg-rgb-r), -0.3rem 0 0 var(--tg-rgb-b)", filter: "blur(0)" },
            "5%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-r), 0.3rem 0 0 var(--tg-rgb-b)", filter: "blur(0)" },
            "6%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-r), 0.3rem 0 0 var(--tg-rgb-b)", filter: "blur(0)" },
            "7%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-r), 0.3rem 0 0 var(--tg-rgb-b)", filter: "blur(0)" },
            "8%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-r), 0.3rem 0 0 var(--tg-rgb-b)", filter: "blur(0)" },
            "9%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-r), 0.3rem 0 0 var(--tg-rgb-b)", filter: "blur(0)" },
            "10%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-r), 0.3rem 0 0 var(--tg-rgb-b)", filter: "blur(0)" },
            "11%": { textShadow: "0.1rem 0 0 var(--tg-rgb-r), -0.1rem 0 0 var(--tg-rgb-g)", filter: "blur(var(--tg-rgb-blur))" },
            "12%": { textShadow: "0.1rem 0 0 var(--tg-rgb-r), -0.1rem 0 0 var(--tg-rgb-g)", filter: "blur(var(--tg-rgb-blur))" },
            "13%": { textShadow: "0.1rem 0 0 var(--tg-rgb-r), -0.1rem 0 0 var(--tg-rgb-g)", filter: "blur(var(--tg-rgb-blur))" },
            "14%": { textShadow: "0.1rem 0 0 var(--tg-rgb-r), -0.1rem 0 0 var(--tg-rgb-g)", filter: "blur(0)" },
            "15%": { textShadow: "0.1rem 0 0 var(--tg-rgb-r), -0.1rem 0 0 var(--tg-rgb-g)", filter: "blur(0)" },
            "16%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-r), 0.3rem 0 0 var(--tg-rgb-g)", filter: "blur(0)" },
            "17%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-r), 0.3rem 0 0 var(--tg-rgb-g)", filter: "blur(0)" },
            "18%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-r), 0.3rem 0 0 var(--tg-rgb-g)", filter: "blur(0)" },
            "19%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-r), 0.3rem 0 0 var(--tg-rgb-g)", filter: "blur(0)" },
            "20%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-r), 0.3rem 0 0 var(--tg-rgb-g)", filter: "blur(0)" },
            "21%": {
              textShadow: "0.1rem 0 0 var(--tg-rgb-b), -0.1rem 0 0 var(--tg-rgb-g)",
              filter: "blur(0)",
            },
            "22%": {
              textShadow: "0.1rem 0 0 var(--tg-rgb-b), -0.1rem 0 0 var(--tg-rgb-g)",
              filter: "blur(0)",
            },
            "23%": {
              textShadow: "0.1rem 0 0 var(--tg-rgb-b), -0.1rem 0 0 var(--tg-rgb-g)",
              filter: "blur(0)",
            },
            "24%": {
              textShadow: "0.1rem 0 0 var(--tg-rgb-b), -0.1rem 0 0 var(--tg-rgb-g)",
              filter: "blur(0)",
            },
            "25%": {
              textShadow: "0.1rem 0 0 var(--tg-rgb-b), -0.1rem 0 0 var(--tg-rgb-g)",
              filter: "blur(0)",
            },
            "26%": {
              textShadow: "0.1rem 0 0 var(--tg-rgb-b), -0.1rem 0 0 var(--tg-rgb-g)",
              filter: "blur(var(--tg-rgb-blur))",
            },
            "27%": {
              textShadow: "0.1rem 0 0 var(--tg-rgb-b), -0.1rem 0 0 var(--tg-rgb-g)",
              filter: "blur(var(--tg-rgb-blur))",
            },
            "28%": {
              textShadow: "0.1rem 0 0 var(--tg-rgb-b), -0.1rem 0 0 var(--tg-rgb-g)",
              filter: "blur(0)",
            },
            "29%": {
              textShadow: "0.1rem 0 0 var(--tg-rgb-b), -0.1rem 0 0 var(--tg-rgb-g)",
              filter: "blur(0)",
            },
            "30%": {
              textShadow: "0.1rem 0 0 var(--tg-rgb-b), -0.1rem 0 0 var(--tg-rgb-g)",
              filter: "blur(0)",
            },
            "31%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-b), 0.3rem 0 0 var(--tg-rgb-g)", filter: "blur(0)" },
            "32%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-b), 0.3rem 0 0 var(--tg-rgb-g)", filter: "blur(0)" },
            "33%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-b), 0.3rem 0 0 var(--tg-rgb-g)", filter: "blur(0)" },
            "34%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-b), 0.3rem 0 0 var(--tg-rgb-g)", filter: "blur(0)" },
            "35%": {
              textShadow: "-0.3rem 0 0 var(--tg-rgb-b), 0.3rem 0 0 var(--tg-rgb-g)",
              filter: "blur(var(--tg-rgb-blur))",
            },
            "36%": {
              textShadow: "-0.3rem 0 0 var(--tg-rgb-b), 0.3rem 0 0 var(--tg-rgb-g)",
              filter: "blur(var(--tg-rgb-blur))",
            },
            "37%": {
              textShadow: "-0.3rem 0 0 var(--tg-rgb-b), 0.3rem 0 0 var(--tg-rgb-g)",
              filter: "blur(var(--tg-rgb-blur))",
            },
            "38%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-b), 0.3rem 0 0 var(--tg-rgb-g)", filter: "blur(0)" },
            "39%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-b), 0.3rem 0 0 var(--tg-rgb-g)", filter: "blur(0)" },
            "40%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-b), 0.3rem 0 0 var(--tg-rgb-g)", filter: "blur(0)" },
            "41%": {
              textShadow: "3rem 0 0 var(--tg-rgb-b), -3rem 0 0 var(--tg-rgb-g)",
              filter: "blur(0)",
            },
            "42%": { textShadow: "0 0 0 var(--tg-rgb-b), 0 0 0 var(--tg-rgb-g)", filter: "blur(0)" },
            "43%": { textShadow: "0.1rem 0 0 var(--tg-rgb-r), -0.1rem 0 0 var(--tg-rgb-g)", filter: "blur(0)" },
            "44%": { textShadow: "0.1rem 0 0 var(--tg-rgb-r), -0.1rem 0 0 var(--tg-rgb-g)", filter: "blur(0)" },
            "45%": { textShadow: "0.1rem 0 0 var(--tg-rgb-r), -0.1rem 0 0 var(--tg-rgb-g)", filter: "blur(0)" },
            "46%": { textShadow: "0.1rem 0 0 var(--tg-rgb-r), -0.1rem 0 0 var(--tg-rgb-g)", filter: "blur(var(--tg-rgb-blur))" },
            "47%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-r), 0.3rem 0 0 var(--tg-rgb-g)", filter: "blur(var(--tg-rgb-blur))" },
            "48%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-r), 0.3rem 0 0 var(--tg-rgb-g)", filter: "blur(0)" },
            "49%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-r), 0.3rem 0 0 var(--tg-rgb-g)", filter: "blur(0)" },
            "50%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-r), 0.3rem 0 0 var(--tg-rgb-g)", filter: "blur(0)" },
            "51%": { textShadow: "0.3rem 0 0 var(--tg-rgb-r), -0.3rem 0 0 var(--tg-rgb-b)", filter: "blur(0)" },
            "52%": { textShadow: "0.3rem 0 0 var(--tg-rgb-r), -0.3rem 0 0 var(--tg-rgb-b)", filter: "blur(0)" },
            "53%": { textShadow: "0.3rem 0 0 var(--tg-rgb-r), -0.3rem 0 0 var(--tg-rgb-b)", filter: "blur(0)" },
            "54%": { textShadow: "0.3rem 0 0 var(--tg-rgb-r), -0.3rem 0 0 var(--tg-rgb-b)", filter: "blur(0)" },
            "55%": {
              textShadow: "0.3rem 0 0 var(--tg-rgb-r), -0.3rem 0 0 var(--tg-rgb-b)",
              filter: "blur(var(--tg-rgb-blur))",
            },
            "56%": {
              textShadow: "-0.3rem 0 0 var(--tg-rgb-r), 0.3rem 0 0 var(--tg-rgb-b)",
              filter: "blur(var(--tg-rgb-blur))",
            },
            "57%": {
              textShadow: "-0.3rem 0 0 var(--tg-rgb-r), 0.3rem 0 0 var(--tg-rgb-b)",
              filter: "blur(var(--tg-rgb-blur))",
            },
            "58%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-r), 0.3rem 0 0 var(--tg-rgb-b)", filter: "blur(0)" },
            "59%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-r), 0.3rem 0 0 var(--tg-rgb-b)", filter: "blur(0)" },
            "60%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-r), 0.3rem 0 0 var(--tg-rgb-b)", filter: "blur(0)" },
            "61%": { textShadow: "1rem 0 0 var(--tg-rgb-r), -1rem 0 0 var(--tg-rgb-g)", filter: "blur(0)" },
            "62%": { textShadow: "0 0 0 var(--tg-rgb-r), 0 0 0 var(--tg-rgb-g)", filter: "blur(0)" },
            "63%": { textShadow: "0.1rem 0 0 var(--tg-rgb-r), -0.1rem 0 0 var(--tg-rgb-b)", filter: "blur(0)" },
            "64%": { textShadow: "0.1rem 0 0 var(--tg-rgb-r), -0.1rem 0 0 var(--tg-rgb-b)", filter: "blur(0)" },
            "65%": { textShadow: "0.1rem 0 0 var(--tg-rgb-r), -0.1rem 0 0 var(--tg-rgb-b)", filter: "blur(0)" },
            "66%": {
              textShadow: "0.1rem 0 0 var(--tg-rgb-r), -0.1rem 0 0 var(--tg-rgb-b)",
              filter: "blur(var(--tg-rgb-blur))",
            },
            "67%": {
              textShadow: "-0.3rem 0 0 var(--tg-rgb-r), 0.3rem 0 0 var(--tg-rgb-b)",
              filter: "blur(var(--tg-rgb-blur))",
            },
            "68%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-r), 0.3rem 0 0 var(--tg-rgb-b)", filter: "blur(0)" },
            "69%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-r), 0.3rem 0 0 var(--tg-rgb-b)", filter: "blur(0)" },
            "70%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-r), 0.3rem 0 0 var(--tg-rgb-b)", filter: "blur(0)" },
            "71%": { textShadow: "2rem 0 0 var(--tg-rgb-r), -2rem 0 0 var(--tg-rgb-b)", filter: "blur(0)" },
            "72%": { textShadow: "0 0 0 var(--tg-rgb-r), 0 0 0 var(--tg-rgb-b)", filter: "blur(0)" },
            "73%": { textShadow: "0.3rem 0 0 var(--tg-rgb-r), -0.3rem 0 0 var(--tg-rgb-b)", filter: "blur(0)" },
            "74%": { textShadow: "0.3rem 0 0 var(--tg-rgb-r), -0.3rem 0 0 var(--tg-rgb-b)", filter: "blur(0)" },
            "75%": { textShadow: "0.3rem 0 0 var(--tg-rgb-r), -0.3rem 0 0 var(--tg-rgb-b)", filter: "blur(0)" },
            "76%": { textShadow: "0.3rem 0 0 var(--tg-rgb-r), -0.3rem 0 0 var(--tg-rgb-b)", filter: "blur(0)" },
            "77%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-r), 0.3rem 0 0 var(--tg-rgb-b)", filter: "blur(0)" },
            "78%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-r), 0.3rem 0 0 var(--tg-rgb-b)", filter: "blur(0)" },
            "79%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-r), 0.3rem 0 0 var(--tg-rgb-b)", filter: "blur(0)" },
            "80%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-r), 0.3rem 0 0 var(--tg-rgb-b)", filter: "blur(0)" },
            "81%": { textShadow: "0.1rem 0 0 var(--tg-rgb-r), -0.1rem 0 0 var(--tg-rgb-g)", filter: "blur(0)" },
            "82%": { textShadow: "0.1rem 0 0 var(--tg-rgb-r), -0.1rem 0 0 var(--tg-rgb-g)", filter: "blur(0)" },
            "83%": { textShadow: "0.1rem 0 0 var(--tg-rgb-r), -0.1rem 0 0 var(--tg-rgb-g)", filter: "blur(var(--tg-rgb-blur))" },
            "84%": { textShadow: "0.1rem 0 0 var(--tg-rgb-r), -0.1rem 0 0 var(--tg-rgb-g)", filter: "blur(var(--tg-rgb-blur))" },
            "85%": { textShadow: "0.1rem 0 0 var(--tg-rgb-r), -0.1rem 0 0 var(--tg-rgb-g)", filter: "blur(var(--tg-rgb-blur))" },
            "86%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-r), 0.3rem 0 0 var(--tg-rgb-g)", filter: "blur(var(--tg-rgb-blur))" },
            "87%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-r), 0.3rem 0 0 var(--tg-rgb-g)", filter: "blur(var(--tg-rgb-blur))" },
            "88%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-r), 0.3rem 0 0 var(--tg-rgb-g)", filter: "blur(0)" },
            "89%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-r), 0.3rem 0 0 var(--tg-rgb-g)", filter: "blur(0)" },
            "90%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-r), 0.3rem 0 0 var(--tg-rgb-g)", filter: "blur(0)" },
            "91%": {
              textShadow: "1rem 0 0 var(--tg-rgb-g), -1rem 0 0 var(--tg-rgb-b)",
              filter: "blur(0)",
            },
            "92%": {
              textShadow: "0.1rem 0 0 var(--tg-rgb-b), -0.1rem 0 0 var(--tg-rgb-g)",
              filter: "blur(0)",
            },
            "93%": {
              textShadow: "0.1rem 0 0 var(--tg-rgb-b), -0.1rem 0 0 var(--tg-rgb-g)",
              filter: "blur(0)",
            },
            "94%": {
              textShadow: "0.1rem 0 0 var(--tg-rgb-b), -0.1rem 0 0 var(--tg-rgb-g)",
              filter: "blur(0)",
            },
            "95%": {
              textShadow: "0.1rem 0 0 var(--tg-rgb-b), -0.1rem 0 0 var(--tg-rgb-g)",
              filter: "blur(0)",
            },
            "96%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-b), 0.3rem 0 0 var(--tg-rgb-g)", filter: "blur(0)" },
            "97%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-b), 0.3rem 0 0 var(--tg-rgb-g)", filter: "blur(0)" },
            "98%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-b), 0.3rem 0 0 var(--tg-rgb-g)", filter: "blur(0)" },
            "99%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-b), 0.3rem 0 0 var(--tg-rgb-g)", filter: "blur(0)" },
            "100%": { textShadow: "-0.3rem 0 0 var(--tg-rgb-b), 0.3rem 0 0 var(--tg-rgb-g)", filter: "blur(0)" },
          },
        },
      })

      addUtilities({
        ".text-glitch": {
          animation: `glitch var(--tg-rgb-duration) steps(100) infinite`,
        },
      })

      matchUtilities(
        {
          "text-glitch-duration": (value: string) => ({
            "--tg-rgb-duration": value,
          }),
        },
        {
          values: theme("duration"),
        }
      )
    }
  },
  function () {
    return {
      theme: {
        duration: {
          fast: "1s",
          normal: "3s",
          slow: "5s",
        },
      },
    }
  }
)
