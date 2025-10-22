# FeelingBored - Quiz Game Website

A modern, responsive quiz game website built with React and Bootstrap CSS. Test your knowledge across 9 exciting topics with a beautiful light/dark theme toggle.

## Features

- 🎯 **9 Quiz Topics**: Cricket, Football, Tamil Cinema, Tamil Actors, Space, Food, Maths, History, and Technology
- 🌙 **Light/Dark Theme**: Toggle between light and dark modes with custom red/blue color schemes
- 📱 **Responsive Design**: Works seamlessly on both mobile and desktop devices
- ⚡ **Interactive Quiz**: 10 questions per topic with multiple-choice answers
- 🏆 **Instant Results**: Get immediate feedback with score and appreciation messages
- 🎨 **Modern UI**: Beautiful gradient designs and smooth animations

## Tech Stack

- **Frontend**: React 19.1.1
- **Styling**: Bootstrap CSS with custom CSS variables
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Theme Management**: React Context API

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd React_Quiz_Game
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header with theme toggle
│   ├── HeroSection.jsx # Landing page hero section
│   ├── GamesSection.jsx # Topic selection cards
│   ├── Quiz.jsx        # Dynamic quiz component
│   └── Footer.jsx      # Footer with creator info
├── contexts/           # React context providers
│   ├── ThemeContext.jsx # Theme context definition
│   └── ThemeContextProvider.jsx # Theme provider component
├── hooks/              # Custom React hooks
│   └── useTheme.js     # Theme hook
├── data/               # Quiz data
│   └── questions.js    # All quiz questions and topics
├── App.jsx             # Main app component
├── main.jsx            # App entry point
└── index.css           # Global styles and theme variables
```

## Quiz Topics

1. **Cricket** 🏏 - Test your cricket knowledge
2. **Football** ⚽ - Football facts and history
3. **Tamil Cinema** 🎬 - Tamil movie trivia
4. **Tamil Actors** 🎭 - Tamil film industry stars
5. **Space** 🚀 - Astronomy and space exploration
6. **Food** 🍕 - Culinary knowledge from around the world
7. **Maths** 📐 - Mathematical concepts and problems
8. **History** 📚 - Historical events and figures
9. **Technology** 💻 - Tech facts and programming

## Features in Detail

### Theme System
- Light theme with lighter shades of red and blue
- Dark theme with darker shades of red and blue
- Persistent theme preference using localStorage
- Smooth transitions between themes

### Quiz System
- 10 questions per topic
- Multiple choice answers (A, B, C, D)
- Progress tracking with visual progress bar
- Answer validation and scoring
- Feedback messages based on performance
- Option to retry or return to topic selection

### Responsive Design
- Mobile-first approach
- Bootstrap grid system
- Custom CSS variables for consistent theming
- Optimized for all screen sizes

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Creator

Created with ❤️ by **Paul Bryton Raj**

- 📧 Email: paulbrytonraj@example.com
- 🐙 GitHub: [@paulbrytonraj](https://github.com/paulbrytonraj)
- 💼 LinkedIn: [paulbrytonraj](https://linkedin.com/in/paulbrytonraj)

---

**Enjoy testing your knowledge with FeelingBored!** 🎮🧠