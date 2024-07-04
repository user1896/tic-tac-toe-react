import { Fragment, useState } from "react"
import Spot from "./Spot"
import { useMatrix } from "../context/matrixContext"

import useLineups from "../hooks/useLineups"
import usePlay from '../hooks/usePlay'
/* this component should have a side effect or something that call usePlay when the matrix state changes */
export default function Grid(){
	const lineups = useLineups()
	const matrix = useMatrix()
	// we transorm the matrix of data into a matrix of components:
	const matrixComp = matrix.map(spot =>
		<Fragment key={spot.id} >
			<Spot id={spot.id} mark={spot.value} />
		</Fragment>
	)
	// usePlay('O', 'X')

	return (
		<div className="grid gap-4 grid-cols-3 grid-rows-3" >
			{matrixComp}
		</div>
	)
}