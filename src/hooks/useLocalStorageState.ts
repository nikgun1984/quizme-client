/* Save Simple Data to dataStorage */
import { useState, useEffect } from "react";

const useLocalStorageState = (key:string,defaultVal:string) => {
	const [state, setState] = useState<string>(() => {
		return localStorage.getItem(key) || defaultVal;
	});

	useEffect(() => {
		if(!state){
			localStorage.removeItem(key);
		} else {
			localStorage.setItem(key, state);
		}
	},[key,state]);

	return [state, setState] as const;
};

export default useLocalStorageState;