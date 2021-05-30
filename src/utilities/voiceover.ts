export const  mousePressedEvent = (e:React.MouseEvent<HTMLButtonElement>,value:string) => {
	e.preventDefault();
	if(window){
		window.responsiveVoice.speak(value,"US English Male")
	}
}