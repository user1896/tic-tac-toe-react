import { Fragment, useState } from "react"
import Spot from "./Spot"
import { useMatrix } from "../context/matrixContext"

export default function Grid(){
	const matrix = useMatrix()
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