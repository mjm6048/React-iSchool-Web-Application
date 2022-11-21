import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 90,
        editable: false,
    },
    {
        field: 'employer',
        headerName: 'Employer',
        width: 150,
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
        field: 'title',
        headerName: 'Title',
        width: 150,
        editable: false,
    },
];

const rows = [
    { id: 1, employer: 'TEST ME', degree: 'HCIN-MS', city: 'MACKLEMORE', title: 'WEB DEVELOPER WOOHOO' },
    { id: 2, employer: 'TEST ME1', degree: 'HCIN-MS', city: 'MACKLEMORE', title: 'WEB DEVELOPER WOOHOO' },
    { id: 3, employer: 'TEST ME2', degree: 'HCIN-MS', city: 'MACKLEMORE', title: 'WEB DEVELOPER WOOHOO' },
    { id: 4, employer: 'TEST ME3', degree: 'Test-MS', city: 'MACKLEMORE', title: 'WEB DEVELOPER WOOHOO' },
    { id: 5, employer: 'TEST ME4', degree: 'HCIN-MS', city: 'MACKLEMORE', title: 'WEB DEVELOPER WOOHOO' },
    { id: 6, employer: 'TEST ME5', degree: 'HCIN-MS', city: 'MACKLEMORE', title: 'WEB DEVELOPER WOOHOO' },
];

export default function EmploymentCompleteTable() {
    return (
        <Box sx={{ height: 600,  alignItems: 'center', justifyContent: 'center', margin: '3em', marginLeft:'15em', marginRight: '15em'}}>
            <DataGrid
                rows={rows}
                columns={columns}
                columnVisibilityModel={{
                    id:false,
                }}
                pageSize={9}
                rowsPerPageOptions={[100]}
            />
        </Box>
    );
}
