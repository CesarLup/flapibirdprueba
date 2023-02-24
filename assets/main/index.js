window.__require=function t(o,e,n){function i(a,c){if(!e[a]){if(!o[a]){var u=a.split("/");if(u=u[u.length-1],!o[u]){var s="function"==typeof __require&&__require;if(!c&&s)return s(u,!0);if(r)return r(u,!0);throw new Error("Cannot find module '"+a+"'")}a=u}var d=e[a]={exports:{}};o[a][0].call(d.exports,function(t){return i(o[a][1][t]||t)},d,d.exports,t,o,e,n)}return e[a].exports}for(var r="function"==typeof __require&&__require,a=0;a<n.length;a++)i(n[a]);return i}({AudioSourceControl:[function(t,o,e){"use strict";var n;cc._RF.push(o,"87956FStZlAzLLnmnCeYjsR","AudioSourceControl"),e.__esModule=!0,e.SoundType=void 0;var i={E_Sound_Fly:0,E_Sound_Score:1,E_Sound_Die:2};e.SoundType=i,cc.Class(((n={extends:cc.Component}).extends=cc.AudioSource,n.properties={backgroundMusic:{default:null,type:cc.AudioClip},flySound:{default:null,type:cc.AudioClip},scoreSound:{default:null,type:cc.AudioClip},dieSound:{default:null,type:cc.AudioClip}},n.start=function(){},n.playSound=function(t){t==i.E_Sound_Fly?cc.audioEngine.playEffect(this.flySound,!1):t==i.E_Sound_Score?cc.audioEngine.playEffect(this.scoreSound,!1):t==i.E_Sound_Die&&cc.audioEngine.playEffect(this.dieSound,!1)},n)),cc._RF.pop()},{}],BirdControl:[function(t,o){"use strict";cc._RF.push(o,"7f897e/UfxEvblKfcfMtqRB","BirdControl");var e=t("./MainControl");t("./BirdControl"),t("./AudioSourceControl.js");var n=t("./AudioSourceControl");cc.Class({extends:cc.Component,properties:{speed:cc.number=0,mainControl:cc.MainControl=null},onLoad:function(){cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_START,this.onTouchStart,this),this.mainControl=cc.Canvas.instance.node.getComponent("MainControl")},start:function(){},update:function(){if(this.mainControl.gameStatus==e.GameStatus.Game_Playing){this.speed-=.05,this.node.y+=this.speed;var t=-this.speed/2*30;t>=30&&(t=30),this.node.rotation=t,(this.node.y>=256||this.y<=-256)&&(this.mainControl.gameOver(),this.speed=0)}},onTouchStart:function(){this.speed=2,this.mainControl.audioSourceControl.playSound(n.SoundType.E_Sound_Fly)},onCollisionEnter:function(t){0===t.tag?(cc.log("game over"),this.mainControl.gameOver(),this.speed=0):1===t.tag&&(this.mainControl.gameScore++,this.mainControl.labelScore.string=this.mainControl.gameScore.toString(),this.mainControl.audioSourceControl.playSound(n.SoundType.E_Sound_Score))}}),cc._RF.pop()},{"./AudioSourceControl":"AudioSourceControl","./AudioSourceControl.js":"AudioSourceControl","./BirdControl":"BirdControl","./MainControl":"MainControl"}],MainControl:[function(t,o,e){"use strict";cc._RF.push(o,"5e76diejORJ2I5doKzGYY5x","MainControl"),e.__esModule=!0,e.GameStatus=void 0,t("./MainControl"),t("./BirdControl");var n=t("./AudioSourceControl"),i={Game_Ready:0,Game_Playing:1,Game_Over:2};e.GameStatus=i,cc.Class({extends:cc.Component,gameStatus:i.Game_Ready,properties:{gameScore:{type:cc.number,default:0},audioSourceControl:{type:cc.AudioSource,default:null},SpBg:{default:[],type:[cc.Node]},pipePrefab:{default:null,type:cc.Prefab},pipe:{default:[],type:[cc.Node]},gameStatus:{default:i.Game_Ready,type:cc.GameStatus},labelScore:{default:null,type:cc.Label}},start:function(){for(var t=0;t<this.pipe.length;t++)this.pipe[t]=cc.instantiate(this.pipePrefab),this.node.getChildByName("Pipe").addChild(this.pipe[t]),this.pipe[t].x=170+200*t,this.pipe[t].y=240*Math.random()-120},update:function(){if(this.gameStatus===i.Game_Playing)for(var t=0;t<this.SpBg.length;t++){this.SpBg[t].x-=1,this.SpBg[t].x<=-288&&(this.SpBg[t].x=288);for(var o=0;o<this.pipe.length;o++)this.pipe[o].x-=1,this.pipe[o].x<=-170&&(this.pipe[o].x=430,this.pipe[o].y=240*Math.random()-120)}},onLoad:function(){var t=cc.director.getCollisionManager();t.enabled=!0,t.enabledDebugDraw=!1,this.spGameOver=this.node.getChildByName("GameOver").getComponent(cc.Sprite),this.spGameOver.node.active=!1,this.btnStart=this.node.getChildByName("BtnStart").getComponent(cc.Button),this.btnStart.node.on(cc.Node.EventType.TOUCH_END,this.touchStartBtn,this),this.newButton=this.node.getChildByName("NewButton").getComponent(cc.Button),this.newButton.node.on(cc.Node.EventType.TOUCH_END,this.touchNewButton1,this)},gameOver:function(){this.spGameOver.node.active=!0,this.btnStart.node.active=!0,this.gameStatus=i.Game_Over,this.audioSourceControl.playSound(n.SoundType.E_Sound_Die)},touchNewButton1:function(){cc.audioEngine.playMusic(this.backgroundMusic,!1)},touchNewButton2:function(){cc.audioEngine.playMusic(this.backgroundMusic,!1),this.newButton.node.active=!1},touchStartBtn:function(){this.btnStart.node.active=!1,this.gameStatus=i.Game_Playing,this.spGameOver.node.active=!1;for(var t=0;t<this.pipe.length;t++)this.pipe[t].x=170+200*t,this.pipe[t].y=240*Math.random()-120;var o=this.node.getChildByName("Bird");o.y=0,o.rotation=0,this.gameScore=0,this.labelScore.string=this.gameScore.toString()}}),cc._RF.pop()},{"./AudioSourceControl":"AudioSourceControl","./BirdControl":"BirdControl","./MainControl":"MainControl"}]},{},["AudioSourceControl","BirdControl","MainControl"]);