import GithubIcon from "./GithubIcon";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";

const Header = () => {
    return ( 
        <header className="fixed w-full p-4 border-b border-gray-300 bg-white dark:border-neutral-800 dark:bg-zinc-900">
            <div className="container max-w-7xl m-auto flex items-center justify-between">
                <Link href={"/"}>
                    <h1 className="lg:text-2xl text-lg font-bold dark:text-white text-gray-800 flex gap-2 items-center">
                        <GithubIcon width={30} height={30} />
                        Github<span className="text-blue-600">Finder</span>
                    </h1>
                </Link>
                <div>
                    <nav className="flex space-x-4">
                        <Button asChild>
                            <Link href="/search">Start searching</Link>
                        </Button>
                        <ModeToggle />
                    </nav>
                </div>
            </div>
        </header>
    );
}
 
export default Header;