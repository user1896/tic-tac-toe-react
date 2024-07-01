import { createContext, useContext, useState } from "react";

const matrixContext = createContext(null)
const setMatrixContext = createContext(null)

export function MatrixProvider({children}){
	const [matrixState, setMatrixState] = useState([
		{id: 0, value: 'O'}, {id: 1, value: 'G'}, {id: 2, value: 'O'},
		{id: 3, value: 'X'}, {id: 4, value: 'O'}, {id: 5, value: 'X'},
		{id: 6, value: 'O'}, {id: 7, value: 'X'}, {id: 8, value: 'O'},
	])

	return (
		<matrixContext.Provider value={matrixState} >
			<setMatrixContext.Provider value={setMatrixState}>
				{children}
			</setMatrixContext.Provider>
		</matrixContext.Provider>
	)
}

export function useMatrix(){
	return useContext(matrixContext)
}

export function useSetMatrix(){
	return useContext(setMatrixContext)
}