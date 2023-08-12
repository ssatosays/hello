#!/bin/bash

rm -rf ./build ./docs && npm run build && mv ./build ./docs
