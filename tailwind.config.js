/** @type {import('tailwindcss').Config} */
export default {
  content: ["./porfolio/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
      themes: [
        {
          mytheme: { 
            "primary": "#eab308",
                      
            "secondary": "#2dd4bf",
                      
            "accent": "#a8a29e",
                      
            "neutral": "#fcd34d",
                      
            "base-100": "#f3f4f6",
                      
            "info": "#facc15",
                      
            "success": "#34d399",
                      
            "warning": "#ffad00",
                      
            "error": "#ef4444",
          },
        },
      ],
    },
  plugins: [require("@tailwindcss/typography"),require("daisyui")],
}

