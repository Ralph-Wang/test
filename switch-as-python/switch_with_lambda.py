from distutils import log


cases = {'a':lambda:log.warn('in stateA'), 'b':lambda:log.warn('in stateB'),
		'c':lambda:log.warn('in stateC')}

def switch(case):
	if case in cases:
		cases[case]()
	else:
		log.warn('in stateDefualt')

def test():
	switch('b')
	switch('c')
	switch('a')
	switch('x')

test()
