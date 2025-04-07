import { type SharedData } from '@/types';
import { type Contact } from '@/types/contact';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { Eye, Trash } from 'lucide-react';

export default function Welcome() {
    const { auth, contacts } = usePage<SharedData & { contacts: Contact[] }>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-center justify-end gap-4">
                        {auth.user ? (
                            <button
                                onClick={() => {
                                    if(confirm('Are you sure you want to logout?')) {
                                        router.post(route('logout'));
                                    }
                                }}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a]"
                            >
                                Logout
                            </button>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035]"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a]"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>
                <main className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    {contacts.length ? (
                        <table className="text-left text-sm text-gray-500 rtl:text-right">
                            <thead className="bg-gray-50 text-xs text-gray-700 uppercase ">
                                <tr>
                                    <th className="px-6 py-3">id</th>
                                    <th className="px-6 py-3">Name</th>
                                    <th className="px-6 py-3">Contact</th>
                                    <th className="px-6 py-3">Email</th>
                                    <th className="px-6 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((c, i) => (
                                    <tr
                                        key={i}
                                        className="border-b border-gray-200 odd:bg-white even:bg-gray-50"
                                    >
                                        <td className="px-6 py-4"> {c.id} </td>
                                        <td className="px-6 py-4"> {c.name} </td>
                                        <td className="px-6 py-4"> {c.contact} </td>
                                        <td className="px-6 py-4"> {c.email} </td>
                                        <td className="flex gap-x-2 px-6 py-4">
                                            <Link href={route('contact.show', c.id)} className="text-blue-600">
                                                <Eye size={16} />
                                            </Link>
                                            <button
                                                disabled={c.user_id !== auth.user?.id}
                                                onClick={() => {
                                                    if (window.confirm('Are you sure you want to delete this contact?')) {
                                                        router.delete(route('contact.destroy', c.id));
                                                    }
                                                }}
                                                className={`${c.user_id !== auth.user?.id ? 'text-gray-400' : 'text-red-600'}`}
                                            >
                                                <Trash size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className="text-muted-foreground text-sm">No contacts found</p>
                    )}
                </main>
            </div>
        </>
    );
}
