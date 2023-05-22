import { Link } from "react-router-dom";
import { routePaths } from "utils/constants";
import { companyListCardProptypes } from "utils/proptypes";
import { removeIdFromPath } from "utils/utils";

const CompanyListCard = ({company}: companyListCardProptypes) =>{

    const {NIT,name} = company;

    return (
        <Link to={`${removeIdFromPath(routePaths.COMPANY_DETAIL_PAGE)}/${NIT}`} className="flex flex-col bg-gray-300 h-company-card w-company-card rounded-xl border-4 border-gray-500 p-4 pb-0 my-2 mx-1 flex-grow md:flex-none">
            <div className="flex-1 bg-white rounded-xl"></div>
            <div className="h-1/4 flex items-center justify-center text-lg font-semibold"> 
                <span>{name}</span>
            </div>
        </Link>
    )
}

export default CompanyListCard;