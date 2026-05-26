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
                    <a href="index.html" data-type="index-link">nestjs-intro documentation</a>
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
                                    <span class="icon ion-ios-paper"></span>
                                        README
                                </a>
                            </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>

                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-73398f8a2133d30d3c6bfbb6c4d0b8a2377f2a13d5143dd2cd0731a1577ed0e0f6b14ff5e991e1c0bb28ecc4856caa797021465f878c3b2ea15452aaf2beb08b"' : 'data-bs-target="#xs-controllers-links-module-AppModule-73398f8a2133d30d3c6bfbb6c4d0b8a2377f2a13d5143dd2cd0731a1577ed0e0f6b14ff5e991e1c0bb28ecc4856caa797021465f878c3b2ea15452aaf2beb08b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-73398f8a2133d30d3c6bfbb6c4d0b8a2377f2a13d5143dd2cd0731a1577ed0e0f6b14ff5e991e1c0bb28ecc4856caa797021465f878c3b2ea15452aaf2beb08b"' :
                                            'id="xs-controllers-links-module-AppModule-73398f8a2133d30d3c6bfbb6c4d0b8a2377f2a13d5143dd2cd0731a1577ed0e0f6b14ff5e991e1c0bb28ecc4856caa797021465f878c3b2ea15452aaf2beb08b"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-73398f8a2133d30d3c6bfbb6c4d0b8a2377f2a13d5143dd2cd0731a1577ed0e0f6b14ff5e991e1c0bb28ecc4856caa797021465f878c3b2ea15452aaf2beb08b"' : 'data-bs-target="#xs-injectables-links-module-AppModule-73398f8a2133d30d3c6bfbb6c4d0b8a2377f2a13d5143dd2cd0731a1577ed0e0f6b14ff5e991e1c0bb28ecc4856caa797021465f878c3b2ea15452aaf2beb08b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-73398f8a2133d30d3c6bfbb6c4d0b8a2377f2a13d5143dd2cd0731a1577ed0e0f6b14ff5e991e1c0bb28ecc4856caa797021465f878c3b2ea15452aaf2beb08b"' :
                                        'id="xs-injectables-links-module-AppModule-73398f8a2133d30d3c6bfbb6c4d0b8a2377f2a13d5143dd2cd0731a1577ed0e0f6b14ff5e991e1c0bb28ecc4856caa797021465f878c3b2ea15452aaf2beb08b"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-16b466a807908dcb7eede5424c0d258eca22d3916148143378e5dd06274be7d75e8785e4834b7125f065ee9dbaf39f7bec8f706af90c7411c7f7dc7a6061b9ba"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-16b466a807908dcb7eede5424c0d258eca22d3916148143378e5dd06274be7d75e8785e4834b7125f065ee9dbaf39f7bec8f706af90c7411c7f7dc7a6061b9ba"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-16b466a807908dcb7eede5424c0d258eca22d3916148143378e5dd06274be7d75e8785e4834b7125f065ee9dbaf39f7bec8f706af90c7411c7f7dc7a6061b9ba"' :
                                            'id="xs-controllers-links-module-AuthModule-16b466a807908dcb7eede5424c0d258eca22d3916148143378e5dd06274be7d75e8785e4834b7125f065ee9dbaf39f7bec8f706af90c7411c7f7dc7a6061b9ba"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-16b466a807908dcb7eede5424c0d258eca22d3916148143378e5dd06274be7d75e8785e4834b7125f065ee9dbaf39f7bec8f706af90c7411c7f7dc7a6061b9ba"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-16b466a807908dcb7eede5424c0d258eca22d3916148143378e5dd06274be7d75e8785e4834b7125f065ee9dbaf39f7bec8f706af90c7411c7f7dc7a6061b9ba"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-16b466a807908dcb7eede5424c0d258eca22d3916148143378e5dd06274be7d75e8785e4834b7125f065ee9dbaf39f7bec8f706af90c7411c7f7dc7a6061b9ba"' :
                                        'id="xs-injectables-links-module-AuthModule-16b466a807908dcb7eede5424c0d258eca22d3916148143378e5dd06274be7d75e8785e4834b7125f065ee9dbaf39f7bec8f706af90c7411c7f7dc7a6061b9ba"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MetaOptionsModule.html" data-type="entity-link" >MetaOptionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MetaOptionsModule-a745629fad288515dd8fd48b917745a852e9b6f5f69891f9d647771b9d8855d21f7862ee8d7f6dcb2cb1477fbd5c1e88347b1aa3bafca9de0212ae4704f8f197"' : 'data-bs-target="#xs-controllers-links-module-MetaOptionsModule-a745629fad288515dd8fd48b917745a852e9b6f5f69891f9d647771b9d8855d21f7862ee8d7f6dcb2cb1477fbd5c1e88347b1aa3bafca9de0212ae4704f8f197"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MetaOptionsModule-a745629fad288515dd8fd48b917745a852e9b6f5f69891f9d647771b9d8855d21f7862ee8d7f6dcb2cb1477fbd5c1e88347b1aa3bafca9de0212ae4704f8f197"' :
                                            'id="xs-controllers-links-module-MetaOptionsModule-a745629fad288515dd8fd48b917745a852e9b6f5f69891f9d647771b9d8855d21f7862ee8d7f6dcb2cb1477fbd5c1e88347b1aa3bafca9de0212ae4704f8f197"' }>
                                            <li class="link">
                                                <a href="controllers/MetaOptionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-b08352399fb32f42553b66fec10c89cba56d6c5234357fca752f85af8c748ce1286686103744eec9ee49adcdb82740fb76ba627928952aedba09595d267a5369"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-b08352399fb32f42553b66fec10c89cba56d6c5234357fca752f85af8c748ce1286686103744eec9ee49adcdb82740fb76ba627928952aedba09595d267a5369"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-b08352399fb32f42553b66fec10c89cba56d6c5234357fca752f85af8c748ce1286686103744eec9ee49adcdb82740fb76ba627928952aedba09595d267a5369"' :
                                            'id="xs-controllers-links-module-PostsModule-b08352399fb32f42553b66fec10c89cba56d6c5234357fca752f85af8c748ce1286686103744eec9ee49adcdb82740fb76ba627928952aedba09595d267a5369"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-b08352399fb32f42553b66fec10c89cba56d6c5234357fca752f85af8c748ce1286686103744eec9ee49adcdb82740fb76ba627928952aedba09595d267a5369"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-b08352399fb32f42553b66fec10c89cba56d6c5234357fca752f85af8c748ce1286686103744eec9ee49adcdb82740fb76ba627928952aedba09595d267a5369"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-b08352399fb32f42553b66fec10c89cba56d6c5234357fca752f85af8c748ce1286686103744eec9ee49adcdb82740fb76ba627928952aedba09595d267a5369"' :
                                        'id="xs-injectables-links-module-PostsModule-b08352399fb32f42553b66fec10c89cba56d6c5234357fca752f85af8c748ce1286686103744eec9ee49adcdb82740fb76ba627928952aedba09595d267a5369"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TagsModule.html" data-type="entity-link" >TagsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TagsModule-390dab25ccf1736a853f4995a665e361806105bada3400ab9f10b8121531a70a2eac716fc283b240724c4971775cece9f1e982fe5df1bdf6ae10153df520c035"' : 'data-bs-target="#xs-controllers-links-module-TagsModule-390dab25ccf1736a853f4995a665e361806105bada3400ab9f10b8121531a70a2eac716fc283b240724c4971775cece9f1e982fe5df1bdf6ae10153df520c035"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TagsModule-390dab25ccf1736a853f4995a665e361806105bada3400ab9f10b8121531a70a2eac716fc283b240724c4971775cece9f1e982fe5df1bdf6ae10153df520c035"' :
                                            'id="xs-controllers-links-module-TagsModule-390dab25ccf1736a853f4995a665e361806105bada3400ab9f10b8121531a70a2eac716fc283b240724c4971775cece9f1e982fe5df1bdf6ae10153df520c035"' }>
                                            <li class="link">
                                                <a href="controllers/TagsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-2766bdcae5e5cedaabf20fdb65072f8f304aeb79d348a254d3764774a86bc58d75bdf4cf770eefd50b6376dfdff8f74a371a8ddfa25cfe72213fc2c375ab0676"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-2766bdcae5e5cedaabf20fdb65072f8f304aeb79d348a254d3764774a86bc58d75bdf4cf770eefd50b6376dfdff8f74a371a8ddfa25cfe72213fc2c375ab0676"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-2766bdcae5e5cedaabf20fdb65072f8f304aeb79d348a254d3764774a86bc58d75bdf4cf770eefd50b6376dfdff8f74a371a8ddfa25cfe72213fc2c375ab0676"' :
                                            'id="xs-controllers-links-module-UsersModule-2766bdcae5e5cedaabf20fdb65072f8f304aeb79d348a254d3764774a86bc58d75bdf4cf770eefd50b6376dfdff8f74a371a8ddfa25cfe72213fc2c375ab0676"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-2766bdcae5e5cedaabf20fdb65072f8f304aeb79d348a254d3764774a86bc58d75bdf4cf770eefd50b6376dfdff8f74a371a8ddfa25cfe72213fc2c375ab0676"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-2766bdcae5e5cedaabf20fdb65072f8f304aeb79d348a254d3764774a86bc58d75bdf4cf770eefd50b6376dfdff8f74a371a8ddfa25cfe72213fc2c375ab0676"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-2766bdcae5e5cedaabf20fdb65072f8f304aeb79d348a254d3764774a86bc58d75bdf4cf770eefd50b6376dfdff8f74a371a8ddfa25cfe72213fc2c375ab0676"' :
                                        'id="xs-injectables-links-module-UsersModule-2766bdcae5e5cedaabf20fdb65072f8f304aeb79d348a254d3764774a86bc58d75bdf4cf770eefd50b6376dfdff8f74a371a8ddfa25cfe72213fc2c375ab0676"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MetaOptionsController.html" data-type="entity-link" >MetaOptionsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TagsController.html" data-type="entity-link" >TagsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/MetaOption.html" data-type="entity-link" >MetaOption</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Post.html" data-type="entity-link" >Post</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Tag.html" data-type="entity-link" >Tag</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTagDto.html" data-type="entity-link" >CreateTagDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
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
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});