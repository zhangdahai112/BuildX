import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ProjectCard } from './ProjectCard';
import { mockProjects, mockUser, mockBillingData } from '../../data/mockData';
import { 
  TrendingUp, 
  Users, 
  Server, 
  Activity, 
  Plus, 
  ArrowRight, 
  Zap,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export const Dashboard = ({ onCreateProject, onOpenProject }) => {
  const [projects] = useState(mockProjects);

  const stats = [
    {
      title: 'Active Projects',
      value: projects.filter(p => p.status === 'deployed').length,
      icon: Server,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      trend: '+2 this month'
    },
    {
      title: 'Total Deployments',
      value: '12',
      icon: TrendingUp,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      trend: '+4 this week'
    },
    {
      title: 'API Credits Used',
      value: `${mockBillingData.usage.apiCalls.current}`,
      icon: Zap,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      trend: `/${mockBillingData.usage.apiCalls.limit} limit`
    },
    {
      title: 'Build Time Avg',
      value: '2.3m',
      icon: Clock,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      trend: '-15% vs last month'
    }
  ];

  const recentActivity = [
    { type: 'deployment', message: 'AI Recipe Generator deployed successfully', time: '2 hours ago', icon: CheckCircle, color: 'text-green-600' },
    { type: 'build', message: 'TaskFlow Manager build completed', time: '4 hours ago', icon: Activity, color: 'text-blue-600' },
    { type: 'warning', message: 'API usage reached 80% of limit', time: '1 day ago', icon: AlertCircle, color: 'text-yellow-600' },
    { type: 'deployment', message: 'EcoTracker paused by user', time: '2 days ago', icon: Clock, color: 'text-gray-600' }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Welcome back, {mockUser.name}! 👋
            </h1>
            <p className="text-gray-600">
              You have {projects.filter(p => p.status === 'building').length} projects building and {projects.filter(p => p.status === 'deployed').length} deployed.
            </p>
          </div>
          <Button 
            onClick={onCreateProject}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105"
          >
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                  {stat.trend}
                </Badge>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.title}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Projects */}
        <div className="lg:col-span-2">
          <Card className="border-0 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-semibold">Recent Projects</CardTitle>
              <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                View All
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.slice(0, 4).map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project}
                    onOpen={onOpenProject}
                    onDeploy={(project) => console.log('Deploy:', project)}
                    onEdit={(project) => console.log('Edit:', project)}
                    onDelete={(project) => console.log('Delete:', project)}
                  />
                ))}
              </div>
              {projects.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Server className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No projects yet</h3>
                  <p className="text-gray-500 mb-4">Create your first project to get started</p>
                  <Button onClick={onCreateProject} className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Project
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Activity Feed */}
        <div className="space-y-6">
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`mt-1 p-1 rounded-full ${activity.color}`}>
                      <activity.icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">{activity.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full justify-start hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200"
                onClick={onCreateProject}
              >
                <Plus className="h-4 w-4 mr-2" />
                Create New Project
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200"
              >
                <Activity className="h-4 w-4 mr-2" />
                View Analytics
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start hover:bg-green-50 hover:text-green-600 hover:border-green-200"
              >
                <Users className="h-4 w-4 mr-2" />
                Invite Team Members
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};