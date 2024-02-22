import React from 'react'
import { Button, Link } from '@chakra-ui/react';
import MANOJ_PADHY_RESUME from '../assests/MANOJ_PADHY_RESUME.pdf'

const onClickhandler = () => {
    return window.open(
        "https://drive.google.com/file/d/1i7o3gjhndVvxqyHPW3uRTIwjWshnUipP/view",
        "_blank"
    );
};


export default function Resume() {
    return (
        <div className="nav-link resume">
            <Button
                colorScheme='teal' variant="ghost"
                _hover={{ textDecoration: 'none', bg: 'teal.50' }}
                as={Link}
                target="_blank"
                id="resume-button-1"
                href={MANOJ_PADHY_RESUME}
                download={true}
                onClick={onClickhandler}
            >
                Resume
            </Button>
        </div>
    )
}
