(function(){function buildSidebar(){var sidebar=document.querySelector('.page-sidebar');if(!sidebar)return;var nav=document.querySelector('#navigationBlock');if(!nav)return;var trades=document.querySelector('#tradingHistoryMenu');var settings=document.querySelector('#accountSettingsMenu');
var selectAccount=document.querySelector('#selectAccount');if(selectAccount)selectAccount.remove();var newNav=document.createElement('div');
newNav.insertAdjacentHTML('beforeend','<div class="bcm-group-label"><span class="fa fa-line-chart"></span>TRADING<span class="fa fa-chevron-down bcm-chevron"></span></div>');var tradingGroup=document.createElement('ul');tradingGroup.className='x-navigation';tradingGroup.style.cssText='list-style:none;padding:0;margin:0;';tradingGroup.insertAdjacentHTML('beforeend','<li><a href="/"><span class="xn-text">Accounts</span></a></li>');if(trades){var tradeText=trades.querySelector('.xn-text');if(tradeText)tradeText.textContent='Order History';tradingGroup.appendChild(trades);}tradingGroup.insertAdjacentHTML('beforeend','<li><a href="https://webtrader.blackcrownmarkets.com" target="_blank" rel="noopener"><span class="xn-text">WebTrader ↗</span></a></li>');
newNav.appendChild(tradingGroup);newNav.insertAdjacentHTML('beforeend','<div class="bcm-divider"></div>');
newNav.insertAdjacentHTML('beforeend','<div class="bcm-group-label"><span class="fa fa-credit-card"></span>PAYMENTS &amp; WALLET<span class="fa fa-chevron-down bcm-chevron"></span></div>');var paymentsGroup=document.createElement('ul');paymentsGroup.className='x-navigation';paymentsGroup.style.cssText='list-style:none;padding:0;margin:0;';paymentsGroup.insertAdjacentHTML('beforeend','<li><a href="https://trade.blackcrownmarkets.com/deposit"><span class="xn-text">Deposit</span></a></li>');paymentsGroup.insertAdjacentHTML('beforeend','<li><a href="https://trade.blackcrownmarkets.com/withdraw"><span class="xn-text">Withdrawal</span></a></li>');paymentsGroup.insertAdjacentHTML('beforeend','<li><a href="https://trade.blackcrownmarkets.com/internal-transfers"><span class="xn-text">Internal Transfer</span></a></li>');paymentsGroup.insertAdjacentHTML('beforeend','<li><a href="https://trade.blackcrownmarkets.com/transactions"><span class="xn-text">Transaction History</span></a></li>');
newNav.appendChild(paymentsGroup);newNav.insertAdjacentHTML('beforeend','<div class="bcm-divider"></div>');
newNav.insertAdjacentHTML('beforeend','<div class="bcm-group-label"><span class="fa fa-user"></span>ACCOUNT<span class="fa fa-chevron-down bcm-chevron"></span></div>');var accountGroup=document.createElement('ul');accountGroup.className='x-navigation';accountGroup.style.cssText='list-style:none;padding:0;margin:0;';accountGroup.insertAdjacentHTML('beforeend','<li><a href="/accounts"><span class="xn-text">Trading Accounts</span></a></li>');if(settings){var profileLi=settings.querySelector('li.curr_my-profile');if(profileLi)accountGroup.appendChild(profileLi);var bankLi=settings.querySelector('li.curr_bank-details');if(bankLi)accountGroup.appendChild(bankLi);var docsLi=settings.querySelector('li.curr_upload-documents');if(docsLi){var docsText=docsLi.querySelector('a');if(docsText)docsText.textContent='Documents';accountGroup.appendChild(docsLi);}var pwLi=settings.querySelector('li.curr_change-password');if(pwLi)accountGroup.appendChild(pwLi);}
newNav.appendChild(accountGroup);newNav.insertAdjacentHTML('beforeend','<div class="bcm-divider"></div>');
newNav.insertAdjacentHTML('beforeend','<div class="bcm-group-label"><span class="fa fa-exchange"></span>REQUESTS<span class="fa fa-chevron-down bcm-chevron"></span></div>');var requestsGroup=document.createElement('ul');requestsGroup.className='x-navigation';requestsGroup.style.cssText='list-style:none;padding:0;margin:0;';requestsGroup.insertAdjacentHTML('beforeend','<li><a href="https://trade.blackcrownmarkets.com/request-status"><span class="xn-text">Request Status</span></a></li>');requestsGroup.insertAdjacentHTML('beforeend','<li><a href="https://trade.blackcrownmarkets.com/change-leverage"><span class="xn-text">Change Leverage</span></a></li>');
newNav.appendChild(requestsGroup);newNav.insertAdjacentHTML('beforeend','<div class="bcm-divider"></div>');
newNav.insertAdjacentHTML('beforeend','<div class="bcm-group-label"><span class="fa fa-question-circle"></span>SUPPORT<span class="fa fa-chevron-down bcm-chevron"></span></div>');var supportGroup=document.createElement('ul');supportGroup.className='x-navigation';supportGroup.style.cssText='list-style:none;padding:0;margin:0;';supportGroup.insertAdjacentHTML('beforeend','<li><a href="mailto:support@blackcrownmarkets.com"><span class="xn-text">Support Hub</span></a></li>');
newNav.appendChild(supportGroup);
nav.parentNode.replaceChild(newNav,nav);var welcomeLi=document.querySelector('.desktop-welcome-li');var nameStrong=welcomeLi?welcomeLi.querySelector('.profile-data-name strong'):null;var nameText=nameStrong?nameStrong.textContent.trim():'';var nameMaxChars=18;if(nameText.length>nameMaxChars){nameText=nameText.slice(0,nameMaxChars).trim()+'…';}
if(welcomeLi)welcomeLi.remove();var profileFooter=document.createElement('div');profileFooter.className='bcm-sidebar-footer';profileFooter.innerHTML='<div class="bcm-sidebar-profile"><span class="bcm-sidebar-profile-icon"></span><span class="bcm-sidebar-profile-name">'+nameText+'</span></div><div class="bcm-divider"></div>';var logoutLink=document.querySelector('.desktop-logout-li a.mb-control[data-box="#mb-signout"]');if(logoutLink){var logoutLi=logoutLink.closest('.desktop-logout-li');logoutLink.classList.add('bcm-sidebar-logout');profileFooter.appendChild(logoutLink);if(logoutLi)logoutLi.style.display='none';}
sidebar.appendChild(profileFooter);
buildDashboardHeader();}
function buildDashboardHeader(){var mainContent=document.querySelector('.page-content-wrap');if(!mainContent)return;var selectEl=document.querySelector('#selectAccounts');var refreshEl=document.querySelector('.refreshWidgets')||document.querySelector('#refreshButton .fa-refresh');var refreshBtn=document.querySelector('#refreshButton');var header=document.createElement('div');header.className='bcm-dash-header';var selectorRow=document.createElement('div');selectorRow.className='bcm-selector-row';if(selectEl){var clonedSelect=selectEl.cloneNode(true);clonedSelect.removeAttribute('id');var selectWrap=document.createElement('div');selectWrap.className='bcm-select-wrap';selectWrap.appendChild(clonedSelect);selectorRow.appendChild(selectWrap);selectEl.closest('form')?selectEl.closest('form').style.display='none':selectEl.parentNode.style.display='none';}
if(refreshBtn){var refreshClone=refreshBtn.cloneNode(true);selectorRow.appendChild(refreshClone);refreshBtn.style.display='none';}
header.appendChild(selectorRow);mainContent.insertBefore(header,mainContent.firstChild);}
var BCM_RAW_PAYMENT_SELECTOR=false;
var BCM_RAW_ADD_ACCOUNT=false;
function buildDepositPage(){if(BCM_RAW_PAYMENT_SELECTOR)return;var panel=document.querySelector('#instances .panel');if(!panel||panel.dataset.bcmPayments)return;var body=panel.querySelector('.panel-body');var table=body?body.querySelector('table'):null;var rows=table?table.querySelectorAll('tbody tr'):[];if(!rows.length)return;panel.dataset.bcmPayments='1';
var methods=[];rows.forEach(function(row){var radio=row.querySelector('input[type=radio]');if(!radio)return;var infoDiv=row.querySelector('label > div');var nameEl=infoDiv?infoDiv.querySelector('b'):null;methods.push({radio:radio,name:nameEl?nameEl.textContent.trim():''});});
methods.forEach(function(m){m.radio.checked=false;});var fieldsPanel=document.querySelector('#client-fields');var instancesEl=document.querySelector('#instances');
var icons={other:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>'};
var groups=[{label:'EFT, Card & Other',match:/eft/i,icon:icons.other,color:'#7B2FBE',proc:'Instant',fee:'0%',limits:'—'},{label:'Bitcoin (BTC)',match:/letknow/i,img:'https://pp.ekspp.com/cdn/pm-icons/bitcoin/48/True.svg',color:'#fff',proc:'Instant',fee:'0%',limits:'20 – 9,000,000 USD/EUR'},{label:'USDT (ERC20)',match:/erc20/i,img:'https://pp.ekspp.com/cdn/pm-icons/usdt-erc20/48/True.svg',color:'#fff',proc:'Instant',fee:'0%',limits:'20 – 9,000,000 USD/EUR'},{label:'USDT (TRC20)',match:/trc20/i,img:'https://pp.ekspp.com/cdn/pm-icons/usdt-trc20/48/True.svg',color:'#fff',proc:'Instant',fee:'0%',limits:'20 – 9,000,000 USD/EUR'},{label:'Ethereum (ETH)',match:/ethereum/i,img:'https://pp.ekspp.com/cdn/pm-icons/ethereum/48/True.svg',color:'#fff',proc:'Instant',fee:'0%',limits:'20 – 9,000,000 USD/EUR'},{label:'USD Coin (USDC)',match:/usd coin/i,img:'https://pp.ekspp.com/cdn/pm-icons/usdc-erc20/48/True.svg',color:'#fff',proc:'Instant',fee:'0%',limits:'20 – 9,000,000 USD/EUR'}];
var list=document.createElement('div');list.className='bcm-payment-list';var cards=[];
groups.forEach(function(group){var method=methods.filter(function(m){return group.match.test(m.name);})[0];if(!method)return;
var option=document.createElement('div');option.className='bcm-payment-option';
var iconContent=group.img?'<img src="'+group.img+'" alt="'+group.label+'" loading="lazy">':(group.icon||group.symbol);
option.innerHTML='<div class="bcm-payment-head"><span class="bcm-payment-icon" style="background:'+group.color+'">'+iconContent+'</span><span class="bcm-payment-name">'+group.label+'</span></div><div class="bcm-payment-meta"><div class="bcm-payment-meta-row"><span class="bcm-payment-meta-label">Processing time</span><span class="bcm-payment-meta-value bcm-payment-pill">'+group.proc+'</span></div><div class="bcm-payment-meta-row"><span class="bcm-payment-meta-label">Fee</span><span class="bcm-payment-meta-value">'+group.fee+'</span></div><div class="bcm-payment-meta-row"><span class="bcm-payment-meta-label">Limits</span><span class="bcm-payment-meta-value">'+group.limits+'</span></div></div><span class="bcm-payment-radio"></span>';
option.addEventListener('click',function(){if(!method.radio.checked)method.radio.click();});
method.radio.addEventListener('change',function(){if(method.radio.checked){cards.forEach(function(c){c.el.classList.toggle('active',c.radio===method.radio);});if(fieldsPanel)fieldsPanel.classList.add('bcm-fields-visible');if(instancesEl)instancesEl.classList.add('bcm-instances-hidden');}});
cards.push({el:option,radio:method.radio});list.appendChild(option);});
table.style.display='none';body.appendChild(list);
if(fieldsPanel&&!fieldsPanel.querySelector('.bcm-payment-back')){var backBtn=document.createElement('button');backBtn.type='button';backBtn.className='bcm-payment-back';backBtn.textContent='Select Another Payment Method';backBtn.addEventListener('click',function(){methods.forEach(function(m){m.radio.checked=false;});cards.forEach(function(c){c.el.classList.remove('active');});fieldsPanel.classList.remove('bcm-fields-visible');if(instancesEl)instancesEl.classList.remove('bcm-instances-hidden');});var headingEl=fieldsPanel.querySelector('.panel-heading');if(headingEl){headingEl.appendChild(backBtn);}else{fieldsPanel.insertBefore(backBtn,fieldsPanel.firstChild);}}}
function showDepositConfirmModal(){if(document.querySelector('.bcm-modal-overlay'))return;var overlay=document.createElement('div');overlay.className='bcm-modal-overlay';overlay.innerHTML='<div class="bcm-modal"><p class="bcm-modal-text">Please allow time for funds to leave your crypto wallet and reflect in your trading account.<span class="bcm-modal-line2">If it takes longer, please <a href="mailto:support@blackcrownmarkets.com" class="bcm-modal-link">contact support</a>.</span></p><a href="https://trade.blackcrownmarkets.com/" class="bcm-modal-btn">Back to Dashboard</a></div>';document.body.appendChild(overlay);}
function buildNoAccountModal(){var path=window.location.pathname.replace(/\/$/,'')||'/';if(path!=='/')return;var mainContent=document.querySelector('.page-content-wrap');if(!mainContent)return;var select=document.querySelector('#selectAccounts');if(select&&select.options.length>0)return;if(document.querySelector('.bcm-modal-overlay'))return;try{if(sessionStorage.getItem('bcmNoAccountModalShown'))return;sessionStorage.setItem('bcmNoAccountModalShown','1');}catch(e){}
var overlay=document.createElement('div');overlay.className='bcm-modal-overlay';overlay.innerHTML='<div class="bcm-modal"><button type="button" class="bcm-modal-close" aria-label="Close">&times;</button><p class="bcm-modal-text">You don\'t have a trading account yet.<span class="bcm-modal-line2">Open a live or demo account to start trading with Black Crown Markets.</span></p><a href="https://trade.blackcrownmarkets.com/accounts" class="bcm-modal-btn">Open an Account</a></div>';document.body.appendChild(overlay);
function close(){overlay.remove();}
overlay.querySelector('.bcm-modal-close').addEventListener('click',close);
overlay.addEventListener('click',function(e){if(e.target===overlay)close();});}
function buildDepositSummaryPage(){var container=document.querySelector('#depositpage');if(!container||container.dataset.bcmStyled)return;var html=container.innerHTML;if(!/deposit summary/i.test(html))return;
var qrImg=container.querySelector('img');var addressLink=container.querySelector('a[href^="bitcoin:"]')||container.querySelector('a[href^="ethereum:"]')||container.querySelector('a[href^="litecoin:"]')||container.querySelector('a[href^="tron:"]')||container.querySelector('a[href^="usdt:"]')||container.querySelector('a');
if(!qrImg||!addressLink)return;container.dataset.bcmStyled='1';
function pick(re){var m=html.match(re);return m?m[1].replace(/&nbsp;/g,' ').trim():'';}
var amount=pick(/Amount:\s*([^<]+?)<br/i);
var rate=pick(/Provisional Exchange Rate:\s*([^<]+?)<br/i);
var coinAmount=pick(/\bBTC:\s*([^<]+?)<br/i);
var fee=pick(/Deposit Network Fee:\s*([^<]+?)<br/i);
var sendAmount=pick(/Please send BTC:\s*([^<]+?)\s*to:/i);
var address=addressLink.textContent.trim();var addressHref=addressLink.getAttribute('href');
var notesEl=container.querySelector('p[style*="font-size"]');
var notes=[];
if(notesEl){var rawNoteLines=notesEl.innerHTML.split(/<br\s*\/?>/i).map(function(s){return s.replace(/<[^>]+>/g,'').replace(/&nbsp;/g,' ').trim();}).filter(Boolean);rawNoteLines.forEach(function(line){if(/^\d+\.\s*/.test(line)){notes.push(line.replace(/^\d+\.\s*/,''));}else if(notes.length){notes[notes.length-1]+=' '+line;}else{notes.push(line);}});}
if(notes.length){notes[0]='Please double-check that the address and network match exactly before sending — deposits sent to the wrong address or network cannot be recovered.';}
var ICONS={user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.35 8.95a1 1 0 0 1-1.3 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>',shieldCheck:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.35 8.95a1 1 0 0 1-1.3 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>',coin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M14.8 9A2 2 0 0 0 13 8h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1-1.8-1"/><path d="M12 6v2m0 8v2"/></svg>',copy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>'};
var rows=[{label:'Amount',value:amount,icon:ICONS.user},{label:'Provisional Exchange Rate',value:rate,icon:ICONS.shield},{label:'BTC',value:coinAmount,icon:ICONS.coin},{label:'Deposit Network Fee',value:fee,icon:ICONS.shieldCheck}];
var rowsHtml=rows.filter(function(r){return r.value;}).map(function(r){return '<div class="bcm-ds-row"><span class="bcm-ds-row-icon">'+r.icon+'</span><span class="bcm-ds-row-label">'+r.label+':</span><span class="bcm-ds-row-value">'+r.value+'</span></div>';}).join('');
var notesListHtml=notes.map(function(t){return '<li>'+t+'</li>';}).join('');
container.innerHTML='<div class="bcm-deposit-summary"><div class="bcm-ds-card"><div class="bcm-ds-main"><h2 class="bcm-ds-title">Deposit Summary</h2><span class="bcm-ds-title-bar"></span><div class="bcm-ds-rows">'+rowsHtml+'</div>'+(sendAmount?'<p class="bcm-ds-send">Please send BTC '+sendAmount+' to:</p>':'')+'<div class="bcm-ds-address-row"><span class="bcm-ds-address-label">Address:</span><a href="'+addressHref+'" target="_blank" rel="noopener" class="bcm-ds-address">'+address+'</a><button type="button" class="bcm-ds-copy" data-address="'+address+'" title="Copy address">'+ICONS.copy+'</button></div><p class="bcm-ds-scan">Or simply scan it using QR &ndash; barcode scanner:</p></div><div class="bcm-ds-qr-wrap"></div></div>'+(notes.length?'<div class="bcm-ds-notes"><span class="bcm-ds-notes-icon">'+ICONS.shield+'</span><ol class="bcm-ds-notes-list">'+notesListHtml+'</ol></div>':'')+'</div>';
var qrWrap=container.querySelector('.bcm-ds-qr-wrap');qrImg.classList.add('bcm-ds-qr');qrWrap.appendChild(qrImg);
var confirmBtn=document.createElement('button');confirmBtn.type='button';confirmBtn.className='bcm-ds-confirm-btn';confirmBtn.textContent='I have completed my Deposit';confirmBtn.addEventListener('click',function(){showDepositConfirmModal();});qrWrap.appendChild(confirmBtn);
var copyBtn=container.querySelector('.bcm-ds-copy');if(copyBtn){copyBtn.addEventListener('click',function(){var value=copyBtn.getAttribute('data-address');if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(value);}else{var ta=document.createElement('textarea');ta.value=value;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();try{document.execCommand('copy');}catch(e){}document.body.removeChild(ta);}copyBtn.classList.add('bcm-ds-copied');setTimeout(function(){copyBtn.classList.remove('bcm-ds-copied');},1500);});}}
function relocateDisclaimers(){var mainContent=document.querySelector('.page-content-wrap');if(!mainContent)return;var disclaimer=document.querySelector('.disclaimer-color');var footer=document.querySelector('.footer-color');if(disclaimer)mainContent.appendChild(disclaimer);if(footer)mainContent.appendChild(footer);}
function buildLoginPage(){var body=document.querySelector('.login-body');if(!body||body.dataset.bcmLogin)return;body.dataset.bcmLogin='1';document.documentElement.classList.add('bcm-login-page');var left=document.createElement('div');left.className='bcm-login-left';while(body.firstChild){left.appendChild(body.firstChild);}var titleEl=left.querySelector('.login-title');if(titleEl){var subtitle=document.createElement('div');subtitle.className='bcm-login-subtitle';subtitle.textContent='Access your Black Crown Markets account to manage your trading with ease.';titleEl.insertAdjacentElement('afterend',subtitle);}var right=document.createElement('div');right.className='bcm-login-right';right.innerHTML='<img class="bcm-login-logo" src="https://ffxlryusmstnfjedleds.supabase.co/storage/v1/object/public/Assets/blackcrown%20white.svg" alt="Black Crown Markets"/>';body.appendChild(left);body.appendChild(right);body.classList.add('bcm-login-card');document.body.appendChild(body);}
function buildRegistrationPage(){var body=document.querySelector('.registration-body');if(!body||body.dataset.bcmLogin)return;body.dataset.bcmLogin='1';document.documentElement.classList.add('bcm-login-page');var left=document.createElement('div');left.className='bcm-login-left';while(body.firstChild){left.appendChild(body.firstChild);}var stepNumbers=left.querySelectorAll('.steps_2 .stepNumber');stepNumbers.forEach(function(el,i){el.textContent=String(i+1);});
buildRegistrationAccountFields(left);
var right=document.createElement('div');right.className='bcm-login-right';right.innerHTML='<img class="bcm-login-logo" src="https://ffxlryusmstnfjedleds.supabase.co/storage/v1/object/public/Assets/blackcrown%20white.svg" alt="Black Crown Markets"/>';body.appendChild(left);body.appendChild(right);body.classList.add('bcm-login-card');document.body.appendChild(body);}

function buildRegistrationAccountFields(scope){
var form=scope.querySelector('form.register')||scope.querySelector('form');
var currencySelect=scope.querySelector('select[name=currency]');
var typeSelect=scope.querySelector('select[name=acc_type]');
var platformSelect=scope.querySelector('select[name=platform]');
if(!form||!currencySelect||!typeSelect)return;

if(platformSelect){var platformGroup=platformSelect.closest('.form-group');if(platformGroup)platformGroup.style.display='none';}

var ICON={
trend:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>',
star:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
bolt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
gift:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="8" width="20" height="4" rx="1"></rect><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"/></svg>'
};

var TYPE_DEFS_BY_CURRENCY={
ZAR:[
{value:'Standard Account (R170 Min. Deposit)',label:'Standard',icon:ICON.trend,desc:'Our everyday account. Commission-free pricing that works for almost every type of trader.',min:'R170',spread:'From 1.8 pips',commission:'No commission',leverage:'Up to 1:500',contract:'1 lot = 100,000 units',badge:'From 1.8 pips'},
{value:'Standard Cent (R170 Min. Deposit)',label:'Standard Cent',icon:ICON.trend,desc:'Built for getting started. Trade in cent lots so you can learn the platform with real money at a fraction of the risk.',min:'R170',spread:'From 1.8 pips',commission:'No commission',leverage:'Up to 1:500',contract:'1 lot = 1,000 units (cent lot)',badge:'From 1.8 pips'},
{value:'Pro Account (R1,700 Min. Deposit)',label:'Pro',icon:ICON.star,desc:'For the more serious trader. Pro spreads start at roughly half a Standard account’s minimum — with no commission.',min:'R1,700',spread:'From 0.9 pips',commission:'No commission',leverage:'Up to 1:500',contract:'1 lot = 100,000 units',badge:'From 0.9 pips'},
{value:'ECN Account (R1,700 Min. Deposit)',label:'Raw ECN',icon:ICON.bolt,desc:'Raw ECN pricing routed straight to our liquidity providers, with a transparent per-side commission.',min:'R1,700',spread:'From 0.0 pips',commission:'$3.50–$4.00 per lot, per side',leverage:'Up to 1:500',contract:'1 lot = 100,000 units',badge:'From 0.0 pips'},
{value:'150% Bonus Account (R170. Deposit)',label:'Bonus Account',icon:ICON.gift,desc:'Extra trading power on top of your deposit, with a bonus of up to 150% credited to your account.',min:'R170',spread:'From 1.8 pips',commission:'No commission',leverage:'Up to 1:500',contract:'1 lot = 100,000 units',bonus:'150% up to 150,000 ZAR',badge:'Up to 150% bonus'}
],
USD:[
{value:'Standard Account ($10 Min. Deposit)',label:'Standard',icon:ICON.trend,desc:'Our everyday account. Commission-free pricing that works for almost every type of trader.',min:'$10',spread:'From 1.8 pips',commission:'No commission',leverage:'Up to 1:500',contract:'1 lot = 100,000 units',badge:'From 1.8 pips'},
{value:'Standard Cent ($10 Min. Deposit)',label:'Standard Cent',icon:ICON.trend,desc:'Built for getting started. Trade in cent lots so you can learn the platform with real money at a fraction of the risk.',min:'$10',spread:'From 1.8 pips',commission:'No commission',leverage:'Up to 1:500',contract:'1 lot = 1,000 units (cent lot)',badge:'From 1.8 pips'},
{value:'Pro Account ($100 Min. Deposit)',label:'Pro',icon:ICON.star,desc:'For the more serious trader. Pro spreads start at roughly half a Standard account’s minimum — with no commission.',min:'$100',spread:'From 0.9 pips',commission:'No commission',leverage:'Up to 1:500',contract:'1 lot = 100,000 units',badge:'From 0.9 pips'},
{value:'ECN Account ($100. Deposit)',label:'Raw ECN',icon:ICON.bolt,desc:'Raw ECN pricing routed straight to our liquidity providers, with a transparent per-side commission.',min:'$100',spread:'From 0.0 pips',commission:'$3.50–$4.00 per lot, per side',leverage:'Up to 1:500',contract:'1 lot = 100,000 units',badge:'From 0.0 pips'},
{value:'150% Bonus Account ($10. Deposit)',label:'Bonus Account',icon:ICON.gift,desc:'Extra trading power on top of your deposit, with a bonus of up to 150% credited to your account.',min:'$10',spread:'From 1.8 pips',commission:'No commission',leverage:'Up to 1:500',contract:'1 lot = 100,000 units',bonus:'150% of your deposit',badge:'Up to 150% bonus'}
]
};
var CURRENCY_DEFS=[
{value:'ZAR',symbol:'R',name:'South African Rand'},
{value:'USD',symbol:'$',name:'US Dollar'}
];

function esc(s){return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');}
function fireChange(el){
el.dispatchEvent(new Event('input',{bubbles:true}));
el.dispatchEvent(new Event('change',{bubbles:true}));
if(window.jQuery){try{window.jQuery(el).trigger('change').trigger('change.select2');}catch(e){}}
}
function ensureHiddenField(name,value){
if(!value)return;
var existing=form.querySelector('[name="'+name+'"]');
if(existing){
if(existing.tagName==='SELECT'){
var hasOption=Array.prototype.some.call(existing.options,function(o){return o.value===value;});
if(hasOption){existing.value=value;return;}
existing.disabled=true;
}else{existing.value=value;return;}
}
var input=document.createElement('input');
input.type='hidden';
input.name=name;
input.value=value;
form.appendChild(input);
}

function currencyCardHtml(c,active){
return '<div class="bcm-payment-option'+(active?' active':'')+'" data-value="'+esc(c.value)+'" role="button" tabindex="0">'
+'<div class="bcm-payment-head"><span class="bcm-payment-icon" style="background:#7B2FBE">'+esc(c.symbol)+'</span><span class="bcm-payment-name">'+esc(c.value)+'</span></div>'
+'<p class="bcm-wiz-card-desc">'+esc(c.name)+'</p>'
+'<span class="bcm-payment-radio"></span>'
+'</div>';
}
function typeCardHtml(t,active){
var metaRows=''
+(t.min?'<div class="bcm-wiz-meta-row"><span>Minimum deposit</span><strong>'+esc(t.min)+'</strong></div>':'')
+(t.spread?'<div class="bcm-wiz-meta-row"><span>Spread</span><strong>'+esc(t.spread)+'</strong></div>':'')
+(t.commission?'<div class="bcm-wiz-meta-row"><span>Commission</span><strong>'+esc(t.commission)+'</strong></div>':'')
+(t.leverage?'<div class="bcm-wiz-meta-row"><span>Maximum leverage</span><strong>'+esc(t.leverage)+'</strong></div>':'')
+(t.contract?'<div class="bcm-wiz-meta-row"><span>Contract size</span><strong>'+esc(t.contract)+'</strong></div>':'')
+(t.bonus?'<div class="bcm-wiz-meta-row"><span>Bonus</span><strong>'+esc(t.bonus)+'</strong></div>':'');
return '<div class="bcm-wiz-type-card'+(active?' active':'')+'" data-value="'+esc(t.value)+'" role="button" tabindex="0">'
+'<div class="bcm-wiz-type-top"><span class="bcm-wiz-type-icon">'+t.icon+'</span><span class="bcm-wiz-type-radio"></span></div>'
+'<h4 class="bcm-wiz-type-label">'+esc(t.label)+'</h4>'
+'<p class="bcm-wiz-type-desc">'+esc(t.desc)+'</p>'
+'<div class="bcm-wiz-type-meta">'+metaRows+'</div>'
+(t.badge?'<span class="bcm-wiz-type-badge">'+esc(t.badge)+'</span>':'')
+'</div>';
}

var selectedCurrency=currencySelect.value||(CURRENCY_DEFS[0]?CURRENCY_DEFS[0].value:null);
var selectedType=typeSelect.value||null;

var currencyGroup=currencySelect.closest('.form-group');
currencySelect.style.display='none';
var currencyLabel=document.createElement('label');
currencyLabel.className='bcm-wiz-field-label';
currencyLabel.textContent='Currency';
var currencyWrap=document.createElement('div');
currencyWrap.className='bcm-payment-list bcm-wiz-small-cards';
currencyWrap.innerHTML=CURRENCY_DEFS.map(function(c){return currencyCardHtml(c,c.value===selectedCurrency);}).join('');
currencyGroup.appendChild(currencyLabel);
currencyGroup.appendChild(currencyWrap);

var typeGroup=typeSelect.closest('.form-group');
typeSelect.style.display='none';
var typeLabel=document.createElement('label');
typeLabel.className='bcm-wiz-field-label';
typeLabel.textContent='Account Type';
var typeGrid=document.createElement('div');
typeGrid.className='bcm-wiz-type-grid';
typeGroup.appendChild(typeLabel);
typeGroup.appendChild(typeGrid);

function bindTypeCards(){
typeGrid.querySelectorAll('.bcm-wiz-type-card').forEach(function(card){
function pick(){
selectedType=card.getAttribute('data-value');
typeGrid.querySelectorAll('.bcm-wiz-type-card').forEach(function(c){c.classList.toggle('active',c===card);});
if(Array.prototype.some.call(typeSelect.options,function(o){return o.value===selectedType;})){typeSelect.value=selectedType;fireChange(typeSelect);}
}
card.addEventListener('click',pick);
card.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();pick();}});
});
}
function renderTypeCards(){
var defs=TYPE_DEFS_BY_CURRENCY[selectedCurrency]||[];
if(!defs.some(function(d){return d.value===selectedType;}))selectedType=defs[0]?defs[0].value:null;
typeGrid.innerHTML=defs.map(function(t){return typeCardHtml(t,t.value===selectedType);}).join('');
bindTypeCards();
}
renderTypeCards();

currencyWrap.querySelectorAll('.bcm-payment-option').forEach(function(card){
function pick(){
selectedCurrency=card.getAttribute('data-value');
currencyWrap.querySelectorAll('.bcm-payment-option').forEach(function(c){c.classList.toggle('active',c===card);});
if(Array.prototype.some.call(currencySelect.options,function(o){return o.value===selectedCurrency;})){currencySelect.value=selectedCurrency;fireChange(currencySelect);}
renderTypeCards();
}
card.addEventListener('click',pick);
card.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();pick();}});
});

form.addEventListener('submit',function(){
ensureHiddenField('currency',selectedCurrency);
ensureHiddenField('acc_type',selectedType);
});
}
function buildAddAccountPage(){
if(BCM_RAW_ADD_ACCOUNT)return;
var form=document.querySelector('#myForm');
if(!form||form.dataset.bcmWizard)return;
var platformSelect=document.querySelector('#add_platform');
var accountSelect=document.querySelector('#add_account_type');
var passwordGroup=document.querySelector('#password_input_main_container');
var confirmGroup=document.querySelector('#password_confirm_input_main_container');
var passwordInput=document.querySelector('#password-input');
var confirmInput=document.querySelector('#password-confirm-input');
var submitBtn=document.querySelector('#buttonSubmit');
var panelDefault=form.querySelector('.panel.panel-default');
if(!platformSelect||!accountSelect||!passwordGroup||!confirmGroup||!passwordInput||!confirmInput||!submitBtn||!panelDefault)return;
form.dataset.bcmWizard='1';

var titleEl=panelDefault.querySelector('.panel-title');
var wizTitle=titleEl?titleEl.textContent.trim():'Add a New Account';
var subtitleEl=panelDefault.querySelector('.panel-body p');
var wizSubtitle=subtitleEl?subtitleEl.textContent.trim():'All fields below are mandatory';

var ICON={
trend:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>',
star:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
bolt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
gift:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="8" width="20" height="4" rx="1"></rect><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"/></svg>',
flask:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6"/><path d="M10 3v6.5L4.5 19a1.5 1.5 0 0 0 1.3 2.3h12.4a1.5 1.5 0 0 0 1.3-2.3L14 9.5V3"/><path d="M7 15h10"/></svg>'
};

var TYPE_DEFS_BY_CURRENCY={
ZAR:[
{value:'Standard Account (R170 Min. Deposit)',label:'Standard',icon:ICON.trend,desc:'Our everyday account. Commission-free pricing that works for almost every type of trader.',min:'R170',spread:'From 1.8 pips',commission:'No commission',leverage:'Up to 1:500',contract:'1 lot = 100,000 units',badge:'From 1.8 pips'},
{value:'Standard Cent (R170 Min. Deposit)',label:'Standard Cent',icon:ICON.trend,desc:'Built for getting started. Trade in cent lots so you can learn the platform with real money at a fraction of the risk.',min:'R170',spread:'From 1.8 pips',commission:'No commission',leverage:'Up to 1:500',contract:'1 lot = 1,000 units (cent lot)',badge:'From 1.8 pips'},
{value:'Pro Account (R1,700 Min. Deposit)',label:'Pro',icon:ICON.star,desc:'For the more serious trader. Pro spreads start at roughly half a Standard account’s minimum — with no commission.',min:'R1,700',spread:'From 0.9 pips',commission:'No commission',leverage:'Up to 1:500',contract:'1 lot = 100,000 units',badge:'From 0.9 pips'},
{value:'ECN Account (R1,700 Min. Deposit)',label:'Raw ECN',icon:ICON.bolt,desc:'Raw ECN pricing routed straight to our liquidity providers, with a transparent per-side commission.',min:'R1,700',spread:'From 0.0 pips',commission:'$3.50–$4.00 per lot, per side',leverage:'Up to 1:500',contract:'1 lot = 100,000 units',badge:'From 0.0 pips'},
{value:'150% Bonus Account (R170. Deposit)',label:'Bonus Account',icon:ICON.gift,desc:'Extra trading power on top of your deposit, with a bonus of up to 150% credited to your account.',min:'R170',spread:'From 1.8 pips',commission:'No commission',leverage:'Up to 1:500',contract:'1 lot = 100,000 units',bonus:'150% up to 150,000 ZAR',badge:'Up to 150% bonus'}
],
USD:[
{value:'Standard Account ($10 Min. Deposit)',label:'Standard',icon:ICON.trend,desc:'Our everyday account. Commission-free pricing that works for almost every type of trader.',min:'$10',spread:'From 1.8 pips',commission:'No commission',leverage:'Up to 1:500',contract:'1 lot = 100,000 units',badge:'From 1.8 pips'},
{value:'Standard Cent ($10 Min. Deposit)',label:'Standard Cent',icon:ICON.trend,desc:'Built for getting started. Trade in cent lots so you can learn the platform with real money at a fraction of the risk.',min:'$10',spread:'From 1.8 pips',commission:'No commission',leverage:'Up to 1:500',contract:'1 lot = 1,000 units (cent lot)',badge:'From 1.8 pips'},
{value:'Pro Account ($100 Min. Deposit)',label:'Pro',icon:ICON.star,desc:'For the more serious trader. Pro spreads start at roughly half a Standard account’s minimum — with no commission.',min:'$100',spread:'From 0.9 pips',commission:'No commission',leverage:'Up to 1:500',contract:'1 lot = 100,000 units',badge:'From 0.9 pips'},
{value:'ECN Account ($100. Deposit)',label:'Raw ECN',icon:ICON.bolt,desc:'Raw ECN pricing routed straight to our liquidity providers, with a transparent per-side commission.',min:'$100',spread:'From 0.0 pips',commission:'$3.50–$4.00 per lot, per side',leverage:'Up to 1:500',contract:'1 lot = 100,000 units',badge:'From 0.0 pips'},
{value:'150% Bonus Account ($10. Deposit)',label:'Bonus Account',icon:ICON.gift,desc:'Extra trading power on top of your deposit, with a bonus of up to 150% credited to your account.',min:'$10',spread:'From 1.8 pips',commission:'No commission',leverage:'Up to 1:500',contract:'1 lot = 100,000 units',bonus:'150% of your deposit',badge:'Up to 150% bonus'}
]
};
var ACCOUNT_DEFS=[
{match:/^live$/i,icon:ICON.trend,desc:'Trade with real funds in live market conditions.'},
{match:/^demo$/i,icon:ICON.flask,desc:'Practice risk-free with virtual funds.'}
];
function findAccountDef(text){for(var i=0;i<ACCOUNT_DEFS.length;i++){if(ACCOUNT_DEFS[i].match.test(text))return ACCOUNT_DEFS[i];}return null;}
var CURRENCY_DEFS=[
{value:'ZAR',symbol:'R',name:'South African Rand'},
{value:'USD',symbol:'$',name:'US Dollar'}
];

function esc(s){return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');}
function fireChange(el){
el.dispatchEvent(new Event('input',{bubbles:true}));
el.dispatchEvent(new Event('change',{bubbles:true}));
if(window.jQuery){try{window.jQuery(el).trigger('change').trigger('change.select2');}catch(e){}}
}
function ensureHiddenField(name,value){
if(value===null||value===undefined||value==='')return;
var existing=form.querySelector('[name="'+name+'"]');
if(existing){
if(existing.tagName==='SELECT'){
var hasOption=Array.prototype.some.call(existing.options,function(o){return o.value===value;});
if(hasOption){existing.value=value;return;}
existing.disabled=true;
}else{
existing.value=value;
return;
}
}
var input=document.createElement('input');
input.type='hidden';
input.name=name;
input.value=value;
form.appendChild(input);
}

var accountOptions=Array.prototype.filter.call(accountSelect.options,function(o){return o.value;});
if(!accountOptions.length)return;

function accountCardHtml(o){
var def=findAccountDef(o.textContent.trim())||{};
return '<div class="bcm-payment-option" data-value="'+esc(o.value)+'" role="button" tabindex="0">'
+'<div class="bcm-payment-head"><span class="bcm-payment-icon" style="background:#7B2FBE">'+(def.icon||ICON.trend)+'</span><span class="bcm-payment-name">'+esc(o.textContent.trim())+'</span></div>'
+(def.desc?'<p class="bcm-wiz-card-desc">'+esc(def.desc)+'</p>':'')
+'<span class="bcm-payment-radio"></span>'
+'</div>';
}

function currencyCardHtml(c){
return '<div class="bcm-payment-option" data-value="'+esc(c.value)+'" role="button" tabindex="0">'
+'<div class="bcm-payment-head"><span class="bcm-payment-icon" style="background:#7B2FBE">'+esc(c.symbol)+'</span><span class="bcm-payment-name">'+esc(c.value)+'</span></div>'
+'<p class="bcm-wiz-card-desc">'+esc(c.name)+'</p>'
+'<span class="bcm-payment-radio"></span>'
+'</div>';
}

function typeCardHtml(t){
var metaRows=''
+(t.min?'<div class="bcm-wiz-meta-row"><span>Minimum deposit</span><strong>'+esc(t.min)+'</strong></div>':'')
+(t.spread?'<div class="bcm-wiz-meta-row"><span>Spread</span><strong>'+esc(t.spread)+'</strong></div>':'')
+(t.commission?'<div class="bcm-wiz-meta-row"><span>Commission</span><strong>'+esc(t.commission)+'</strong></div>':'')
+(t.leverage?'<div class="bcm-wiz-meta-row"><span>Maximum leverage</span><strong>'+esc(t.leverage)+'</strong></div>':'')
+(t.contract?'<div class="bcm-wiz-meta-row"><span>Contract size</span><strong>'+esc(t.contract)+'</strong></div>':'')
+(t.bonus?'<div class="bcm-wiz-meta-row"><span>Bonus</span><strong>'+esc(t.bonus)+'</strong></div>':'');
return '<div class="bcm-wiz-type-card" data-value="'+esc(t.value)+'" role="button" tabindex="0">'
+'<div class="bcm-wiz-type-top"><span class="bcm-wiz-type-icon">'+t.icon+'</span><span class="bcm-wiz-type-radio"></span></div>'
+'<h4 class="bcm-wiz-type-label">'+esc(t.label)+'</h4>'
+'<p class="bcm-wiz-type-desc">'+esc(t.desc)+'</p>'
+'<div class="bcm-wiz-type-meta">'+metaRows+'</div>'
+(t.badge?'<span class="bcm-wiz-type-badge">'+esc(t.badge)+'</span>':'')
+'</div>';
}

var accountCardsHtml=accountOptions.map(accountCardHtml).join('');
var currencyCardsHtml=CURRENCY_DEFS.map(currencyCardHtml).join('');

var TOTAL_STEPS=5;

var wizardHtml=''
+'<div class="bcm-wizard">'
+'<div class="bcm-wizard-main">'
+'<h1 class="bcm-wizard-title">'+esc(wizTitle)+'</h1>'
+'<p class="bcm-wizard-subtitle">'+esc(wizSubtitle)+'</p>'
+'<p class="bcm-wizard-step-text" id="bcmStepText">Step 1 of '+TOTAL_STEPS+'</p>'
+'<div class="bcm-wizard-panel">'
+'<div class="bcm-wizard-pane active" data-pane="1">'
+'<h3 class="bcm-wiz-pane-title">Select Account</h3>'
+'<p class="bcm-wiz-pane-subtitle">Choose whether this is a live or demo trading account.</p>'
+'<div class="bcm-payment-list bcm-wiz-small-cards" id="bcmAccountToggle">'+accountCardsHtml+'</div>'
+'<p class="bcm-wiz-error" id="bcmStep1Error">Please choose an account to continue.</p>'
+'</div>'
+'<div class="bcm-wizard-pane" data-pane="2">'
+'<h3 class="bcm-wiz-pane-title">Select Currency</h3>'
+'<p class="bcm-wiz-pane-subtitle">Choose the base currency for this trading account.</p>'
+'<div class="bcm-payment-list bcm-wiz-small-cards" id="bcmCurrencyToggle">'+currencyCardsHtml+'</div>'
+'<p class="bcm-wiz-error" id="bcmStep2Error">Please choose a currency to continue.</p>'
+'</div>'
+'<div class="bcm-wizard-pane" data-pane="3">'
+'<h3 class="bcm-wiz-pane-title">Select Account Type</h3>'
+'<p class="bcm-wiz-pane-subtitle">Choose the type of trading account you want to create.</p>'
+'<div class="bcm-wiz-type-grid" id="bcmTypeGrid"></div>'
+'<p class="bcm-wiz-error" id="bcmStep3Error">Please select an account type to continue.</p>'
+'</div>'
+'<div class="bcm-wizard-pane" data-pane="4">'
+'<h3 class="bcm-wiz-pane-title">Account Details</h3>'
+'<p class="bcm-wiz-pane-subtitle">Set the login password for this trading account.</p>'
+'<div class="bcm-wiz-field" id="bcmPasswordFieldWrap"></div>'
+'<div class="bcm-wiz-field" id="bcmConfirmFieldWrap"></div>'
+'<p class="bcm-wiz-error" id="bcmStep4Error">Enter a password and confirm it to continue.</p>'
+'</div>'
+'<div class="bcm-wizard-pane" data-pane="5">'
+'<h3 class="bcm-wiz-pane-title">Review &amp; Create</h3>'
+'<p class="bcm-wiz-pane-subtitle">Check your selections before creating the account.</p>'
+'<div class="bcm-wiz-review" id="bcmWizardReview"></div>'
+'</div>'
+'</div>'
+'<div class="bcm-wizard-actions">'
+'<button type="button" class="bcm-wiz-btn-secondary" id="bcmWizBack">Cancel</button>'
+'<button type="button" class="bcm-wiz-btn-primary" id="bcmWizNext">Next: Currency</button>'
+'</div>'
+'</div>'
+'</div>';

panelDefault.style.display='none';
panelDefault.insertAdjacentHTML('beforebegin',wizardHtml);
var wizard=form.querySelector('.bcm-wizard');

var pwWrap=wizard.querySelector('#bcmPasswordFieldWrap');
var pwOldLabel=passwordGroup.querySelector('label');
if(pwOldLabel)pwOldLabel.remove();
var pwLabel=document.createElement('label');
pwLabel.textContent='Password';
pwWrap.appendChild(pwLabel);
passwordGroup.classList.add('bcm-wiz-password-group');
pwWrap.appendChild(passwordGroup);

var PW_RULES=[
{key:'length',label:'At least 8 characters',test:function(pw){return pw.length>=8;}},
{key:'upper',label:'An uppercase letter',test:function(pw){return /[A-Z]/.test(pw);}},
{key:'lower',label:'A lowercase letter',test:function(pw){return /[a-z]/.test(pw);}},
{key:'digit',label:'A number',test:function(pw){return /[0-9]/.test(pw);}},
{key:'symbol',label:'A symbol',test:function(pw){return /[^A-Za-z0-9]/.test(pw);}}
];
var pwRulesList=document.createElement('ul');
pwRulesList.className='bcm-pw-rules';
pwRulesList.innerHTML=PW_RULES.map(function(r){return '<li data-rule="'+r.key+'"><span class="bcm-pw-rule-icon"></span>'+esc(r.label)+'</li>';}).join('');
pwWrap.appendChild(pwRulesList);
function checkPwStrength(pw){return PW_RULES.every(function(r){return r.test(pw);});}
function updatePwRules(){
var pw=passwordInput.value;
PW_RULES.forEach(function(r){
var li=pwRulesList.querySelector('[data-rule="'+r.key+'"]');
if(li)li.classList.toggle('bcm-pw-rule-met',r.test(pw));
});
}
updatePwRules();
passwordInput.addEventListener('input',updatePwRules);

var confirmWrap=wizard.querySelector('#bcmConfirmFieldWrap');
var confirmOldLabel=confirmGroup.querySelector('label');
if(confirmOldLabel)confirmOldLabel.remove();
var confirmLabel=document.createElement('label');
confirmLabel.textContent='Confirm Password';
confirmWrap.appendChild(confirmLabel);
confirmGroup.classList.add('bcm-wiz-password-group');
confirmWrap.appendChild(confirmGroup);

function bindPasswordToggle(input,showIcon,hideIcon,toggleZone){
if(!toggleZone||toggleZone.dataset.bcmBound)return;
toggleZone.dataset.bcmBound='1';
toggleZone.addEventListener('click',function(){
var isPassword=input.type==='password';
input.type=isPassword?'text':'password';
if(showIcon)showIcon.style.display=isPassword?'none':'';
if(hideIcon)hideIcon.style.display=isPassword?'':'none';
});
}
bindPasswordToggle(passwordInput,document.querySelector('#icon-show'),document.querySelector('#icon-hide'),document.querySelector('#password-field'));
bindPasswordToggle(confirmInput,document.querySelector('#icon-confirm-show'),document.querySelector('#icon-confirm-hide'),document.querySelector('#password-confirm-field'));

var currentStep=1;
var selectedAccount=null;
var selectedCurrency=null;
var selectedType=null;

var accountToggle=wizard.querySelector('#bcmAccountToggle');
var currencyToggle=wizard.querySelector('#bcmCurrencyToggle');
var typeGrid=wizard.querySelector('#bcmTypeGrid');

function setActiveButton(container,value){
container.querySelectorAll('.bcm-payment-option').forEach(function(b){b.classList.toggle('active',b.getAttribute('data-value')===value);});
}
function setActiveCard(value){
typeGrid.querySelectorAll('.bcm-wiz-type-card').forEach(function(c){c.classList.toggle('active',c.getAttribute('data-value')===value);});
}
function clearError(id){
var err=wizard.querySelector('#'+id);
if(err)err.classList.remove('bcm-wiz-error-visible');
}

accountToggle.querySelectorAll('.bcm-payment-option').forEach(function(card){
function pick(){
selectedAccount=card.getAttribute('data-value');
accountSelect.value=selectedAccount;
fireChange(accountSelect);
setActiveButton(accountToggle,selectedAccount);
clearError('bcmStep1Error');
}
card.addEventListener('click',pick);
card.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();pick();}});
});

function renderTypeCards(){
var defs=TYPE_DEFS_BY_CURRENCY[selectedCurrency]||[];
if(!defs.some(function(d){return d.value===selectedType;}))selectedType=null;
typeGrid.innerHTML=defs.map(typeCardHtml).join('');
setActiveCard(selectedType);
typeGrid.querySelectorAll('.bcm-wiz-type-card').forEach(function(card){
function pick(){
selectedType=card.getAttribute('data-value');
setActiveCard(selectedType);
clearError('bcmStep3Error');
}
card.addEventListener('click',pick);
card.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();pick();}});
});
}

currencyToggle.querySelectorAll('.bcm-payment-option').forEach(function(card){
function pick(){
selectedCurrency=card.getAttribute('data-value');
setActiveButton(currencyToggle,selectedCurrency);
clearError('bcmStep2Error');
renderTypeCards();
}
card.addEventListener('click',pick);
card.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();pick();}});
});

function goToStep(step){
currentStep=step;
wizard.querySelectorAll('.bcm-wizard-pane').forEach(function(p){p.classList.toggle('active',Number(p.getAttribute('data-pane'))===step);});
var stepText=wizard.querySelector('#bcmStepText');
if(stepText)stepText.textContent='Step '+step+' of '+TOTAL_STEPS;
var backBtn=wizard.querySelector('#bcmWizBack');
var nextBtn=wizard.querySelector('#bcmWizNext');
backBtn.textContent=step===1?'Cancel':'Back';
if(step===1)nextBtn.textContent='Next: Currency';
if(step===2)nextBtn.textContent='Next: Account Type';
if(step===3)nextBtn.textContent='Next: Account Details';
if(step===4)nextBtn.textContent='Next: Review & Create';
if(step===5){
nextBtn.textContent='Create Account';
var typeDef=(TYPE_DEFS_BY_CURRENCY[selectedCurrency]||[]).filter(function(t){return t.value===selectedType;})[0];
var accountBtn=accountToggle.querySelector('.active .bcm-payment-name');
var review=''
+'<div class="bcm-wiz-review-row"><span>Account</span><strong>'+(accountBtn?esc(accountBtn.textContent.trim()):'')+'</strong></div>'
+'<div class="bcm-wiz-review-row"><span>Currency</span><strong>'+esc(selectedCurrency||'')+'</strong></div>'
+(typeDef?'<div class="bcm-wiz-review-row"><span>Account type</span><strong>'+esc(typeDef.label)+'</strong></div>':'');
wizard.querySelector('#bcmWizardReview').innerHTML=review;
}
window.scrollTo({top:wizard.offsetTop-24,behavior:'smooth'});
}

wizard.querySelector('#bcmWizBack').addEventListener('click',function(){
if(currentStep===1){window.location.href='https://trade.blackcrownmarkets.com/';return;}
goToStep(currentStep-1);
});
wizard.querySelector('#bcmWizNext').addEventListener('click',function(){
if(currentStep===1){
if(!selectedAccount){wizard.querySelector('#bcmStep1Error').classList.add('bcm-wiz-error-visible');return;}
goToStep(2);
return;
}
if(currentStep===2){
if(!selectedCurrency){wizard.querySelector('#bcmStep2Error').classList.add('bcm-wiz-error-visible');return;}
goToStep(3);
return;
}
if(currentStep===3){
if(!selectedType){wizard.querySelector('#bcmStep3Error').classList.add('bcm-wiz-error-visible');return;}
goToStep(4);
return;
}
if(currentStep===4){
var step4Error=wizard.querySelector('#bcmStep4Error');
if(!checkPwStrength(passwordInput.value)){
step4Error.textContent='Password must meet all the requirements listed above.';
step4Error.classList.add('bcm-wiz-error-visible');
return;
}
if(!confirmInput.value||passwordInput.value!==confirmInput.value){
step4Error.textContent='Enter a password and confirm it — passwords must match.';
step4Error.classList.add('bcm-wiz-error-visible');
return;
}
step4Error.classList.remove('bcm-wiz-error-visible');
goToStep(5);
return;
}
ensureHiddenField('acc_type',selectedType);
ensureHiddenField('currency',selectedCurrency);
submitBtn.click();
});
}
function buildWithdrawPage(){
var page=document.querySelector('#withdrawalpage');
var form=document.querySelector('#withdrawForm');
if(!page||!form||form.dataset.bcmWithdraw)return;
var accountSelect=form.querySelector('select[name=account_id]');
var methodSelect=form.querySelector('#method');
var panelDefault=form.querySelector('.panel.panel-default');
var submitBtn=form.querySelector('#withdrawButton');
var amountInput=form.querySelector('#withdrawAmount');
var amountGroup=amountInput?amountInput.closest('.form-group'):null;
var fieldsToHide=form.querySelector('#fields_to_hide');
var noMoneyAlert=form.querySelector('#noMoney');
var errAlert=form.querySelector('#errMessage');
if(!accountSelect||!methodSelect||!panelDefault||!submitBtn||!amountInput||!amountGroup||!fieldsToHide)return;
form.dataset.bcmWithdraw='1';
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');}
function fireChange(el){el.dispatchEvent(new Event('input',{bubbles:true}));el.dispatchEvent(new Event('change',{bubbles:true}));if(window.jQuery){try{window.jQuery(el).trigger('change').trigger('change.select2');}catch(e){}}}
var accounts=[];
try{accounts=JSON.parse(page.getAttribute('data-accounts')||'[]');}catch(e){}
function findAccount(acc){for(var i=0;i<accounts.length;i++){if(String(accounts[i].acc)===String(acc))return accounts[i];}return null;}
var CURRENCY_SYMBOLS={ZAR:'R',USD:'$',EUR:'€',GBP:'£'};
var accountOptions=Array.prototype.filter.call(accountSelect.options,function(o){return o.value;});
if(!accountOptions.length)return;
var accountGroup=accountSelect.closest('.form-group');
accountSelect.style.display='none';
var allZeroBalance=accountOptions.every(function(o){var d=findAccount(o.value);return !d||parseFloat(d.balance)<=0;});
var accountList=document.createElement('div');
accountList.className='bcm-payment-list bcm-wiz-small-cards';
accountList.innerHTML=accountOptions.map(function(o){
var d=findAccount(o.value);
var balance=d?parseFloat(d.balance):0;
var currency=d?d.currency:'';
var symbol=CURRENCY_SYMBOLS[currency]||'';
var noBalance=!(balance>0);
return '<div class="bcm-payment-option'+(noBalance?' bcm-payment-disabled':'')+'" data-value="'+esc(o.value)+'"'+(noBalance?'':' role="button" tabindex="0"')+'>'
+'<div class="bcm-payment-head"><span class="bcm-payment-icon" style="background:#7B2FBE">'+esc(symbol||'#')+'</span><span class="bcm-payment-name">'+esc(o.value)+'</span></div>'
+'<div class="bcm-payment-meta">'
+'<div class="bcm-payment-meta-row"><span class="bcm-payment-meta-label">Balance</span><span class="bcm-payment-meta-value">'+esc(symbol+balance.toFixed(2))+' '+esc(currency)+'</span></div>'
+(d&&(d.account_type_requested||d.account_type)?'<div class="bcm-payment-meta-row"><span class="bcm-payment-meta-label">Account type</span><span class="bcm-payment-meta-value">'+esc(d.account_type_requested||d.account_type)+'</span></div>':'')
+'</div>'
+(noBalance?'<span class="bcm-wiz-type-badge bcm-badge-warning">No balance available</span>':'')
+'<span class="bcm-payment-radio"></span>'
+'</div>';
}).join('');
accountGroup.appendChild(accountList);
if(allZeroBalance){
var warn=document.createElement('p');
warn.className='bcm-wiz-error bcm-wiz-error-visible';
warn.style.cssText='margin:16px 0 0 0';
warn.textContent="You don't currently have a balance on any trading account, so there's nothing available to withdraw.";
accountGroup.appendChild(warn);
}
var selectedAccount=null;
var currencyLabel=form.querySelector('#currency');
if(typeof MutationObserver!=='undefined'){
var amountEnableObserver=new MutationObserver(function(){if(selectedAccount&&amountInput.disabled)amountInput.disabled=false;});
amountEnableObserver.observe(amountInput,{attributes:true,attributeFilter:['disabled']});
}
accountList.querySelectorAll('.bcm-payment-option').forEach(function(card){
if(card.classList.contains('bcm-payment-disabled'))return;
function pick(){
selectedAccount=card.getAttribute('data-value');
accountSelect.value=selectedAccount;
fireChange(accountSelect);
accountList.querySelectorAll('.bcm-payment-option').forEach(function(c){c.classList.toggle('active',c===card);});
amountInput.disabled=false;
var d=findAccount(selectedAccount);
if(currencyLabel&&d)currencyLabel.textContent=CURRENCY_SYMBOLS[d.currency]||d.currency;
var step1Error=wizard.querySelector('#bcmWDStep1Error');
if(step1Error)step1Error.classList.remove('bcm-wiz-error-visible');
}
card.addEventListener('click',pick);
card.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();pick();}});
});
var methodGroup=methodSelect.closest('.form-group');
methodSelect.style.display='none';
var methodCard=document.createElement('div');
methodCard.className='bcm-payment-list bcm-wiz-small-cards';
methodCard.innerHTML='<div class="bcm-payment-option active" aria-disabled="true">'
+'<div class="bcm-payment-head"><span class="bcm-payment-icon" style="background:#7B2FBE"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V9l7-5 7 5v12"/><path d="M9 21V9"/><path d="M15 21V9"/></svg></span><span class="bcm-payment-name">Wire Transfer</span></div>'
+'<span class="bcm-payment-radio"></span>'
+'</div>';
methodGroup.appendChild(methodCard);
var creditCardOption=Array.prototype.filter.call(methodSelect.options,function(o){return o.value==='CreditCard';})[0];
if(creditCardOption)creditCardOption.disabled=true;
methodSelect.value='WireTransfer';
fireChange(methodSelect);
var creditCardFields=form.querySelector('#CreditCard');
var wireFields=form.querySelector('#WireTransfer');
if(creditCardFields)creditCardFields.style.display='none';
if(wireFields)wireFields.style.display='block';
var infoTitles=page.querySelectorAll('.panel-title');
infoTitles.forEach(function(titleEl){if(titleEl.textContent.trim()==='Important Information'){var infoPanel=titleEl.closest('.panel');var infoCol=infoPanel?infoPanel.closest('.col-md-6'):null;if(infoPanel)infoPanel.remove();if(infoCol&&!infoCol.children.length)infoCol.remove();}});
var wizTitleEl=panelDefault.querySelector('.panel-title');
var wizTitle=wizTitleEl?wizTitleEl.textContent.trim():'Withdraw Request Form';
var TOTAL_STEPS=2;
var wizardHtml=''
+'<div class="bcm-wizard">'
+'<div class="bcm-wizard-main">'
+'<h1 class="bcm-wizard-title">'+esc(wizTitle)+'</h1>'
+'<p class="bcm-wizard-subtitle">All fields below are mandatory</p>'
+'<p class="bcm-wizard-step-text" id="bcmWDStepText">Step 1 of '+TOTAL_STEPS+'</p>'
+'<div class="bcm-wizard-panel">'
+'<div class="bcm-wizard-pane active" data-pane="1">'
+'<h3 class="bcm-wiz-pane-title">Select Account</h3>'
+'<p class="bcm-wiz-pane-subtitle">Choose the trading account you want to withdraw from.</p>'
+'<div id="bcmWDAccountSlot"></div>'
+'<p class="bcm-wiz-error" id="bcmWDStep1Error">Please choose an account to continue.</p>'
+'</div>'
+'<div class="bcm-wizard-pane" data-pane="2">'
+'<h3 class="bcm-wiz-pane-title">Type of Withdrawal</h3>'
+'<p class="bcm-wiz-pane-subtitle">Choose your withdrawal method and enter an amount.</p>'
+'<div id="bcmWDAlertSlot"></div>'
+'<div id="bcmWDFieldsSlot"></div>'
+'<p class="bcm-wiz-error" id="bcmWDStep2Error">Please enter a valid amount to continue.</p>'
+'</div>'
+'</div>'
+'<div class="bcm-wizard-actions">'
+'<button type="button" class="bcm-wiz-btn-secondary" id="bcmWDBack">Cancel</button>'
+'<button type="button" class="bcm-wiz-btn-primary" id="bcmWDNext">Next: Type of Withdrawal</button>'
+'</div>'
+'</div>'
+'</div>';
panelDefault.style.display='none';
panelDefault.insertAdjacentHTML('beforebegin',wizardHtml);
var wizard=form.querySelector('.bcm-wizard');
wizard.querySelector('#bcmWDAccountSlot').appendChild(accountGroup);
var alertSlot=wizard.querySelector('#bcmWDAlertSlot');
if(noMoneyAlert)alertSlot.appendChild(noMoneyAlert);
if(errAlert)alertSlot.appendChild(errAlert);
var fieldsSlot=wizard.querySelector('#bcmWDFieldsSlot');
fieldsSlot.appendChild(fieldsToHide);
fieldsSlot.appendChild(amountGroup);
var currentStep=1;
function goToStep(step){
currentStep=step;
wizard.querySelectorAll('.bcm-wizard-pane').forEach(function(p){p.classList.toggle('active',Number(p.getAttribute('data-pane'))===step);});
wizard.querySelector('#bcmWDStepText').textContent='Step '+step+' of '+TOTAL_STEPS;
var backBtn=wizard.querySelector('#bcmWDBack');
var nextBtn=wizard.querySelector('#bcmWDNext');
backBtn.textContent=step===1?'Cancel':'Back';
nextBtn.textContent=step===1?'Next: Type of Withdrawal':'Submit';
window.scrollTo({top:wizard.offsetTop-24,behavior:'smooth'});
}
wizard.querySelector('#bcmWDBack').addEventListener('click',function(){
if(currentStep===1){window.location.href='https://trade.blackcrownmarkets.com/';return;}
goToStep(1);
});
wizard.querySelector('#bcmWDNext').addEventListener('click',function(){
if(currentStep===1){
if(!selectedAccount){wizard.querySelector('#bcmWDStep1Error').classList.add('bcm-wiz-error-visible');return;}
goToStep(2);
return;
}
var step2Error=wizard.querySelector('#bcmWDStep2Error');
if(!amountInput.value||parseFloat(amountInput.value)<=0){
step2Error.classList.add('bcm-wiz-error-visible');
return;
}
step2Error.classList.remove('bcm-wiz-error-visible');
amountInput.disabled=false;
submitBtn.click();
});
}
function adjustSidebarHeight(){var sidebar=document.querySelector('.page-sidebar');var header=document.querySelector('.main-header')||document.querySelector('.x-navigation-horizontal');if(!sidebar||!header)return;var headerHeight=header.getBoundingClientRect().height;sidebar.style.setProperty('min-height','calc(100vh - '+headerHeight+'px)','important');}
function markActiveNavItem(){var links=document.querySelectorAll('.page-sidebar .x-navigation a[href]');var currentPath=window.location.pathname.replace(/\/$/,'')||'/';links.forEach(function(a){var linkPath;try{linkPath=new URL(a.getAttribute('href'),window.location.href).pathname.replace(/\/$/,'')||'/';}catch(e){return;}if(linkPath===currentPath){var li=a.closest('li');if(li)li.classList.add('active');}});}
function initGroupToggles(){var labels=document.querySelectorAll('.page-sidebar .bcm-group-label');labels.forEach(function(label){label.classList.add('bcm-collapsed');var list=label.nextElementSibling;if(list)list.style.display='none';label.addEventListener('click',function(){label.classList.toggle('bcm-collapsed');var list=label.nextElementSibling;if(list)list.style.display=label.classList.contains('bcm-collapsed')?'none':'';});});}
function observeContentChanges(){var target=document.querySelector('.page-content-wrap')||document.body;if(!target||typeof MutationObserver==='undefined')return;var observer=new MutationObserver(function(){buildDepositPage();buildDepositSummaryPage();buildAddAccountPage();buildWithdrawPage();});observer.observe(target,{childList:true,subtree:true});}
function buildSupportFab(){if(document.querySelector('.bcm-support-fab'))return;var fab=document.createElement('a');fab.className='bcm-support-fab';fab.href='mailto:support@blackcrownmarkets.com';fab.setAttribute('aria-label','Contact Support');fab.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span class="bcm-support-fab-tooltip">Contact Support</span>';document.body.appendChild(fab);}
function bindLogoutRedirect(){var yesBtn=document.querySelector('#mb-signout .button-yes');if(!yesBtn||yesBtn.dataset.bcmLogout)return;yesBtn.dataset.bcmLogout='1';var logoutHref=yesBtn.getAttribute('href');yesBtn.setAttribute('href','https://register.blackcrownmarkets.com');yesBtn.addEventListener('click',function(e){e.preventDefault();function redirect(){window.location.href='https://register.blackcrownmarkets.com';}fetch(logoutHref,{mode:'no-cors',credentials:'include'}).then(redirect,redirect);});}
function init(){buildSidebar();buildDepositPage();buildDepositSummaryPage();relocateDisclaimers();buildLoginPage();buildRegistrationPage();buildAddAccountPage();buildWithdrawPage();adjustSidebarHeight();window.addEventListener('resize',adjustSidebarHeight);markActiveNavItem();initGroupToggles();observeContentChanges();buildSupportFab();buildNoAccountModal();bindLogoutRedirect();}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}})();
