import useLineups from "./useLineups"

export default function useWinner(){
	const lineups = useLineups()
	let countMarks = 0

	// did 'X' won?
	for( let i = 0; i < 8; i++ ){
		for( let j = 0; j < 3; j++ ){
			if( lineups[i][j].value && (lineups[i][j].value === 'X') )
				countMarks++
		}
		if(countMarks === 3){
			return {
				player : 'X',
				lineup: i
			}
		}
		countMarks = 0
	}

	// did 'O' won?
	for( let i = 0; i < 8; i++ ){
		for( let j = 0; j < 3; j++ ){
			if( lineups[i][j].value && (lineups[i][j].value === 'O') )
				countMarks++
		}
		if(countMarks === 3){
			return {
				player : 'O',
				lineup: i
			}
		}
		countMarks = 0
	}

	// no winner
	return {
		player: null,
		lineup: null
	}
}