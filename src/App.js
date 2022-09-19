import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {incNumber,decNumber} from './actions/index';

function App() {
  const myState = useSelector((state)=> state.changeNumber);
  const dispatch = useDispatch();
  return (
      <div className="container">
        <h1>Increment/Decrement counter</h1>
        <h4>using React Redux</h4>
        <div className="quantity">
          <a title="Decrement" className="quantity__minus" onClick={() =>dispatch(decNumber())}><span> - </span></a>
          <input type="text" name="quantity" className="quantity__input" value={myState} />
          <a title="Increment" className="quantity__plus" onClick={() => dispatch(incNumber(5))}><span> + </span></a>
        </div>
        </div>
  );
}

export default App;
