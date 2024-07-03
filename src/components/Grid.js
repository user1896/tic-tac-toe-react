import { Fragment, useState } from "react"
import Spot from "./Spot"
import { useMatrix } from "../context/matrixContext"

import howManyMarksInLineup from "../utils/games-logic/countMarks"
import useLineups from "../hooks/useLineups"

export default function Grid(){
	const lineups = useLineups()
	const matrix = useMatrix()
	// we transorm the matrix of data into a matrix of components:
	const matrixComp = matrix.map(spot =>
		<Fragment key={spot.id} >
			<Spot id={spot.id} mark={spot.value} />
		</Fragment>
	)

	console.log("'O' marks in lineup 0: ", howManyMarksInLineup(lineups[0], 'O'))
	console.log(lineups[0][1].value === 'G')

	return (
		<div className="grid gap-4 grid-cols-3 grid-rows-3" >
			{matrixComp}
		</div>
	)
}