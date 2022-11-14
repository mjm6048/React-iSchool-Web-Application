import React from 'react';
import { Card } from 'semantic-ui-react';
import getData from '../util/getData';
import Minors from './Minors';

const items = [
  {
    header: 'Project Report - May',
    description:
      'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%',
  },
  {
    header: UgMinors.name,
    description:
      'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
    meta: 'ROI: 27%',
  },
]

const CardExampleGroupProps = () => <Card.Group items={items} />

export default CardExampleGroupProps


// export default class MinorsCards extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             minors: {},
//             loaded: false
//         }
//     }
//     render() {
//         const { minors, loaded } = this.state;
//         // const panes = [
//         //     {
//         //         menuItem: 'WMC', render: () =>
//         //             <Tab.Pane>
//         //                 <Degrees key="1" title="WMC" />
//         //             </Tab.Pane>
//         //     },
//         //     {
//         //         menuItem: 'HCC', render: () =>
//         //             <Tab.Pane>
//         //                 <Degrees key="2" title="HCC" />
//         //             </Tab.Pane>
//         //     },
//         //     {
//         //         menuItem: 'CIT', render: () =>
//         //             <Tab.Pane>
//         //                 <Degrees key="3" title="CIT" />
//         //             </Tab.Pane>
//         //     }
//         // ]

//         const items = [
//             {
//                 header: 'Database Design, Development, and Implementation (DBDDI-MN)',
//                 description:
//                     'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
//                 meta: 'ROI: 30%',
//             },
            
//         ]

//         if (!loaded) return (<div><h1>Our Minors are Loading...</h1></div>);

//         return (
//             <div>
//                 <h1>CAUSE IM STILL HEREEEEE</h1>
//                 <h2>{minors.name}</h2>
                
//                 {/* <p>{degrees.concentrations}</p> */}
//                 <Card items={items} />
//             </div>
//         );
//     }
//     componentDidMount() {
//         getData('minors/')
//             .then((json) => {
//                 this.setState({
//                     minors: json,
//                     loaded: true
//                 })
//             })
//     }
// }