import React, {useState} from 'react';
import styleCSS from './Paginator.module.css';
import classNames from "classnames";

let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
      pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / props.pageSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * props.pageSize + 1;
    let rightPortionNumber = portionNumber * props.pageSize;

  return <div className={styleCSS.paginator}>
      {portionNumber > 1 &&
      <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}
      {pages
        .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
          .map(p => {
        return <span
            className={classNames({
            [styleCSS.selectedPage]: props.currentPage === p
        }, styleCSS.pageNumber)}
                         key={p} onClick={(event) => {
                         props.onPageChanged(p); }}> {p} </span>
      })}
      {portionCount > portionNumber &&
        <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
  </div>
}

export default Paginator;