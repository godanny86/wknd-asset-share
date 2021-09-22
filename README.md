# WKND Asset Share

This is a sample implementation of [Asset Share Commons](https://github.com/adobe/asset-share-commons) for the WKND brand.

![WKND Asset Share Commons theme](https://user-images.githubusercontent.com/8974514/134435899-ac6f0b11-da30-40e4-b744-334d0b16758f.png)

It includes Asset Share Commons via the `all` module. The `ui.frontend` module has been created based off of the out of the box Asset Share Commons [Light Theme](https://github.com/adobe/asset-share-commons/tree/develop/ui.frontend.theme.light) and modified to match the WKND Branding standards.

## Documentation

Learn more about Asset Share Commons and how to create your own project: [https://opensource.adobe.com/asset-share-commons/](https://opensource.adobe.com/asset-share-commons/)

## How to use

A pre-compiled AEM package is available under the latest release for easy installation on local environments using [CRX Package Manager](http://localhost:4502/crx/packmgr/index.jsp)

* [`wknd-asset-share.all-x.x.x.zip`](https://github.com/godanny86/wknd-asset-share/releases/latest): AEM as a Cloud Service, default build

It may also be helpful to install the full [WKND Sites project](https://github.com/adobe/aem-guides-wknd/releases/latest) or the [asset-share-commons.ui.content.sample-2.x.x.zip](https://github.com/adobe/asset-share-commons/releases/latest) so that you have some digital assets to work with.

## How to build

To build all the modules run in the project root directory the following command with Maven 3:

    mvn clean install

To build all the modules and deploy the `all` package to a local instance of AEM, run in the project root directory the following command:

    mvn clean install -PautoInstallSinglePackage

## System Requirements

 AEM Version | Java SE | Maven
------------------------|---------|---------
AEM as a Cloud Service only | 8, 11 | 3.3.9+

Setup your local development environment for [AEM as a Cloud Service SDK](https://experienceleague.adobe.com/docs/experience-manager-learn/cloud-service/local-development-environment-set-up/overview.html).