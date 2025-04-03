import { Button } from "@/components/ui/button";
import GithubIcon from "@/components/GithubIcon";
import Link from "next/link";

const Home = () => {
  return ( 
    <div className="dark:bg-zinc-950">
        
        <div className="h-screen container max-w-7xl m-auto flex items-center justify-center">
          <div className="flex flex-col items-center p-8 max-w-3xl ">
            <GithubIcon width={100} height={100} />
          <h1 className="mt-4 relative lg:text-6xl text-4xl text-center font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
            <span className="absolute inset-0 blur-2xl opacity-10 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 rounded-lg -z-10"></span>
            Github Profile Finder, in a Single click
          </h1>
              <p className="text-lg text-center mt-4 opacity-75">Use this app to search for github profiles and view their data, we integrate the Github API to find the users public data.</p>
              <Button className="mt-4" asChild>
                <Link href="/search">Get started now</Link>
              </Button>
          </div>
        </div>
    </div>
   );
} 
 
export default Home;