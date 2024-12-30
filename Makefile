PROJECT_NAME := buttons-generator
DOCKERFILE := Dockerfile
VITE_API_URL := https://api.openai.com
VITE_OPENAI_API_KEY := $(VITE_OPENAI_API_KEY)

.DEFAULT_GOAL := help

build:
	@docker build -f $(DOCKERFILE) --build-arg VITE_API_URL=$(VITE_API_URL) --build-arg VITE_OPENAI_API_KEY=$(VITE_OPENAI_API_KEY) -t $(PROJECT_NAME) .

up:
	@docker run -d -p 80:80 --name $(PROJECT_NAME) $(PROJECT_NAME)

down:
	@docker rm -f $(PROJECT_NAME)

logs:
	@docker logs -f $(PROJECT_NAME)

clean:
	@docker rm -f $(PROJECT_NAME)
	@docker rmi $(PROJECT_NAME)

status:
	@docker ps -f "name=$(PROJECT_NAME)"

# Help message
help:
	@echo "Usage: make <target>"
	@echo
	@echo "Targets:"
	@echo "  build           Build the Docker container for the frontend."
	@echo "  run             Run the frontend container."
	@echo "  down            Stop and remove the frontend container."
	@echo "  logs            Tail the logs from the frontend container."
	@echo "  clean           Remove the frontend container and image."
	@echo "  status          Check the status of the frontend container."