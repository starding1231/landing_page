/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ContentProvider } from './store/ContentContext';
import LandingPage from './components/LandingPage';
import AdminDashboard from './components/AdminDashboard';
import { Settings, Eye } from 'lucide-react';

export default // MIME fix trigger
function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  // Simple shortcut: Alt+A to toggle admin
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key === 'a') {
        setIsAdmin(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <ContentProvider>
      <div className="relative">
        {isAdmin ? <AdminDashboard /> : <LandingPage />}
        
        {/* Admin Toggle Floating Button (Internal Use) */}
        <button 
          onClick={() => setIsAdmin(!isAdmin)}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/20 transition-all z-[9999]"
          title="Toggle Admin/Preview (Alt+A)"
        >
          {isAdmin ? <Eye size={20} /> : <Settings size={20} />}
        </button>
      </div>
    </ContentProvider>
  );
}
