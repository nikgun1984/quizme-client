import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { Control, Controller, DeepMap, FieldError } from "react-hook-form";
import { useEffect, useState } from "react";
import { IStudySetResponse } from "../interfaces/apis";

export default function WordAutocomplete({ control,name,errors,idx,value}:{name:any;control:Control<IStudySetResponse>;errors:DeepMap<IStudySetResponse, FieldError>;idx:number;value:string}) {
  const [open, setOpen] = useState<boolean>(false);
  const [words, setWords] = useState<string[]>([]);
  	const onChangeHandle = async (value:string) => {
      if(value && value.length > 2){
        const response = await fetch(
        `https://api.datamuse.com/sug?s=${value}&max=5`
        );
        try{
          const words = await response.json();
          setWords(words.map((_:string, idx:number) => words[idx].word));
        } catch(err){
          console.log(err)
        }
      } else {
        setWords([]);
      }
  }

  useEffect(() => {
		if (!open) {
		  setWords([]);
		}
  	}, [open]);
  return (
    <Controller
      render={({ field }) => (
        <Autocomplete
          value={value || ""}
          freeSolo
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          options={words}
          getOptionSelected={(option, value) => option === value}
					getOptionLabel={(option:string) => option}
          renderInput={params => (
            <div className="input-field">
              <TextField {...params} label="TERM" placeholder="Enter term" InputProps={{...params.InputProps, disableUnderline: true}}
                onChange={(e) =>{field.onChange(e.target.value);onChangeHandle(e.target.value);}}/>
              {errors?.cards && errors?.cards[idx]?.term?.message && <span className="helper-text red-text left-align">{errors?.cards[idx]?.term?.message}</span>}
            </div>
          )}
          onChange={(_, data) => field.onChange(data)}
        />
      )}
      defaultValue={value}
      name={name}
      control={control}
    />
  );
}
