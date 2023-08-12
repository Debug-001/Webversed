import React from 'react'

const Card4 = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <p className="text-center fw-bold " style={{ fontSize: '3rem' }}>
                        UI/UX Development
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
                        UI/UX development is crucial for creating user-friendly digital experiences. UI (User Interface) focuses on visual design elements, ensuring a visually appealing and intuitive interface. UX (User Experience) emphasizes seamless navigation and interaction, enhancing user satisfaction. By merging UI aesthetics with UX functionality, designers optimize user journeys, making apps and websites efficient and enjoyable. Research, wireframing, prototyping, and testing are integral to the process, refining designs for user needs. Successful UI/UX development enhances brand loyalty, user retention, and conversion rates, ultimately contributing to the success of digital products in an increasingly competitive online landscape.                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card4
