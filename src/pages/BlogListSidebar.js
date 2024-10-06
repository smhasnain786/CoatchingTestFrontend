import React from 'react';
import {Link} from 'react-router-dom';

import PageTitle from '../layouts/PageTitle';
import BlogSidebar from '../elements/BlogSidebar';

import blog1 from './../assets/images/blog/large/blog1.jpg';
import blog2 from './../assets/images/blog/large/blog2.jpg';
import blog4 from './../assets/images/blog/large/blog4.jpg';

const ListItem = ({title, Image}) =>{
    return(
        <>
            <div className="dz-blog style-1 bg-white m-b30 blog-half">
                <div className="dz-media dz-img-effect zoom">
                    <img src={Image} alt="" />
                </div>
                <div className="dz-info">
                    <h4 className="dz-title">
                        <Link to={"blog-detail"}>{title}</Link>
                    </h4>
                    <p className="m-b0">Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu.</p>
                    <div className="dz-meta meta-bottom">
                        <ul className="border-0 pt-0">
                            <li className="post-date"><i className="far fa-calendar fa-fw m-r10"></i>7 March, 2022</li>
                            <li className="post-author"><i className="far fa-user fa-fw m-r10"></i>By <Link to={"#"}> Johne Doe</Link></li>
                            <li className="post-comment"><Link to={"#"}><i className="far fa-comment-alt fa-fw"></i><span>15</span></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

const BlogListSidebar = () =>{
    return(
        <>
            <PageTitle parentPage="Blog" childPage="Blog List Sidebar" />
            <section className="content-inner-1 bg-img-fix">
				<div className="container">
					<div className="row">
						<div className="col-xl-8 col-lg-8">                            
                            <ListItem title="Unconventional Knowledge About Library, You Can't Learn From Books" Image={blog2} />
                            <ListItem title="You Should Experience Library At Least Once In Your Lifetime." Image={blog1} />
                            <div className="dz-blog style-1 bg-white m-b30 blog-half">
                                <div className="dz-media dz-img-effect zoom post-video">
                                    <Link to={"blog-detail"}>
                                        <img src={blog4} alt="" />
                                        <div className="post-video-icon fa fa-play"></div>
                                    </Link>
                                </div>
                                <div className="dz-info">
                                    <h4 className="dz-title">
                                        <Link to={"blog-detail"}>The 5 Secrets About Library Only A Handful Of People Know..</Link>
                                    </h4>
                                    <p className="m-b0">Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu.</p>
                                    <div className="dz-meta meta-bottom">
                                        <ul className="border-0 pt-0">
                                            <li className="post-date"><i className="far fa-calendar fa-fw m-r10"></i>7 March, 2022</li>
                                            <li className="post-author"><i className="far fa-user fa-fw m-r10"></i>By <Link to={"#"}> Johne Doe</Link></li>
                                            <li className="post-comment"><Link to={"#"}><i className="far fa-comment-alt fa-fw"></i><span>15</span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="dz-blog style-1 post-quote bg-white m-b30 blog-half">
                                <div className="dz-info">
                                    <div className="post-quote-icon">
										<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 298.667 298.667" style={{enableBackground:"new 0 0 298.667 298.667"}} ><polygon points="0,170.667 64,170.667 21.333,256 85.333,256 128,170.667 128,42.667 0,42.667"/><polygon points="170.667,42.667 170.667,170.667 234.667,170.667 192,256 256,256 298.667,170.667 298.667,42.667"/></svg>
									</div>
                                
                                    <h4 className="dz-title">
                                        <Link to={"blog-details-2"}>Books are the quietest and most constant of friends; and the most patient of teachers.</Link>
                                    </h4>
                                </div>
                            </div>
                            <nav aria-label="Blog Pagination">
								<ul className="pagination text-center style-1 p-t20 m-b30">
									<li className="page-item"><Link to={"#"} className="page-link prev" >Prev</Link></li>
									<li className="page-item"><Link to={"#"} className="page-link active" >1</Link></li>
									<li className="page-item"><Link to={"#"} className="page-link" >2</Link></li>
									<li className="page-item"><Link to={"#"} className="page-link" >3</Link></li>
									<li className="page-item"><Link to={"#"} className="page-link next" >Next</Link></li>
								</ul>
							</nav>

                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </section>    

        </>
    )
}
export default BlogListSidebar;