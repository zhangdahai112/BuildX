import React from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Calendar, ExternalLink, MoreHorizontal, Play, Pause, Trash2, Settings, GitBranch } from 'lucide-react';

export const ProjectCard = ({ project, onOpen, onDeploy, onEdit, onDelete }) => {
  const statusConfig = {
    deployed: { color: 'bg-green-500', text: 'Deployed', icon: '🚀' },
    building: { color: 'bg-blue-500', text: 'Building', icon: '🔨' },
    paused: { color: 'bg-yellow-500', text: 'Paused', icon: '⏸️' },
    failed: { color: 'bg-red-500', text: 'Failed', icon: '❌' }
  };

  const status = statusConfig[project.status] || statusConfig.paused;

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-lg">{status.icon}</span>
              <Badge 
                variant="outline" 
                className={`${status.color} text-white border-0 text-xs`}
              >
                {status.text}
              </Badge>
            </div>
            <CardTitle className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
              {project.name}
            </CardTitle>
            <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onOpen(project)}>
                <ExternalLink className="h-4 w-4 mr-2" />
                Open Project
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onEdit(project)}>
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onDeploy(project)}>
                <Play className="h-4 w-4 mr-2" />
                Deploy
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onDelete(project)} className="text-red-600">
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        {/* Preview Image */}
        <div className="relative mb-4 rounded-lg overflow-hidden bg-gray-100">
          <img 
            src={project.preview} 
            alt={project.name}
            className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1 mb-3">
          {project.techStack.slice(0, 3).map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 3 && (
            <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
              +{project.techStack.length - 3} more
            </Badge>
          )}
        </div>

        {/* Project Info */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{new Date(project.lastModified).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <GitBranch className="h-4 w-4" />
            <span>{project.type}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button 
            onClick={() => onOpen(project)}
            variant="outline" 
            size="sm" 
            className="flex-1 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors"
          >
            Open
          </Button>
          {project.deployUrl && (
            <Button 
              onClick={() => window.open(project.deployUrl, '_blank')}
              size="sm" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              Live
            </Button>
          )}
        </div>

        {/* Performance Metrics (if deployed) */}
        {project.performance && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="flex justify-between text-xs text-gray-500">
              <span>Uptime: {project.performance.uptime}%</span>
              <span>Response: {project.performance.responseTime}ms</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};