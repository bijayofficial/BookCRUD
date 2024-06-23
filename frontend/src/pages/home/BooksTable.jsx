import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-separate border-spacing-2">
        <thead>
          <tr>
            <th className="border border-slate-600 rounded-md p-2">No</th>
            <th className="border border-slate-600 rounded-md p-2">Title</th>
            <th className="border border-slate-600 rounded-md p-2 max-md:hidden">Author</th>
            <th className="border border-slate-600 rounded-md p-2 max-md:hidden">Publish Year</th>
            <th className="border border-slate-600 rounded-md p-2">Operations</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book.id} className="h-12">
              <td className="border border-slate-700 rounded-md text-center p-2">{index + 1}</td>
              <td className="border border-slate-700 rounded-md text-center p-2">{book.title}</td>
              {book.author && (
                <td className="border border-slate-700 rounded-md text-center p-2 max-md:hidden">{book.author}</td>
              )}
              {book.publishYear && (
                <td className="border border-slate-700 rounded-md text-center p-2 max-md:hidden">{book.publishYear}</td>
              )}
              <td className="border border-slate-700 rounded-md text-center p-2 flex justify-evenly">
                <Link
                  to={`/books/details/${book._id}`}
                  className="text-green-800 hover:text-green-600"
                  aria-label="View Details"
                >
                  <BsInfoCircle className="text-2xl" />
                </Link>
                <Link
                  to={`/books/edit/${book._id}`}
                  className="text-yellow-600 hover:text-yellow-400 ml-2"
                  aria-label="Edit Book"
                >
                  <AiOutlineEdit className="text-2xl" />
                </Link>
                <Link
                  to={`/books/delete/${book._id}`}
                  className="text-red-600 hover:text-red-400 ml-2"
                  aria-label="Delete Book"
                >
                  <MdOutlineDelete className="text-2xl" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
