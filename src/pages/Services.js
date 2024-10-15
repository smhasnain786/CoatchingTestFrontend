import React from 'react';
import {Link} from 'react-router-dom';

//Components 
import PageTitle from './../layouts/PageTitle';
import ClientsSlider from './../components/Home/ClientsSlider';
//element
import CounterSection from './../elements/CounterSection';
import NewsLetter from './../components/NewsLetter';

//images


const serviceCard = [
    {title:'Design', image: 'https://miraclestars.in/wp-content/uploads/2020/05/design-service-1024x536.jpeg',link:'/design',desc:"Our designing service offers creative solutions tailored to your brand's identity, ensuring visually appealing graphics and layouts. We specialize in logo design, marketing materials, and web design that capture your audience's attention and enhance user experience."},
    {title:'Typing', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR9h6MJAqSZnI9O5bUK03zQKKD0kPkAJIRpyVTQCYQ-esyLYHQMs6WxrNky93_k4yeprM&usqp=CAU',link:'/typing',desc:"Our typing service provides fast and accurate transcription of documents, ensuring your content is professionally presented and error-free. Whether it’s typing handwritten notes, reports, or manuscripts, we guarantee timely delivery and confidentiality."},
    {title:'Data Translate', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHzXwIHsHYBZZPW6rrQGJY5XCUgYdAhGVgRgP6h_0PryN8Pxz-QoFehQcWvctAHII3-40&usqp=CAU',link:'/data-translate',desc:"Our data translation service delivers precise and culturally relevant translations across multiple languages, helping you reach a global audience. We ensure that your content retains its original meaning while being adapted to resonate with local customs and terminologies."},
   
];

function Services(){
    return(
        <>
            <div className="page-content">
                <PageTitle  parentPage="Pages" childPage="Services" />
                <section className="content-inner bg-white">
                    <div className="container">	
                        <div className="row">
                            {serviceCard.map((data, index)=>(
                                <div className="col-lg-4 col-md-6" key={index}>
                                    <div className="content-box style-1 m-b30">
                                        <div className="dz-info">
                                            <h4 className="title">{data.title}</h4>
                                            <p>{data.desc}</p>
                                        </div>
                                        <div className="dz-banner-media1.jpg m-b30">
                                            <img src={data.image} alt="" />
                                        </div>
                                        <div className="dz-bottom">
                                            <Link to={data.link} className="btn-link btnhover3">READ MORE<i className="fas fa-arrow-right m-l10"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>  
                    </div>
                </section> 
                <section className="content-inner bg-light">
                    <div className="container">
                        <div className="row sp15">   
                            <CounterSection />        
                        </div>
                    </div>
                </section>    
                <div className="bg-white py-5">
				    <div className="container">        
                        <ClientsSlider />      
                    </div>
                </div>  
                <NewsLetter />  
            </div>
        </>
    )
}
export default Services;