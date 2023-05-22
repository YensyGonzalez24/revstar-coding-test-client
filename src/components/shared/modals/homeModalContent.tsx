import { useMutation } from "@apollo/client";
import { Button } from "components/primitive";
import Input from "components/primitive/input";
import { Formik } from "formik";
import { MUTATION_CREATE_COMPANY } from "graphql/mutations/company";
import useModal from "hooks/useModal";
import {componentLabels} from 'utils/constants'

const HomeModalContent = ({onCompanyCreatedHandler}:any) =>{
    const {toggleModal} = useModal();

    const [createCompany] = useMutation(MUTATION_CREATE_COMPANY);

    const onSubmitHanlder = async (
    values:{
        NIT: string;
        companyName: string;
        address: string;
        telephone: string;
    }, 
    {setSubmitting} : any)=>{
        setSubmitting(true);

        try{

            await createCompany({
                variables:{
                    nit: values.NIT,
                    name: values.companyName,
                    address: values.address,
                    telephone: values.telephone
                }
            });

            setSubmitting(false);

            await onCompanyCreatedHandler();

        }catch(e){
            console.log(e)
        }

        toggleModal();
    }

    return <div className="w-full flex justify-center">
        <Formik
            initialValues={{
                NIT: "",
                companyName: "",
                address: "",
                telephone: ""
            }}
            onSubmit={onSubmitHanlder}
        >
            {({         
                handleSubmit,
                isSubmitting
            })=>(
                <form onSubmit={handleSubmit} className="flex flex-col w-3/5">
                    <Input 
                    id="company-NIT" 
                    name="NIT" 
                    placeholder="Company NIT"
                    />
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