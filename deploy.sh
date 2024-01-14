#!/bin/bash


npm run build

firebase deploy --only hosting

rm -rf dist

