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
        width: 200,
        editable: false,
    },
    {
        field: 'city',
        headerName: 'City',
        width: 200,
        editable: false,
    },
    {
        field: 'title',
        headerName: 'Title',
        width: 400,
        editable: false,
    },
];

export default function EmploymentCompleteTable(props) {
    const rows = props.professionalEmploymentInformation.map((employment, key) => (
        {
            id: key + 0,
            employer: employment.employer,
            degree: employment.degree,
            city: employment.city,
            title: employment.title,
        }));

    return (
        <Box sx={{ height: 600, alignItems: 'center', justifyContent: 'center', margin: '3em', marginLeft: '15em', marginRight: '15em', backgroundColor: 'whitesmoke' }}>
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