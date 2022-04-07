#!/bin/bash
for D in *; do
    if [ -d "${D}" ]; then
        cd "${D}"
        cp ../../Scripts/script.py . 
        python3 script.py
        rm script.py
        cd ..
    fi
done

