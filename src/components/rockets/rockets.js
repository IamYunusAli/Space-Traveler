import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, addReservation, cancelReservation } from '../../redux/rockets/rocketReduce';
import './rockets.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!rockets.length) dispatch(fetchRockets);
  }, []);

  const handleAddReservation = (id) => {
    dispatch(addReservation(id));
  };

  const handleCancelReservation = (id) => {
    dispatch(cancelReservation(id));
  };

  return (
    <ul className="rocket-list">
      {rockets.map((rocket) => (
        <li key={rocket.id} className="rocket">
          <img src={rocket.flickr_images[0]} alt="rocket from space X" className="rocket-img" />
          <div className="rocket-info">
            <h3>{rocket.rocket_name}</h3>
            <p>{rocket.type}</p>
            <button type="button" className={`reserve ${rocket.reserved ? '' : 'hide'}`}>Reserved</button>
            <p>{rocket.description}</p>
            <button type="button" className={`rocket-button ${rocket.reserved ? 'hide' : ''}`} onClick={() => handleAddReservation(rocket.id)}>Reservation</button>
            <button type="button" className={`cancel-button ${rocket.reserved ? '' : 'hide'}`} onClick={() => handleCancelReservation(rocket.id)}>Cancel Reservation</button>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default Rockets;
