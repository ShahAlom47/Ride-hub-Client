import { RiGridFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

interface ViewOptionsType {
    cardView: string;
    setCardView: (view: string) => void;
    sortValue: string;
    setSortValue: (sort: string) => void;
}

const ViewOptions = ({ cardView, setCardView, sortValue, setSortValue }: ViewOptionsType) => {


    return (
        <div className="  my-5 p-4 w-11/12 mx-auto">
            <div className=" flex gap-4 items-center justify-between  lg:flex-row md:flex-row flex-col mb-4">
                <h1 className=" text-white font-medium">Available Bike 10</h1>
                <div className=" flex gap-5 items-center justify-end">
                    <div className=" flex justify-center items-center gap-3 ">
                        <h4 className="text-white">Sort By</h4>
                        <select
                            name="brand"
                            className="p-4 bg-gray-800 rounded inline-block"
                            value={sortValue}
                            onChange={(e) => setSortValue(e.target.value)}
                        >

                            <option value="titleAse">Title A-Z</option>
                            <option value="titleDes">Title Z-A</option>
                            <option value="priceAse">Price High to Low</option>
                            <option value="priceDes">Price Low to High</option>
                        </select>
                    </div>
                    <div className="items-center justify-between  lg:flex md:flex hidden gap-3" >
                        <button onClick={()=>setCardView('grid')} className={` bg-gray-800 hover:bg-color-s p-4 text-2xl ${cardView==='grid'?'bg-color-s text-white':''}`}><RiGridFill /></button>
                        <button onClick={()=>setCardView('row')} className={`bg-gray-800 p-4 text-2xl hover:bg-color-s ${cardView==='row'?'bg-color-s text-white':''}`}><GiHamburgerMenu /></button>
                    </div>
                </div>

            </div>

            <div className="border-b border-white"></div>
        </div>
    );
};

export default ViewOptions;