import React from 'react'
import { Helmet } from 'react-helmet-async';

const EnterpriseServices = ({ Meta_Data }) => {
    const { Title, Description, Link } = Meta_Data;
    return (
        <>
            <Helmet>
                <title>{Title}</title>
                <meta name="description" content={Description} />
                <link rel="canonical" href={Link} />
            </Helmet>
            <div className='w-screen h-screen flex justify-center items-center'>Enterprise Services</div>
        </>
    )
}

export default EnterpriseServices;