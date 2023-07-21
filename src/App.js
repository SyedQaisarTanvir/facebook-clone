import "./App.css";
import { useStateValue } from "./StatePovider";
import Feed from "./component/Feed";
import Header from "./component/Header";
import Login from "./component/Login";
import Sidebar from "./component/Sidebar";
import Widgets from "./component/Widgets";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
            {/* feed
        Widgets */}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
