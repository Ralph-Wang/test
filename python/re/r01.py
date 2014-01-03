#!/usr/bin/env python
#coding=utf-8

import re

# 使用原文字符串, 避免转义问题
pattern = re.compile(r'hello')

match1 = pattern.match('hello world')
match2 = pattern.match('hellooo world')
match3 = pattern.match('helolo world')

if match1:
  print match1.group()
else:
  print 'match1 failed'

if match2:
  print match2.group()
else:
  print 'match2 failed'


if match3:
  print match3.group()
else:
  print 'match3 failed'
