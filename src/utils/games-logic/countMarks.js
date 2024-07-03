function countMarks( lineup, playersMark ){
	let countMarks = 0
	for( let i = 0; i < 3; i++ ){
		if( lineup[i].value && (lineup[i].value === playersMark) ){
			countMarks++
		}
	}
	return countMarks
}

export default countMarks