import ProductModalContent from "components/shared/modals/productModalContent";
import useModal from "hooks/useModal";
import { useState } from "react";
import { EmptyListComponent } from "components/shared/misc";
import { pageLabels } from "utils/constants";
import useUser from "hooks/useUser";
import { ProductList } from "components/pages/CompanyPage";
import { CreatePDFModalContent } from "components/shared/modals";

const EditCompany = () =>{
    const { toggleModal, setModalContent, setModalTitle } = useModal();

    const { userPermissionProfile } = useUser({userId: ''});

    const homePageRestrictions = userPermissionProfile?.customActions?.COMPANY_DETAIL_PAGE;

    const [data, setData] = useState([1,2,3]);

    const handleCreateProduct = () =>{
        setModalContent(<ProductModalContent/>);
        setModalTitle("Create Product");

        toggleModal();
    }

    const handleExportProdctListPDF = () =>{
        setModalContent(<CreatePDFModalContent/>);
        setModalTitle("Export Product List");

        toggleModal();
    }

    return (
        <div>
            {}
            {data.length === 0 ? (
                <EmptyListComponent 
                    message={pageLabels.COMPANY_DETAIL.EMPTY_LIST_LABEL}
                    renderButton={homePageRestrictions?.allowProductCreation || false}
                    buttonLabel={pageLabels.COMPANY_DETAIL.CREATE_COMPANY_LABEL}
                    buttonActionHandler={handleCreateProduct}
                />
            ):(
                <ProductList createProductHandler={handleCreateProduct} exportProductPDFHandler={handleExportProdctListPDF}/>
            )}
        </div>
    )
}

export default EditCompany;