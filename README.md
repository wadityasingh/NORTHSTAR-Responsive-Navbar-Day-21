# NORTHSTAR — Responsive Navbar with Hamburger Menu

A clean, modern, and fully responsive navigation interface built using HTML5, CSS3, and Vanilla JavaScript.

**Day 21 | Web Development Internship | Veda Technology**

---

## Project Overview

NORTHSTAR is a responsive navigation interface developed as part of Day 21 of the Web Development Internship.

The project demonstrates how a desktop horizontal navigation bar adapts to smaller screen sizes by transforming into an accessible mobile hamburger menu.

It focuses on responsive layouts, smooth menu interactions, keyboard accessibility, and clean frontend development practices without using any external frameworks or libraries.

## Objective

The primary objective is to build a responsive and accessible navigation system using:

- **HTML5:** Semantic structure and accessibility.
- **CSS3:** Responsive layouts, styling, animations, and media queries.
- **Vanilla JavaScript:** Menu interactions, event handling, and responsive state management.

## Features

### 1. Responsive Navigation
- Horizontal navigation bar on desktop.
- Compact navigation layout on tablet screens.
- Hamburger navigation menu on mobile devices.

### 2. Interactive Hamburger Menu
- Animated three-line hamburger icon.
- Smooth transformation into an X-shaped close icon.
- Slide-down mobile navigation panel.
- Overlay backdrop when the menu is open.

### 3. Menu Controls
- Open and close using the hamburger button.
- Automatically close after selecting a navigation link.
- Close by clicking outside the menu or on the backdrop.
- Close using the Escape key.
- Restore focus to the hamburger button after closing with Escape.

### 4. Accessibility
- Semantic HTML elements.
- Accessible button labels.
- Dynamic `aria-expanded` and `aria-controls` attributes.
- Visible keyboard focus indicators.
- Keyboard-friendly interactions.
- Support for `prefers-reduced-motion`.

### 5. Responsive State Management
- Automatically closes the mobile menu when switching to desktop view.
- Uses a responsive breakpoint of 768px.
- Prevents unwanted horizontal scrolling across screen sizes.

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Semantic structure |
| CSS3 | Styling and responsive layouts |
| Flexbox | Navigation alignment |
| CSS Grid | Layout management |
| Media Queries | Responsive design |
| JavaScript ES6+ | Menu interactions |
| DOM Manipulation | Dynamic UI updates |
| ARIA Attributes | Accessibility |

## Project Folder Structure

```text
NORTHSTAR/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Responsive Behavior

| Screen Size | Navigation Behavior |
|---|---|
| Desktop (> 1024px) | Full horizontal navigation with CTA |
| Tablet (769px–1024px) | Compact horizontal navigation |
| Mobile (≤ 768px) | Hamburger menu with slide-down panel |

## Key Implementation Details

**1. ARIA State Management**

JavaScript updates the `aria-expanded` attribute whenever the hamburger menu opens or closes, keeping the accessibility state synchronized with the interface.

**2. CSS Hamburger Animation**

CSS transforms and transitions animate the three hamburger lines into a close icon.

**3. Mobile Menu Interaction**

JavaScript event listeners handle menu toggling, outside clicks, navigation selection, and keyboard interactions.

**4. Responsive Breakpoint**

The `window.matchMedia()` API monitors the mobile breakpoint and resets the menu state when the viewport changes to desktop size.

**5. Reduced Motion Support**

CSS respects the user's motion preferences through the `prefers-reduced-motion` media query.

## How to Run Locally

No framework, package installation, or build process is required.

### Option 1: Open Directly

1. Clone or download this repository.
2. Open the project folder.
3. Double-click `index.html`.
4. The website will open in your browser.

### Option 2: Using VS Code

1. Open the project folder in VS Code.
2. Open `index.html`.
3. Run it using the Live Server extension.

### Option 3: Using Python

Run the following command inside the project directory:

```bash
python -m http.server 3000
```

Open the following address in your browser:

```text
http://localhost:3000
```

## Learning Outcomes

Through this project, I practised:

- Building responsive navigation layouts.
- Using CSS media queries for different screen sizes.
- Implementing hamburger menu animations.
- Handling JavaScript click and keyboard events.
- Working with DOM manipulation.
- Understanding ARIA attributes and accessibility.
- Managing responsive UI states using JavaScript.

## Future Improvements

- Add dropdown navigation support.
- Add a theme switcher.
- Improve navigation transitions.
- Add more keyboard navigation enhancements.

## Author

**Aditya Singh**

B.Tech CSE | Frontend Development Learner

**Project:** Day 21 — Web Development Internship  
**Organization:** Veda Technology

---

*Built with HTML, CSS, and Vanilla JavaScript.*