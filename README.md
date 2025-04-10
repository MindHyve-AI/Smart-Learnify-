# Smart Learnify AI

An AI-powered adaptive learning platform built with Next.js, TypeScript, and a modern tech stack.

## Features

- 🧠 **Adaptive Learning**: Personalized content that adapts to each student's learning style and pace
- 📊 **Progress Tracking**: Comprehensive analytics to visualize learning progress
- 🤖 **AI Feedback**: Intelligent feedback on assignments and assessments
- 🔐 **Secure Authentication**: OAuth 2.1 with Azure AD B2C integration
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- 🌗 **Dark/Light Mode**: System-aware theme with manual toggle
- ♿ **Accessibility**: WCAG 2.1 AA compliant

## Tech Stack

- **Framework**: Next.js 14 (App Router) with TypeScript
- **Styling**: TailwindCSS 3.x + CSS Modules
- **UI**: Shadcn/UI + Radix UI primitives
- **Animations**: Framer Motion 6.x
- **State**: Zustand (global) + React Query (async data)
- **Forms**: React Hook Form 7.x + Zod 3.x
- **Charts**: Tremor (modern visualizations)
- **Auth**: Clerk (OAuth 2.1 + Azure AD B2C integration)
- **API**: tRPC (type-safe) + Axios (fallback for external APIs)
- **Testing**: Vitest + React Testing Library + Playwright (E2E)
- **CI/CD**: GitHub Actions (deploy to Azure)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/smart-learnify.git
   cd smart-learnify
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file with the following variables:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Azure Static Web Apps

### With GitHub Actions (Recommended)

1. Create an Azure Static Web App resource in the Azure Portal.

2. Add the following secrets to your GitHub repository:
   - `AZURE_STATIC_WEB_APPS_API_TOKEN`: The deployment token from Azure Static Web App
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Your Clerk publishable key
   - `CLERK_SECRET_KEY`: Your Clerk secret key
   - `NEXT_PUBLIC_APP_URL`: Your production URL

3. Push to the main branch to trigger the deployment workflow.

### Manual Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy the `out` directory to Azure Static Web Apps through the Azure Portal or CLI.

## Project Structure

```
smart-learnify/
├── src/
│   ├── app/                 # App Router routes
│   │   ├── auth/            # Authentication routes
│   │   ├── dashboard/       # Protected dashboard pages
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Landing page
│   ├── components/          # React components
│   │   ├── dashboard/       # Dashboard-specific components
│   │   ├── landing/         # Landing page components
│   │   ├── layout/          # Layout components
│   │   └── ui/              # UI components (from shadcn/ui)
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   │   └── trpc.ts          # tRPC client setup
│   ├── stores/              # Zustand stores
│   │   └── useUserStore.ts  # User state store
│   └── types/               # TypeScript type definitions
├── public/                  # Static assets
├── tests/                   # Test files
├── .env.example             # Example environment variables
├── .github/                 # GitHub workflows
├── Dockerfile               # Docker configuration
└── next.config.js           # Next.js configuration
```

## Development

### Testing

Run the test suite:
```bash
npm test
```

Run E2E tests:
```bash
npm run test:e2e
```

### Code Quality

Check for linting issues:
```bash
npm run lint
```

Type-check the codebase:
```bash
npm run typecheck
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Shadcn/UI](https://ui.shadcn.com/) - UI components
- [Clerk](https://clerk.dev/) - Authentication and user management
- [Azure](https://azure.microsoft.com/) - Hosting and services 