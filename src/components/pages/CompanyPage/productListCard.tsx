import { productListCardProptypes } from "utils/proptypes";

const ProductListCard = ({product}:productListCardProptypes) =>{

    const {name, price} = product;
    return (
    <div className="flex w-full border-t-2 border-gray-500">
        <div className="border-r-2 border-gray-500 px-4 py-2 flex-1">{name}</div>
        <div className="px-4 py-2 w-1/3 md:w-1/4 flex justify-center">{price}</div>
    </div>
    )
}

export default ProductListCard;