import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import getData from '../util/getData';

export default class BasicCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employment: {},
            loaded: false
        }
    }
    render() {
        const { employment, loaded } = this.state;

        if (!loaded) return (<div><h1>Our Employment Statistic Card is Loading...</h1></div>);

        return (
            <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {employment.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {employment.content}
                </Typography>
                <Typography variant="body2">
                    {employment.description}
                </Typography>
            </CardContent>
        </Card>
        );
    }
    componentDidMount() {
        getData('employment/')
            .then((json) => {
                this.setState({
                    employment: json,
                    loaded: true
                })
            })
    }
}

// export default function BasicCard({title, contentTitle, description}) {
//     return (
//         <Card sx={{ minWidth: 275 }}>
//             <CardContent>
//                 <Typography variant="h5" component="div">
//                     title
//                 </Typography>
//                 <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                     {contentTitle}
//                 </Typography>
//                 <Typography variant="body2">
//                     {description}
//                 </Typography>
//             </CardContent>
//         </Card>
//     );
// }