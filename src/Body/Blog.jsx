import React , {useState , useMemo} from "react";
import { blogs } from "../data.js";

function Blog() {

    const [search , setSearch] = useState(''); // input for filtering data
    const [searchFocus , setSearchFocus] = useState(false);

    const filteredBlog = useMemo(() => {
        return blogs.filter(item => {
            // Check if item is an object
            if (item && typeof item === 'object'){
                // create a const for the data you want to filter on
                const blogTitle = (item.title || '').toLowerCase();
                if(search) {
                    return blogTitle.includes(search.toLowerCase());
                } else {
                    return blogs;
                }
            }
            return false; //Skip is item is not an object
        })
    } , [search , blogs]);

    function submit(event) {
        console.log("submitted");

        event.preventDefault();
    }

    return (
        <>
            <section className="blog font-frank">
                <section className="blog-intro lg:px-10 font-frank flex flex-col justify-center px-4">
                    <h3 className="text-lg md:text-xl font-medium text-deeppink w-5/6 md:w-3/6 mb-4">Read our Blog</h3>
                    <p className="text-deeppink text-md md:text-lg w-5/6 md:w-3/6">Dive into the Blooming World of Insights! Our blog is a floral haven of inspiration, tips, and stories. Discover a garden of knowledge at Bloom Haven Blog</p>
                </section>
                <section className="blog-posts py-10 px-4 lg:py-16 lg:px-32">
                    <div className="flex items-center">
                        <h2 className="font-medium text-md md:text-lg w-3/4">BROWSE ALL <span className="text-deeppink">TOPICS</span></h2>
                        <div className="relative flex items-center">
                            <input
                                type="text" 
                                value={search} 
                                onChange={e => setSearch(e.target.value)}
                                onFocus={() => setSearchFocus(true)} 
                                onBlur={() => setSearchFocus(false)}
                                placeholder={searchFocus ? 'search' : '     search'}
                                className='focus:outline-deeppink  border-2 border-#00000099 text-#00000099 p-2 w-[150px] md:w-[260px]'
                            />
                            <svg className={`${searchFocus ? 'hidden' : 'absolute'} ml-2`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 6.9999C11.5 7.59085 11.3836 8.17601 11.1575 8.72197C10.9313 9.26794 10.5999 9.76401 10.182 10.1819C9.76414 10.5997 9.26806 10.9312 8.7221 11.1574C8.17613 11.3835 7.59097 11.4999 7.00002 11.4999C6.40907 11.4999 5.82391 11.3835 5.27794 11.1574C4.73198 10.9312 4.2359 10.5997 3.81804 10.1819C3.40018 9.76401 3.06871 9.26794 2.84256 8.72197C2.61642 8.17601 2.50002 7.59085 2.50002 6.9999C2.50002 5.80642 2.97413 4.66183 3.81804 3.81792C4.66195 2.974 5.80655 2.4999 7.00002 2.4999C8.19349 2.4999 9.33809 2.974 10.182 3.81792C11.0259 4.66183 11.5 5.80642 11.5 6.9999ZM10.68 11.7399C9.4744 12.6759 7.95739 13.1172 6.43782 12.974C4.91825 12.8309 3.51036 12.114 2.50077 10.9693C1.49117 9.82461 0.95577 8.3382 1.00355 6.81265C1.05134 5.2871 1.67872 3.83711 2.75797 2.75785C3.83723 1.6786 5.28722 1.05122 6.81277 1.00343C8.33832 0.955648 9.82473 1.49105 10.9694 2.50065C12.1141 3.51024 12.831 4.91813 12.9742 6.4377C13.1173 7.95726 12.676 9.47428 11.74 10.6799L14.78 13.7199C14.8537 13.7886 14.9128 13.8714 14.9538 13.9634C14.9948 14.0554 15.0168 14.1547 15.0186 14.2554C15.0204 14.3561 15.0019 14.4561 14.9641 14.5495C14.9264 14.6429 14.8703 14.7277 14.7991 14.7989C14.7278 14.8702 14.643 14.9263 14.5496 14.964C14.4562 15.0017 14.3562 15.0203 14.2555 15.0185C14.1548 15.0167 14.0555 14.9947 13.9635 14.9537C13.8715 14.9127 13.7887 14.8536 13.72 14.7799L10.68 11.7399Z" fill="#00000099"/>
                            </svg>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 place-items-center my-3">
                        {filteredBlog.length === 0 ?
                            (<p>The blog post you're looking for is unavalable....Davido never write am😂😂😂</p>)
                            :
                            (filteredBlog.map((blog , i) => (
                                <div 
                                    className="bg-lightpink relative flex flex-col items-center p-2 pb-3 h-[500px] min-[450px]:h-[400px] max-w-[220px] "
                                    key={i}
                                >
                                    <img className="h-[40%] w-[100%]" src={blog.img} alt="flower" />
                                    <h3 className="h-[10%] my-3 text-md font-medium">{blog.title}</h3>
                                    <p className="h-[50%] font-josefin text-sm">{blog.content}</p>
                                </div>
                            )))
                        }
                    </div>
                </section>
                <section className="newsletter py-10 px-6 lg:py-16 lg:px-32 bg-grey sm:flex sm:items-center justify-between">
                    <div className="h-[230px] sm:h-[200px] sm:w-[48%] py-5 font-josefin flex flex-col justify-around">
                        <div className="sm:w-[100%] flex flex-col justify-between sm:justify-center">
                            <h3 className="font-frank font-medium text-lg ">NEWSLETTER </h3>
                            <p className="text-md font-light">Sign up for our newsletter and be the first to receive exclusive floral inspirations, special offers, and updates on upcoming events.</p>
                        </div>
                        <form className="sm:w-[80%] w-[100%]" onSubmit={submit}>
                            <div className="relative h-11 flex justify-between">
                                <input className="w-[70%] p-2 border-2 border-deeppink" type="email" name="email" id="Insert-email" placeholder="Email Adress" />
                                <button className="w-[27%] bg-deeppink text-white " type="submit">SUBMIT</button>
                            </div>
                        </form>
                    </div>
                    <img className="sm:w-[50%] lg:h-[300px] lg:w-[40%]" src="/blog/side gig.png" alt="flower img" />
                </section>
            </section>
        </>
    )
}


export default Blog;