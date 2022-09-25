import { withRouter } from "react-router";
import { Container } from "semantic-ui-react";
import './LandingPage/LandingPage.less';

const LandingPage: React.FunctionComponent = () => {
  
  return (
    <div>
      <p className='header'>Imagine if</p>
      <p className='highlight'>Snapchat</p>
      <p>had events.</p>
    </div> 
  )
};

export default withRouter(LandingPage);
