import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function FreeBooks() {
  const [freeBooks, setFreeBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("https://lithub-3d2k.onrender.com/book");
        const free = res.data.filter((item) => item.isFree);
        setFreeBooks(free);
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, []);

  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Books Available</h1>
          <p>
            Start your reading journey with our collection of free books. Access premium literature without any cost. These classic and contemporary works are now available for all readers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {freeBooks.length > 0 ? (
            freeBooks.map((item) => <Cards item={item} key={item._id} />)
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500 dark:text-gray-400">
                Loading free books...
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-center mt-8 mb-10">
          <Link to="/course">
            <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 duration-300">
              Explore All Books
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default FreeBooks;
