#coding=utf-8
def sort_file(fname):
        import gen
        import read
        import os
        Dict = read.readXml(fname)
        gen.GenerateXml(Dict, fname)
        print("Done..." % fname)
        #os.system("pause")

def GetFileList(wd):
    import os
#    print(wd)
    os.chdir(wd)
#    print(os.getcwd())
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
if __name__ == '__main__':
    import os
    #test()
    try:
        fileCounts = controller()
    finally:
        os.system('pause')
