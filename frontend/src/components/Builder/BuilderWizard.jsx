import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { CheckCircle, Clock, AlertCircle, Play, Pause, RotateCcw } from 'lucide-react';
import { LoadingSpinner, LoadingDots } from '../ui/loading';
import { mockBuildSteps } from '../../data/mockData';

export const BuilderWizard = ({ project, onComplete, onCancel }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [buildSteps, setBuildSteps] = useState(mockBuildSteps);
  const [isBuilding, setIsBuilding] = useState(true);
  const [buildProgress, setBuildProgress] = useState(0);

  useEffect(() => {
    if (!isBuilding) return;

    const interval = setInterval(() => {
      setBuildSteps(prev => {
        const updated = [...prev];
        const currentBuildStep = updated.find(step => step.status === 'in-progress');
        
        if (currentBuildStep) {
          // Simulate progress
          const progress = Math.min(buildProgress + Math.random() * 10, 100);
          setBuildProgress(progress);
          
          if (progress >= 100) {
            currentBuildStep.status = 'completed';
            
            // Start next step
            const nextStepIndex = updated.findIndex(step => step.status === 'pending');
            if (nextStepIndex !== -1) {
              updated[nextStepIndex].status = 'in-progress';
              setBuildProgress(0);
              setCurrentStep(nextStepIndex);
            } else {
              // All steps completed
              setIsBuilding(false);
              setBuildProgress(100);
            }
          }
        }
        
        return updated;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isBuilding, buildProgress]);

  const getStepIcon = (step) => {
    switch (step.status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'in-progress':
        return <LoadingSpinner size="sm" className="text-blue-500" />;
      case 'pending':
        return <Clock className="h-5 w-5 text-gray-400" />;
      case 'failed':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStepColor = (step) => {
    switch (step.status) {
      case 'completed':
        return 'border-green-200 bg-green-50';
      case 'in-progress':
        return 'border-blue-200 bg-blue-50';
      case 'pending':
        return 'border-gray-200 bg-gray-50';
      case 'failed':
        return 'border-red-200 bg-red-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  const completedSteps = buildSteps.filter(step => step.status === 'completed').length;
  const totalSteps = buildSteps.length;
  const overallProgress = (completedSteps / totalSteps) * 100;

  const handlePause = () => {
    setIsBuilding(false);
  };

  const handleResume = () => {
    setIsBuilding(true);
  };

  const handleRestart = () => {
    setBuildSteps(mockBuildSteps.map((step, index) => ({
      ...step,
      status: index === 0 ? 'in-progress' : 'pending'
    })));
    setCurrentStep(0);
    setBuildProgress(0);
    setIsBuilding(true);
  };

  const isComplete = completedSteps === totalSteps;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="border-0 shadow-lg">
        <CardHeader className="text-center border-b">
          <CardTitle className="text-2xl font-bold text-gray-900">
            {isComplete ? '🎉 Build Complete!' : '🚀 Building Your Project'}
          </CardTitle>
          <p className="text-gray-600 mt-2">
            {isComplete 
              ? `${project?.name || 'Your project'} is ready to deploy!`
              : `AI is building ${project?.name || 'your project'} with the latest technologies`
            }
          </p>
        </CardHeader>

        <CardContent className="p-6">
          {/* Overall Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                Overall Progress
              </span>
              <span className="text-sm font-medium text-gray-900">
                {Math.round(overallProgress)}%
              </span>
            </div>
            <Progress value={overallProgress} className="h-2" />
          </div>

          {/* Build Steps */}
          <div className="space-y-4 mb-8">
            {buildSteps.map((step, index) => (
              <div 
                key={step.id}
                className={`p-4 rounded-lg border-2 transition-all duration-300 ${getStepColor(step)}`}
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    {getStepIcon(step)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{step.title}</h3>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary" className="text-xs">
                          ~{step.duration}s
                        </Badge>
                        {step.status === 'in-progress' && (
                          <Badge className="bg-blue-100 text-blue-800">
                            {Math.round(buildProgress)}%
                          </Badge>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                    
                    {/* Step Progress */}
                    {step.status === 'in-progress' && (
                      <div className="mb-3">
                        <Progress value={buildProgress} className="h-1" />
                      </div>
                    )}
                    
                    {/* Step Details */}
                    {step.details.length > 0 && (
                      <div className="space-y-1">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center text-xs text-gray-500">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                            {detail}
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Loading animation for current step */}
                    {step.status === 'in-progress' && (
                      <div className="flex items-center text-xs text-blue-600 mt-2">
                        <LoadingDots className="mr-2" />
                        <span>Processing...</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {!isComplete && (
                <>
                  {isBuilding ? (
                    <Button onClick={handlePause} variant="outline" size="sm">
                      <Pause className="h-4 w-4 mr-2" />
                      Pause Build
                    </Button>
                  ) : (
                    <Button onClick={handleResume} variant="outline" size="sm">
                      <Play className="h-4 w-4 mr-2" />
                      Resume Build
                    </Button>
                  )}
                  <Button onClick={handleRestart} variant="outline" size="sm">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Restart
                  </Button>
                </>
              )}
            </div>
            
            <div className="flex items-center space-x-2">
              <Button onClick={onCancel} variant="outline">
                {isComplete ? 'Close' : 'Cancel'}
              </Button>
              {isComplete && (
                <Button 
                  onClick={onComplete}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                >
                  Deploy Project
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};