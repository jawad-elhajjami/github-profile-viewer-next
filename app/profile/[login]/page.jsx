
const ProfilePage = async ({ params }) => {
    const { login } = await params;
  
    if (!login) redirect('/search');

    // fetch user data
    let req = await fetch(`https://api.github.com/users/${login}/repos`);
    let res = await req.json();
    
    if(req.status === 403){
        alert("A problem occurred while fetching data from Github API");
        return;
    }

    if(req.status === 404){
        alert("User not found");
        return;
    }

    return ( 
        <div className="bg-white dark:bg-zinc-900">
            <div className="container max-w-7xl m-auto flex flex-col items-center justify-start min-h-screen sm:px-6 py-12">
                {/* Grid container */}
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 w-full min-h-[80vh]'>
                    <div className='rounded-xl border col-span-1 border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-6 shadow-sm'>
                        <h1 className="text-2xl font-semibold tracking-tight mb-4">
                            User Profile
                        </h1>
                        <p className="text-sm text-muted-foreground mb-8">
                            View and manage user details
                        </p>

                        <div>
                            username: {login}
                        </div>
                    </div>
                    <div className='rounded-xl border lg:col-span-2 col-span-1 border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-6 shadow-sm'>
                        <h1 className="text-2xl font-semibold tracking-tight mb-4">
                            Repositories
                        </h1>
                        <p className="text-sm text-muted-foreground mb-8">
                            View user Repositories
                        </p>

                        {/* User repositories */}
                        <div>
                            {res.length === 0 ? <h1>No repositories found</h1> : null}
                            {res.map((repo, index) => (
                                <h1 key={index}>
                                    {repo.full_name} <br />
                                </h1>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div> 
    );
}
 
export default ProfilePage;