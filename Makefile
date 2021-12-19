.PHONY: default clean install compile-all

default:
	make clean
	make install

clean:
	find . -name 'node_modules' -type d -prune -exec rm -rf '{}' + \
	&& rm -rf ./lambda/sns_handlers/src/app

install:
	pnpm -r i

compile-all:
	pnpm run --filter app build
