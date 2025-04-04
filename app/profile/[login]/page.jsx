import Link from 'next/link';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';

const fetchUserRepos = async (username) => {
  const res = await fetch(`https://api.github.com/users/${username}/repos`, {
    cache: 'no-store',
  });


  if (res.status === 403) {
    throw new Error('Rate limit or permission error');
  }

  if (res.status === 404) {
    redirect('/search');
  }

  if (!res.ok) {
    throw new Error('Unexpected error while fetching data');
  }

  return res.json();
};

const ProfilePage = async ({ params }) => {
  const { login } = params;

  if (!login) redirect('/search');

  let repos = [];

  try {
    repos = await fetchUserRepos(login);
  } catch (error) {
    console.error('GitHub API error:', error);
    return (
      <div className="flex justify-center items-center bg-white dark:bg-zinc-900 min-h-screen text-center">
        <p className="text-red-600 text-lg">Something went wrong. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-zinc-900 min-h-screen">
      <div className="container max-w-7xl mx-auto flex flex-col items-center justify-start sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          {/* Sidebar */}
          <div className="lg:sticky lg:top-32 col-span-1 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-6 shadow-sm h-fit">
            <h1 className="text-2xl font-semibold tracking-tight mb-4">User Profile</h1>
            <p className="text-sm text-muted-foreground mb-8">View and manage user details</p>
            <hr /> <br />
            <div className="flex items-center justify-center gap-4 flex-col"> 
                <Image src={repos[0].owner?.avatar_url} alt="Profile picture" width={120} height={120} className='rounded-full' />
                <h2 className="text-lg font-semibold">{repos[0].owner?.login}</h2>
                <Button variant="outline" asChild><Link target="_blank" href={repos[0].owner?.html_url}>Visit profile</Link></Button>
            </div>
          </div>

          {/* Main content */}
          <div className="col-span-1 lg:col-span-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight mb-4">Repositories</h2>
            <p className="text-sm text-muted-foreground mb-8">Public GitHub repositories</p>

            {repos.length === 0 ? (
              <p className="text-muted-foreground">No repositories found.</p>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {repos.map((repo) => (
                  <div
                    key={repo.id}
                    className="rounded-lg border border-gray-200 dark:border-zinc-700 bg-gray-100 dark:bg-zinc-900 p-4"
                  >
                    <h3 className="text-lg font-medium">{repo.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Language: {repo.language ?? 'Unknown'}
                    </p>
                    <Link
                      href={repo.html_url}
                      target="_blank"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      View Repository
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
