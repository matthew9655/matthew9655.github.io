#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
# navigate into the build output directory
cd out
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'
echo 'committed'
git push -f git@github.com:matthew9655/matthew9655.github.io.git main:gh-pages
cd -