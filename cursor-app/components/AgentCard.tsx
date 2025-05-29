'use client';

import { AgentInfo } from '../lib/api';

interface AgentCardProps {
  agent: AgentInfo & { key?: string };
  isSelected?: boolean;
  onSelect?: (agentKey: string) => void;
  showStats?: boolean;
  confidence?: number;
}

export default function AgentCard({ 
  agent, 
  isSelected = false, 
  onSelect, 
  showStats = false,
  confidence 
}: AgentCardProps) {
  const handleClick = () => {
    if (onSelect && agent.key) {
      onSelect(agent.key);
    }
  };

  const getAgentAvatar = (name: string) => {
    // Generate consistent colors based on name
    const colors = [
      'bg-blue-500', 'bg-green-500', 'bg-purple-500', 
      'bg-red-500', 'bg-yellow-500', 'bg-indigo-500'
    ];
    const colorIndex = name.length % colors.length;
    return colors[colorIndex];
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div
      className={`
        relative p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer
        ${isSelected 
          ? 'border-blue-500 bg-blue-50 shadow-md' 
          : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
        }
        ${onSelect ? 'hover:scale-105' : ''}
      `}
      onClick={handleClick}
    >
      {/* Selection indicator */}
      {isSelected && (
        <div className="absolute top-2 right-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      )}

      {/* Agent Avatar */}
      <div className="flex items-center mb-3">
        <div className={`w-12 h-12 ${getAgentAvatar(agent.name)} rounded-full flex items-center justify-center text-white font-bold text-sm mr-3`}>
          {getInitials(agent.name)}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 text-sm">{agent.name}</h3>
          <p className="text-xs text-gray-600">{agent.role}</p>
        </div>
      </div>

      {/* Expertise */}
      <div className="mb-3">
        <p className="text-xs text-gray-700 font-medium mb-1">Expertise</p>
        <p className="text-xs text-gray-600 leading-relaxed">{agent.expertise}</p>
      </div>

      {/* Focus Areas */}
      <div className="mb-3">
        <p className="text-xs text-gray-700 font-medium mb-2">Focus Areas</p>
        <div className="flex flex-wrap gap-1">
          {agent.focus_areas.slice(0, 3).map((area, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
            >
              {area}
            </span>
          ))}
          {agent.focus_areas.length > 3 && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              +{agent.focus_areas.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Stats (when showing results) */}
      {showStats && confidence !== undefined && (
        <div className="pt-2 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Confidence</span>
            <div className="flex items-center">
              <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${confidence * 100}%` }}
                ></div>
              </div>
              <span className="text-xs font-medium text-gray-900">
                {Math.round(confidence * 100)}%
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Personality hint */}
      <div className="mt-2 pt-2 border-t border-gray-100">
        <p className="text-xs text-gray-500 italic truncate" title={agent.personality}>
          {agent.personality}
        </p>
      </div>
    </div>
  );
} 