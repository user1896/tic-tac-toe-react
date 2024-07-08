import { createContext, useContext, useState } from "react";
// make "index" a "ref"
const indexContext = createContext(false)
const setIndexContext = createContext(null)

const matrixContext = createContext(null)
const setMatrixContext = createContext(null)

export function MatrixProvider({children}){
	const [index, setIndex] = useState(false)
	const [matrixState, setMatrixState] = useState([
		{id: 0, value: null}, {id: 1, value: 'X'}, {id: 2, value: 'O'},
		{id: 3, value: 'X'}, {id: 4, value: 'X'}, {id: 5, value: null},
		{id: 6, value: 'O'}, {id: 7, value: null}, {id: 8, value: 'O'},
	])

	return (
		<indexContext.Provider value={index} >
			<setIndexContext.Provider value={setIndex} >

				<matrixContext.Provider value={matrixState} >
					<setMatrixContext.Provider value={setMatrixState}>
						{children}
					</setMatrixContext.Provider>
				</matrixContext.Provider>

			</setIndexContext.Provider>
		</indexContext.Provider>
	)
}

export function useIndex(){
	return useContext(indexContext)
}

export function useSetIndex(){
	return useContext(setIndexContext)
}

export function useMatrix(){
	return useContext(matrixContext)
}

export function useSetMatrix(){
	return useContext(setMatrixContext)
}