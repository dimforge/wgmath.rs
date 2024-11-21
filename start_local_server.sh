#!/bin/bash

# This script sets up a local apache environment, to test wasm setup.
# See README.md for details about this setup.

PUBLISH_MODE=1 yarn build

sudo cp .htaccess build/.
sudo cp -r build/* /var/www/html/test-wgmath/
sudo cp .htaccess /var/www/html/test-wgmath/

sudo systemctl restart apache2