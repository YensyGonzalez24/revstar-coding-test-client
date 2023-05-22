import { useMutation, useQuery } from "@apollo/client";
import { Button } from "components/primitive";
import Input from "components/primitive/input";
import { Formik } from "formik";
import { MUTATION_UPDATE_COMPANY } from "graphql/mutations/company";
import { QUERY_GET_COMPANY_BY_ID } from "graphql/queries/company";
import { useNavigate, useParams } from "react-router-dom";
import { componentLabels, routePaths } from "utils/constants";
import { removeIdFromPath } from "utils/utils";

const EditCompany = () =>{
    const navigate = useNavigate();
    const {id} = useParams();

    const {data, loading} = useQuery(QUERY_GET_COMPANY_BY_ID,{
        variables:{
            nit:id
        }
    })

    const [updateCompany] = useMutation(MUTATION_UPDATE_COMPANY);

    const onSubmitHanlder = async (
        values:{
            companyName: string;
            address: string;
            telephone: string;
        }, 
        {setSubmitting} : any) =>{
            setSubmitting(true);

            try{
    
                await updateCompany({
                    variables:{
                        nit: id,
                        name: values.companyName,
                        address: values.address,
                        telephone: values.telephone
                    }
                });
    
                setSubmitting(false);
    
                navigate(`${removeIdFromPath(routePaths.COMPANY_DETAIL_PAGE)}${id}`)
    
            }catch(e){
                console.log(e)
            }
    }

    if(loading){
        return (
            <div>Loading Company Information</div>
        )
    }

    const { name, address, telephone } = data.getCompany;

    return (
        <div className="w-full flex justify-center flex-col items-center">
            <span>Company Information</span>
             <Formik
                initialValues={{
                    companyName: name,
                    address: address,
                    telephone: telephone
                }}
                onSubmit={onSubmitHanlder}
            >
            {({         
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
                      id="company-telephone" 
                      name="telephone" 
                      placeholder="Company Telephone"
                    />
                    <div className="flex my-4">
                        <Button onClickHandler={handleSubmit} variant={componentLabels.BUTTON.CONFIRMATION_VARIANT}>Update Company Information</Button>
                    </div>
                </form>
            )}
        </Formik>
        </div>
    )
}

export default EditCompany;