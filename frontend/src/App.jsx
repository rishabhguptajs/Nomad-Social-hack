import "./App.css";
import Sidebar from "./component/sidebar/sideba";

function App() {
  const mode = useSelector((state) => state.mode)
  const theme = useMemo(() => 
    createTheme(themeSettings(mode)), [mode]
  );
  return (
    <>
      <div>
       <Sidebar />
      </div>
    </>
  );
}

export default App;
