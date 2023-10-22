import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendar } from 'react-icons/fa';
import "./returnRequests.css";
import img45 from '../../../assets/45.jpg'


const ReturnRequests= () =>{
    const [keyword, setKeyword] = useState('');
    const [dateFrom, setDateFrom] = useState(null);
    const [dateTo, setDateTo] = useState(null);
  
    const handleKeywordChange = (event) => {
      setKeyword(event.target.value);
    };
    
    const handleDateFromChange = (selectedDate) => {
      setDateFrom(selectedDate);
    };
  
    const handleDateToChange = (selectedDate) => {
      setDateTo(selectedDate);
    };

    const handleSearch = () => {
    
      console.log('Searching...');
      console.log('Keyword:', keyword);
      console.log('Date From:', dateFrom);
      console.log('Date To:', dateTo);
    };
    const handleClear = () => {
      setKeyword('');
      setDateFrom(null);
      setDateTo(null);
    };



return (
    
  <div className="content-wrapper">
    <div className="content-header row">
      <div className="col"> 
        <h2 className="content-header-title">Return Requests</h2>
      </div>
      
    </div>
    <div className="content-body">
    
      {/* <div className="order-cards"> */}
        <div className="returnRequests-search-content">
          <form 
            name="returnRequestsSearch"
            method="post" 
            id="frm_id_returnRequestsSearch" 
            onsubmit="searchReturnRequests(this)" 
            className="form" 
          >
            <div className="row">
              <div className="section">
                
                  <input 
                    placeholder="Keyword"
                    data-field-caption="Keyword"
                    data-fatreq={`{"required":false}`}
                    type="text"
                    name="keyword"
                    value={keyword}
                    onChange={handleKeywordChange}
                  />
                
              </div>
              <div className="section">
                
                  <select className="dropdown-select" data-field-caption="" data-fatreq="{&quot;required&quot;:false}" name="status" menuPlacement="bottom">
                    <option value="">Status</option>
                    <option value="0">Pending</option>
                    <option value="2">Refunded</option>
                    <option value="4">Cancelled</option>
                  </select>
                
              </div>

              <div className="section">
                
                  <div className="date-picker-container">
                    <DatePicker 
                      placeholderText="Date From"
                      selected={dateFrom} 
                      onChange={handleDateFromChange}
                      dateFormat="yyyy-MM-dd"
                      isClearable
                      
                    />
                    <span className="calendar-icon">
                        <FaCalendar />
                    </span>
                    
                  </div>
                
              </div>
              <div className="section">
                
                  <div className="date-picker-container">
                    <DatePicker 
                      placeholderText="Date To"
                      selected={dateTo} 
                      onChange={handleDateToChange}
                      dateFormat="yyyy-MM-dd"
                      isClearable
                      
                    />
                    <span className="calendar-icon">
                        <FaCalendar />
                    </span>
                    
                  </div>
                
              </div>
            </div> 
            <div className="row">
              {/* <button type="search" className="search-button"> */}
              <button className="search-button" onClick={handleSearch}>
                  Search
              </button>
              {/* <button type="clear" className="clear-button"> */}
              <button className="clear-button" onClick={handleClear}>
                  clear
              </button>
            </div>
          
          </form>                                  
        </div>
        <div className="returnRequests-Listing">
          <div className="row">
            <table class="table-scroll" style={{position:'relative' , overflow: 'auto'}}>
              <thead>
                <tr class="">
                 <th>ID/invoice Number </th>
                 <th>Date</th>
                 <th>Products</th>
                 <th>Return Qty</th>
                 <th>Status</th>
                 <th></th>
                </tr>
              </thead>
            </table>
            <div className="block-empty-text-center">
                <img loading="lazy" className="block_img" src={img45} 
                alt="No Record Found" width="80"/>
                <h5>No Record Found</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  
   );
};
 
 export default ReturnRequests;