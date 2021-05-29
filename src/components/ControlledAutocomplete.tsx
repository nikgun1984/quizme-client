import Autocomplete from "@material-ui/lab/Autocomplete";
import { Control, Controller, DeepMap, FieldError, FieldValues } from "react-hook-form";

export default function ControlledAutocomplete({ options,control,name,errors,idx,onChangeHandle }:{options:string[],name:string,control:Control,errors:DeepMap<FieldValues, FieldError>,idx:number,onChangeHandle:(value:string)=>Promise<void>}) {
  console.log(options)
  return (
    <Controller
      render={({ field: { onChange}, ...props }) => (
        <Autocomplete
          // {...props}
          className="validate"
          options={options}
          // getOptionSelected={(option, value) => option === value}
					getOptionLabel={(option:string) => option}
          renderInput={params => (
            <div className="input-field">
              <input {...params.inputProps} id="term" type="text" className="validate" placeholder="Enter term" onChange={(e) =>{
            const target = e.target as HTMLInputElement;
            if(target.value !== "" || target.value !== null) {
              onChangeHandle(target.value);
            }
            
          }} />
              <label {...params.InputLabelProps} htmlFor="term" className="active">TERM</label>
              {errors?.cards && errors?.cards[idx]?.term?.message && <span className="helper-text red-text left-align">{errors?.cards[idx]?.term?.message}</span>}
            </div>
          )}
          onChange={(e,data) => onChange(data)}
        />
      )}
      defaultValue={""}
      name={name}
      control={control}
    />
  );
}