import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear any stored user data
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>Dashboard</h1>
                <button onClick={handleLogout} className="btn-logout">
                    Logout
                </button>
            </header>
            <div className="dashboard-content">
                <h2>Welcome to CineTrack!</h2>
                <p>Your movie tracking dashboard</p>
            </div>
        </div>
    );
}

export default Dashboard;