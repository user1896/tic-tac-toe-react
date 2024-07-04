import { useMatrix, useSetMatrix } from "../context/matrixContext"
import usePlay from "../hooks/usePlay"

export default function Spot({id ,mark}){
	const matrix = useMatrix()
	const setMatrix = useSetMatrix()

	function handleClick(e){
		const newMatrix = matrix.map( position => {
			if(position.id == e.target.id){
				return {id: e.target.id, value: 'X'}
			}
			else{
				return position
			}
		} )

		setMatrix(newMatrix)
		// const nextO = usePlay('O', 'X')
		// console.log("next O will be in ",nextO)
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