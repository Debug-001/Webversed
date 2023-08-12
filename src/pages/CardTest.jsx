import React from 'react';

const CardTest = ({ infoData }) => {
    console.log(infoData)
    return (
        <>
            {
                infoData.map((curElem) => {
                    return (
                        <>
                            <div className='container' key={curElem.id}>
                                <div className="row">
                                    <div className="col">
                                        <p className="text-center fw-bold " style={{ fontSize: '3rem' }}>
                                            {curElem.name}
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
                                            {curElem.info_text}                                        </p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }

        </>
    );
};

export default CardTest;