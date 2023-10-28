export function createGlitchEffect(): Record<string, Record<string, string>> {
  const keyframes: Record<string, Record<string, string>> = {}

  for (let i = 0; i <= 100; i++) {
    keyframes[`${i}%`] = {
      textShadow: "3px 0 0 var(--tg-rgb-r), -3px 0 0 var(--tg-rgb-b)",
      filter: "blur(0)",
    }
  }

  keyframes["11%"] = {
    textShadow: "1px 0 0 var(--tg-rgb-r), -1px 0 0 var(--tg-rgb-g)",
    filter: "blur(var(--tg-rgb-blur))",
  }

  for (let i = 12; i <= 61; i++) {
    keyframes[`${i}%`] = {
      textShadow: "1px 0 0 var(--tg-rgb-r), -1px 0 0 var(--tg-rgb-g)",
      filter: "blur(0)",
    }
  }

  for (let i = 62; i <= 91; i++) {
    keyframes[`${i}%`] = {
      textShadow: "0.8px 0 0 var(--tg-rgb-b), -0.8px 0 0 var(--tg-rgb-g)",
      filter: "blur(0)",
    }
  }

  keyframes["92%"] = {
    textShadow: "0.8px 0 0 var(--tg-rgb-b), -0.8px 0 0 var(--tg-rgb-g)",
    filter: "blur(0)",
  }

  keyframes["100%"] = {
    textShadow: "-3px 0 0 var(--tg-rgb-b), 3px 0 0 var(--tg-rgb-g)",
    filter: "blur(0)",
  }
  // @ts-expect-error
  return { "@keyframes glitch": keyframes }
}
