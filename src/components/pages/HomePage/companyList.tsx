import { Button } from "components/primitive";
import CompanyListCard from "./companyListCard";
import { companyListProptypes, companyType } from "utils/proptypes";
import useUser from "hooks/useUser";

const CompanyList = ({companies, createCompanyHandler} : companyListProptypes) => {

  const { userPermissionProfile } = useUser();

  const homePageRestrictions = userPermissionProfile?.customActions?.HOME_PAGE;

  return (
  <div className="p-6 h-full flex flex-col justify-between w-full">
    <div className="flex pt-8 pb-4 justify-between items-center border-b-2 border-gray-500">
      <span className="flex">
        <span>Date Created</span>
        <img className="h-6 rotate-90" src={`${process.env.PUBLIC_URL}/assets/arrow_back.svg`} alt="" />
      </span>
      {
        homePageRestrictions?.allowCompanyCreation &&       
        <div className="w-44">
          <Button onClickHandler={createCompanyHandler}>Create Company</Button>
        </div>
      }


    </div>

    <div className="w-full flex justify-start flex-wrap items-center flex-1">
      {companies.map((company: companyType, key) => {
        return (
          <CompanyListCard key={`company-card-key-${key}`} company={company}/>
        )
      })}
    </div>
  </div>
  )
};

export default CompanyList;