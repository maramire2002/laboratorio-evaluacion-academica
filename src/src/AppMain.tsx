import React from 'react';
import { useAuth } from '../hooks/useAuth';
import ErrorBoundary from '../components/ErrorBoundary';
import Layout from '../components/layout/Layout';
import Login from '../components/auth/Login';
import DashboardAlumno from '../components/dashboards/DashboardAlumno';
import DashboardDocente from '../components/dashboards/DashboardDocente';
import { Toaster } from '../components/ui/toaster';
const AppContent: React.FC = () => {
const { isAuthenticated, isDocente, isAlumno } = useAuth();
// Si no está autenticado, mostrar login
if (!isAuthenticated) {
return <Login onLoginSuccess={() => {}} />;
}
// Si está autenticado, mostrar el dashboard correspondiente
return (
<Layout>
{isDocente && <DashboardDocente />}
{isAlumno && <DashboardAlumno />}
</Layout>
);
};
function App() {
return (
<ErrorBoundary>
<AuthProvider>
<div className="App">
<AppContent />
<Toaster />
</div>
</AuthProvider>
</ErrorBoundary>
);
}
export default App;
