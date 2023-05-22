import MainLayout from "components/shared/layouts/mainLayout";
import HomeModalContent from "components/shared/modals/homeModalContent";
import useModal from "hooks/useModal";
import { useEffect } from "react";
import { pageLabels } from "utils/constants";
import useUser from "hooks/useUser";
import { EmptyListComponent } from "components/shared/misc";
import { CompanyList } from "components/pages/HomePage";
import { useQuery } from "@apollo/client";
import { QUERY_GET_ALL_COMPANIES } from "graphql/queries/company";

const Home = () =>{
    const { toggleModal, setModalContent, setModalTitle } = useModal();

    const { userPermissionProfile } = useUser();

    const {data, loading, refetch} = useQuery(QUERY_GET_ALL_COMPANIES);

    useEffect(()=>{
        setModalContent(<HomeModalContent onCompanyCreatedHandler={refetch}/>);
        setModalTitle("Create Company");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const homePageRestrictions = userPermissionProfile?.customActions?.HOME_PAGE;

    const handleCreateCompany = () =>{
        toggleModal();
    }

    if(loading){
        return (
            <MainLayout>
                Companies Loading
            </MainLayout>
        )
    }

    return (
        <MainLayout>
            {data.allCompanies.length > 0 ? (
                <CompanyList companies={data.allCompanies} createCompanyHandler={handleCreateCompany}/>
            ):(
                <EmptyListComponent 
                    message={pageLabels.HOME.EMPTY_LIST_LABEL}
                    renderButton={homePageRestrictions?.allowCompanyCreation || false}
                    buttonLabel={pageLabels.HOME.CREATE_COMPANY_LABEL}
                    buttonActionHandler={handleCreateCompany}
                />
            )}
        </MainLayout>
        )
}

export default Home;