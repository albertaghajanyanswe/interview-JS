build:
	docker build -t node:v1 .
run:
	docker run -d -p 4000:4000 --env-file ./config/.env --rm --name node node:v1
stop:
	docker stop node
prune_i:
	docker images prune
prune_c:
	docker container prune