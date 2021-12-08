import './Style.css';
import Profilephotofn from './components/profile/ProfilePhoto';
import Fullnamefn from './components/profile/FullName';
import Adressfn from './components/profile/Adress';

function App() {
  return (
    <div className="Container">
      <Profilephotofn />
      <Fullnamefn />
      <Adressfn/>
    </div>
  )
}

export default App;
