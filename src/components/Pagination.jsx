const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage
}) => {
  return (
    <div className="flex justify-center mt-10 gap-2">
      <button
        onClick={() => setCurrentPage(prev => prev - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
      >
        Prev
      </button>

      <span className="px-3 py-1">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => setCurrentPage(prev => prev + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;