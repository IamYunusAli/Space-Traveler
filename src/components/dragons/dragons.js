import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDragons, addReservation } from '../../redux/dragons/dragon';
import './dragon.css';

const Dragons = () => {
  const dragons = useSelector((state) => state.dragon);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dragons.length) dispatch(fetchDragons);
  }, []);

  const handleAddReservation = (id) => {
    dispatch(addReservation(id));
  };

  return (
    <ul className="dragon-list">
      {dragons.map((dragon) => (
        <li key={dragon.id} className="dragon">
          <img src={dragon.flickr_images[0]} alt="dragon from space X" className="dragon-img" />
          <div className="dragon-info">
            <h3>{dragon.name}</h3>
            <p>{dragon.type}</p>
            <p>{dragon.description}</p>
            <button type="button" className="dragon-button" onClick={() => handleAddReservation(dragon.id)}>Reservation</button>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default Dragons;
