'use client'
import { useState } from 'react'
import SearchResults from './SearchResults'
import { Loader2 } from "lucide-react"
import NotFound from './NotFound'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const Main = () => {

    const [username, setUsername] = useState('');
    const [error, setError] = useState(false);
    const [searchResult, setSearchResult] = useState({});
    const [notFound, setNotFound] = useState(false);
    const [loading, setLoading] = useState(false);

    const searchUser = async (username) =>{
        setLoading(true);
        let req = await fetch(`https://api.github.com/users/${username}`);
        let user = await req.json();
        console.log(user);
        if (req.status === 403){
            alert("API rate limit exceeded !");
            setLoading(false)
            return;
        }

        if(user.message === 'Not Found'){
            setLoading(false)
            setSearchResult({})
            setNotFound(true);
            return;
        }
        // destructure data after checking if request has no errors
        let {id, avatar_url, bio, name, login, location, html_url, followers} = user;
        let userData = {
            id,
            avatar_url,
            bio,
            name,
            login,
            location,
            html_url,
            followers
        };

        setLoading(false)
        setSearchResult(userData);
        setNotFound(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!username || username === ''){
            setError(true);
            return;
        }else{
            searchUser(username)
            setError(false);
        }
    }
    
    return ( 
        <>
        <Card className="max-w-xl lg:min-w-lg md:min-w-md">
            <CardHeader>
                <CardTitle>Search for profile</CardTitle>
                <CardDescription>Type profile username in the search bar.</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent>
                    
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="username">Github Username</Label>
                                <Input 
                                    id="username" 
                                    placeholder="Github Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)} 
                                />
                                <small className='text-red-600'>{error ? 'Username cannot be empty' : ''}</small>
                            </div>
                        </div>
                    
                </CardContent>
                <CardFooter className="flex justify-between mt-4">
                    <Button type="button" onClick={() => setUsername('')} variant="outline">Cancel</Button>
                    <Button type="submit" disabled={loading}>
                        {loading ? <Loader2 className="animate-spin" /> : 'Search'}
                    </Button>
                </CardFooter>
            </form>
        </Card>
        {Object.keys(searchResult).length > 0 && <SearchResults user={searchResult} />} {notFound ? <NotFound /> : ''}
        </>
    );
}
 
export default Main;