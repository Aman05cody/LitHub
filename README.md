# 📚 LitHub - Modern Learning Platform

<div align="center">

![LitHub Logo](Frontend/public/favicon.svg)

A modern, elegant full-stack web application for discovering, learning, and managing books and courses. Built with cutting-edge technology for an immersive reading and learning experience.

[View Demo](#) • [Report Bug](https://github.com/Aman05cody/LitHub/issues) • [Request Feature](https://github.com/Aman05cody/LitHub/issues)

</div>

---

## 🌟 Features

### 📖 **Comprehensive Book Library**
- Browse thousands of books across multiple categories
- Free and premium book collections
- Advanced search functionality by title, author, and category
- Beautiful book card displays with ratings and details

### 🎓 **Structured Learning Paths**
- Expert-curated learning courses
- Duration and difficulty levels for each course
- Free courses clearly marked
- Interactive course exploration

### 👤 **User Authentication**
- Secure user registration and login
- JWT-based authentication
- Password encryption with bcryptjs
- Persistent user sessions

### 🌙 **Dark Mode Support**
- Seamless light and dark theme switching
- System preference detection
- Persistent theme selection
- Beautifully styled components for both themes

### 📱 **Responsive Design**
- Mobile-first approach
- Works flawlessly on all devices
- Optimized touch interactions
- Adaptive layouts for tablets and desktops

### 🔍 **Smart Search**
- Real-time search across books
- Filter by title, author, and category
- Search result pagination
- Instant feedback with result counts

---

## 🛠️ Tech Stack

### **Frontend**
- **React 18.2** - Modern UI library
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **DaisyUI** - Premium component library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **React Hook Form** - Efficient form handling
- **React Hot Toast** - Beautiful notifications

### **Backend**
- **Node.js** - JavaScript runtime
- **Express.js** - Minimalist web framework
- **MongoDB** - NoSQL database
- **Mongoose** - Object modeling
- **CORS** - Cross-origin resource sharing
- **Bcryptjs** - Password hashing
- **Nodemailer** - Email service
- **Dotenv** - Environment management

---

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Git

### Clone the Repository
```bash
git clone https://github.com/Aman05cody/LitHub.git
cd LitHub
```

### Backend Setup
```bash
cd Backend

# Install dependencies
npm install

# Create .env file
echo 'MongoDBURI=mongodb://localhost:27017/bookStore' > .env
echo 'PORT=4002' >> .env

# Run the server
npm start
```

The backend will start at `http://localhost:4002`

### Frontend Setup
```bash
cd Frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will be available at `http://localhost:5173`

---

## 🚀 Usage

### Home Page
- Welcome banner with call-to-action
- Featured free books section
- Navigation to courses and full library

### Browse Books
- Visit `/course` to see all available books
- Use search bar to find specific titles
- Click on book cards for more details
- Filter by category and author

### Browse Courses
- Access learning paths in `/course` tab
- View course duration, level, and rating
- Check if courses are free or premium

### User Account
- Click "Login" to access your account
- New users can create account via "Signup"
- Logout option available when logged in

### Search Feature
- Type in the search bar (navbar or home)
- Results update in real-time
- Click on results to view full details

---

## 📁 Project Structure

```
LitHub/
├── Backend/
│   ├── controller/          # Business logic
│   │   ├── book.controller.js
│   │   ├── course.controller.js
│   │   └── user.controller.js
│   ├── model/              # Database schemas
│   │   ├── book.model.js
│   │   ├── course.model.js
│   │   └── user.model.js
│   ├── route/              # API endpoints
│   │   ├── book.route.js
│   │   ├── course.route.js
│   │   ├── user.route.js
│   │   └── contact.route.js
│   ├── index.js            # Server entry point
│   ├── seed.js             # Database seeding
│   └── package.json        # Dependencies
│
├── Frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Banner.jsx
│   │   │   ├── Cards.jsx
│   │   │   ├── Course.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── LitHubLogo.jsx
│   │   ├── context/        # React Context
│   │   │   └── AuthProvider.jsx
│   │   ├── pages/          # Page components
│   │   ├── App.jsx         # Main app component
│   │   └── index.css       # Global styles
│   ├── public/             # Static assets
│   │   ├── favicon.svg
│   │   └── Banner.png
│   ├── index.html          # HTML template
│   ├── vite.config.js      # Vite configuration
│   ├── tailwind.config.js  # Tailwind configuration
│   └── package.json        # Dependencies
│
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

---

## 🔌 API Endpoints

### Books
- `GET /book` - Get all books
- `GET /book/:id` - Get book by ID
- `POST /book` - Create new book
- `PUT /book/:id` - Update book
- `DELETE /book/:id` - Delete book

### Courses
- `GET /course` - Get all courses
- `GET /course/:id` - Get course by ID
- `POST /course` - Create new course
- `PUT /course/:id` - Update course
- `DELETE /course/:id` - Delete course

### Users
- `POST /user/signup` - Register new user
- `POST /user/login` - Login user
- `GET /user/:id` - Get user profile

### Contact
- `POST /contact` - Submit contact form

---

## 🎨 Features Highlights

### Modern Design
- Clean and intuitive UI
- Consistent color scheme (Pink & Blue)
- Smooth animations and transitions
- Professional typography

### Performance
- Optimized bundle size with Vite
- Lazy loading for images
- Efficient database queries
- Fast API response times

### Security
- Password encryption
- CORS protection
- Input validation
- Secure JWT implementation

### User Experience
- Instant feedback with toast notifications
- Loading states for async operations
- Responsive error handling
- Intuitive navigation

---

## 📸 Screenshots

### Light Theme
- Clean white interface with dark text
- Perfect for daytime reading

### Dark Theme
- Eye-friendly dark background
- Ideal for night browsing

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 💬 Support & Contact

- **GitHub Issues**: [Report bugs or request features](https://github.com/Aman05cody/LitHub/issues)
- **Email**: info@lithub.com
- **GitHub**: [@Aman05cody](https://github.com/Aman05cody)

---

## 🎯 Future Enhancements

- [ ] Book reviews and ratings system
- [ ] Reading progress tracking
- [ ] Wishlist functionality
- [ ] Payment integration for premium courses
- [ ] Social sharing features
- [ ] Advanced analytics dashboard
- [ ] Mobile app (React Native)
- [ ] AI-powered book recommendations

---

## 🙏 Acknowledgments

- [React Documentation](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [DaisyUI](https://daisyui.com)
- [MongoDB](https://www.mongodb.com)
- [Express.js](https://expressjs.com)

---

<div align="center">

**Made with ❤️ by [Aman](https://github.com/Aman05cody)**

⭐ If you find this project helpful, please consider giving it a star!

</div>
