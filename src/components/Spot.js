import { useMatrix, useSetMatrix, useTmpClicks } from "../context/matrixContext"

export default function Spot({id ,mark}){
	const tmpClicks = useTmpClicks()

	const matrix = useMatrix()
	const setMatrix = useSetMatrix()

	function handleClick(e){
		if(matrix[e.target.id].value == null){
			const newMatrix = matrix.map( position => {
				if(position.id == e.target.id){
					return {id: e.target.id, value: 'X'}
				}
				else{
					return position
				}
			} )
	
			setMatrix(newMatrix)
			tmpClicks.current = tmpClicks.current + 1
		}
	}

	return (
		<div
			onClick={handleClick}
			id={id}
			className=
				"text-6xl font-semibold border-solid border-2 cursor-pointer h-24 w-24 flex justify-center items-center"
		>
			{mark}
		</div>
	)
}