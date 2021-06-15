import {createContext} from "react";
import { GlobalContent } from "./interfaces/globalContent";

const AppContext = createContext<GlobalContent>({token: '',setToken: ()=> {},username:'',setUsername: ()=> {}});

export default AppContext;