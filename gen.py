#coding=utf-8
def createNodeWithText(dom, tag, txt="test"):
    Tag = dom.createElement(tag)
    Txt = dom.createTextNode(txt)
    Tag.appendChild(Txt)
    return Tag

def GenerateXml(CEdict, fname='test.xml'):
    import xml.dom.minidom
    impl = xml.dom.minidom.getDOMImplementation()
    dom = impl.createDocument(None, 'All', None)
    root = dom.documentElement
    keys = sorted(list(CEdict.keys()), key=lambda t:len(t), reverse=1)
    for i in keys:
#        new_Dict[i] = Dict[i]
        #print(i)
#print(len(Dict))
        string = dom.createElement('string')
        root.appendChild(string)
        chineseE = createNodeWithText(dom, 'chinese', i)
        string.appendChild(chineseE)

        englishE=dom.createElement('english')
        englishT=dom.createTextNode(CEdict[i])
        englishE.appendChild(englishT)
        string.appendChild(englishE)


    f= open('new/%s' % (fname), 'w', encoding='utf-8')
    dom.writexml(f, addindent='  ', newl='\n',encoding='utf-8')
    f.close()

def test():
    GenerateXml({"测试":"test","测试2":"test2"})

if __name__ == '__main__':
    test()
