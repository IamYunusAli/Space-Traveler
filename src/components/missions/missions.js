import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Table } from 'react-bootstrap';
import { getMissions } from '../../redux/missions/mission';

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, []);

  const missions = useSelector((state) => state.missions);
  return (
    <>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th colSpan={2}>Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td colSpan={4}><button type="button">Not a member</button></td>
              <td colSpan={4}><button type="button">Join mission</button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
export default Missions;
