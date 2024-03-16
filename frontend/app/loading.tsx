import Image from "next/image"
import Loader from "@/public/loader.gif"

export default function Loading() {
    return (
        <div className="flex-1 w-full h-full flex justify-center items-center">
            <Image src={Loader} alt="loader-gif" height={136} width={364} />
        </div>
    )
}