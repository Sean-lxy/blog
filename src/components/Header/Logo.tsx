import Image from "next/image";
import Link from "next/link";

import ProfileImg from '@/public/profile.jpg';

const Logo = () => {
    return (
        <Link href="/" className="flex items-center text-dark">
            <div className="w-16 rounded-full overflow-hidden border border-solid border-dark mr-4">
                <Image src={ProfileImg} className="w-full h-auto rounded-full" alt="Sean" />
            </div>
            <span className="font-bold text-xl" >Sean</span>
        </Link>
    )
}

export default Logo;