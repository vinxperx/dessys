#!/bin/bash


nv=${PWD##*/}
echo $nv

for i in *; do
    bib="[[./${i}|wireframe01]]"
    cd ..
    echo $bib >> "${nv}.txt"
    cd ${nv}
done

