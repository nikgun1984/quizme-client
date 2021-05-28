/* Save Simple Data to dataStorage */
import { useState, useEffect } from "react";

type ReturnType<T> = [
	T | undefined,
	React.Dispatch<React.SetStateAction<T|undefined>>
]

const useLocalStorageState = <T,>(key:string, defaultVal?:T):ReturnType<T> => {
	const [state, setState] = useState<T | undefined>(() => {
		if(!defaultVal) return;
		try{
			let value = localStorage.getItem(key);
			return value?JSON.parse(value):defaultVal;
		} catch(error){
			return defaultVal;
		}
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(state));
	});

	return [state, setState];
};

export default useLocalStorageState;