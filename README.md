# Portfolio

Welcome to my portfolio! My name is **Thomas Heusdens**, and I am a Multimedia and Creative Technology student at Erasmushogeschool Brussel. This portfolio showcases my projects and technical skills. It was created for academic purposes and should not be used without permission.

---

## Table of Contents
1. [About the Project](#about-the-project)
2. [Technologies Used](#technologies-used)
3. [Project Structure](#project-structure)
4. [Setup and Installation](#setup-and-installation)
5. [Deployment](#deployment)
6. [Challenges and Learning Outcomes](#challenges-and-learning-outcomes)
7. [Future Improvements](#future-improvements)
8. [Documentation](#documentation)

---

## About the Project

This portfolio was built using the **Next.js** framework and styled with **Tailwind CSS**. It showcases several projects I have worked on, with detailed project pages for each. The website is fully responsive, optimized for performance, and deployed via **Vercel** on this [link](https://portfolio-7blepee2o-thomasheusdens-projects.vercel.app/).

The goal of this project was to create a professional, interactive portfolio website that is easy to update and maintain.

---

## Technologies Used

- **[Next.js](https://nextjs.org/):** A React framework for building fast and scalable web applications.
- **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework for rapid UI development.
- **[React](https://reactjs.org/):** A JavaScript library for building user interfaces.
- **[TypeScript](https://www.typescriptlang.org/):** A typed superset of JavaScript that enhances code quality.
- **[Vercel](https://vercel.com/):** Deployment and hosting platform for modern web applications.

---

## Project Structure

The project follows a standard **Next.js** structure. Below is an overview of the key files and folders:

```plaintext
portfolio-thomas-heusdens/
├── public/                # Public assets (e.g., images, projects.json)
│   ├── projects.json      # JSON file containing project data
│   ├── back-arrow.png     # Back arrow image used in navigation
│   ├── 3dastronomy.jpg    # Project images
│   └── ...
├── src/                   # Source code
│   ├── app/               # Next.js App Router
│   │   ├── page.tsx       # Landing page
│   │   ├── work/          # Work section
│   │   │   ├── page.tsx   # List of all projects
│   │   │   ├── [id]/      # Dynamic routes for project details
│   │   │   │   ├── page.tsx  # Hardcoded project pages (1/page.tsx, 2/page.tsx, etc.)
│   ├── styles/            # Global styles
│   │   ├── globals.css    # Global Tailwind styles
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
```

---

## Setup and Installation

### Prerequisites
- Node.js (version 16 or later)
- npm (or yarn)

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/ThomasHeusdens/Portfolio
   cd portfolio-thomas-heusdens
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

5. To build for production:
   ```bash
   npm run build
   npm start
   ```

---

## Deployment

The project is deployed using [Vercel](https://vercel.com/). The following settings were used:
- Root Directory: `portfolio-thomas-heusdens`
- Build Command: `npm run build`
- Output Directory: `.next/`

To deploy:
1. Push changes to the `main` branch.
2. Vercel automatically triggers a new deployment.

Live Website: [Visit Here](https://portfolio-o4vexlex6-thomasheusdens-projects.vercel.app/)

---

## Challenges and Learning Outcomes

### Challenges
1. **Dynamic Routing Issues**:
   - The initial dynamic routing for `work/[id]` encountered deployment issues on Vercel.
   - Solution: Switched to hardcoded pages for stability.

2. **Tailwind CSS Learning Curve**:
   - Tailwind's utility-first approach was new but highly efficient once mastered.

3. **Deploying on Vercel**:
   - Encountered issues with environment variables and static asset hosting.

### Learning Outcomes
- Gained hands-on experience with **Next.js** and **Tailwind CSS**.
- Learned how to optimize images and manage static files effectively.
- Improved understanding of responsive design and modern web development practices.

---

## Future Improvements
1. **Dynamic Routing:**
   - Reintroduce dynamic routes (`work/[id]`) with better error handling.
2. **CMS Integration:**
   - Integrate a headless CMS (e.g., Sanity, Contentful) for easier project updates.
3. **Additional Animations:**
   - Enhance user experience with subtle page transitions and animations.
4. **Custom Domain:**
   - Replace the Vercel URL with a custom domain for a professional touch.

---

## Documentation

- [General Tailwind Classnames](https://v2.tailwindcss.com/docs)
- [Overlay gradient](https://smarative.com/blog/how-to-apply-image-background-and-overlay-gradient-using-tailwind-css)
- [ESLint](https://eslint.org/docs/latest/use/command-line-interface)
- [This tutorial helped me a lot](https://www.freecodecamp.org/news/how-to-build-a-portfolio-site-with-nextjs-tailwindcss)
- [Carousel](https://www.npmjs.com/package/react-responsive-carousel)
- [TypeScript interface](https://www.webdevtutor.net/blog/typescript-interface-data-model)

---

Feel free to contact me via [LinkedIn](https://www.linkedin.com/in/thomas-heusdens-0bba19258/) for more details about this project.