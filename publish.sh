#!/bin/bash

PUBLISH_MODE=1 yarn build
# cp .htaccess build/.
# rsync -av --delete-after build/ crozet@ssh.cluster003.hosting.ovh.net:/home/crozet/wgmath/

sudo cp .htaccess build/.
sudo cp -r build/* /var/www/html/test-wgmath/
sudo cp .htaccess /var/www/html/test-wgmath/

sudo systemctl restart apache2