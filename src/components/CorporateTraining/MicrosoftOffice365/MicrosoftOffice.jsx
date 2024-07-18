import React from 'react'
import { Helmet } from 'react-helmet-async';
import Corporate_hero from '../Corporate_hero';
import Corporate_why_choose_us from '../Corporate_why_choose_us';
import { microsoft_Program } from '../../../functions/corporateData';
import FAQ from '../FAQ';
import Technology from '../Technology';

const MicrosoftOffice = ({ Meta_Data }) => {
    const { Title, Description, Link } = Meta_Data;
    return (
        <>
            <Helmet>
                <title>{Title}</title>
                <meta name="description" content={Description} />
                <link rel="canonical" href={Link} />
            </Helmet>
            <div className='overflow-hidden'>
                <Corporate_hero TechnologyProgram={microsoft_Program} />
                <Corporate_why_choose_us Technology_Program={microsoft_Program} />
                <Technology Technology_Program={microsoft_Program} />
                <FAQ Technology_Program={microsoft_Program} />
            </div>
        </>
    )
}

export default MicrosoftOffice;