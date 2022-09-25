import {
  Link,
} from 'react-router-dom';
import { Container } from "semantic-ui-react";
import './LandingPage/LandingPage.less';
import landingPageImage from '../image/landingPageImage.svg'

const LandingPage: React.FunctionComponent = () => {

  return (
    <div className='container'>
      <div className='header-box'>
        <div className='header'>
          <p>Imagine if</p>
          <p className='highlight'>Snapchat</p>
          <p>had events.</p>
        </div>
        <div className='sub-header'>
          <p>Easily host and share events with your friends across any social media.</p>
        </div>
      </div>
      <div>
        <img src={landingPageImage} className='example-img' />
      </div>
      <Link to='/create'>
        <button className='create-event-button'>🎉 Create my event</button>
      </Link>
    </div>
  )
};

export default LandingPage;
