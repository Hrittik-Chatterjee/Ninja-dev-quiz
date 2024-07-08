import React from 'react';
import './Faq.css'

const Faq = () => {
    return (
        <div className='faq mt-12'>
            <section className="dark:text-gray-100">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase"></p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className=" divider flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32">
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What is the purpose of react router ?</summary>
                            <div className="px-4 pb-4">
                                <p>ReactJS Router is used for developing Single Page Website. React Router is used to define many routes in one webpage . When a user types a specific URL in the browser or tap in different routes  and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route. for this it gives user very fast and easy use website</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">How does context api works?</summary>
                            <div className="px-4 pb-4">
                                <p>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">How and where to use 'useHref' Hook?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p> useHref hook returns a URL that may be used to link to the given to location, even outside of React Router.   use the Link component only within the Router context to avoid the common error "useHref() may be used only in the context of a Router component"</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;