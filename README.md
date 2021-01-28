<!-- GETTING STARTED -->
## Getting Started

This is a procedure on how to create a container image, starting from a simple nodejs application!

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
4. Create my ECR repository
    ```sh
    aws ecr create-repository --repository-name hello-world --image-scanning-configuration scanOnPush=true
    ```
5. If repository already exist
    ```sh
    registryId=$(aws ecr describe-registry --query [registryId] --output text)
    ```
6. Push local image to my ECR
    ```sh
    docker tag hello-container:latest ${registryId}.dkr.ecr.eu-west-1.amazonaws.com/hello-world:latest
    aws ecr get-login-password | docker login --username AWS --password-stdin $registryId.dkr.ecr.eu-west-1.amazonaws.com
    docker push $registryId.dkr.ecr.eu-west-1.amazonaws.com/hello-world:latest
    ```

