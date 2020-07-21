<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                version="1.0"
                xmlns:uuid="java.util.UUID"
                exclude-result-prefixes="uuid"
>
    <xsl:output method="xml" indent="yes" omit-xml-declaration="yes" encoding="utf-8" version="1.0"/>
    <xsl:template match="/">
        <brands xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xmlns="http://xml.netbeans.org/schema/brand"
                xsi:schemaLocation="http://xml.netbeans.org/schema/brand ../XSD/brand.xsd">
            <xsl:for-each select="ol/li">
                <brand id="{uuid:randomUUID()}" name="{normalize-space(div[1]/a/text())}" />
            </xsl:for-each>
        </brands>
    </xsl:template>

</xsl:stylesheet>
