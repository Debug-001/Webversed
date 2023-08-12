import React from 'react'

const Card5 = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <p className="text-center fw-bold " style={{ fontSize: '3rem' }}>
                        Social Media Marketing
                    </p>
                    <p className="text-center fw-bold " style={{ fontSize: '2rem' }}>
                        Our Projects
                    </p>
                </div>

            </div>

            <div className="row mt-4">
                <div className="col " >
                    <img src='img/cards/card-1.jpg' className="card-img-top rounded" alt="app development" />
                </div>
                <div className="col">
                    <img src='img/cards/card-1.jpg' className="card-img-top rounded" alt="app development" />
                </div>
                <div className="col">
                    <img src='img/cards/card-1.jpg' className="card-img-top rounded" alt="app development" />
                </div>

            </div>

            <div className="row">
                <div className="col">
                    <p className="text-center" style={{ fontSize: '2rem' }}>
                        Information
                    </p>
                    <p className="text-center">
                        Social media marketing is a powerful strategy that utilizes social platforms like Facebook, Instagram, Twitter, and LinkedIn to connect with target audiences. By creating and sharing engaging content, businesses can increase brand visibility, build relationships, and drive traffic to their websites. Through targeted ads and analytics, companies can refine their approach, reaching specific demographics with precision. Social media facilitates direct interactions with customers, gathering feedback and enhancing customer service. It's an essential tool for modern businesses, offering a cost-effective way to build brand loyalty, boost conversions, and stay competitive in today's digital landscape.                  </p>
                </div>
            </div>
        </div>
    )
}

export default Card5
