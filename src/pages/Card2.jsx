import React from 'react'
import { useState } from 'react'
import CardInfo from './CardInfo.jsx'
import CardTest from './CardTest.jsx';
const Card2 = () => {

    const [infoData, setInfoData] = useState(CardInfo);

    return (
        <div>
            <CardTest infoData={infoData} />
        </div>
    )
}


export default Card2
