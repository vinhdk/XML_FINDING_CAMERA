<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                version="1.0"
                xmlns:uuid="java.util.UUID"
                exclude-result-prefixes="uuid"
>
    <xsl:output method="xml" indent="yes" omit-xml-declaration="yes" encoding="utf-8" version="1.0"/>
    <xsl:template match="/">
        <cards xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
               xmlns="http://xml.netbeans.org/schema/card"
               xsi:schemaLocation="http://xml.netbeans.org/schema/card ../XSD/card.xsd">
            <xsl:for-each select="div/div[@data-selenium='miniProductPage']">
                <xsl:variable name="price" select="normalize-space(translate(translate(div/div[@data-selenium='miniProductPageProductConversion']/div/div/div[@data-selenium='miniProductPagePricingCurrency']/span/span[@data-selenium='uppedDecimalPriceFirst']/text(),',',''),'$',''))"/>
                <xsl:if test="$price != ''">
                    <card id="{uuid:randomUUID()}" url="{normalize-space(div/div[@data-selenium='miniProductPageMedia']/div/a/@href)}" price="{$price}" name="{normalize-space(div/div[@data-selenium='miniProductPageDescription']/h3/a/span/text())}" image="{normalize-space(div/div[@data-selenium='miniProductPageMedia']/div/a/img/@src)}" />
                </xsl:if>
            </xsl:for-each>
        </cards>
    </xsl:template>

</xsl:stylesheet>
