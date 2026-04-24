import React from 'react';
import { Shield, Zap, MapPin, Globe } from 'lucide-react';

const ActionCarousel = () => {
  const actions = [
    { icon: <Shield size={16} />, label: "Safety Status" },
    { icon: <Zap size={16} />, label: "Find Charger" },
    { icon: <MapPin size={16} />, label: "Hidden Gems" },
    { icon: <Globe size={16} />, label: "Translate Sign" }
  ];

  return (
    <div style={{ 
      display: 'flex', 
      gap: '0.75rem', 
      overflowX: 'auto', 
      paddingBottom: '0.5rem',
      msOverflowStyle: 'none',
      scrollbarWidth: 'none'
    }}>
      {actions.map((action, i) => (
        <button key={i} className="glass" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.6rem 1.2rem',
          borderRadius: 'var(--radius-full)',
          whiteSpace: 'nowrap',
          color: 'var(--text-secondary)',
          fontSize: '0.85rem',
          fontWeight: 500,
          border: '1px solid var(--glass-border)'
        }}>
          {action.icon}
          {action.label}
        </button>
      ))}
    </div>
  );
};

export default ActionCarousel;
