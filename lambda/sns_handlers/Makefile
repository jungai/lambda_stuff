.PHONY: default prepare

default:
	make prepare

prepare:
	(cd ./scritps && ./copy_app.sh)
	pnpm i
	pnpm run build
