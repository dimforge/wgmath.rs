#!/bin/bash

PUBLISH_MODE=1 yarn build
cp .htaccess build/.
rsync -av --delete-after build/ crozet@ssh.cluster003.hosting.ovh.net:/home/crozet/wgmath/
