import { RiLoader5Fill as LoaderIcon } from "react-icons/ri";

const Loader = ({ size, className }: { size?: string, className?: string}) => {
 return <><LoaderIcon className={`animate-spin ${className}`} size={size}/></>
}

export default Loader;