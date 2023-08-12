import React from 'react'
import CardInfo from './CardInfo';
import Contact from './Contact'
import { useState } from 'react'

const Card = () => {
    const [infoData, setInfoData] = useState(CardInfo);
    const filterItem = (category) => {
        const updatedList = CardInfo.filter((curElem) => {
            return curElem.category === category;
        });
        setInfoData(updatedList)
    }

    // const [selectedCategory, setSelectedCategory] = useState(null);

    // const handleCategoryClick = (category) => {
    //     setSelectedCategory(category);
    // };

    // const filteredData = selectedCategory
    //     ? CardInfo.filter((item) => item.category === selectedCategory)
    //     : CardInfo;

    return (
        <>
            <div className='container'>
                <div className="row mt-4">
                    <div className="col ">
                        <div className="card " style={{ width: "18rem" }}>
                            <img src='img/cards/card-1.jpg' className="card-img-top" alt="app development" />
                            <div className="card-body border-top-0 rounded-bottom card-border">
                                <h5 className="card-title">App Development</h5>
                                <p className="card-text">
                                    We offer comprehensive app development services, crafting innovative solutions that empower your business for success in the digital landscape.
                                </p>
                                <a href="/card2" className="btn btn-primary" onClick={() => filterItem('app')}>
                                    Read More
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className="col">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src='img/cards/card-2.jpg' className="card-img-top" alt="web development" />
                            <div className="card-body border-top-0 rounded-bottom card-border">
                                <h5 className="card-title">Web Development</h5>
                                <p className="card-text">
                                    Delivering comprehensive web development solutions, crafting engaging websites with modern design, functionality, and seamless user experiences.

                                </p>
                                <a href="" className="btn btn-primary">
                                    Read More
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className="col">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src='img/cards/card-3.jpg' className="card-img-top custom-card-height" alt="ui/ux development" />
                            <div className="card-body border-top-0 rounded-bottom card-border">
                                <h5 className="card-title">UI/UX Development</h5>
                                <p className="card-text">
                                    Delivering comprehensive UI/UX development services to create intuitive, visually appealing digital experiences that resonate with users and brands.
                                </p>
                                <a href="" className="btn btn-primary">
                                    Read More
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src='img/cards/card-4.jpg' className="card-img-top custom-card-height" alt="social media marketing" />
                            <div className="card-body border-top-0 rounded-bottom card-border">
                                <h5 className="card-title">Social Media Marketing</h5>
                                <p className="card-text">
                                    Boost your brand's reach and engagement with our top-tier social media marketing services. Elevate your online presence today!
                                </p>
                                <a href="" className="btn btn-primary">
                                    Read More
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div>
                <Contact />
            </div>


        </>
    )
}

export default Card
