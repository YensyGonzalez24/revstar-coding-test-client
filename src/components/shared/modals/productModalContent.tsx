import { useMutation } from "@apollo/client";
import { Button } from "components/primitive";
import Input from "components/primitive/input";
import { Formik } from "formik";
import { MUTATION_CREATE_PRODUCT } from "graphql/mutations/products";
import useModal from "hooks/useModal";
import { componentLabels } from "utils/constants";

const ProductModalContent = ({onProductCreatedHandler, companyId}:any) =>{
    const {toggleModal} = useModal();
    const [createProduct] = useMutation(MUTATION_CREATE_PRODUCT);

    const onSubmitHanlder = async (
        values:{
            name: string;
            price: string;
        }, 
        {setSubmitting} : any)=>{
            setSubmitting(true);
    
            try{
    
                await createProduct({
                    variables:{
                        companyId,
                        name: values.name,
                        price: values.price
                    }
                });
    
                setSubmitting(false);
    
                await onProductCreatedHandler();
    
            }catch(e){
                console.log(e)
            }
    
            toggleModal();
        }

    return <div className="w-full flex justify-center">
        <Formik
            initialValues={{
                name: "",
                price: "",
            }}
            onSubmit={onSubmitHanlder}
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
                      id="product-name" 
                      name="name" 
                      placeholder="Product Name"
                    />
                    <Input 
                      id="product-price" 
                      name="price" 
                      placeholder="Product Price"
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

export default ProductModalContent;