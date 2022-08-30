import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getMissions } from '../../redux/missions/mission';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  console.log(missions);

  useEffect(() => {
    dispatch(getMissions());
  }, []);

  return (
    <div>
      <h1>Missions</h1>
    </div>
  );
};
export default Missions;
