<%-- 
    Document   : test-card
    Created on : Jul 14, 2020, 12:47:20 AM
    Author     : Vinh Dang
--%>

<%@ taglib prefix="x" uri="http://java.sun.com/jsp/jstl/xml" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Test Card</title>
        <link rel="stylesheet"  href="WEB-RENDER/src/styles.scss" />
        <style>
            .table {
                background-color: #f6f9fa;
                border: 1px solid lightgrey;
            }
            .table-row {
                display: grid;
                grid-template-columns: 7.5% 7.5% 7.5% 7.5% 7.5% 7.5% 7.5% 7.5% 7.5% 7.5% 7.5% 7.5%;
                grid-gap: 15px;
                margin-bottom: 15px;
            }
            .name span{
                color: #292929;
                font-size: 14px;
                font-family: "Lato", "Arial", "Helvetica,", sans-serif;
                font-weight: bold;
            }
            .price span{
                color: #292929;
                font-size: 18px;
                font-family: "Lato", "Arial", "Helvetica,", sans-serif;
                font-weight: bold;
            }
            .item-footer {
                border-top: 1px #a2a2a2 solid;
                vertical-align: middle;
                position: relative;
            }
            .item-footer img {
                width: 50px;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
            }
        </style>
    </head>
    <body>
        <c:set var="doc" value="${requestScope.LIST}"/>
        <div class="row bg-white radius-top-10">
            <div class="col-12 pr-5 pl-4 ">
                <div id="table-component" class="table-row h-100-per">
                    <x:forEach var="card" select="$doc/cards/card">
                        <div id="<x:out select="$card/@id"/>" class="col-3 h-50 mb-3 pointer item" style="border: 1px #a2a2a2 solid;">
                            <div class="item-body h-80-per text-center">
                                <img src="<x:out select="$card/@image"/>" title="<x:out select="$card/@name"/>" style="width: 200px; height: 200px"/>
                                <div class="name px-5 h-15-per">
                                    <span><x:out select="$card/@name"/></span>
                                </div>
                                <div class="price">
                                    <span>€ <x:out select="$card/@price"/></span>
                                </div>
                            </div>
                            <div class="item-footer h-20-per text-center">
                                <img width="50" src="WEB-RENDER/src/assets/menu/card.png"/>
                            </div>
                        </div>
                    </x:forEach>
                </div>
            </div>
        </div>
    </body>
</html>
