import React from "react";

const Pagination = ({ postsPerpage, totalPosts }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerpage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div className="mx-auto">
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              {/* <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" /> */}
            </a>

            {pageNumbers.map((numberPage) => (
              <a
                href="#"
                aria-current="page"
                className="z-10 bg-green-50 border-green-500 text-green-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                key={numberPage}
              >
                {numberPage}
              </a>
            ))}

            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              {/* <ChevronRightIcon className="h-5 w-5" aria-hidden="true" /> */}
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Pagination;
