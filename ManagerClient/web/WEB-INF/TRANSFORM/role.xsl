<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                version="1.0"
>
    <xsl:output method="xml" indent="yes" omit-xml-declaration="yes" encoding="utf-8" version="1.0"/>
    <xsl:template match="/">
        <roles xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
               xmlns="http://xml.netbeans.org/schema/role"
               xsi:schemaLocation="http://xml.netbeans.org/schema/role ../XSD/role.xsd">
            <xsl:for-each select="roles/role">
                <role id="{@id}" name="{@name}" canActiveAccount="{@canActiveAccount}" canActiveRole="{@canActiveRole}" canActiveBrand="{@canActiveBrand}" canActiveCategory="{@canActiveCategory}" canActiveCapacity="{@canActiveCapacity}" canActiveCamera="{@canActiveCamera}" canActiveCard="{@canActiveCard}" canActiveCrawler="{@canActiveCrawle}" />
            </xsl:for-each>
        </roles>
    </xsl:template>

</xsl:stylesheet>