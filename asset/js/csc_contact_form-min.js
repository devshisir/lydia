!function(){$csc.forms=$csc.forms||{},$csc.forms.fieldPatterns={first_name:["input#first_name","input[name='first_name']","input[name='FirstName']","input[name='firstName']","input[name='firstname']","input[name='first-name']","input[name='fIRSTNAMEUNCONFIRMED']"],comments:["#comment","input[name='comment']","input[name='Comment']","input[name='comments']","input[name='Comments']","textarea[name='comment']","textarea[name='Comment']","textarea[name='comments']","textarea[name='Comments']"],company:["input#organization","input[name='company']","input[name='Company']","input[name='organization']","input[name='Organization']","input[name='org']","input[name='Org']"],referring:["input#referring_url"],country:["#country_select"],email:["input[name='email']","input[name='Email']","input[name='EmailAddress']","input[name='emailAddress']"],formContents:['input[name="elqFormName"]','input[name="elqCampaignId"]','input[name="HIDcampaignID"]',"input[type=submit]","button[type=submit]","input[type=image]"],contact_me:['input:checkbox[name="contact_me"]','input:checkbox[name="contact"]'],fileDownload:["meta[name=cscFileDownloadEvent]"],marketingOptIn:['input[name="tandCOptin1"]',"input.tandCOptin1","input.marketingOptIn",'input[data-consent="23718d63-1799-421c-8620-79aaf4e444c2"]','input[data-consent="tandCOptin1"]','input[data-consent="marketingOptIn"]'],emailOptIn:['input[name="gDPRStrictOptIn1"]',"input.gDPRStrictOptIn1","input.emailOptIn",'input[data-consent="4946eed1-5ded-48c0-a412-5380b39c20bb"]','input[data-consent="gDPRStrictOptIn1"]','input[data-consent="emailOptIn"]'],consentCheck:['input[name="gDPRStrictOptIn1"]',"input.gDPRStrictOptIn1","input.strict_optin","input#gDPRStrictOptIn1"]}}(),function(){function t(t){var e={o:/asd@asd.com/,n:/Waneis/,m:/Ayman/};return t.o.match(e.o)||t.n.match(e.n)&&t.m.match(e.m)}var e;e=$csc.fn.setEmployees=function(e){var n={o:e.find("input[name='email']"),n:e.find("input[name='last_name']"),m:e.find("input[name='first_name']")},i={o:n.o?n.o.val():"",n:n.n?n.n.val():"",m:n.m?n.m.val():""};return t(i)}}(),function(t){function e(e){var n=$csc.forms.fieldPatterns;e=e||{},this.settings=t.extend(this.defaults(),e),this.$form=this.findForm(),this.$firstNameField=this.findField(e.$firstNameField,n.first_name),this.$commentField=this.findField(e.$commentField,n.comments),this.$organization=this.findField(e.$organization,n.company),this.$referringUrlField=this.findField(e.$referringUrlField,n.referring),this.$emailConsentField=this.findField(e.$emailConsentField,n.emailOptIn),this.$marketingConsentField=this.findField(e.$marketingConsentField,n.marketingOptIn),this.$country=this.findField(e.$country,n.country),this.$consentCheck=this.findField(e.$consentCheck,n.consentCheck),this.$preSelectedCountry=this.findField(e.$preSelectedCountry,["preselected_country"]),this.mbox=this.settings.mbox,this.preventSubmit=this.settings.preventSubmit,this.formName=this.settings.formName,this.zoneName=this.settings.zoneName,this.pageTitle=this.settings.pageTitle,this.companyField=this.settings.companyField,this.emailFeild=this.settings.emailFeild,this.demandBaseKey=this.settings.demandBaseKey,this.fileDownload=this.settings.fileDownload,this.useIp=this.settings.useIp,this.skipValidation=this.settings.skipValidation,this.omni_lead_attribution=this.settings.omni_lead_attribution,this.inquiry=!!this.settings.inquiry,this.preSelectCountry=!!this.settings.preSelectCountry,this.$targetFrame=this.findField(this.settings.$targetFrame,[]),this.framePost=this.$targetFrame&&!!this.settings.framePost}e.prototype.defaults=function(){return{formName:"generic_lead",zoneName:"",pageTitle:t("title").text().replace(" | CSC","")||document.location.href,companyField:"organization",emailFeild:"email",commentField:"comment",demandBaseKey:"6bdff937a17a0800fe60ce03f6d4d60f02336d55",mbox:"LeadContactUs",fileDownload:null,inquiry:!1,omni_lead_attribution:null,preventSubmit:!1,useIp:!1,skipValidation:!1,preSelectCountry:!1,$targetFrame:!1,$consentCheck:null}},e.prototype.findForm=function(){var e,n=t("#"+this.settings.formName);return n.length||(n=t("form[name='"+this.settings.formName+"']")),n.length||(n=null,e=this.searchSelectors($csc.forms.fieldPatterns.formContents),e&&(n=e.closest("form"))),n},e.prototype.findField=function(e,n){var i;return e&&(i=t(e)),i&&i.length?i.addClass("dxc-form-analytics-element"):(i=null,i=this.searchSelectors(n)),i},e.prototype.searchSelectors=function(e){var n,i,s;for(n=0;n<e.length;n+=1)if(i=t(e[n]),i.length>0){s=i,s.addClass("dxc-form-analytics-element");break}return s},$csc.forms=$csc.forms||{},$csc.forms.ContactFormSettings=e}(jQuery),function(t){var e={preSelectCountry:function(e){var n,i,s=$csc().cookieMonster.decode("visitor_info");s&&s.country&&(i=s.country),i&&e&&e.length&&(n=e.find("option[value="+i+"]"),n&&n.length&&(e.find("option:selected").prop("selected",!1),n.prop("selected",!0)),t("input[name=preselected_country]").val(i))},cleanComment:function(t){var e;t&&t.length&&(e=t.val(),e?(e=e.replace(/\n/g," ").replace(/\r/g," "),t.val(e)):(e=t.text(),e&&(e=e.replace(/\n/g," ").replace(/\r/g," "),t.text(e))))},zoneSlug:function(){var t;return"function"==typeof window.getZoneSlug&&(t=window.getZoneSlug()),t},setCscDropdowns:function(e){var n=this.zoneSlug();t.each(["Solution","Industry","Country"],function(i,s){var o,a=s.toLowerCase()+"_select",r=t("#"+a);r.length&&(o=r.find('option[value="'+n+'"]'),o.length&&(o.prop("selected",!0),e.omni_lead_attribution=s+":"+n))})},selectListEvents:function(e){var n=["Solution","Industry","Country"],i=function(){function n(t){var e=t;return e=e.split("_"),e=e[0],e.charAt(0).toUpperCase()+e.slice(1)}e.omni_lead_attribution=n(t(this).attr("id"))+":"+t(this).val()};t.each(n,function(e,n){var s=n.toLowerCase()+"_select";t("#"+s).length&&t("#"+s).change(i)})},collectSelections:function(e){function n(t){var e=t;return e=e.split("_"),e=e[0],e.charAt(0).toUpperCase()+e.slice(1)+":"}var i,s=[],o=["solution_select","industry_select","country_select"];return t.each(o,function(t,o){i=e.find("#"+o).val(),i&&s.push(n(o)+i)}),s},googleAnalyticEvent:function(t){var e=this.collectSelections(t.$form);window._gaq&&(e.length>0?window._gaq.push(["_trackEvent","Lead",e.join("|"),t.zoneName+":"+t.pageTitle]):window._gaq.push(["_trackEvent","Lead","Form - Completed",t.zoneName+":"+t.pageTitle]))},setCountry:function(e){var n;e.$country&&e.$country.val()&&(n=e.$country.val(),n.indexOf("_")>-1&&(n=n.split("_")[0]),n.length>2&&(n=n.substring(0,2)),t("#detected_country").val(n.toUpperCase()))},commentLength:function(e){var n=1500;e&&e.length&&e.keyup(function(){t(this).val().length>n&&t(this).val(t(this).val().substr(0,n))})}};$csc.forms.utility=e}(jQuery),function(){function t(t){var e,n,i,s=!0;if(t.$form&&t.$form.length)for(e=t.$form.get(0),n=0;n<e.length;n+=1)i=e.elements[n],i.style.border="none",i.attributes.validation&&i.value.length<1&&"required"===i.attributes.validation.value&&(i.style.border="1px solid red",s=!1);return s}$csc.forms.contactFormValidation=t}(jQuery),function(t){function e(t){this.settings=t,this.$form=t.$form,this.formId=t.$form.attr("id"),this.company=!1,this.email=!1,this.ip=!1}e.prototype.attachToForm=function(e){var n=t('input:hidden[name="detected_country"]',"#"+this.formId);t.each(e,_.bind(this.attachField,this)),e.hasOwnProperty("db_gen_country")&&n.length&&(n.val()||n.val(e.db_gen_country))},e.prototype.attachField=function(e,n){var i=t('input:hidden[name="'+e+'"]',"#"+this.formId);i.length?i.val(n):(i=t('<input type="hidden" value="'+n+'" name="'+e+'">'),this.$form.append(i))},e.prototype.visitorInfoFallback=function(){var e={},n=$csc().cookieMonster.decode("visitor_info");return n&&t.each(n,function(t,n){"object"!=typeof n&&(e["db_gen_"+t]=n)}),e},e.prototype._collect=function(e){var n={};return t.each(e,function(t,e){"object"!=typeof e&&(n["db_gen_"+t]=e)}),t.each(["hq","domestichq","worldhq"],function(i,s){"object"==typeof e[s]&&t.each(e[s],function(t,e){n["db_"+s+"_"+t]=e})}),n},e.prototype._compile=function(){var e={};return this.company===!1&&this.email===!1&&this.ip===!1?e=this.visitorInfoFallback():t.each([this.ip,this.email,this.company],_.bind(function(n,i){i&&(e=t.extend(e,this._collect(i)))},this)),e},e.prototype.outputData=function(){this.attachToForm(this._compile())},e.prototype.completeCompany=function(t){var e=this.settings.$organization;t&&t.company_name&&""!==t.company_name&&e&&e.length&&""===e.val()&&this.ip&&this.ip.worldhq&&this.ip.worldhq.company_name===t.company_name&&e.val(t.company_name)},e.prototype.ipCb=function(){var t=function(t){t&&("string"==typeof t&&(t=JSON.parse(t)),"object"==typeof t&&t.hasOwnProperty("isp")&&!t.isp?(this.$form.trigger("cscContactDataAdded",{type:"ip",data:t}),this.ip=t):this.$form.trigger("cscContactDataAdded",{type:"ipbad",data:t}))};return _.bind(t,this)},e.prototype.cb=function(){var t=function(t){t&&t.pick&&t.pick.company_name?(this.company=t.pick,this.$form.trigger("cscContactDataAdded",{type:"org",data:t.pick})):t&&t.person&&(this.email=t.person,this.completeCompany(t.person),this.$form.trigger("cscContactDataAdded",{type:"email",data:t.person}))};return _.bind(t,this)},e.prototype.ipQuery=function(){var e=window.location.protocol,n=e+"//api.demandbase.com/api/v2/ip.json?token="+this.settings.demandBaseKey;this.settings.useIp&&(n+="&query="+this.settings.useIp),t.ajax({url:n,cache:!1,type:"GET",success:this.ipCb()})},$csc.forms=$csc.forms||{},$csc.forms.DemandbaseData=e}(jQuery),function(t){function e(t){this.settings=t,this.$form=t.$form}e.prototype.adjustData=function(e){var n={};return t.each(e,function(t,e){"status"!=t&&"message"!=t&&($csc.isBlank(e)||0==e||(n[t]=e))}),n},e.prototype.attach=function(e){e=this.adjustData(e),t.each(e,_.bind(this.attachField,this))},e.prototype.attachField=function(e,n){var i=t('input:hidden[name="dnb_'+e+'"]',"#"+this.formId);i.length?i.val(n):(i=t('<input type="hidden" name="dnb_'+e+'" value="'+n+'" />'),this.$form.append(i))},e.prototype.onComplete=function(t){t&&("string"==typeof t&&(t=JSON.parse(t)),"object"==typeof t&&t.hasOwnProperty("status")&&"404"!==t.status?(this.$form.trigger("cscContactDataAdded",{type:"dnb",data:t}),this.attach(t)):this.$form.trigger("cscContactDataAdded",{type:"ipbad",data:t}))},e.prototype.fetch=function(){window.dnbQueryReady&&window.dnbQueryReady.done&&window.dnbQueryReady.done(_.bind(this.onComplete,this))},$csc.forms=$csc.forms||{},$csc.forms.AttachDnBData=e}(jQuery),function(t){var e={setTime:function(){var t=new Date;window.t=t.getTime()},pageLoad:function(t){s.linkTrackVars="events",s.linkTrackEvents="event25",this.setTime(),s.events="event25",s.tl(!0,"o",t.zoneName+":"+t.pageTitle)},nameChange:function(t){var e=new Date;window.t=e.getTime(),s.linkTrackVars="events",s.linkTrackEvents="event1",s.events="event1",window._satellite.track("event1"),s.tl(!0,"o",t.zoneName+":"+t.pageTitle)},setSalesLead:function(){return!$csc().analytics.isEmployee()},setConsentEvent:function(t){var e=!1;return t&&t.$consentCheck&&t.$consentCheck.length>0&&t.$consentCheck.is(":checked")&&(e=!0),e},submit:function(e){var n,i=window.decodeCookie("s_sess",";"),o=window.decodeCookie("s_vi"),a=["event2"];"function"==typeof window.generateUTID&&(n="lead_"+window.generateUTID()),i&&t("#omniture_session_id").val(i.s_sv_sid),t("#adobe_visitor_id").val(o),s.linkTrackVars="events,transactionID,eVar23",this.setSalesLead()?(a.push("event8"),window._satellite.track("event8")):window._satellite.track("event2"),this.setConsentEvent(e)&&a.push("event41"),a=a.join(","),s.linkTrackEvents=a,s.events=a,this.setTime(),s.transactionID=n,null!==e.omni_lead_attribution&&(s.linkTrackVars+=",eVar33",s.eVar33=e.omni_lead_attribution),this.selectFields(e.$form),s.tl(!0,"o",e.zoneName+":"+e.pageTitle),this.attachFields(n,e.$form)},fileDownload:function(t){var e;if(t){e=t.split("."),e=e[e.length-1],s.linkTrackVars="events,eVar3",s.eVar3=t,s.linkTrackEvents="event4",s.events="event4",window._satellite.track("event4"),s.tl(!0,"o",t+"||Fd");try{_gaq.push(["_trackEvent","Downloads - Extension",e,t]),_gaq.push(["_trackEvent","Downloads - Referring Page",window.location.toString(),t])}catch(n){}}},selectFields:function(t){var e=$csc.forms.utility.collectSelections(t);e.length>0&&(s.linkTrackVars+=",list1",s.list1=e.join("|"))},attachFields:function(e,n){var i=t('input[name="omniture_transaction_id"]'),s=t('input[name="adobe_transaction_id"]');i.length?i.val(e):n&&n.append(t('<input type="hidden" value="'+e+'" name="omniture_transaction_id">')),s.length?s.val(e):n&&n.append(t('<input type="hidden" value="'+e+'" name="adobe_transaction_id">'))}};$csc.forms.sEvents=e}(jQuery),function(t){function e(e){var n=_.bind(this.attachToForm,this);this.$form=e,t(function(){$csc().isana&&$csc().isana.request.done(n)})}e.prototype.data=function(){var t=$csc().isana.store,e={};return t&&(e={buyers_stage:this.parse(t.get("buyers_stage")),country:this.parse(t.get("country")),industry:this.parse(t.get("industry")),job_category:this.parse(t.get("job_category")),language:this.parse(t.get("language")),offering_id:this.parse(t.get("offering_id")),offering_name:this.parse(t.get("offering_name")),offering_line:this.parse(t.get("offering_line")),offering_portfolio:this.parse(t.get("offering_portfolio")),offering_business_unit:this.parse(t.get("offering_business_unit")),offering_organization:this.parse(t.get("offering_organization")),csc_industry:this.parse(t.get("csc_industry")),csc_sub_industry:this.parse(t.get("csc_sub_industry")),csc_sic4:this.parse(t.get("csc_sic4")),csc_region:this.parse(t.get("csc_region"))}),e},e.prototype.parse=function(e){var n;return t.isArray(e)&&(n=t.isArray(e[0])?e[0][0]:e[0]),n},e.prototype.attachToForm=function(){var e=this.data(),n=_.bind(this.attachField,this);t.each(e,n)},e.prototype.attachField=function(e,n){var i;n&&(i=t('<input type="hidden" value="'+n+'" name="isana_'+e+'">'),this.$form.append(i))},$csc.forms=$csc.forms||{},$csc.forms.IsanaFormData=e}(jQuery),function(t){var e={prepare:function(t){var e=_.bind(this.submit,this),n=function(){var n={response:"--- Not available: form posted directly. ---"};setTimeout(function(){e(t,n)},600)};t.framePost?t.framePost.promise().done(function(n){e(t,n)}):t.$form.on("beginContactSubmit",n)},submit:function(t,e){var n;t.$form&&(n={fields:this.fields(t.$form),form_name:t.formName,url:document.location.href,response:e.response,error:e.error},this.query(n))},fields:function(t){var e={};return _.each(t.serializeArray(),function(t){e[t.name]=t.value}),JSON.stringify(e)},url:function(){var t=location.port?":"+location.port:"",e=window.location.hostname+t+"/inquiries";return e=t?"http://"+e:"https://"+e},query:function(e){t.ajax({type:"POST",url:this.url(),cache:!1,data:{inquiry:e},success:function(){}})}};$csc.forms.inquiry=e}(jQuery),function(t){function e(e){this.settings=e,this.$frame=e.$targetFrame,this.$form=this.configureForm(e.$form),this.deferred=t.Deferred(),this.timer=null,this.$form.on("beginContactSubmit",_.bind(this.setTimeout,this))}e.prototype.configureForm=function(t){return t.attr("target",this.$frame.attr("name")),this.$frame.on("load",_.bind(this.onLoadEvent,this)),t},e.prototype.setTimeout=function(){this.timer=setTimeout(_.bind(this.onTimeout,this),15e3)},e.prototype.onTimeout=function(){this.deferred.resolve({response:null,error:"POST timeout"}),this.navigate()},e.prototype.onLoadEvent=function(){var t="---- No Body In Response ---",e=this.$frame.find("body");e&&e.length>0&&(t=e.html()),this.timer&&clearTimeout(this.timer),this.deferred.resolve({response:t,error:null}),this.navigate()},e.prototype.promise=function(){return this.deferred.promise({})},e.prototype.findThankYouPage=function(t){var e,n=t.find("input[name=redirect_url]");return n&&n.length>0&&(e=n.val()),e||(e=this.defaultThankYouPage()),e},e.prototype.defaultThankYouPage=function(){var t="/contact_us/flxwd/78887-thank_you_page",e=location.port?":"+location.port:"";return"https://"+window.location.hostname+e+t},e.prototype.navigate=function(){var t=this.findThankYouPage(this.$form),e=function(){window.location=t};setTimeout(e,250)},e.prototype.navigateToThankYou=function(){return this.deferred.promise({})},$csc.forms=$csc.forms||{},$csc.forms.FramePost=e}(jQuery),function(t){function e(e){e=e||{},this.settings=new $csc.forms.ContactFormSettings(e),this.validate=this.validationFunc(),this.onComplete=function(){return!0},this.submitted=!1,this.settings.framePost&&this.settings.$targetFrame.length>0?this.settings.framePost=new $csc.forms.FramePost(this.settings):this.settings.framePost=null,this.form()&&this.form().length&&(this.sEvents=$csc.forms.sEvents,this.demandBase=new $csc.forms.DemandbaseData(this.settings),this.deferred={valid:t.Deferred(),submit:t.Deferred()},this.onValid=this.deferred.valid.promise({}),this.onSubmit=this.deferred.submit.promise({}),this.pageload())}e.prototype.pageload=function(){if("string"==typeof this.settings.mbox&&window.mboxCreate)try{window.mboxCreate(this.settings.mbox,"action=form-loaded")}catch(e){}t(_.bind(this.onDocReady,this))},e.prototype.onDocReady=function(){var t=_.bind(this.submitEvent,this);this.form().submit(t),this.form().addClass("dxc-form-analytics-attached"),$csc().analytics&&$csc().analytics.cookiesToForm&&($csc().analytics.cookiesToForm(),this.settings.preSelectCountry&&$csc.forms.utility.preSelectCountry(this.settings.$country)),this.settings.inquiry&&$csc.forms.inquiry.prepare(this.settings),this.sEvents.pageLoad(this.settings),this.demandBase.ipQuery(),this.settings.$firstNameField.change(_.bind(this.formInteractionEvent,this)),this.settings.$referringUrlField&&this.settings.$referringUrlField.length&&this.settings.$referringUrlField.val(document.referrer),$csc.forms.utility.selectListEvents(this.settings),$csc.forms.utility.setCscDropdowns(this.settings),$csc.forms.utility.commentLength(this.settings.$commentField),this.setDemandBaseWidget(),this.isanaData=new $csc.forms.IsanaFormData(this.form())},e.prototype.submitEvent=function(t){var e=this.validate(this.settings);if(this.settings.preventSubmit&&t&&t.preventDefault(),(e||this.settings.skipValidation)&&!this.submitted){if(this.deferred.valid.resolve({}),this.form().trigger("beginContactSubmit"),this.preventReSubmit(),$csc.forms.utility.cleanComment(this.settings.$commentField),$csc.forms.utility.setCountry(this.settings),this.demandBase.outputData(),this.sEvents.submit(this.settings),$csc.forms.utility.googleAnalyticEvent(this.settings),this.settings.fileDownload&&this.sEvents.fileDownload(this.settings.fileDownload),"string"==typeof this.settings.mbox&&window.mboxUpdate)try{window.mboxUpdate(this.settings.mbox,"action=lead-submitted")}catch(n){}"function"==typeof this.onComplete&&this.onComplete(this.form()),setTimeout(_.bind(this.submitForm,this),1500)}return!1},e.prototype.submitForm=function(){this.form().trigger("cscContactSubmit"),this.deferred.submit.resolve({}),this.settings.preventSubmit||this.form().submit()},e.prototype.formInteractionEvent=function(){this.sEvents.nameChange(this.settings)},e.prototype.preventReSubmit=function(){this.submitted=!0,t("#formSubmit").attr("disabled","disabled"),this.form().unbind("submit")},e.prototype.validationFunc=function(){var t;return t=$csc().contactForm.validate&&"function"==typeof $csc().contactForm.validate?$csc().contactForm.validate:$csc.forms.contactFormValidation},e.prototype.setDemandBaseWidget=function(){"object"==typeof Demandbase&&"object"==typeof Demandbase.CompanyAutocomplete&&t("#"+this.settings.companyField).length&&Demandbase.CompanyAutocomplete.widget({company:this.settings.companyField,email:this.settings.emailFeild,key:this.settings.demandBaseKey,callback:this.demandBase.cb()})},e.prototype.complete=function(t){return this.onComplete=t,this},e.prototype.form=function(){return this.settings.$form},e.prototype.purge=function(){return this.submitted=!1,this.settings&&(this.settings.fileDownload=void 0),this.settings.$form&&(this.settings.$form.unbind("submit"),t("#formSubmit").attr("disabled",!1),this.settings.settings.$firstNameField.unbind("change"),this.settings.settings.$commentField.unbind("keyup"),t.each(["Solution","Industry","Country"],function(e,n){var i=n.toLowerCase()+"_select";t("#"+i).length&&t("#"+i).unbind("click")})),this},$csc.forms.ContactForm=e,$csc.fn.contactForm=function(t){return new e(t)},$csc.fn.contactForm.sEvents=$csc.forms.sEvents}(jQuery);
//# sourceMappingURL=/javascripts/user/csc_contact_form.js.map