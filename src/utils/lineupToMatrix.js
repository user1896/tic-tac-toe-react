export default function lineupToMatrix(chosen_lineup, position){
	let matrix_position_id
	
	if( chosen_lineup <= 2 ){
		matrix_position_id = (chosen_lineup * 3) + position
	}
	else if( chosen_lineup >= 3 && chosen_lineup <= 5 ){
		matrix_position_id = (chosen_lineup - 3) + (position * 3)
	}
	else if( chosen_lineup === 6 ){
		matrix_position_id = 4 * position
	}
	else{
		matrix_position_id = 2 + (position * 2)
	}
	return matrix_position_id
}