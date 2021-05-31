/* Save Simple Data to dataStorage */
import { useState, useEffect } from "react";

type ReturnType<T> = [
	T,
	React.Dispatch<React.SetStateAction<T>>
]

const useLocalStorageState = (key:string, defaultVal?:string):ReturnType<string> => {
	const [state, setState] = useState<string>(() => {
		try{
			let value = localStorage.getItem(key);
			return value?JSON.parse(value):defaultVal;
		} catch(error){
			return defaultVal;
		}
	});

	useEffect(() => {
		localStorage.setItem(key, state);
	});

	return [state, setState];
};

export default useLocalStorageState;