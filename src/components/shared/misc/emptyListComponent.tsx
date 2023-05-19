import { emptyListProptypes } from "utils/proptypes";
import { Button } from "components/primitive";

const EmptyListComponent = ({message, renderButton, buttonLabel, buttonActionHandler}: emptyListProptypes) =>{
    return (<div className="flex flex-col items-center">
    <span className="mb-4 text-lg">{message}</span>
    {renderButton && <Button onClickHandler={buttonActionHandler}>{buttonLabel}</Button>}
 </div>)
}

export default EmptyListComponent;