install: 
	npm-install
start: 
	npx babel-node src/bin/brain-prime.js
publish: 
	publish --dry-run
lint:
	npx eslint .
update: 
	npm run build
	npm update
	sudo npm link
git:
	git add .
	git commit -m 'refactor'
	git push