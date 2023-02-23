#!/bin/sh
docker run -it --rm --name sfi --platform linux/arm64 -v /Users/calebsotelo/Projects/SFI:/SFI -p 80:3000/tcp node:16.17.0 /bin/bash
