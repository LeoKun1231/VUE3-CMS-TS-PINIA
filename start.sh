#!/bin/sh
git filter-branch -f --env-filter '
     GIT_AUTHOR_EMAIL="1024983409@qq.com";
     GIT_AUTHOR_NAME="Leo";
     GIT_COMMITTER_EMAIL=$GIT_AUTHOR_EMAIL;
     GIT_COMMITTER_NAME="$GIT_AUTHOR_NAME";' -- --all
