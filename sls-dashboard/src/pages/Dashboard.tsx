import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Server, Activity, HardDrive, Cpu, LogOut } from 'lucide-react';

export const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-sls-bg text-white">
      <nav className="bg-sls-card border-b border-sls-border px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Server className="text-sls-green" size={24} />
          <span className="font-bold text-lg">Sierra Leone Server</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-sls-muted">Logged in as <strong className="text-white">{user?.username}</strong></span>
          <button
            onClick={logout}
            className="flex items-center space-x-1 text-sm bg-sls-red/20 text-sls-red hover:bg-sls-red/30 px-3 py-1.5 rounded-md border border-sls-red/30 transition"
          >
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-6">
        <h1 className="text-2xl font-bold">System Status</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-sls-card border border-sls-border p-6 rounded-lg flex items-center space-x-4">
            <Cpu className="text-sls-purple" size={32} />
            <div>
              <p className="text-sm text-sls-muted">API Engine</p>
              <p className="text-xl font-bold text-sls-green">Online (Port 4000)</p>
            </div>
          </div>

          <div className="bg-sls-card border border-sls-border p-6 rounded-lg flex items-center space-x-4">
            <Activity className="text-sls-green" size={32} />
            <div>
              <p className="text-sm text-sls-muted">System Daemon</p>
              <p className="text-xl font-bold text-sls-green">Active (Port 4001)</p>
            </div>
          </div>

          <div className="bg-sls-card border border-sls-border p-6 rounded-lg flex items-center space-x-4">
            <HardDrive className="text-blue-400" size={32} />
            <div>
              <p className="text-sm text-sls-muted">Database Pool</p>
              <p className="text-xl font-bold text-sls-green">Connected</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
