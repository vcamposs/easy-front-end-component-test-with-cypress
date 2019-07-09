#!/bin/bash

awk 'FNR==1{print ""}1' endpoint-*.yaml > endpoints-mock.yaml
stubby -d endpoints-mock.yaml -s 9003 -t 7449 -a 8884 -w
rm endpoints-mock.yaml