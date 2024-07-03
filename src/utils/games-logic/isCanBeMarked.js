function isCanBeMarked( lineup ){
	for( let i = 0; i < 3; i++ ){
		if( !lineup[i].value ){
			return {
				is_can_be_marked: true,
				position_to_mark: i
			}
		}
	}
	return {
		is_can_be_marked: false,
		position_to_mark: null
	}
}

export default isCanBeMarked