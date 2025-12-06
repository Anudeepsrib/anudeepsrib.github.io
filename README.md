# Anudeep Bathina - Portfolio

This is the personal portfolio website of Anudeep Bathina, Lead Data Scientist & AI Mentor.
It showcases my experience, skills, mentorship, publications, and certifications.

## Theme

This portfolio is built using the [DeveloperFolio](https://github.com/saadpasta/developerFolio) React template by Saad Pasta.

## Features

*   **Summary & About:** Professional background and key stats.
*   **Skills:** Technical proficiency in Data Science, AI, and Cloud.
*   **Experience:** Work history at Infosys, Capgemini, Cognizant, etc.
*   **Mentorship:** Details on mentoring 240+ engineers and university engagements.
*   **Publications:** Research work and book chapters.
*   **Certifications:** Recent achievements in AI and GenAI.

## Getting Started

To run this project locally:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start the development server:**
    ```bash
    npm start
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

3.  **Build for production:**
    ```bash
    npm run build
    ```

## Customization

The main configuration file is located at `src/portfolio.js`. You can update your details there.

## Deployment

This project is ready to be deployed to GitHub Pages.
Run `npm run build` and deploy the `build` folder.

## Legacy Site

The previous HTML/CSS version of this portfolio has been backed up to the `legacy_backup` directory.


Deployment Commands
After you've committed your changes to master:

bash
# 1. Make sure you're on the master branch
git checkout master
# 2. Pull any remote changes (optional but recommended)
git pull origin master
# 3. Deploy to gh-pages
npm run deploy
That's it! The npm run deploy command will:

Run fetch.js to get any external data
Build your React app (npm run build)
Push the build artifacts to the gh-pages branch automatically
Quick Reference
Full workflow from start to finish:

bash
# Make your changes, then:
git add .
git commit -m "Your commit message"
git push origin master
npm run deploy