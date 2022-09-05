import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Adminfooter from '../Adminfooter/adminfooter';
import Adminhomepage from '../Adminhomepage/adminhome';
import './Holidays.css';
import { getAllCalendarsApi } from '../../helpers/HolidayApis';
// import logo from './logo.jpg';
function Holidays() {
  const navigate = useNavigate();

  const [calendarList, setCalendarList] = useState([]);
  useEffect(() => {
    getAllCalendarsApi(0, 3).then((res) => {
      setCalendarList(res.data);
    });
  }, []);

  const handleClick = () => {
    navigate('/button1');
  };
  return (
    <div className="App container">
      <Routes>
        <Route
          path="*"
          element={
            <div>
              <Adminhomepage />

              <div className="col-md-12 mb-4 pb-2">
                <form className="bu form-outline">
                  <label id="form-label" htmlFor="upload">
                    Bulk upload
                    <input
                      type="file"
                      // id="Bulk_upload"
                      className="btn btn-sm form-control form-control-sm"
                      multiple
                      required
                    />
                  </label>
                  {/* <span className="heading">Bulk Upload</span> */}

                  <button className="btn btn-dark btn-sm">Submit</button>
                </form>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    {/* <th scope="col">Number</th> */}
                    <th scope="col">Calendar Name</th>
                    <th scope="col">Admin</th>
                    <th scope="col">No. of Holidays</th>
                  </tr>
                </thead>
                {calendarList === []
                  ? ''
                  : calendarList.map((calendar) => (
                      <tbody key={calendar._id}>
                        <tr onClick={handleClick}>
                          <td>{calendar.calendarName}</td>
                          <td>{calendar.createdBy}</td>
                          <td>{calendar.holidays.length}</td>
                        </tr>
                      </tbody>
                    ))}
              </table>
              <Adminfooter />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default Holidays;
