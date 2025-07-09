import React from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { 
  Home, 
  FolderOpen, 
  Template, 
  Rocket, 
  Settings, 
  BarChart3, 
  Cpu, 
  CreditCard,
  HelpCircle,
  Sparkles
} from 'lucide-react';

export const Sidebar = ({ activeTab, onTabChange }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'templates', label: 'Templates', icon: Template, badge: 'New' },
    { id: 'deployments', label: 'Deployments', icon: Rocket },
    { id: 'ai-models', label: 'AI Models', icon: Cpu },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'help', label: 'Help & Support', icon: HelpCircle }
  ];

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="p-4 space-y-2">
        {/* AI Assistant Banner */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-3 mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">AI Assistant</span>
          </div>
          <p className="text-xs text-blue-700 mb-2">
            Get help with your projects and discover new possibilities
          </p>
          <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Ask AI
          </Button>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <Button
                key={item.id}
                variant={isActive ? "default" : "ghost"}
                className={`w-full justify-start h-10 transition-all duration-200 ${
                  isActive 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md' 
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
                onClick={() => onTabChange(item.id)}
              >
                <Icon className="h-4 w-4 mr-3" />
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge && (
                  <Badge variant="secondary" className="ml-auto text-xs">
                    {item.badge}
                  </Badge>
                )}
              </Button>
            );
          })}
        </nav>

        {/* Credits Display */}
        <div className="mt-6 p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">API Credits</span>
            <span className="text-sm text-gray-500">250 left</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
          </div>
          <p className="text-xs text-gray-500 mt-1">Resets in 12 days</p>
        </div>
      </div>
    </aside>
  );
};