import { Field } from "formik";
import { inputProptypes } from "utils/proptypes";

const Input = ({id, name, placeholder}:inputProptypes) =>{
    return  (
    <Field
        className="border-2 border-gray-500 my-4 rounded-lg p-2"
        id={id} 
        name={name}
        placeholder={placeholder}
    />)
}

export default Input;