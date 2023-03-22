import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/mission/missionSlice';

const Mission = ({ id, name, description, reserved }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <section className="missions">
        <div className="missions-info">
          <p>Mission</p>
          <p>Description</p>
          <p>Status</p>
          <p></p>
        </div>
        <div className="missions-details">
          <h3>{name}</h3>
          <p>{description}</p>
          <h4 className={`status ${reserved ? "active" : "notActive"}`}>
            {reserved ? 'Active Member' : 'NOT A MEMBER'}
          </h4>
          <button type="button" className={reserved ? 'leave-btn' : 'join-btn'}
          onClick={reserved ?
            () => {dispatch(leaveMission(id))}
            : () => {dispatch(joinMission(id))}}
            >
          {reserved ?
          'Leave Mission' : 'Join Mission'
          }
          </button>
        </div>
      </section>
    </div>
  )
};

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Mission;
