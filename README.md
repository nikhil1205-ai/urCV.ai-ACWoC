# urCV.ai – Intelligent Resume Builder

![urCV.ai Hero](docs/images/screenshot1.png)

**urCV.ai** is a state-of-the-art, AI-powered resume builder designed to help job seekers create professional, ATS-friendly resumes in minutes.  
It leverages a **dual-engine AI architecture** — combining **Groq (Llama 3)** for instant resume analysis and **Google Gemini 2.5** for intelligent career advice.

---

## 🚀 Key Features

- **🤖 AI-Powered Resume Intelligence**
  - Groq + Llama 3 for fast resume scoring and analysis
  - Google Gemini 2.5 for smart rewriting and career guidance

- **🎨 Professional Resume Templates**
  - Modern
  - Professional
  - Creative
  - Executive

- **💬 Intelligent Career Assistant**
  - Context-aware chatbot
  - Resume improvement suggestions
  - Career and interview advice

- **📄 Real-Time Resume Preview**
  - Live split-screen editing
  - Instant updates while typing

- **📱 Fully Responsive Design**
  - Works seamlessly on desktop, tablet, and mobile devices

- **⬇️ Multiple Export Formats**
  - High-quality PDF
  - Editable DOCX (Word)
  - ATS-friendly output

---

## 📸 Screenshots

### 🌟 Application Hero
![Hero View](docs/images/screenshot1.png)

### 🛠️ Intelligent Builder
![Builder Interface](docs/images/screenshot2.png)

### 🧩 Professional Templates
![Templates Page](docs/images/screenshot3.png)

### 👔 Executive Resume Design
![Executive Template](docs/images/screenshot4.png)

### 🎯 Template Selection
![Template Selection](docs/images/screenshot5.png)

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/UI (customized)
- **Icons:** Lucide React

### AI & Services
- **Resume Analysis:** Groq SDK (Llama 3)
- **Career Assistant:** Google Generative AI SDK (Gemini 2.5)
- **File Parsing:** mammoth
- **Document Export:** PDF & DOCX generation services

---

## 🏁 Getting Started

### Prerequisites
- Node.js **v18 or higher**
- npm or yarn

### Installation

#### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/urCV.ai.git
cd urCV.ai
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Configure Environment Variables
Create a .env file in the root directory:

env
Copy code
VITE_GEMINI_API_KEY=your_gemini_api_key_here
# Optional for production use
# VITE_GROQ_API_KEY=your_groq_api_key_here
4️⃣ Run the development server
bash
Copy code
npm run dev
Open http://localhost:8080 in your browser.

📂 Project Structure
text
Copy code
urCV.ai/
├── docs/
│   └── images/                 # Screenshots and assets
├── public/                     # Static assets (icons, robots.txt)
├── src/
│   ├── components/
│   │   ├── layout/             # Header, Footer
│   │   ├── resume/             # Core builder components
│   │   │   ├── forms/          # Input forms (Education, Experience, Skills)
│   │   │   ├── templates/      # Resume designs (Modern, Creative, Professional)
│   │   │   ├── ChatBot.tsx     # Gemini-powered career assistant
│   │   │   ├── ResumeAnalysis.tsx # Groq-powered scoring engine
│   │   │   ├── ResumeGenerator.tsx # PDF/DOCX export logic
│   │   │   ├── ResumePreview.tsx   # Live resume preview
│   │   │   └── aiprompt.ts     # Gemini API prompts
│   │   └── ui/                 # Reusable UI components (Shadcn/UI)
│   ├── hooks/                  # Custom hooks
│   ├── lib/                    # Utility helpers (clsx, tw-merge)
│   ├── pages/                  # Application routes
│   │   ├── Builder.tsx         # Main resume builder
│   │   ├── Index.tsx           # Landing page
│   │   ├── Templates.tsx       # Template selection
│   │   └── NotFound.tsx        # 404 page
│   ├── services/
│   │   ├── documentService.ts  # DOCX/PDF generation
│   │   ├── fileParserService.ts # Resume file parsing
│   │   └── groqService.ts      # Groq (Llama 3) integration
│   ├── App.tsx                 # Root component
│   └── main.tsx                # Application entry point
├── .gitignore
├── components.json             # Shadcn UI config
├── eslint.config.js            # ESLint configuration
├── index.html                  # HTML entry
├── package.json                # Dependencies & scripts
├── postcss.config.js           # PostCSS config
├── tailwind.config.ts          # Tailwind CSS config
├── tsconfig.json               # TypeScript config
└── vite.config.ts              # Vite build config
🤝 Contributing
Contributions are welcome!

Fork the repository

Create a new branch

bash
Copy code
git checkout -b feature/YourFeature
Commit your changes

bash
Copy code
git commit -m "Add YourFeature"
Push to GitHub

bash
Copy code
git push origin feature/YourFeature
Open a Pull Request

📄 License
This project is developed under the AcWoc 2026 Initiative.

Copyright © 2026 N-PCs
All rights reserved.

<p align="center"> Maintained by <strong>Neel Pandey</strong> </p> ```