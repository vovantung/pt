import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, pageCurent }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => {
           // alert(paginate);
if(pageCurent.toString() == number.toString()){
    return(
         <li key={number} className='page-item active'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
    )

}else{
    return(
        <li key={number} className='page-item'>
           <a onClick={() => paginate(number)} href='!#' className='page-link'>
             {number}
           </a>
         </li>
   )

}
         

})}
      </ul>
    </nav>
  );
};

export default Pagination;
