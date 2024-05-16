import { faIntercom } from "@fortawesome/free-brands-svg-icons";
import {
    faChalkboardUser,
    faCloud,
    faDatabase,
    faFile,
    faHandshakeAngle,
    faHouseLaptop,
    faMobile,
    faPeopleArrows,
    faPeopleGroup,
    faVialVirus,
    faWandSparkles,
} from "@fortawesome/free-solid-svg-icons";
import CustomerRelationship from "../Images/1crm.jpg";
import TestingAndQaImage from "../Images/qatesting.jpg";
import fullqa from "../Images/fullqa.jpg";
import indtesting from "../Images/indtesting.jpg";
import testing from "../Images/testing.jpg";
import trusted from "../Images/tleader.jpg";
import quality from "../Images/quality.jpg";
import crm from "../Images/crm2.jpg";
import cta1 from "../Images/cta1.jpg";
import cta2 from "../Images/cta2.jpg";


export const TestingAndQAServices={
    first:{
        content:{
            title:'Testing & Quality Analysis',
            description:'Delivering excellence through meticulous software testing and quality analysis. Our expert team ensures robustness, reliability, and user satisfaction, guaranteeing seamless performance and error-free functionality for your software solutions.'
        },
        imageUrl:TestingAndQaImage
    },

    second:{
        titleName:'Testing And QA',
        description:"Select Greatway Software for testing and QA and unlock the path to excellence. With our seasoned experts, innovative methodologies, and        unwavering dedication, we guarantee your software's reliability,        security, and user satisfaction. Trust us to deliver unparalleled        quality and ensure your products shine in today's competitive market        landscape.",
        circleItems:[{title:'Full-cycle QA', image:fullqa},{title:'Independent Testing', image:indtesting},{title:'Functional Testing', image:testing}]
    },

    third:{
        cards:[
             {icon:faPeopleGroup,text:'Dedicated QA teams'},
             {icon:faVialVirus,text:'on-demand Testing'},
             {icon:faWandSparkles, text:'Test Automation'},
             {icon:faHouseLaptop, text:'Functional Testing'},
             {icon:faMobile,text:'Non-Functional Testing'},
             {icon:faFile,text:'Design And Documentation'}
        ]
    },

    fourth:{
        cards:[
            {
                title:'Requirement Analysis',
                message:'We start by understanding your specific needs and objectives to tailor our testing approach accordingly.'
            },
            {
                title:'Test Planning',
                message:'We develop a comprehensive test plan outlining the scope, objectives, resources, and schedule for the testing activities.'
            },
            {
                title:'Test Design',
                message:'Our team designs detailed test cases and scenarios based on the specifications and requirements.'
            },
            {
                title:'Test Execution',
                message:'We execute the test cases using both manual and automated testing methods, meticulously documenting the results.'
            },
            {
                title:'Defect Reporting',
                message:'Identified defects are logged, categorized, and prioritized, providing you with clear and actionable insights.'
            },
            {
                title:'Retesting and Regression Testing',
                message:'We conduct retesting of resolved issues and perform regression testing to ensure new changes do not affect existing functionality.'
            },
            {
                title:' Final Reporting',
                message:'We provide a detailed report summarizing the testing activities, findings, and recommendations for improvement.'
            },
            {
                title:'Continuous Improvement',
                message:'Post-launch, we offer continuous testing and support to ensure ongoing software quality and performance.'
            }
        
        ],
        main:'Ready to Elevate Your Software Quality?',
        desc:'Don’t leave the quality of your software to chance. Choose our premier testing and quality analysis services to ensure your product is reliable, secure, and user-friendly. Let us help you deliver excellence with confidence.',
        cta: cta1
    }
}

export const CRMServices={
    first:{
        content:{
            title:'Customer Relationship Management',
            description:'In our CRM methodology, we champion personalized solutions, leveraging innovative technology and data-driven insights. Our commitment to seamless integration and continuous refinement ensures enduring client success and elevated customer experiences, driving sustained growth and satisfaction.'
        },
        imageUrl:CustomerRelationship
    },

    second:{
        titleName:'CRM',
        description:"At our CRM firm, we prioritize client-centricity, leveraging cutting-edge technology and tailored strategies to optimize customer relationships. Our approach emphasizes seamless integration, data-driven insights, and continuous improvement, ensuring sustained growth and client satisfaction.",
        circleItems:[{title:'Trusted Industry Leader', image:trusted},{title:'Superior Service Quality', image:quality},{title:'Tailored CRM Solutions', image:crm}]
    },

    third:{
        cards:[
             {icon:faCloud,text:'CRM Deployment'},
             {icon:faIntercom,text:'Customization Services'},
             {icon:faPeopleArrows, text:'Integration Solutions'},
             {icon:faDatabase, text:'Data Migration'},
             {icon:faChalkboardUser,text:'Training Programs'},
             {icon:faHandshakeAngle,text:'Support Services'}
        ]
    },

    fourth:{
        cards:[
            {
                title:'Needs Assessment',
                message:'We begin by understanding your business needs, goals, and challenges to recommend the best CRM solution.'
            },
            {
                title:'CRM Selection',
                message:'Based on your requirements, we help you select the most suitable CRM platform that aligns with your business objectives.'
            },
            {
                title:' Customization and Configuration',
                message:'We customize and configure the CRM system to meet your specific needs, ensuring it integrates seamlessly with your existing processes and systems.'
            },
            {
                title:'Data Migration',
                message:'We handle the migration of your existing customer data to the new CRM system, ensuring data integrity and continuity.'
            },
            {
                title:'Implementation',
                message:'Our team oversees the implementation process, ensuring a smooth and efficient setup of the CRM system.'
            },
            {
                title:'Training',
                message:'We provide comprehensive training for your team to ensure they are proficient in using the new CRM tools and features.'
            },
            {
                title:'Support and Maintenance',
                message:'Post-implementation, we offer ongoing support and maintenance to ensure the CRM system continues to operate smoothly and efficiently.'
            },
            {
                title:'Continuous Improvement',
                message:'We continuously monitor and optimize the CRM system, incorporating feedback and making adjustments to enhance performance and meet evolving business needs.'
            }
        ],

        main:'Enhance Your Customer Relationships Today', 
        desc:'Unlock the potential of your customer interactions with our top-tier CRM services. Benefit from customized solutions designed to improve engagement, satisfaction, and overall business performance.',
        cta: cta2
    }   
}


