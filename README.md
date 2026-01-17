# 3D Interactive Portfolio Website

A modern, interactive 3D portfolio website built with React, Three.js, and Tailwind CSS. Features an immersive 3D environment with interactive models, a responsive design, and smooth animations to showcase professional experience and projects.

## 🔗 Live Demo

**[View Portfolio Online](https://portfolio-x8jb.onrender.com)**

Visit the deployed version to explore the interactive 3D portfolio experience!

## 📸 Screenshots

### Home Page - Interactive 3D Island
![Home Page](./src/assets/screenshots/Home%20Page.png)
*Explore an interactive 3D island with animated models and ambient music*

### About Page - Skills & Experience
![About Page](./src/assets/screenshots/About%20Page.png)
*Showcase of technical skills and professional work experience*

### Projects Page - Portfolio Showcase
![Projects Page](./src/assets/screenshots/Projects%20Page.png)
*Display of completed projects with links and descriptions*

### Contact Page - Interactive Form
![Contact Page](./src/assets/screenshots/Contact%20Page.png)
*Contact form with interactive 3D fox model that reacts to user interactions*

## 🌟 Features

- **3D Interactive Environment**: Explore a 3D island, sky, and animated models using Three.js
- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Dynamic Navigation**: Smooth navigation between different portfolio sections
- **Interactive 3D Models**: Island, sky, plane, bird, and fox animations
- **Experience Timeline**: Visual timeline of professional experience with detailed descriptions
- **Project Showcase**: Display of completed projects with links to GitHub repositories
- **Contact Form**: Email integration using EmailJS for direct contact
- **Background Music**: Optional ambient background music on the home page
- **Smooth Animations**: React Spring animations for fluid UI interactions
- **Professional Styling**: Tailwind CSS for modern, clean design

## 🛠️ Tech Stack

### Frontend
- **React** - UI library and component framework
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing

### 3D Graphics
- **Three.js** - 3D JavaScript library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber
- **React Spring Three** - Animation library for Three.js

### Backend Integration
- **EmailJS** - Email service for contact form

### Development Tools
- **ESLint** - Code quality and linting
- **PostCSS** - CSS transformations
- **Autoprefixer** - Vendor prefixing

## 📋 Project Structure

```
src/
├── assets/
│   ├── 3d/              # 3D model files
│   ├── icons/           # Icon assets
│   └── images/          # Image assets
├── components/
│   ├── timeline/        # Experience timeline components
│   ├── Alert.jsx        # Alert notification component
│   ├── CTA.jsx          # Call-to-action component
│   ├── ExperienceTimeline.jsx
│   ├── Footer.jsx       # Footer component
│   ├── HomeInfo.jsx     # Home page information
│   ├── Loader.jsx       # Loading component
│   └── Navbar.jsx       # Navigation bar
├── models/
│   ├── Bird.jsx         # Bird 3D model
│   ├── Island.jsx       # Island 3D model
│   ├── Plane.jsx        # Plane 3D model
│   ├── Sky.jsx          # Sky 3D model
│   └── fox.jsx          # Fox 3D model
├── pages/
│   ├── Home.jsx         # Home page with 3D canvas
│   ├── About.jsx        # About page with skills and experience
│   ├── Projects.jsx     # Projects showcase
│   └── Contact.jsx      # Contact form with 3D model
├── hooks/
│   └── useAlert.js      # Custom hook for alert management
├── constants/
│   └── index.js         # Constants (skills, experience, projects, socials)
├── App.jsx              # Main app component
├── main.jsx             # Entry point
└── index.css            # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd 3d-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (if using EmailJS)
   - Add your EmailJS credentials in the Contact component or create a `.env` file

### Development

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Linting

Check code quality:
```bash
npm run lint
```

## � Deployment

### Render Deployment

This project is deployed on **Render**. To handle client-side routing for this SPA, configure redirects in Render's dashboard:

**Setting Up Redirect Rules:**
1. Go to your service settings on Render
2. Navigate to **Redirect/Rewrite Rules**
3. Add a new rule:
   - **Source**: `/*`
   - **Destination**: `/index.html`
   - **Action**: `Rewrite`
4. Click **Add Rule** and **Save Changes**

This ensures page refreshes work correctly on any route (e.g., `/about`, `/projects`, `/contact`).

**Deployment Configuration:**
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`

**To Deploy Your Own:**

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy to Render"
   git push origin main
   ```

2. **Create a new Web Service on Render**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Add redirect rule as shown above
   - Deploy!

## �📄 Pages

### Home (`/`)
- Interactive 3D island environment
- Toggle background music
- Smooth animations and transitions
- Responsive for all screen sizes

### About (`/about`)
- Professional introduction
- Skills showcase with icons
- Experience timeline with detailed work history
- Call-to-action for contacting

### Projects (`/projects`)
- Portfolio of completed projects
- Project descriptions and links to GitHub
- Project-specific icons and themes
- Links to live projects and repositories

### Contact (`/contact`)
- Interactive contact form
- 3D fox model that reacts to form interactions
- EmailJS integration for email delivery
- Form validation and success/error notifications

## 🎨 Customization

### Skills
Edit `src/constants/index.js` to add or modify skills in the `skills` array.

### Experience
Update the `experiences` array in `src/constants/index.js` with your professional history.

### Projects
Modify the `projects` array in `src/constants/index.js` to showcase your work.

### Social Links
Update the `socialLinks` array with your social media profiles and contact information.

### Styling
- Global styles: `src/index.css`
- Component-specific styles: Inline Tailwind classes
- Customize Tailwind configuration in `tailwind.config.js`

## 🎭 3D Models

The portfolio includes several interactive 3D models:
- **Island**: The main environment scene
- **Sky**: Dynamic sky background
- **Plane**: Flying animation
- **Bird**: Hovering animation
- **Fox**: Interactive model in the contact page

Models are built with Three.js and utilize Drei helpers for enhanced functionality.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px (sm)
- **Tablet**: 768px - 1024px (md)
- **Desktop**: > 1024px (lg)

Screen-specific adjustments are handled in component logic (e.g., Island model scaling).

## 🔊 Audio

The home page features optional background music with toggle functionality. Audio is controlled via state management and includes:
- 10% volume by default
- Looping functionality
- Play/pause controls

## 📧 Contact Form

The contact form integrates with EmailJS for email delivery:
1. Collects name, email, and message
2. Triggers fox animations based on form state
3. Shows success/error alerts
4. Includes loading state during submission

## 🎯 Performance Optimizations

- Lazy loading of components with `Suspense`
- Asset optimization for 3D models
- Efficient state management
- CSS-in-JS optimizations with Tailwind
- Production build optimization with Vite

## 📚 Dependencies Overview

| Package | Purpose |
|---------|---------|
| react | UI framework |
| react-dom | React rendering |
| react-router-dom | Routing |
| three | 3D graphics |
| @react-three/fiber | React Three.js renderer |
| @react-three/drei | Three.js helpers |
| @react-spring/three | Animation library |
| @emailjs/browser | Email service |
| tailwindcss | CSS utility framework |

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements or new features.

## 📝 License

This project is open source and available under the MIT License.

## 👤 About

**Mridul Sharma** - Software Engineer based in India, specializing in web development and 3D design.

### Connect
- 🔗 [GitHub](https://github.com/Smridul3004)
- 💼 [LinkedIn](https://www.linkedin.com/in/mridul-sharma-78843120a)
- 📸 [Instagram](https://www.instagram.com/mxridul/)

## 📞 Support

For questions or issues, please reach out through the contact form on the website or connect via social links.

---

**Happy exploring! 🚀**