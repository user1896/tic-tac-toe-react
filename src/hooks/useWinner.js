import useLineups from "./useLineups"

export default function useWinner(playersMark){
	const lineups = useLineups()
	let countMarks = 0

	for( let i = 0; i < 8; i++ ){
		for( let j = 0; j < 3; j++ ){
			if( lineups[i][j].value && (lineups[i][j].value === playersMark) )
				countMarks++
		}
		if(countMarks === 3){
			return {
				result : true,
				lineup: i
			}
		}
		countMarks = 0
	}

	return {
		result: false,
		lineup: null
	}
}