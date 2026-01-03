import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";

function Course() {
  const [books, setBooks] = useState([]);
  const [courses, setCourses] = useState([]);
  const [activeTab, setActiveTab] = useState("books");
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const booksRes = await axios.get("https://lithub-3d2k.onrender.com/book");
        const coursesRes = await axios.get("https://lithub-3d2k.onrender.com/course");
        setBooks(booksRes.data);
        setCourses(coursesRes.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const filteredBooks = books.filter((book) =>
    (book.name && book.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (book.title && book.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (book.author && book.author.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (book.category && book.category.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-24">
        <div className="mb-10 items-center justify-center text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {searchQuery
              ? `Search Results for "${searchQuery}"`
              : "Welcome to Our Learning Hub! 📚"}
          </h1>
          <p className="mt-6 text-slate-600 dark:text-slate-400 text-lg max-w-3xl mx-auto">
            {searchQuery
              ? `Found ${filteredBooks.length} book(s) matching your search`
              : "Explore our extensive collection of carefully curated learning paths and books. Whether you're seeking structured learning journeys or individual titles, we have everything to fuel your passion for reading and knowledge."}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("books")}
            className={`px-6 py-2 rounded-lg font-semibold transition duration-300 ${
              activeTab === "books"
                ? "bg-pink-500 text-white"
                : "bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-600"
            }`}
          >
            📚 All Books ({filteredBooks.length})
          </button>
          <button
            onClick={() => setActiveTab("courses")}
            className={`px-6 py-2 rounded-lg font-semibold transition duration-300 ${
              activeTab === "courses"
                ? "bg-pink-500 text-white"
                : "bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-600"
            }`}
          >
            📖 Learning Paths ({courses.length})
          </button>
        </div>

        {/* Learning Paths Tab */}
        {activeTab === "courses" && (
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Expert-Curated Learning Paths
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {courses.length > 0 ? (
                courses.map((course) => (
                  <div
                    key={course._id}
                    className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 dark:text-white dark:border"
                  >
                    <figure className="h-40 overflow-hidden bg-gradient-to-br from-pink-400 to-blue-400">
                      <img
                        src={course.image}
                        alt={course.name}
                        className="w-full h-full object-cover"
                      />
                    </figure>
                    <div className="p-5">
                      <h3 className="text-lg font-bold mb-2">{course.name}</h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-3 line-clamp-2">
                        {course.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="badge badge-xs badge-primary">
                          {course.category}
                        </span>
                        <span className="badge badge-xs badge-outline">
                          {course.level}
                        </span>
                        {course.isFree && (
                          <span className="badge badge-xs badge-success">
                            Free
                          </span>
                        )}
                      </div>

                      <div className="flex justify-between text-xs mb-3">
                        <span className="text-slate-600 dark:text-slate-400">
                          ⏱️ {course.duration}
                        </span>
                        <span className="text-yellow-500 font-semibold">
                          ★ {course.rating}
                        </span>
                      </div>

                      <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded transition duration-300 text-sm">
                        Explore
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-10">
                  <p className="text-gray-500 dark:text-gray-400">
                    Loading learning paths...
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Books Tab */}
        {activeTab === "books" && (
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              {searchQuery ? "Search Results" : "Browse All Books"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {filteredBooks.length > 0 ? (
                filteredBooks.map((item) => (
                  <Cards key={item._id} item={item} />
                ))
              ) : (
                <div className="col-span-full text-center py-10">
                  <p className="text-gray-500 dark:text-gray-400">
                    {searchQuery ? `No books found matching "${searchQuery}"` : "Loading books..."}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Back Button */}
        <div className="flex justify-center mb-12">
          <Link to="/">
            <button className="bg-slate-300 dark:bg-slate-700 text-slate-900 dark:text-white px-6 py-2 rounded-lg hover:bg-slate-400 dark:hover:bg-slate-600 duration-300 font-semibold">
              ← Back to Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Course;
