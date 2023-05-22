import ProductModalContent from "components/shared/modals/productModalContent";
import useModal from "hooks/useModal";
import { EmptyListComponent } from "components/shared/misc";
import { pageLabels } from "utils/constants";
import useUser from "hooks/useUser";
import { ProductList } from "components/pages/CompanyPage";
import { CreatePDFModalContent } from "components/shared/modals";
import { useQuery } from "@apollo/client";
import { QUERY_GET_ALL_PRODUCTS_FROM_COMPANY } from "graphql/queries/products";
import { useParams } from "react-router-dom";

const EditCompany = () =>{
    const { toggleModal, setModalContent, setModalTitle } = useModal();
    const {id} = useParams();
    const { userPermissionProfile } = useUser();

    const productPageRestrictions = userPermissionProfile?.customActions?.COMPANY_DETAIL_PAGE;
    
    const {data, loading, refetch} = useQuery(QUERY_GET_ALL_PRODUCTS_FROM_COMPANY,{
        variables:{
            nit: id
        },
    });

    const handleCreateProduct = () =>{
        setModalContent(<ProductModalContent onProductCreatedHandler={refetch} companyId={id}/>);
        setModalTitle("Create Product");

        toggleModal();
    }

    const handleExportProdctListPDF = () =>{
        setModalContent(<CreatePDFModalContent/>);
        setModalTitle("Export Product List");

        toggleModal();
    }

    if(loading){
        return (
            <div>
                Companies Loading
            </div>
        )
    }


    return (
        <div>
            {}
            {data?.allProductsFromCompany.length > 0 ? (
                <ProductList 
                    products={data.allProductsFromCompany} 
                    createProductHandler={handleCreateProduct} 
                    exportProductPDFHandler={handleExportProdctListPDF}
                    />

            ):(
                <EmptyListComponent 
                    message={pageLabels.COMPANY_DETAIL.EMPTY_LIST_LABEL}
                    renderButton={productPageRestrictions?.allowProductCreation || false}
                    buttonLabel={pageLabels.COMPANY_DETAIL.CREATE_COMPANY_LABEL}
                    buttonActionHandler={handleCreateProduct}
                    />
            )}
        </div>
    )
}

export default EditCompany;