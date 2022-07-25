docker build -t ds216j:32768/express-playground:latest .
docker push ds216j:32768/express-playground:latest
docker rm -f express-playground
docker run -d --rm -p 8092:8080 --platform linux/amd64 --name express-playground ds216j:32768/express-playground:latest