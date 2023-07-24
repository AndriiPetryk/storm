import './status.css';
import { statusVariables } from '../../utils/statusVariables';

const Status = ({ status }) => {
  const styles = statusVariables(status);
  return <div style={styles} className='status'>Status</div>;
};

export default Status;
