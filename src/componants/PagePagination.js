import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

function PagePagination({ total, current, onPageChange }) {
  const pageItems = [];

  // Handle first page
  pageItems.push(
    <Pagination.First key="first" onClick={() => onPageChange(1)} disabled={current === 1} />
  );

  // Handle previous page
  pageItems.push(
    <Pagination.Prev key="prev" onClick={() => onPageChange(current - 1)} disabled={current === 1} />
  );

  // Handle middle page numbers (use a range around the current page)
  for (let number = Math.max(1, current - 2); number <= Math.min(total, current + 2); number++) {
    pageItems.push(
      <Pagination.Item key={number} active={number === current} onClick={() => onPageChange(number)}>
        {number}
      </Pagination.Item>
    );
  }

  // Handle next page
  pageItems.push(
    <Pagination.Next key="next" onClick={() => onPageChange(current + 1)} disabled={current === total} />
  );

  // Handle last page
  pageItems.push(
    <Pagination.Last key="last" onClick={() => onPageChange(total)} disabled={current === total} />
  );

  return <Pagination>{pageItems}</Pagination>;
}

export default PagePagination;
