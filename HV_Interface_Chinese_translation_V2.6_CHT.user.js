// ==UserScript==
// @name HV 界面漢化V2.6 繁體
// @namespace hentaiverse
// @match http://*.hentaiverse.org/*
// @icon http://g.e-hentai.org/favicon.ico
// @description HV面板數據界面漢化,有時候會修復一些網頁的顯示錯誤
// @grant none
// @author ggxxhy (Source author) Revise hc br
// @version V2.6 CHT (2016.05.30)
// ==/UserScript==

if(document.location.href.match(/Character&ss=ab/))
{
a=document.querySelectorAll("#botpane > div > div > div > .fd2")
var torep = new Array();
var repby = new Array();
var xlpan = new Array();
var xlpanh = new Array();
xlpan = xlpan.concat('HP Tank')
xlpanh = xlpanh.concat('HP加成')
xlpan = xlpan.concat('MP Tank')
xlpanh = xlpanh.concat('MP加成')
xlpan = xlpan.concat('SP Tank')
xlpanh = xlpanh.concat('SP加成')
xlpan = xlpan.concat('Better Health Pots')
xlpanh = xlpanh.concat('HP藥水加成')
xlpan = xlpan.concat('Better Mana Pots')
xlpanh = xlpanh.concat('MP藥水加成')
xlpan = xlpan.concat('Better Spirit Pots')
xlpanh = xlpanh.concat('SP藥水加成')
xlpan = xlpan.concat('1H Damage')
xlpanh = xlpanh.concat('單手傷害')
xlpan = xlpan.concat('1H Accuracy')
xlpanh = xlpanh.concat('單手準確')
xlpan = xlpan.concat('1H Block')
xlpanh = xlpanh.concat('單手格擋')
xlpan = xlpan.concat('2H Damage')
xlpanh = xlpanh.concat('雙手傷害')
xlpan = xlpan.concat('2H Accuracy')
xlpanh = xlpanh.concat('雙手準確')
xlpan = xlpan.concat('2H Parry')
xlpanh = xlpanh.concat('雙手招架')
xlpan = xlpan.concat('DW Damage')
xlpanh = xlpanh.concat('雙持傷害')
xlpan = xlpan.concat('DW Accuracy')
xlpanh = xlpanh.concat('雙持準確')
xlpan = xlpan.concat('DW Crit')
xlpanh = xlpanh.concat('雙持暴擊')
xlpan = xlpan.concat('Staff Spell Damage')
xlpanh = xlpanh.concat('法術傷害加成')
xlpan = xlpan.concat('Staff Accuracy')
xlpanh = xlpanh.concat('施法確率')
xlpan = xlpan.concat('Staff Damage')
xlpanh = xlpanh.concat('法杖物理傷害')
xlpan = xlpan.concat('Cloth Spellacc')
xlpanh = xlpanh.concat('布甲法術準確')
xlpan = xlpan.concat('Cloth Spellcrit')
xlpanh = xlpanh.concat('布甲法術暴擊')
xlpan = xlpan.concat('Cloth Castspeed')
xlpanh = xlpanh.concat('布甲詠唱速度')
xlpan = xlpan.concat('Cloth MP')
xlpanh = xlpanh.concat('布甲MP加成')
xlpan = xlpan.concat('Light Acc')
xlpanh = xlpanh.concat('輕甲準確')
xlpan = xlpan.concat('Light Crit')
xlpanh = xlpanh.concat('輕甲暴擊')
xlpan = xlpan.concat('Light Speed')
xlpanh = xlpanh.concat('輕甲攻速')
xlpan = xlpan.concat('>Light HP/MP')
xlpanh = xlpanh.concat('>輕甲HPMP加成')
xlpan = xlpan.concat('>Heavy Crush')
xlpanh = xlpanh.concat('>破碎防禦')
xlpan = xlpan.concat('>Heavy Prcg')
xlpanh = xlpanh.concat('>穿刺防禦')
xlpan = xlpan.concat('>Heavy Slsh')
xlpanh = xlpanh.concat('>斬擊防禦')
xlpan = xlpan.concat('>Heavy HP')
xlpanh = xlpanh.concat('>重甲HP加成')
/*
xlpan = xlpan.concat('>Better Weaken')
xlpanh = xlpanh.concat('>強化"Weaken"')
xlpan = xlpan.concat('>Faster Weaken')
xlpanh = xlpanh.concat('>高速化"Weaken"')
xlpan = xlpan.concat('>Better Imperil')
xlpanh = xlpanh.concat('>強化"Imperil"')
xlpan = xlpan.concat('>Faster Imperil')
xlpanh = xlpanh.concat('>高速化"Imperil"')
xlpan = xlpan.concat('>Better Blind')
xlpanh = xlpanh.concat('>強化"Blind"')
xlpan = xlpan.concat('>Faster Blind')
xlpanh = xlpanh.concat('>高速化"Blind"')
xlpan = xlpan.concat('>Mind Control')
xlpanh = xlpanh.concat('>精神系魔法"Mind Control"')
*/
try{
for (var j=0; j<a.length; j++){
b= a[j].innerHTML
for (var i=0; i<xlpan.length; i++) {
//if(i>20) alert(a[j].innerHTML+xlpan[i]+xlpanh[i])
a[j].innerHTML=a[j].innerHTML.replace(xlpan[i], xlpanh[i]);
if(b!= a[j].innerHTML) break
}
// alert(a[j].innerHTML)
}

}
catch (e){
alert(e)
}
}

if (document.getElementById("monsterpane")==undefined||document.location.href=="http://hentaiverse.org/?s=Character&ss=it"){

var torep = new Array();
var repby = new Array();
var xlpan = new Array();
var xlpanh = new Array();
aaa=document.location.href.match("=Character&ss=eq");
if (document.location.href=='http://hentaiverse.org/'||document.location.href=='http://hentaiverse.org/?s=Character&ss=ch'||aaa=="=Character&ss=eq"&&document.querySelector("#rightpane")!=null)
{

fanyiliebiao()
rightpan=document.querySelector("#rightpane").innerHTML;//右側狀態
if (aaa!="=Character&ss=eq"){
mainpan=document.querySelector("#leftpane.eql").innerHTML;//主要狀態
for (var i=0; i<torep.length; i++) {
var regex = new RegExp(torep[i],'g');
mainpan=mainpan.replace(regex, repby[i]);
}
document.querySelector("#leftpane.eql").innerHTML=mainpan;
}

for (var i=0; i<torep.length; i++) {

var regex = new RegExp(torep[i],'g');
rightpan=rightpan.replace(regex, repby[i]);
}

document.querySelector("#rightpane").innerHTML = rightpan;
var torep = new Array();
var repby = new Array();
rightlink()
mainlink()
}

if(document.location.href=="http://hentaiverse.org/?s=Bazaar&ss=ss")
{
document.getElementById("accept_button").style.cssText="padding-right:60px;padding-top:20px"
document.body.innerHTML.match(/[0-9]+item_pane/g)
temp=document.body.innerHTML.match(/[0-9]+item_pane/g)
for(x in temp)
{
is小馬雕像=document.getElementById(temp[x]).innerHTML.match(/小馬雕像/)
if(is小馬雕像)
{
//alert(1)
document.getElementById(temp[x]).style.background="MidnightBlue";
}
}
}

leftpan=document.querySelector(".clb").innerHTML;//左側狀態
toppan1=document.querySelector("#child_Character.cnbc").innerHTML;//下拉1
toppan2=document.querySelector("#child_Battle.cnbc").innerHTML;//下拉2
toppan3=document.querySelector("#child_Bazaar.cnbc").innerHTML;//下拉3
toppan4=document.querySelector("#child_Forge.cnbc").innerHTML;//下拉4

xlpanfanyi()
zcpanfanyi()
for (var i=0; i<xlpan.length; i++) {
var regex = new RegExp(xlpan[i],'g');
toppan1=toppan1.replace(regex, xlpanh[i]);
}
for (var i=0; i<xlpan.length; i++) {
var regex = new RegExp(xlpan[i],'g');
toppan2=toppan2.replace(regex, xlpanh[i]);
}
for (var i=0; i<xlpan.length; i++) {
var regex = new RegExp(xlpan[i],'g');
toppan3=toppan3.replace(regex, xlpanh[i]);
}

for (var i=0; i<xlpan.length; i++) {
var regex = new RegExp(xlpan[i],'g');
toppan4=toppan4.replace(regex, xlpanh[i]);
}
for (var i=0; i<torep.length; i++) {
var regex = new RegExp(torep[i],'g');
leftpan=leftpan.replace(regex, repby[i]);
}

document.querySelector("#child_Character.cnbc").innerHTML=toppan1;
document.querySelector("#child_Battle.cnbc").innerHTML=toppan2;
document.querySelector("#child_Bazaar.cnbc").innerHTML=toppan3;
document.querySelector("#child_Forge.cnbc").innerHTML=toppan4;
document.querySelector(".clb").innerHTML=leftpan;

leftlink ();
}

if(document.location.href=='http://hentaiverse.org/?s=Character&ss=tr'){

temp=document.querySelector('#trainform > table').rows[1].cells[1]
temp=temp.innerHTML.replace('+1% EXP Bonus','+1%經驗值')
document.querySelector('#trainform > table').rows[1].cells[1].innerHTML=temp

temp=document.querySelector('#trainform > table').rows[2].cells[1]
temp=temp.innerHTML.replace('+10% Proficiency Gain Rate','+10%熟練度獲取率(別點)')
document.querySelector('#trainform > table').rows[2].cells[1].innerHTML=temp

temp=document.querySelector('#trainform > table').rows[3].cells[1]
temp=temp.innerHTML.replace('+1 Ability Point','增加一點技能點(必點)')
document.querySelector('#trainform > table').rows[3].cells[1].innerHTML=temp

temp=document.querySelector('#trainform > table').rows[4].cells[1]
temp=temp.innerHTML.replace('+1 Mastery Point','增加一點支配點')
document.querySelector('#trainform > table').rows[4].cells[1].innerHTML=temp

temp=document.querySelector('#trainform > table').rows[5].cells[1]
temp=temp.innerHTML.replace('+1% Base Loot Drop Chance','+1%的物品掉率')
document.querySelector('#trainform > table').rows[5].cells[1].innerHTML=temp

temp=document.querySelector('#trainform > table').rows[6].cells[1]
temp=temp.innerHTML.replace('+1% Base Rare Drop Chance','+1%掉落物品品質')
document.querySelector('#trainform > table').rows[6].cells[1].innerHTML=temp

temp=document.querySelector('#trainform > table').rows[7].cells[1]
temp=temp.innerHTML.replace('+5% Base Equipment Drop Chance','+5%裝備基礎掉率')
document.querySelector('#trainform > table').rows[7].cells[1].innerHTML=temp

temp=document.querySelector('#trainform > table').rows[8].cells[1]
temp=temp.innerHTML.replace('+10% Base Artifact Drop Chance','+10%文物掉率')
document.querySelector('#trainform > table').rows[8].cells[1].innerHTML=temp

temp=document.querySelector('#trainform > table').rows[9].cells[1]
temp=temp.innerHTML.replace('Improved Monster Hunger Drain','降低怪物飢餓速度')
document.querySelector('#trainform > table').rows[9].cells[1].innerHTML=temp

temp=document.querySelector('#trainform > table').rows[10].cells[1]
temp=temp.innerHTML.replace('Improved Monster Morale Drain','怪物士氣不容易降低')
document.querySelector('#trainform > table').rows[10].cells[1].innerHTML=temp

temp=document.querySelector('#trainform > table').rows[11].cells[1]
temp=temp.innerHTML.replace('+1 Battle Scroll Slots','+1個捲軸攜帶數')
document.querySelector('#trainform > table').rows[11].cells[1].innerHTML=temp

temp=document.querySelector('#trainform > table').rows[12].cells[1]
temp=temp.innerHTML.replace('+1 Battle Infusion Slots','+1個魔藥攜帶數')
document.querySelector('#trainform > table').rows[12].cells[1].innerHTML=temp

temp=document.querySelector('#trainform > table').rows[13].cells[1]
temp=temp.innerHTML.replace('+1 Battle Inventory Slots','+1個道具攜帶數(優先)')
document.querySelector('#trainform > table').rows[13].cells[1].innerHTML=temp

temp=document.querySelector('#trainform > table').rows[14].cells[1]
temp=temp.innerHTML.replace('+1 Persona Slot','+1個人格槽(不用點)')
document.querySelector('#trainform > table').rows[14].cells[1].innerHTML=temp

temp=document.querySelector('#trainform > table').rows[15].cells[1]
temp=temp.innerHTML.replace('+1 Equipment Set','+1個裝備槽(不用點)')
document.querySelector('#trainform > table').rows[15].cells[1].innerHTML=temp

}

function xlpanfanyi()
{
xlpan = xlpan.concat('>Equipment Shop')
xlpanh = xlpanh.concat('>裝備店')
xlpan = xlpan.concat('>Item Shop Bot')
xlpanh = xlpanh.concat('>道具機器人')

xlpan = xlpan.concat('>Character')
xlpanh = xlpanh.concat('>角色能力')
xlpan = xlpan.concat('>Equipment')
xlpanh = xlpanh.concat('>裝備')
xlpan = xlpan.concat('>Abilities')
xlpanh = xlpanh.concat('>技能')
xlpan = xlpan.concat('>Training')
xlpanh = xlpanh.concat('>訓練場')
xlpan = xlpan.concat('>Battle Items')
xlpanh = xlpanh.concat('>戰鬥道具')
xlpan = xlpan.concat('>Inventory')
xlpanh = xlpanh.concat('>物品')
xlpan = xlpan.concat('>Settings')
xlpanh = xlpanh.concat('>設置')

xlpan = xlpan.concat('>Item Shop')
xlpanh = xlpanh.concat('>道具店')
xlpan = xlpan.concat('>Monster Lab')
xlpanh = xlpanh.concat('>怪物農場')
xlpan = xlpan.concat('>The Shrine')
xlpanh = xlpanh.concat('>祭壇')
xlpan = xlpan.concat('>MoogleMail')
xlpanh = xlpanh.concat('>Moogle郵箱')
xlpan = xlpan.concat('>Weapon Lottery')
xlpanh = xlpanh.concat('>武器樂透')
xlpan = xlpan.concat('>Armor Lottery')
xlpanh = xlpanh.concat('>防具樂透')

xlpan = xlpan.concat('>The Arena')
xlpanh = xlpanh.concat('>競技場(JJC)')
xlpan = xlpan.concat('>Ring of Blood')
xlpanh = xlpanh.concat('>浴血擂台(ROB)')
xlpan = xlpan.concat('>GrindFest')
xlpanh = xlpanh.concat('>壓榨界(GF)')
xlpan = xlpan.concat('>Item World')
xlpanh = xlpanh.concat('>道具界(IW)')

xlpan = xlpan.concat('>Repair')
xlpanh = xlpanh.concat('>修理')
xlpan = xlpan.concat('>Upgrade')
xlpanh = xlpanh.concat('>改造')
xlpan = xlpan.concat('>Enchant')
xlpanh = xlpanh.concat('>強化')
xlpan = xlpan.concat('>Salvage')
xlpanh = xlpanh.concat('>回收')
xlpan = xlpan.concat('>Reforge')
xlpanh = xlpanh.concat('>重鑄')
xlpan = xlpan.concat('>Soulfuse')
xlpanh = xlpanh.concat('>靈魂連結')
}
function zcpanfanyi()
{

//左側
torep = torep.concat('Health points');
repby = repby.concat('體力');
torep = torep.concat('Magic points');
repby = repby.concat('魔力');
torep = torep.concat('Spirit points');
repby = repby.concat('靈力');
torep = torep.concat('Level');
repby = repby.concat('等級');
torep = torep.concat('Difficulty');
repby = repby.concat('難度');
torep = torep.concat('Credits');
repby = repby.concat('紳士幣');
torep = torep.concat('Current exp');
repby = repby.concat('當前經驗');
torep = torep.concat('To next level');
repby = repby.concat('升級所需');
torep = torep.concat('Unassigned exp');
repby = repby.concat('未分配經驗');
torep = torep.concat('Unspent points');
repby = repby.concat('未分配點數');
torep = torep.concat('Stamina')
repby = repby.concat('精力')
//難度
torep = torep.concat('Normal')
repby = repby.concat('Normal*1(IW*2)')
torep = torep.concat('Hard')
repby = repby.concat('Hard*2(IW*2.8)')
torep = torep.concat('Nightmare')
repby = repby.concat('Nightmare*4(IW*4)')
torep = torep.concat('Hell')
repby = repby.concat('Hell*7(IW*6)')
torep = torep.concat('Nintendo')
repby = repby.concat('Nintendo*10(IW*10)')
torep = torep.concat('IWBTH')
repby = repby.concat('IWBTH*15(IW*16)')
torep = torep.concat('PFUDOR')
repby = repby.concat('PFUDOR*20(IW*16)')
}
function fanyiliebiao(){ //右側狀態
torep = torep.concat(' %')
repby = repby.concat('%')
torep = torep.concat('Ether Tap')
repby = repby.concat('魔力回流')
torep = torep.concat('Coalesced Mana')
repby = repby.concat('魔力合流')
torep = torep.concat('Req: ')
repby = repby.concat('需要觸發')
torep = torep.concat('on spell hit')
repby = repby.concat('在釋放魔法時')
torep = torep.concat('Elemental Strike')
repby = repby.concat('屬性攻擊')
torep = torep.concat('Elemental Strike')
repby = repby.concat('屬性攻擊')
torep = torep.concat('Bleeding Wound')
repby = repby.concat('流血攻擊')
torep = torep.concat('Overwhelming Strikes')
repby = repby.concat('壓制攻擊')
torep = torep.concat('Counter-Attack')
repby = repby.concat('反擊')
torep = torep.concat('Domino Strike');
repby = repby.concat('骨牌攻擊');
torep = torep.concat('Penetrated Armor');
repby = repby.concat('破甲');
torep = torep.concat('on mainhand hit');
repby = repby.concat('主手攻擊時發生');
torep = torep.concat('on offhand hit');
repby = repby.concat('副手攻擊時發生');

torep = torep.concat('Vitals');
repby = repby.concat('狀態加成');
torep = torep.concat('Health Points');
repby = repby.concat(' 體力');
torep = torep.concat('Magic Points');
repby = repby.concat(' 魔力');
torep = torep.concat('magic regen per tick');
repby = repby.concat(' 每輪魔力回覆量');
torep = torep.concat('spirit regen per tick');
repby = repby.concat(' 每輪靈力回覆量');
torep = torep.concat('Spirit Points');
repby = repby.concat(' 靈力');




torep = torep.concat('Offhand Strike');
repby = repby.concat('副手攻擊');
torep = torep.concat('Stunned')
repby = repby.concat('眩暈攻擊')
torep = torep.concat('Lasts for')
repby = repby.concat('持續')
torep = torep.concat('turns')
repby = repby.concat('回合')
torep = torep.concat('turn')
repby = repby.concat('回合')
torep = torep.concat('N/A')
repby = repby.concat('無')
torep = torep.concat('None')
repby = repby.concat('無')
//特殊小詞組
torep = torep.concat('dmg for')
repby = repby.concat('的傷害並持續')
//長句子
torep = torep.concat('Spell Damage Bonus');
repby = repby.concat('技能傷害加成');
torep = torep.concat('Effective Proficiency');
repby = repby.concat('最終熟練度');
torep = torep.concat('Proc Chances');
repby = repby.concat('技能發動率');
torep = torep.concat('Overcharge');
repby = repby.concat('最大鬥氣值(Overcharge)');
// 屬性欄
torep = torep.concat('Primary attributes');
repby = repby.concat('主屬性');
torep = torep.concat('Strength');
repby = repby.concat('力量');
torep = torep.concat('Dexterity');
repby = repby.concat('靈巧');
torep = torep.concat('Agility');
repby = repby.concat('敏捷');
torep = torep.concat('Endurance');
repby = repby.concat('體質');
torep = torep.concat('Intelligence');
repby = repby.concat('智力');
torep = torep.concat('Wisdom');
repby = repby.concat('感知');
// 裝備熟練度
torep = torep.concat('Equipment proficiency');
repby = repby.concat('裝備熟練度');
torep = torep.concat('One-handed');
repby = repby.concat('單手武器');
torep = torep.concat('Two-handed');
repby = repby.concat('雙手武器');
torep = torep.concat('Dual wielding');
repby = repby.concat('雙持武器');
torep = torep.concat('Staff');
repby = repby.concat('法杖武器');
torep = torep.concat('Cloth armor');
repby = repby.concat('布甲');
torep = torep.concat('Light armor');
repby = repby.concat('輕甲');
torep = torep.concat('Heavy armor');
repby = repby.concat('重甲');
// 魔法熟練度
torep = torep.concat('Magic proficiency');
repby = repby.concat('魔法熟練度');
torep = torep.concat('Elemental');
repby = repby.concat('元素魔法');
torep = torep.concat('Divine');
repby = repby.concat('光魔法');
torep = torep.concat('Forbidden');
repby = repby.concat('暗魔法');
torep = torep.concat('Spiritual');
repby = repby.concat('魂魔法');
torep = torep.concat('Deprecating');
repby = repby.concat('減益魔法');
torep = torep.concat('Supportive');
repby = repby.concat('輔助魔法');
torep = torep.concat('Curative');
repby = repby.concat('恢復魔法');
// 其他狀態
torep = torep.concat('Derived attributes');
repby = repby.concat('其他屬性');
torep = torep.concat('Base vitals');
repby = repby.concat('命脈和再生');
torep = torep.concat('Base health');
repby = repby.concat('基礎體力');
torep = torep.concat('Base magic');
repby = repby.concat('基礎魔力');
torep = torep.concat('Base spirit');
repby = repby.concat('基礎靈力');
torep = torep.concat('Action speed');
repby = repby.concat('行動速度');
torep = torep.concat('on block/parry');
repby = repby.concat('格擋/招架時發生');
// 狀態欄
torep = torep.concat('Statistics');
repby = repby.concat('狀態欄');
torep = torep.concat('Fighting Style');
repby = repby.concat('持握風格');
torep = torep.concat('Two-Handed')
repby = repby.concat('雙手')
torep = torep.concat('One-Handed')
repby = repby.concat('單手')
torep = torep.concat('Dualwield')
repby = repby.concat('雙持')
torep = torep.concat('Niten Ichiryu')
repby = repby.concat('二天一流')
torep = torep.concat('Mainhand Damage Type');
repby = repby.concat('主手打擊方式');
torep = torep.concat('Offhand Damage Type');
repby = repby.concat('副手打擊方式');
torep = torep.concat('Physical Attack');
repby = repby.concat('物理攻擊數據');
torep = torep.concat('attack base damage');
repby = repby.concat('物理基礎攻擊力');
torep = torep.concat('magic base damage');
repby = repby.concat('魔法基礎攻擊力');
torep = torep.concat('hit chance');
repby = repby.concat('命中率');
torep = torep.concat('crit chance');
repby = repby.concat('暴擊率');
torep = torep.concat('damage');
repby = repby.concat('的額外傷害');
torep = torep.concat('attack speed bonus');
repby = repby.concat('物理攻速加成');
torep = torep.concat('Magical Attack');
repby = repby.concat('魔法攻擊數據');
torep = torep.concat('mana cost modifier');
repby = repby.concat('魔法消耗修正');
torep = torep.concat('cast speed bonus');
repby = repby.concat('魔法攻速加成');
torep = torep.concat('crushing');
repby = repby.concat('鈍擊');
torep = torep.concat('slashing');
repby = repby.concat('砍擊');
torep = torep.concat('piercing');
repby = repby.concat('刺擊');
torep = torep.concat('on hit');
repby = repby.concat('(命中時判定)');
torep = torep.concat('Boost');
repby = repby.concat('加成');
torep = torep.concat('Damage Mitigations');
repby = repby.concat('防禦效果');
torep = torep.concat('Damage Mitigation');
repby = repby.concat('防禦效果');
torep = torep.concat('physical mitigation');
repby = repby.concat('物理減傷');
torep = torep.concat('magical mitigation');
repby = repby.concat('魔法減傷');
torep = torep.concat('Avoidance');
repby = repby.concat('迴避相關');
torep = torep.concat('evade chance');
repby = repby.concat('迴避率');
torep = torep.concat('block chance');
repby = repby.concat('格擋率');
torep = torep.concat('parry chance');
repby = repby.concat('招架率');
torep = torep.concat('Defense');
repby = repby.concat('防禦數據');
torep = torep.concat('resist chance');
repby = repby.concat('魔法免疫');
torep = torep.concat('Specific Mitigation');
repby = repby.concat('屬性抗性');
torep = torep.concat('Effective Primary Stats');
repby = repby.concat('人物屬性');
torep = torep.concat('Compromise');
repby = repby.concat('裝備影響');
torep = torep.concat('interference');
repby = repby.concat('干涉');
torep = torep.concat('burden');
repby = repby.concat('負重');
torep = torep.concat('Crushing');
repby = repby.concat('破碎Ⓒ');
torep = torep.concat('Piercing');
repby = repby.concat('穿刺Ⓟ');
torep = torep.concat('Slashing');
repby = repby.concat('斬擊Ⓢ');
torep = torep.concat('Fire');
repby = repby.concat('火');
torep = torep.concat('fire');
repby = repby.concat('火焰衝擊');
torep = torep.concat('Cold');
repby = repby.concat('冰');
torep = torep.concat('cold');
repby = repby.concat('冰霜衝擊');
torep = torep.concat('Elec');
repby = repby.concat('雷');
torep = torep.concat('elec ');
repby = repby.concat('閃電衝擊');
torep = torep.concat('Wind');
repby = repby.concat('風');
torep = torep.concat('wind');
repby = repby.concat('狂風衝擊');
torep = torep.concat('Holy');
repby = repby.concat('光');
torep = torep.concat('holy');
repby = repby.concat('神聖衝擊');
torep = torep.concat('Dark');
repby = repby.concat('暗');
torep = torep.concat('dark');
repby = repby.concat('黑暗衝擊');
torep = torep.concat('Soul');
repby = repby.concat('魂');
torep = torep.concat('Void');
repby = repby.concat('空靈');
torep = torep.concat('void');
repby = repby.concat('虛空衝擊');
//材料
torep = torep.concat('布料');
repby = repby.concat('布料');
torep = torep.concat('皮革')
repby = repby.concat('皮革')
torep = torep.concat('木材')
repby = repby.concat('木材')
}

function rightlink()
{
var rigslink = document.createElement('a');
rigslink.href = "http://zh.scratchpad.wikia.com/wiki/Interference";
rigslink.innerHTML = "[\?]";
rigslink.target = "_blank";
rigslink.style.color = "red";
document.querySelector("#rightpane").innerHTML=document.querySelector("#rightpane").innerHTML.replace('干涉', '干涉'+rigslink.outerHTML);
//負重說明
var rifzlink = document.createElement('a');
rifzlink.href = "http://zh.scratchpad.wikia.com/wiki/Burden";
rifzlink.innerHTML = "[\?]";
rifzlink.target = "_blank";
rifzlink.style.color = "red";
document.querySelector("#rightpane").innerHTML=document.querySelector("#rightpane").innerHTML.replace('負重', '負重'+rifzlink.outerHTML);

}
function leftlink (){

var hvchLink = document.createElement('a');
hvchLink.href = "http://hentaiverse.org/?s=Character&ss=ch";
hvchLink.innerHTML = "[狀]";
hvchLink.style.color = "red";
var hveqLink = document.createElement('a');
hveqLink.href = "http://hentaiverse.org/?s=Character&ss=eq";
hveqLink.innerHTML = "[裝]";
hveqLink.style.color = "red";
var hvabLink = document.createElement('a');
hvabLink.href = "http://hentaiverse.org/?s=Character&ss=ab";
hvabLink.innerHTML = "[技]";
hvabLink.style.color = "red";
var hvxtLink = document.createElement('a');
hvxtLink.href = "http://hentaiverse.org/?s=Character&ss=tr";
hvxtLink.innerHTML = "[訓]";
hvxtLink.style.color = "red";
var hvitLink = document.createElement('a');
hvitLink.href = "http://hentaiverse.org/?s=Character&ss=it";
hvitLink.innerHTML = "[道]";
hvitLink.style.color = "red";
var hvinLink = document.createElement('a');
hvinLink.href = "http://hentaiverse.org/?s=Character&ss=in";
hvinLink.innerHTML = "[包]";
hvinLink.style.color = "red";
var hvseLink = document.createElement('a');
hvseLink.href = "http://hentaiverse.org/?s=Character&ss=se";
hvseLink.innerHTML = "[設]";
hvseLink.style.color = "red";
//商舖鏈接
var hveswLink = document.createElement('a');
hveswLink.href = "http://hentaiverse.org/?s=Bazaar&ss=es";
hveswLink.innerHTML = "[武]";
hveswLink.style.color = "red";
var hvisdLink = document.createElement('a');
hvisdLink.href = "http://hentaiverse.org/?s=Bazaar&ss=is";
hvisdLink.innerHTML = "[道]";
hvisdLink.style.color = "red";
var hvmlgLink = document.createElement('a');
hvmlgLink.href = "http://hentaiverse.org/?s=Bazaar&ss=ml";
hvmlgLink.innerHTML = "[怪]";
hvmlgLink.style.color = "red";
var hvjtdLink = document.createElement('a');
hvjtdLink.href = "http://hentaiverse.org/?s=Bazaar&ss=ss";
hvjtdLink.innerHTML = "[祭]";
hvjtdLink.style.color = "red";
var hvymdLink = document.createElement('a');
hvymdLink.href = "http://hentaiverse.org/?s=Bazaar&ss=mm";
hvymdLink.innerHTML = "[郵]";
hvymdLink.style.color = "red";
//戰鬥鏈接
var hvjLink = document.createElement('a');
hvjLink.href = "http://hentaiverse.org/?s=Battle&ss=ar";
hvjLink.innerHTML = "[AR]";
hvjLink.style.color = "red";
var hvbLink = document.createElement('a');
hvbLink.href = "http://hentaiverse.org/?s=Battle&ss=rb";
hvbLink.innerHTML = "[RB]";
hvbLink.style.color = "red";
var hvzLink = document.createElement('a');
hvzLink.href = "http://hentaiverse.org/?s=Battle&ss=gr";
hvzLink.innerHTML = "[GF]";
hvzLink.style.color = "red";
var hviwLink = document.createElement('a');
hviwLink.href = "http://hentaiverse.org/?s=Battle&ss=iw";
hviwLink.innerHTML = "[IW]";
hviwLink.style.color = "red";
//鍛造鏈接
var hvfreLink = document.createElement('a');
hvfreLink.href = "http://hentaiverse.org/?s=Forge&ss=re";
hvfreLink.innerHTML = "[修]";
hvfreLink.style.color = "red";
var hvfupLink = document.createElement('a');
hvfupLink.href = "http://hentaiverse.org/?s=Forge&ss=up";
hvfupLink.innerHTML = "[改]";
hvfupLink.style.color = "red";
var hvfenLink = document.createElement('a');
hvfenLink.href = "http://hentaiverse.org/?s=Forge&ss=en";
hvfenLink.innerHTML = "[優]";
hvfenLink.style.color = "red";
var hvfsaLink = document.createElement('a');
hvfsaLink.href = "http://hentaiverse.org/?s=Forge&ss=sa";
hvfsaLink.innerHTML = "[報]";
hvfsaLink.style.color = "red";
var hvffoLink = document.createElement('a');
hvffoLink.href = "http://hentaiverse.org/?s=Forge&ss=fo";
hvffoLink.innerHTML = "[重]";
hvffoLink.style.color = "red";
var hvffuLink = document.createElement('a');
hvffuLink.href = "http://hentaiverse.org/?s=Forge&ss=fu";
hvffuLink.innerHTML = "[靈]";
hvffuLink.style.color = "red";

leftlinkDiv = document.createElement("div");
leftlinkDiv.style.cssText = "text-decoration:none; font-size:15px;color:black; top:-3px; position:relative; text-align:middle";
settings = document.createElement("a");


settings.onclick = alad
charapan = document.createElement("a");
bazaapan = document.createElement("a");
battlpan = document.createElement("a");
forglpan = document.createElement("a");
charapan.innerHTML = hvchLink.outerHTML+hveqLink.outerHTML+hvabLink.outerHTML+hvitLink.outerHTML+hvinLink.outerHTML+hvseLink.outerHTML;
bazaapan.innerHTML = hveswLink.outerHTML+hvisdLink.outerHTML+hvmlgLink.outerHTML+hvxtLink.outerHTML+hvjtdLink.outerHTML+hvymdLink.outerHTML;
battlpan.innerHTML = hvjLink.outerHTML+hvbLink.outerHTML+hvzLink.outerHTML+hviwLink.outerHTML;
forglpan.innerHTML = hvfreLink.outerHTML+hvfupLink.outerHTML+hvfenLink.outerHTML+hvfsaLink.outerHTML+hvffoLink.outerHTML+hvffuLink.outerHTML;
showlink()
}
function alad()
{
localStorage.charahhkg==0?localStorage.charahhkg=1:localStorage.charahhkg=0;
showlink();
}
function showlink(){

if(localStorage.charahhkg==0){
settings.innerHTML = "打開鏈結";
settings.style.cssText = "color:#5C0D11;"
charapan.style.cssText = "display:none;"
bazaapan.style.cssText = "display:none;"
battlpan.style.cssText = "display:none;"
forglpan.style.cssText = "display:none;"
}
else
{
settings.innerHTML = "關閉鏈結"
charapan.style.cssText = "display:block;"
bazaapan.style.cssText = "display:block;"
battlpan.style.cssText = "display:block;"
forglpan.style.cssText = "display:block;"
}
leftlinkDiv.appendChild(charapan);
leftlinkDiv.appendChild(bazaapan);
leftlinkDiv.appendChild(battlpan);
leftlinkDiv.appendChild(forglpan);

leftlinkDiv.appendChild(settings);
document.querySelector(".clb").appendChild(leftlinkDiv)
}


function mainlink()
{
//wiki常用
var CSLink = document.createElement('a');
CSLink.href = "http://zh.scratchpad.wikia.com/wiki/Character_Stats";
CSLink.innerHTML = "[主要屬性]";
CSLink.target = "_blank";
var skillLink = document.createElement('a');
skillLink.href = "http://zh.scratchpad.wikia.com/wiki/Skills";
skillLink.innerHTML = "[技巧]";
skillLink.target = "_blank";
var magwiki = document.createElement('a');
magwiki.href = "http://zh.scratchpad.wikia.com/wiki/Spells";
magwiki.innerHTML = "[魔法]";
magwiki.target = "_blank"
var sldwiki = document.createElement('a');
sldwiki.href = "http://zh.scratchpad.wikia.com/wiki/Proficiencies";
sldwiki.innerHTML = "[熟練度]";
sldwiki.target = "_blank"
var equwiki = document.createElement('a');
equwiki.href = "http://zh.scratchpad.wikia.com/wiki/Equipment";
equwiki.innerHTML = "[裝備]";
equwiki.target = "_blank"
var ablitLink = document.createElement('a');
ablitLink.href = "http://zh.scratchpad.wikia.com/wiki/Abilities";
ablitLink.innerHTML = "[技能點]";
ablitLink.target = "_blank";
var ndLink = document.createElement('a');
ndLink.href = "http://zh.scratchpad.wikia.com/wiki/HentaiVerse_Settings";
ndLink.innerHTML = "[難度]";
ndLink.target = "_blank";
var actspd = document.createElement('a');
actspd.href = "http://zh.scratchpad.wikia.com/wiki/Action_Speed";
actspd.innerHTML = "[行動速度]";
actspd.target = "_blank"
//相關鏈結
var twLink = document.createElement('a');
twLink.href = "http://zh.scratchpad.wikia.com/wiki/HentaiVerse_FAQ";
twLink.innerHTML = "常見問題";
twLink.target = "_blank";
twLink.style.color = "color:#CB000A";
var twLink1 = document.createElement('a');
twLink1.href = "http://forums.e-hentai.org/index.php?showtopic=188528";
twLink1.innerHTML = "論壇(中)";
twLink1.target = "_blank";
twLink1.style.color = "color:#CB000A";
var twLink2 = document.createElement('a');
twLink2.href = "http://forums.e-hentai.org/index.php?showforum=77";
twLink2.innerHTML = "論壇WTS";
twLink2.target = "_blank";
twLink2.style.color = "color:#CB000A";
var twLink3 = document.createElement('a');
twLink3.href = "http://zh.scratchpad.wikia.com/wiki/Category:HentaiVerse";
twLink3.innerHTML = "圍紀實驗室";
twLink3.target = "_blank";
twLink3.style.color = "color:#CB000A";
var twLink4 = document.createElement('a');
twLink4.href = "http://forums.e-hentai.org/index.php?s=&showtopic=189266&view=findpost&p=4332864";
twLink4.innerHTML = "新手指引文";
twLink4.target = "_blank";
twLink4.style.color = "color:#CB000A";
var twLink5 = document.createElement('a');
twLink5.href = "http://forums.e-hentai.org/index.php?s=&showtopic=189266&view=findpost&p=4332877";
twLink5.innerHTML = "指引文附註";
twLink5.target = "_blank";
twLink5.style.color = "color:#CB000A";
var twLink6 = document.createElement('a');
twLink6.href = "http://tieba.baidu.com/f?kw=hv%E7%BD%91%E9%A1%B5%E6%B8%B8%E6%88%8F&ie=utf-8";
twLink6.innerHTML = "hv網頁遊戲吧";
twLink6.target = "_blank";
twLink6.style.color = "color:#CB000A";
//插件腳本
var guanfangchajianLink = document.createElement('a');
guanfangchajianLink.href = "http://forums.e-hentai.org/index.php?showtopic=65126";
guanfangchajianLink.innerHTML = "論壇發表處";
guanfangchajianLink.target = "_blank";
var guanfangchajianLink0 = document.createElement('a');
guanfangchajianLink0.href = "https://forums.e-hentai.org/index.php?showtopic=190038&st=0";
guanfangchajianLink0.innerHTML = "[插件彙整]";
guanfangchajianLink0.target = "_blank";
var guanfangchajianLink1 = document.createElement('a');
guanfangchajianLink1.href = "http://wikiwiki.jp/hentaiverse/?Tools";
guanfangchajianLink1.innerHTML = "[插件](日)";
guanfangchajianLink1.target = "_blank";
var guanfangchajianLink2 = document.createElement('a');
guanfangchajianLink2.href = "http://tieba.baidu.com/p/3707875123";
guanfangchajianLink2.innerHTML = "[貼吧腳本]";
guanfangchajianLink2.target = "_blank";
var guanfangchajianLink3 = document.createElement('a');
guanfangchajianLink3.href = "http://e-hentai.org/dmspublic/karma.php?u=1244725";
guanfangchajianLink3.innerHTML = "[作者加K]";
guanfangchajianLink3.target = "_blank";

youcelianjie = document.createElement("stat");
youcelianjie.onclick = youcekaiguan

function youcekaiguan()
{
localStorage.yckguan==0?localStorage.yckguan=1:localStorage.yckguan=0;
if(localStorage.yckguan==0) {quicklink.innerHTML='';youcelianjie.innerHTML = "打開連接";}
else {quicklink.innerHTML=
'漢化V2.6<br>WIKI常用<br>'+CSLink.outerHTML+'<br>'+skillLink.outerHTML+'<br>'+magwiki.outerHTML+'<br>'+sldwiki.outerHTML+'<br>'+equwiki.outerHTML+'<br>'+ablitLink.outerHTML+'<br>'+ndLink.outerHTML+'<br>'+actspd.outerHTML+
'<br>相關鏈接<br>'+twLink.outerHTML+'<br>'+twLink1.outerHTML+'<br>'+twLink2.outerHTML+'<br>'+twLink3.outerHTML+'<br>'+twLink4.outerHTML+'<br>'+twLink5.outerHTML+'<br>'+twLink6.outerHTML+
'<br>插件腳本<br>'+guanfangchajianLink.outerHTML+'<br>'+guanfangchajianLink0.outerHTML+'<br>'+guanfangchajianLink1.outerHTML+'<br>'+guanfangchajianLink2.outerHTML+'<br>'+guanfangchajianLink3.outerHTML
;youcelianjie.innerHTML = "關閉連接";}}
if(localStorage.yckguan==0)
{
youcelianjie.innerHTML = "打開連接";
youcelianjie.style.cssText = "font-size:14px;color:#CB000A;position:absolute;top:5px;left:1250px;text-align:left";
quicklink = document.createElement("stat");
quicklink.style.cssText = "font-size:12px;color:DeepSkyBlue; position:absolute;top:20px;left:1250px;text-align:left";
quicklink.innerHTML=''
document.body.appendChild(quicklink);
document.body.appendChild(youcelianjie);
}
else
{
youcelianjie.innerHTML = "關閉連接";
youcelianjie.style.cssText = "font-size:14px;color:#CB000A;position:absolute;top:5px;left:1250px;text-align:left";
quicklink = document.createElement("stat");
quicklink.style.cssText = "font-size:12px;color:DeepSkyBlue; position:absolute;top:20px;left:1250px;text-align:left";
quicklink.innerHTML='漢化V2.6<br>WIKI常用<br>'+CSLink.outerHTML+'<br>'+skillLink.outerHTML+'<br>'+magwiki.outerHTML+'<br>'+sldwiki.outerHTML+'<br>'+equwiki.outerHTML+'<br>'+ablitLink.outerHTML+'<br>'+ndLink.outerHTML+'<br>'+actspd.outerHTML+
'<br>相關鏈接<br>'+twLink.outerHTML+'<br>'+twLink1.outerHTML+'<br>'+twLink2.outerHTML+'<br>'+twLink3.outerHTML+'<br>'+twLink4.outerHTML+'<br>'+twLink5.outerHTML+'<br>'+twLink6.outerHTML+
'<br>插件腳本<br>'+guanfangchajianLink.outerHTML+'<br>'+guanfangchajianLink0.outerHTML+'<br>'+guanfangchajianLink1.outerHTML+'<br>'+guanfangchajianLink2.outerHTML+'<br>'+guanfangchajianLink3.outerHTML
document.body.appendChild(quicklink);
document.body.appendChild(youcelianjie);
}
}
