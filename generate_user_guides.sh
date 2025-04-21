#!/bin/bash
set -v

mkdir -p docs/user_guides/wgcore/
find docs/user_guides/templates/wgcore -type f -print0 | OUTPUT_FOLDER=docs/user_guides/templates_injected xargs -0 ./inject_code_in_user_guides.sh
cp -r docs/user_guides/templates_injected/* docs/user_guides/wgcore/.
rm -rf docs/user_guides/templates_injected

mkdir -p docs/user_guides/wgebra/
find docs/user_guides/templates/wgebra -type f -print0 | OUTPUT_FOLDER=docs/user_guides/templates_injected xargs -0 ./inject_code_in_user_guides.sh
cp -r docs/user_guides/templates_injected/* docs/user_guides/wgebra/.
rm -rf docs/user_guides/templates_injected