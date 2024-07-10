import { Fragment, useEffect } from "react"
import Spot from "./Spot"
import { useMatrix, useSetMatrix, useTmpClicks, useGameStatus, useSetGameStatus } from "../context/matrixContext"
import usePlay from '../hooks/usePlay'
import useWinner from "../hooks/useWinner"

export default function Grid(){
	const gameStatus = useGameStatus()
	const setGameStatus = useSetGameStatus()

	const tmpClicks = useTmpClicks()

	const matrix = useMatrix()
	const setMatrix = useSetMatrix()

	let idNextMark = usePlay('O', 'X')

	const winner = useWinner()
	useEffect(()=>{
		// "winner.player != null" means "useWinner" returned a winner.
		// "!gameStatus.player" means we don't have a winner yet, because inside this condition we do:
		// "setGameStatus(winner)" so if we enter the condition everytime we have a winner and we set a winner
		// inside, we'll have an infinite render loop
		if(!gameStatus.player){
			if(winner.player){
				setGameStatus({lineup: winner.lineup, player: winner.player+" won"})
			}
			else if(tmpClicks.current == 5){
				setGameStatus({lineup: null, player: 'Draw'})
			}
		}
	},[winner])

	useEffect(() => {
		if(tmpClicks.current != 0){ // to avoid running on mount, because we want the player to play first
			const newMatrix = matrix.map( position => {
				if(position.id == idNextMark){
					return {id: idNextMark, value: 'O'}
				}
				else{
					return position
				}
			} )
	
			setMatrix(newMatrix)
		}
	}, [tmpClicks.current])

	// we transorm the matrix of data into a matrix of components:
	const matrixComp = matrix.map(spot =>
		<Fragment key={spot.id} >
			<Spot id={spot.id} mark={spot.value} />
		</Fragment>
	)

	return (
		<div className="grid gap-4 grid-cols-3 grid-rows-3" >
			{matrixComp}
		</div>
	)
}