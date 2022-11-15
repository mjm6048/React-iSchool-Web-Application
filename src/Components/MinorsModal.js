import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Courses from './Courses';
//import created to properly display escaped characters like &(&amp)
import {decode} from 'html-entities';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MinorsModal({ name, title, description, courses, note }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <h3>{title}</h3>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h3" component="h2">
                        Minor: {title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {description}
                    </Typography>
                    {
                        courses.map((p) =>
                            <Typography id="modal-modal-title" variant="h5" component="ul">
                                <Courses>{decode(p)}</Courses>
                            </Typography>
                        )
                    }
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {note}
                    </Typography>
                </Box>
            </Modal>
            <Button onClick={handleOpen}><ControlPointIcon color="secondary"> fontSize="large"</ControlPointIcon></Button>
            <p>Click to find out more.</p>
        </div>
    );
}
