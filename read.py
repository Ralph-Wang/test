def readXml(fname):
    CEdict = {}
    from xml.dom import minidom
    doc = minidom.parse(fname)
    root = doc.documentElement
    strings = root.getElementsByTagName("string")
    for string in strings:
        chineseNode = string.getElementsByTagName("chinese")[0]
        englishNode = string.getElementsByTagName("english")[0]
        try:
            CValue = chineseNode.childNodes[0].nodeValue
        except IndexError:
            CValue = ''
        try:
            EValue = englishNode.childNodes[0].nodeValue
        except  IndexError:
            EValue = ''
        CEdict[CValue] = EValue
    return CEdict

def test():
    import os
    res = readXml("test.xml")
    for i in res:
        print(i,res[i])
    print(len(res))
    os.system("pause")

if __name__ == '__main__':
    test()
