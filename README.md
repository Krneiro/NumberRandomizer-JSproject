# Number Randomizer

An elegant and interactive web application for generating random numbers with customizable parameters.

## ✨ Features

- **Generate Random Numbers**: Create multiple random numbers at once
- **Custom Interval**: Set minimum and maximum values for the range
- **No Repeat Option**: Toggle to ensure all generated numbers are unique
- **Real-time Validation**: Input validation with helpful error messages
- **Smooth Animations**: Animated number card display with staggered effects
- **Responsive Design**: Beautiful glassmorphism UI that works on all devices

## 🎯 How It Works

1. Enter the **quantity** of numbers you want to generate
2. Set the **minimum** and **maximum** values for the interval
3. *(Optional)* Check "Do not repeat numbers" to ensure unique values
4. Click **Randomize** to generate the numbers
5. View your results displayed with smooth animations

## 📋 Validation Rules

- All fields are required
- Quantity must be greater than zero
- Maximum value must be greater than minimum value
- When "no repeat" is enabled, the quantity cannot exceed the available interval

## 🛠️ Technology Stack

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with glassmorphism and gradient effects
- **JavaScript (Vanilla)**: Pure JavaScript for logic and DOM manipulation

## 📁 Project Structure

```
.
├── index.html    # Main HTML structure
├── style.css     # Styling and animations
├── script.js     # Application logic
└── README.md     # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Any modern web browser

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sorteador-numeros.git
cd sorteador-numeros
```

2. Open in browser:
```bash
# On Windows
start index.html

# On macOS
open index.html

# On Linux
xdg-open index.html
```

Or simply open `index.html` directly in your web browser.

## 📝 Usage Examples

### Generate 5 random numbers between 1 and 100
- Quantity: 5
- Minimum: 1
- Maximum: 100
- Result: 5 random unique numbers displayed

### Generate lottery numbers
- Quantity: 6
- Minimum: 1
- Maximum: 60
- Enable "Do not repeat numbers"
- Result: 6 unique lottery numbers

## 🎨 Design

The application features a modern dark theme with:
- Purple and indigo gradient background
- Glassmorphism UI elements with blur effects
- Smooth animations and transitions
- Mobile-responsive grid layout

## 📦 File Descriptions

| File | Description |
|------|-------------|
| `index.html` | HTML structure with form inputs and result display area |
| `style.css` | Styling, animations, and responsive design |
| `script.js` | Form handling, validation, and randomization logic |

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License - feel free to use it for personal or commercial projects.

## 💡 Ideas for Enhancement

- Export results to CSV or JSON
- History of previous randomizations
- Dark/Light theme toggle
- Copy to clipboard functionality
- Browser local storage for saved preferences

## 🐛 Bug Reports

If you find a bug, please open an issue with:
- Description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Browser and OS information

## 📧 Contact

Feel free to reach out with questions or suggestions!

---

Made with ❤️ by Raphael Carneiro
