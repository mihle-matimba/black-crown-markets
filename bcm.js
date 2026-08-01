(function(){function buildSidebar(){var sidebar=document.querySelector('.page-sidebar');if(!sidebar)return;var nav=document.querySelector('#navigationBlock');if(!nav)return;

var ICONS={myAccountMenu:'fa-th-large',fundAccountMenu2:'fa-credit-card',transactionsMenu:'fa-exchange',tradingHistoryMenu:'fa-line-chart',webTraderMenu:'fa-globe','curr_accounts':'fa-list-alt','curr_my-profile':'fa-user-o','curr_change-password':'fa-lock','curr_bank-details':'fa-university','curr_upload-documents':'fa-upload','curr_request-status':'fa-refresh','curr_withdraw':'fa-power-off','curr_internal-transfers':'fa-exchange','curr_change-leverage':'fa-sliders','curr_downloads':'fa-cube'};

function setIcon(li,iconClass){if(!li)return;var a=li.querySelector(':scope > a');if(!a)return;var icon=a.querySelector('.fa,.glyphicon');if(icon){icon.className='fa '+iconClass+' bcm-nav-icon';}else{a.insertAdjacentHTML('afterbegin','<span class="fa '+iconClass+' bcm-nav-icon"></span>');}}

function iconForItem(li){for(var cls in ICONS){if(li.className&&(' '+li.className+' ').indexOf(' '+cls+' ')!==-1)return ICONS[cls];}return 'fa-circle-o';}

function flattenGroup(id){var wrapper=document.getElementById(id);if(!wrapper)return[];var childUl=wrapper.querySelector(':scope > ul');var items=childUl?Array.prototype.slice.call(childUl.children):[];wrapper.remove();return items;}

function makeList(items){var ul=document.createElement('ul');ul.className='x-navigation';ul.style.cssText='list-style:none;padding:0;margin:0;';items.forEach(function(li){ul.appendChild(li);});return ul;}

var myAccount=document.getElementById('myAccountMenu');
var fundAccount=document.getElementById('fundAccountMenu2');
var transactions=document.getElementById('transactionsMenu');
var trades=document.getElementById('tradingHistoryMenu');
var webTrader=document.getElementById('webTraderMenu');

[['myAccountMenu',myAccount],['fundAccountMenu2',fundAccount],['transactionsMenu',transactions],['tradingHistoryMenu',trades],['webTraderMenu',webTrader]].forEach(function(pair){setIcon(pair[1],ICONS[pair[0]]);});

var accountItems=flattenGroup('accountSettingsMenu');
var requestItems=flattenGroup('requestsSettingsMenu');
var platformItems=flattenGroup('tradingPlatformsMenu');
accountItems.concat(requestItems).concat(platformItems).forEach(function(li){setIcon(li,iconForItem(li));});
if(webTrader)platformItems.push(webTrader);

var mainItems=[myAccount,fundAccount,transactions,trades].filter(Boolean);

var newNav=document.createElement('div');

var logoImg=document.querySelector('.desktop-logo-li .logo img');
if(logoImg){var logoWrap=document.createElement('div');logoWrap.className='bcm-sidebar-logo';var clonedLogo=logoImg.cloneNode(true);clonedLogo.removeAttribute('style');logoWrap.appendChild(clonedLogo);newNav.appendChild(logoWrap);}

function addGroup(label,items){if(!items.length)return;var labelEl=document.createElement('div');labelEl.className='bcm-sidebar-label';labelEl.textContent=label;newNav.appendChild(labelEl);newNav.appendChild(makeList(items));newNav.insertAdjacentHTML('beforeend','<div class="bcm-divider"></div>');}

addGroup('MAIN',mainItems);
addGroup('ACCOUNT SETTINGS',accountItems);
addGroup('REQUESTS',requestItems);
addGroup('TRADING PLATFORMS',platformItems);

var trailingDivider=newNav.querySelector('.bcm-divider:last-child');
if(trailingDivider)trailingDivider.remove();

nav.parentNode.replaceChild(newNav,nav);

var welcomeLi=document.querySelector('.desktop-welcome-li');
var footer=document.createElement('div');footer.className='bcm-sidebar-footer';
var nameEl=welcomeLi?welcomeLi.querySelector('.profile-data-name'):null;
var nameText=nameEl?nameEl.textContent.replace(/welcome/i,'').trim():'';
var initial=nameText?nameText.charAt(0).toUpperCase():'?';
var profileRow=document.createElement('div');profileRow.className='bcm-sidebar-profile';profileRow.innerHTML='<span class="bcm-sidebar-avatar">'+initial+'</span><span class="bcm-sidebar-profile-name">'+nameText+'</span><span class="fa fa-chevron-down bcm-sidebar-profile-chevron"></span>';footer.appendChild(profileRow);

var logoutSrc=document.querySelector('.desktop-logout-li a.mb-control');
if(logoutSrc){logoutSrc.classList.add('bcm-sidebar-logout');logoutSrc.innerHTML='<span class="fa fa-power-off"></span> Logout';footer.appendChild(logoutSrc);}

sidebar.appendChild(footer);

buildDashboardHeader();}
function buildDashboardHeader(){var mainContent=document.querySelector('.page-content-wrap');if(!mainContent)return;var selectEl=document.querySelector('#selectAccounts');var refreshEl=document.querySelector('.refreshWidgets')||document.querySelector('#refreshButton .fa-refresh');var refreshBtn=document.querySelector('#refreshButton');var header=document.createElement('div');header.className='bcm-dash-header';var selectorRow=document.createElement('div');selectorRow.className='bcm-selector-row';if(selectEl){var clonedSelect=selectEl.cloneNode(true);clonedSelect.removeAttribute('id');var selectWrap=document.createElement('div');selectWrap.className='bcm-select-wrap';selectWrap.appendChild(clonedSelect);selectorRow.appendChild(selectWrap);selectEl.closest('form')?selectEl.closest('form').style.display='none':selectEl.parentNode.style.display='none';}
if(refreshBtn){var refreshClone=refreshBtn.cloneNode(true);selectorRow.appendChild(refreshClone);refreshBtn.style.display='none';}
header.appendChild(selectorRow);var welcomeBlock=mainContent.querySelector('.bcm-welcome-block');if(welcomeBlock&&welcomeBlock.nextSibling){mainContent.insertBefore(header,welcomeBlock.nextSibling);}else{mainContent.insertBefore(header,mainContent.firstChild);}}
function relocateDisclaimers(){var mainContent=document.querySelector('.page-content-wrap');if(!mainContent)return;var disclaimer=document.querySelector('.disclaimer-color');var footer=document.querySelector('.footer-color');if(disclaimer)mainContent.appendChild(disclaimer);if(footer)mainContent.appendChild(footer);}
function buildLoginPage(){var body=document.querySelector('.login-body');if(!body||body.dataset.bcmLogin)return;body.dataset.bcmLogin='1';document.documentElement.classList.add('bcm-login-page');var left=document.createElement('div');left.className='bcm-login-left';while(body.firstChild){left.appendChild(body.firstChild);}var titleEl=left.querySelector('.login-title');if(titleEl){var subtitle=document.createElement('div');subtitle.className='bcm-login-subtitle';subtitle.textContent='Access your Black Crown Markets account to manage your trading with ease.';titleEl.insertAdjacentElement('afterend',subtitle);}var right=document.createElement('div');right.className='bcm-login-right';right.innerHTML='<img class="bcm-login-logo" src="https://ffxlryusmstnfjedleds.supabase.co/storage/v1/object/public/Assets/blackcrown%20white.svg" alt="Black Crown Markets"/>';body.appendChild(left);body.appendChild(right);body.classList.add('bcm-login-card');document.body.appendChild(body);}
function buildRegistrationPage(){var body=document.querySelector('.registration-body');if(!body||body.dataset.bcmLogin)return;body.dataset.bcmLogin='1';document.documentElement.classList.add('bcm-login-page');var left=document.createElement('div');left.className='bcm-login-left';while(body.firstChild){left.appendChild(body.firstChild);}var stepNumbers=left.querySelectorAll('.steps_2 .stepNumber');stepNumbers.forEach(function(el,i){el.textContent=String(i+1);});var right=document.createElement('div');right.className='bcm-login-right';right.innerHTML='<img class="bcm-login-logo" src="https://ffxlryusmstnfjedleds.supabase.co/storage/v1/object/public/Assets/blackcrown%20white.svg" alt="Black Crown Markets"/>';body.appendChild(left);body.appendChild(right);body.classList.add('bcm-login-card');document.body.appendChild(body);}
function init(){buildSidebar();relocateDisclaimers();buildLoginPage();buildRegistrationPage();}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}})();
