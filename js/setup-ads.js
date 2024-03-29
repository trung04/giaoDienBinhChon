(()=>{"use strict";const t=window;t.blogherads=t.blogherads||{},t.blogherads.adq=t.blogherads.adq||[];const e=()=>t.blogherads,i=window,n=()=>{const t=e();t.adq.push((()=>{i.pmcadm_options?.suppress_option&&t.disableAds("PMC Ads Suppression",i.pmcadm_options.suppress_option),i.pmcadm_options?.suppress_entries&&i.pmcadm_options.suppress_entries.forEach((e=>{if(!e.entry||!e.suppress_option)return;const i=e.entry.filter((t=>!!t)).map((t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"))).join("|");if(!i)return;const n=new RegExp(i);(window.location.search&&n.test(window.location.search)||window.location.hash&&n.test(window.location.hash))&&t.disableAds("PMC Ads Suppression",e.suppress_option)}))}))},r=window;function o(){const t=document.querySelector("#pmc-adm-ad-interrupts div.pmc-adm-boomerang-pub-div div");let e="";return t&&(e=t.id),e}const a=(t,e)=>{const i=document.getElementById(t);i?.style&&(i.style.display=e)},s=window;s.pmc=s.pmc||{};const d=()=>s.pmc,l=window,c=l.document,p=window,_=p.document,u=window,h=()=>u.pmcadm_floating_preroll_data||{},m=()=>u.pmcFloatingVideoOptions||{},f=window,y=d();f.pmc_admanager=new function(){const t=e();this.settings={interrupts_hide_container:"#container",redirect_interval:0,interrupt_counter:l.pmc_intertitial_ad_timer||0},this.show_interrupt_ads=function(){if(void 0!==navigator.userAgent&&/googlebot|googlebot-news/i.test(navigator.userAgent))return;const e=c.referrer,i=this;let n="",s=null;if(void 0!==e&&""!==e&&(n=e.match(/:\/\/(.[^/]+)/)[1],"flipboard.com"===n))return;if(r.pmc_is_adblocked)return;if(!i.apply_filters("pmc-adm-show-interrupt-ads",!0))return;this.settings.redirect_interval&&clearInterval(this.settings.redirect_interval);const p=t.getSlotById(o()),_=d();if(s=_.cookie?.get(_.pmc_adm_interstitial_ck),null!=s&&""!==s||"object"!=typeof p)this.hide_interrupt_ads();else{_.cookie?.set(_.pmc_adm_interstitial_ck,1,_.pmc_adm_interstitial_interval,"/","strictly-necessary"),i.settings.redirect_interval=setInterval((function(){i.interrupt_timer()}),1e3),c.body.classList.add("interrupt-ads"),a("pmc-adm-interrupts-container","block");try{l.postMessage("pmc_show_interrupt_ads","*"),_.hooks?.do_action("show_interrupt_ads")}catch(t){}p.display(),i.interrupt_timer()}}.bind(this),this.hide_interrupt_ads=function(){clearInterval(this.settings.redirect_interval),this.settings.redirect_interval=0,c.body.classList.remove("interrupt-ads"),l.dispatchEvent(new Event("resize")),a("pmc-adm-interrupts-container","none");const e=o(),i=new CustomEvent("pmc-hide-interrupt-ads",{detail:"Fires when the interrupt ads are done."});c.dispatchEvent(i),t.getSlots().forEach((function(i){e!==i.domId?i.display():t.destroySlots([i.domId])}));try{l.postMessage("pmc_hide_interrupt_ads","*"),d().hooks?.do_action("hide_interrupt_ads")}catch(t){}}.bind(this),this.hide_interrupt=function(){this.hide_interrupt_ads()}.bind(this),this.interrupt_timer=function(){0===this.settings.interrupt_counter?this.hide_interrupt_ads():(this.settings.redirect_interval&&this.settings.interrupt_counter--,c.getElementById("pmc_ads_interrupts_timer")&&(c.getElementById("pmc_ads_interrupts_timer").innerHTML=this.settings.interrupt_counter))}.bind(this),this.apply_filters=function(t,e,i){const n=d();return n.hooks?.apply_filters?n.hooks.apply_filters(t,e,i):e}.bind(this)},y.prerollPlayer=new function(){this.player_instance={},this.pmc_floating_ad_main_div=".floating-preroll-ad",this.pmc_floating_ad_docked_div="footer.footer",this.is_floating_ad_showed=!1,this.time_gap=0,this.cookie="",this.interval_id="",this.direct_slold=!1,this.init=function(){const t=this,e=h();if(void 0===e||!e||void 0===e.time_gap||"undefined"==typeof pmc)return!1;if(t.cookie=e.cookie_name,""===t.cookie||!t.cookie)return!1;const i=pmc.cookie.get(t.cookie);if(null!=i&&""!==i&&0!==parseInt(e.time_gap))return t.remove_floating_player(),!1;document.body.classList.contains("interrupt-ads")?t.interval_id=setInterval((function(){0===pmc_admanager.settings.redirect_interval&&t.show_floating_preroll_ad()}),1e3):t.show_floating_preroll_ad(),pmc.hooks.add_action("pmc_adm_dfp_direct_sold",(function(){t.direct_slold=!0,t.remove_floating_player()})),u.addEventListener("message",(({data:e})=>{"pmcadm:floatingplayer=nofloat"===e&&jQuery(t.pmc_floating_ad_main_div).hide()}),!1),u.blogherads.addEventListener("noFloat",(function(){jQuery(t.pmc_floating_ad_main_div).hide()})),u.blogherads.addEventListener("noFloatUnload",(function(e){void 0!==e.noFloatCount&&e.noFloatCount<=0&&jQuery(t.pmc_floating_ad_main_div).show()}))}.bind(this),this.apply_title=function(t){if("string"==typeof t&&""!==t){const e=jQuery(".floating-preroll-ad-title");e.empty();const i=jQuery("<span>").text(t);e.append(i)}}.bind(this),this.apply_connatix_video_title=function(){jQuery("#connatix_floating_preroll_ad_div").on("cnxReady",function(t){if(t.detail&&t.detail.playerInstance){const e=t.detail.playerInstance.getVideoDetails();e&&e.title&&this.apply_title(e.title)}}.bind(this))}.bind(this),this.show_floating_preroll_ad=function(){if(window.pmc&&window.pmc.no_ads)return;const t=this,e=h(),i="connatix"===e.player_name,n=e.media_id,r=e.playlist_id;let o=!1;if(r?o="https://cdn.jwplayer.com/v2/playlists/"+r:n&&(o="https://cdn.jwplayer.com/v2/media/"+n),!o&&!i)return;let a=400,s=225;const d=e.backup_channel_id,l=e.channel_id,c=jQuery("[id ^=jwplayer_][id $=_div]"),p=e.player_id,_=jQuery(".l-pvm-video [id ^=jwplayer_][id $=_div]"),u=e.time_gap;if(""!==u&&(t.timegap=u),clearInterval(t.interval_id),1200>jQuery(window).width()&&(s=190,a=300,jQuery(".floating-preroll-ad-container").css("width","314px"),jQuery(".floating-preroll-ad-container").css("height","204px")),i&&jQuery("#connatix_floating_preroll_ad").children().length>0)this.apply_connatix_video_title(),this.show_floating_player(),jQuery(document).on("click",".floating-preroll-ad-close",(function(){t.remove_floating_player()}));else if(i||0!=c.length-_.length||"function"!=typeof window.pmc_jwplayer)jQuery(this.pmc_floating_ad_main_div).remove();else{const e={backupChannelId:d,channelId:l,playlist:o,autostart:!0,mute:!0,floating:!0,height:s,width:a},i=function(e){t.player_instance=e,!0===jQuery(t.pmc_floating_ad_main_div).hasClass("live-stream")&&t.show_floating_player(),t.player_instance.on("beforePlay",(function(){if(1===parseInt(m().jwplayer_style_v2)){const e=t.player_instance.getPlaylistItem().title;t.apply_title(e)}})),t.player_instance.on("firstFrame",(function(){t.show_floating_player()})),t.player_instance.on("adImpression",(function(){pmc.cookie.set(t.cookie,1,t.time_gap,"/","functional"),t.is_floating_ad_showed=!0,t.show_floating_player()})),t.player_instance.on("adError",(function(){!0!==t.is_floating_ad_showed&&(1===parseInt(m().preroll_not_required)?t.show_floating_player():t.remove_floating_player())}))}.bind(this),n=function(){jQuery(t.pmc_floating_ad_main_div).length&&jQuery(t.pmc_floating_ad_docked_div).length&&!jQuery(".floating-preroll-ad-container").hasClass("no-float")&&!jQuery(t.pmc_floating_ad_main_div).hasClass("live-stream")&&(jQuery(t.pmc_floating_ad_main_div).insertBefore(jQuery(t.pmc_floating_ad_docked_div)),jQuery(".floating-preroll-ad-container").addClass("no-float"))};window.pmc_jwplayer("jwplayer_floating_preroll_ad",p).setup(e).whenReady(i).whenNoFloat(n),jQuery(document).on("click",".floating-preroll-ad-close",(function(){t.remove_floating_player()}))}}.bind(this),this.show_floating_player=function(){!0!==this.is_floating_ad_showed&&(this.is_floating_ad_showed=!0,setTimeout((function(){jQuery(".floating-preroll-ad-close").show()}),5e3),jQuery(this.pmc_floating_ad_main_div).show())}.bind(this),this.remove_floating_player=function(){"function"==typeof this.player_instance.remove&&this.player_instance.remove(),jQuery(this.pmc_floating_ad_main_div).remove()}.bind(this)},y.harmony=new function(){!function(t,...e){console.debug.bind(null,t)(...e)}("pmcHarmony instance created."),this.init=function(){this.init_DOM()},this.init_DOM=function(){if("object"!=typeof p.pmc_meta||"mobile"!==p.pmc_meta.env)return;const t=_.querySelector(p.pmc_harmony_player_settings?p.pmc_harmony_player_settings.target_container:"body"),e=_.querySelector(".live-stream");e&&t&&(t.prepend(e),p.addEventListener("scroll",(()=>{const t=_.querySelector(".jw-float-bar.jw-reset");t&&t.remove(),_.body.scrollTop>150||_.documentElement.scrollTop>150?(_.querySelector(".live-stream").classList.add("harmony-floating-player"),_.querySelector(".live-stream .floating-preroll-ad-container").style.top=p.pmc_harmony_player_settings?.top_offset||"50px"):(_.querySelector(".live-stream").classList.remove("harmony-floating-player"),_.querySelector(".live-stream .floating-preroll-ad-container").style.top="0px")}).bind(this)))}},y.skinAds=new function(){this.properties={dfpCreativeMarkup:void 0,dfpCreativeParameters:void 0,viewUrlTracked:!1},this.init=function(){this.init_DOM(),this.bind_GUI_events()}.bind(this),this.init_DOM=function(){this.dom={adSection:jQuery("#skin-ad-section"),leftRailContainer:jQuery("#skin-ad-left-rail-container"),rightRailContainer:jQuery("#skin-ad-right-rail-container")}}.bind(this),this.bind_GUI_events=function(){const t=this;jQuery(window).on("message",(function(e){const i=e.originalEvent;if("string"==typeof i.data){const e="pmcadm:dfp:skinad:markup",n="pmcadm:dfp:skinad:parameters";if(i.data.substring(0,e.length)===e)t.properties.dfpCreativeMarkup=i.data.substring(e.length)||"\x3c!-- NOOP --\x3e",t.run();else if(i.data.substring(0,n.length)===n){const e=i.data.substring(n.length);t.properties.dfpCreativeParameters=jQuery.parseJSON(e),t.run()}}})),jQuery(window).on("resize",(function(){t.refresh_skin_rails()})),jQuery(document).ready((function(){t.refresh_skin_rails()})),jQuery("body").on("prestitial-ad:stopped",(function(){t.refresh_skin_rails()})),t.dom.leftRailContainer.on("click",(function(){t.skin_clicked_EventHandler()})),t.dom.rightRailContainer.on("click",(function(){t.skin_clicked_EventHandler()}))}.bind(this),this.skin_clicked_EventHandler=function(){window.open(this.properties.dfpCreativeParameters.clickThroughURL,"_blank")}.bind(this),this.refresh_skin_rails=function(){const t=this;if(!t.properties.dfpCreativeParameters)return;const e=window.pmcadm_options?.pmcSkin?.newBreakpoints;if(e&&window.innerWidth<1420)return void t.dom.adSection.addClass("hide");t.dom.adSection.removeClass("hide");const i=t.properties.dfpCreativeParameters.creative.image,{oldBreakObj:n,newBreakObj:r}=t.compute_old_and_new_break_obj(i),o=(()=>{const t=t=>!t||!t.left||!t.right;return e?t(r)?n:r:t(n)?r:n})(),a=t.properties.viewUrlTracked?o.left:t.properties.dfpCreativeParameters.viewURLPrefix+o.left,s=t.properties.dfpCreativeParameters.bodyBackgroundColor&&jQuery.trim(t.properties.dfpCreativeParameters.bodyBackgroundColor)||null;jQuery("body").css("background-color",s),t.properties.viewUrlTracked=!0,t.dom.leftRailContainer.css("background-image",'url("'+a+'")'),t.dom.rightRailContainer.css("background-image",'url("'+o.right+'")');const d=o.right;jQuery('<img src="'+d+'" alt="" />').on("load",(function(){const e=this.width,i=t.get_content_DOM();t.dom.leftRailContainer.width(e).offset({left:i.offset().left-e}),t.dom.rightRailContainer.width(e).offset({left:i.offset().left+i.outerWidth()})}))}.bind(this),this.compute_old_and_new_break_obj=function(t){const e={LARGE:1900,MEDIUM:1350,SMALL:1260},i=this.compute_rail_size(e),n=this.compute_rail_size({LARGE:1900,MEDIUM:1420,SMALL:1340});return{oldBreakObj:t[e[i]],newBreakObj:t[n.toLowerCase()]}}.bind(this),this.compute_rail_size=function(t){const e=jQuery(window).width();let i=0;return i=e<t.MEDIUM?"SMALL":e<t.LARGE&&e>=t.MEDIUM?"MEDIUM":"LARGE",i}.bind(this),this.get_content_DOM=function(){let t=["main-wrapper"];const e=document.querySelector("#skin-ad-section");void 0!==e&&void 0!==e.dataset.contentContainer&&(t=e.dataset.contentContainer.split(",")),t=this.apply_filters("pmc-adm-dfp-skin-main-content",t);for(let e=0;e<t.length;e++){const i=jQuery("#"+t[e]);if(i&&i.width())return i}return jQuery("body")}.bind(this),this.get_available_rail_width=function(t){t||(t=jQuery("body"));let e=0;return e=window.innerWidth?window.innerWidth:0!==document.documentElement.clientWidth?document.documentElement.clientWidth:document.body.clientWidth,(e-t.outerWidth())/2}.bind(this),this.run=function(){const t=this;t.properties.dfpCreativeMarkup&&t.properties.dfpCreativeParameters&&(t.dom.adSection.removeClass("hide"),t.dom.adSection.append(t.properties.dfpCreativeMarkup),t.refresh_skin_rails())}.bind(this),this.apply_filters=function(t,e,i){const n=d();return n.hooks?.apply_filters?n.hooks.apply_filters(t,e,i):e}.bind(this)},e().adq.push((()=>{n(),y.skinAds.init(),y.prerollPlayer.init(),y.harmony.init()}))})();