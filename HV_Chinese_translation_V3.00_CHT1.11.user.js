// ==UserScript==
// @name      物品漢化V3.00 繁體1.11
// @namespace hentaiversehhV3
// @icon      http://g.e-hentai.org/favicon.ico
// @match     http://*.hentaiverse.org/?s=Bazaar&ss=es*
// @match     http://*.hentaiverse.org/?s=Character&ss=eq*
// @match     http://*.hentaiverse.org/?s=Character&ss=it
// @match     http://*.hentaiverse.org/?s=Bazaar&ss=is*
// @match     http://*.hentaiverse.org/?s=Character&ss=in
// @match     http://*.hentaiverse.org/?s=Bazaar&ss=fr*
// @match     http://*.hentaiverse.org/?s=Bazaar&ss=ss
// @match     http://*.hentaiverse.org/?s=Forge&ss*
// @match     http://*.hentaiverse.org/pages/showequip.php?eid*
// @match     http://*.hentaiverse.org/?s=Battle&ss=iw*
// @match     *://forums.e-hentai.org/*
// @author    ggxxsol (Source author) Revise hc br
// @version   V3.00 CHT1.11
// ==/UserScript==

if (document.location.href.match(/ss=iw/)&&!document.getElementById('item_pane'))return
var hanhua=true;
closeH=0
var mhtml = document.body.innerHTML;
var html = document.body.innerHTML;
mainhh();
var xuanfu = document.createElement('div');
xuanfu.innerHTML = "英";
xuanfu.onclick=gaibianhanhua
xuanfu.style.cssText = "cursor:pointer;z-index:1000;font-size: 16px;position:fixed; top:450px; left:0px; color: white;background : black";
document.body.appendChild(xuanfu);
document.onkeydown = keyDown
function keyDown(e)
{
	if(e.which!=65)return
		gaibianhanhua()
}
function gaibianhanhua(e)
{
	if(hanhua)
	{
		if (document.location.href.match(/forums/)=='forums')
		{
			if(document.getElementById('qr_open').style.display!="none")
			{
				xuanfu.innerHTML = "回覆框已打開,停止轉換";
				return
			}
		}
		document.body.innerHTML=mhtml;
		hanhua=false;
		xuanfu.innerHTML = "中";	
	}
	else 
	{
		if (document.location.href.match(/forums/)=='forums')
		{
			if(document.getElementById('qr_open').style.display!="none")
			{
				xuanfu.innerHTML = "回覆框已打開,停止轉換";
				return
			}
		}
		hanhua=true;
		mainhh();
		xuanfu.innerHTML = "英";
	}
	document.body.appendChild(xuanfu);
}

function mainhh(){
	var alertt = document.createElement('div');
	alertt.innerHTML = "如要使用裝備比較插件,請先按A鍵!";
	alertt.style.cssText = "font-size:15px;color:black; ";
	document.body.appendChild(alertt);
	if (document.location.href.match("http://hentaiverse.org/pages/showequip.php")){
		var torep = new Array();
		var repby = new Array();
		html=eqmthh(document.body)
		document.body.innerHTML= html;
		aaa=document.location.href.match(/\?([0-9a-z=?&]+)/);
		var eqqlk = document.createElement('div');
		eqqlk.innerHTML = "裝備eid:<br>"+aaa[1]
		eqqlk.style.cssText = "font-size:15px;color:red; ";
		document.body.appendChild(eqqlk);
		return
	}
	var lklist = new Array();
	lklist = lklist.concat('Character&ss=in')   //背包0
	lklist = lklist.concat('Bazaar&ss=is')      //道具店1
	lklist = lklist.concat('Character&ss=eq')  //裝備2
	lklist = lklist.concat('Bazaar&ss=es')    //裝備店3
	lklist = lklist.concat('Bazaar&ss=fr')    // 鍛造店4
	lklist = lklist.concat('Character&ss=it') //戰鬥道具5
	lklist = lklist.concat('Bazaar&ss=ss') //祭壇6
	lklist = lklist.concat('ss=iw') //iw漢化7
	lklist = lklist.concat('forums') //論壇漢化8
	lklist = lklist.concat('Forge') //鍛造9

	for(i=0;i<lklist.length;i++){
		if(document.location.href.match(lklist[i])){
			temp=i;
			break;
		}
	}
	switch (temp){
		case 0:  //背包0
		var torep = new Array();
		var repby = new Array();
		itemdiv=document.querySelector("#inv_item.cspp").innerHTML;
		equipdiv=document.querySelector("#inv_equip.cspp");
		item()
		itemdiv=yhanhua(torep,repby,itemdiv)
		equipdiv=eqmthh(equipdiv)
		document.querySelector("#inv_equip.cspp").innerHTML = equipdiv;
		document.querySelector("#inv_item.cspp").innerHTML = itemdiv;
		break;

		case 1: //道具店1
		var torep = new Array();
		var repby = new Array();
		itemdiv=document.querySelector("#leftpane").innerHTML;
		item()
		itemdiv=yhanhua(torep,repby,itemdiv)
		document.querySelector("#leftpane").innerHTML = itemdiv;
		itemdiv=document.querySelector("#shop_pane.cspp").innerHTML;
		itemdiv=yhanhua(torep,repby,itemdiv)
		document.querySelector("#shop_pane.cspp").innerHTML = itemdiv;
		break;

		case 2: //裝備2
		var torep = new Array();
		var repby = new Array();
		equipdiv=document.querySelector("#leftpane.eql");
		equipdiv=eqmthh(equipdiv)
		document.querySelector("#leftpane.eql").innerHTML = equipdiv;
		break;

		case 3: //裝備店3
		var torep = new Array();
		var repby = new Array();
		equipdiv=document.querySelector("#shop_pane.cspp");
		equipdiv2=document.querySelector("#item_pane.cspp");
		equipdiv=eqmthh(equipdiv)
		equipdiv2=eqmthh(equipdiv2)
		document.querySelector("#shop_pane.cspp").innerHTML = equipdiv;
		document.querySelector("#item_pane.cspp").innerHTML=equipdiv2
		break;

		case 4: // 鍛造店4
		var torep = new Array();
		var repby = new Array();
		equipdiv=document.querySelector("#item_pane");
		equipdiv=eqmthh(equipdiv)
		document.querySelector("#item_pane").innerHTML = equipdiv;
		break;

		case 5: //戰鬥道具5
		var torep = new Array();
		var repby = new Array();
		itemdiv=document.querySelector("#mainpane").innerHTML;
		item()
		itemdiv=yhanhua(torep,repby,itemdiv)
		document.querySelector("#mainpane").innerHTML = itemdiv;
		break;
		case 6: //祭壇
		var torep = new Array();
		var repby = new Array();
		itemdiv=document.querySelector("#leftpane").innerHTML;
		item()
		itemdiv=yhanhua(torep,repby,itemdiv)
		document.querySelector("#leftpane").innerHTML = itemdiv;				
		itemdiv=document.querySelector("#item_pane.cspp").innerHTML;
		itemdiv=yhanhua(torep,repby,itemdiv)
		document.querySelector("#item_pane.cspp").innerHTML = itemdiv;
		break;
		
		case 7: //iw
		var torep = new Array();
		var repby = new Array();
		equipdiv=document.querySelector("#item_pane");
		equipdiv=eqmthh(equipdiv)
		document.querySelector("#item_pane").innerHTML = equipdiv;
		break;
		case 8: //論壇
		var torep = new Array();
		var repby = new Array();
		equipdiv=document.getElementsByClassName('postcolor');
		for (var ii=0; ii<equipdiv.length ; ii++ ){
			tempequipment=equipdiv[ii]
			tempequipment=eqmthh(tempequipment)
			//alert(i)
			//	alert(document.getElementsByClassName('postcolor')[i].innerHTML)
			document.getElementsByClassName('postcolor')[ii].innerHTML = tempequipment;
		}
		break;

		case 9: //鍛造
		var torep = new Array();
		var repby = new Array();
if(equipdiv= document.getElementById("upgrade_button"))equipdiv.style.cssText ="position:relative; top:20px; ";

		equipdiv=document.querySelector("#item_pane");
		equipdiv=eqmthh(equipdiv)
		document.querySelector("#item_pane").innerHTML = equipdiv;
		break;

		default:		
	}		
	function yhanhua(torep,repby,temp){    //源語句，漢化後語句，漢化變量
		for (var i=0; i<torep.length; i++){
			var regex = new RegExp(torep[i],'g');
			temp = temp.replace(regex, repby[i]);
		}
		return temp
		}
function item(){
//道具翻譯
torep = torep.concat('Crystallized Phazon')
repby = repby.concat('相位素材(布)')
torep = torep.concat('Shade Fragment')
repby = repby.concat('暗影素材(輕)')
torep = torep.concat('Repurposed Actuator')
repby = repby.concat('動力素材(重)')
torep = torep.concat('Defense Matrix Modulator')
repby = repby.concat('力場素材(盾)')
torep = torep.concat('Soul Fragment')
repby = repby.concat('靈魂碎片')
torep = torep.concat('Featherweight Shard')
repby = repby.concat('羽毛碎片(裝備)')
torep = torep.concat('Voidseeker Shard')
repby = repby.concat('虛空碎片(武器)')
torep = torep.concat('Aether Shard')
repby = repby.concat('以太碎片(魔法)')
torep = torep.concat('Amnesia Shard')
repby = repby.concat('重鑄碎片(鍛造)')
//藥品解釋
torep = torep.concat('Provides a long-lasting health restoration effect.')
repby = repby.concat('持續50回合恢復2%基礎體力值。')
torep = torep.concat('Instantly restores a large amount of health.')
repby = repby.concat('使用當下恢復100%基礎體力值。')
torep = torep.concat('Fully restores health, and grants a long-lasting health restoration effect.')
repby = repby.concat('使用當下體力值全滿並持續50回合恢復2%基礎體力值。')
torep = torep.concat('Provides a long-lasting mana restoration effect.')
repby = repby.concat('持續50回合恢復1%基礎魔力值。')
torep = torep.concat('Instantly restores a moderate amount of mana.')
repby = repby.concat('使用當下恢復50%基礎魔力值。')
torep = torep.concat('Fully restores mana, and grants a long-lasting mana restoration effect.')
repby = repby.concat('使用當下魔力值全滿並持續50回合恢復1%基礎魔力值。')
torep = torep.concat('Provides a long-lasting spirit restoration effect.')
repby = repby.concat('持續50回合恢復1%基礎靈力值。')
torep = torep.concat('Instantly restores a moderate amount of spirit.')
repby = repby.concat('使用當下恢復50%基礎靈力值。')
torep = torep.concat('Fully restores spirit, and grants a long-lasting spirit restoration effect.')
repby = repby.concat('使用當下靈力值全滿並持續50回合恢復1%基礎靈力值。')
torep = torep.concat('Restores 10 points of Stamina, up to the maximum of 99.')
repby = repby.concat('恢復10點精力，但不超過99。')
torep = torep.concat(' When used in battle, also boosts Overcharge and Spirit by 10% for ten turns.')
repby = repby.concat('當在戰鬥中使用，同時回復怒氣值和靈力值10%持續十回合。')
torep = torep.concat('Fully restores all vitals, and grants long-lasting restoration effects.')
repby = repby.concat('結合了體力.魔力.靈力萬能藥的效果。')
torep = torep.concat('You gain ')
repby = repby.concat('你獲得')
torep = torep.concat(' resistance to Fire elemental attacks and do 25% more damage with Fire magicks.')
repby = repby.concat('的火焰抗性且火焰魔法傷害增加25%。')
torep = torep.concat(' resistance to Cold elemental attacks and do 25% more damage with Cold magicks.')
repby = repby.concat('的冰霜抗性且冰霜魔法傷害增加25%。')
torep = torep.concat(' resistance to Elec elemental attacks and do 25% more damage with Elec magicks.')
repby = repby.concat('的閃電抗性且閃電魔法傷害增加25%。')
torep = torep.concat(' resistance to Wind elemental attacks and do 25% more damage with Wind magicks.')
repby = repby.concat('的狂風抗性且狂風魔法傷害增加25%。')
torep = torep.concat(' resistance to Holy elemental attacks and do 25% more damage with Holy magicks.')
repby = repby.concat('的神聖抗性且神聖魔法傷害增加25%。')
torep = torep.concat(' resistance to Dark elemental attacks and do 25% more damage with Dark magicks.')
repby = repby.concat('的黑暗抗性且黑暗魔法傷害增加25%。')
torep = torep.concat('Grants the Haste effect.')
repby = repby.concat('使用產生100回合加速效果(增加行動速度60%)。')
torep = torep.concat('Grants the Protection effect.')
repby = repby.concat('使用產生100回合保護效果(吸收50%傷害值)。')
torep = torep.concat('Grants the Haste and Protection effects.')
repby = repby.concat('產生加速和保護的效果。')
torep = torep.concat('with twice the normal duration.')
repby = repby.concat('(200回合)')
torep = torep.concat('Grants the Absorb effect.')
repby = repby.concat('使用後獲得吸收效果(吸收機率為100%)。')
torep = torep.concat('Grants the Shadow Veil effect.')
repby = repby.concat('使用產生100回合閃避效果(增加迴避率30%)。')
torep = torep.concat('Grants the Spark of Life effect.')
repby = repby.concat('使用產生100回生命火花效果(觸發消耗25%基礎靈力值殘血50%)。')
torep = torep.concat('Grants the Absorb, Shadow Veil and Spark of Life effects.')
repby = repby.concat('同時產生吸收，閃避，以及生命花火效果。')
torep = torep.concat('There are three flowers in a vase. The third flower is green.')
repby = repby.concat('物理/魔法的傷害.命中.暴擊率提升，迴避/抵抗率提升。(+25%傷害持續50回合)')
torep = torep.concat('It is time to kick ass and chew bubble-gum... and here is some gum.')
repby = repby.concat('物理/魔法傷害大幅提升，必定命中且必定暴擊。同時每回合補充基礎體力.魔力值的20%。(+100%傷害持續50回合)')
//藥水
torep = torep.concat('Health Draught')
repby = repby.concat('體力藥水')
torep = torep.concat('Health Potion')
repby = repby.concat('體力藥劑')
torep = torep.concat('Health Elixir')
repby = repby.concat('體力萬能藥')
torep = torep.concat('Mana Draught')
repby = repby.concat('魔力藥水')
torep = torep.concat('Mana Potion')
repby = repby.concat('魔力藥劑')
torep = torep.concat('Mana Elixir')
repby = repby.concat('魔力萬能藥')
torep = torep.concat('Spirit Draught')
repby = repby.concat('靈力藥水')
torep = torep.concat('Spirit Potion')
repby = repby.concat('靈力藥劑')
torep = torep.concat('Spirit Elixir')
repby = repby.concat('靈力萬能藥')
torep = torep.concat('Energy Drink')
repby = repby.concat('能量飲料')
torep = torep.concat('Last Elixir')
repby = repby.concat('終極萬能藥')
torep = torep.concat('Infusion of Darkness')
repby = repby.concat('暗屬性附魔')
torep = torep.concat('Infusion of Divinity')
repby = repby.concat('聖屬性附魔')
torep = torep.concat('Infusion of Storms')
repby = repby.concat('風屬性附魔')
torep = torep.concat('Infusion of Lightning')
repby = repby.concat('雷屬性附魔')
torep = torep.concat('Infusion of Frost')
repby = repby.concat('冰屬性附魔')
torep = torep.concat('Infusion of Flames')
repby = repby.concat('火屬性附魔')
torep = torep.concat('Scroll of Swiftness')
repby = repby.concat('加速捲軸')
torep = torep.concat('Scroll of the Avatar')
repby = repby.concat('化身捲軸')
torep = torep.concat('Scroll of Shadows')
repby = repby.concat('幻影捲軸')
torep = torep.concat('Scroll of Absorption')
repby = repby.concat('吸收捲軸')
torep = torep.concat('Scroll of Life')
repby = repby.concat('生命捲軸')
torep = torep.concat('Scroll of Protection')
repby = repby.concat('物防捲軸')
torep = torep.concat('Scroll of the Gods')
repby = repby.concat('神之捲軸')
torep = torep.concat('Bubble-Gum')
repby = repby.concat('泡泡糖')
torep = torep.concat('Flower Vase')
repby = repby.concat('花瓶')
//文物獎盃
torep = torep.concat('Precursor Artifact')
repby = repby.concat('舊世界文物')
torep = torep.concat('ManBearPig Tail')
repby = repby.concat('人熊豬的尾巴 <頭目級>')
torep = torep.concat('Holy Hand Grenade of Antioch')
repby = repby.concat('安提阿的神聖手榴彈 <頭目級>')
torep = torep.concat('Mithra\'s Flower')
repby = repby.concat('貓人族的花 <頭目級>')
torep = torep.concat('Dalek Voicebox')
repby = repby.concat('戴立克音箱 <頭目級>')
torep = torep.concat('Lock of Blue Hair')
repby = repby.concat('一綹藍髮 <傳奇級>')
torep = torep.concat('Bunny-Girl Costume')
repby = repby.concat('兔女郎裝 <傳奇級>')
torep = torep.concat('Hinamatsuri Doll')
repby = repby.concat('雛人形 <傳奇級>')
torep = torep.concat('Broken Glasses')
repby = repby.concat('破碎的眼鏡 <傳奇級>')
torep = torep.concat('Sapling')
repby = repby.concat('樹苗 <神級>')
torep = torep.concat('Black T-Shirt')
repby = repby.concat('黑色Ｔ恤 <神級>')
torep = torep.concat('Unicorn Horn')
repby = repby.concat('獨角獸的角 <神級>')
torep = torep.concat('Noodly Appendage')
repby = repby.concat('麵條般的附肢 <神級>')
torep = torep.concat('Figurine')
repby = repby.concat('塑像')

torep = torep.concat('Monster Chow')
repby = repby.concat('低級貓糧')
torep = torep.concat('Monster Edibles')
repby = repby.concat('中級貓糧')
torep = torep.concat('Monster Cuisine')
repby = repby.concat('高級貓糧')
torep = torep.concat('Happy Pills')
repby = repby.concat('快樂藥片')
torep = torep.concat('Token of Blood')
repby = repby.concat('血之令牌')
torep = torep.concat('Chaos Token')
repby = repby.concat('混沌令牌')
torep = torep.concat('Crystal of Vigor')
repby = repby.concat('力量水晶')
torep = torep.concat('Crystal of Finesse')
repby = repby.concat('靈巧水晶')
torep = torep.concat('Crystal of Swiftness')
repby = repby.concat('敏捷水晶')
torep = torep.concat('Crystal of Fortitude')
repby = repby.concat('體質水晶')
torep = torep.concat('Crystal of Cunning')
repby = repby.concat('智力水晶')
torep = torep.concat('Crystal of Knowledge')
repby = repby.concat('知識水晶')
torep = torep.concat('Crystal of Flames')
repby = repby.concat('火之水晶')
torep = torep.concat('Crystal of Frost')
repby = repby.concat('冰之水晶')
torep = torep.concat('Crystal of Lightning')
repby = repby.concat('雷之水晶')
torep = torep.concat('Crystal of Tempest')
repby = repby.concat('風之水晶')
torep = torep.concat('Crystal of Devotion')
repby = repby.concat('神聖水晶')
torep = torep.concat('Crystal of Corruption')
repby = repby.concat('暗黑水晶')
torep = torep.concat('Crystal of Quintessence')
repby = repby.concat('靈魂水晶')
//物品類型
torep = torep.concat('Trophy')
repby = repby.concat('戰利品')
torep = torep.concat('Token')
repby = repby.concat('代幣')
torep = torep.concat('Consumable')
repby = repby.concat('消費品')
torep = torep.concat('Crystal')
repby = repby.concat('水晶')
torep = torep.concat('Artifacts')
repby = repby.concat('文物')
torep = torep.concat('Trophies')
repby = repby.concat('獎盃')
torep = torep.concat('Collectable')
repby = repby.concat('珍藏品')
torep = torep.concat('Material')
repby = repby.concat('素材')
//材料
//torep = torep.concat('Catalyst')
//repby = repby.concat('修復劑')
torep = torep.concat('Low-Grade')
repby = repby.concat('低等')
torep = torep.concat('Mid-Grade')
repby = repby.concat('中等')
torep = torep.concat('High-Grade')
repby = repby.concat('高等')
torep = torep.concat('Cloth');
repby = repby.concat('布料');
torep = torep.concat('Leather')
repby = repby.concat('皮革')
torep = torep.concat('Wood')
repby = repby.concat('木材')
torep = torep.concat('Metals')
repby = repby.concat('金屬')
torep = torep.concat('Metal')
repby = repby.concat('金屬')
torep = torep.concat('Scrap')
repby = repby.concat('報廢')
repby = repby.concat('Materials')
torep = torep.concat('材料')

torep = torep.concat('Some materials scavenged from fallen adventurers by a monster')
repby = repby.concat('從被擊倒的冒險者身上收集來的材料')
torep = torep.concat('Required to upgrade equipment bonuses to')
repby = repby.concat('裝備強化之材料')
torep = torep.concat('Physical Base Damage')
repby = repby.concat('(物理傷害)')
torep = torep.concat('Physical Hit Chance')
repby = repby.concat('(物理命中率)')
torep = torep.concat('Magical Base Damage')
repby = repby.concat('(魔法傷害)')
torep = torep.concat('Magical Hit Chance')
repby = repby.concat('(魔法命中率)')
torep = torep.concat('Physical Defense')
repby = repby.concat('(物理緩傷)')
torep = torep.concat('Evade Chance')
repby = repby.concat('(迴避率)')
torep = torep.concat('Block Chance')
repby = repby.concat('(格擋率)')
torep = torep.concat('Parry Chance')
repby = repby.concat('(招架率)')
torep = torep.concat('Elemental Magic Proficiency')
repby = repby.concat('(元素熟練)')
torep = torep.concat('Divine Magic Proficiency')
repby = repby.concat('(聖熟練)')
torep = torep.concat('Forbidden Magic Proficiency')
repby = repby.concat('(暗熟練)')
torep = torep.concat('Deprecating Magic Proficiency')
repby = repby.concat('(貶抑熟練)')
torep = torep.concat('Supportive Magic Proficiency')
repby = repby.concat('(輔助熟練)')
torep = torep.concat('Fire Spell Damage')
repby = repby.concat('(火焰魔傷)')
torep = torep.concat('Cold Spell Damage')
repby = repby.concat('(冰霜魔傷)')
torep = torep.concat('Elec Spell Damage')
repby = repby.concat('(閃電魔傷)')
torep = torep.concat('Wind Spell Damage')
repby = repby.concat('(狂風魔傷)')
torep = torep.concat('Holy Spell Damage')
repby = repby.concat('(神聖魔傷)')
torep = torep.concat('Dark Spell Damage')
repby = repby.concat('(黑暗魔傷)')
torep = torep.concat('Crushing Mitigation')
repby = repby.concat('(敲擊緩傷)')
torep = torep.concat('Slashing Mitigation')
repby = repby.concat('(砍擊緩傷)')
torep = torep.concat('Piercing Mitigation')
repby = repby.concat('(刺擊緩傷)')
torep = torep.concat('Fire Mitigation')
repby = repby.concat('(火焰緩傷)')
torep = torep.concat('Cold Mitigation')
repby = repby.concat('(冰霜緩傷)')
torep = torep.concat('Elec Mitigation')
repby = repby.concat('(閃電緩傷)')
torep = torep.concat('Wind Mitigation')
repby = repby.concat('(狂風緩傷)')
torep = torep.concat('Holy Mitigation')
repby = repby.concat('(神聖緩傷)')
torep = torep.concat('Dark Mitigation')
repby = repby.concat('(黑暗緩傷)')
torep = torep.concat('Strength')
repby = repby.concat('(力量)')
torep = torep.concat('Dexterity')
repby = repby.concat('(靈巧)')
torep = torep.concat('Agility')
repby = repby.concat('(敏捷)')
torep = torep.concat('Endurance')
repby = repby.concat('(體質)')
torep = torep.concat('Intelligence')
repby = repby.concat('(智力)')
torep = torep.concat('Wisdom')
repby = repby.concat('(感知)')
torep = torep.concat('Magical Defense')
repby = repby.concat('(魔法緩傷)')
torep = torep.concat('Resist Chance')
repby = repby.concat('(抵抗率)')
torep = torep.concat('Physical Crit Chance')
repby = repby.concat('(物理暴擊率)')
torep = torep.concat('Magical Crit Chance')
repby = repby.concat('(魔法暴擊率)')
//torep = torep.concat('')
//repby = repby.concat('')
}

function eqmthh(eminn){ 
	try{
		if(document.location.href.match("http://hentaiverse.org/pages/showequip.php"))
		{
			temp=document.querySelectorAll(".fd4")
			name=""

			if(temp.length==2)em=temp[0].textContent+" "+temp[1].textContent.replace("The","the")
				else em=temp[0].textContent

			}
		else em=eminn.innerHTML.match(/([>]|[>\[\]0-9A-Z]+)(Fine|Super|Exquisite|Average|Crude|Fair|Magnificent|Legendary|Peerless)[a-zA-Z- ]*/g)
	}
catch(e){}
if(em==null)return eminn.innerHTML
var eqc1 = new Array();	
var eqc2 = new Array();	
var eqc3 = new Array();	
var eqc4 = new Array();
var eqac = new Array();	
var eqe1 = new Array();	
var eqe2 = new Array();
var eqe3 = new Array();
var eqe4 = new Array();
var eqae = new Array();
var emc = new Array();
var eqe5 = new Array();
var eqc5 = new Array();
eq1()
eq2()
eq3()
eq4()
eq5()
if(document.location.href.match("http://hentaiverse.org/pages/showequip.php"))
{	
	try{	
		e1=eqc(em,eqe1)
		e2=eqc(em,eqe2)
		e3=eqc(em,eqe3)
		e4=eqc(em,eqe4)
		e5=eqc(em,eqe5)
		emc[0]=eqc1[e1]+' '+eqc2[e2]+' '+eqc3[e3]+' '+eqc4[e4]+' '+eqc5[e5]+'</span>'
		tempeq=eminn.innerHTML
		if(temp.length==2){
			tempeq=tempeq.replace(temp[0].textContent,"")
			tempeq=tempeq.replace(temp[1].textContent,emc[0])
		}
		else tempeq=tempeq.replace(temp[0].textContent,emc[0])
	}catch(e){}
}
else
{
	for (var i=0;i<em.length;i++){
		em[i]=em[i].replace("The","the")
		e1=eqc(em[i],eqe1)
		e2=eqc(em[i],eqe2)
		e3=eqc(em[i],eqe3)
		e4=eqc(em[i],eqe4)
		e5=eqc(em[i],eqe5)
		emc[i]=eqc1[e1]+' '+eqc2[e2]+' '+eqc3[e3]+' '+eqc4[e4]+' '+eqc5[e5]+'</span>'
	}
	tempeq=eminn.innerHTML
	for(i=0;i<emc.length; i++)	{
		tempeq=tempeq.replace(em[i],'>'+emc[i])
	}
}

	eqa()  //道具裝載
	for(i=0;i<eqae.length; i++){
		var regex = new RegExp(eqae[i],'g');
		tempeq = tempeq.replace(regex, eqac[i]);
	}
	return tempeq

function eqc(temp,eqeq){   //temp 輸入裝備名稱，eqeq列表英文
	temps=temp
	for(j=0;j<eqeq.length;j++){
		aaa=temps.match(eqeq[j])
		if(aaa!=null) return j;
	}
	return 0
}

function eqa(){

    //裝備屬性
eqae = eqae.concat('Level')
eqac = eqac.concat('裝備等級')
eqae = eqae.concat('Unassigned')
eqac = eqac.concat('未定')
eqae = eqae.concat('One-handed Weapon')
eqac = eqac.concat('單手武器')
eqae = eqae.concat('Two-handed Weapon')
eqac = eqac.concat('雙手武器')
eqae = eqae.concat(' Staff')
eqac = eqac.concat(' 法杖')
eqae = eqae.concat('Staff ')
eqac = eqac.concat(' 法杖')
eqae = eqae.concat(' 法杖 ')
eqac = eqac.concat(' Staff')
eqae = eqae.concat('Shield')
eqac = eqac.concat('盾牌')
eqae = eqae.concat('Cloth Armor')
eqac = eqac.concat('布甲')
eqae = eqae.concat('Light Armor')
eqac = eqac.concat('輕甲')
eqae = eqae.concat('Heavy Armor')
eqac = eqac.concat('重甲')
eqae = eqae.concat('Tradeable')
eqac = eqac.concat('可交易')
eqae = eqae.concat('Untradeable')
eqac = eqac.concat('不可交易')
eqae = eqae.concat('Soulbound')
eqac = eqac.concat('靈魂連結')		
eqae = eqae.concat('Potency Tier');
eqac = eqac.concat('潛能層級');
eqae = eqae.concat('Condition');
eqac = eqac.concat('耐久度');
eqae = eqae.concat('Attack Accuracy')
eqac = eqac.concat('物理命中')
eqae = eqae.concat('Attack Crit Chance')
eqac = eqac.concat('物理爆擊率')
eqae = eqae.concat('Attack Crit Damage')
eqac = eqac.concat('物理爆擊傷害')
eqae = eqae.concat('Physical Damage')
eqac = eqac.concat('物理傷害')
eqae = eqae.concat('Physical Hit Chance')
eqac = eqac.concat('物理命中') 
eqae = eqae.concat('Physical Crit Chance')
eqac = eqac.concat('物理暴擊') 
eqae = eqae.concat('Attack Damage')
eqac = eqac.concat('攻擊傷害')
eqae = eqae.concat('Damage Mitigations')
eqac = eqac.concat('傷害減免')
eqae = eqae.concat('Parry Chance')
eqac = eqac.concat('招架概率')
eqae = eqae.concat('Magic Accuracy')
eqac = eqac.concat('魔法命中')
eqae = eqae.concat('Magic Damage')
eqac = eqac.concat('魔法傷害')
eqae = eqae.concat('Magic Crit Chance')
eqac = eqac.concat('魔法暴擊率')
eqae = eqae.concat('Magic Critical')
eqac = eqac.concat('魔法暴擊')
eqae = eqae.concat('Spell Crit Damage')
eqac = eqac.concat('魔法暴擊傷害')
eqae = eqae.concat('Mana Conservation')
eqac = eqac.concat('魔法節省')
eqae = eqae.concat('Counter-Resist')
eqac = eqac.concat('無視魔免')
eqae = eqae.concat('Physical Mitigation')
eqac = eqac.concat('物理緩傷')
eqae = eqae.concat('Magical Mitigation')
eqac = eqac.concat('魔法減傷')
eqae = eqae.concat('Block Chance')
eqac = eqac.concat('格擋概率')
eqae = eqae.concat('Upgrades and Enchantments');
eqac = eqac.concat('升級與附魔');
eqae = eqae.concat('Primary Attributes')
eqac = eqac.concat('屬性(PAB)')
eqae = eqae.concat('Evade Chance')
eqac = eqac.concat('迴避概率')
eqae = eqae.concat('Casting Speed')
eqac = eqac.concat('詠唱速度')
eqae = eqae.concat('Resist Chance')
eqac = eqac.concat('魔免概率')
eqae = eqae.concat(' Spell Damage')
eqac = eqac.concat('傷害加成(EDB)')
eqae = eqae.concat('Spell Damage')
eqac = eqac.concat('傷害加成(EDB)')
eqae = eqae.concat('Siphon Spirit')
eqac = eqac.concat('靈力吸取')
eqae = eqae.concat('Siphon Magic');
eqac = eqac.concat('魔力吸取');
eqae = eqae.concat('Siphon Health')
eqac = eqac.concat('生命吸取')
eqae = eqae.concat('Ether Theft')
eqac = eqac.concat('魔力回流')
eqae = eqae.concat('Penetrated Armor');
eqac = eqac.concat('破甲');
eqae = eqae.concat('Swift Strike')
eqac = eqac.concat('迅捷打擊')
eqae = eqae.concat('Attack Speed')
eqac = eqac.concat('增加攻速')
eqae = eqae.concat('Current Owner')
eqac = eqac.concat('持有者')
eqae = eqae.concat('Ether Tap')
eqac = eqac.concat('魔力回流')
eqae = eqae.concat('Elemental Strike')
eqac = eqac.concat('屬性攻擊')
eqae = eqae.concat('Bleeding Wound')
eqac = eqac.concat('流血')
eqae = eqae.concat('Lasts for')
eqac = eqac.concat('持續')
eqae = eqae.concat('Stunned')
eqac = eqac.concat('眩暈')
eqae = eqae.concat('turns')
eqac = eqac.concat('回合')
eqae = eqae.concat('Interference')
eqac = eqac.concat('干涉')
eqae = eqae.concat('Burden');
eqac = eqac.concat('負重');
eqae = eqae.concat('Strength');
eqac = eqac.concat('力量');
eqae = eqae.concat('Dexterity');
eqac = eqac.concat('靈巧');
eqae = eqae.concat('Agility');
eqac = eqac.concat('敏捷');
eqae = eqae.concat('Endurance');
eqac = eqac.concat('體質');
eqae = eqae.concat('Intelligence');
eqac = eqac.concat('智力');
eqae = eqae.concat('Wisdom');
eqac = eqac.concat('感知');
eqae = eqae.concat(' chance');
eqac = eqac.concat('機率');
eqae = eqae.concat('Crushing');
eqac = eqac.concat('破碎');
eqae = eqae.concat('Piercing');
eqac = eqac.concat('穿刺');
eqae = eqae.concat('Slashing');
eqac = eqac.concat('斬擊');
eqae = eqae.concat(' Damage');
eqac = eqac.concat('傷害');
eqae = eqae.concat(' Hit Chance');
eqac = eqac.concat('命中');
eqae = eqae.concat(' Crit Chance');
eqac = eqac.concat('暴擊率');
eqae = eqae.concat(' Defense');
eqac = eqac.concat('防禦');
eqae = eqae.concat(' Mitigation');
eqac = eqac.concat('緩傷');
eqae = eqae.concat(' DOT');
eqac = eqac.concat('持續性傷害');
eqae = eqae.concat(' Proficiency');
eqac = eqac.concat('熟練度(Pro)');
eqae = eqae.concat('Proficiency');
eqac = eqac.concat('熟練度(Pro)');
eqae = eqae.concat('>Elemental');
eqac = eqac.concat('>元素');
eqae = eqae.concat('Divine');
eqac = eqac.concat('聖');
eqae = eqae.concat('Forbidden');
eqac = eqac.concat('暗');
eqae = eqae.concat('Deprecating');
eqac = eqac.concat('減益');
eqae = eqae.concat('Supportive');
eqac = eqac.concat('輔助');
eqae = eqae.concat('>Fire');
eqac = eqac.concat('>火焰');
eqae = eqae.concat('>Cold');
eqac = eqac.concat('>冰霜');
eqae = eqae.concat('>Elec');
eqac = eqac.concat('>閃電');
eqae = eqae.concat('>Wind');
eqac = eqac.concat('>狂風');
eqae = eqae.concat('>Holy');
eqac = eqac.concat('>神聖');
eqae = eqae.concat('>Dark');
eqac = eqac.concat('>黑暗');
eqae = eqae.concat('Void ');
eqac = eqac.concat('虛空');
eqae = eqae.concat('Void');
eqac = eqac.concat('虛空');
eqae = eqae.concat('points');
eqac = eqac.concat('點');
eqae = eqae.concat(' Strike');
eqac = eqac.concat('衝擊');
eqae = eqae.concat('Strike');
eqac = eqac.concat('衝擊');
eqae = eqae.concat('None');
eqac = eqac.concat('無');
//道具界屬性
eqae = eqae.concat('Physical');
eqac = eqac.concat('物理');
eqae = eqae.concat('Magical');
eqac = eqac.concat('魔法');
eqae = eqae.concat('Hollowforged');
eqac = eqac.concat('虛空化');
eqae = eqae.concat(' Bonus');
eqac = eqac.concat('加成');
eqae = eqae.concat('Counter-Parry');
eqac = eqac.concat('反制招架');
eqae = eqae.concat('proof');
eqac = eqac.concat('抵禦');
eqae = eqae.concat('Annihilator');
//eqac = eqac.concat('殲滅者');
eqac = eqac.concat('魔法暴傷');
eqae = eqae.concat('Archmage');
//eqac = eqac.concat('大法師');
eqac = eqac.concat('魔法傷害');
eqae = eqae.concat('Butcher');
//eqac = eqac.concat('屠夫');
eqac = eqac.concat('武器傷害');
eqae = eqae.concat('Capacitor');
//eqac = eqac.concat('魔力電容');
eqac = eqac.concat('增加魔力');
eqae = eqae.concat('Economizer');
//eqac = eqac.concat('節能裝置');	 
eqac = eqac.concat('魔力節省');
eqae = eqae.concat('Fatality');
//eqac = eqac.concat('致命性');
eqac = eqac.concat('武器暴傷');
eqae = eqae.concat('Juggernaut');
//eqac = eqac.concat('重裝盔甲');
eqac = eqac.concat('增加生命');
eqae = eqae.concat('Overpower');
//eqac = eqac.concat('壓制');
eqac = eqac.concat('反制招架');
eqae = eqae.concat('Penetrator');
//eqac = eqac.concat('滲透');
eqac = eqac.concat('反制抵抗');
eqae = eqae.concat('Spellweaver');
//eqac = eqac.concat('織法者');
eqac = eqac.concat('施法速度 ');
eqae = eqae.concat('Swift Strike');
//eqac = eqac.concat('電光石火');	
eqac = eqac.concat('提升攻速');
eqae = eqae.concat('');
eqac = eqac.concat('');
eqae = eqae.concat('');
eqac = eqac.concat('');

}

function eq5(){
	
    eqe5 = eqe5.concat('ddsezxcwer')
    eqc5 = eqc5.concat('');  //如果出現問號絕對有問題
    eqe5 = eqe5.concat('Buckler');
    eqc5 = eqc5.concat('');
    eqe5 = eqe5.concat('Kite Shield');
    eqc5 = eqc5.concat('');
    eqe5 = eqe5.concat('Tower Shield');
    eqc5 = eqc5.concat('');
    // 單手武器類
    eqe5 = eqe5.concat('Dagger');
    eqc5 = eqc5.concat('匕首(單)');
    eqe5 = eqe5.concat('Shortsword');
    eqc5 = eqc5.concat('短劍(單)');
    eqe5 = eqe5.concat('Wakizashi');
    eqc5 = eqc5.concat('脇差(單)');
    eqe5 = eqe5.concat('Axe');
    eqc5 = eqc5.concat('斧(單)');
    eqe5 = eqe5.concat('Club');
    eqc5 = eqc5.concat('棍(單)');
    eqe5 = eqe5.concat('Rapier');
    eqc5 = eqc5.concat('西洋劍(單)');
    //雙手
    eqe5 = eqe5.concat('Longsword');
    eqc5 = eqc5.concat('長劍(雙)');
    eqe5 = eqe5.concat('Scythe');
    eqc5 = eqc5.concat('鐮刀(雙)');
    eqe5 = eqe5.concat('Katana');
    eqc5 = eqc5.concat('太刀(雙)');
    eqe5 = eqe5.concat('Mace');
    eqc5 = eqc5.concat('重槌(雙)');
    eqe5 = eqe5.concat('Estoc');
    eqc5 = eqc5.concat('刺劍(雙)');
    //法杖
    eqe5 = eqe5.concat('Staff');
    eqc5 = eqc5.concat('法杖');
    //布甲
    eqe5 = eqe5.concat('Cap');
    eqc5 = eqc5.concat('兜帽');
    eqe5 = eqe5.concat('Robe');
    eqc5 = eqc5.concat('長袍');
    eqe5 = eqe5.concat('Gloves');
    eqc5 = eqc5.concat('手套');
    eqe5 = eqe5.concat('Pants');
    eqc5 = eqc5.concat('短褲');
    eqe5 = eqe5.concat('Shoes');
    eqc5 = eqc5.concat('鞋');
    //輕甲
    eqe5 = eqe5.concat('Helmet');
    eqc5 = eqc5.concat('頭盔');
    eqe5 = eqe5.concat('Breastplate');
    eqc5 = eqc5.concat('護胸');
    eqe5 = eqe5.concat('Gauntlets');
    eqc5 = eqc5.concat('手套');
    eqe5 = eqe5.concat('Leggings');
    eqc5 = eqc5.concat('綁腿');
    //重甲
    eqe5 = eqe5.concat('Cuirass');
    eqc5 = eqc5.concat('胸甲');
    eqe5 = eqe5.concat('Armor');
    eqc5 = eqc5.concat('盔甲');
    eqe5 = eqe5.concat('Sabatons');
    eqc5 = eqc5.concat('重靴');
    eqe5 = eqe5.concat('Boots');
    eqc5 = eqc5.concat('長靴');
    eqe5 = eqe5.concat('Greaves');
    eqc5 = eqc5.concat('護腿');
    }

function eq4(){
	/////////////////////////////盾或者材料,武器不會出現這個
    eqe4 = eqe4.concat('ddsezxcwer');//防止空缺
    eqc4 = eqc4.concat('');
    //盾
    eqe4 = eqe4.concat('Buckler');
    eqc4 = eqc4.concat('圓盾');
    eqe4 = eqe4.concat('Kite Shield');
    eqc4 = eqc4.concat('鳶盾');
    eqe4 = eqe4.concat('Tower Shield');
    eqc4 = eqc4.concat('塔盾');
    eqe4 = eqe4.concat('Force Shield');
    eqc4 = eqc4.concat('<span style=\"background:#ffa500\" >力場盾</span>');
    ////////////////////////材質前綴////////////////////////
    //布甲
    eqe4 = eqe4.concat('Cotton ');
    eqc4 = eqc4.concat('棉質(布)');
    eqe4 = eqe4.concat('Gossamer');
    eqc4 = eqc4.concat('薄紗(布)');
    eqe4 = eqe4.concat('Phase');
    eqc4 = eqc4.concat('<span style=\"background:#ffa500\" >相位</span><span style=\"background:#FFFFFF;color:#000000\" >(布)</span>');
    //輕甲
    eqe4 = eqe4.concat('Leather');
    eqc4 = eqc4.concat('皮革<span style=\"background:#d498ff;color:#FFFFFF\" >(輕)</span>');
    eqe4 = eqe4.concat('Kevlar');
    eqc4 = eqc4.concat('凱夫拉<span style=\"background:#d498ffe;color:#FFFFFF\" >(輕)</span>');
    eqe4 = eqe4.concat('Shade');
    eqc4 = eqc4.concat('<span style=\"background:#ffa500\" >暗影</span><span style=\"background:#d498ff;color:#FFFFFF\" >(輕)</span>');
    //重甲
    eqe4 = eqe4.concat('Plate');
    eqc4 = eqc4.concat('板甲<span style=\"background:#6b06b4;color:#FFFFFF\" >(重)</span>');
    eqe4 = eqe4.concat('Power');
    eqc4 = eqc4.concat('<span style=\"background:#ffa500\" >動力</span><span style=\"background:#6b06b4;color:#FFFFFF\" >(重)</span>');
    //法杖
    eqe4 = eqe4.concat('Ebony');
    eqc4 = eqc4.concat('*烏木');
    eqe4 = eqe4.concat('Redwood');
    eqc4 = eqc4.concat('紅木');
    eqe4 = eqe4.concat('Willow');
    eqc4 = eqc4.concat('柳木');
    eqe4 = eqe4.concat('Oak');
    eqc4 = eqc4.concat('橡木');
    eqe4 = eqe4.concat('Katalox');
    eqc4 = eqc4.concat('<span style=\"background:#ffa500\" >鐵木</span>');
}
function eq3(){

    eqe3 = eqe3.concat('adfouhasdufojxlkcvo')//防止空缺
    eqc3 = eqc3.concat('')    
///////////////////////////////////////////防具後綴////////////////////////////////////////////
    eqe3 = eqe3.concat('of the Cheetah')
    eqc3 = eqc3.concat('獵豹之')
    eqe3 = eqe3.concat('of Negation')
    eqc3 = eqc3.concat('否定之')
    eqe3 = eqe3.concat('of the Shadowdancer')
    eqc3 = eqc3.concat('影武者')
    eqe3 = eqe3.concat('of the Arcanist')
    eqc3 = eqc3.concat('奧術師')
    eqe3 = eqe3.concat('of the Fleet')
    eqc3 = eqc3.concat('迅捷之')
    eqe3 = eqe3.concat('Spirit-ward')
    eqc3 = eqc3.concat('暗防')
    eqe3 = eqe3.concat('of the Fire-eater')
    eqc3 = eqc3.concat('火防')
    eqe3 = eqe3.concat('Fire-eater')
    eqc3 = eqc3.concat('火防')
    eqe3 = eqe3.concat('of the Thunder-child')
    eqc3 = eqc3.concat('雷防')
    eqe3 = eqe3.concat('of the Wind-waker')
    eqc3 = eqc3.concat('防風')
    eqe3 = eqe3.concat('of the Spirit-ward')
    eqc3 = eqc3.concat('暗防')
    eqe3 = eqe3.concat('of Dampening')
    eqc3 = eqc3.concat('防碎')
    eqe3 = eqe3.concat('of Stoneskin')
    eqc3 = eqc3.concat('防斬')
    eqe3 = eqe3.concat('of Deflection')
    eqc3 = eqc3.concat('防刺')
    eqe3 = eqe3.concat('of the Battlecaster');
    eqc3 = eqc3.concat('魔戰');
    eqe3 = eqe3.concat('of the Nimble');
    eqc3 = eqc3.concat('招架');
    eqe3 = eqe3.concat('of the Barrier')
    eqc3 = eqc3.concat('格擋')
    eqe3 = eqe3.concat('of Protection')
    eqc3 = eqc3.concat('物防')
    eqe3 = eqe3.concat('of Warding')
    eqc3 = eqc3.concat('抗魔')
    eqe3 = eqe3.concat('of the Raccoon')
    eqc3 = eqc3.concat('招架')
    eqe3 = eqe3.concat('of the Frost-born')
    eqc3 = eqc3.concat('寒冰')
////////////////////////////////////////////////////武器後綴/////////////////////////////////
    eqe3 = eqe3.concat('of Slaughter');
    eqc3 = eqc3.concat('<span style=\"background:#FF0000;color:#FFFFFF\" >殺戮</span>');
    eqe3 = eqe3.concat('of Swiftness');
    eqc3 = eqc3.concat('加速');
    eqe3 = eqe3.concat('of Balance');
    eqc3 = eqc3.concat('<span style=\"background:#c8c87c\;color:#000000\" >平衡</span>');
    eqe3 = eqe3.concat('of the Battlecaster');
    eqc3 = eqc3.concat('魔戰');
    eqe3 = eqe3.concat('of the Banshee');
    eqc3 = eqc3.concat('吸魂');
    eqe3 = eqe3.concat('of the Illithid');
    eqc3 = eqc3.concat('吸魔');
    eqe3 = eqe3.concat('of the Vampire');
    eqc3 = eqc3.concat('吸血');
    eqe3 = eqe3.concat('of Destruction')
    eqc3 = eqc3.concat('<span style=\"background:#9400d3\;color:#FFFFFF" >毀滅之</span>')
    eqe3 = eqe3.concat('of Surtr')
    eqc3 = eqc3.concat('<span style=\"background:#f97c7c\;color:#000000" >蘇爾特</span>')
    eqe3 = eqe3.concat('of Niflheim')
    eqc3 = eqc3.concat('<span style=\"background:#94c2f5\;color:#000000" >尼芙菲姆</span>')
    eqe3 = eqe3.concat('of Mjolnir')
    eqc3 = eqc3.concat('<span style=\"background:#fcff66\;color:#000000" >姆喬爾尼爾</span>')
    eqe3 = eqe3.concat('of Freyr')
    eqc3 = eqc3.concat('<span style=\"background:#7ff97c\;color:#000000" >弗瑞爾</span>')
    eqe3 = eqe3.concat('of Heimdall')
    eqc3 = eqc3.concat('<span style=\"background:#ffffff\;color:#000000" >海姆達</span>')
    eqe3 = eqe3.concat('of Fenrir')
    eqc3 = eqc3.concat('<span style=\"background:#000000\;color:#ffffff" >芬里爾</span>')
    eqe3 = eqe3.concat('of Focus')
    eqc3 = eqc3.concat('專注')
    eqe3 = eqe3.concat('of the Elementalist')
    eqc3 = eqc3.concat('元素使')
    eqe3 = eqe3.concat('of the Heaven-sent')
    eqc3 = eqc3.concat('天堂')
    eqe3 = eqe3.concat('of the Demon-fiend')
    eqc3 = eqc3.concat('惡魔')
    eqe3 = eqe3.concat('of the Earth-walker')
    eqc3 = eqc3.concat('地行者')
    eqe3 = eqe3.concat('of the Priestess')
    eqc3 = eqc3.concat('牧師')
    eqe3 = eqe3.concat('of the Curse-weaver')
    eqc3 = eqc3.concat('咒術師')
    eqe3 = eqe3.concat('of the Thrice-blessed')
    eqc3 = eqc3.concat('聖防')
		
}

function eq2(){

///////////////武器或者防具屬性/////////////////
    eqe2 = eqe2.concat('dfgdsfgsdge');//防止空缺
    eqc2 = eqc2.concat('');   
    eqe2 = eqe2.concat('Radiant');
    eqc2 = eqc2.concat('<span style=\"background:#ffffff\;color:#000000" >魔光的</span>');
    eqe2 = eqe2.concat('Charged');
    eqc2 = eqc2.concat('詠唱的');
    eqe2 = eqe2.concat('Mystic');
    eqc2 = eqc2.concat('神秘的');
    eqe2 = eqe2.concat('Charged');
    eqc2 = eqc2.concat('加速的');
    eqe2 = eqe2.concat('Amber');
    eqc2 = eqc2.concat('琥珀的');
    eqe2 = eqe2.concat('Mithril');
    eqc2 = eqc2.concat('秘銀的');
    eqe2 = eqe2.concat('Agile');
    eqc2 = eqc2.concat('俊敏的');
    eqe2 = eqe2.concat('Zircon');
    eqc2 = eqc2.concat('鋯石的');
    eqe2 = eqe2.concat('Frugal');
    eqc2 = eqc2.concat('節約的');
    eqe2 = eqe2.concat('Jade');
    eqc2 = eqc2.concat('翡翠的');
    eqe2 = eqe2.concat('Cobalt');
    eqc2 = eqc2.concat('冰藍的');
    eqe2 = eqe2.concat('Ruby');
    eqc2 = eqc2.concat('紅寶石');
    eqe2 = eqe2.concat('Astral');
    eqc2 = eqc2.concat('五芒星');
    eqe2 = eqe2.concat('Onyx');
    eqc2 = eqc2.concat('縞瑪瑙');
    eqe2 = eqe2.concat('Savage');
    eqc2 = eqc2.concat('殘暴的');
    eqe2 = eqe2.concat('Reinforced');
    eqc2 = eqc2.concat('堅固的');
    eqe2 = eqe2.concat('Shielding');
    eqc2 = eqc2.concat('盾化的');
    eqe2 = eqe2.concat('Arctic')
    eqc2 = eqc2.concat('<span style=\"background:#94c2f5\;color:#000000" >極寒之</span>')
    eqe2 = eqe2.concat('Fiery')
    eqc2 = eqc2.concat('<span style=\"background:#f97c7c\;color:#000000" >灼熱之</span>')
    eqe2 = eqe2.concat('Shocking')
    eqc2 = eqc2.concat('<span style=\"background:#fcff66\;color:#000000" >閃電之</span>')
    eqe2 = eqe2.concat('Tempestuous')
    eqc2 = eqc2.concat('<span style=\"background:#a9f94f\;color:#000000" >風暴之</span>')
    eqe2 = eqe2.concat('Hallowed')
    eqc2 = eqc2.concat('<span style=\"background:#ffffff\;color:#000000" >神聖之</span>')
    eqe2 = eqe2.concat('Demonic')
    eqc2 = eqc2.concat('<span style=\"background:#000000\;color:#ffffff" >惡魔之</span>')
    eqe2 = eqe2.concat('Ethereal')
    eqc2 = eqc2.concat('<span style=\"background:#ffffff\;color:#5c5a5a" >虛空的</span>')

}
function eq1()
{
    /////////////////品質//////////
    eqe1 = eqe1.concat('Crude')
    eqc1 = eqc1.concat('粗糙')
    eqe1 = eqe1.concat('Fair');
    eqc1 = eqc1.concat('尚可');
    eqe1 = eqe1.concat('Average');
    eqc1 = eqc1.concat('普通');
    eqe1 = eqe1.concat('Fine')
    eqc1 = eqc1.concat('優質(絕版)')
    eqe1 = eqe1.concat('Superior');
    eqc1 = eqc1.concat('<span style=\"background:#44c554\;color:#ffffff" >優秀</span>'); 
    eqe1 = eqe1.concat('Exquisite');
    eqc1 = eqc1.concat('<span style=\"background:#6060f9\;color:#ffffff" >精緻</span>'); 
    eqe1 = eqe1.concat('Magnificent');
    eqc1 = eqc1.concat('<span style=\"background:#0000ae\;color:#ffffff" >華麗</span>'); 
    eqe1 = eqe1.concat('Legendary');
    eqc1 = eqc1.concat('<span style=\"background:#f5b9cd\;color:#000000" >☆傳奇☆</span>'); 	
    eqe1 = eqe1.concat('Peerless');
    eqc1 = eqc1.concat('<span style=\"background:#fbc93e\;color:#000000" >★無雙★</span>'); 
}
}
}