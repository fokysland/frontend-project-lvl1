install: 
	npm-install
start: 
	npx babel-node src/bin/brain-gcd.js
publish: 
	publish --dry-run
lint:
	npx eslint .