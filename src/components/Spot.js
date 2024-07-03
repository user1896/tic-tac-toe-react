import { useMatrix, useSetMatrix } from "../context/matrixContext"

export default function Spot({id ,mark}){
	const matrix = useMatrix()
	const setMatrix = useSetMatrix()

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