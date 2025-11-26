# AI Platform Architect Portfolio

A modern, high-performance portfolio website designed for AI Platform Architects and Senior Engineers. This project features a "Glowing Tech" aesthetic with glassmorphism, dynamic animations, and a responsive layout.

## 🚀 Features

- **Modern Aesthetic:** Deep blue color scheme (`#0f172a`) with vibrant cyan accents (`#0ea5e9`) and glassmorphism effects.
- **Dynamic Hero Section:** Animated background with moving dot patterns and a "breathing" scroll indicator.
- **Interactive Elements:**
  - Scroll-triggered animations (Fade-in, Scale-in).
  - Tabbed "Technical Expertise" section.
  - Hover effects with glow and lift animations.
- **Responsive Design:** Fully optimized for desktops, tablets, and mobile devices.
- **Performance:** Lightweight, vanilla HTML/CSS/JS with no heavy framework dependencies.

## 🛠️ Tech Stack

- **HTML5:** Semantic structure and accessibility.
- **CSS3:** Custom properties (variables), Flexbox, Grid, and Keyframe animations.
- **JavaScript:** Vanilla JS for intersection observers (scroll animations) and tab logic.
- **Fonts:** 'Inter' from Google Fonts.
- **Icons:** Font Awesome (CDN).

## 📂 Project Structure

```
.
├── index.html          # Main content structure
├── style.css           # All styles, variables, and animations
├── script.js           # Logic for scroll animations and tabs
├── assets/             # Directory for images and resume
│   └── resume.pdf      # (Place your resume here)
└── README.md           # Project documentation
```

## ⚙️ Customization

### 1. Personal Details
Edit `index.html` to update your name, title, and bio.
- **Hero Section:** Lines 158-176
- **About Section:** Lines 191-208
- **Contact Info:** Lines 676-728

### 2. Profile Image
Replace the placeholder image in `index.html` (Line 180) with your actual photo:
```html
<img src="assets/your-photo.jpg" alt="Your Name">
```

### 3. Resume
Place your PDF resume in the `assets` folder and name it `resume.pdf`. The download button in the hero section is already linked to `assets/resume.pdf`.

### 4. Colors & Theme
Modify the CSS variables in `style.css` (Lines 1-32) to change the color scheme:
```css
:root {
    --primary-color: #0f172a; /* Main background */
    --accent-color: #0ea5e9;  /* Primary accent */
    --secondary-accent: #f97316; /* Secondary accent */
}
```

## 📦 Deployment

### GitHub Pages (Recommended)
1. Commit and push your changes to your GitHub repository (`username.github.io`).
2. Go to **Settings > Pages**.
3. Select the `main` branch as the source.
4. Your site will be live at `https://username.github.io`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).