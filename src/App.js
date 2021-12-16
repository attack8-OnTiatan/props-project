import logo from './logo.svg';
import './App.css';
import Profile from './Profile/Profile';

function App() {
    const FullName = {name:'anwer ben saad'};
    const x = {bio:'developer'}
    const profession = {job:'developer'}
    const HandleName = (props)=> { alert('anwer ben saad')}
  return (
    <div className="App">
      <div className='container'>
         <Profile
           HandleName={HandleName}
           FullName={FullName}
           x={x}
           profession={profession}
           children={<img src='https://svitla.com/uploads_converted/0/1376-development_lifecycle.webp?1546510666'/>}
          />
      </div>
    </div>
  );
}

export default App;
