import React, { Fragment } from "react";
/**
 * @author
 * @function Pagination
 **/
const Pagination = ({ totalPages, currentPage, pageChange }) => {

    var current = currentPage,
        last = totalPages,
        delta = 2,
        left = current - delta,
        right = current + delta + 1,
        range = [],
        rangeWithDots = [],
        l;

    for (let i = 1; i <= last; i++) {
        if (i == 1 || i == last || i >= left && i < right) {
            range.push(i);
        }
    }


    for (let i of range) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1);
            } else if (i - l !== 1) {
                rangeWithDots.push('...');
            }
        }
        rangeWithDots.push(i);
        l = i;
    }

    return (
        <ul>
            {
                rangeWithDots.map((r, index) => (
                    <li key={`${index}`} onClick={() => pageChange(r)}>{r}</li>
                ))
            }
        </ul>
    );


};
export default Pagination;