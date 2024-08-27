import { Outlet } from 'react-router-dom';
import Directory from '../../componenets/directory/directory.component.jsx';

const Home = () => {
  

  return(
    <div>
        <Directory/>
        <Outlet/>
    </div>
  );
};

export default Home;