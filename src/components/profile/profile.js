import { useSelector } from 'react-redux';
import './profile.css';

const Profile = () => {
  const dragons = useSelector((state) => state.dragon);
  const missions = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved === true);
  const reservedDr = dragons.filter((e) => e.reserved === true);
  const rockets = useSelector((state) => state.rockets);
  const reservedrockets = rockets.filter((rocket) => rocket.reserved === true);

  const displayDragons = () => {
    if (reservedDr.length) {
      return (
        <ul>
          { dragons.map((dragon) => (dragon.reserved === true ? (
            <li key={dragon.id}>
              {dragon.name}
            </li>
          ) : null))}
        </ul>
      );
    }
    return (<h4> 0 Reserved Dragons  </h4>);
  };
  const displayRockets = () => {
    if (reservedrockets.length) {
      return (
        <ul>
          { rockets.map((rocket) => (rocket.reserved === true
            ? (
              <li key={rocket.id}>
                {' '}
                {rocket.rocket_name}
                {' '}
              </li>
            ) : null))}
        </ul>
      );
    } return (<h4> 0 Reserved Rockets </h4>);
  };
  return (
    <div className="my-profile">
      <div className="profiles">
        <h2>Rockets</h2>
        <div className="reserved">
          {
            displayRockets()
}
        </div>
      </div>
      <div className="profiles">
        <h2>My Missions</h2>
        {!joinedMissions.length ? <h4>No Joined Missions</h4> : (
          <ul>
            { missions.map((mission) => (mission.reserved === true ? (
              <li key={mission.mission_id}>{mission.mission_name}</li>
            ) : []))}
          </ul>
        )}
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
