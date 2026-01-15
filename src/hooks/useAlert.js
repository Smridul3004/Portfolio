import { useState } from 'react'

const useAlert = () => {
    const [alertMessage, setAlertMessage] = useState({ show: false, text: '', type: 'danger' });

    const showAlert = ({ text, type }) => {
        setAlertMessage({ show: true, text: text, type: type });
    }
    const hideAlert = () => {
        setAlertMessage({ ...alertMessage, show: false });
    }

    return (
        { alertMessage, showAlert, hideAlert }
    )
}

export default useAlert