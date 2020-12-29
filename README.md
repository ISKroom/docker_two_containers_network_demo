# DEMO
Nodejsコンテナ×1 - Redisコンテナ×1 のネットワーク

# How to run a container
```bash
git clone https://github.com/ISKroom/docker_two_containers_network_demo.git
cd docker_two_containers_network_demo
docker-compose up
```

・この状態でブラウザから以下URLにアクセスすると「Number of visit is xxx」が表示される  
・xxxはアクセスする度に +1 される  
・Windowsの場合は Docker Desktop の起動が前提

http://localhost:4001/

# 参考
https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/
