import Link from 'next/link';

import Logo from './Logo';
import { GithubIcon, DribbbleIcon, SunIcon } from '../Icons';

const Header = () => {
    return (
        <header className="w-full p-4 px-10 flex items-center justify-between">
            {/* header */}
            <Logo />

            <nav className='w-mx py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm'>
                <Link href="/" className='mr-2'>Home</Link>
                <Link href="/" className='mx-2'>About</Link>
                <Link href="/" className='mr-2'>Contact</Link>

                <button>
                    <SunIcon className="inline-block w-6" />
                </button>
            </nav>

            <div>
                <a href="http://example.com" className="inline-block w-6 h-6 mr-4">
                    <GithubIcon className="hover:scale-125 transition-all ease duration-200" />
                </a>
                <a href="http://example.com" className="inline-block w-6 h-6 mr-4">
                    <DribbbleIcon className="hover:scale-125 transition-all ease duration-200"  />
                </a>
            </div>
        </header>
    )
}

export default Header;