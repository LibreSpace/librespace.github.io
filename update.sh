#!/bin/sh

current_date=$(date +"%Y-%m-%d")
git add .
git commit -m "$current_date"
git push
