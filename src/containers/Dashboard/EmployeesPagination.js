import React from 'react';
import styled, { css } from 'styled-components';

import { MAX_PAGES } from '../../shared/utils';

const Pagination = styled.div`
  margin: 15px auto;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;

const EmployeesPagination = ({ totalPages, page, setCurrentPage }) => {
  const renderAdditionalPagination = (output, totalPages, page) => {
    if (totalPages > MAX_PAGES) {
      let between;

      if (page > 0) {
        between = page > 3 && totalPages > MAX_PAGES + 1 ? <PaginationItem key="pagination_empty_0" current={true}>...</PaginationItem> : null;
        output.unshift(between);
        output.unshift(
          <EmployeesPaginationLink
            key={'pagination_0'}
            pageNum={0}
            page={page}
            onClick={setCurrentPage}
          />
        );
      }

      const diff = totalPages - page;
      if (page < totalPages - 3) {
        between = page < totalPages - 4 && totalPages > 6 ? <PaginationItem key="pagination_empty_1" current={true}>...</PaginationItem> : null;

        if (diff > MAX_PAGES || totalPages > 6) {
          output.push(between);
          output.push(
            <EmployeesPaginationLink
              key={`pagination_${totalPages - 1}`}
              pageNum={totalPages - 1}
              page={page}
              onClick={setCurrentPage}
            />
          );
        }
      }
    }
  }

  if (totalPages > 1) {
    let output = [];

    let visiblePages, lowerLimit, upperLimit;

    if (totalPages >= MAX_PAGES) {
      visiblePages = MAX_PAGES;
      lowerLimit = upperLimit = Math.min(page, totalPages - 1);

      for (let b = 1; b < visiblePages && b < totalPages;) {
        if (lowerLimit > 1) {
          lowerLimit--;
          b++;
        }

        if (b < visiblePages && upperLimit < totalPages - 1) {
          upperLimit++;
          b++;
        }

        if (b === totalPages - 1 & totalPages <= 5) {
          if (upperLimit !== totalPages - 1) {
            upperLimit++;
          }

          if (upperLimit - lowerLimit < 4) {
            lowerLimit--;
          }

          break;
        }
      }
    } else {
      visiblePages = totalPages;
      lowerLimit = 0;
      upperLimit = totalPages - 1;
    }

    for (let i = lowerLimit; i <= upperLimit; i++) {
      output.push(
        <EmployeesPaginationLink
          key={`pagination_${i}`}
          pageNum={i}
          page={page}
          onClick={setCurrentPage}
        />
      );
    }

    renderAdditionalPagination(output, totalPages, page);

    return <Pagination>{output}</Pagination>;
  }

  return null;
};

const PaginationItem = styled.div`
  display: flex;
  flex-wrap: row wrap;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin: 0 8px;
  font-size: 14px;
  height: 34px;
  width: 34px;
  border: 1px solid #999;
  color: #666;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.25s;
  ${props => {
    if (props.current) {
      return css`
        border: none;
        cursor: not-allowed;
        margin: 0;
      `;
    }

    return css`
      &:hover {
        background-color: #999;
        color: #fff;
      }
    `;
  }}
`;

const EmployeesPaginationLink = ({ pageNum, page, onClick }) => {
  return (
    <PaginationItem onClick={() => onClick(pageNum)} current={pageNum === page}>
      {pageNum + 1}
    </PaginationItem>
  );
};

export default EmployeesPagination;
