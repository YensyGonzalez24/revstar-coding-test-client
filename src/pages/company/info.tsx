import { useQuery } from "@apollo/client";
import { Button } from "components/primitive";
import { QUERY_GET_COMPANY_BY_ID } from "graphql/queries/company";
import useUser from "hooks/useUser";
import { useParams } from "react-router-dom";
import { componentLabels } from "utils/constants";

const EditCompany = () =>{
    const {id} = useParams();
    const {userPermissionProfile} = useUser();

    const {data, loading} = useQuery(QUERY_GET_COMPANY_BY_ID,{
        variables:{
            nit: id
        },
    });

    if(loading){
        return <div>
        Loading Company Information
        </div>
    }

    const {NIT, name, address, telephone} = data.getCompany;
    
    return (
        <div className="flex flex-col items-center">
            <span className="text-lg mb-4">Company NIT: {NIT}</span>
            <span className="text-lg mb-4">Company name: {name}</span>
            <span className="text-lg mb-4">Company address: {address}</span>
            <span className="text-lg mb-6">Company telephone: {telephone}</span>
            {userPermissionProfile?.customActions?.COMPANY_DETAIL_PAGE.allowCompanyDeletion && 
            <Button onClickHandler={()=>{}} variant={componentLabels.BUTTON.CANCELATION_VARIANT}>Delete Company</Button>}
        </div>
    )
}

export default EditCompany;