<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                version="1.0"
>
    <xsl:output method="xml" indent="yes" omit-xml-declaration="yes" encoding="utf-8" version="1.0"/>
    <xsl:template match="/">
        <capacitys xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xmlns="http://xml.netbeans.org/schema/capacity"
                xsi:schemaLocation="http://xml.netbeans.org/schema/capacity ../XSD/capacity.xsd">
            <xsl:for-each select="capacitys/capacity">
                <capacity id="{@id}" name="{@name}" />
            </xsl:for-each>
        </capacitys>
    </xsl:template>

</xsl:stylesheet>
