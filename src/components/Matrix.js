import { useState } from "react"
import Spot from "./Spot"

export default function Matrix(){
	// const [spotArr, setSpotArr] = useState([null, null, null, null, null, null, null, null, null])
	// const [spotArr, setSpotArr] = useState(['O', 'X', 'O', 'O', 'X', 'O', 'X', 'O', 'X'])

	return (
		<div className="grid gap-4 grid-cols-3 grid-rows-3" >
			<Spot mark="O" />
			<Spot mark="X" />
			<Spot mark="O" />
			<Spot mark="O" />
			<Spot mark="X" />
			<Spot mark="O" />
			<Spot mark="X" />
			<Spot mark="O" />
			<Spot mark="X" />
		</div>
	)
}