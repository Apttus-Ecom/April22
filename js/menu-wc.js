'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Conga Digital Commerce April &#x27;22</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter additional">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#additional-pages"'
                            : 'data-target="#xs-additional-pages"' }>
                            <span class="icon ion-ios-book"></span>
                            <span>Upgrade Information</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"' }>
                                    <li class="link ">
                                        <a href="additional-documentation/upgrading-the-digital-commerce-template-from-december-&#x27;21-to-april-&#x27;22.html" data-type="entity-link" data-context-id="additional">Upgrading the Digital Commerce Template from December &#x27;21 to April &#x27;22</a>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/upgrading-the-partner-commerce-template-from-december-&#x27;21-to-april-&#x27;22.html" data-type="entity-link" data-context-id="additional">Upgrading the Partner Commerce Template from December &#x27;21 to April &#x27;22</a>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/upgrading-the-digital-commerce-template-from-spring-&#x27;21-to-april-&#x27;22.html" data-type="entity-link" data-context-id="additional">Upgrading the Digital Commerce Template from Spring &#x27;21 to April &#x27;22</a>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/upgrading-the-partner-commerce-template-from-spring-&#x27;21-to-april-&#x27;22.html" data-type="entity-link" data-context-id="additional">Upgrading the Partner Commerce Template from Spring &#x27;21 to April &#x27;22</a>
                                    </li>
                        </ul>
                    </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AlertModule.html" data-type="entity-link" >AlertModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AlertModule-811d883be68363940a334a24cb69690e"' : 'data-target="#xs-components-links-module-AlertModule-811d883be68363940a334a24cb69690e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AlertModule-811d883be68363940a334a24cb69690e"' :
                                            'id="xs-components-links-module-AlertModule-811d883be68363940a334a24cb69690e"' }>
                                            <li class="link">
                                                <a href="components/AlertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlertComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-8053bcbd0829f4707cc293c066b74b2d"' : 'data-target="#xs-components-links-module-AppModule-8053bcbd0829f4707cc293c066b74b2d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-8053bcbd0829f4707cc293c066b74b2d"' :
                                            'id="xs-components-links-module-AppModule-8053bcbd0829f4707cc293c066b74b2d"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-a2b341628a810d0ed5d5a4b9d5eff3cf-1"' : 'data-target="#xs-components-links-module-AppModule-a2b341628a810d0ed5d5a4b9d5eff3cf-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-a2b341628a810d0ed5d5a4b9d5eff3cf-1"' :
                                            'id="xs-components-links-module-AppModule-a2b341628a810d0ed5d5a4b9d5eff3cf-1"' }>
                                            <li class="link">
                                                <a href="components/AppComponent-1.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AssetModule.html" data-type="entity-link" >AssetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AssetModule-c9487f36b105cc118ae1199e81a78dc6"' : 'data-target="#xs-components-links-module-AssetModule-c9487f36b105cc118ae1199e81a78dc6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AssetModule-c9487f36b105cc118ae1199e81a78dc6"' :
                                            'id="xs-components-links-module-AssetModule-c9487f36b105cc118ae1199e81a78dc6"' }>
                                            <li class="link">
                                                <a href="components/AssetListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AssetListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AssetsModule.html" data-type="entity-link" >AssetsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AssetsModule-931a87a130aa86726d047130a3cacb73"' : 'data-target="#xs-components-links-module-AssetsModule-931a87a130aa86726d047130a3cacb73"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AssetsModule-931a87a130aa86726d047130a3cacb73"' :
                                            'id="xs-components-links-module-AssetsModule-931a87a130aa86726d047130a3cacb73"' }>
                                            <li class="link">
                                                <a href="components/AssetListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AssetListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductFamilyFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductFamilyFilterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AssetsRoutingModule.html" data-type="entity-link" >AssetsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AssetsRoutingModule.html" data-type="entity-link" >AssetsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CartModule.html" data-type="entity-link" >CartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CartModule-35307054764aea7dc379b44a707dcfd9"' : 'data-target="#xs-components-links-module-CartModule-35307054764aea7dc379b44a707dcfd9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CartModule-35307054764aea7dc379b44a707dcfd9"' :
                                            'id="xs-components-links-module-CartModule-35307054764aea7dc379b44a707dcfd9"' }>
                                            <li class="link">
                                                <a href="components/CardFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SummaryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SummaryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CartsModule.html" data-type="entity-link" >CartsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CartsModule-abc8232c73c5fbbe3e2f8a25d69be160"' : 'data-target="#xs-components-links-module-CartsModule-abc8232c73c5fbbe3e2f8a25d69be160"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CartsModule-abc8232c73c5fbbe3e2f8a25d69be160"' :
                                            'id="xs-components-links-module-CartsModule-abc8232c73c5fbbe3e2f8a25d69be160"' }>
                                            <li class="link">
                                                <a href="components/CartDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CartListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CartTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartTableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CartsRoutingModule.html" data-type="entity-link" >CartsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ChangePasswordModule.html" data-type="entity-link" >ChangePasswordModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ChangePasswordModule-fcdf1836a1e0989f80b22822beec3d14"' : 'data-target="#xs-components-links-module-ChangePasswordModule-fcdf1836a1e0989f80b22822beec3d14"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ChangePasswordModule-fcdf1836a1e0989f80b22822beec3d14"' :
                                            'id="xs-components-links-module-ChangePasswordModule-fcdf1836a1e0989f80b22822beec3d14"' }>
                                            <li class="link">
                                                <a href="components/ChangePasswordLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChangePasswordLayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CheckoutModule.html" data-type="entity-link" >CheckoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CheckoutModule-17a652f064f9d59a850bd56411ad5359"' : 'data-target="#xs-components-links-module-CheckoutModule-17a652f064f9d59a850bd56411ad5359"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CheckoutModule-17a652f064f9d59a850bd56411ad5359"' :
                                            'id="xs-components-links-module-CheckoutModule-17a652f064f9d59a850bd56411ad5359"' }>
                                            <li class="link">
                                                <a href="components/CheckoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CheckoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CompareModule.html" data-type="entity-link" >CompareModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CompareModule-fbb09c6973338442ca1701ca4f6492ac"' : 'data-target="#xs-components-links-module-CompareModule-fbb09c6973338442ca1701ca4f6492ac"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CompareModule-fbb09c6973338442ca1701ca4f6492ac"' :
                                            'id="xs-components-links-module-CompareModule-fbb09c6973338442ca1701ca4f6492ac"' }>
                                            <li class="link">
                                                <a href="components/CompareLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompareLayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CompareModule.html" data-type="entity-link" >CompareModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ComponentModule.html" data-type="entity-link" >ComponentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ComponentModule-a923896d9a4cb0ecbde18d228fd51cb8"' : 'data-target="#xs-components-links-module-ComponentModule-a923896d9a4cb0ecbde18d228fd51cb8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComponentModule-a923896d9a4cb0ecbde18d228fd51cb8"' :
                                            'id="xs-components-links-module-ComponentModule-a923896d9a4cb0ecbde18d228fd51cb8"' }>
                                            <li class="link">
                                                <a href="components/AttachmentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AttachmentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoryCarouselComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryCarouselComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavAccountComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavAccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ComponentModule.html" data-type="entity-link" >ComponentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ComponentModule-df501189241d5a07c45281a183a1c5ed-1"' : 'data-target="#xs-components-links-module-ComponentModule-df501189241d5a07c45281a183a1c5ed-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComponentModule-df501189241d5a07c45281a183a1c5ed-1"' :
                                            'id="xs-components-links-module-ComponentModule-df501189241d5a07c45281a183a1c5ed-1"' }>
                                            <li class="link">
                                                <a href="components/ActionBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActionBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoryCarouselComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryCarouselComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProgressComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProgressComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConfigurationSummaryModule.html" data-type="entity-link" >ConfigurationSummaryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ConfigurationSummaryModule-046e624ddb3de301290bfc7b21ea3a39"' : 'data-target="#xs-components-links-module-ConfigurationSummaryModule-046e624ddb3de301290bfc7b21ea3a39"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConfigurationSummaryModule-046e624ddb3de301290bfc7b21ea3a39"' :
                                            'id="xs-components-links-module-ConfigurationSummaryModule-046e624ddb3de301290bfc7b21ea3a39"' }>
                                            <li class="link">
                                                <a href="components/ProductConfigurationSummaryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductConfigurationSummaryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConstraintRuleModule.html" data-type="entity-link" >ConstraintRuleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ConstraintRuleModule-355c429f1a85fad37196af743f6bf8d9"' : 'data-target="#xs-components-links-module-ConstraintRuleModule-355c429f1a85fad37196af743f6bf8d9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConstraintRuleModule-355c429f1a85fad37196af743f6bf8d9"' :
                                            'id="xs-components-links-module-ConstraintRuleModule-355c429f1a85fad37196af743f6bf8d9"' }>
                                            <li class="link">
                                                <a href="components/CRIconComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CRIconComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConstraintRuleAlertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConstraintRuleAlertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConstraintRuleSidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConstraintRuleSidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-984f9ee436cf455e94e8250f395cd3bf"' : 'data-target="#xs-components-links-module-DashboardModule-984f9ee436cf455e94e8250f395cd3bf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-984f9ee436cf455e94e8250f395cd3bf"' :
                                            'id="xs-components-links-module-DashboardModule-984f9ee436cf455e94e8250f395cd3bf"' }>
                                            <li class="link">
                                                <a href="components/DashboardViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardViewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRoutingModule.html" data-type="entity-link" >DashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DataFilterModule.html" data-type="entity-link" >DataFilterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DataFilterModule-32def97f9bc700f4ced5911fe7225497"' : 'data-target="#xs-components-links-module-DataFilterModule-32def97f9bc700f4ced5911fe7225497"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DataFilterModule-32def97f9bc700f4ced5911fe7225497"' :
                                            'id="xs-components-links-module-DataFilterModule-32def97f9bc700f4ced5911fe7225497"' }>
                                            <li class="link">
                                                <a href="components/DataFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataFilterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DirectivesModule.html" data-type="entity-link" >DirectivesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-DirectivesModule-0f4176c75eb7969bca337841340f6ec7"' : 'data-target="#xs-directives-links-module-DirectivesModule-0f4176c75eb7969bca337841340f6ec7"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-DirectivesModule-0f4176c75eb7969bca337841340f6ec7"' :
                                        'id="xs-directives-links-module-DirectivesModule-0f4176c75eb7969bca337841340f6ec7"' }>
                                        <li class="link">
                                            <a href="directives/AutoFocusDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AutoFocusDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FavoriteModalModule.html" data-type="entity-link" >FavoriteModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FavoriteModalModule-5fd27f77f9e504379bfd7143944e1737"' : 'data-target="#xs-components-links-module-FavoriteModalModule-5fd27f77f9e504379bfd7143944e1737"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FavoriteModalModule-5fd27f77f9e504379bfd7143944e1737"' :
                                            'id="xs-components-links-module-FavoriteModalModule-5fd27f77f9e504379bfd7143944e1737"' }>
                                            <li class="link">
                                                <a href="components/FavoriteModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FavoriteModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FavoriteModule.html" data-type="entity-link" >FavoriteModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FavoriteModule-dcbef7384873a0469f92b07171a685ce"' : 'data-target="#xs-components-links-module-FavoriteModule-dcbef7384873a0469f92b07171a685ce"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FavoriteModule-dcbef7384873a0469f92b07171a685ce"' :
                                            'id="xs-components-links-module-FavoriteModule-dcbef7384873a0469f92b07171a685ce"' }>
                                            <li class="link">
                                                <a href="components/FavoriteDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FavoriteDetailsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FavoritesModule.html" data-type="entity-link" >FavoritesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FavoritesModule-f9841131b16a546f33fe0881281c0979"' : 'data-target="#xs-components-links-module-FavoritesModule-f9841131b16a546f33fe0881281c0979"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FavoritesModule-f9841131b16a546f33fe0881281c0979"' :
                                            'id="xs-components-links-module-FavoritesModule-f9841131b16a546f33fe0881281c0979"' }>
                                            <li class="link">
                                                <a href="components/FavoriteDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FavoriteDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FavoriteListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FavoriteListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FavoritesRoutingModule.html" data-type="entity-link" >FavoritesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-6549eb0c66d2b810aa854506ef4167e9"' : 'data-target="#xs-components-links-module-HomeModule-6549eb0c66d2b810aa854506ef4167e9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-6549eb0c66d2b810aa854506ef4167e9"' :
                                            'id="xs-components-links-module-HomeModule-6549eb0c66d2b810aa854506ef4167e9"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InstalledProductsModule.html" data-type="entity-link" >InstalledProductsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InstalledProductsModule-4c700d1d2699f4b557b7de7c8e35d47d"' : 'data-target="#xs-components-links-module-InstalledProductsModule-4c700d1d2699f4b557b7de7c8e35d47d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InstalledProductsModule-4c700d1d2699f4b557b7de7c8e35d47d"' :
                                            'id="xs-components-links-module-InstalledProductsModule-4c700d1d2699f4b557b7de7c8e35d47d"' }>
                                            <li class="link">
                                                <a href="components/AssetActionFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AssetActionFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InstalledProductsLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InstalledProductsLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PriceTypeFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PriceTypeFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductFamilyFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductFamilyFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RenewalFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RenewalFilterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LineitemCardModule.html" data-type="entity-link" >LineitemCardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LineitemCardModule-833c2cc34cf2c44ec3c91edcccf86f66"' : 'data-target="#xs-components-links-module-LineitemCardModule-833c2cc34cf2c44ec3c91edcccf86f66"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LineitemCardModule-833c2cc34cf2c44ec3c91edcccf86f66"' :
                                            'id="xs-components-links-module-LineitemCardModule-833c2cc34cf2c44ec3c91edcccf86f66"' }>
                                            <li class="link">
                                                <a href="components/LineitemCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LineitemCardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LineItemTableRowModule.html" data-type="entity-link" >LineItemTableRowModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LineItemTableRowModule-48f8bbfb5a74dcb05deaaae578e61c2d"' : 'data-target="#xs-components-links-module-LineItemTableRowModule-48f8bbfb5a74dcb05deaaae578e61c2d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LineItemTableRowModule-48f8bbfb5a74dcb05deaaae578e61c2d"' :
                                            'id="xs-components-links-module-LineItemTableRowModule-48f8bbfb5a74dcb05deaaae578e61c2d"' }>
                                            <li class="link">
                                                <a href="components/AdditionalInformationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdditionalInformationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LineItemMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LineItemMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LineItemTableRowComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LineItemTableRowComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginFormModule.html" data-type="entity-link" >LoginFormModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginFormModule-e4267a665761b7fa740a8945a22d733d"' : 'data-target="#xs-components-links-module-LoginFormModule-e4267a665761b7fa740a8945a22d733d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginFormModule-e4267a665761b7fa740a8945a22d733d"' :
                                            'id="xs-components-links-module-LoginFormModule-e4267a665761b7fa740a8945a22d733d"' }>
                                            <li class="link">
                                                <a href="components/LoginFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-df4a8b7b0d897911a7131dd3438e309b"' : 'data-target="#xs-components-links-module-LoginModule-df4a8b7b0d897911a7131dd3438e309b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-df4a8b7b0d897911a7131dd3438e309b"' :
                                            'id="xs-components-links-module-LoginModule-df4a8b7b0d897911a7131dd3438e309b"' }>
                                            <li class="link">
                                                <a href="components/LoginLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginLayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-30879b64addf4d9b0d3b60371ebfc8b3-1"' : 'data-target="#xs-components-links-module-LoginModule-30879b64addf4d9b0d3b60371ebfc8b3-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-30879b64addf4d9b0d3b60371ebfc8b3-1"' :
                                            'id="xs-components-links-module-LoginModule-30879b64addf4d9b0d3b60371ebfc8b3-1"' }>
                                            <li class="link">
                                                <a href="components/LoginViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogoutViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogoutViewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginRoutingModule.html" data-type="entity-link" >LoginRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ManageCartModule.html" data-type="entity-link" >ManageCartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ManageCartModule-0421b2c43901186bfbcf8ce175e0d6d4"' : 'data-target="#xs-components-links-module-ManageCartModule-0421b2c43901186bfbcf8ce175e0d6d4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ManageCartModule-0421b2c43901186bfbcf8ce175e0d6d4"' :
                                            'id="xs-components-links-module-ManageCartModule-0421b2c43901186bfbcf8ce175e0d6d4"' }>
                                            <li class="link">
                                                <a href="components/CartSummaryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartSummaryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CartTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManageCartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManageCartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MyAccountModule.html" data-type="entity-link" >MyAccountModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MyAccountModule-0de9fecefd8309c868f135fb0cda29af"' : 'data-target="#xs-components-links-module-MyAccountModule-0de9fecefd8309c868f135fb0cda29af"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MyAccountModule-0de9fecefd8309c868f135fb0cda29af"' :
                                            'id="xs-components-links-module-MyAccountModule-0de9fecefd8309c868f135fb0cda29af"' }>
                                            <li class="link">
                                                <a href="components/AddressBookComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddressBookComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FavoriteListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FavoriteListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyAccountLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyAccountLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuoteListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuoteListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WishlistsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WishlistsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrderHistoryModule.html" data-type="entity-link" >OrderHistoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrderHistoryModule-868bee3aa6adeeca574e9fcf615badc9"' : 'data-target="#xs-components-links-module-OrderHistoryModule-868bee3aa6adeeca574e9fcf615badc9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrderHistoryModule-868bee3aa6adeeca574e9fcf615badc9"' :
                                            'id="xs-components-links-module-OrderHistoryModule-868bee3aa6adeeca574e9fcf615badc9"' }>
                                            <li class="link">
                                                <a href="components/OrderHistoryLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderHistoryLayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrderModule.html" data-type="entity-link" >OrderModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersModule.html" data-type="entity-link" >OrdersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrdersModule-cdaa6a3d3e9c58d294376078a291ea59"' : 'data-target="#xs-components-links-module-OrdersModule-cdaa6a3d3e9c58d294376078a291ea59"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrdersModule-cdaa6a3d3e9c58d294376078a291ea59"' :
                                            'id="xs-components-links-module-OrdersModule-cdaa6a3d3e9c58d294376078a291ea59"' }>
                                            <li class="link">
                                                <a href="components/OrderDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrderListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersRoutingModule.html" data-type="entity-link" >OrdersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PaymentMessageModule.html" data-type="entity-link" >PaymentMessageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PaymentMessageModule-62684c675428c8a4c9d757c2542c65b4"' : 'data-target="#xs-components-links-module-PaymentMessageModule-62684c675428c8a4c9d757c2542c65b4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PaymentMessageModule-62684c675428c8a4c9d757c2542c65b4"' :
                                            'id="xs-components-links-module-PaymentMessageModule-62684c675428c8a4c9d757c2542c65b4"' }>
                                            <li class="link">
                                                <a href="components/PaymentMesageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentMesageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PaymentModule.html" data-type="entity-link" >PaymentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PaymentModule-c4df33408ce09b8bc9bbaee7e4f36848"' : 'data-target="#xs-components-links-module-PaymentModule-c4df33408ce09b8bc9bbaee7e4f36848"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PaymentModule-c4df33408ce09b8bc9bbaee7e4f36848"' :
                                            'id="xs-components-links-module-PaymentModule-c4df33408ce09b8bc9bbaee7e4f36848"' }>
                                            <li class="link">
                                                <a href="components/PaymentDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PaymentMessageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentMessageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PaymentRoutingModule.html" data-type="entity-link" >PaymentRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PipesModule.html" data-type="entity-link" >PipesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-PipesModule-60b783153072d36e37e29d12a7507ae7"' : 'data-target="#xs-pipes-links-module-PipesModule-60b783153072d36e37e29d12a7507ae7"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-PipesModule-60b783153072d36e37e29d12a7507ae7"' :
                                            'id="xs-pipes-links-module-PipesModule-60b783153072d36e37e29d12a7507ae7"' }>
                                            <li class="link">
                                                <a href="pipes/SplitPascalCasePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SplitPascalCasePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PriceModalModule.html" data-type="entity-link" >PriceModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PriceModalModule-6a4feb71fe41103b47b0f107cb04f611"' : 'data-target="#xs-components-links-module-PriceModalModule-6a4feb71fe41103b47b0f107cb04f611"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PriceModalModule-6a4feb71fe41103b47b0f107cb04f611"' :
                                            'id="xs-components-links-module-PriceModalModule-6a4feb71fe41103b47b0f107cb04f611"' }>
                                            <li class="link">
                                                <a href="components/PriceModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PriceModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PricingModule.html" data-type="entity-link" >PricingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-PricingModule-b322a88a596ec2db02707a1824c38af3"' : 'data-target="#xs-pipes-links-module-PricingModule-b322a88a596ec2db02707a1824c38af3"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-PricingModule-b322a88a596ec2db02707a1824c38af3"' :
                                            'id="xs-pipes-links-module-PricingModule-b322a88a596ec2db02707a1824c38af3"' }>
                                            <li class="link">
                                                <a href="pipes/AttributeValuePricePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AttributeValuePricePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/CartItemPricePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartItemPricePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/CartPricePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartPricePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ConvertCurrencyPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConvertCurrencyPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/LineItemPricePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LineItemPricePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/LocalCurrencyPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalCurrencyPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/OptionPricePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OptionPricePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/OrderLineItemPricePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderLineItemPricePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/OrderPricePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderPricePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ProductPricePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductPricePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/QuotePricePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuotePricePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductSearchModule.html" data-type="entity-link" >ProductSearchModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProductSearchModule-9ef50d0ebcc575bed8b9cfc13b4f2432"' : 'data-target="#xs-components-links-module-ProductSearchModule-9ef50d0ebcc575bed8b9cfc13b4f2432"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductSearchModule-9ef50d0ebcc575bed8b9cfc13b4f2432"' :
                                            'id="xs-components-links-module-ProductSearchModule-9ef50d0ebcc575bed8b9cfc13b4f2432"' }>
                                            <li class="link">
                                                <a href="components/ProductSearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductSearchComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsModule.html" data-type="entity-link" >ProductsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProductsModule-d1fdb61695b3db03615f1e8f0a6ba6df"' : 'data-target="#xs-components-links-module-ProductsModule-d1fdb61695b3db03615f1e8f0a6ba6df"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductsModule-d1fdb61695b3db03615f1e8f0a6ba6df"' :
                                            'id="xs-components-links-module-ProductsModule-d1fdb61695b3db03615f1e8f0a6ba6df"' }>
                                            <li class="link">
                                                <a href="components/ProductDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResultsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResultsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TabAttachmentsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TabAttachmentsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TabFeaturesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TabFeaturesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsModule.html" data-type="entity-link" >ProductsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProductsModule-a2934c897174d318281678f0f99d20d7-1"' : 'data-target="#xs-components-links-module-ProductsModule-a2934c897174d318281678f0f99d20d7-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductsModule-a2934c897174d318281678f0f99d20d7-1"' :
                                            'id="xs-components-links-module-ProductsModule-a2934c897174d318281678f0f99d20d7-1"' }>
                                            <li class="link">
                                                <a href="components/PgProductConfigurationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PgProductConfigurationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsRoutingModule.html" data-type="entity-link" >ProductsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/QuoteModule.html" data-type="entity-link" >QuoteModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-QuoteModule-44a0ab8af83aa4721f55baaee302d1be"' : 'data-target="#xs-components-links-module-QuoteModule-44a0ab8af83aa4721f55baaee302d1be"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-QuoteModule-44a0ab8af83aa4721f55baaee302d1be"' :
                                            'id="xs-components-links-module-QuoteModule-44a0ab8af83aa4721f55baaee302d1be"' }>
                                            <li class="link">
                                                <a href="components/CreateQuoteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateQuoteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuoteDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuoteDetailsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/QuotesModule.html" data-type="entity-link" >QuotesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-QuotesModule-eb9e0fc654415e4719a6d058f49c292c"' : 'data-target="#xs-components-links-module-QuotesModule-eb9e0fc654415e4719a6d058f49c292c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-QuotesModule-eb9e0fc654415e4719a6d058f49c292c"' :
                                            'id="xs-components-links-module-QuotesModule-eb9e0fc654415e4719a6d058f49c292c"' }>
                                            <li class="link">
                                                <a href="components/CreateQuoteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateQuoteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuoteDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuoteDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuoteListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuoteListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RequestQuoteFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RequestQuoteFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/QuotesRoutingModule.html" data-type="entity-link" >QuotesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RevalidateCartModalModule.html" data-type="entity-link" >RevalidateCartModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RevalidateCartModalModule-203b4d88c47f97170c140bb84a4c64c4"' : 'data-target="#xs-components-links-module-RevalidateCartModalModule-203b4d88c47f97170c140bb84a4c64c4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RevalidateCartModalModule-203b4d88c47f97170c140bb84a4c64c4"' :
                                            'id="xs-components-links-module-RevalidateCartModalModule-203b4d88c47f97170c140bb84a4c64c4"' }>
                                            <li class="link">
                                                <a href="components/RevalidateCartModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RevalidateCartModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SelectAllModule.html" data-type="entity-link" >SelectAllModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SelectAllModule-efa91f0623cb75050b6b6a11ff47870d"' : 'data-target="#xs-components-links-module-SelectAllModule-efa91f0623cb75050b6b6a11ff47870d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SelectAllModule-efa91f0623cb75050b6b6a11ff47870d"' :
                                            'id="xs-components-links-module-SelectAllModule-efa91f0623cb75050b6b6a11ff47870d"' }>
                                            <li class="link">
                                                <a href="components/SelectAllComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelectAllComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TableModule.html" data-type="entity-link" >TableModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TableModule-8df234da61a9434421f6c374be5fdb2b"' : 'data-target="#xs-components-links-module-TableModule-8df234da61a9434421f6c374be5fdb2b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TableModule-8df234da61a9434421f6c374be5fdb2b"' :
                                            'id="xs-components-links-module-TableModule-8df234da61a9434421f6c374be5fdb2b"' }>
                                            <li class="link">
                                                <a href="components/TableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserModule-77033b9e8c0ccef300a01e018d0270ff"' : 'data-target="#xs-components-links-module-UserModule-77033b9e8c0ccef300a01e018d0270ff"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-77033b9e8c0ccef300a01e018d0270ff"' :
                                            'id="xs-components-links-module-UserModule-77033b9e8c0ccef300a01e018d0270ff"' }>
                                            <li class="link">
                                                <a href="components/ChangePasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChangePasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SettingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SettingsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserRoutingModule.html" data-type="entity-link" >UserRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AddressComponent.html" data-type="entity-link" >AddressComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AddToCartComponent.html" data-type="entity-link" >AddToCartComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AssetActionFilterComponent-1.html" data-type="entity-link" >AssetActionFilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AssetDropdownButtonComponent.html" data-type="entity-link" >AssetDropdownButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AssetListComponent-1.html" data-type="entity-link" >AssetListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AssetListComponent-2.html" data-type="entity-link" >AssetListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BreadcrumbComponent.html" data-type="entity-link" >BreadcrumbComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CardFormComponent-1.html" data-type="entity-link" >CardFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CartListComponent-1.html" data-type="entity-link" >CartListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CartSummaryComponent-1.html" data-type="entity-link" >CartSummaryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CartTableComponent-1.html" data-type="entity-link" >CartTableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CategoryCarouselComponent-1.html" data-type="entity-link" >CategoryCarouselComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CategoryFilterComponent.html" data-type="entity-link" >CategoryFilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ChartComponent.html" data-type="entity-link" >ChartComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CompareLayoutComponent-1.html" data-type="entity-link" >CompareLayoutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CreateQuoteComponent-1.html" data-type="entity-link" >CreateQuoteComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CRRecommendedProductsComponent.html" data-type="entity-link" >CRRecommendedProductsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DetailSectionComponent.html" data-type="entity-link" >DetailSectionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DetailsLayoutComponent.html" data-type="entity-link" >DetailsLayoutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DotsComponent.html" data-type="entity-link" >DotsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FavoriteListComponent-1.html" data-type="entity-link" >FavoriteListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FilesComponent.html" data-type="entity-link" >FilesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GenerateDocumentComponent.html" data-type="entity-link" >GenerateDocumentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderComponent-1.html" data-type="entity-link" >HeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InputDateComponent.html" data-type="entity-link" >InputDateComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InputFieldComponent.html" data-type="entity-link" >InputFieldComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InputSelectComponent.html" data-type="entity-link" >InputSelectComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/JumbotronComponent.html" data-type="entity-link" >JumbotronComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MiniCartComponent.html" data-type="entity-link" >MiniCartComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MiniProfileComponent.html" data-type="entity-link" >MiniProfileComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OrderDetailComponent-1.html" data-type="entity-link" >OrderDetailComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OrderDetailComponent-2.html" data-type="entity-link" >OrderDetailComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OrderListComponent-1.html" data-type="entity-link" >OrderListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OutputFieldComponent.html" data-type="entity-link" >OutputFieldComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PaymentComponent.html" data-type="entity-link" >PaymentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PaymentIFrameComponent.html" data-type="entity-link" >PaymentIFrameComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PgSummaryComponent.html" data-type="entity-link" >PgSummaryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PresentDocumentComponent.html" data-type="entity-link" >PresentDocumentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PriceComponent.html" data-type="entity-link" >PriceComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PriceSummaryComponent.html" data-type="entity-link" >PriceSummaryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PriceTypeFilterComponent-1.html" data-type="entity-link" >PriceTypeFilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductCardComponent.html" data-type="entity-link" >ProductCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductCarouselComponent.html" data-type="entity-link" >ProductCarouselComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductCompareComponent.html" data-type="entity-link" >ProductCompareComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductConfigurationComponent.html" data-type="entity-link" >ProductConfigurationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductDetailComponent-1.html" data-type="entity-link" >ProductDetailComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductDrawerComponent.html" data-type="entity-link" >ProductDrawerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductFamilyFilterComponent-1.html" data-type="entity-link" >ProductFamilyFilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductImagesComponent.html" data-type="entity-link" >ProductImagesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductListComponent-1.html" data-type="entity-link" >ProductListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductTypeFilterComponent.html" data-type="entity-link" >ProductTypeFilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PromotionComponent.html" data-type="entity-link" >PromotionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PromotionModalComponent.html" data-type="entity-link" >PromotionModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RenewalFilterComponent-1.html" data-type="entity-link" >RenewalFilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RequestQuoteFormComponent-1.html" data-type="entity-link" >RequestQuoteFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ResultsComponent-1.html" data-type="entity-link" >ResultsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SettingsComponent-1.html" data-type="entity-link" >SettingsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SpinnerComponent.html" data-type="entity-link" >SpinnerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SummaryComponent-1.html" data-type="entity-link" >SummaryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TabAttachmentsComponent-1.html" data-type="entity-link" >TabAttachmentsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TabFeaturesComponent-1.html" data-type="entity-link" >TabFeaturesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TaxPopHoverComponent.html" data-type="entity-link" >TaxPopHoverComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Account.html" data-type="entity-link" >Account</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccountBase.html" data-type="entity-link" >AccountBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccountLocation.html" data-type="entity-link" >AccountLocation</a>
                            </li>
                            <li class="link">
                                <a href="classes/AdjustmentItem.html" data-type="entity-link" >AdjustmentItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppliedRuleActionInfo.html" data-type="entity-link" >AppliedRuleActionInfo</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppliedRuleInfo.html" data-type="entity-link" >AppliedRuleInfo</a>
                            </li>
                            <li class="link">
                                <a href="classes/ApprovalRequest.html" data-type="entity-link" >ApprovalRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/AptValueMatrixNode.html" data-type="entity-link" >AptValueMatrixNode</a>
                            </li>
                            <li class="link">
                                <a href="classes/AssetAttributeValue.html" data-type="entity-link" >AssetAttributeValue</a>
                            </li>
                            <li class="link">
                                <a href="classes/AssetLineItem.html" data-type="entity-link" >AssetLineItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/AssetLineItemExtended.html" data-type="entity-link" >AssetLineItemExtended</a>
                            </li>
                            <li class="link">
                                <a href="classes/Attachment.html" data-type="entity-link" >Attachment</a>
                            </li>
                            <li class="link">
                                <a href="classes/AttributeGroupTranslation.html" data-type="entity-link" >AttributeGroupTranslation</a>
                            </li>
                            <li class="link">
                                <a href="classes/AttributeValueMatrix.html" data-type="entity-link" >AttributeValueMatrix</a>
                            </li>
                            <li class="link">
                                <a href="classes/AttributeValueMatrixEntry.html" data-type="entity-link" >AttributeValueMatrixEntry</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthConfig.html" data-type="entity-link" >AuthConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthConfigProviders.html" data-type="entity-link" >AuthConfigProviders</a>
                            </li>
                            <li class="link">
                                <a href="classes/BatchAction.html" data-type="entity-link" >BatchAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/BitString.html" data-type="entity-link" >BitString</a>
                            </li>
                            <li class="link">
                                <a href="classes/BrowserWindowRef.html" data-type="entity-link" >BrowserWindowRef</a>
                            </li>
                            <li class="link">
                                <a href="classes/Cart.html" data-type="entity-link" >Cart</a>
                            </li>
                            <li class="link">
                                <a href="classes/CartItem.html" data-type="entity-link" >CartItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategoryData.html" data-type="entity-link" >CategoryData</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategoryTranslation.html" data-type="entity-link" >CategoryTranslation</a>
                            </li>
                            <li class="link">
                                <a href="classes/Classification.html" data-type="entity-link" >Classification</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConfigCustomDisplayColumns.html" data-type="entity-link" >ConfigCustomDisplayColumns</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConstraintRule.html" data-type="entity-link" >ConstraintRule</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConstraintRuleAction.html" data-type="entity-link" >ConstraintRuleAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConstraintRuleCondition.html" data-type="entity-link" >ConstraintRuleCondition</a>
                            </li>
                            <li class="link">
                                <a href="classes/Contact.html" data-type="entity-link" >Contact</a>
                            </li>
                            <li class="link">
                                <a href="classes/CurrencyType.html" data-type="entity-link" >CurrencyType</a>
                            </li>
                            <li class="link">
                                <a href="classes/DataManager.html" data-type="entity-link" >DataManager</a>
                            </li>
                            <li class="link">
                                <a href="classes/FakeAppLoader.html" data-type="entity-link" >FakeAppLoader</a>
                            </li>
                            <li class="link">
                                <a href="classes/Favorite.html" data-type="entity-link" >Favorite</a>
                            </li>
                            <li class="link">
                                <a href="classes/Feature.html" data-type="entity-link" >Feature</a>
                            </li>
                            <li class="link">
                                <a href="classes/FeatureSet.html" data-type="entity-link" >FeatureSet</a>
                            </li>
                            <li class="link">
                                <a href="classes/File.html" data-type="entity-link" >File</a>
                            </li>
                            <li class="link">
                                <a href="classes/GatewayCommunication.html" data-type="entity-link" >GatewayCommunication</a>
                            </li>
                            <li class="link">
                                <a href="classes/GatewayTransaction.html" data-type="entity-link" >GatewayTransaction</a>
                            </li>
                            <li class="link">
                                <a href="classes/GuestMockUserService.html" data-type="entity-link" >GuestMockUserService</a>
                            </li>
                            <li class="link">
                                <a href="classes/Incentive.html" data-type="entity-link" >Incentive</a>
                            </li>
                            <li class="link">
                                <a href="classes/MockPlatformService.html" data-type="entity-link" >MockPlatformService</a>
                            </li>
                            <li class="link">
                                <a href="classes/Note.html" data-type="entity-link" >Note</a>
                            </li>
                            <li class="link">
                                <a href="classes/Opportunity.html" data-type="entity-link" >Opportunity</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderAdjustmentItem.html" data-type="entity-link" >OrderAdjustmentItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderAttributeValue.html" data-type="entity-link" >OrderAttributeValue</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderLineItem.html" data-type="entity-link" >OrderLineItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderTaxBreakup.html" data-type="entity-link" >OrderTaxBreakup</a>
                            </li>
                            <li class="link">
                                <a href="classes/PartnerMockUserService.html" data-type="entity-link" >PartnerMockUserService</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaymentMethod.html" data-type="entity-link" >PaymentMethod</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaymentTransaction.html" data-type="entity-link" >PaymentTransaction</a>
                            </li>
                            <li class="link">
                                <a href="classes/Price.html" data-type="entity-link" >Price</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceDimension.html" data-type="entity-link" >PriceDimension</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceDimensionBase.html" data-type="entity-link" >PriceDimensionBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceList.html" data-type="entity-link" >PriceList</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceListBase.html" data-type="entity-link" >PriceListBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceListCategory.html" data-type="entity-link" >PriceListCategory</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceListData.html" data-type="entity-link" >PriceListData</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceListItem.html" data-type="entity-link" >PriceListItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceMatrix.html" data-type="entity-link" >PriceMatrix</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceMatrixEntry.html" data-type="entity-link" >PriceMatrixEntry</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceRule.html" data-type="entity-link" >PriceRule</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceRuleEntry.html" data-type="entity-link" >PriceRuleEntry</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceRuleSet.html" data-type="entity-link" >PriceRuleSet</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttribute.html" data-type="entity-link" >ProductAttribute</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeGroup.html" data-type="entity-link" >ProductAttributeGroup</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeGroupMember.html" data-type="entity-link" >ProductAttributeGroupMember</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeMatrixView.html" data-type="entity-link" >ProductAttributeMatrixView</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeRule.html" data-type="entity-link" >ProductAttributeRule</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeRule-1.html" data-type="entity-link" >ProductAttributeRule</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeRuleAction.html" data-type="entity-link" >ProductAttributeRuleAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeRuleAction-1.html" data-type="entity-link" >ProductAttributeRuleAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeRuleView.html" data-type="entity-link" >ProductAttributeRuleView</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeRuleView-1.html" data-type="entity-link" >ProductAttributeRuleView</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeValue.html" data-type="entity-link" >ProductAttributeValue</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductCategory.html" data-type="entity-link" >ProductCategory</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductData.html" data-type="entity-link" >ProductData</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductFeatureValue.html" data-type="entity-link" >ProductFeatureValue</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductGroup.html" data-type="entity-link" >ProductGroup</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductGroupMember.html" data-type="entity-link" >ProductGroupMember</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductInformation.html" data-type="entity-link" >ProductInformation</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductOptionComponent.html" data-type="entity-link" >ProductOptionComponent</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductOptionGroup.html" data-type="entity-link" >ProductOptionGroup</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductOptionPrice.html" data-type="entity-link" >ProductOptionPrice</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductResult.html" data-type="entity-link" >ProductResult</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductTranslation.html" data-type="entity-link" >ProductTranslation</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProposalTaxBreakup.html" data-type="entity-link" >ProposalTaxBreakup</a>
                            </li>
                            <li class="link">
                                <a href="classes/Quote.html" data-type="entity-link" >Quote</a>
                            </li>
                            <li class="link">
                                <a href="classes/QuoteActions.html" data-type="entity-link" >QuoteActions</a>
                            </li>
                            <li class="link">
                                <a href="classes/QuoteAdjustmentItem.html" data-type="entity-link" >QuoteAdjustmentItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/QuoteAttachment.html" data-type="entity-link" >QuoteAttachment</a>
                            </li>
                            <li class="link">
                                <a href="classes/QuoteAttributeValue.html" data-type="entity-link" >QuoteAttributeValue</a>
                            </li>
                            <li class="link">
                                <a href="classes/QuoteLineItem.html" data-type="entity-link" >QuoteLineItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/SamlSSOConfig.html" data-type="entity-link" >SamlSSOConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/StoreBanner.html" data-type="entity-link" >StoreBanner</a>
                            </li>
                            <li class="link">
                                <a href="classes/Storefront.html" data-type="entity-link" >Storefront</a>
                            </li>
                            <li class="link">
                                <a href="classes/StorefrontData.html" data-type="entity-link" >StorefrontData</a>
                            </li>
                            <li class="link">
                                <a href="classes/SummaryGroup.html" data-type="entity-link" >SummaryGroup</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaxBreakup.html" data-type="entity-link" >TaxBreakup</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaxCertificate.html" data-type="entity-link" >TaxCertificate</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaxCode.html" data-type="entity-link" >TaxCode</a>
                            </li>
                            <li class="link">
                                <a href="classes/Template.html" data-type="entity-link" >Template</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserBase.html" data-type="entity-link" >UserBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/WindowRef.html" data-type="entity-link" >WindowRef</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AccountLocationService.html" data-type="entity-link" >AccountLocationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AccountService.html" data-type="entity-link" >AccountService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppliedRuleActionInfoService.html" data-type="entity-link" >AppliedRuleActionInfoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppliedRuleInfoService.html" data-type="entity-link" >AppliedRuleInfoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppLoader.html" data-type="entity-link" >AppLoader</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AssetSelectionService.html" data-type="entity-link" >AssetSelectionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AssetService.html" data-type="entity-link" >AssetService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AttributeRuleService.html" data-type="entity-link" >AttributeRuleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AttributeTranslationService.html" data-type="entity-link" >AttributeTranslationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BatchSelectionService.html" data-type="entity-link" >BatchSelectionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartItemService.html" data-type="entity-link" >CartItemService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartService.html" data-type="entity-link" >CartService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoryService.html" data-type="entity-link" >CategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConstraintRuleConditionService.html" data-type="entity-link" >ConstraintRuleConditionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConstraintRuleService.html" data-type="entity-link" >ConstraintRuleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContactService.html" data-type="entity-link" >ContactService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConversionService.html" data-type="entity-link" >ConversionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmailService.html" data-type="entity-link" >EmailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExceptionService.html" data-type="entity-link" >ExceptionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FavoriteService.html" data-type="entity-link" >FavoriteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FileService.html" data-type="entity-link" >FileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GatewayCommunicationService.html" data-type="entity-link" >GatewayCommunicationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GatewayTransactionService.html" data-type="entity-link" >GatewayTransactionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LineItemService.html" data-type="entity-link" >LineItemService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NoteService.html" data-type="entity-link" >NoteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderLineItemService.html" data-type="entity-link" >OrderLineItemService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderService.html" data-type="entity-link" >OrderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderTaxBreakupService.html" data-type="entity-link" >OrderTaxBreakupService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderTaxService.html" data-type="entity-link" >OrderTaxService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PaymentService.html" data-type="entity-link" >PaymentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PriceListItemService.html" data-type="entity-link" >PriceListItemService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PriceListService.html" data-type="entity-link" >PriceListService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PriceMatrixService.html" data-type="entity-link" >PriceMatrixService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PriceService.html" data-type="entity-link" >PriceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductAttributeGroupMemberService.html" data-type="entity-link" >ProductAttributeGroupMemberService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductAttributeGroupService.html" data-type="entity-link" >ProductAttributeGroupService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductAttributeRuleService.html" data-type="entity-link" >ProductAttributeRuleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductAttributeRuleViewService.html" data-type="entity-link" >ProductAttributeRuleViewService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductAttributeService.html" data-type="entity-link" >ProductAttributeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductCategoryService.html" data-type="entity-link" >ProductCategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductConfigurationService.html" data-type="entity-link" >ProductConfigurationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductDrawerService.html" data-type="entity-link" >ProductDrawerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductInformationService.html" data-type="entity-link" >ProductInformationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductOptionComponentService.html" data-type="entity-link" >ProductOptionComponentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductOptionGroupService.html" data-type="entity-link" >ProductOptionGroupService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductOptionService.html" data-type="entity-link" >ProductOptionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductTranslationService.html" data-type="entity-link" >ProductTranslationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PromotionService.html" data-type="entity-link" >PromotionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProposalTaxBreakupService.html" data-type="entity-link" >ProposalTaxBreakupService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProposalTaxService.html" data-type="entity-link" >ProposalTaxService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QuoteLineItemService.html" data-type="entity-link" >QuoteLineItemService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QuoteService.html" data-type="entity-link" >QuoteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ServiceWorkerService.html" data-type="entity-link" >ServiceWorkerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StorefrontService.html" data-type="entity-link" >StorefrontService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TaxService.html" data-type="entity-link" >TaxService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TemplateService.html" data-type="entity-link" >TemplateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TranslatorLoaderService.html" data-type="entity-link" >TranslatorLoaderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserViewMappingService.html" data-type="entity-link" >UserViewMappingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserViewService.html" data-type="entity-link" >UserViewService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AboGuard.html" data-type="entity-link" >AboGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AboGuard-1.html" data-type="entity-link" >AboGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/ConfigureGuard.html" data-type="entity-link" >ConfigureGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/ConfigureGuard-1.html" data-type="entity-link" >ConfigureGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/ConstraintRuleGuard.html" data-type="entity-link" >ConstraintRuleGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/ConstraintRuleGuard-1.html" data-type="entity-link" >ConstraintRuleGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/GuestGuard.html" data-type="entity-link" >GuestGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/LoginGuard.html" data-type="entity-link" >LoginGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/OrderDetailsGuard.html" data-type="entity-link" >OrderDetailsGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/RouteGuard.html" data-type="entity-link" >RouteGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/RouteGuard-1.html" data-type="entity-link" >RouteGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AccordionRows.html" data-type="entity-link" >AccordionRows</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AccountInfo.html" data-type="entity-link" >AccountInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ActionItem.html" data-type="entity-link" >ActionItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ActionItem-1.html" data-type="entity-link" >ActionItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ActionToPerform.html" data-type="entity-link" >ActionToPerform</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Attachment.html" data-type="entity-link" >Attachment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BreadcrumbLink.html" data-type="entity-link" >BreadcrumbLink</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CartItemView.html" data-type="entity-link" >CartItemView</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CartProductForm.html" data-type="entity-link" >CartProductForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CartRequest.html" data-type="entity-link" >CartRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Carts.html" data-type="entity-link" >Carts</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CategoryView.html" data-type="entity-link" >CategoryView</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CategoryView-1.html" data-type="entity-link" >CategoryView</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartInterface.html" data-type="entity-link" >ChartInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartOptions.html" data-type="entity-link" >ChartOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChildRecordOptions.html" data-type="entity-link" >ChildRecordOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConfigurationFlags.html" data-type="entity-link" >ConfigurationFlags</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConfigurationState.html" data-type="entity-link" >ConfigurationState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConfigurationView.html" data-type="entity-link" >ConfigurationView</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConstraintRuleDetail.html" data-type="entity-link" >ConstraintRuleDetail</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConstraintRuleGroups.html" data-type="entity-link" >ConstraintRuleGroups</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConstraintRuleInfoDetail.html" data-type="entity-link" >ConstraintRuleInfoDetail</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConstraintRuleSuccessDetail.html" data-type="entity-link" >ConstraintRuleSuccessDetail</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CrIconView.html" data-type="entity-link" >CrIconView</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CustomFilterView.html" data-type="entity-link" >CustomFilterView</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FavoriteItemRequest.html" data-type="entity-link" >FavoriteItemRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FavoriteRequest.html" data-type="entity-link" >FavoriteRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FieldWithOperators.html" data-type="entity-link" >FieldWithOperators</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FilterOptions.html" data-type="entity-link" >FilterOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFile.html" data-type="entity-link" >IFile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ItemGroup.html" data-type="entity-link" >ItemGroup</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PerformAction.html" data-type="entity-link" >PerformAction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PromptActionItems.html" data-type="entity-link" >PromptActionItems</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SearchResults.html" data-type="entity-link" >SearchResults</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SortInfo.html" data-type="entity-link" >SortInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableAction.html" data-type="entity-link" >TableAction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableColumn.html" data-type="entity-link" >TableColumn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableOptions.html" data-type="entity-link" >TableOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserView.html" data-type="entity-link" >UserView</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#pipes-links"' :
                                'data-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/CreditCardExtractorPipe.html" data-type="entity-link" >CreditCardExtractorPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});