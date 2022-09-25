import {
  Link,
  withRouter
} from 'react-router-dom';
import birthdayCake from '../image/birthdayCake.png';
import './EventPage/EventPage.less';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const EventPage: React.FunctionComponent = () => {

  return (
    <div className="event-container">
      <div>
        <img src={birthdayCake} className="upload-img" />
      </div>
      <div className="event-header-box">
        <p>Birthday Bash</p>
        <div className="event-sub-header">
          <p>hosted by <span className="host-name">Vin</span></p>
        </div>
      </div>
      <div className="detail-box">
        <div className="event-icon">
          <CalendarMonthIcon />
        </div>
        <div className="event-detail-box">
          <p className="event-detail">18 August 6:00PM</p>
          <p className="sub-event-detail">to <span className="detail-highlight">19 Auguest 1:00PM</span> UTC+10</p>
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
          <p className="event-detail">18 August 6:00PM</p>
          <p className="sub-event-detail">to <span className="detail-highlight">19 Auguest 1:00PM</span> UTC+10</p>
        </div>
        <div className="arrow-icon">
          <KeyboardArrowRightIcon />
        </div>
      </div>
    </div>
  )
};

export default withRouter(EventPage);
