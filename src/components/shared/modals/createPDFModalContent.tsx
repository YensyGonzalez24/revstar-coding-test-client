import { Button } from "components/primitive";
import useModal from "hooks/useModal";
import { componentLabels } from "utils/constants";

const CreatePDFModalContent = () =>{
    const {toggleModal} = useModal();

    return (
    <div className="w-full flex justify-center flex-col items-center">    
        <div>
            How would you like to recieve your PDF List?
        </div>
        <div className="flex my-4 w-4/5 md:w-3/5">
            <Button onClickHandler={toggleModal}>Send to Email</Button>
            <span className="w-4"/>
            <Button onClickHandler={()=>{}}>Download</Button>
        </div>
        <div className="w-4/5 md:w-3/5">
        <Button onClickHandler={toggleModal} variant={componentLabels.BUTTON.CANCELATION_VARIANT}>Cancel</Button>
        </div>
    </div>)
}

export default CreatePDFModalContent;