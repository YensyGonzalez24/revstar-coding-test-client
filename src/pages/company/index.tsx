import { Button } from "components/primitive";
import { MainLayout } from "components/shared/layouts";
import useUser from "hooks/useUser";
import { Outlet } from "react-router";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { routePaths } from "utils/constants";
import { removeIdFromPath } from "utils/utils";

const Company = () =>{

    const navigate = useNavigate();
    const location = useLocation();
    const {id} = useParams();
    const {userPermissionProfile} = useUser();

    const handleCompanyEdit = () =>{
        navigate(`${removeIdFromPath(routePaths.EDIT_COMPANY_PAGE)}/${id}`)
    }

    return <MainLayout>
        <div className="absolute top-0 left-0 w-full">
            <div className="m-4">
                <Link className="flex items-center" to={`${routePaths.HOME_PAGE}`}>
                    <img className="h-6 mr-2" src={`${process.env.PUBLIC_URL}/assets/arrow_back.svg`} alt="" />
                    Return to home page
                </Link>
            </div>
            <div className="p-4 flex justify-between items-center">
                <div className="flex">
                    <div className={`${location.pathname === `/company/${id}` ? 'bg-gray-500 text-white' : 'bg-gray-300'} flex items-center border-2 border-gray-500 px-6 py-3 rounded-tl-lg rounded-bl-lg`}>
                        <Link to={`${routePaths.COMPANY_DETAIL_PAGE}/${id}`}>Products</Link>
                    </div>
                    <div className={`${location.pathname.includes(removeIdFromPath(routePaths.COMPANY_INFO_PAGE)) ? 'bg-gray-500 text-white' : 'bg-gray-300'} flex items-center border-2 border-gray-500 px-6 py-3 rounded-tr-lg rounded-br-lg`}>
                        <Link to={`${removeIdFromPath(routePaths.COMPANY_INFO_PAGE)}${id}`}>Information</Link> 
                    </div>
                </div>
                <div className="flex w-44">
                    {userPermissionProfile?.customActions?.COMPANY_DETAIL_PAGE.allowCompanyModification && 
                    !location.pathname.includes(removeIdFromPath(routePaths.EDIT_COMPANY_PAGE)) && 
                    <Button onClickHandler={handleCompanyEdit}>Edit Company</Button>}
                </div>
            </div>
        </div>
        <Outlet/>
    </MainLayout>
}

export default Company;