import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BooksCard = ({ books }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {books.map((book) => (
        <div key={book.id} className="bg-gray-800 rounded-lg py-10 px-3 overflow-hidden shadow-md relative">
          <div className="p-4">
            <h2 className="text-lg font-medium mb-2 text-white">{book.title}</h2>
            <p className="text-gray-400 mb-2">Author: {book.author}</p>
            <p className="text-gray-400 mb-4">Publish Year: {book.publishYear}</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent p-2">
            <div className="flex justify-evenly py-3">
              <Link to={`/books/details/${book._id}`} aria-label="View Details">
                <BsInfoCircle className="text-2xl text-green-800 hover:text-green-600 cursor-pointer" />
              </Link>
              <Link to={`/books/edit/${book._id}`} aria-label="Edit Book">
                <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-yellow-400 cursor-pointer" />
              </Link>
              <Link to={`/books/delete/${book._id}`} aria-label="Delete Book">
                <MdOutlineDelete className="text-2xl text-red-600 hover:text-red-400 cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BooksCard;
