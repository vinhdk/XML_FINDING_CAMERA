<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                version="1.0"
                xmlns:uuid="java.util.UUID"
                exclude-result-prefixes="uuid"
>
    <xsl:output method="xml" indent="yes" omit-xml-declaration="yes" encoding="utf-8" version="1.0"/>
    <xsl:template match="/">
        <cameras xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                 xmlns="http://xml.netbeans.org/schema/camera"
                 xsi:schemaLocation="http://xml.netbeans.org/schema/camera ../XSD/camera.xsd">
            <xsl:for-each select="ul/li">
                <xsl:variable name="temp1" select="normalize-space(translate(div/div[@class='price-info']/div[@class='price-box']/p[@class='old-price']/span[@class='price']/text(),',',''))"/>
                <xsl:variable name="temp2" select="normalize-space(translate(div/div[@class='price-info']/div[@class='price-box']/span/span[@class='price']/text(),',',''))"/>
                <xsl:variable name="price">
                    <xsl:if test="$temp1 != ''">
                        <xsl:value-of select="$temp1"/>
                    </xsl:if>
                    <xsl:if test="$temp1 = ''">
                        <xsl:value-of select="$temp2"/>
                    </xsl:if>
                </xsl:variable>
                <camera id="{uuid:randomUUID()}" price="{$price}" name="{normalize-space(a[@class='product-image']/@title)}" image="{normalize-space(a[@class='product-image']/img/@src)}" url="{normalize-space(a/@href)}" />
            </xsl:for-each>
        </cameras>
    </xsl:template>

</xsl:stylesheet>
