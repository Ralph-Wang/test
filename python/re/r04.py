#!/usr/bin/env python
#coding=utf-8

import re

s = 'one1two2three3four4ten10'
p = re.compile(r'\d+')

print p.findall(s)
