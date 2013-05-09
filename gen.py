#coding=utf-8
from lib import Create

def GenerateXml(CEdict, fname='test.xml'):
    from xml.dom import minidom as dom
    from xml.etree import ElementTree as ET
    root = ET.Element('All')
    keys = sorted(list(CEdict.keys()), key=lambda t:len(t), reverse=1)
    chineseMod = Create.createSameTagWithText("chinese")
    englishMod = Create.createSameTagWithText("english")
    for i in keys:
        string = ET.Element('string')
        root.append(string)
        chineseE = chineseMod(i)
        string.append(chineseE)

        englishE = englishMod(CEdict[i])
        string.append(englishE)


    f= open('new/%s' % (fname), 'w', encoding='utf-8')
    Create.writePrettyXML(root, f)
    f.close()

def test():
    GenerateXml({"测试":"test","测试2":"test2","说啊":""})

if __name__ == '__main__':
    test()
