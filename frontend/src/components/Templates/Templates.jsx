import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { TemplateCard } from './TemplateCard';
import { mockTemplates } from '../../data/mockData';
import { Search, Filter, Star, Clock, TrendingUp, Grid, List } from 'lucide-react';

export const Templates = ({ onUseTemplate }) => {
  const [templates] = useState(mockTemplates);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState('grid');

  const categories = ['all', 'SaaS', 'E-commerce', 'Analytics', 'Education', 'Social'];
  const difficulties = ['all', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || template.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'popularity':
        return b.popularity - a.popularity;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return new Date(b.createdAt) - new Date(a.createdAt);
      default:
        return 0;
    }
  });

  const handleUseTemplate = (template) => {
    onUseTemplate(template);
  };

  const handlePreview = (template) => {
    window.open(template.demoUrl, '_blank');
  };

  const handleFavorite = (template) => {
    console.log('Favoriting template:', template.name);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Template Library</h1>
          <p className="text-gray-600">
            Start with professionally designed templates and customize them to your needs
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setViewMode('grid')}
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setViewMode('list')}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Difficulty Filter */}
            <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
              <SelectTrigger className="w-full lg:w-40">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                {difficulties.map(difficulty => (
                  <SelectItem key={difficulty} value={difficulty}>
                    {difficulty === 'all' ? 'All Levels' : difficulty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort By */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full lg:w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">
                  <div className="flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Popularity
                  </div>
                </SelectItem>
                <SelectItem value="rating">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-2" />
                    Rating
                  </div>
                </SelectItem>
                <SelectItem value="newest">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Newest
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Results Info */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Showing {filteredTemplates.length} template{filteredTemplates.length !== 1 ? 's' : ''}
        </p>
        <div className="flex items-center space-x-2">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            {templates.filter(t => t.category === 'SaaS').length} SaaS
          </Badge>
          <Badge variant="secondary" className="bg-purple-100 text-purple-800">
            {templates.filter(t => t.category === 'E-commerce').length} E-commerce
          </Badge>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            {templates.filter(t => t.difficulty === 'Beginner').length} Beginner
          </Badge>
        </div>
      </div>

      {/* Templates Grid */}
      <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
        {filteredTemplates.map((template) => (
          <TemplateCard
            key={template.id}
            template={template}
            onUse={handleUseTemplate}
            onPreview={handlePreview}
            onFavorite={handleFavorite}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredTemplates.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No templates found</h3>
          <p className="text-gray-500 mb-4">Try adjusting your filters or search terms</p>
          <Button onClick={() => {
            setSearchTerm('');
            setSelectedCategory('all');
            setSelectedDifficulty('all');
          }}>
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};