export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Backend' | 'DevOps' | 'Architecture';
  technologies: string[];
  description: string;
  featured?: boolean;
  highlights: string;
  problem?: string;
  architectureDetails?: string;
  keyFeatures?: string[];
  challenges?: string[];
  outcome?: string;
  architectureNodes?: Array<{
    title: string;
    description: string;
    tech: string;
    icon: string;
  }>;
  githubUrl?: string;
  liveUrl?: string;
  codeSnippet?: {
    filename: string;
    language: string;
    code: string;
  };
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  icon: string;
  skills: Array<{
    name: string;
    tag: string;
    featured?: boolean;
  }>;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  icon: string;
  deliverables: string[];
}

export interface WorkflowStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  tools: string[];
}

export interface ProofOfWorkItem {
  id: string;
  title: string;
  category: 'Docker' | 'CI/CD' | 'NestJS Architecture' | 'Monitoring';
  description: string;
  filename: string;
  language: string;
  code: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  type: 'placeholder' | 'production';
  location: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export const PORTFOLIO_DATA = {
  developer: {
    name: 'Om Rathore',
    title: 'Backend & Cloud Developer',
    specialization: 'Node.js / NestJS Backend Development',
    location: 'India (Available for Remote Worldwide)',
    status: 'Available for Remote Work & Freelance Projects',
    targetRate: 'Available for Remote Positions & Contract Projects',
    email: 'omr31997@gmail.com',
    github: 'https://github.com/OmR31997',
    linkedin: 'https://www.linkedin.com/in/omprakash-rathore-858a31327',
    bio: 'Backend-focused developer specializing in Node.js, NestJS, PostgreSQL, Docker and AWS. I build scalable APIs, production-ready backend systems and automated deployment infrastructure.',
    heroHeadline: 'Building Reliable Backend Systems & Cloud Infrastructure',
    heroSubheadline: 'Backend-focused developer specializing in Node.js, NestJS, PostgreSQL, Docker and AWS. I build scalable APIs, production-ready backend systems and automated deployment infrastructure.',
  },

  skills: [
    {
      title: 'Backend Engineering',
      subtitle: 'Scalable APIs, Clean Architecture & Async Pipelines',
      icon: 'server',
      skills: [
        { name: 'Node.js', tag: 'Core Runtime', featured: true },
        { name: 'NestJS', tag: 'Framework', featured: true },
        { name: 'Express.js', tag: 'HTTP Server' },
        { name: 'TypeScript', tag: 'Type Safety', featured: true },
        { name: 'REST APIs', tag: 'API Design', featured: true },
        { name: 'Auth & JWT', tag: 'Security' },
        { name: 'Background Jobs', tag: 'BullMQ / Queue' },
        { name: 'Cron Jobs', tag: 'Scheduled Tasks' },
        { name: 'Notification Systems', tag: 'Email / Webhooks' },
        { name: 'Payment Gateways', tag: 'Stripe / Razorpay' },
        { name: 'Business Logic', tag: 'Domain Layer' },
      ],
    },
    {
      title: 'Database Engineering',
      subtitle: 'Relational & NoSQL Datastores, Caching & ORMs',
      icon: 'database',
      skills: [
        { name: 'PostgreSQL', tag: 'Primary RDBMS', featured: true },
        { name: 'Prisma ORM', tag: 'Database Client', featured: true },
        { name: 'Sequelize', tag: 'ORM' },
        { name: 'MongoDB', tag: 'Document DB' },
        { name: 'Redis', tag: 'Caching & Lock', featured: true },
      ],
    },
    {
      title: 'Infrastructure & DevOps',
      subtitle: 'Containerization, AWS Services & CI/CD Automation',
      icon: 'cloud',
      skills: [
        { name: 'Docker', tag: 'Containers', featured: true },
        { name: 'Docker Compose', tag: 'Multi-container', featured: true },
        { name: 'AWS EC2', tag: 'Compute' },
        { name: 'AWS ECS', tag: 'Container Service', featured: true },
        { name: 'AWS ECR', tag: 'Container Registry' },
        { name: 'AWS S3', tag: 'Object Storage' },
        { name: 'AWS CloudWatch', tag: 'Monitoring' },
        { name: 'AWS Secrets Manager', tag: 'Security' },
        { name: 'AWS VPC', tag: 'Networking' },
        { name: 'Nginx', tag: 'Reverse Proxy', featured: true },
        { name: 'Certbot / SSL', tag: 'HTTPS' },
        { name: 'CI/CD Pipelines', tag: 'Automation' },
        { name: 'GitHub Actions', tag: 'Workflow Engine', featured: true },
        { name: 'Linux Administration', tag: 'OS' },
        { name: 'Bash Scripting', tag: 'CLI Scripting' },
      ],
    },
    {
      title: 'Monitoring & Observability',
      subtitle: 'System Metrics, Distributed Logs & Health Dashboards',
      icon: 'activity',
      skills: [
        { name: 'Prometheus', tag: 'Metrics Collection', featured: true },
        { name: 'Grafana', tag: 'Visualization', featured: true },
        { name: 'Loki', tag: 'Log Aggregation', featured: true },
        { name: 'Node Exporter', tag: 'Host Metrics' },
        { name: 'cAdvisor', tag: 'Container Metrics' },
        { name: 'CloudWatch Metrics', tag: 'AWS Metrics' },
        { name: 'YACE Exporter', tag: 'CloudWatch Bridge' },
      ],
    },
    {
      title: 'Frontend & Dev Tools',
      subtitle: 'Modern Web Interfaces & Developer Workflows',
      icon: 'terminal',
      skills: [
        { name: 'React.js', tag: 'UI Library' },
        { name: 'Next.js', tag: 'Meta-Framework' },
        { name: 'Vite', tag: 'Bundler' },
        { name: 'Tailwind CSS', tag: 'Styling' },
        { name: 'Git & GitHub', tag: 'Version Control', featured: true },
        { name: 'Postman', tag: 'API Testing' },
        { name: 'Docker Desktop', tag: 'Dev Environment' },
        { name: 'WSL 2', tag: 'Linux Subsystem' },
      ],
    },
  ] as SkillCategory[],

  featuredProject: {
    id: 'giftfactory-api',
    title: 'GiftFactory API',
    subtitle: 'Production-Grade Enterprise E-Commerce & Settlement Engine',
    category: 'Backend' as const,
    featured: true,
    technologies: [
      'NestJS',
      'TypeScript',
      'PostgreSQL',
      'Prisma ORM',
      'Redis',
      'BullMQ',
      'Docker',
      'AWS ECS',
    ],
    highlights:
      'Order settlement system • Franchise settlement • Affiliate commission calculation • Refund processing • Retention notification system • Redis-based distributed locking • BullMQ background jobs • PostgreSQL persistence • Cron-based processing • Dockerized deployment • AWS infrastructure',
    description:
      'High-throughput business-oriented backend processing complex multi-party financial settlements, franchise commission payouts, automated customer retention flows, asynchronous order workflows, and queue-managed background jobs.',
    problem:
      'Handling high-frequency ecommerce transaction workflows requires reliable processing without race conditions in franchise payout calculations, affiliate tracking, or customer refund triggers.',
    architectureDetails:
      'Architected as a modular NestJS monolith with event-driven background processing. Uses Redis distributed locks to prevent double-settlement, BullMQ queues to handle async notification pipelines, Prisma ORM for strictly typed PostgreSQL queries, and AWS ECS container orchestration.',
    keyFeatures: [
      'Automated Order & Franchise Settlement Calculation Engine',
      'Affiliate Multi-Tier Commission Tracking & Audit Ledger',
      'Refund Processing with Transactional Guarantee',
      'Redis Distributed Locks (`redlock`) to prevent race conditions',
      'BullMQ Async Background Processing for email/SMS retention triggers',
      'Cron-based Nightly Settlement Batch Jobs',
      'Containerized with Docker & Deployed on AWS ECS with ECR & CloudWatch',
    ],
    challenges: [
      'Preventing concurrent settlement calculations for franchisees during peak traffic spikes',
      'Ensuring zero-data-loss queue execution for transactional email & SMS triggers',
      'Designing strict DB schema constraints and audit logs for affiliate payouts using Prisma & PostgreSQL',
    ],
    outcome:
      'Delivered a bulletproof, fault-tolerant backend system capable of handling thousands of automated background tasks with deterministic financial accuracy and containerized cloud deployment.',
    architectureNodes: [
      {
        title: 'Client Layer',
        description: 'Web Frontends, Mobile Apps & External Webhooks',
        tech: 'HTTPS / JSON REST',
        icon: 'globe',
      },
      {
        title: 'API Gateway & Proxy',
        description: 'Nginx SSL Reverse Proxy & Rate Limiting',
        tech: 'Nginx + Certbot',
        icon: 'shield',
      },
      {
        title: 'NestJS Application Core',
        description: 'REST Controller, Auth Guard, Domain Modules & Business Logic',
        tech: 'NestJS + TypeScript',
        icon: 'cpu',
      },
      {
        title: 'Datastore & Cache',
        description: 'PostgreSQL Relational DB & Redis In-Memory Cache / Lock',
        tech: 'PostgreSQL + Prisma + Redis',
        icon: 'database',
      },
      {
        title: 'Background Queue System',
        description: 'BullMQ Async Workers & Scheduled Cron Processors',
        tech: 'BullMQ + Redis Worker',
        icon: 'layers',
      },
      {
        title: 'AWS Infrastructure',
        description: 'AWS ECS Fargate, ECR Registry, VPC & CloudWatch Logs',
        tech: 'AWS ECS / ECR / S3',
        icon: 'cloud',
      },
    ],
    codeSnippet: {
      filename: 'settlement.service.ts',
      language: 'typescript',
      code: `import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { InjectRedis } from '@nestjs-modules/ioredis';
import Redis from 'ioredis';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class SettlementService {
  private readonly logger = new Logger(SettlementService.name);

  constructor(
    private readonly prisma: PrismaService,
    @InjectRedis() private readonly redis: Redis,
    @InjectQueue('retention-jobs') private readonly retentionQueue: Queue,
  ) {}

  async processFranchiseSettlement(franchiseId: string, orderId: string) {
    const lockKey = \`lock:settlement:\${franchiseId}:\${orderId}\`;
    
    // Acquire Redis Distributed Lock to prevent duplicate settlements
    const acquired = await this.redis.set(lockKey, 'LOCKED', 'PX', 10000, 'NX');
    if (!acquired) {
      this.logger.warn(\`Concurrent settlement attempt blocked for order \${orderId}\`);
      return { status: 'LOCKED', message: 'Settlement already in progress' };
    }

    try {
      return await this.prisma.$transaction(async (tx) => {
        const order = await tx.order.findUniqueOrThrow({ where: { id: orderId } });
        const commissionRate = 0.15; // 15% Franchise payout
        const payoutAmount = order.totalAmount * commissionRate;

        const settlement = await tx.franchiseSettlement.create({
          data: {
            franchiseId,
            orderId,
            amount: payoutAmount,
            status: 'COMPLETED',
          },
        });

        // Trigger Async Retention Notification Queue
        await this.retentionQueue.add('send-settlement-receipt', {
          franchiseId,
          settlementId: settlement.id,
          payoutAmount,
        });

        return settlement;
      });
    } finally {
      await this.redis.del(lockKey);
    }
  }
}`,
    },
  },

  projects: [
    {
      id: 'task-management-api',
      title: 'Task Management API',
      subtitle: 'Production-Style Modular Task & Project Engine',
      category: 'Backend',
      technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker'],
      description:
        'Production-style task management backend with structured REST APIs, database integration, validation, authentication and containerized deployment.',
      highlights:
        'Backend Architecture • REST API • Prisma • PostgreSQL • Docker',
      challenges: [
        'Enforcing RBAC (Role-Based Access Control) across workspaces and project teams using NestJS Guards',
        'Optimizing Prisma relational queries for multi-tenant task assignment pipelines',
        'Creating clean Docker & Docker Compose setup for consistent local development and staging environments',
      ],
      githubUrl: 'https://github.com/omrathore/task-management-api',
      codeSnippet: {
        filename: 'tasks.controller.ts',
        language: 'typescript',
        code: `@Controller('tasks')
@UseGuards(JwtAuthGuard, RolesGuard)
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  async createTask(@Body() dto: CreateTaskDto, @CurrentUser() user: User) {
    return this.tasksService.create(dto, user.id);
  }

  @Get()
  async getTasks(@Query() query: TaskFilterDto, @CurrentUser() user: User) {
    return this.tasksService.findAll(query, user.workspaceId);
  }
}`,
      },
    },
    {
      id: 'ecommerce-backend',
      title: 'E-Commerce Backend',
      subtitle: 'Scalable Order Lifecycle & Inventory Engine',
      category: 'Backend',
      technologies: [
        'Node.js',
        'NestJS',
        'PostgreSQL',
        'Prisma',
        'Redis',
        'Docker',
      ],
      description:
        'Backend system implementing products, users, orders, payments, order lifecycle, business logic and background processing.',
      highlights:
        'E-commerce Architecture • Order Management • Payments • Redis • PostgreSQL',
      challenges: [
        'Managing concurrent inventory stock deductions using Redis atomic operations',
        'Structuring multi-status order lifecycle transitions (Pending -> Paid -> Processing -> Shipped -> Completed)',
        'Integrating payment webhooks with idempotent signature validation',
      ],
      githubUrl: 'https://github.com/omrathore/ecommerce-backend',
      codeSnippet: {
        filename: 'order-lifecycle.service.ts',
        language: 'typescript',
        code: `export async function updateOrderStatus(orderId: string, status: OrderStatus, tx: PrismaTransaction) {
  const currentOrder = await tx.order.findUniqueOrThrow({ where: { id: orderId } });
  
  if (!isValidStatusTransition(currentOrder.status, status)) {
    throw new BadRequestException(\`Invalid state transition from \${currentOrder.status} to \${status}\`);
  }

  return tx.order.update({
    where: { id: orderId },
    data: { status, updatedAt: new Date() },
  });
}`,
      },
    },
    {
      id: 'banking-backend',
      title: 'Banking Backend',
      subtitle: 'Transactional Financial Engine with Audit Log',
      category: 'Backend',
      technologies: ['Node.js', 'NestJS', 'PostgreSQL', 'Prisma', 'TypeScript'],
      description:
        'Backend architecture focused on users, transactions, validation, authentication and financial business logic.',
      highlights: 'Backend Architecture • Transactions • PostgreSQL • Security',
      challenges: [
        'Ensuring strict ACID compliance for balance transfers between accounts using database transactions',
        'Preventing negative balance race conditions with explicit row-level locking in PostgreSQL',
        'Building immutable ledger tables for auditing every credit/debit transaction',
      ],
      githubUrl: 'https://github.com/omrathore/banking-backend',
      codeSnippet: {
        filename: 'transfer.service.ts',
        language: 'typescript',
        code: `async transferFunds(fromAccountId: string, toAccountId: string, amount: number) {
  return this.prisma.$transaction(async (tx) => {
    // Lock source account row
    const source = await tx.$queryRaw\`SELECT balance FROM "Account" WHERE id = \${fromAccountId} FOR UPDATE\`;
    if (source[0].balance < amount) throw new BadRequestException('Insufficient funds');

    await tx.account.update({ where: { id: fromAccountId }, data: { balance: { decrement: amount } } });
    await tx.account.update({ where: { id: toAccountId }, data: { balance: { increment: amount } } });
    
    return tx.transactionLedger.create({
      data: { fromAccountId, toAccountId, amount, type: 'TRANSFER' }
    });
  });
}`,
      },
    },
    {
      id: 'monitoring-observability-stack',
      title: 'Monitoring & Observability Stack',
      subtitle: 'Full-Stack Telemetry Infrastructure for Containerized Microservices',
      category: 'DevOps',
      technologies: [
        'Prometheus',
        'Grafana',
        'Loki',
        'Docker',
        'Node Exporter',
        'cAdvisor',
        'CloudWatch',
        'YACE',
      ],
      description:
        'Containerized monitoring and observability infrastructure for application metrics, system logs, and AWS CloudWatch integration.',
      highlights:
        'Observability • Prometheus • Grafana • AWS CloudWatch • Docker',
      challenges: [
        'Configuring Prometheus targets to scrape cAdvisor container metrics and Node Exporter host health simultaneously',
        'Aggregating distributed application log streams using Grafana Loki and Promtail in Docker containers',
        'Exporting AWS CloudWatch metrics into Grafana dashboards via YACE (Yet Another CloudWatch Exporter)',
      ],
      githubUrl: 'https://github.com/omrathore/monitoring-stack',
      codeSnippet: {
        filename: 'prometheus.yml',
        language: 'yaml',
        code: `global:
  scrape_interval: 15s
  evaluation_interval: 15s

scrape_configs:
  - job_name: 'nestjs-app'
    metrics_path: '/metrics'
    static_configs:
      - targets: ['api-service:3000']

  - job_name: 'cadvisor'
    static_configs:
      - targets: ['cadvisor:8080']

  - job_name: 'node-exporter'
    static_configs:
      - targets: ['node-exporter:9100']`,
      },
    },
    {
      id: 'aws-deployment-devops',
      title: 'AWS Deployment & DevOps Workflows',
      subtitle: 'Production CI/CD Pipelines & Container Infrastructure',
      category: 'DevOps',
      technologies: [
        'AWS EC2',
        'ECS',
        'ECR',
        'Docker',
        'Nginx',
        'GitHub Actions',
        'Certbot',
      ],
      description:
        'Containerized deployment workflows for Node.js/NestJS and Next.js applications with automated CI/CD, reverse proxy, SSL and AWS cloud infrastructure.',
      highlights: 'Docker • AWS • CI/CD • Nginx • SSL',
      challenges: [
        'Building GitHub Actions workflows that automatically compile TypeScript, build Docker images, push to AWS ECR, and update ECS task definitions',
        'Setting up Nginx reverse proxy with automated Let’s Encrypt Certbot SSL renewal for containerized apps',
        'Configuring AWS VPC security groups, custom subnets, and IAM roles for least-privilege container execution',
      ],
      githubUrl: 'https://github.com/omrathore/aws-devops-pipeline',
      codeSnippet: {
        filename: 'deploy.yml',
        language: 'yaml',
        code: `name: Build & Deploy to AWS ECS

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v3

      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: \${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1

      - name: Login to AWS ECR
        id: login-ecr
        uses: aws-actions/amazon-ecr-login@v1

      - name: Build & Push Docker Image
        run: |
          docker build -t \${{ steps.login-ecr.outputs.registry }}/api-service:\${{ github.sha }} .
          docker push \${{ steps.login-ecr.outputs.registry }}/api-service:\${{ github.sha }}`,
      },
    },
  ] as Project[],

  services: [
    {
      id: 'backend-apis',
      title: 'Backend APIs & Microservices',
      description:
        'Designing and building high-performance RESTful APIs, JWT/OAuth2 authentication, modular architecture, and robust domain business logic using Node.js and NestJS.',
      techStack: ['Node.js', 'NestJS', 'TypeScript', 'Express', 'JWT'],
      icon: 'code',
      deliverables: [
        'Production-grade RESTful API endpoints',
        'Role-Based Access Control (RBAC) & Auth',
        'Strict DTO Validation & OpenAPI Specs',
        'Clean Modular Codebase',
      ],
    },
    {
      id: 'database-systems',
      title: 'Database & Caching Architecture',
      description:
        'Designing relational PostgreSQL schemas, optimizing Prisma/Sequelize ORM queries, implementing MongoDB models, and integrating Redis for high-speed caching and locking.',
      techStack: ['PostgreSQL', 'Prisma ORM', 'Redis', 'MongoDB'],
      icon: 'database',
      deliverables: [
        'Normalized DB Schema Design & Migration',
        'Query Performance Optimization & Indexing',
        'Redis Distributed Caching Strategy',
        'ACID Transaction Guarantees',
      ],
    },
    {
      id: 'docker-deployment',
      title: 'Docker & Containerization',
      description:
        'Containerizing Node.js, NestJS, and database environments using multi-stage Dockerfiles and Docker Compose setups for zero-friction local and production deployments.',
      techStack: ['Docker', 'Docker Compose', 'Multi-stage Builds'],
      icon: 'box',
      deliverables: [
        'Optimized Light-weight Alpine Images',
        'Multi-container Docker Compose Setup',
        'Environment Secret Management',
        'Production Container Hardening',
      ],
    },
    {
      id: 'aws-infrastructure',
      title: 'AWS Cloud Deployment',
      description:
        'Deploying and configuring production infrastructure on AWS using EC2, ECS container orchestration, ECR registries, S3 storage, VPC security, and CloudWatch metrics.',
      techStack: ['AWS EC2', 'AWS ECS', 'ECR', 'VPC', 'S3', 'Nginx'],
      icon: 'cloud',
      deliverables: [
        'AWS ECS Container Service Setup',
        'Nginx Reverse Proxy & SSL (Certbot)',
        'Domain Routing & Route 53 Config',
        'CloudWatch Log & Alarm Automation',
      ],
    },
    {
      id: 'cicd-pipelines',
      title: 'Automated CI/CD Pipelines',
      description:
        'Creating automated deployment pipelines with GitHub Actions that run tests, perform static analysis, build Docker containers, and trigger zero-downtime production rollouts.',
      techStack: ['GitHub Actions', 'Docker Registry', 'AWS Integration'],
      icon: 'git-branch',
      deliverables: [
        'Automated Build & Test Runners',
        'Docker Image Build & ECR Push Pipeline',
        'Zero-downtime Server Deployment',
        'Deployment Status Notifications',
      ],
    },
    {
      id: 'background-processing',
      title: 'Background Processing & Queues',
      description:
        'Implementing asynchronous job queues, background email/SMS notification workers, scheduled cron jobs, and distributed locks using Redis and BullMQ.',
      techStack: ['BullMQ', 'Redis Workers', 'Node Cron', 'Webhooks'],
      icon: 'cpu',
      deliverables: [
        'Fault-tolerant Async Queue Architecture',
        'Distributed Redis Mutex Locking',
        'Scheduled Cron Job Automation',
        'Failed Job Retry & Dead Letter Queues',
      ],
    },
    {
      id: 'bug-fixing',
      title: 'Infrastructure & Backend Troubleshooting',
      description:
        'Auditing existing Node.js/NestJS codebases, debugging memory leaks, fixing database connection pool bottlenecks, resolving Docker networking issues, and tuning deployment servers.',
      techStack: ['Debugging', 'Linux', 'Node Inspection', 'Log Analysis'],
      icon: 'tool',
      deliverables: [
        'Root Cause Vulnerability & Bug Fixes',
        'Database Pool & Query Tuning',
        'Nginx & Docker SSL Configuration Fixes',
        'Detailed Engineering Audit Report',
      ],
    },
  ] as Service[],

  workflow: [
    {
      step: '01',
      title: 'Understand',
      subtitle: 'Domain Analysis & Requirements',
      description:
        'Deeply analyze product requirements, data flows, client specifications, rate targets, and security expectations before writing a line of code.',
      tools: ['System Architecture', 'API Contract', 'Data Modeling'],
    },
    {
      step: '02',
      title: 'Design',
      subtitle: 'Schema & Architecture Design',
      description:
        'Structure relational DB schemas (PostgreSQL/Prisma), map out RESTful API endpoints, specify DTO validations, and design caching/queue strategies.',
      tools: ['PostgreSQL Schema', 'OpenAPI / Postman', 'Entity-Relationship'],
    },
    {
      step: '03',
      title: 'Build',
      subtitle: 'Clean Code Implementation',
      description:
        'Develop modular NestJS/Node.js controllers, services, guards, repositories, and custom business logic with strict TypeScript types.',
      tools: ['NestJS', 'Node.js', 'TypeScript', 'Prisma ORM'],
    },
    {
      step: '04',
      title: 'Test',
      subtitle: 'Verification & Quality Control',
      description:
        'Validate API response structures, test transaction atomicity, verify error handling middleware, and check Redis queue resilience.',
      tools: ['Postman', 'Unit/Integration Tests', 'Redis CLI'],
    },
    {
      step: '05',
      title: 'Containerize',
      subtitle: 'Docker Packaging',
      description:
        'Build lightweight multi-stage Dockerfiles and multi-service Docker Compose files for consistent execution in any environment.',
      tools: ['Docker', 'Docker Compose', 'Alpine Linux'],
    },
    {
      step: '06',
      title: 'Deploy',
      subtitle: 'AWS & CI/CD Pipeline',
      description:
        'Deploy production containers to AWS EC2/ECS with Nginx reverse proxy, automated SSL certificates via Certbot, and GitHub Actions CI/CD.',
      tools: ['AWS ECS / EC2', 'GitHub Actions', 'Nginx SSL'],
    },
    {
      step: '07',
      title: 'Monitor',
      subtitle: 'Observability & Metrics',
      description:
        'Integrate Prometheus, Grafana, and Loki dashboards to monitor CPU/memory usage, API latency distribution, and container error logs in real time.',
      tools: ['Prometheus', 'Grafana', 'Loki', 'CloudWatch'],
    },
  ] as WorkflowStep[],

  proofOfWork: [
    {
      id: 'docker-compose-production',
      title: 'Multi-Container Docker Compose Stack',
      category: 'Docker',
      description:
        'Production-ready docker-compose configuration orchestrating NestJS API server, PostgreSQL database, Redis cache worker, and Prometheus exporter.',
      filename: 'docker-compose.yml',
      language: 'yaml',
      code: `version: '3.8'

services:
  api:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://postgres:secret@postgres:5432/production_db?schema=public
      - REDIS_HOST=redis
      - REDIS_PORT=6379
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_started
    restart: always

  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: secret
      POSTGRES_DB: production_db
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 5s
      timeout: 5s
      retries: 5
    restart: always

  redis:
    image: redis:7-alpine
    command: redis-server --appendonly yes
    volumes:
      - redisdata:/data
    restart: always

volumes:
  pgdata:
  redisdata:`,
    },
    {
      id: 'github-actions-pipeline',
      title: 'GitHub Actions Automated CI/CD Pipeline',
      category: 'CI/CD',
      description:
        'Automated workflow triggering on push to main branch to run linting, TypeScript compilation, Docker build, ECR push, and AWS ECS service refresh.',
      filename: '.github/workflows/deploy.yml',
      language: 'yaml',
      code: `name: Production Deployment Pipeline

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      - name: Setup Node.js Environment
        uses: actions/setup-node@v3
        with:
          node-version: 20
          cache: 'npm'

      - name: Install Dependencies & Type Check
        run: |
          npm ci
          npm run build --if-present

      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: \${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1

      - name: Login to AWS ECR
        id: login-ecr
        uses: aws-actions/amazon-ecr-login@v1

      - name: Build and Push Docker Image
        env:
          ECR_REGISTRY: \${{ steps.login-ecr.outputs.registry }}
          IMAGE_TAG: \${{ github.sha }}
        run: |
          docker build -t $ECR_REGISTRY/om-backend-api:$IMAGE_TAG .
          docker tag $ECR_REGISTRY/om-backend-api:$IMAGE_TAG $ECR_REGISTRY/om-backend-api:latest
          docker push $ECR_REGISTRY/om-backend-api:$IMAGE_TAG
          docker push $ECR_REGISTRY/om-backend-api:latest

      - name: Deploy Task Definition to AWS ECS
        run: |
          aws ecs update-service --cluster production-cluster --service api-service --force-new-deployment`,
    },
    {
      id: 'nestjs-modular-architecture',
      title: 'NestJS Modular Architecture & Global Filters',
      category: 'NestJS Architecture',
      description:
        'Production NestJS global HTTP exception filter providing standardized JSON error structures and structured logging.',
      filename: 'http-exception.filter.ts',
      language: 'typescript',
      code: `import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception instanceof HttpException
        ? exception.getResponse()
        : 'Internal server error';

    this.logger.error(
      \`HTTP \${status} Error on \${request.method} \${request.url}\`,
      exception instanceof Error ? exception.stack : '',
    );

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
      error: typeof message === 'object' ? message : { message },
    });
  }
}`,
    },
    {
      id: 'prometheus-grafana-telemetry',
      title: 'Prometheus & Grafana Telemetry Configuration',
      category: 'Monitoring',
      description:
        'Prometheus scraping definition for monitoring API throughput, database connection pool statistics, and container memory limits.',
      filename: 'prometheus.yml',
      language: 'yaml',
      code: `global:
  scrape_interval: 10s
  evaluation_interval: 10s

scrape_configs:
  - job_name: 'nestjs-backend'
    metrics_path: '/metrics'
    static_configs:
      - targets: ['api:3000']
    relabel_configs:
      - source_labels: [__address__]
        target_label: instance
        replacement: 'prod-backend-01'

  - job_name: 'cadvisor-containers'
    static_configs:
      - targets: ['cadvisor:8080']

  - job_name: 'node-exporter-host'
    static_configs:
      - targets: ['node-exporter:9100']`,
    },
  ] as ProofOfWorkItem[],

  experiences: [
    {
      id: 'exp-1',
      company: '[Company Name Placeholder]',
      role: 'Backend / Software Engineer',
      period: '[Start Date – Present]',
      type: 'placeholder' as const,
      location: 'Remote',
      description:
        'Easily editable experience placeholder for past or current employment roles.',
      achievements: [
        'Developed and maintained RESTful APIs serving Node.js and NestJS backends',
        'Implemented database migrations and query optimizations using PostgreSQL and Prisma',
        'Configured Docker multi-container environments and GitHub Actions CI/CD pipelines',
      ],
      techStack: ['Node.js', 'NestJS', 'PostgreSQL', 'Docker', 'AWS'],
    },
    {
      id: 'exp-2',
      company: 'Independent Projects & Production Engineering',
      role: 'Backend & Cloud Systems Engineer',
      period: '2023 – Present',
      type: 'production' as const,
      location: 'Remote / Independent',
      description:
        'Project-based backend development, architectural design, containerization, and AWS cloud deployment for complex business applications.',
      achievements: [
        'Engineered the GiftFactory API processing multi-tier franchise settlements, refund queues, and retention workers',
        'Designed containerized monitoring stacks using Prometheus, Grafana, and Loki for real-time observability',
        'Architected financial banking backend with database transactional locking and immutable audit logs',
      ],
      techStack: [
        'Node.js',
        'NestJS',
        'PostgreSQL',
        'Prisma',
        'Redis',
        'BullMQ',
        'Docker',
        'AWS',
      ],
    },
  ] as ExperienceItem[],

  whyWorkWithMe: [
    {
      title: 'Backend-Focused Engineering',
      description:
        '100% focused on server-side architecture, API integrity, data consistency, and scalable domain logic.',
      icon: 'server',
    },
    {
      title: 'Strong Node.js & NestJS Ecosystem Knowledge',
      description:
        'Deep familiarity with NestJS modules, guards, decorators, middleware, Express internals, and TypeScript typing.',
      icon: 'code',
    },
    {
      title: 'Production-Oriented Architecture',
      description:
        'I write code meant for actual deployment—incorporating input validation, error handling, rate limiting, and database constraints.',
      icon: 'shield',
    },
    {
      title: 'Docker & AWS Deployment Experience',
      description:
        'Capable of containerizing apps and shipping them to AWS (ECS, EC2, ECR, S3) with SSL and reverse proxy setups.',
      icon: 'cloud',
    },
    {
      title: 'Database & API Design Expertise',
      description:
        'Experienced in designing normalized PostgreSQL schemas, Prisma ORM queries, and high-performance Redis caching.',
      icon: 'database',
    },
    {
      title: 'Infrastructure Debugging & Troubleshooting',
      description:
        'Comfortable diagnosing real Linux, Docker networking, server memory, or connection pool issues under load.',
      icon: 'tool',
    },
    {
      title: 'Maintainable, Clean Solutions',
      description:
        'Prioritizing readable code, clear module boundaries, and reproducible scripts over overly complicated abstractions.',
      icon: 'check',
    },
  ],
};
