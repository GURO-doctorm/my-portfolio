# BentoFolio - Multi-Language Portfolio Template

A modern, responsive personal portfolio website template built with **Tailwind CSS** featuring a "bento box" layout design. Available in **three language versions** with full RTL support and language switching functionality.

## 🌍 Language Support

- **English** (`/x-english/`) - LTR (Left-to-Right)
- **Arabic** (`/x-arabic/`) - RTL (Right-to-Left) 
- **French** (`/x-french/`) - LTR (Left-to-Right)

## ✨ Features

### 🎨 Design & Layout
- **Bento Box Layout**: Modern grid-based card layout design
- **Responsive Design**: Fully responsive across all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Modern UI**: Clean, professional design with smooth animations

### 🌐 Multi-Language Features
- **Language Switcher**: Dropdown menu in header with flag icons
- **RTL Support**: Full right-to-left support for Arabic content
- **Consistent Navigation**: Seamless switching between language versions
- **Page Preservation**: Maintains current page when switching languages

### 📱 Pages Included
- **Home** (`index.html`) - Main portfolio dashboard
- **About** (`about.html`) - Personal information and skills
- **Services** (`services.html`) - Offered services
- **Portfolio** (`portfolio.html`) - Project showcase
- **Blog** (`blog.html`) - Blog posts listing
- **Article** (`article.html`) - Individual blog post
- **Contact** (`contact.html`) - Contact form and information

## 🚀 Language Switcher Implementation

### How It Works
The language switcher automatically detects the current language based on the URL path and provides a dropdown menu with all available languages. When a user selects a language, they are redirected to the same page in the chosen language version.

### Features
- **Flag Icons**: Visual representation with country flags
- **Language Names**: Displayed in native script
- **Current Selection**: Shows checkmark for active language
- **Responsive**: Adapts to mobile and desktop layouts
- **RTL Aware**: Proper positioning for Arabic version

### Technical Implementation
- **JavaScript**: Dynamic language detection and switching
- **CSS**: RTL-specific styling for Arabic version
- **HTML**: Semantic markup with proper language attributes
- **Accessibility**: ARIA labels and keyboard navigation

## 📁 Project Structure

```
one-ox/
├── x-english/           # English version (LTR)
│   ├── index.html
│   ├── about.html
│   ├── services.html
│   ├── portfolio.html
│   ├── blog.html
│   ├── article.html
│   ├── contact.html
│   └── assets/
│       ├── css/
│       ├── js/
│       │   └── language-switcher.js
│       ├── img/
│       └── php/
├── x-arabic/            # Arabic version (RTL)
│   ├── index.html
│   ├── about.html
│   ├── services.html
│   ├── portfolio.html
│   ├── blog.html
│   ├── article.html
│   ├── contact.html
│   ├── README.md
│   └── assets/
│       ├── css/
│       │   └── rtl.css
│       ├── js/
│       │   └── language-switcher.js
│       ├── img/
│       └── php/
└── x-french/            # French version (LTR)
    ├── index.html
    ├── about.html
    ├── services.html
    ├── portfolio.html
    ├── blog.html
    ├── article.html
    ├── contact.html
    └── assets/
        ├── css/
        ├── js/
        │   └── language-switcher.js
        ├── img/
        └── php/
```

## 🛠️ Technical Details

### RTL Implementation (Arabic Version)
- **HTML**: `dir="rtl"` and `lang="ar"` attributes
- **CSS**: Custom `rtl.css` with RTL-specific rules
- **Layout**: Reversed flexbox and grid directions
- **Mobile Menu**: Opens from right side
- **Text Alignment**: Right-aligned text and elements

### Language Switcher Files
- **`language-switcher.js`**: Core functionality for each language version
- **Path Detection**: Automatically detects current language from URL
- **Page Preservation**: Maintains current page when switching
- **Dropdown Management**: Handles open/close states and positioning

### Styling Framework
- **Tailwind CSS**: Utility-first CSS framework
- **Custom CSS**: Additional styling for specific components
- **Responsive**: Mobile-first responsive design
- **Dark Mode**: CSS variables for theme switching

## 🎯 Usage

### For Users
1. **Language Selection**: Click the language switcher in the header
2. **Navigation**: Browse through different language versions
3. **Page Continuity**: Switch languages while staying on the same page
4. **RTL Experience**: Enjoy proper right-to-left layout in Arabic version

### For Developers
1. **Content Translation**: Translate text content in each language folder
2. **RTL Customization**: Modify `rtl.css` for Arabic-specific styling
3. **Language Addition**: Add new languages by creating new folders and updating the switcher
4. **Customization**: Modify colors, fonts, and layout using Tailwind classes

## 🔧 Customization

### Adding New Languages
1. Create a new folder (e.g., `x-spanish/`)
2. Copy HTML files from existing language version
3. Translate content to target language
4. Update `language-switcher.js` with new language configuration
5. Add language to all existing switcher files

### RTL Support for New Languages
1. Add `dir="rtl"` to HTML elements
2. Create custom RTL CSS file
3. Update mobile menu positioning
4. Test layout and text direction

### Styling Customization
- **Colors**: Modify Tailwind color classes
- **Fonts**: Update font families in CSS
- **Layout**: Adjust grid and flexbox properties
- **Animations**: Customize transition effects

## 📱 Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **RTL Support**: Full RTL support in modern browsers
- **JavaScript**: ES6+ features with fallbacks

## 🎨 Design Features
- **Bento Grid**: Modern card-based layout
- **Smooth Animations**: CSS transitions and transforms
- **Interactive Elements**: Hover effects and micro-interactions
- **Professional Typography**: Clean, readable font choices
- **Consistent Spacing**: Systematic spacing using Tailwind utilities

## 📄 License
This template is designed for personal and commercial use. Please refer to the original template license for specific terms.

---

**BentoFolio** - Crafting beautiful, multi-language portfolio experiences with modern web technologies. 