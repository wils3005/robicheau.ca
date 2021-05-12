#!/usr/bin/env bash

while true; do
  next dev &
  pid=$!
  sleep 300
  kill -2 $pid
done
