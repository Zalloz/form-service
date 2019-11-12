#!/bin/bash
echo never > /sys/kernel/mm/transparent_hugepage/enabled
sysctl vm.overcommit_memory=1
sysctl -w net.core.somaxconn=1024
sysctl -w fs.file-max=100032
sysctl -p