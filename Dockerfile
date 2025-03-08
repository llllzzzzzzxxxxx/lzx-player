# 使用 node 环境作为基础镜像
FROM node:20-alpine AS builder

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 pnpm-lock.yaml，避免缓存失效
COPY package.json pnpm-lock.yaml ./

# 安装 pnpm 并依赖
RUN npm install -g pnpm && pnpm install

# 复制其他所有项目文件
COPY . .

# 构建项目
RUN pnpm run build

# 使用 Nginx 作为生产环境的镜像
FROM nginx:alpine

# 拷贝前端构建产物到 Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# 暴露端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
