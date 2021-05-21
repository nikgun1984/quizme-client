/* Save Simple Data to dataStorage */
import { useState, useEffect } from "react";

const useLocalStorageState = (key:string, defaultVal:string) => {
	const [state, setState] = useState(() => {
		let value = localStorage.getItem(key) || defaultVal;
		return value;
	});

	useEffect(() => {
		localStorage.setItem(key, state);
	});

	return [state, setState];
};

export default useLocalStorageState;