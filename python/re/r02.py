#!/usr/bin/env python

import re

pattern = re.compile(r'world')

match = pattern.match('hello world!')
search = pattern.search('hello world!')

if match:
  print match.group()
else:
  print 'match failed'

if search:
  print search.group()
else:
  print 'search failed'
