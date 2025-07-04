import React, { Component } from 'react';
import _ from 'lodash';

const Pagination = (props) => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);
  if(pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li key={page} style={{cursor: 'pointer'}} className={page === currentPage ? "page-item active" : "page-item"}>
            <span className='page-link' onClick={() => onPageChange(page)}>{page}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
 
export default Pagination;