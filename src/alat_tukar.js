const _0x15bfb8=_0x41fb;(function(_0xd3a987,_0x2a8c2d){const _0x4a0630=_0x41fb,_0x57ff9a=_0xd3a987();while(!![]){try{const _0x74e34a=parseInt(_0x4a0630(0x116))/0x1+-parseInt(_0x4a0630(0x114))/0x2+parseInt(_0x4a0630(0x10a))/0x3*(parseInt(_0x4a0630(0x103))/0x4)+-parseInt(_0x4a0630(0x102))/0x5+parseInt(_0x4a0630(0x112))/0x6*(-parseInt(_0x4a0630(0x10d))/0x7)+parseInt(_0x4a0630(0x100))/0x8+-parseInt(_0x4a0630(0x115))/0x9*(parseInt(_0x4a0630(0x113))/0xa);if(_0x74e34a===_0x2a8c2d)break;else _0x57ff9a['push'](_0x57ff9a['shift']());}catch(_0x4dafbc){_0x57ff9a['push'](_0x57ff9a['shift']());}}}(_0x4d0a,0x1c8f2));function _0x41fb(_0xc988e1,_0x3fb4dd){const _0x4d0a22=_0x4d0a();return _0x41fb=function(_0x41fb66,_0x4678cb){_0x41fb66=_0x41fb66-0xfe;let _0x23ed88=_0x4d0a22[_0x41fb66];return _0x23ed88;},_0x41fb(_0xc988e1,_0x3fb4dd);}function hi(){const _0x56be30=_0x41fb;console[_0x56be30(0xfe)](_0x56be30(0x108));}hi();const fs=require('fs');let _inventoryOrang=JSON[_0x15bfb8(0x119)](fs[_0x15bfb8(0x11b)]('./src/inventory.json')),besiAwal=global[_0x15bfb8(0x10b)]['besiawal'],goldAwal=global[_0x15bfb8(0x10b)][_0x15bfb8(0x11d)],emeraldAwal=global[_0x15bfb8(0x10b)][_0x15bfb8(0x117)],umpanAwal=global['rpg'][_0x15bfb8(0x109)],potionAwal=global[_0x15bfb8(0x10b)][_0x15bfb8(0x10f)];function _0x4d0a(){const _0x259bba=['push','log','emerald','1682352SwsZYb','forEach','414710CcrCxj','2744FIiSlk','Cho','mahkota','stringify','besi','Hello\x20World!','umpanawal','276BKMLEE','rpg','keys','7ILcOBO','token','potionawal','./src/inventory.json','writeFileSync','362910YQlWTG','607030rcBQUh','146116NTGcaN','18OspUGk','181463nfqviK','emeraldawal','gold','parse','potion','readFileSync','umpan','goldawal'];_0x4d0a=function(){return _0x259bba;};return _0x4d0a();}const addInventori=_0x2caaba=>{const _0x1589ef=_0x15bfb8,_0x24f37a={'id':_0x2caaba,'besi':besiAwal,'gold':goldAwal,'emerald':emeraldAwal,'umpan':umpanAwal,'potion':potionAwal,'mahkota':0x0,'Cho':0x0,'token':0x0};_inventoryOrang[_0x1589ef(0x11e)](_0x24f37a),fs[_0x1589ef(0x111)](_0x1589ef(0x110),JSON[_0x1589ef(0x106)](_inventoryOrang));},cekInventoryAdaAtauGak=_0x501500=>{const _0x26d63f=_0x15bfb8;let _0x24a8c5=![];return Object[_0x26d63f(0x10c)](_inventoryOrang)['forEach'](_0x3cafc2=>{_inventoryOrang[_0x3cafc2]['id']===_0x501500&&(_0x24a8c5=!![]);}),_0x24a8c5;},addtoken=(_0x1a6fcb,_0x2a65d9)=>{const _0x1bb394=_0x15bfb8;let _0x4ce14f=![];Object[_0x1bb394(0x10c)](_inventoryOrang)['forEach'](_0x1a20f4=>{_inventoryOrang[_0x1a20f4]['id']===_0x1a6fcb&&(_0x4ce14f=_0x1a20f4);}),_0x4ce14f!==![]&&(_inventoryOrang[_0x4ce14f]['token']+=_0x2a65d9,fs[_0x1bb394(0x111)](_0x1bb394(0x110),JSON['stringify'](_inventoryOrang)));},kurangtoken=(_0x587cab,_0x1424db)=>{const _0x5655c0=_0x15bfb8;let _0x14dd10=![];Object[_0x5655c0(0x10c)](_inventoryOrang)[_0x5655c0(0x101)](_0x7b4355=>{_inventoryOrang[_0x7b4355]['id']===_0x587cab&&(_0x14dd10=_0x7b4355);}),_0x14dd10!==![]&&(_inventoryOrang[_0x14dd10][_0x5655c0(0x10e)]-=_0x1424db,fs[_0x5655c0(0x111)](_0x5655c0(0x110),JSON[_0x5655c0(0x106)](_inventoryOrang)));},gettoken=_0x4cd383=>{const _0xf07762=_0x15bfb8;let _0x559ae0=![];Object['keys'](_inventoryOrang)[_0xf07762(0x101)](_0x6870cf=>{_inventoryOrang[_0x6870cf]['id']===_0x4cd383&&(_0x559ae0=_0x6870cf);});if(_0x559ae0!==![])return _inventoryOrang[_0x559ae0][_0xf07762(0x10e)];},addCho=(_0x9057c9,_0x19ef99)=>{const _0x59d676=_0x15bfb8;let _0x4e3398=![];Object[_0x59d676(0x10c)](_inventoryOrang)[_0x59d676(0x101)](_0x548089=>{_inventoryOrang[_0x548089]['id']===_0x9057c9&&(_0x4e3398=_0x548089);}),_0x4e3398!==![]&&(_inventoryOrang[_0x4e3398][_0x59d676(0x104)]+=_0x19ef99,fs[_0x59d676(0x111)](_0x59d676(0x110),JSON['stringify'](_inventoryOrang)));},kurangCho=(_0x323547,_0x5a9f31)=>{const _0x8b9fce=_0x15bfb8;let _0x14b5fd=![];Object[_0x8b9fce(0x10c)](_inventoryOrang)[_0x8b9fce(0x101)](_0x10af7d=>{_inventoryOrang[_0x10af7d]['id']===_0x323547&&(_0x14b5fd=_0x10af7d);}),_0x14b5fd!==![]&&(_inventoryOrang[_0x14b5fd][_0x8b9fce(0x104)]-=_0x5a9f31,fs[_0x8b9fce(0x111)](_0x8b9fce(0x110),JSON[_0x8b9fce(0x106)](_inventoryOrang)));},getCho=_0x307b59=>{const _0x3ef793=_0x15bfb8;let _0x404556=![];Object['keys'](_inventoryOrang)['forEach'](_0x223fa9=>{_inventoryOrang[_0x223fa9]['id']===_0x307b59&&(_0x404556=_0x223fa9);});if(_0x404556!==![])return _inventoryOrang[_0x404556][_0x3ef793(0x104)];},addBesi=(_0x124b6c,_0x2b492d)=>{const _0x2a0b11=_0x15bfb8;let _0x38019b=![];Object[_0x2a0b11(0x10c)](_inventoryOrang)[_0x2a0b11(0x101)](_0x2c92d0=>{_inventoryOrang[_0x2c92d0]['id']===_0x124b6c&&(_0x38019b=_0x2c92d0);}),_0x38019b!==![]&&(_inventoryOrang[_0x38019b]['besi']+=_0x2b492d,fs['writeFileSync']('./src/inventory.json',JSON[_0x2a0b11(0x106)](_inventoryOrang)));},kurangBesi=(_0x6aa593,_0x139a7d)=>{const _0x57705b=_0x15bfb8;let _0x419169=![];Object[_0x57705b(0x10c)](_inventoryOrang)['forEach'](_0x25434f=>{_inventoryOrang[_0x25434f]['id']===_0x6aa593&&(_0x419169=_0x25434f);}),_0x419169!==![]&&(_inventoryOrang[_0x419169]['besi']-=_0x139a7d,fs[_0x57705b(0x111)](_0x57705b(0x110),JSON['stringify'](_inventoryOrang)));},getBesi=_0x2d45ea=>{const _0x4ab35f=_0x15bfb8;let _0x50f9c4=![];Object[_0x4ab35f(0x10c)](_inventoryOrang)[_0x4ab35f(0x101)](_0x1de45f=>{_inventoryOrang[_0x1de45f]['id']===_0x2d45ea&&(_0x50f9c4=_0x1de45f);});if(_0x50f9c4!==![])return _inventoryOrang[_0x50f9c4][_0x4ab35f(0x107)];},addEmas=(_0x43a1f1,_0x37a916)=>{const _0x2eb097=_0x15bfb8;let _0x8e949d=![];Object[_0x2eb097(0x10c)](_inventoryOrang)['forEach'](_0x5dd241=>{_inventoryOrang[_0x5dd241]['id']===_0x43a1f1&&(_0x8e949d=_0x5dd241);}),_0x8e949d!==![]&&(_inventoryOrang[_0x8e949d]['gold']+=_0x37a916,fs[_0x2eb097(0x111)](_0x2eb097(0x110),JSON['stringify'](_inventoryOrang)));},kurangEmas=(_0x1142f2,_0x148129)=>{const _0x3b7dc0=_0x15bfb8;let _0x221653=![];Object['keys'](_inventoryOrang)['forEach'](_0x5b3a85=>{_inventoryOrang[_0x5b3a85]['id']===_0x1142f2&&(_0x221653=_0x5b3a85);}),_0x221653!==![]&&(_inventoryOrang[_0x221653][_0x3b7dc0(0x118)]-=_0x148129,fs[_0x3b7dc0(0x111)]('./src/inventory.json',JSON[_0x3b7dc0(0x106)](_inventoryOrang)));},getEmas=_0x6c236b=>{const _0xd1f9af=_0x15bfb8;let _0xa3d27c=![];Object['keys'](_inventoryOrang)[_0xd1f9af(0x101)](_0x4e6657=>{_inventoryOrang[_0x4e6657]['id']===_0x6c236b&&(_0xa3d27c=_0x4e6657);});if(_0xa3d27c!==![])return _inventoryOrang[_0xa3d27c][_0xd1f9af(0x118)];},addEmerald=(_0x5701fa,_0x198a59)=>{const _0x527f24=_0x15bfb8;let _0x2e3747=![];Object[_0x527f24(0x10c)](_inventoryOrang)[_0x527f24(0x101)](_0x4b8a48=>{_inventoryOrang[_0x4b8a48]['id']===_0x5701fa&&(_0x2e3747=_0x4b8a48);}),_0x2e3747!==![]&&(_inventoryOrang[_0x2e3747]['emerald']+=_0x198a59,fs[_0x527f24(0x111)](_0x527f24(0x110),JSON[_0x527f24(0x106)](_inventoryOrang)));},kurangEmerald=(_0x4c4f17,_0x47cef0)=>{const _0xd87b83=_0x15bfb8;let _0x550451=![];Object[_0xd87b83(0x10c)](_inventoryOrang)[_0xd87b83(0x101)](_0x166dea=>{_inventoryOrang[_0x166dea]['id']===_0x4c4f17&&(_0x550451=_0x166dea);}),_0x550451!==![]&&(_inventoryOrang[_0x550451][_0xd87b83(0xff)]-=_0x47cef0,fs['writeFileSync']('./src/inventory.json',JSON['stringify'](_inventoryOrang)));},getEmerald=_0x46882b=>{let _0x364701=![];Object['keys'](_inventoryOrang)['forEach'](_0x1b9ea8=>{_inventoryOrang[_0x1b9ea8]['id']===_0x46882b&&(_0x364701=_0x1b9ea8);});if(_0x364701!==![])return _inventoryOrang[_0x364701]['emerald'];},addUmpan=(_0x2e2c8c,_0x526b07)=>{const _0x12f3e1=_0x15bfb8;let _0x388f10=![];Object['keys'](_inventoryOrang)['forEach'](_0x154b8f=>{_inventoryOrang[_0x154b8f]['id']===_0x2e2c8c&&(_0x388f10=_0x154b8f);}),_0x388f10!==![]&&(_inventoryOrang[_0x388f10][_0x12f3e1(0x11c)]+=_0x526b07,fs['writeFileSync']('./src/inventory.json',JSON[_0x12f3e1(0x106)](_inventoryOrang)));},kurangUmpan=(_0x112a80,_0x11ad52)=>{const _0x159528=_0x15bfb8;let _0x47ae7f=![];Object[_0x159528(0x10c)](_inventoryOrang)['forEach'](_0x17e4be=>{_inventoryOrang[_0x17e4be]['id']===_0x112a80&&(_0x47ae7f=_0x17e4be);}),_0x47ae7f!==![]&&(_inventoryOrang[_0x47ae7f][_0x159528(0x11c)]-=_0x11ad52,fs[_0x159528(0x111)](_0x159528(0x110),JSON[_0x159528(0x106)](_inventoryOrang)));},getUmpan=_0x5d39e5=>{const _0x294e3f=_0x15bfb8;let _0xa8cd7b=![];Object[_0x294e3f(0x10c)](_inventoryOrang)[_0x294e3f(0x101)](_0x2e4877=>{_inventoryOrang[_0x2e4877]['id']===_0x5d39e5&&(_0xa8cd7b=_0x2e4877);});if(_0xa8cd7b!==![])return _inventoryOrang[_0xa8cd7b][_0x294e3f(0x11c)];},addPotion=(_0x54479a,_0x13da37)=>{const _0x35acb9=_0x15bfb8;let _0x2f17db=![];Object[_0x35acb9(0x10c)](_inventoryOrang)['forEach'](_0x4fc9c6=>{_inventoryOrang[_0x4fc9c6]['id']===_0x54479a&&(_0x2f17db=_0x4fc9c6);}),_0x2f17db!==![]&&(_inventoryOrang[_0x2f17db][_0x35acb9(0x11a)]+=_0x13da37,fs[_0x35acb9(0x111)]('./src/inventory.json',JSON['stringify'](_inventoryOrang)));},kurangPotion=(_0x2b166e,_0x720fb5)=>{const _0x2b36cb=_0x15bfb8;let _0x37f1fb=![];Object[_0x2b36cb(0x10c)](_inventoryOrang)[_0x2b36cb(0x101)](_0x5623fb=>{_inventoryOrang[_0x5623fb]['id']===_0x2b166e&&(_0x37f1fb=_0x5623fb);}),_0x37f1fb!==![]&&(_inventoryOrang[_0x37f1fb][_0x2b36cb(0x11a)]-=_0x720fb5,fs[_0x2b36cb(0x111)](_0x2b36cb(0x110),JSON[_0x2b36cb(0x106)](_inventoryOrang)));},getPotion=_0x258193=>{const _0x17cd18=_0x15bfb8;let _0x61ee46=![];Object['keys'](_inventoryOrang)[_0x17cd18(0x101)](_0x539902=>{_inventoryOrang[_0x539902]['id']===_0x258193&&(_0x61ee46=_0x539902);});if(_0x61ee46!==![])return _inventoryOrang[_0x61ee46][_0x17cd18(0x11a)];},addMahkota=(_0x1693c0,_0x5123ec)=>{const _0x3cfc51=_0x15bfb8;let _0x2c61f7=![];Object['keys'](_inventoryOrang)['forEach'](_0x139ef6=>{_inventoryOrang[_0x139ef6]['id']===_0x1693c0&&(_0x2c61f7=_0x139ef6);}),_0x2c61f7!==![]&&(_inventoryOrang[_0x2c61f7]['mahkota']+=_0x5123ec,fs['writeFileSync']('./src/inventory.json',JSON[_0x3cfc51(0x106)](_inventoryOrang)));},KurangMahkota=(_0x53cd26,_0x85c406)=>{const _0x2535b0=_0x15bfb8;let _0x24c649=![];Object[_0x2535b0(0x10c)](_inventoryOrang)[_0x2535b0(0x101)](_0x3416a5=>{_inventoryOrang[_0x3416a5]['id']===_0x53cd26&&(_0x24c649=_0x3416a5);}),_0x24c649!==![]&&(_inventoryOrang[_0x24c649][_0x2535b0(0x105)]-=_0x85c406,fs[_0x2535b0(0x111)](_0x2535b0(0x110),JSON[_0x2535b0(0x106)](_inventoryOrang)));},getMahkota=_0x49fc9e=>{const _0x581c60=_0x15bfb8;let _0x5785d9=![];Object[_0x581c60(0x10c)](_inventoryOrang)['forEach'](_0x26945b=>{_inventoryOrang[_0x26945b]['id']===_0x49fc9e&&(_0x5785d9=_0x26945b);});if(_0x5785d9!==![])return _inventoryOrang[_0x5785d9]['mahkota'];};module['exports']={'cekInventoryAdaAtauGak':cekInventoryAdaAtauGak,'addInventori':addInventori,'addBesi':addBesi,'addEmas':addEmas,'addEmerald':addEmerald,'addUmpan':addUmpan,'addCho':addCho,'kurangCho':kurangCho,'getCho':getCho,'addPotion':addPotion,'addMahkota':addMahkota,'KurangMahkota':KurangMahkota,'getMahkota':getMahkota,'kurangBesi':kurangBesi,'kurangEmas':kurangEmas,'kurangEmerald':kurangEmerald,'kurangUmpan':kurangUmpan,'kurangPotion':kurangPotion,'getBesi':getBesi,'getEmas':getEmas,'getEmerald':getEmerald,'getUmpan':getUmpan,'getPotion':getPotion,'addtoken':addtoken,'gettoken':gettoken,'kurangtoken':kurangtoken};