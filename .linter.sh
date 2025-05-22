#!/bin/bash
cd /home/kavia/workspace/code-generation/rapidui-framework-6098-6105/main_container_for_rapidui_framework
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

