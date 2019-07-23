install: 
	npm-install
start: 
	npx babel-node src/bin/brain-prime.js
publish: 
	publish --dry-run
lint:
	npx eslint .