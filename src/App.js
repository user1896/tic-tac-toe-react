import Grid from "./components/Grid";
import Button from "./components/Button";
import { MatrixProvider } from "./context/matrixContext";

function App() {
  return (
    <MatrixProvider>
      <div className="bg-slate-600 min-h-screen text-white flex flex-col justify-center items-center" >
        <h1 className="text-4xl mb-7" >Tic Tac Toe</h1>
        <h2 className="text-3xl mb-4" >Play</h2>
        <Grid />
        <Button className="text-2xl border-solid border-2 p-1 mt-4" >Reset</Button>
      </div>
    </MatrixProvider>
  );
}

export default App;