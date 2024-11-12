#! /bin/sh

cd ~/work/shader_docs
cargo run -p makewgmath --release
cd ~/work/wgmath/website
cp -r ~/work/shader_docs/target/shader_docs/* static/api_docs/.
