import { Button } from "components/primitive";
import CompanyListCard from "./companyListCard";
import { companyListProptypes } from "utils/proptypes";

const CompanyList = ({createCompanyHandler} : companyListProptypes) => {
  return (
  <div className="bg-gray-200 p-6 h-full flex flex-col justify-between">

    <div className="flex pt-8 pb-4 justify-between items-center border-b-2 border-gray-500">
      <span className="flex">
        <span>Date Created</span>
        <img className="h-6 rotate-90" src={`${process.env.PUBLIC_URL}/assets/arrow_back.svg`} alt="" />
      </span>
      <div className="w-44">
        <Button onClickHandler={createCompanyHandler}>Create Company</Button>
      </div>

    </div>

    <div className=" w-full flex justify-between flex-wrap items-center bg-red-400 flex-1">
      <CompanyListCard/>
      <CompanyListCard/>
      <CompanyListCard/>
      <CompanyListCard/>
      <CompanyListCard/>
      <CompanyListCard/>
      <CompanyListCard/>
      <CompanyListCard/>
    </div>

    <div>
      pagination
    </div>

  </div>
  )
};

export default CompanyList;