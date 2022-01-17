#!/bin/bash

# push it all

git add src

untracked_files=`git ls-files -o --exclude-standard`
untracked_count=`echo -n ${untracked_files} | wc -l`
[[ ${untracked_count} -gt 0 ]] && echo -e "\n\n\n!!! UNTRACKED FILES: ${untracked_count} \n ${untracked_files}" && exit

msg=$1

[ -z ${msg} ] && git commit -am ${msg} || git commit -am "[AUTO] push all uncommited"

git push origin master