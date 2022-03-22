# Docker Depoly Demo

### 简介

这是一个以用 docker构建部署前后端项目的demo

+ 前端是一个vue项目demo，使用axios请求后端接口
+ 后端是一个koa项目demo，从数据库取得数据并提供api服务
+ 数据采用mongoDB

### 构建流程

+ docker-compose.yml会构建三个文件夹内的三个Dockerfile
+ 三个Dockerfile对应三个端，前端，后端，数据端
+ 构建后，产生三个容器，使用docker network来进行容器内通信

