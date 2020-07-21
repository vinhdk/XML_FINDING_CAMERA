<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                version="1.0"
>
    <xsl:output method="xml" indent="yes" omit-xml-declaration="yes" encoding="utf-8" version="1.0"/>
    <xsl:template match="/">
        <cards xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xmlns="http://xml.netbeans.org/schema/card"
                xsi:schemaLocation="http://xml.netbeans.org/schema/card ../XSD/card.xsd">
            <xsl:for-each select="cards/card">
                <card id="{@id}" name="{@name}" price="{@price}" image="{@image}" url="{@url}" name="{@name}" capacityId="{@capacityId}"/>
            </xsl:for-each>
        </cards>
    </xsl:template>

</xsl:stylesheet>
