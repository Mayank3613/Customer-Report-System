import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Topbar = ({ title }) => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [showNotifications, setShowNotifications] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        // Simple mock global search logic
        if(searchTerm.trim()) {
            navigate(`/staff/customers?search=${encodeURIComponent(searchTerm)}`);
        }
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'rgba(255,255,255,0.02)',
            padding: '1rem 2rem',
            borderRadius: '12px',
            marginBottom: '2rem',
            border: '1px solid rgba(255,255,255,0.05)'
        }}>
            <div>
                <h2 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--text-primary)' }}>{title || 'Workspace'}</h2>
            </div>
            
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <form onSubmit={handleSearch} style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }}>🔍</span>
                    <input 
                        type="text" 
                        placeholder="Global search..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            background: 'rgba(0,0,0,0.3)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '20px',
                            padding: '0.5rem 1rem 0.5rem 2.2rem',
                            color: 'white',
                            width: '250px',
                            minWidth: '200px',
                            outline: 'none',
                            transition: 'all 0.3s'
                        }}
                    />
                </form>

                <div style={{ position: 'relative' }}>
                    <button 
                        onClick={() => setShowNotifications(!showNotifications)}
                        style={{ 
                            background: 'rgba(99, 102, 241, 0.1)', 
                            border: '1px solid rgba(99, 102, 241, 0.2)', 
                            width: '40px', 
                            height: '40px', 
                            borderRadius: '50%', 
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            transition: 'background 0.2s'
                        }}
                    >
                        <span style={{ fontSize: '1.2rem' }}>🔔</span>
                        {/* Notification Badge */}
                        <span style={{ position: 'absolute', top: '-2px', right: '-2px', background: '#ef4444', width: '12px', height: '12px', borderRadius: '50%', border: '2px solid var(--bg-primary)' }}></span>
                    </button>

                    {showNotifications && (
                        <div className="glass-card" style={{
                            position: 'absolute',
                            top: '50px',
                            right: '0',
                            width: '320px',
                            padding: '1rem',
                            zIndex: 1000,
                            boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
                        }}>
                            <h4 style={{ margin: '0 0 1rem 0', color: 'var(--text-primary)', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Notifications</h4>
                            
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '0.8rem', borderRadius: '8px', borderLeft: '3px solid #ef4444' }}>
                                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-primary)' }}><strong>SLA Alert:</strong> Resolution time exceeded for 2 reports.</p>
                                    <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Just now</span>
                                </div>
                                <div style={{ background: 'rgba(245, 158, 11, 0.1)', padding: '0.8rem', borderRadius: '8px', borderLeft: '3px solid #f59e0b' }}>
                                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-primary)' }}><strong>Task:</strong> 3 Customer Follow-ups scheduled for today.</p>
                                    <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>2 hours ago</span>
                                </div>
                            </div>
                            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                                <button style={{ background: 'transparent', border: 'none', color: '#818cf8', cursor: 'pointer', fontSize: '0.8rem' }}>Mark all as read</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Topbar;
