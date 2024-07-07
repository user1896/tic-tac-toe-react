import useLineups from './useLineups'
import usePositionToMark from './usePositionToMark'
import lineupToMatrix from '../utils/lineupToMatrix'
import { useMatrix, useSetMatrix } from '../context/matrixContext'

export default function usePlay( playersMark, opponentsMark ){
	const matrix = useMatrix()
	const setMatrix = useSetMatrix()
	const {chosen_lineup, position} = usePositionToMark(playersMark, opponentsMark)

	// when "chosen_lineup == null" it means all spots are taking, this can happen when the player plays first and
	// takes the last spot but he doesn't win, so when the machine plays second it will have no spot.
	if( chosen_lineup !== null ){
		const matrix_position_id = lineupToMatrix(chosen_lineup, position)

		// update the DOM element with the corresponding matrix element

		// const newMatrix = matrix.map( position => {
		// 	if(position.id == matrix_position_id){
		// 		return {id: matrix_position_id, value: playersMark}
		// 	}
		// 	else{
		// 		return position
		// 	}
		// } )

		// setMatrix(newMatrix)

		return matrix_position_id

		// return true
	}
	return false // we didn't mark any spot, so we return 'false', this will be used to determine a 'Draw'
}