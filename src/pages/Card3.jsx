import React from 'react'

const Card3 = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <p className="text-center fw-bold " style={{ fontSize: '3rem' }}>
                        Web Development
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
                        Web development involves creating and maintaining websites and web applications. It encompasses frontend development, which focuses on user interface and experience, and backend development, managing server-side operations. HTML, CSS, and JavaScript are fundamental languages. Frameworks like React, Angular, and Vue simplify frontend tasks. On the backend, tools like Node.js and Django are used. The development process includes design, coding, testing, and deployment. Responsive design ensures sites work on various devices. Security measures, SEO optimization, and continuous updates contribute to successful web development, enabling businesses to provide engaging and functional online experiences to their users.                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card3
