import { Button } from "components/primitive";
import Input from "components/primitive/input";
import { Field, Formik } from "formik";
import useModal from "hooks/useModal";
import {componentLabels} from 'utils/constants'

const HomeModalContent = () =>{
    const {toggleModal} = useModal();

    return <div className="w-full flex justify-center">
        <Formik
            initialValues={{
                companyName: "",
                address: "",
                NIT: "",
                telephone: ""
            }}
            onSubmit={(values, {setSubmitting})=>{console.log(values)}}
        >
            {({         
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
            })=>(
                <form onSubmit={handleSubmit} className="flex flex-col w-3/5">
                    <Input
                      id="company-name" 
                      name="companyName" 
                      placeholder="Company Name"
                    />
                    <Input 
                      id="company-address" 
                      name="address" 
                      placeholder="Company Address"
                    />
                    <Input 
                      id="company-NIT" 
                      name="NIT" 
                      placeholder="Company NIT"
                    />
                    <Input 
                      id="company-telephone" 
                      name="telephone" 
                      placeholder="Company Telephone"
                    />
                    <div className="flex my-4">
                        <Button onClickHandler={toggleModal} variant={componentLabels.BUTTON.CANCELATION_VARIANT}>Cancel</Button>
                        <span className="w-4"/>
                        <Button onClickHandler={handleSubmit} variant={componentLabels.BUTTON.CONFIRMATION_VARIANT}>Create</Button>
                    </div>
                </form>
            )}
        </Formik>
    </div>
}

export default HomeModalContent;