import { Button } from "components/primitive";
import ProductListCard from "./productListCard";
import { productListProptypes } from "utils/proptypes";

const ProductList = ({createProductHandler, exportProductPDFHandler}:productListProptypes) =>{
    return (
        <div className="h-full w-screen max-w-screen-xl px-4 flex flex-col items-end">
            <div className="flex w-96 mb-8">
                <Button onClickHandler={createProductHandler}>Create Product</Button>
                <span className="w-2"/>
                <Button onClickHandler={exportProductPDFHandler}>Export PDF</Button>
            </div>
            <div className="table-auto w-full rounded-xl border-4 border-gray-500">
                <div className="w-full flex bg-gray-300 rounded-t-xl">
                    <div className="px-4 py-2 flex-1 border-r-2 border-gray-500 text-center">Product</div>
                    <div className="px-4 py-2 w-1/3 md:w-1/4 text-center">Price</div>
                </div>
                <div className="w-full flex flex-col">
                    <ProductListCard/>
                    <ProductListCard/>
                    <ProductListCard/>
                    <ProductListCard/>
                    <ProductListCard/>
                    <ProductListCard/>
                    <ProductListCard/>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default ProductList;