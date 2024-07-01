import Matrix from "./components/Matrix";
import Button from "./components/Button";

function App() {
  return (
    <div className="bg-slate-600 min-h-screen text-white flex flex-col justify-center items-center" >
      <h1 className="text-4xl mb-7" >Tic Tac Toe</h1>
      <h2 className="text-3xl mb-4" >Play</h2>
      <Matrix />
      <Button className="text-2xl border-solid border-2 p-1 mt-4" >Reset</Button>
    </div>
  );
}

export default App;