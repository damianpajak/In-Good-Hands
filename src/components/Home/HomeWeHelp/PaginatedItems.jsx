import { useState } from "react";
import ReactPaginate from "react-paginate";

export const PaginatedItems = ({ itemsPerPage, items }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (e) => {
    setCurrentPage(e.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = items.slice(offset, offset + itemsPerPage);

  return (
    <div className="home-WeHelpDetails__elements">
      <ul>
        {currentItems.map((item, idx) => (
          <li className="home-WeHelpDetails__element" key={idx}>
            {item}
          </li>
        ))}
      </ul>
      <ReactPaginate
        pageCount={Math.ceil(items.length / itemsPerPage)}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        activeClassName="active"
        previousClassName="prev"
        nextClassName="next"
        disabledClassName="disabled"
      />
    </div>
  );
};
