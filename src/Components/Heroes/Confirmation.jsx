import React from 'react';
import { Toast } from 'react-bootstrap';

export function Confirmation({ name, toggle }) {
    return (
        <Toast onClose={() => toggle(false)}>
            <Toast.Header>
                <strong className="mr-auto"> {`${name} was added to your team`}</strong>
            </Toast.Header>
        </Toast>
    )
}