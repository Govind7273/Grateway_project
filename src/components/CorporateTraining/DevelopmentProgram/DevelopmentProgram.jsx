import React from 'react'
import { Helmet } from 'react-helmet-async';
import Corporate_hero from '../Corporate_hero';
import Corporate_why_choose_us from '../Corporate_why_choose_us';
import Technology from '../Technology';
import FAQ from '../FAQ';
import { management_Program } from '../../../functions/corporateData';

const DevelopmentProgram = ({ Meta_Data }) => {
    const { Title, Description, Link } = Meta_Data;
    return (
        <>
            <Helmet>
                <title>{Title}</title>
                <meta name="description" content={Description} />
                <link rel="canonical" href={Link} />
            </Helmet>
            <div className='overflow-hidden'>
                <Corporate_hero TechnologyProgram={management_Program} />
                <Corporate_why_choose_us Technology_Program={management_Program} />
                <Technology Technology_Program={management_Program} />
                <FAQ Technology_Program={management_Program} />
            </div>
        </>
    )
}

export default DevelopmentProgram;