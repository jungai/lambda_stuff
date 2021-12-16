.PHONY: default install compile-all

default:
	make install

install:
	pnpm -r i

compile-all:
	pnpm run --filter app build
