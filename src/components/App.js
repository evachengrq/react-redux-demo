import AddButton from './AddButton';
import Count from './Count';
import store from "../store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddButton/>
        <Count/>
      </div>
    </Provider>
  );
}

export default App;
