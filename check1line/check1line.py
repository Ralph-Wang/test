def check1Line(fname):
    fobj = open(fname, 'r')
    fobj.seek(0)
    linescount = len(fobj.readlines())
    if linescount == 1:
        return True
    else:
        return False

def fileFilter(flist):
    newflist = []
    atupple = ('.aspx','.js','.css')
    for i in flist:
        if i.endswith(atupple):
            newflist.append(i)
    return newflist

def main():
    import os
    cwd = os.getcwd()
    AllDir = os.walk(cwd)
    for d in AllDir:
        os.chdir(d[0])
        cdir = os.listdir()
        clist = fileFilter(cdir)
        for i in clist:
            res = check1Line(i)
            if res:
                #print(d[0],'\\',i,'只有一行')
                pass
            else:
                print(d[0],'\\',i,'没有被压缩到1行,长标题引人注目的说')


if __name__ == '__main__':
    import os
    main()
    os.system('pause')
