# Stage 1: Build the React app
FROM node:20-alpine AS build
WORKDIR /app

# Copy the package files and install app dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app files and build 
COPY . .
RUN npm run build

# Stage 2: Make the nginx server
FROM nginx:stable-alpine
# Copy the build directory from the build stage into nginx public folder (html)
COPY --from=build /app/dist /usr/share/nginx/html

# Copy our custom nginx config file because we use React Router and must handle this
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx","-g","daemon off;"]