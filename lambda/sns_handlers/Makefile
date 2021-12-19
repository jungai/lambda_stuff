.PHONY: default prepare

default:
	make prepare

prepare:
	(cd ./scripts && ./copy_app.sh)
	pnpm i
	pnpm run build
