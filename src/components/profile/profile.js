import { useSelector } from 'react-redux';
import './profile.css';

const Profile = () => {
  const dragons = useSelector((state) => state.dragon);
  const missions = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved === true);
  const reservedDr = dragons.filter((e) => e.reserved === true);
  const displayDragons = () => {
    if (reservedDr.length) {
      return (
        <ul>
          { dragons.map((dragon) => (dragon.reserved === true ? (
            <li>
              {dragon.name}
            </li>
          ) : null))}
        </ul>
      );
    }
    return (<h2> 0 Reserved Dragons  </h2>);
  };
  return (
    <div className="my-profile">
      <div className="profiles">
        <h2>Rockets</h2>
        <div className="reserved">
          {
              }
        </div>
      </div>
      <div className="profiles">
        <h2>Missions</h2>
        <div className="reserved">
          {!joinedMissions.length ? <h2>No Joined Missions</h2> : (
            <ul>
              { missions.map((mission) => (mission.reserved === true ? (
                <li key={mission.mission_id}>{mission.name}</li>
              ) : []))}
            </ul>
          )}
        </div>
      </div>
      <div className="profiles">
        <h2>Dragons</h2>
        <div className="reserved">
          {
           displayDragons()
        }
        </div>
      </div>
    </div>
  );
};
export default Profile;
