from distutils import log

def stateA():
	log.warn('stateA called')

def stateB():
	log.warn('stateB called')

def stateC():
	log.warn('stateC called')

def stateDefault():
	log.warn('stateDefault called')

cases = {'a':stateA, 'b':stateB, 'c':stateC}

def switch(case):
	if case in cases:
		cases[case]()
	else:
		stateDefault()

def test():
	switch('b')
	switch('c')
	switch('a')
	switch('x')

test()
