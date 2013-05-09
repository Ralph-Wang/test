#coding=utf-8
def sort_file(fname):
    from lib import gen
    from lib import read
    Dict = read.readXml(fname)
    gen.GenerateXml(Dict, fname)
    print("%s Done..." % fname)

def GetFileList(wd):
    import os
    os.chdir(wd)
    Dir = os.listdir()
    new_Dir = []
    for i in Dir:
        if i.endswith('.xml'):
            new_Dir.append(i)
    return new_Dir

def test():
    #sort_file("test.xml")
    print(GetFileList())

def controller():
    import os
    cwd = os.getcwd()
    AllDir = os.walk(cwd)
    for d in AllDir:
        #print(d[0])
        if d[0].endswith('new') or d[0].endswith('__'):
            continue
        os.chdir(d[0])
        Dir = GetFileList(d[0])
        if 'new' not in os.listdir(d[0]):
            os.mkdir('new')
        for i in Dir:
            print("%s being sorted" % i)
            sort_file(i)
            print(zbd)

if __name__ == '__main__':
    import os
    #test()
    fileCounts = controller()
    os.system('pause')
#Test for branch in main
# Test for Branch
