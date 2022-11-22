import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function PeopleModal({ name, tagline, title, interestArea, office,
    website, phone, email, twitter, facebook, imagePath, username }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>{name}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h3" component="h2">
                        {name}
                    </Typography>
                    <Typography id="modal-modal-title" variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography id="modal-modal-title" variant="h5" component="h2">
                        {tagline}
                    </Typography>
                    <img src={imagePath} alt="Faculty/Staff Person" />
                    {email &&
                        <Typography sx={{ mt: 2 }}>
                            Email: {email}
                        </Typography>
                    }
                    {/* cool if true then show website link */}
                    {website &&
                        <Typography sx={{ mt: 2 }}>
                            Website: <a href={website} target="_blank" rel="noreferrer">Site</a>
                        </Typography>
                    }
                    {interestArea &&
                        <Typography sx={{ mt: 2 }}>
                            Interest Areas: {interestArea}
                        </Typography>
                    }
                    {office &&
                        <Typography sx={{ mt: 2 }}>
                            Office: {office}
                        </Typography>
                    }
                    {phone &&
                        <Typography sx={{ mt: 2 }}>
                            Phone: {phone}
                        </Typography>
                    }
                </Box>
            </Modal>
        </div>
    );
}
