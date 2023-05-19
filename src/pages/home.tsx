import MainLayout from "components/shared/layouts/mainLayout";
import HomeModalContent from "components/shared/modals/homeModalContent";
import useModal from "hooks/useModal";
import { useEffect, useState } from "react";
import { pageLabels } from "utils/constants";
import useUser from "hooks/useUser";
import { EmptyListComponent } from "components/shared/misc";
import { CompanyList } from "components/pages/HomePage";

const Home = () =>{
    const { toggleModal, setModalContent, setModalTitle } = useModal();

    useEffect(()=>{
        setModalContent(<HomeModalContent/>);
        setModalTitle("Create Company");
    },[])

    const { userPermissionProfile } = useUser({userId: ''});

    const homePageRestrictions = userPermissionProfile?.customActions?.HOME_PAGE;

    const [data, setData] = useState([1,2,3]);

    const handleCreateCompany = () =>{
        console.log('creating')
        toggleModal();
    }

    return (
        <MainLayout>
            {data.length === 0 ? (
                <EmptyListComponent 
                    message={pageLabels.HOME.EMPTY_LIST_LABEL}
                    renderButton={homePageRestrictions?.allowCompanyCreation || false}
                    buttonLabel={pageLabels.HOME.CREATE_COMPANY_LABEL}
                    buttonActionHandler={handleCreateCompany}
                />
            ):(
                <CompanyList createCompanyHandler={handleCreateCompany}/>
            )}
        </MainLayout>
        )
}

export default Home;