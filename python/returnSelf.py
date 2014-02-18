from distutils import log


class ReturnSelf(object):

    def __init__(self, theId=1):
        self._id = theId

    def show(self):
        log.warn(self._id)
        return self

if __name__ == '__main__':
    test = ReturnSelf(10)
    # show the _id 3 times
    test.show()\
        .show()\
        .show()
