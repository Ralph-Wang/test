#coding=utf-8
def createSameTagWithText(dom, tag="TAG"):
    def _wraper(txt=""):
        Tag = dom.createElement(tag)
        Txt = dom.createTextNode(txt)
        Tag.appendChild(Txt)
        return Tag
    return _wraper
