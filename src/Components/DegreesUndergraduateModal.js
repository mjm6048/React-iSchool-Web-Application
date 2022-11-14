import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function DegreesUndergraduateModal({ title, description, concentrations}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h3" component="h2">
                        {title}
                    </Typography>
                    <Typography id="modal-modal-title" variant="h5" component="h3">
                        Concentrations
                    </Typography>
                    <hr/>
                    <Typography id="modal-modal-title" variant="h5" component="ul">
                        {concentrations[0]}
                    </Typography>
                    <Typography id="modal-modal-title" variant="h5" component="ul">
                        {concentrations[1]}
                    </Typography>
                    <Typography id="modal-modal-title" variant="h5" component="ul">
                        {concentrations[2]}
                    </Typography>
                    <Typography id="modal-modal-title" variant="h5" component="ul">
                        {concentrations[3]}
                    </Typography>
                    <Typography id="modal-modal-title" variant="h5" component="ul">
                        {concentrations[4]}
                    </Typography>
                    <Typography id="modal-modal-title" variant="h5" component="ul">
                        {concentrations[5]}
                    </Typography>
                </Box>
            </Modal>
            
            <Button onClick={handleOpen}><ControlPointIcon> fontSize="large"</ControlPointIcon></Button>
            <p>Click to find out more.</p>
        </div>
    );
}
