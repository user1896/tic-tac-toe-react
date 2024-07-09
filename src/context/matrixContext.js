import { createContext, useContext, useRef, useState } from "react";

const tmpClicksContext = createContext(0)

const matrixContext = createContext(null)
const setMatrixContext = createContext(null)

export function MatrixProvider({children}){
	const tmpClicks = useRef(0)
	const [matrixState, setMatrixState] = useState([
		{id: 0, value: null}, {id: 1, value: null}, {id: 2, value: null},
		{id: 3, value: null}, {id: 4, value: null}, {id: 5, value: null},
		{id: 6, value: null}, {id: 7, value: null}, {id: 8, value: null},
	])

	return (
		<tmpClicksContext.Provider value={tmpClicks}>

			<matrixContext.Provider value={matrixState} >
				<setMatrixContext.Provider value={setMatrixState}>
					{children}
				</setMatrixContext.Provider>
			</matrixContext.Provider>

		</tmpClicksContext.Provider>
)
}

export function useTmpClicks(){
	return useContext(tmpClicksContext)
}

export function useMatrix(){
	return useContext(matrixContext)
}

export function useSetMatrix(){
	return useContext(setMatrixContext)
}