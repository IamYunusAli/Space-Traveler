import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Table, Button } from 'react-bootstrap';
import './missions.css';
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
            <th>Status</th>
            <th className="text-light">#</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td className="my-buttons"><Button>Not a member</Button></td>
              <td className="my-buttons"><Button>Join mission</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
export default Missions;
