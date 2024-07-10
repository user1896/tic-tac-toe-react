import Grid from "./Grid"
import CrossLineup from "./CrossLineup"
import ResetButton from "./ResetButton"
import { useGameStatus, useTmpClicks } from "../context/matrixContext"

export default function Main(){
	const gameStatus = useGameStatus()

	const tmpClicks = useTmpClicks()

	return (
		<div className="bg-slate-600 min-h-screen text-white flex flex-col justify-center items-center" >
			<h1 className="text-4xl mb-7" >Tic Tac Toe {tmpClicks.current}</h1>
			<h2 className="text-3xl mb-4" >
				{gameStatus.player ? gameStatus.player : "Play"}
			</h2>
			<Grid />
			<CrossLineup />
			<ResetButton />
		</div>
	)
}