import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BooksCard from "./home/BooksCard";
import BooksTable from "./home/BooksTable";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to fetch books. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4 my-4">
        <button
          className={`px-4 py-1 rounded-lg ${showType === "table" ? "bg-sky-900" : "bg-sky-600"} hover:bg-sky-900 text-white`}
          onClick={() => setShowType("table")}
        >
          TABLE
        </button>
        <button
          className={`px-4 py-1 rounded-lg ${showType === "card" ? "bg-sky-900" : "bg-sky-600"} hover:bg-sky-900 text-white`}
          onClick={() => setShowType("card")}
        >
          CARD
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-600 text-4xl hover:text-sky-900" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : error ? (
        <div className="text-red-600">{error}</div>
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
