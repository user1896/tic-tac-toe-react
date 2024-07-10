import { useMatrix, useSetMatrix, useSetGameStatus, useTmpClicks } from "../context/matrixContext";
import Button from "./Button";

export default function ResetButton(){
	const setGameStatus = useSetGameStatus()

	const tmpClicks = useTmpClicks()

	const matrix = useMatrix()
	const setMatrix = useSetMatrix()

	function handleReset(){
		// Reset the matrix values
		const newMatrix = matrix.map(position => ({id: position.id, value: null}))
    setMatrix(newMatrix)
		setGameStatus({lineup: null, player: null})
		tmpClicks.current = 0
	}

	return (
		<Button className="text-2xl border-solid border-2 p-1 mt-4" onClick={handleReset} >Reset</Button>
	)
}