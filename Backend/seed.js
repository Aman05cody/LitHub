import mongoose from "mongoose";
import dotenv from "dotenv";
import Book from "./model/book.model.js";

dotenv.config();

const URI = process.env.MongoDBURI;

// Sample book data - 7 FREE + 8 PAID = 15 TOTAL
const booksData = [
  // FREE BOOKS (7)
  {
    name: "To Kill a Mockingbird",
    price: 0,
    category: "Fiction",
    image: "https://covers.openlibrary.org/b/id/7725677-M.jpg",
    title: "Harper Lee - Classic American Literature",
    isFree: true,
  },
  {
    name: "The Great Gatsby",
    price: 0,
    category: "Fiction",
    image: "https://covers.openlibrary.org/b/id/7725700-M.jpg",
    title: "F. Scott Fitzgerald - Jazz Age Romance",
    isFree: true,
  },
  {
    name: "Pride and Prejudice",
    price: 0,
    category: "Romance",
    image: "https://covers.openlibrary.org/b/id/7725619-M.jpg",
    title: "Jane Austen - Classic Romance",
    isFree: true,
  },
  {
    name: "The Catcher in the Rye",
    price: 0,
    category: "Fiction",
    image: "https://covers.openlibrary.org/b/id/7725647-M.jpg",
    title: "J.D. Salinger - Coming of Age",
    isFree: true,
  },
  {
    name: "Alice's Adventures in Wonderland",
    price: 0,
    category: "Fantasy",
    image: "https://covers.openlibrary.org/b/id/7725640-M.jpg",
    title: "Lewis Carroll - Whimsical Fantasy",
    isFree: true,
  },
  {
    name: "The Silent Patient",
    price: 0,
    category: "Thriller",
    image: "https://covers.openlibrary.org/b/id/8629439-M.jpg",
    title: "Alex Michaelides - Psychological Thriller",
    isFree: true,
  },
  {
    name: "The Midnight Library",
    price: 0,
    category: "Fiction",
    image: "https://covers.openlibrary.org/b/id/10209254-M.jpg",
    title: "Matt Haig - Life Philosophy",
    isFree: true,
  },

  // PAID BOOKS (8)
  {
    name: "1984",
    price: 349,
    category: "Fiction",
    image: "https://covers.openlibrary.org/b/id/7725761-M.jpg",
    title: "George Orwell - Dystopian Novel",
    isFree: false,
  },
  {
    name: "Sapiens",
    price: 499,
    category: "Non-Fiction",
    image: "https://covers.openlibrary.org/b/id/8420819-M.jpg",
    title: "Yuval Noah Harari - Human History",
    isFree: false,
  },
  {
    name: "Atomic Habits",
    price: 449,
    category: "Self-Help",
    image: "https://covers.openlibrary.org/b/id/9261416-M.jpg",
    title: "James Clear - Build Better Habits",
    isFree: false,
  },
  {
    name: "The Hobbit",
    price: 329,
    category: "Fantasy",
    image: "https://covers.openlibrary.org/b/id/7725782-M.jpg",
    title: "J.R.R. Tolkien - Fantasy Adventure",
    isFree: false,
  },
  {
    name: "Dune",
    price: 449,
    category: "Science Fiction",
    image: "https://covers.openlibrary.org/b/id/8266932-M.jpg",
    title: "Frank Herbert - Epic Sci-Fi",
    isFree: false,
  },
  {
    name: "Educated",
    price: 399,
    category: "Memoir",
    image: "https://covers.openlibrary.org/b/id/8268556-M.jpg",
    title: "Tara Westover - Education & Freedom",
    isFree: false,
  },
  {
    name: "Thinking, Fast and Slow",
    price: 499,
    category: "Psychology",
    image: "https://covers.openlibrary.org/b/id/8240374-M.jpg",
    title: "Daniel Kahneman - Decision Making",
    isFree: false,
  },
  {
    name: "The 7 Habits of Highly Effective People",
    price: 429,
    category: "Self-Help",
    image: "https://covers.openlibrary.org/b/id/7863637-M.jpg",
    title: "Stephen Covey - Personal Growth",
    isFree: false,
  },
];

async function seedDatabase() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Clear existing books (optional - comment out if you want to keep existing data)
    await Book.deleteMany({});
    console.log("Cleared existing books");

    // Insert new books
    const result = await Book.insertMany(booksData);
    console.log(`✅ Successfully added ${result.length} books to the database`);

    process.exit(0);
  } catch (error) {
    console.log("Error: ", error);
    process.exit(1);
  }
}

seedDatabase();
