import Image from "next/image"
import * as imgs from "../../public";
export default function CD() {
    return <div className="flex justify-center items-center mt-5">

     <Image src={imgs.Campusdrives} placeholder="blur" className="transition-all "></Image>
    </div>
}