import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function EmploymentStatisticCard(value, description, color) {
    return (
        <Card sx={{ minWidth: 275 }} style={{backgroundColor: "red"}}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {value}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}