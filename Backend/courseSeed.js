import mongoose from "mongoose";
import dotenv from "dotenv";
import Course from "./model/course.model.js";

dotenv.config();

const URI = process.env.MongoDBURI;

// Themed learning paths with curated collections
const coursesData = [
  {
    name: "Classic Literature Essentials",
    description: "Explore timeless masterpieces that shaped world literature. From Victorian romance to adventure classics, dive into stories that have captivated generations.",
    category: "Classics",
    instructor: "Literary Experts",
    duration: "8 weeks",
    level: "Beginner",
    isFree: true,
    image: "https://covers.openlibrary.org/b/id/7725619-M.jpg",
    featured: true,
    lessons: 12,
    rating: 4.8,
    bookIds: ["Pride and Prejudice", "The Great Gatsby", "Moby Dick", "Don Quixote"],
  },
  {
    name: "Gothic & Horror Masterpieces",
    description: "Delve into dark, mysterious worlds with Gothic literature's most influential works. Experience psychological terror and supernatural tales that defined a genre.",
    category: "Horror & Mystery",
    instructor: "Gothic Literature Specialist",
    duration: "6 weeks",
    level: "Intermediate",
    isFree: true,
    image: "https://covers.openlibrary.org/b/id/7725759-M.jpg",
    featured: true,
    lessons: 10,
    rating: 4.6,
    bookIds: ["Dracula", "Frankenstein", "Wuthering Heights", "The Picture of Dorian Gray"],
  },
  {
    name: "Romantic Tales & Love Stories",
    description: "Fall in love with the greatest romance novels ever written. Discover passionate stories of unrequited love, true devotion, and heartwarming relationships.",
    category: "Romance",
    instructor: "Romance Fiction Curator",
    duration: "5 weeks",
    level: "Beginner",
    isFree: true,
    image: "https://covers.openlibrary.org/b/id/7725748-M.jpg",
    featured: true,
    lessons: 8,
    rating: 4.9,
    bookIds: ["Pride and Prejudice", "Jane Eyre", "Emma", "Wuthering Heights"],
  },
  {
    name: "Adventure & Mystery Classics",
    description: "Embark on thrilling journeys and solve intriguing mysteries with the greatest adventure novels. Perfect for readers who crave excitement and suspense.",
    category: "Adventure",
    instructor: "Adventure Literature Guide",
    duration: "7 weeks",
    level: "Intermediate",
    isFree: true,
    image: "https://covers.openlibrary.org/b/id/7725717-M.jpg",
    featured: true,
    lessons: 11,
    rating: 4.7,
    bookIds: ["The Count of Monte Cristo", "The Adventures of Sherlock Holmes", "Don Quixote", "Moby Dick"],
  },
  {
    name: "Epic & Fantasy Journeys",
    description: "Discover imaginative worlds and fantastical adventures. From whimsical wonderlands to epic quests, explore stories that transport you to extraordinary realms.",
    category: "Fantasy",
    instructor: "Fantasy World Builder",
    duration: "6 weeks",
    level: "Beginner",
    isFree: true,
    image: "https://covers.openlibrary.org/b/id/7725640-M.jpg",
    featured: true,
    lessons: 9,
    rating: 4.8,
    bookIds: ["Alice's Adventures in Wonderland", "The Hobbit", "Dune"],
  },
  {
    name: "Historical Fiction Masterclass",
    description: "Travel through time with epic historical narratives. Experience pivotal moments in history through compelling storytelling and richly detailed worlds.",
    category: "Historical Fiction",
    instructor: "History & Literature Expert",
    duration: "8 weeks",
    level: "Intermediate",
    isFree: true,
    image: "https://covers.openlibrary.org/b/id/7725766-M.jpg",
    featured: true,
    lessons: 13,
    rating: 4.9,
    bookIds: ["Les Misérables", "The Count of Monte Cristo", "A Tale of Two Cities"],
  },
  {
    name: "Modern Classics Collection",
    description: "Discover contemporary masterpieces that define modern literature. From dystopian futures to coming-of-age stories, explore books reshaping the literary landscape.",
    category: "Modern Classics",
    instructor: "Contemporary Literature Scholar",
    duration: "6 weeks",
    level: "Intermediate",
    isFree: false,
    image: "https://covers.openlibrary.org/b/id/7725761-M.jpg",
    featured: true,
    lessons: 10,
    rating: 4.7,
    bookIds: ["1984", "The Catcher in the Rye", "The Midnight Library"],
  },
  {
    name: "Personal Growth Through Reading",
    description: "Transform your life with powerful non-fiction and self-help books. Learn proven strategies, philosophical insights, and practical wisdom from expert authors.",
    category: "Self-Help & Growth",
    instructor: "Personal Development Coach",
    duration: "5 weeks",
    level: "Beginner",
    isFree: false,
    image: "https://covers.openlibrary.org/b/id/9261416-M.jpg",
    featured: true,
    lessons: 10,
    rating: 4.8,
    bookIds: ["Atomic Habits", "Sapiens", "Thinking, Fast and Slow"],
  },
];

async function seedCourses() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Optional: Clear existing courses
    // await Course.deleteMany({});
    // console.log("Cleared existing courses");

    // Insert new courses
    const result = await Course.insertMany(coursesData);
    console.log(`✅ Successfully added ${result.length} learning paths to the database`);

    process.exit(0);
  } catch (error) {
    console.log("Error: ", error);
    process.exit(1);
  }
}

seedCourses();
