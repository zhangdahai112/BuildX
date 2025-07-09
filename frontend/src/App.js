import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import { useToast } from "./hooks/use-toast";

// Components
import { Hero } from "./components/Landing/Hero";
import { Header } from "./components/Layout/Header";
import { Sidebar } from "./components/Layout/Sidebar";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Templates } from "./components/Templates/Templates";
import { BuilderWizard } from "./components/Builder/BuilderWizard";
import { PageLoader } from "./components/ui/loading";

// Mock Data
import { mockUser } from "./data/mockData";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentProject, setCurrentProject] = useState(null);
  const [showBuilder, setShowBuilder] = useState(false);
  const { toast } = useToast();

  // Simulate authentication check
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAuthenticated(true);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = () => {
    setIsAuthenticated(true);
    setActiveTab('dashboard');
    toast({
      title: "Welcome to Emergent! 🎉",
      description: "You're now logged in and ready to build amazing apps.",
    });
  };

  const handleWatchDemo = () => {
    toast({
      title: "Demo Coming Soon! 🎬",
      description: "We're preparing an amazing demo for you.",
    });
  };

  const handleCreateProject = () => {
    setActiveTab('templates');
    toast({
      title: "Choose a Template 🎨",
      description: "Select a template to get started with your project.",
    });
  };

  const handleUseTemplate = (template) => {
    setCurrentProject({
      name: `My ${template.name}`,
      template: template.name,
      description: template.description,
      techStack: template.techStack
    });
    setShowBuilder(true);
    toast({
      title: "Building Your Project! 🚀",
      description: `AI is now building your ${template.name} project.`,
    });
  };

  const handleOpenProject = (project) => {
    setCurrentProject(project);
    toast({
      title: `Opening ${project.name} 📂`,
      description: "Loading your project workspace...",
    });
  };

  const handleBuilderComplete = () => {
    setShowBuilder(false);
    setActiveTab('dashboard');
    toast({
      title: "Project Built Successfully! 🎉",
      description: "Your project is ready for deployment.",
    });
  };

  const handleBuilderCancel = () => {
    setShowBuilder(false);
    setCurrentProject(null);
    setActiveTab('dashboard');
  };

  const handleNotifications = () => {
    toast({
      title: "Notifications 🔔",
      description: "You have 2 new notifications.",
    });
  };

  const handleSettings = () => {
    setActiveTab('settings');
  };

  if (isLoading) {
    return <PageLoader />;
  }

  if (showBuilder) {
    return (
      <div className="min-h-screen bg-gray-50">
        <BuilderWizard 
          project={currentProject}
          onComplete={handleBuilderComplete}
          onCancel={handleBuilderCancel}
        />
        <Toaster />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Hero 
          onGetStarted={handleGetStarted}
          onWatchDemo={handleWatchDemo}
        />
        <Toaster />
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <Dashboard 
            onCreateProject={handleCreateProject}
            onOpenProject={handleOpenProject}
          />
        );
      case 'templates':
        return (
          <Templates 
            onUseTemplate={handleUseTemplate}
          />
        );
      case 'projects':
        return (
          <Dashboard 
            onCreateProject={handleCreateProject}
            onOpenProject={handleOpenProject}
          />
        );
      case 'deployments':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Deployments</h2>
            <p className="text-gray-600">Manage your application deployments</p>
          </div>
        );
      case 'ai-models':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">AI Models</h2>
            <p className="text-gray-600">Configure and monitor your AI models</p>
          </div>
        );
      case 'analytics':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Analytics</h2>
            <p className="text-gray-600">View detailed analytics and insights</p>
          </div>
        );
      case 'billing':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Billing</h2>
            <p className="text-gray-600">Manage your subscription and billing</p>
          </div>
        );
      case 'settings':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Settings</h2>
            <p className="text-gray-600">Configure your account and preferences</p>
          </div>
        );
      case 'help':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Help & Support</h2>
            <p className="text-gray-600">Get help and support for your projects</p>
          </div>
        );
      default:
        return (
          <Dashboard 
            onCreateProject={handleCreateProject}
            onOpenProject={handleOpenProject}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onCreateProject={handleCreateProject}
        onOpenNotifications={handleNotifications}
        onOpenSettings={handleSettings}
      />
      <div className="flex">
        <Sidebar 
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        <main className="flex-1 ml-64 p-8">
          {renderContent()}
        </main>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
