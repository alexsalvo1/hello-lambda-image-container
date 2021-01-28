         ___        ______     ____ _                 _  ___  
        / \ \      / / ___|   / ___| | ___  _   _  __| |/ _ \ 
       / _ \ \ /\ / /\___ \  | |   | |/ _ \| | | |/ _` | (_) |
      / ___ \ V  V /  ___) | | |___| | (_) | |_| | (_| |\__, |
     /_/   \_\_/\_/  |____/   \____|_|\___/ \__,_|\__,_|  /_/ 
 ----------------------------------------------------------------- 


Hi there! Welcome to AWS Cloud9!

To get started, create some files, play with the terminal,
or visit https://docs.aws.amazon.com/console/cloud9/ for our documentation.

Happy coding!

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
2. Test Container locally
2.1. On a different terminal 
   ```sh
   docker run -p 9000:8080 hello-container:latest
   ```
2.2. On previous terminal
    ```sh
    curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{}'
    ```
3. Push local image to your ECR
    ```sh
    aws ecr create-repository --repository-name hello-wolrd --image-scanning-configuration scanOnPush=true
    docker tag hello-container:latest 373692357663.dkr.ecr.eu-west-1.amazonaws.com/hello-world:latest
    aws ecr get-login-password | docker login --username AWS --password-stdin 373692357663.dkr.ecr.eu-west-1.amazonaws.com
    docker push 373692357663.dkr.ecr.eu-west-1.amazonaws.com/hello-world:latest
    ```

