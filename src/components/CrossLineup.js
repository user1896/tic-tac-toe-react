import { useGameStatus } from "../context/matrixContext"

export default function CrossLineup(){
	const gameStatus = useGameStatus()

	let className = "h-2 bg-black relative "
	switch( gameStatus.lineup ){
		case 0: className += "w-80 bottom-64"
			break
		case 1: className += "w-80 bottom-40"
			break
		case 2: className += "w-80 bottom-12"
			break
		case 3: className += "w-80 rotate-90 bottom-40 right-28"
			break
		case 4: className += "w-80 rotate-90 bottom-40"
			break
		case 5: className += "w-80 rotate-90 bottom-40 left-28"
			break
		case 6: className += "w-96 rotate-45 bottom-40"
			break
		case 7: className += "w-96 -rotate-45 bottom-40"
			break
		default: className += ""
	}
	return (
		<div className={className} ></div>
	)
}