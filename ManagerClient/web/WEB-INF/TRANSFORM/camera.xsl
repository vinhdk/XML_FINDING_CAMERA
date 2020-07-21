<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                version="1.0"
>
    <xsl:output method="xml" indent="yes" omit-xml-declaration="yes" encoding="utf-8" version="1.0"/>
    <xsl:template match="/">
        <cameras xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xmlns="http://xml.netbeans.org/schema/camera"
                xsi:schemaLocation="http://xml.netbeans.org/schema/camera ../XSD/camera.xsd">
            <xsl:for-each select="cameras/camera">
                <camera id="{@id}" name="{@name}" price="{@price}" megapixel="{@megapixel}" image="{@image}" url="{@url}" brandId="{@brandId}" categoryId="{@categoryId}"/>
            </xsl:for-each>
        </cameras>
    </xsl:template>

</xsl:stylesheet>
