import ReactPaginate from 'react-paginate';
import './paginate.css'; // or wherever your CSS file is located

export const Paginate = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      onPageChange={onPageChange}
      containerClassName="pagination"
      activeClassName="selected"
      previousClassName="previous"
      nextClassName="next"
      disabledClassName="disabled"
    />
  );
};


