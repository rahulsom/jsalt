#!/bin/bash -e

export GRADLE_OPTS="-Xmx1024m -Xms256m -XX:MaxPermSize=512m -XX:+CMSClassUnloadingEnabled"
./gradlew demo

if [[ $TRAVIS_BRANCH == 'master' && $TRAVIS_REPO_SLUG == "rahulsom/jsalt" && $TRAVIS_PULL_REQUEST == 'false' ]]; then

  git config --global user.name "$GIT_NAME"
  git config --global user.email "$GIT_EMAIL"
  git config --global credential.helper "store --file=~/.git-credentials"
  echo "https://$GH_TOKEN:@github.com" > ~/.git-credentials

  gem install asciidoctor pygments.rb
  asciidoctor -a source-highlighter=pygments src/asciidoc/index.adoc -o build/asciidoc/index.html

  echo "Cloning gh-pages branch"
  git clone https://${GH_TOKEN}@github.com/$TRAVIS_REPO_SLUG.git -b gh-pages \
      gh-pages --single-branch > /dev/null

  cd gh-pages
  git rm -rf *
  cp -r ../build/asciidoc/* .

  git add .
  git commit -a -m "Updating docs for Travis build: https://travis-ci.org/$TRAVIS_REPO_SLUG/builds/$TRAVIS_BUILD_ID"
  git push --quiet origin HEAD
  cd ..
  rm -rf gh-pages

else
  echo "Not on master branch, so not publishing"
  echo "TRAVIS_BRANCH: $TRAVIS_BRANCH"
  echo "TRAVIS_REPO_SLUG: $TRAVIS_REPO_SLUG"
  echo "TRAVIS_PULL_REQUEST: $TRAVIS_PULL_REQUEST"
fi
