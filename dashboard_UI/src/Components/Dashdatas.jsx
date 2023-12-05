import React, { useState } from 'react';
import './Dashdatas.css';
import pic from '../Assets/profilepic.jpg';
import Graph from './Graph';
import CountGraph from './CountGraph';
import TableData from './TableData';
import Profile from './Profile';
import right from '../Assets/next.png'
import left from '../Assets/left.png'

const Dashdatas = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Set the number of items per page

  // Sample data array, replace it with your actual data
  const tableDataArray = [
    // Your data items here...
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableDataArray.slice(indexOfFirstItem, indexOfLastItem);

  const totalItems = tableDataArray.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className='dashdata'>
      <div className='topside'>
        <span>Good Morning ! 🌞</span>

        <div className="profile">
          <div className="username">
            <span>John Doe</span>
            <span className='span1'>jhon@doe.com</span>
          </div>
          <img src={pic} alt="" srcset="" />
        </div>
      </div>

      <div className='middleside'>
        <Graph />
        <CountGraph />
      </div>

      <div className='lastside'>
        <div className='Pagination_div'>
        <TableData data={currentItems} />
        <div className='pagination-controls'>
              <ul class="page">
                  <li class="page__btn"><img src={left} alt="" srcset="" /> </li>
                  <li class="page__numbers"> 1</li>
                  <li class="page__numbers active">2</li>
                  <li class="page__numbers">3</li>
                  <li class="page__numbers">4</li>
                  <li class="page__numbers">5</li>
                  <li class="page__numbers">6</li>
                  <li class="page__dots">...</li>
                  <li class="page__numbers"> 10</li>
                  <li class="page__btn"><img src={right} alt="" srcset="" /></li>
                </ul>
        </div>
          </div>
        <Profile />
      </div>
    </div>
  );
};

export default Dashdatas;
