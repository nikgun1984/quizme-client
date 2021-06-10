import {INUM} from '../interfaces/types';

/* Added some message for timer when time is up*/
export const renderTime: React.FC<INUM> = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">To the next...</div>;
  }

  return (
    <div className="timer">
      <div className="value">{remainingTime}</div>
    </div>
  );
};