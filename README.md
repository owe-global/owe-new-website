# Open World Education Website

Welcome to the official website repository for **Open World Education**, Bangladesh's premier agency offering transparent and comprehensive global admissions, scholarship planning, and visa support.

## Overview
This is a modern, high-fidelity single-page application (SPA) built with:
- **React 19**
- **Vite**
- **Tailwind CSS v4**
- **Framer Motion** for smooth scroll reveals and UI animations
- **Lucide React** for modern iconography

The website includes custom components for:
- Eligibility predictions & university matching
- Automated booking systems integrated with Google Sheets
- Premium visual aesthetic with responsive layouts and hover animations

## Getting Started

To run this project locally:

1. Install the dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Integration Environment Variables
If you need to connect forms to your Google Sheets backend, create a `.env` file in the root directory:
```
VITE_GOOGLE_SHEET_URL=your_google_sheet_webapp_url
VITE_ELIGIBILITY_SHEET_URL=your_eligibility_sheet_webapp_url
```
