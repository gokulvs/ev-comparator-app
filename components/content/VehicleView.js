import { getRating } from "@utils/renderUtils";
import Image from 'next/image'

const renderDescription = (descs) => {
    return descs.map(des => <p className="text-sm">{des}.</p>)
}

const renderInfo = (infos) => {
    return ( 
        <>
            <span className="flex items-center mb-1">
                <span className="far fa-clock fa-fw mr-2 text-gray-900">Model</span> {infos.model}
            </span>
            <span className="flex items-center">
                <span className="far fa-address-card fa-fw text-gray-900 mr-2">Variant</span> {infos.variant}
            </span> 
        </> 
    );
}

const renderPrice = (price) => {
    return (
        <div className="mt-3 flex items-center">
            <span className="text-sm font-semibold">Rs</span>&nbsp;<span className="font-bold text-xl">{price}</span>&nbsp;<span className="text-sm font-semibold">₹</span>
        </div>
    );
}
 const renderCard = (item) => {
    return (
       
        <a href={`/pages/details/${item.id}`} className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
            <div className="relative pb-48 overflow-hidden">
                <Image layout={'fill'} objectFit={'contain'} src={item.img} alt={""}/>
            </div>
            <div className="p-4">
                {item.tags.map(tag => (<span className="inline-block bg-light-orange rounded-full px-3 py-1 text-sm font-semibold text-dark-orange mr-2">{tag}</span>))}
            
            <h2 className="mt-2 mb-2  font-bold">{item.title}</h2>
            {renderDescription(item.description)}
            {renderPrice(item.price)}
            </div>
            <div className="p-4 border-t border-b text-xs text-gray-700">
                {renderInfo(item.info)}       
            </div>
            <div className="p-4 flex items-center text-sm text-gray-600">
                {getRating(item.rating)}
                <span className="ml-2">{item.rating} Rating</span>
            </div>
        </a>
    );
};

export default renderCard;