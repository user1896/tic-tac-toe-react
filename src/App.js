import Main from "./components/Main";
import { MatrixProvider } from "./context/matrixContext";

function App() {
  return (
    <MatrixProvider>
      <Main />
    </MatrixProvider>
  );
}

export default App;