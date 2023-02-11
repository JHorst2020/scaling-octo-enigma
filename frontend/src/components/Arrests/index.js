import Arrest1 from "../../assets/mugshots/zahi-rashid-2018-01-04.jpeg"
import Arrest2 from "../../assets/mugshots/zahi-rashid-2018-11-29.jpeg"
import Arrest3 from "../../assets/mugshots/zahi-rashid-2021-04-28.jpeg"
import Arrest4 from "../../assets/mugshots/zahi-rashid-2019-06-06.jpeg"
import Arrest5 from "../../assets/mugshots/zahi-rashid-2015-04-30.jpeg"
import Wizard from "../../assets/mugshots/wizard.png"
export const ArrestInfo = [
    {
        date:"2018-01-04",
        charges:[
            {
                title:"(1) COUNT OF THEFT"
            }
        ],
        state:"AZ",
        mugshot:Arrest1,
        isMugShot:true,
        arrestURL:"https://archive.is/GGQya",
        courtURLs:[]
    },
    {
        date:"2018-07-05",
        charges:[
            {
                title:"(1) COUNT OF STALKING/FEAR FOR SAFETY"
            }
        ],
        state:"AZ",
        mugshot: Wizard,
        isMugShot:false,
        arrestURL:"https://archive.is/FOqOc",
        courtURLs:[]
    },
    {
        date:"2018-11-29",
        charges:[
            {
                title:"HARASSMENT - 3RD DEGREE"
            },
            {
                title:"INTERFERENCE WITH OFFICIAL ACTS"
            },
        ],
        state:"IA",
        mugshot: Arrest2,
        isMugShot:true,
        arrestURL:"https://archive.is/zmr0d",
        courtURLs:[]
    },
    {
        date:"2021-08-21",
        charges:[
            {
                title:"FLEEING A PEACE OFFICER BY A MEANS OTHER THAN A MOTOR VEHICLE "
            },
        ],
        state:"MN",
        mugshot: Wizard,
        isMugShot:true,
        arrestURL:"https://archive.is/PSMUA",
        courtURLs:[]
    },
    {
        date:"2021-08-05",
        charges:[
            {
                title:"HARASSMENT - THIRD OR SUBSEQUENT VIOLATION IN 10 YEARS"
            },
        ],
        state:"MN",
        mugshot: Wizard,
        isMugShot:true,
        arrestURL:"https://archive.is/AhJku",
        courtURLs:[]
    },
    {
        date:"2021-04-28",
        charges:[
            {
                title:"PAROLE VIOLATION"
            },
        ],
        state:"MN",
        mugshot: Arrest3,
        isMugShot:true,
        arrestURL:"https://archive.is/AhJku",
        courtURLs:[]
    },
    {
        date:"2019-08-04",
        charges:[
        ],
        state:"MN",
        mugshot: Wizard,
        isMugShot:false,
        arrestURL:"https://archive.is/Ac6g5",
        courtURLs:[]
    },
    {
        date:"2019-06-06",
        charges:[
            {title:"STALKING - FOLLOW, MONITOR, PURSUES ANOTHER {609.749.2(2)}"},
            {title:"HARASSMENT - VIOLATION OF RESTRAINING ORDER {609.748.6(a)}"},
            {title:"DOMESTIC ABUSE NO CONTACT ORDER - VIOLATE NO CONTACT ORDER WITHIN 10 YEARS OF PREVIOUS CONVICTION {629.75.2(c)}"},
        ],
        state:"MN",
        mugshot: Arrest4,
        isMugShot:true,
        arrestURL:"https://archive.is/Znslm",
        courtURLs:[]
    },
    {
        date:"2019-04-18",
        charges:[
            {title:"STALKING - FOLLOW, MONITOR, PURSUES ANOTHER {609.749.2(2)}"},
        ],
        state:"MN",
        mugshot: Wizard,
        isMugShot:false,
        arrestURL:"https://archive.is/bAFpk",
        courtURLs:[]
    },
    {
        date:"2015-04-30",
        charges:[
            {title:"HARASSMENT - VIOLATION OF RESTRAINING ORDER {609.749.2(2)}"},
        ],
        state:"MN",
        mugshot: Arrest5,
        isMugShot:true,
        arrestURL:"https://archive.is/qVRvn",
        courtURLs:[]
    },
    
]

export const caseInfo = [
    {
        caseInformation:{
            number:"02-CR-15-2212",
            title:"State of Minnesota vs ZAHI JAMAL RASHID",
            related:["27-CR-21-14478"],
            county:"Anoka County",
            state:"MN",
            date:"2015-04-13"
        },
        charges:[
            {
                level:"Misdemeanor",
                title:"MISDEMEANOR VIOLATION OF A HARASSMENT RESTRAINING ORDER",
                statute:"609.748.6(a)",
                date:"2015-02-13",
                LEA:"Blaine Police Department",
                prosecutor:"Blaine City Attorney",
                disposition:{
                    status:"Convicted",
                    date:"2015-06-03",
                },
            }
        ],
        sentence:{
            confinement:true,
            confinementDuration:"90 days",
            probation:true,
            probationDuration:"1 year"
        }
    },
    {
        caseInformation:{
            number:"27-CR-21-14478",
            title:"State of Minnesota vs ZAHI JAMAL RASHID",
            related:["02-CR-15-2212","27-CR-16-4759","82-CR-16-5402","82-CR-19-1548"],
            county:"Hennepin County",
            state:"MN",
            date:"2021-08-06"
        },
        charges:[
            {
                level:"Felony",
                title:"Harassment - Third or Subsequent Violation in 10 years",
                statute:"609.748.6(a)",
                date:"2015-02-13",
                LEA:"Crystal Police Department",
                prosecutor:"Hennepin County Attorney",
                disposition:{
                    status:"Convicted",
                    date:"2015-06-03",
                },
                currentBalance:285,
                currentBalanceAsOf:"2023-02-11"
            }
        ],
        sentence:{
            confinement:true,
            confinementDuration:"90 days",
            probation:true,
            probationDuration:"1 year"
        }
    },
    
]