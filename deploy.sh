echo "# calculator" >> README.md

set -e

npm run build

cd dist

git init
git add -A
git commit -m "commit"
git push -f git@github.com:HubertDudaDeveloper/Currency-dist.git master:gh-pages

cd -