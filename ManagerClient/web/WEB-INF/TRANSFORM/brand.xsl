<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                version="1.0"
>
    <xsl:output method="xml" indent="yes" omit-xml-declaration="yes" encoding="utf-8" version="1.0"/>
    <xsl:template match="/">
        <brands xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xmlns="http://xml.netbeans.org/schema/brand"
                xsi:schemaLocation="http://xml.netbeans.org/schema/brand ../XSD/brand.xsd">
            <xsl:for-each select="brands/brand">
                <brand id="{@id}" name="{@name}" />
            </xsl:for-each>
        </brands>
    </xsl:template>

</xsl:stylesheet>
