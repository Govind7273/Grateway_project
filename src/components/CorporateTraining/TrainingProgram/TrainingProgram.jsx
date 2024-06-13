import React from 'react'
import { Helmet } from 'react-helmet-async';
import Corporate_hero from '../Corporate_hero';
import { Technology_Program } from '../../../functions/corporateData';
import Corporate_why_choose_us from '../Corporate_why_choose_us';
import Technology from '../Technology';
import FAQ from '../FAQ';

const TrainingProgram = ({ Meta_Data }) => {
    const { Title, Description, Link } = Meta_Data;
    return (
        <>
            <Helmet>
                <title>{Title}</title>
                <meta name="description" content={Description} />
                <link rel="canonical" href={Link} />
            </Helmet>
            <div>
                <Corporate_hero TechnologyProgram={Technology_Program} />
                <Corporate_why_choose_us Technology_Program={Technology_Program} />
                <Technology Technology_Program={Technology_Program} />
                <FAQ Technology_Program={Technology_Program} />
            </div>
        </>
    )
}

export default TrainingProgram;