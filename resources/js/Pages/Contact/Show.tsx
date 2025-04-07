import { Contact } from '@/types/contact';
import { Link, router, usePage } from '@inertiajs/react';
import { Pen, Trash2 } from 'lucide-react';

export default function ContactShow() {
    const { contact } = usePage<{ contact: Contact }>().props;
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <form className="mx-auto w-auto">
                <div className="group relative z-0 mb-5 w-full">
                    <input
                        type="email"
                        name="floating_email"
                        id="floating_email"
                        className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:ring-0 focus:outline-none "
                        value={contact.email}
                        disabled
                    />
                    <label
                        htmlFor="floating_email"
                        className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                    >
                        Email
                    </label>
                </div>
                <div className="group relative z-0 mb-5 w-full">
                    <input
                        type="text"
                        name="floating_name"
                        id="floating_name"
                        className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:ring-0 focus:outline-none "
                        value={contact.name}
                        disabled
                    />
                    <label
                        htmlFor="floating_name"
                        className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4"
                    >
                        Name
                    </label>
                </div>
                <div className="group relative z-0 mb-5 w-full">
                    <input
                        type="text"
                        name="floating_contact"
                        id="floating_contact"
                        className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:ring-0 focus:outline-none "
                        value={contact.contact}
                        disabled
                    />
                    <label
                        htmlFor="floating_contact"
                        className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4"
                    >
                        Contact
                    </label>
                </div>
                <div className="flex flex-col">
                    <Link
                        href={route('contact.edit', contact.id)}
                        className="flex w-full gap-x-2 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none sm:w-auto"
                    >
                        <Pen size={16} />
                        Go to edit
                    </Link>
                    <button
                        className="flex w-full cursor-pointer gap-x-2 rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 focus:outline-none sm:w-auto"
                        onClick={() => {
                            if (window.confirm('Are you sure you want to delete this contact?')) {
                                router.delete(route('contact.destroy', contact.id));
                            }
                        }}
                    >
                        <Trash2 size={16} />
                        Delete Contact
                    </button>
                </div>
            </form>
        </div>
    );
}
