install: 
	npm-install
start: 
	npx babel-node src/bin/brain-calculator.js
publish: 
	publish --dry-run
lint:
	npx eslint .