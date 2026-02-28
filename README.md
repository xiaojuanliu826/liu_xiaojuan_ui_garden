# UI Garden Component Library
Author: Liu Xiaojuan
Assignment: Coding Assignment 12

This project is a UI Component Library built using React, TypeScript, Styled Components, and Storybook.
The project is containerized using Docker and runs on:

http://localhost:8083
or
http://127.0.0.1:8083

---

# 1. Project Creation

## Step 1: Create React App with TypeScript

The project was created using Create React App with the TypeScript template:

```bash
npx create-react-app liu_xiaojuan_ui_garden --template typescript

## Step 2: Navigate into the Project

cd liu_xiaojuan_ui_garden
To run the Project Locally (Development Mode)
npm start
Then open:
http://localhost:3000

## Step 3: Install Required Dependencies(Install Styled Components)

npm install styled-components
npm install --save-dev @types/styled-components

## Step 4: Install Storybook

npx storybook@latest init

Storybook is used to develop and test components independently.
To run Storybook:

npm run storybook

## Step 5: Component Structure
Each component follows this required folder structure:
ComponentName/
  ComponentName.tsx
  ComponentName.types.tsx
  ComponentName.stories.tsx
  ComponentName.tests.tsx
  index.ts

## Step 6: Docker Setup
The project includes a Dockerfile that:

Builds the React production version

Uses Nginx to serve the static files

Runs the application on port 8083

1. Create a Dockerfile under the root project directory
2. Write and save following code into the Dockerfile
# --- Stage 1: Build ---
# Use the official Node.js 20 (Debian Bullseye) image as the build environment
FROM node:20-bullseye AS build

# Set the working directory inside the container
# All subsequent commands (COPY, RUN, etc.) will be executed here
WORKDIR /liu_xiaojuan_ui_garden

# Copy only package.json and package-lock.json first
# This allows Docker to cache dependencies installation, so npm install doesn't run on every code change
COPY package.json package-lock.json ./

# Install all project dependencies
RUN npm install

# Copy the rest of the application source code into the container
COPY . .

# Set environment variables to skip some Create React App ESLint checks during build
# SKIP_PREFLIGHT_CHECK=true: skip CRA preflight checks
# EXTEND_ESLINT=false: disable ESLint extensions to avoid plugin errors in Docker
ENV SKIP_PREFLIGHT_CHECK=true
ENV EXTEND_ESLINT=false

# Run the production build
# This creates the optimized static files in the 'build' folder
RUN npm run build

# --- Stage 2: Production ---
# Use a lightweight Nginx image to serve the static files
FROM nginx:alpine

# Copy the built files from the build stage into Nginx's default web directory
COPY --from=build /liu_xiaojuan_ui_garden/build /usr/share/nginx/html

# Expose port 8083 on the container
# The app will be accessible via this port on localhost
EXPOSE 8083

# Start Nginx in the foreground
# Running in the foreground keeps the Docker container alive
CMD ["nginx", "-g", "daemon off;"]

3. Build Docker Image
sudo docker build -t liu_xiaojuan_coding_assignment12 .

4. Run Docker Container
sudo docker run -p 8083:80 --name liu_xiaojuan_coding_assignment12 liu_xiaojuan_coding_assignment12

5. Access the Application
Open a browser and visit:
http://localhost:8083 or http://127.0.0.1:8083

To stop the container:
sudo docker stop liu_xiaojuan_coding_assignment12

To remove the container:
sudo docker rm liu_xiaojuan_coding_assignment12





