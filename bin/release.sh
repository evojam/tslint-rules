#!/usr/bin/env bash

set -e

CURRENT_VERSION=$(grep "version" ./package.json)
echo "Current version in package.json is set to $CURRENT_VERSION"
read -p "Please enter new version number (release version): " NEW_VERSION

git push

npm version ${NEW_VERSION} --allow-same-version

git add --all
git commit -m "${NEW_VERSION}"
git push
git push --tags

git checkout master
git pull --ff-only
git add -all
git commit -m "${NEW_VERSION}"
git tag -a ${NEW_VERSION} -m "v${NEW_VERSION}"
git push
git push --tags
git checkout develop

echo "Version ${NEW_VERSION} has been released"

exit
