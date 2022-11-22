import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 90,
        editable: false,
        filterable: false,
    },
    {
        field: 'employer',
        headerName: 'Employer',
        width: 400,
        editable: false,
    },
    {
        field: 'degree',
        headerName: 'Degree',
        width: 150,
        editable: false,
    },
    {
        field: 'city',
        headerName: 'City',
        width: 150,
        editable: false,
    },
    {
        field: 'term',
        headerName: 'Term',
        width: 150,
        editable: false,
    },
];

export default function EmploymentCompleteTable(props) {
    const rows = props.coopInformation.map((coop, key) => (
        {
            id: key + 0,
            employer: coop.employer,
            degree: coop.degree,
            city: coop.city,
            term: coop.term,
        }));

    return (
        <Box sx={{ height: 600, alignItems: 'center', justifyContent: 'center', margin: '3em', marginLeft: '15em', marginRight: '15em' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                columnVisibilityModel={{
                    id: false,
                }}
                pageSize={100}
                rowsPerPageOptions={[5, 10, 15, 20, 50, 75, 100]}
                pagination
            />
        </Box>
    );
}