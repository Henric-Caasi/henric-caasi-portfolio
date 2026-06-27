/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#ffffff",
        muted: "#94a3b8",
        navy: "#020617",
        ocean: "#3b82f6",
        skysoft: "rgba(59, 130, 246, 0.08)",
        "bg-obsidian": "#030712",
        "bg-card": "rgba(17, 24, 39, 0.55)",
        "electric-blue": "#3b82f6",
        "electric-glow": "#60a5fa",
        "clean-white": "#ffffff"
      },
      fontFamily: {
        display: ["Inter", "Segoe UI", "Arial", "sans-serif"],
        sans: ["Inter", "Segoe UI", "Arial", "sans-serif"],
        mono: ["Consolas", "Monaco", "Courier New", "monospace"]
      },
      boxShadow: {
        clean: "0 18px 55px rgba(0, 0, 0, 0.5)",
        glow: "0 0 20px rgba(59, 130, 246, 0.15)"
      },
      animation: {
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "cursor-blink": "cursorBlink 1s infinite"
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: 0.35, transform: "translate(-50%, -50%) scale(1)" },
          "50%": { opacity: 0.65, transform: "translate(-50%, -50%) scale(1.15)" }
        },
        cursorBlink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 }
        }
      }
    }
  },
  plugins: []
};

