
import React, { useEffect, useRef } from 'react'
import { Toast } from 'primereact/toast';

export const Alerts = ({ message, error }) => {

  const toast = useRef(null);

  const displayError = () => {
    toast.current.show({ severity: 'error', summary: 'Error de Autenticación', detail: message, life: 5000 });
  }

  if (error && message) {
    displayError();
  }

  return (
    <Toast ref={toast}></Toast>
  )
}
