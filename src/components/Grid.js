import { useState } from "react"
import Spot from "./Spot"
import { useMatrix } from "../context/matrixContext"

export default function Grid(){
	const matrix = useMatrix()
	// we transorm the matrix of data into a matrix of components:
	const matrixComp = matrix.map(spot => <Spot id={spot.id} mark={spot.value} />)

	return (
		<div className="grid gap-4 grid-cols-3 grid-rows-3" >
			{matrixComp}
		</div>
	)
}