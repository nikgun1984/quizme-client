import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { Control, Controller, DeepMap, FieldError } from "react-hook-form";
import { useState } from "react";
import { IStudySetResponse } from "../interfaces/apis";

export default function WordAutocomplete({ word,control,name,errors,idx,value }:{word:string,name:any,control:Control<IStudySetResponse>,errors:DeepMap<IStudySetResponse, FieldError>,idx:number, value:string}) {
  const [definitions, setDefinitions] = useState<string[]>([]);
  const [def,setDef] = useState('');

  	const onFocusHandle = async (word:string) => {
      if(word){
		    setDefinitions([]);
        const response = await fetch(
		      `https://api.datamuse.com/words?sp=${word}&md=d&max=1`
        );
        try{
          const data = await response.json();
		      if(data){
			      const defs = data[0].defs || [];
			      setDefinitions(defs);
		      }
        } catch(err){
          console.log(err)
        }
      }
  }

  return (
    <Controller
      render={({ field }) => (
        <Autocomplete
          onChange={(e, data) => field.onChange(data)}
          value={field.value || ""}
          freeSolo
          options={definitions}
          getOptionSelected={(option, value) => option === value}
		      getOptionLabel={(option:string) => option}
          renderInput={params => (
            <div className="input-field">
              <TextField {...params} label="DEFINITION" placeholder="Enter definition" InputProps={{...params.InputProps, disableUnderline: true}}
                onFocus={(e)=>onFocusHandle(word)} onChange={(e) =>{field.onChange(e.target.value)}} name={name}/>
              {errors?.cards && errors?.cards[idx]?.definition?.message && <span className="helper-text red-text left-align">{errors?.cards[idx]?.definition?.message}</span>}
            </div>
          )}
        />
      )}
      name={name}
      control={control}
    />
  );
}