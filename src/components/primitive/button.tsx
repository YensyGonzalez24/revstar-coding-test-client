import { componentLabels } from "utils/constants";
import { buttonProptypes } from "utils/proptypes";

const Button = ({ children, onClickHandler, variant}: buttonProptypes) => {

  const variantStyling = () =>{
    switch (variant) {
      case componentLabels.BUTTON.CONFIRMATION_VARIANT:
        return "bg-green-300 border-green-500 hover:bg-green-500"

      case componentLabels.BUTTON.CANCELATION_VARIANT:
        return "bg-red-300 border-red-500 hover:bg-red-500"

      default:
        return "bg-gray-300 border-gray-500 hover:bg-gray-500 hover:text-white"
    }
  }

  return (
    <div 
      className={`${variantStyling()} px-6 py-1 rounded-lg border-2 cursor-pointer h-10 flex items-center justify-center flex-1`}
      onClick={()=>onClickHandler()}
    >
      <span>{children}</span>
    </div>
  );
};

export default Button;
