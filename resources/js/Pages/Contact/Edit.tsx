import { Contact } from '@/types/contact';
import { router, usePage } from '@inertiajs/react';
import { ChangeEvent, FormEvent, useState } from 'react';

export default function ContactEdit() {
    const { contact } = usePage<{ contact: Contact }>().props;

    const [values, setValues] = useState({
        ...contact
    })

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const key = e.target.id;
        const value = e.target.value
        if (key === 'contact' && isNaN(+value)) return;
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        router.patch(route('contact.update', contact.id), values)
    }

    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <form className="mx-auto max-w-md" onSubmit={handleSubmit}>
                <div className="group relative z-0 mb-5 w-full">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:ring-0 focus:outline-none"
                        value={values.email}
                        onChange={handleChange}
                    />
                    <label
                        htmlFor="email"
                        className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                    >
                        Email address
                    </label>
                </div>
                <div className="group relative z-0 mb-5 w-full">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:ring-0 focus:outline-none"
                        value={values.name}
                        onChange={handleChange}
                    />
                    <label
                        htmlFor="name"
                        className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4"
                    >
                        Name
                    </label>
                </div>
                <div className="group relative z-0 mb-5 w-full">
                    <input
                        type="text"
                        name="contact"
                        id="contact"
                        className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:ring-0 focus:outline-none"
                        value={values.contact}
                        onChange={handleChange}
                        maxLength={9}
                    />
                    <label
                        htmlFor="contact"
                        className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4"
                    >
                        Contact
                    </label>
                </div>
                <button
                    type='submit'
                    className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none sm:w-auto"
                >
                    Edit Contact
                </button>
            </form>
        </div>
    );
}
