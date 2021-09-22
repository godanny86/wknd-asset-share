# WKND Asset Share

This is a sample implementation of [Asset Share Commons](https://github.com/adobe/asset-share-commons) for the WKND brand. It includes Asset Share Commons via the `all` module. The `ui.frontend` module has been created based off of the out of the box Asset Share Commons [Light Theme](https://github.com/adobe/asset-share-commons/tree/develop/ui.frontend.theme.light) and modified to match the WKND Branding standards.

## Documentation

Learn more about Asset Share Commons and how to create your own project: [https://opensource.adobe.com/asset-share-commons/](https://opensource.adobe.com/asset-share-commons/)

## How to use

Pre-compiled AEM packages are available under the latest release for easy installation on local environments using [CRX Package Manager](http://localhost:4502/crx/packmgr/index.jsp)

* [`aem-guides-wknd.all-x.x.x.zip`](https://github.com/adobe/aem-guides-wknd/releases/latest): AEM as a Cloud Service, default build

## How to build

To build all the modules run in the project root directory the following command with Maven 3:

    mvn clean install

To build all the modules and deploy the `all` package to a local instance of AEM, run in the project root directory the following command:

    mvn clean install -PautoInstallSinglePackage

## System Requirements

 AEM Version | Java SE | Maven
------------------------|---------|---------
AEM as a Cloud Service only | 8, 11 | 3.3.9+

Setup your local development environment for [AEM as a Cloud Service SDK](https://experienceleague.adobe.com/docs/experience-manager-learn/cloud-service/local-development-environment-set-up/overview.html) or for [older versions of AEM](https://experienceleague.adobe.com/docs/experience-manager-learn/foundation/development/set-up-a-local-aem-development-environment.html).