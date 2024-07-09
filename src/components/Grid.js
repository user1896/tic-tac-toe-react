import { Fragment, useEffect } from "react"
import Spot from "./Spot"
import { useMatrix, useSetMatrix, useTmpClicks } from "../context/matrixContext"

import usePlay from '../hooks/usePlay'
/* this component should have a side effect or something that call usePlay when the matrix state changes */
export default function Grid(){
	const tmpClicks = useTmpClicks()

	const matrix = useMatrix()
	const setMatrix = useSetMatrix()

	let idNextMark = usePlay('O', 'X')

	useEffect(() => {
		if(tmpClicks.current != 0){ // to avoid running on mount, because we want the player to play first
			const newMatrix = matrix.map( position => {
				if(position.id == idNextMark){
					return {id: idNextMark, value: 'O'}
				}
				else{
					return position
				}
			} )
	
			setMatrix(newMatrix)
		}
	}, [tmpClicks.current])

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