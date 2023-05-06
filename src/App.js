import Thoughts from "./components/Thoughts";
import Todo from "./components/ToDo";
import AppsBar from "./components/AppBar";
import Route from "./components/Route";

function App() {
  return (
    <div>
      <AppsBar />
      <Route path="/">
        <Thoughts />
      </Route>
      <Route path="/todo">
        <Todo />
      </Route>
      {/* <Todo />
      <Thoughts /> */}
    </div>
  );
}

export default App;
