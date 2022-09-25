import {
  useLocation
} from 'react-router-dom';
import birthdayCake from '../image/birthdayCake.png';
import './EventPage/EventPage.less';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import dayjs, { Dayjs } from 'dayjs';

const EventPage: React.FunctionComponent = () => {
  const eventparams = useLocation();
  const {hostName, eventName, location, startDate, endDate} = eventparams.state;

  return (
    <div className="event-container">
      <div>
        <img src={birthdayCake} className="upload-img" />
      </div>
      <div className="event-header-box">
        <p>{eventName}</p>
        <div className="event-sub-header">
          <p>hosted by <span className="host-name">{hostName}</span></p>
        </div>
      </div>
      <div className="detail-box">
        <div className="event-icon">
          <CalendarMonthIcon />
        </div>
        <div className="event-detail-box">
          <p className="event-detail">{startDate}</p>
          <p className="sub-event-detail">to <span className="detail-highlight">{endDate}</span> UTC+10</p>
        </div>
        <div className="arrow-icon">
          <KeyboardArrowRightIcon />
        </div>
      </div>
      <div className="detail-box">
        <div className="event-icon">
          <LocationOnIcon />
        </div>
        <div className="event-detail-box">
          <p className="event-detail">{location.streetName}</p>
          <p className="sub-event-detail">{location.suburb}, {location.postcode}, {location.state}</p>
        </div>
        <div className="arrow-icon">
          <KeyboardArrowRightIcon />
        </div>
      </div>
    </div>
  )
};

export default EventPage;
