.PHONY: default prepare

default:
	make prepare

prepare:
	(cd ./scripts && ./copy_app.sh)
	pnpm i
	pnpm run build

deploy:
	make prepare && \
	sam package --template-file ./sam_template.yaml \
		--output-template-file sam_final.yml \
		--s3-bucket <S3-BUCKET-NAME> \
		--profile <YOUR-AWS-PROFILE> && \
	sam deploy --template-file ./sam_final.yml \
		--stack-name <STACK-NAME> \
		--capabilities CAPABILITY_IAM \
		--profile <YOUR-AWS-PROFILE>