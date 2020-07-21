<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                version="1.0"
>
    <xsl:output method="xml" indent="yes" omit-xml-declaration="yes" encoding="utf-8" version="1.0"/>
    <xsl:template match="/">
        <accounts xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xmlns="http://xml.netbeans.org/schema/account"
                xsi:schemaLocation="http://xml.netbeans.org/schema/account ../XSD/account.xsd">
            <xsl:for-each select="accounts/account">
                <account id="{@id}" username="{@username}" fullname="{@fullname}" phone="{@phone}" email="{@email}" address="{@address}" roleId="{@roleId}"/>
            </xsl:for-each>
        </accounts>
    </xsl:template>

</xsl:stylesheet>
