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