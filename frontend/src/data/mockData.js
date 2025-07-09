// Mock data for the Emergent-like platform

export const mockUser = {
  id: 'user-123',
  name: 'Alex Johnson',
  email: 'alex@example.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  plan: 'Pro',
  credits: 250,
  joinDate: '2024-01-15'
};

export const mockProjects = [
  {
    id: 'proj-001',
    name: 'AI Recipe Generator',
    description: 'A smart recipe app that generates personalized recipes based on available ingredients',
    type: 'Full-stack App',
    template: 'React + FastAPI',
    status: 'deployed',
    deployUrl: 'https://ai-recipe-gen.example.com',
    createdAt: '2024-07-01',
    lastModified: '2024-07-15',
    preview: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop',
    techStack: ['React', 'FastAPI', 'OpenAI', 'MongoDB'],
    performance: { uptime: 99.9, responseTime: 120 }
  },
  {
    id: 'proj-002', 
    name: 'TaskFlow Manager',
    description: 'Collaborative task management with AI-powered insights and automation',
    type: 'SaaS Platform',
    template: 'Next.js + Supabase',
    status: 'building',
    deployUrl: null,
    createdAt: '2024-07-10',
    lastModified: '2024-07-20',
    preview: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
    techStack: ['Next.js', 'Supabase', 'Tailwind', 'Stripe'],
    performance: null
  },
  {
    id: 'proj-003',
    name: 'EcoTracker',
    description: 'Environmental impact tracking app with gamification and social features',
    type: 'Mobile App',
    template: 'React Native',
    status: 'paused',
    deployUrl: null,
    createdAt: '2024-06-20',
    lastModified: '2024-06-25',
    preview: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop',
    techStack: ['React Native', 'Firebase', 'Expo'],
    performance: null
  }
];

export const mockTemplates = [
  {
    id: 'template-001',
    name: 'AI-Powered SaaS Starter',
    description: 'Complete SaaS foundation with AI integration, authentication, and billing',
    category: 'SaaS',
    difficulty: 'Advanced',
    estimatedTime: '2 hours',
    popularity: 95,
    features: ['AI API Integration', 'User Authentication', 'Subscription Management', 'Admin Dashboard'],
    techStack: ['React', 'FastAPI', 'PostgreSQL', 'Stripe', 'OpenAI'],
    preview: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
    demoUrl: 'https://saas-starter-demo.example.com',
    rating: 4.8,
    reviews: 324
  },
  {
    id: 'template-002',
    name: 'E-commerce Mobile App',
    description: 'Modern mobile commerce app with payment integration and inventory management',
    category: 'E-commerce',
    difficulty: 'Intermediate',
    estimatedTime: '3 hours',
    popularity: 88,
    features: ['Product Catalog', 'Shopping Cart', 'Payment Processing', 'Order Tracking'],
    techStack: ['React Native', 'Node.js', 'MongoDB', 'PayPal'],
    preview: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
    demoUrl: 'https://ecommerce-mobile-demo.example.com',
    rating: 4.6,
    reviews: 256
  },
  {
    id: 'template-003',
    name: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management with real-time insights',
    category: 'Analytics',
    difficulty: 'Intermediate',
    estimatedTime: '1.5 hours',
    popularity: 92,
    features: ['Multi-platform Integration', 'Real-time Analytics', 'Custom Reports', 'Team Collaboration'],
    techStack: ['Vue.js', 'Python', 'Redis', 'Chart.js'],
    preview: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
    demoUrl: 'https://social-dashboard-demo.example.com',
    rating: 4.7,
    reviews: 198
  },
  {
    id: 'template-004',
    name: 'Learning Management System',
    description: 'Complete LMS with course creation, student tracking, and assessment tools',
    category: 'Education',
    difficulty: 'Advanced',
    estimatedTime: '4 hours',
    popularity: 78,
    features: ['Course Builder', 'Student Portal', 'Assessment Engine', 'Progress Tracking'],
    techStack: ['Next.js', 'Django', 'PostgreSQL', 'AWS S3'],
    preview: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop',
    demoUrl: 'https://lms-demo.example.com',
    rating: 4.5,
    reviews: 142
  }
];

export const mockBuildSteps = [
  {
    id: 'step-1',
    title: 'Analyzing Requirements',
    description: 'AI is analyzing your project requirements and selecting optimal technologies',
    status: 'completed',
    duration: 12,
    details: ['Requirement analysis complete', 'Technology stack selected', 'Architecture planned']
  },
  {
    id: 'step-2', 
    title: 'Generating Backend Structure',
    description: 'Creating API endpoints, database models, and authentication system',
    status: 'completed',
    duration: 45,
    details: ['Database schema created', 'API endpoints generated', 'Authentication setup']
  },
  {
    id: 'step-3',
    title: 'Building Frontend Components',
    description: 'Generating React components, routing, and user interface',
    status: 'in-progress',
    duration: 60,
    details: ['Component library setup', 'Routing configuration', 'UI components 70% complete']
  },
  {
    id: 'step-4',
    title: 'AI Integration Setup',
    description: 'Configuring AI services and implementing intelligent features',
    status: 'pending',
    duration: 30,
    details: []
  },
  {
    id: 'step-5',
    title: 'Testing & Deployment',
    description: 'Running automated tests and deploying to production environment',
    status: 'pending',
    duration: 25,
    details: []
  }
];

export const mockDeployments = [
  {
    id: 'deploy-001',
    projectId: 'proj-001',
    environment: 'production',
    status: 'active',
    url: 'https://ai-recipe-gen.example.com',
    deployedAt: '2024-07-15T14:30:00Z',
    version: 'v1.2.1',
    buildTime: '2m 15s',
    health: 'healthy',
    traffic: { visits: 1250, uniqueUsers: 892 }
  },
  {
    id: 'deploy-002',
    projectId: 'proj-002',
    environment: 'staging',
    status: 'building',
    url: 'https://staging-taskflow.example.com',
    deployedAt: '2024-07-20T10:15:00Z',
    version: 'v0.8.0',
    buildTime: '1m 45s',
    health: 'building',
    traffic: { visits: 45, uniqueUsers: 12 }
  }
];

export const mockAIModels = [
  {
    id: 'model-001',
    name: 'GPT-4 Turbo',
    provider: 'OpenAI',
    type: 'Text Generation',
    status: 'active',
    usage: 75,
    cost: 0.12,
    description: 'Advanced language model for complex reasoning and code generation'
  },
  {
    id: 'model-002',
    name: 'Claude 3.5 Sonnet',
    provider: 'Anthropic',
    type: 'Text Generation',
    status: 'active',
    usage: 45,
    cost: 0.08,
    description: 'Efficient model for analysis and creative writing tasks'
  },
  {
    id: 'model-003',
    name: 'DALL-E 3',
    provider: 'OpenAI',
    type: 'Image Generation',
    status: 'active',
    usage: 30,
    cost: 0.05,
    description: 'State-of-the-art image generation from text prompts'
  }
];

export const mockNotifications = [
  {
    id: 'notif-001',
    type: 'success',
    title: 'Deployment Successful',
    message: 'AI Recipe Generator has been successfully deployed to production',
    timestamp: '2024-07-20T15:30:00Z',
    read: false
  },
  {
    id: 'notif-002',
    type: 'warning',
    title: 'API Usage Alert',
    message: 'You have used 80% of your monthly API credits',
    timestamp: '2024-07-20T12:00:00Z',
    read: false
  },
  {
    id: 'notif-003',
    type: 'info',
    title: 'New Template Available',
    message: 'AI-Powered Analytics Dashboard template is now available',
    timestamp: '2024-07-19T09:15:00Z',
    read: true
  }
];

export const mockBillingData = {
  currentPlan: 'Pro',
  usage: {
    apiCalls: { current: 12500, limit: 25000 },
    storage: { current: 2.4, limit: 10 },
    bandwidth: { current: 45, limit: 100 }
  },
  nextBilling: '2024-08-01',
  amount: 49.99,
  paymentMethod: '**** 4242',
  invoices: [
    { id: 'inv-001', date: '2024-07-01', amount: 49.99, status: 'paid' },
    { id: 'inv-002', date: '2024-06-01', amount: 49.99, status: 'paid' },
    { id: 'inv-003', date: '2024-05-01', amount: 29.99, status: 'paid' }
  ]
};