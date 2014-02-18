def readXml(fname):
    CEdict = {}
    from xml.etree import ElementTree as ET
    doc = ET.parse(fname)
    root = doc.getroot()
    strings = root.iter("string")
    for string in strings:
        chineseNode = string.find("chinese")
        englishNode = string.find("english")
        CValue = chineseNode.text
        EValue = englishNode.text
        CEdict[CValue] = EValue
    return CEdict


def test():
    import os
    res = readXml("test.xml")
    for i in res:
        print(i, res[i])
    print(len(res))
    os.system("pause")

if __name__ == '__main__':
    test()
