import { useMatrix, useSetMatrix } from "../context/matrixContext"
import useLineups from "../modules/lineups"

export default function Spot({id ,mark}){
	const matrix = useMatrix()
	const setMatrix = useSetMatrix()
	const lineups = useLineups()

	function handleClick(e){
		const newMatrix = matrix.map( position => {
			if(position.id == e.target.id){
				return {id: e.target.id, value: 'N'}
			}
			else{
				return position
			}
		} )

		setMatrix(newMatrix)
		console.log(lineups)
	}

	return (
		<div
			onClick={handleClick}
			id={id}
			className="text-6xl font-semibold border-solid border-2 p-5 cursor-pointer"
		>
			{mark}
		</div>
	)
}