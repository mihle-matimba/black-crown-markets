(function(){function buildSidebar(){var sidebar=document.querySelector('.page-sidebar');if(!sidebar)return;var nav=document.querySelector('#navigationBlock');if(!nav)return;

function flattenGroup(id){var wrapper=document.getElementById(id);if(!wrapper)return[];var childUl=wrapper.querySelector(':scope > ul');var items=childUl?Array.prototype.slice.call(childUl.children):[];wrapper.remove();return items;}

function makeList(items){var ul=document.createElement('ul');ul.className='x-navigation';ul.style.cssText='list-style:none;padding:0;margin:0;';items.forEach(function(li){ul.appendChild(li);});return ul;}

var myAccount=document.getElementById('myAccountMenu');
var fundAccount=document.getElementById('fundAccountMenu2');
var transactions=document.getElementById('transactionsMenu');
var trades=document.getElementById('tradingHistoryMenu');
var webTrader=document.getElementById('webTraderMenu');

var accountItems=flattenGroup('accountSettingsMenu');
var requestItems=flattenGroup('requestsSettingsMenu');
var platformItems=flattenGroup('tradingPlatformsMenu');
if(webTrader)platformItems.push(webTrader);

var mainItems=[myAccount,fundAccount,transactions,trades].filter(Boolean);

var selectAccount=document.querySelector('#selectAccount');if(selectAccount)selectAccount.remove();

var newNav=document.createElement('div');
newNav.appendChild(makeList(mainItems));

if(accountItems.length){newNav.insertAdjacentHTML('beforeend','<div class="bcm-divider"></div>');newNav.insertAdjacentHTML('beforeend','<div class="bcm-group-label"><span class="fa fa-files-o"></span>ACCOUNT SETTINGS<span class="fa fa-chevron-down bcm-chevron"></span></div>');newNav.appendChild(makeList(accountItems));}
if(requestItems.length){newNav.insertAdjacentHTML('beforeend','<div class="bcm-divider"></div>');newNav.insertAdjacentHTML('beforeend','<div class="bcm-group-label"><span class="glyphicon glyphicon-transfer"></span>REQUESTS<span class="fa fa-chevron-down bcm-chevron"></span></div>');newNav.appendChild(makeList(requestItems));}
if(platformItems.length){newNav.insertAdjacentHTML('beforeend','<div class="bcm-divider"></div>');newNav.insertAdjacentHTML('beforeend','<div class="bcm-group-label"><span class="fa fa-download"></span>TRADING PLATFORMS<span class="fa fa-chevron-right bcm-chevron"></span></div>');newNav.appendChild(makeList(platformItems));}

nav.parentNode.replaceChild(newNav,nav);var welcomeLi=document.querySelector('.desktop-welcome-li');var mainContent=document.querySelector('.page-content-wrap');if(welcomeLi&&mainContent){var welcomeBlock=document.createElement('div');welcomeBlock.className='bcm-welcome-block';var nameEl=welcomeLi.querySelector('.profile-data-name');var nameHTML=nameEl?nameEl.innerHTML:'Welcome';welcomeBlock.innerHTML='<div class="bcm-welcome-text">'+nameHTML+'</div>';mainContent.insertBefore(welcomeBlock,mainContent.firstChild);welcomeLi.style.display='none';}
buildDashboardHeader();}
function buildDashboardHeader(){var mainContent=document.querySelector('.page-content-wrap');if(!mainContent)return;var selectEl=document.querySelector('#selectAccounts');var refreshEl=document.querySelector('.refreshWidgets')||document.querySelector('#refreshButton .fa-refresh');var refreshBtn=document.querySelector('#refreshButton');var header=document.createElement('div');header.className='bcm-dash-header';var selectorRow=document.createElement('div');selectorRow.className='bcm-selector-row';if(selectEl){var clonedSelect=selectEl.cloneNode(true);clonedSelect.removeAttribute('id');var selectWrap=document.createElement('div');selectWrap.className='bcm-select-wrap';selectWrap.appendChild(clonedSelect);selectorRow.appendChild(selectWrap);selectEl.closest('form')?selectEl.closest('form').style.display='none':selectEl.parentNode.style.display='none';}
if(refreshBtn){var refreshClone=refreshBtn.cloneNode(true);selectorRow.appendChild(refreshClone);refreshBtn.style.display='none';}
header.appendChild(selectorRow);var welcomeBlock=mainContent.querySelector('.bcm-welcome-block');if(welcomeBlock&&welcomeBlock.nextSibling){mainContent.insertBefore(header,welcomeBlock.nextSibling);}else{mainContent.insertBefore(header,mainContent.firstChild);}}
function relocateDisclaimers(){var mainContent=document.querySelector('.page-content-wrap');if(!mainContent)return;var disclaimer=document.querySelector('.disclaimer-color');var footer=document.querySelector('.footer-color');if(disclaimer)mainContent.appendChild(disclaimer);if(footer)mainContent.appendChild(footer);}
function buildLoginPage(){var body=document.querySelector('.login-body');if(!body||body.dataset.bcmLogin)return;body.dataset.bcmLogin='1';document.documentElement.classList.add('bcm-login-page');var left=document.createElement('div');left.className='bcm-login-left';while(body.firstChild){left.appendChild(body.firstChild);}var titleEl=left.querySelector('.login-title');if(titleEl){var subtitle=document.createElement('div');subtitle.className='bcm-login-subtitle';subtitle.textContent='Access your Black Crown Markets account to manage your trading with ease.';titleEl.insertAdjacentElement('afterend',subtitle);}var right=document.createElement('div');right.className='bcm-login-right';right.innerHTML='<img class="bcm-login-logo" src="https://ffxlryusmstnfjedleds.supabase.co/storage/v1/object/public/Assets/blackcrown%20white.svg" alt="Black Crown Markets"/>';body.appendChild(left);body.appendChild(right);body.classList.add('bcm-login-card');document.body.appendChild(body);}
function buildRegistrationPage(){var body=document.querySelector('.registration-body');if(!body||body.dataset.bcmLogin)return;body.dataset.bcmLogin='1';document.documentElement.classList.add('bcm-login-page');var left=document.createElement('div');left.className='bcm-login-left';while(body.firstChild){left.appendChild(body.firstChild);}var stepNumbers=left.querySelectorAll('.steps_2 .stepNumber');stepNumbers.forEach(function(el,i){el.textContent=String(i+1);});var right=document.createElement('div');right.className='bcm-login-right';right.innerHTML='<img class="bcm-login-logo" src="https://ffxlryusmstnfjedleds.supabase.co/storage/v1/object/public/Assets/blackcrown%20white.svg" alt="Black Crown Markets"/>';body.appendChild(left);body.appendChild(right);body.classList.add('bcm-login-card');document.body.appendChild(body);}
function init(){buildSidebar();relocateDisclaimers();buildLoginPage();buildRegistrationPage();}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}})();
