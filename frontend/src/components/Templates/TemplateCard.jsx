import React from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Star, Clock, Users, ExternalLink, Download, Heart } from 'lucide-react';

export const TemplateCard = ({ template, onUse, onPreview, onFavorite }) => {
  const difficultyColors = {
    Beginner: 'bg-green-100 text-green-800',
    Intermediate: 'bg-yellow-100 text-yellow-800',
    Advanced: 'bg-red-100 text-red-800'
  };

  const categoryColors = {
    'SaaS': 'bg-blue-100 text-blue-800',
    'E-commerce': 'bg-purple-100 text-purple-800',
    'Analytics': 'bg-indigo-100 text-indigo-800',
    'Education': 'bg-emerald-100 text-emerald-800',
    'Social': 'bg-pink-100 text-pink-800'
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="pb-3">
        <div className="relative">
          {/* Preview Image */}
          <div className="relative rounded-lg overflow-hidden bg-gray-100 mb-4">
            <img 
              src={template.preview} 
              alt={template.name}
              className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Favorite Button */}
            <Button
              onClick={() => onFavorite(template)}
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white"
            >
              <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
            </Button>

            {/* Popularity Badge */}
            <Badge className="absolute top-2 left-2 bg-white/90 text-gray-700 backdrop-blur-sm">
              {template.popularity}% popular
            </Badge>
          </div>

          {/* Template Info */}
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <CardTitle className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                {template.name}
              </CardTitle>
              <p className="text-sm text-gray-600 line-clamp-2">{template.description}</p>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge className={`text-xs ${categoryColors[template.category] || 'bg-gray-100 text-gray-800'}`}>
              {template.category}
            </Badge>
            <Badge className={`text-xs ${difficultyColors[template.difficulty] || 'bg-gray-100 text-gray-800'}`}>
              {template.difficulty}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        {/* Features */}
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features</h4>
          <div className="flex flex-wrap gap-1">
            {template.features.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                {feature}
              </Badge>
            ))}
            {template.features.length > 3 && (
              <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                +{template.features.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-1">
            {template.techStack.slice(0, 4).map((tech, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {template.techStack.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{template.techStack.length - 4}
              </Badge>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span>{template.rating}</span>
            <span>({template.reviews})</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{template.estimatedTime}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button 
            onClick={() => onUse(template)}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium transition-all duration-200 hover:scale-105"
          >
            <Download className="h-4 w-4 mr-2" />
            Use Template
          </Button>
          <Button 
            onClick={() => onPreview(template)}
            variant="outline" 
            className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};