# Project_01

🌈 PROJECT: Mood-Based Landing Page
A personal landing page that changes theme (colors, animations, layout) based on your selected mood (e.g., Calm, Focused, Energetic, Sad, etc.)

🧱 1. Project Structure
bash
Copy
Edit
mood-landing/
├── public/             # Static assets (icons, images, etc.)
├── src/
│   ├── components/     # Reusable UI components (Button, Header, MoodCard, etc.)
│   ├── pages/          # Main views (Home, About, etc.)
│   ├── styles/         # Tailwind config, custom CSS if needed
│   ├── hooks/          # Custom React hooks (e.g., useMood)
│   ├── utils/          # Helper functions (e.g., mood-to-theme mapping)
│   └── App.tsx
├── .env                # API keys
├── tailwind.config.js
├── supabase.config.js  # Database config
└── package.json
💻 2. Tech Stack (Free & Modern)
Layer	Tool / Tech	Notes
Frontend	React + Vite / Next.js	Fast setup and SEO-friendly
Styling	Tailwind CSS + Framer Motion	Easy theming + animation
State Management	useState / useReducer / Zustand	Lightweight options
Backend / DB	Supabase	Free DB + Auth
Authentication	Supabase Auth	Social/email login
APIs	Supabase REST + optional Node.js	Supabase provides built-in APIs
Image Upload (optional)	Supabase Storage	For profile or mood images
Deployment	Vercel / Netlify	Free, Git-based, instant deploy

🎨 3. Theme / Mood Management Ideas
Create a moods.js or moodThemes.js file:

js
Copy
Edit
export const moodThemes = {
  calm: {
    background: '#E0F7FA',
    text: '#00796B',
    animation: 'fadeIn',
  },
  focused: {
    background: '#F3E5F5',
    text: '#4A148C',
    animation: 'slideInUp',
  },
  energetic: {
    background: '#FFF3E0',
    text: '#E65100',
    animation: 'bounceIn',
  },
  sad: {
    background: '#ECEFF1',
    text: '#455A64',
    animation: 'fadeOutDown',
  },
}
Use React context or a hook to update theme dynamically.

📲 4. Best Practices for Web & Mobile
Area	Best Practice
Responsive UI	Use Tailwind’s responsive classes (sm:, md:, lg:)
Mobile First	Design UI mobile-first, test with Chrome Dev Tools
Accessibility	Use semantic HTML, alt tags, good contrast
Animations	Subtle, not overwhelming (Framer Motion’s initial, animate, exit)
Code Quality	Use Prettier + ESLint for clean code

🧩 5. Database Architecture (Supabase)
Table: users

Field	Type
id	UUID
email	String
mood	String
created_at	Date

Table: mood_logs

Field	Type
id	UUID
user_id	UUID (FK to users)
mood	String
timestamp	Date
note	Text

🔌 6. API Design (via Supabase)
You’ll mostly use Supabase client SDK, but optionally build a Node.js API to:

Log mood with timestamp

Fetch mood history

Retrieve mood-based content (e.g., quotes or affirmations)

Use REST or RPC functions with Supabase SQL functions.

🔐 7. Authentication and Authorization
Supabase makes this easy:

Email/password or OAuth (Google, GitHub, etc.)

supabase.auth.signUp() & signIn()

Use supabase.auth.user() to get current user

Use RLS (Row-Level Security) to restrict mood logs per user

🚀 8. Deployment Strategy
Push code to GitHub

Connect to Vercel or Netlify

Add your Supabase keys via environment variables

Set up auto-deploy on push

Optional: Use Supabase Edge Functions for server-side logic
