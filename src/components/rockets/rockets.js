import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../../redux/rockets/rocketReduce';
import './rockets.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets);
  }, []);

  return (
    <ul className="rocket-list">
      {rockets.map((rocket) => (
        <li key={rocket.id} className="rocket">
          <img src={rocket.flickr_images[0]} alt="rocket from space X" className="rocket-img" />
          <div className="rocket-info">
            <h3>{rocket.name}</h3>
            <p>{rocket.type}</p>
            <p>{rocket.description}</p>
            <button type="button" className="Reserve-btn">Reservation</button>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default Rockets;
