import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { Control, Controller, DeepMap, FieldError, FieldValues } from "react-hook-form";
import { useState } from "react";

export default function WordAutocomplete({ word,control,name,errors,idx }:{word:string,name:string,control:Control,errors:DeepMap<FieldValues, FieldError>,idx:number}) {
  const [definitions, setDefinitions] = useState<string[]>([]);
    console.log(definitions)
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
          freeSolo
          options={definitions}
          getOptionSelected={(option, value) => option === value}
		  getOptionLabel={(option:string) => option}
          renderInput={params => (
            <div className="input-field">
              <TextField {...params} label="DEFINITION" placeholder="Enter definition" InputProps={{...params.InputProps, disableUnderline: true}}
                onFocus={()=>onFocusHandle(word)} onChange={(e) =>{field.onChange(e.target.value)}} defaultValue={field.value} />
              {errors?.cards && errors?.cards[idx]?.definition?.message && <span className="helper-text red-text left-align">{errors?.cards[idx]?.definition?.message}</span>}
            </div>
          )}
		  onChange={(e, data) => field.onChange(data)}
        />
      )}
      defaultValue={""}
      name={name}
      control={control}
    />
  );
}