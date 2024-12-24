import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import './paginate.css'; // or wherever your CSS file is located

export const Paginate = ({ pageCount, onPageChange,pageNumber}) => {
 console.log(pageNumber)
  // const pageNumber = useSelector((state)=>state.productData.currentPageNumber)
  // console.log(pageNumber)
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
      forcePage={pageNumber-1}
      style={{ width: '100px', margin: '0 auto', }}
    />
  );
};


