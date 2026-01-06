# HritikPedia | No BS Knowledge

A clean, distraction-free Wikipedia search interface built with vanilla JavaScript and Tailwind CSS.

## Features

- **Minimalist Design**: Dark theme with a focus on readability and content
- **Fast Search**: Real-time Wikipedia search results
- **Smooth Animations**: Staggered card animations for better visual feedback
- **Responsive Layout**: Works seamlessly on desktop and mobile devices
- **Clean Results**: Each result displays title, source, description, and a "Read More" link
- **Empty State Handling**: Friendly message when no results are found

## Tech Stack

- **HTML5**: Semantic markup
- **CSS**: Tailwind CSS for styling + custom animations
- **JavaScript**: Vanilla JS (no frameworks)
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Space Grotesk & Inter from Google Fonts

## Project Structure

```
├── index.html      # Main HTML page with search interface
├── function.js     # JavaScript logic for search and results rendering
└── README.md       # This file
```

## How It Works

1. User enters a search query in the terminal-styled search bar
2. Results are fetched from Wikipedia API
3. Each result is displayed as an interactive card with:
   - Article title
   - Wikipedia source indicator
   - Article description (truncated to 3 lines)
   - "Read Article" link button
4. Clicking any card opens the full Wikipedia article in a new tab

## Color Scheme

- **Accent**: `#a4133c` (Deep red)
- **Background**: `#1a1a1a` (Near black)
- **Surface**: `#1e1e1e` (Slightly lighter black)
- **Text**: `#e0e0e0` (Light gray)
- **Subtext**: `#a0a0a0` (Medium gray)

## Getting Started

1. Open `index.html` in a web browser
2. Type your search query in the search bar
3. Browse through the results
4. Click on any result to read the full Wikipedia article

## Customization

- Modify the Tailwind configuration in `index.html` to change colors, fonts, or spacing
- Update the Wikipedia API endpoint in `function.js` to customize search behavior
- Adjust animation timings in the CSS `@keyframes` section

## Browser Support

Works on all modern browsers that support:

- ES6 JavaScript
- CSS Grid & Flexbox
- CSS Animations

## License

This project is open source and available under the MIT License.
