import Image from "next/image";
import Link from "next/link";
const SearchResults = ({user}) => {
    return ( 
        <div className="lg:min-w-lg md:min-w-md w-[300px]">
            <h2 className="text-2xl font-bold mt-8 text-center">Search Results</h2>
            <div className="flex items-center w-full dark:hover:bg-zinc-900 hover:bg-gray-100 rounded-lg p-4 gap-4 mt-4 duration-300 border border-gray-200 dark:border-zinc-700/50 relative">
                <Image 
                    src={user.avatar_url}
                    alt="user.name"
                    width={100}
                    height={100}
                    className="object-cover rounded-lg"
                />
                <div>
                    <h3 className="text-lg font-bold">{user.name}</h3>
                    <h4 className="font-light opacity-70">@{user.login}</h4>
                    <small>{user.bio}</small> <br />
                    <small>Followers : <b>{user.followers}</b></small>
                </div>
                <Link href={user.html_url} target="_blank" className="absolute top-5 right-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                </svg>
                </Link>
            </div>
        </div>
    );
}
 
export default SearchResults;