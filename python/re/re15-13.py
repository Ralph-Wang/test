#!/usr/bin/env python
# core python programming: practice 15-13
# a function to get type name from type(obj)

import re


def get_type(obj):
    s = str(type(obj))
    # print s
    p = re.compile(r"<\w+ '(.+)'>")
    return p.match(s).group(1)


class test:
    pass


class test2(object):
    pass


if __name__ == '__main__':
    print '0 is:', get_type(0)
    print "'' is:", get_type('')
    print 'get_type is:', get_type(get_type)
    print '[] is:', get_type([])
    print '() is:', get_type(())
    print '{} is:', get_type({})
    print 'test is:', get_type(test)
    print 'test() is:', get_type(test())
    print 'test2 is:', get_type(test2)
    print 'test2() is:', get_type(test2())
