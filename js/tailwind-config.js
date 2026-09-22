tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: '#09090b',
        surface: { DEFAULT: '#111114', card: '#16161c', border: '#27272a', hover: '#202028', accent: '#181822' },
        accent: { lime: '#bef264', limeDark: '#a3e635', violet: '#a855f7', gold: '#fbbf24', slate: '#94a3b8' }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      }
    }
  }
}
