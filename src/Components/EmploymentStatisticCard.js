import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function EmploymentStatisticCard(value, description, color, textColor) {
    const cardColor = color;
    const tColor = textColor;
    return (
        <Card sx={{ minWidth: 200 }} style={{ backgroundColor: cardColor, color: tColor }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {value}
                </Typography>
                <Typography sx={{ mb: 1.5 }}>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}