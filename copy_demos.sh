#!/bin/sh

cd ~/work/wgsparkl
./build_wasm.sh
cd ~/work/wgmath/website
cp -r ~/work/wgsparkl/dist2d/* static/demos/wgsparkl2d
cp -r ~/work/wgsparkl/dist3d/* static/demos/wgsparkl3d
