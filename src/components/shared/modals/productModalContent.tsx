import { Button } from "components/primitive";
import Input from "components/primitive/input";
import { Formik } from "formik";
import useModal from "hooks/useModal";
import { componentLabels } from "utils/constants";

const ProductModalContent = () =>{
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
                      id="product-name" 
                      name="productName" 
                      placeholder="Product Name"
                    />
                    <Input 
                      id="product-price" 
                      name="productPrice" 
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