<!-- GETTING STARTED -->
## Getting Started

This is a procedure on how to create a container image, starting from a simple nodejs application, and deploy it on Lambda

### Prerequisites

* Initialization
    ```sh
    cd app
    npm init
    cd ..
    ```

### Container Image

1. Create a local container image
   ```sh
   docker build -t hello-container .
   ```
2. Run Container locally on a different terminal 
   ```sh
   docker run -p 9000:8080 hello-container:latest
   ```
3. Test container on previous terminal
    ```sh
    curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{}'
    ```
4. Push local image to your ECR
    ```sh
    aws ecr create-repository --repository-name hello-wolrd --image-scanning-configuration scanOnPush=true
    docker tag hello-container:latest 373692357663.dkr.ecr.eu-west-1.amazonaws.com/hello-world:latest
    aws ecr get-login-password | docker login --username AWS --password-stdin 373692357663.dkr.ecr.eu-west-1.amazonaws.com
    docker push 373692357663.dkr.ecr.eu-west-1.amazonaws.com/hello-world:latest
    ```

