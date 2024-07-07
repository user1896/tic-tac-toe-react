import Grid from "./components/Grid";
import ResetButton from "./components/ResetButton";
import { MatrixProvider } from "./context/matrixContext";

function App() {
  return (
    <MatrixProvider>
      <div className="bg-slate-600 min-h-screen text-white flex flex-col justify-center items-center" >
        <h1 className="text-4xl mb-7" >Tic Tac Toe</h1>
        <h2 className="text-3xl mb-4" >Play</h2>
        <Grid />
        <ResetButton />
      </div>
    </MatrixProvider>
  );
}

export default App;