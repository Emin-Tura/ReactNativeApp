import React from 'react';
import AuthProvider from './context/AuthProvider';
import Router from './Router';

function Wrapper() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default Wrapper;
