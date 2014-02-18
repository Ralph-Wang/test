# coding=utf-8
from xml.etree import ElementTree as ET


def createSameTagWithText(tag="TAG"):
    def _wraper(txt=""):
        Tag = ET.Element(tag)
        Tag.text = txt
        return Tag
    return _wraper


def writePrettyXML(Element, fobj):
    from xml.dom import minidom as Dom
    strXml = ET.tostring(Element, encoding='utf-8')
    doc = Dom.parseString(strXml)
    doc.writexml(fobj, addindent='  ', newl='\n', encoding='utf-8')


def __test():
    from xml.etree import ElementTree as ET
    sameTag = createSameTagWithText('test')
    ET.dump(sameTag('test1'))
    ET.dump(sameTag('test2'))

if __name__ == '__main__':
    __test()
