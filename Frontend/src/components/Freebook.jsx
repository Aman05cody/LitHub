import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Freebook() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const res = await axios.get("http://localhost:4002/course");
        setCourses(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCourses();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-12">
        <div className="mb-10">
          <h1 className="font-bold text-3xl pb-2 text-slate-900 dark:text-white">
            Learning Paths
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Structured learning journeys curated by experts. Each path combines multiple books to take you from beginner to expert in your area of interest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.length > 0 ? (
            courses.map((course) => (
              <div
                key={course._id}
                className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 dark:text-white dark:border"
              >
                <figure className="h-48 overflow-hidden bg-gradient-to-br from-pink-400 to-blue-400">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">{course.name}</h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    {course.description.substring(0, 100)}...
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="badge badge-sm badge-primary">
                      {course.category}
                    </span>
                    <span className="badge badge-sm badge-outline">
                      {course.level}
                    </span>
                    {course.isFree && (
                      <span className="badge badge-sm badge-success">Free</span>
                    )}
                  </div>

                  <div className="flex justify-between items-center text-sm mb-4">
                    <div>
                      <span className="text-slate-600 dark:text-slate-400">
                        ⏱️ {course.duration}
                      </span>
                    </div>
                    <div>
                      <span className="text-yellow-500 font-semibold">
                        ★ {course.rating}
                      </span>
                    </div>
                  </div>

                  <div className="text-xs text-slate-600 dark:text-slate-400 mb-4">
                    👨‍🏫 {course.instructor} • 📚 {course.lessons} lessons
                  </div>

                  <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg transition duration-300">
                    Explore Path
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

        <div className="flex justify-center mt-12">
          <Link to="/course">
            <button className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition duration-300 font-semibold text-lg">
              Browse All Courses & Books
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Freebook;
