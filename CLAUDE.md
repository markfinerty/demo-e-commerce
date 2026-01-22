# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A containerized React TypeScript e-commerce frontend application designed for AWS ECS Fargate deployment. Uses DummyJSON API for product data. Demonstrates infrastructure-as-code with CloudFormation for production-grade cloud deployment.

## Technology Stack

- **Frontend:** React 19, TypeScript, React Router 7, Tailwind CSS 4, Vite 7
- **Container:** Docker multi-stage build (Node Alpine → Nginx Alpine)
- **Infrastructure:** AWS CloudFormation, ECS Fargate, ALB, CloudWatch, Auto Scaling

## Common Commands

```bash
# Development
npm run dev       # Start Vite dev server
npm run lint      # ESLint code quality checks
npm run build     # TypeScript compilation + Vite production build
npm run preview   # Preview production build locally

# Docker
docker-compose up              # Build and run locally on port 8080
docker build -t myapp .        # Build image
docker run -p 8080:80 myapp    # Run container
```

## Architecture

```
src/
├── components/     # Navbar, Footer
├── layouts/        # RootLayout (master wrapper with Outlet)
├── pages/          # HomePage, AboutPage, ContactPage, ProductsPage
├── types.ts        # TypeScript type definitions
└── main.tsx        # React Router configuration & app entry

infrastructure/
└── ecs-frontend-stack.yml    # CloudFormation template (ECS, ALB, Auto Scaling)
```

**React Router Structure:**
- `/` → HomePage
- `/about` → AboutPage
- `/contact` → ContactPage
- `/products` → ProductsPage (fetches from DummyJSON API with pagination)

**Nginx Configuration:**
- `/health` → Health check endpoint for ALB
- `/assets/*` → Cached for 1 year (Vite-hashed assets)
- `/*` → SPA routing via `try_files $uri $uri/ /index.html`

## AWS Deployment

CloudFormation stack creates: IAM execution role, KMS-encrypted CloudWatch logs (30-day retention), ECS cluster/service (2-5 tasks), ALB with target group, auto-scaling (CPU target 70%).

**Deployment flow:** Build Docker image → Push to ECR → Deploy CloudFormation with ImageUri parameter → ECS deploys containers
