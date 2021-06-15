import { Control, Controller } from "react-hook-form";
import { useEffect } from "react";

export default function UploadImageController({ control,name,idx }:{name:string,control:Control,idx:number}) {
  	const onChangeHandle = async (value:File) => {
      if(value){
        const response = await fetch(
        `https://api.datamuse.com/sug?s=${value}&max=5`
        );
        try{
          const words = await response.json();
        } catch(err){
          console.log(err)
        }
      }
    }

	return (
		<Controller
			control={control}
			name="test"
			render={({
				field: { onChange, onBlur, value, name, ref },
				formState,
			}) => (
				<div className="file-field input-field">
					<div className="btn purple darken-1">
						<span>File</span>
						<input type="file" id="file" onChange={onChange} name={name} accept="image/png, image/jpeg"/>
					</div>
					<div className="file-path-wrapper">
						<input className="file-path validate" type="text" value={value}/>
					</div>
				</div>
			)}
		/>
  	);
}