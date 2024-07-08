import { Fragment } from "react"
import Spot from "./Spot"
import { useMatrix, useSetMatrix, useIndex } from "../context/matrixContext"

import usePlay from '../hooks/usePlay'
/* this component should have a side effect or something that call usePlay when the matrix state changes */
export default function Grid(){
	const index = useIndex()

	const matrix = useMatrix()
	const setMatrix = useSetMatrix()

	const matrix_position_id = usePlay('O', 'X')
	console.log(matrix_position_id)

	if(index.current === true){
		const newMatrix = matrix.map( position => {
			if(position.id == matrix_position_id){
				return {id: matrix_position_id, value: 'O'}
			}
			else{
				return position
			}
		} )

		setMatrix(newMatrix)
		index.current = false
	}

	// we transorm the matrix of data into a matrix of components:
	const matrixComp = matrix.map(spot =>
		<Fragment key={spot.id} >
			<Spot id={spot.id} mark={spot.value} />
		</Fragment>
	)

	return (
		<div className="grid gap-4 grid-cols-3 grid-rows-3" >
			{matrixComp}
		</div>
	)
}