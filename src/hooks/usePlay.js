import usePositionToMark from './usePositionToMark'
import lineupToMatrix from '../utils/lineupToMatrix'

export default function usePlay( playersMark, opponentsMark ){
	const {chosen_lineup, position} = usePositionToMark(playersMark, opponentsMark)

	// when "chosen_lineup == null" it means all spots are taking, this can happen when the player plays first and
	// takes the last spot but he doesn't win, so when the machine plays second it will have no spot.
	if( chosen_lineup !== null ){
		const matrix_position_id = lineupToMatrix(chosen_lineup, position)

		return matrix_position_id
	}
	return null // we didn't mark any spot, so we return 'false', this will be used to determine a 'Draw'
}