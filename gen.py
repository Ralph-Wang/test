#coding=utf-8
from lib import create
createSameTagWithText = create.createSameTagWithText

def GenerateXml(CEdict, fname='test.xml'):
    import xml.dom.minidom
    impl = xml.dom.minidom.getDOMImplementation()
    dom = impl.createDocument(None, 'All', None)
    root = dom.documentElement
    keys = sorted(list(CEdict.keys()), key=lambda t:len(t), reverse=1)
    chineseMod = createSameTagWithText(dom, "chinese")
    englishMod = createSameTagWithText(dom, "english")
    for i in keys:
        string = dom.createElement('string')
        root.appendChild(string)
        chineseE = chineseMod(i)
        string.appendChild(chineseE)

        englishE = englishMod(CEdict[i])
        string.appendChild(englishE)


    f= open('new/%s' % (fname), 'w', encoding='utf-8')
    dom.writexml(f, addindent='  ', newl='\n',encoding='utf-8')
    f.close()

def test():
    GenerateXml({"测试":"test","测试2":"test2","说啊":""})

if __name__ == '__main__':
    test()
