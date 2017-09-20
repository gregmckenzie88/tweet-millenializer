let nlp = require('nlp_compromise');
var moment = require('moment');

module.exports = {
	cleanse: function (rawTweet){
		var newTweet = rawTweet;

		///////////////////////////////
		///      FIND & REPLACE     ///
		///////////////////////////////

		newTweet = newTweet
		// PHRASES
		.replace(/Proud of /g, 'Feeling all the feels 4 ').replace(/ proud of /g, ' feeling all the feels 4 ').replace(/ proud of, /g, ' feeling all the feels 4, ').replace(/ proud of\./g, ' feeling all the feels 4.')
		.replace(/Ability /g, 'Dank skills ').replace(/ ability /g, ' dank skills ').replace(/ ability, /g, ' dank skills, ').replace(/ ability\./g, ' dank skills.')
		.replace(/Abilities /g, 'Dank skills ').replace(/ abilities /g, ' dank skills ').replace(/ abilities, /g, ' dank skills, ').replace(/ abilities\./g, ' dank skills.')
		.replace(/Looking good /g, 'On fleek ').replace(/ looking good /g, ' on fleek ').replace(/ looking good, /g, ' on fleek, ').replace(/ looking good\./g, ' on fleek.')
		.replace(/Looking great /g, 'On fleek ').replace(/ looking great /g, ' on fleek ').replace(/ looking great, /g, ' on fleek, ').replace(/ looking great\./g, ' on fleek.')
		.replace(/Looking beautiful /g, 'On fleek ').replace(/ looking beautiful /g, ' on fleek ').replace(/ looking beautiful, /g, ' on fleek, ').replace(/ looking beautiful\./g, ' on fleek.')
		.replace(/Looking fantastic /g, 'On fleek ').replace(/ looking fantastic /g, ' on fleek ').replace(/ looking fantastic, /g, ' on fleek, ').replace(/ looking fantastic\./g, ' on fleek.')
		.replace(/Speacial thanks to /g, 'BiggupZ 2 ').replace(/ speacial thanks to /g, ' biggupZ 2 ').replace(/ speacial thanks to, /g, ' biggupZ 2, ').replace(/ speacial thanks to\./g, ' biggupZ 2.')
		.replace(/Disappointed in /g, 'Throwing srs shade on ').replace(/ disappointed in /g, ' throwing srs shade on ').replace(/ disappointed in, /g, ' throwing srs shade on, ').replace(/ disappointed in\./g, ' throwing srs shade on.')
		.replace(/There is no /g, 'Ain\'t no ').replace(/ there is no, /g, ' ain\'t no, ').replace(/ there is no /g, ' ain\'t no ').replace(/ there is no\./g, ' ain\'t no.')
		.replace(/There's no /g, 'Ain\'t no ').replace(/ there's no, /g, ' ain\'t no, ').replace(/ there's no /g, ' ain\'t no ').replace(/ there's no\./g, ' ain\'t no.')
		.replace(/There's no /g, 'Ain\'t no ').replace(/ there's no, /g, ' ain\'t no, ').replace(/ there's no /g, ' ain\'t no ').replace(/ there's no\./g, ' ain\'t no.')
		.replace(/Great performace /g, 'Savage performance ').replace(/ great performace, /g, ' savage performance, ').replace(/ great performace /g, ' savage performance ').replace(/ great performace\./g, ' savage performance.')
		.replace(/Good performace /g, 'Savage performance ').replace(/ good performace, /g, ' savage performance, ').replace(/ good performace /g, ' savage performance ').replace(/ good performace\./g, ' savage performance.')
		.replace(/City hall /g, 'City hall (my crib 👌) ').replace(/ city hall /g, ' city hall (my crib 👌) ').replace(/ city hall, /g, ' city hall (my crib 👌), ').replace(/ city hall\./g, ' city hall (my crib 👌).').replace(/ City Hall /g, ' City Hall (my crib 👌) ')
		.replace(/Celebrating /g, 'Poppin bottles 4 ').replace(/ celebrating /g, ' poppin bottles 4 ').replace(/ celebrating, /g, ' poppin bottles 4, ').replace(/ celebrating\./g, ' poppin bottles 4.')
		.replace(/Celebrated /g, 'Popped bottles 4 ').replace(/ celebrated /g, ' popped bottles 4 ').replace(/ celebrated, /g, ' popped bottles 4, ').replace(/ celebrated\./g, ' popped bottles 4.')
		.replace(/Happy to /g, 'Stoked 2 ').replace(/ happy to /g, ' stoked 2 ').replace(/ happy to, /g, ' stoked 2, ').replace(/ happy to\./g, ' stoked 2.')

		// WORDS
		.replace(/Hot /i, 'Hot🔥 ').replace(/ hot /i, ' hot🔥 ').replace(/ hot, /i, ' hot🔥, ').replace(/ hot\./i, ' hot🔥.')
		.replace(/Good /g, 'Sick ').replace(/ good /g, ' sick ').replace(/ good, /g, ' sick, ').replace(/ good\./g, ' sick.')
		.replace(/We are /g, 'We be ').replace(/ we are /g, ' we be ').replace(/ we are, /g, ' we be, ').replace(/ we are\./g, ' we be.')
		.replace(/We will /g, 'We be ').replace(/ we will /g, ' we be ').replace(/ we will, /g, ' we be, ').replace(/ we will\./g, ' we be.')
		.replace(/We’re /g, 'We be ').replace(/ we’re /g, ' we be ').replace(/ we’re, /g, ' we be, ').replace(/ we’re\./g, ' we be.')
		.replace(/Extremely /g, 'Über ').replace(/ extremely /g, ' über ').replace(/ extremely, /g, ' über, ').replace(/ extremely\./g, ' über.')
		.replace(/Extreme /g, 'X-treme ').replace(/ extreme /g, ' x-treme ').replace(/ extreme, /g, ' x-treme, ').replace(/ extreme\./g, ' x-treme.')
		.replace(/Please /g, 'Plz ').replace(/ please /g, ' plz ').replace(/ please, /g, ' plz, ').replace(/ please\./g, ' plz.')
		.replace(/Great /g, 'Sick ').replace(/ great /g, ' sick ').replace(/ great, /g, ' sick, ').replace(/ great\./g, ' sick.')
		.replace(/Terrific /g, 'Sick ').replace(/ terrific /g, ' sick ').replace(/ terrific, /g, ' sick, ').replace(/ terrific\./g, ' sick.')
		.replace(/Tomorrow /i, '2moro ').replace(/ tomorrow /i, ' 2moro ').replace(/ tomorrow, /i, ' 2moro, ').replace(/ tomorrow\./i, ' 2moro.')
		.replace(/People /g, 'Ppl ').replace(/ people /g, ' ppl ').replace(/ people, /g, ' ppl, ').replace(/ people\./g, ' ppl.')
		.replace(/Because /g, 'Cuz ').replace(/ because /g, ' cuz ').replace(/ because, /g, ' cuz, ').replace(/ because\./g, ' cuz.')
		.replace(/Support /g, '$upport ').replace(/ support /g, ' $upport ').replace(/ support, /g, ' $upport, ').replace(/ support\./g, ' $upport.')
		.replace(/Supporting /g, '$upporting ').replace(/ supporting /g, ' $upporting ').replace(/ supporting, /g, ' $upporting, ').replace(/ supporting\./g, ' $upporting.')
		.replace(/Be /g, 'B ').replace(/ be /g, ' b ').replace(/ be, /g, ' b, ').replace(/ be\./g, ' b.')
		.replace(/Possess /g, 'Flaunt ').replace(/ possess /g, ' flaunt ').replace(/ possess, /g, ' flaunt, ').replace(/ possess\./g, ' flaunt.')
		.replace(/Delighted /g, 'Stoked ').replace(/ delighted /g, ' stoked ').replace(/ delighted, /g, ' stoked, ').replace(/ delighted\./g, ' stoked.')
		.replace(/Your /g, 'Ur ').replace(/ your /g, ' ur ').replace(/ your, /g, ' ur, ').replace(/ your\./g, ' ur.')
		.replace(/Are /g, 'R ').replace(/ are /g, ' r ').replace(/ are, /g, ' r, ').replace(/ are\./g, ' r.')
		.replace(/Big /g, 'Phat ').replace(/ big /g, ' phat ').replace(/ big, /g, ' phat, ').replace(/ big\./g, ' phat.')
		.replace(/Today /g, '2Day ').replace(/Today, /g, '2Day, ').replace(/ today /g, ' 2day ').replace(/ today, /g, ' 2day, ').replace(/ today\./g, ' 2day.')
		.replace(/Tonight /g, '2nite ').replace(/tonight, /g, '2nite, ').replace(/ tonight /g, ' 2nite ').replace(/ tonight, /g, ' 2nite, ').replace(/ tonight\./g, ' 2nite.')
		.replace(/Into /g, 'In2 ').replace(/ into /g, ' in2 ').replace(/ into, /g, ' in2, ').replace(/ into\./g, ' in2.')
		.replace(/Amazing /g, 'Amazeballs ').replace(/ amazing, /g, ' amazeballs, ').replace(/ amazing /g, ' amazeballs ').replace(/ amazing\./g, ' amazeballs.')
		.replace(/Popular /g, 'Hyped ').replace(/ popular /g, ' hyped ').replace(/ popular, /g, ' hyped, ').replace(/ popular\./g, ' hyped.')
		.replace(/Recognizing /g, 'ReKonizing ').replace(/ recognizing /g, ' reKonizing ').replace(/ recognizing, /g, ' reKonizing, ').replace(/ recognizing\./g, ' reKonizing.')
		.replace(/Invest /g, 'Pump cash ').replace(/ invest /g, ' pump cash ').replace(/ invest, /g, ' pump cash, ').replace(/ invest\./g, ' pump cash.')
		.replace(/Investing /g, 'Pumpin cash ').replace(/ investing /g, ' pumpin cash ').replace(/ investing, /g, ' pumpin cash, ').replace(/ investing\./g, ' pumpin cash.')
		.replace(/Invested /g, 'Pumped cash ').replace(/ invested /g, ' pumped cash ').replace(/ invested, /g, ' pumped cash, ').replace(/ invested\./g, ' pumped cash.')
		.replace(/Toured /g, 'Hit up ').replace(/ toured /g, ' hit up ').replace(/ toured, /g, ' hit up, ').replace(/ toured\./g, ' hit up.')
		.replace(/Forget /g, '4get ').replace(/ forget /g, ' 4get ').replace(/ forget, /g, ' 4get, ').replace(/ forget\./g, ' 4get.')
		.replace(/forgotten /g, '4gotten ').replace(/ forgotten /g, ' 4gotten ').replace(/ forgotten, /g, ' 4gotten, ').replace(/ forgotten\./g, ' 4gotten.')
		.replace(/You're /g, 'Ur ').replace(/ you're /g, ' ur ').replace(/ you're, /g, ' ur, ').replace(/ you're\./g, ' ur.')
		.replace(/Tonight /g, '2nite ').replace(/ you're /g, ' 2nite ').replace(/ you're, /g, ' 2nite, ').replace(/ you're\./g, ' 2nite.')
		.replace(/Toronto /i, 'T-dot ').replace(/ toronto /i, ' t-dot ').replace(/ Toronto, /i, ' T-dot, ').replace(/ Toronto\./i, ' T-dot.')
		.replace(/Toronto's /i, 'T-dot\'s ').replace(/ toronto's /i, ' t-dot\'s ').replace(/ Toronto's, /i, ' T-dot\'s, ').replace(/ Toronto's\./i, ' T-dot\'s.')
		.replace(/Scarborough /g, 'Scarbz ').replace(/ scarborough /g, ' scarbz ').replace(/ Scarborough, /g, ' Scarbz, ').replace(/ Scarborough\./g, ' Scarbz.')
		.replace(/Celebrate by /g, 'Get turnt by ').replace(/ celebrate by /g, ' get turnt by ').replace(/ celebrate by, /g, ' get turnt by, ').replace(/ celebrate by\./g, ' get turnt by.') /////RECONSIDER THIS ONE TOO
		.replace(/Celebrate /g, 'Get turnt af 4 ').replace(/ celebrate /g, ' get turnt af 4 ').replace(/ celebrate, /g, ' get turnt af 4, ').replace(/ celebrate\./g, ' get turnt af 4.') /////RECONSIDER THIS ONE TOO
		.replace(/Heading to /g, 'Reaching to ').replace(/ heading to, /g, ' reaching to, ').replace(/ heading to /g, ' reaching to ').replace(/ heading to\./g, ' reaching to\.')
		.replace(/Going to /g, 'Reaching to ').replace(/ going to, /g, ' reaching to, ').replace(/ going to /g, ' reaching to ').replace(/ going to\./g, ' reaching to\.')
		.replace(/Congratulations /g, 'Biggups ').replace(/ congratulations /g, ' biggups ').replace(/ congratulations, /g, ' biggups, ').replace(/ congratulations\./g, ' biggups.')
		.replace(/Congrats /g, 'Biggups ').replace(/ congrats /g, ' biggups ').replace(/ congrats, /g, ' biggups, ').replace(/ congrats\./g, ' biggups.')
		.replace(/Team /g, 'Squad ').replace(/ team /g, ' squad ').replace(/ team, /g, ' squad, ').replace(/ team\./g, ' squad.')
		// .replace(/Honour /g, 'Respekt ').replace(/ honour /g, ' respekt ').replace(/ honour, /g, ' respekt, ').replace(/ honour\./g, ' respekt.')
		.replace(/Group /g, 'Squad ').replace(/ group /g, ' squad ').replace(/ group, /g, ' squad, ').replace(/ group\./g, ' squad.')
		.replace(/Congratulated /g, 'Biggup\'d ').replace(/ congratulated /g, ' biggup\'d ').replace(/ congratulated, /g, ' biggup\'d, ').replace(/ congratulated\./g, ' biggup\'d.')
		.replace(/Night /g, 'Nite ').replace(/ night /g, ' nite ').replace(/ night, /g, ' nite, ').replace(/ night\./g, ' nite.')
		.replace(/Very /g, ' V ').replace(/ very /g, ' v ').replace(/ very, /g, ' v, ').replace(/ very\./g, ' v.')
		.replace(/With /g, 'W/ ').replace(/ with /g, ' w/ ').replace(/ with, /g, ' w/, ').replace(/ with\./g, ' w/.')
		.replace(/Wife /g, 'Bae ').replace(/ wife /g, ' bae ').replace(/ wife, /g, ' bae, ').replace(/ wife\./g, ' bae.')
		.replace(/Husband /g, 'Bae ').replace(/ husband /g, ' bae ').replace(/ husband, /g, ' bae, ').replace(/ husband\./g, ' bae.')
		.replace(/Thanks /g, 'Thnx ').replace(/ thanks /g, ' thnx ').replace(/ thanks, /g, ' thnx, ').replace(/ thanks\./g, ' thnx.')
		.replace(/Thank you /g, 'Thnx ').replace(/ thank you /g, ' thnx ').replace(/ thank you, /g, ' thnx, ').replace(/ thank you\./g, ' thnx.')
		.replace(/Favourite /g, 'Fav ').replace(/ favourite /g, ' fav ').replace(/ favourite, /g, ' fav, ').replace(/ favourite\./g, ' fav.')
		.replace(/Success /g, '$uccess ').replace(/ success /g, ' $uccess ').replace(/ success, /g, ' $uccess, ').replace(/ success\./g, ' $uccess.')
		.replace(/Visited /g, 'Chilled w/ ').replace(/ visited /g, ' chilled w/ ').replace(/ visited, /g, ' chilled w/, ').replace(/ visited\./g, ' chilled w/.')
		.replace(/To /g, '2 ').replace(/ to /g, ' 2 ').replace(/ to, /g, ' 2, ').replace(/ to\./g, ' 2.')
		.replace(/For /g, '4 ').replace(/ for /g, ' 4 ').replace(/ for, /g, ' 4, ').replace(/ for\./g, ' 4.')
		.replace(/Too /g, '2 ').replace(/ too /g, ' 2 ').replace(/ too, /g, ' 2, ').replace(/ too\./g, ' 2.')
		.replace(/Family /g, 'Fam ').replace(/ family /g, ' fam ').replace(/ family, /g, ' fam, ').replace(/ family\./g, ' fam.')
		.replace(/Says /g, 'Sez ').replace(/ says /g, ' sez ').replace(/ says, /g, ' sez, ').replace(/ says\./g, ' sez.')
		.replace(/Know /g, 'Kno ').replace(/ know /g, ' kno ').replace(/ know, /g, ' kno, ').replace(/ know\./g, ' kno.')
		.replace(/Out of /g, 'Outta ').replace(/ out of /g, ' outta ').replace(/ out of, /g, ' outta, ').replace(/ out of\./g, ' outta.')
		.replace(/Respect /g, 'Respekt ').replace(/ respect /g, ' respekt ').replace(/ respect, /g, ' respekt, ').replace(/ respect\./g, ' respekt.')
		.replace(/Respects /g, 'Respekt ').replace(/ respects /g, ' respekts ').replace(/ respects, /g, ' respekts, ').replace(/ respects\./g, ' respekts.')
		.replace(/tting /g, 'ttin ').replace(/ tting /g, ' ttin ').replace(/ tting, /g, ' ttin, ').replace(/ tting\./g, ' ttin.')
		.replace(/Our plan /g, 'Our dope plan ').replace(/ our plan /g, ' our dope plan ').replace(/ our plan, /g, ' our dope plan, ').replace(/ our plan\./g, ' our dope plan.')
		.replace(/Residents /g, 'Playas ').replace(/ residents /g, ' playas ').replace(/ residents, /g, ' playas, ').replace(/ residents\./g, ' playas.')
		.replace(/Resident /g, 'Playa ').replace(/ resident /g, ' playa ').replace(/ resident, /g, ' playa, ').replace(/ resident\./g, ' playa.')
		.replace(/Citizens /g, 'Playas ').replace(/ citizens /g, ' playas ').replace(/ citizens, /g, ' playas, ').replace(/ citizens\./g, ' playas.')
		.replace(/Citizen /g, 'Playa ').replace(/ citizen /g, ' playa ').replace(/ citizen, /g, ' playa, ').replace(/ citizen\./g, ' playa.')
		.replace(/Every /g, 'Erry ').replace(/ every /g, ' erry ').replace(/ every, /g, ' erry, ').replace(/ every\./g, ' erry.')
		.replace(/Bringing /g, 'Bringin ').replace(/ bringing /g, ' bringin ').replace(/ bringing, /g, ' bringin, ').replace(/ bringing\./g, ' bringin.')
		.replace(/Things /g, 'Tingz ').replace(/ things /g, ' tingz ').replace(/ things, /g, ' tingz, ').replace(/ things\./g, ' tingz.')
		.replace(/Grateful /g, 'Gr8ful ').replace(/ grateful /g, ' gr8ful ').replace(/ grateful, /g, ' gr8ful, ').replace(/ grateful\./g, ' gr8ful.')
		.replace(/Love /g, 'Luv ').replace(/ love /g, ' luv ').replace(/ love, /g, ' luv, ').replace(/ love\./g, ' luv.')
		.replace(/Was /g, 'Wuz ').replace(/ was /g, ' wuz ').replace(/ was, /g, ' wuz, ').replace(/ was\./g, ' wuz.')
		.replace(/I'm honoured /g, 'I\'m stoked ').replace(/ I'm honoured /g, ' I\'m stoked ').replace(/ I'm honoured, /g, ' I\'m stoked, ').replace(/ I'm honoured\./g, ' I\'m stoked.')
		.replace(/Sick lakes /g, 'Gr8 lakes ').replace(/ sick lakes /g, ' gr8 lakes ').replace(/ sick lakes, /g, ' gr8 lakes, ').replace(/ sick lakes\./g, ' gr8 lakes.')
		.replace(/Sick Lakes /g, 'Gr8 Lakes ').replace(/ Sick Lakes /g, ' gr8 Lakes ').replace(/ Sick Lakes, /g, ' gr8 Lakes, ').replace(/ Sick Lakes\./g, ' gr8 Lakes.')
		.replace(/Phat biggups /g, 'MAD props ').replace(/ phat biggups /g, ' MAD props ').replace(/ phat biggups, /g, ' MAD props, ').replace(/ phat biggups\./g, ' MAD props.')
		.replace(/Pretty good /g, 'P good ').replace(/ pretty good /g, ' p good ').replace(/ pretty good, /g, ' p good, ').replace(/ pretty good\./g, ' p good.')
		.replace(/Pretty great /g, 'P great ').replace(/ pretty great /g, ' p great ').replace(/ pretty great, /g, ' p great, ').replace(/ pretty great\./g, ' p great.')
		.replace(/Pretty nice /g, 'P nice ').replace(/ pretty nice /g, ' p nice ').replace(/ pretty nice, /g, ' p nice, ').replace(/ pretty nice\./g, ' p nice.')
		.replace(/Pretty sick /g, 'P sick ').replace(/ pretty sick /g, ' p sick ').replace(/ pretty sick, /g, ' p sick, ').replace(/ pretty sick\./g, ' p sick.')
		.replace(/Giving /g, 'Givin ').replace(/ giving /g, ' givin ').replace(/ giving, /g, ' givin, ').replace(/ giving\./g, ' givin.')
		.replace(/Living /g, 'Livin ').replace(/ living /g, ' livin ').replace(/ living, /g, ' livin, ').replace(/ living\./g, ' livin.')
		.replace(/Making /g, 'Makin ').replace(/ making /g, ' makin ').replace(/ making, /g, ' makin, ').replace(/ making\./g, ' makin.')
		.replace(/Taking /g, 'Takin ').replace(/ taking /g, ' takin ').replace(/ taking, /g, ' takin, ').replace(/ taking\./g, ' takin.')
		.replace(/Breaking /g, 'Breakin ').replace(/ breaking /g, ' breakin ').replace(/ breaking, /g, ' breakin, ').replace(/ breaking\./g, ' breakin.')
		.replace(/Talking /g, 'Talkin ').replace(/ talking /g, ' talkin ').replace(/ talking, /g, ' talkin, ').replace(/ talking\./g, ' talkin.')
		.replace(/Totally /g, 'Totes ').replace(/ totally /g, ' totes ').replace(/ totally, /g, ' totes, ').replace(/ totally\./g, ' totes.')
		.replace(/Becoming /g, 'Becomin ').replace(/ becoming /g, ' becomin ').replace(/ becoming, /g, ' becomin, ').replace(/ becoming\./g, ' becomin.')
		.replace(/feeling /g, 'feelin ').replace(/ feeling /g, ' feelin ').replace(/ feeling, /g, ' feelin, ').replace(/ feeling\./g, ' feelin.')
		.replace(/Skills /g, 'Skillz ').replace(/ skills /g, ' skillz ').replace(/ skills, /g, ' skillz, ').replace(/ skills\./g, ' skillz.')
		.replace(/excited /g, 'Stoked ').replace(/ excited /g, ' stoked ').replace(/ excited, /g, ' stoked, ').replace(/ excited\./g, ' stoked.')
		.replace(/forgot /g, '4got ').replace(/ forgot /g, ' 4got ').replace(/ forgot, /g, ' 4got, ').replace(/ forgot\./g, ' 4got.')
		.replace(/forget /g, '4get ').replace(/ forget /g, ' 4get ').replace(/ forget, /g, ' 4get, ').replace(/ forget\./g, ' 4get.')
		.replace(/True /g, 'Tru ').replace(/ true /g, ' tru ').replace(/ true, /g, ' tru, ').replace(/ true\./g, ' tru.')
		.replace(/Repeats /g, 'Repeatz ').replace(/ repeats /g, ' repeatz ').replace(/ repeats, /g, ' repeatz, ').replace(/ repeats\./g, ' repeatz.')
		.replace(/Let us /g, 'Letz ').replace(/ let us /g, ' letz ').replace(/ let us, /g, ' letz, ').replace(/ let us\./g, ' letz.')
		.replace(/Let\'s /g, 'Letz ').replace(/ let\'s /g, ' letz ').replace(/ let\'s, /g, ' letz, ').replace(/ let\'s\./g, ' letz.')
		.replace(/What /g, 'Wut ').replace(/ what /g, ' wut ').replace(/ what, /g, ' wut, ').replace(/ what\./g, ' wut.')
		.replace(/What\'s /g, 'wats ').replace(/ what\'s /g, ' wats ').replace(/ what\'s, /g, ' wats, ').replace(/ what\'s\./g, ' wats.')
		.replace(/Opportunity /g, 'Oppor2nity ').replace(/ opportunity /g, ' oppor2nity ').replace(/ opportunity, /g, ' oppor2nity, ').replace(/ opportunity\./g, ' oppor2nity.')
		.replace(/Making /g, 'Makin ').replace(/ making /g, ' makin ').replace(/ making, /g, ' makin, ').replace(/ making\./g, ' makin.')
		.replace(/Erry day /g, 'Errday ').replace(/ erry day /g, ' errday ').replace(/ erry day, /g, ' errday, ').replace(/ erry day\./g, ' errday.')
		.replace(/Wait /g, 'W8 ').replace(/ wait /g, ' w8 ').replace(/ wait, /g, ' w8, ').replace(/ wait\./g, ' w8.')
		.replace(/So feeling all the feels /g, 'Feeling all the feels ').replace(/ so feeling all the feels /g, ' feeling all the feels ').replace(/ so feeling all the feels, /g, ' feeling all the feels, ').replace(/ so feeling all the feels\./g, ' feeling all the feels.')
		.replace(/Very feeling all the feels /g, 'Feeling all the feels ').replace(/ very feeling all the feels /g, ' feeling all the feels ').replace(/ very feeling all the feels, /g, ' feeling all the feels, ').replace(/ very feeling all the feels\./g, ' feeling all the feels.')
		.replace(/Incredibly feeling all the feels /g, 'Feeling all the feels ').replace(/ incredibly feeling all the feels /g, ' feeling all the feels ').replace(/ incredibly feeling all the feels, /g, ' feeling all the feels, ').replace(/ incredibly feeling all the feels\./g, ' feeling all the feels.')
		.replace(/Right /g, 'Rite ').replace(/ right /g, ' rite ').replace(/ right, /g, ' rite, ').replace(/ right\./g, ' rite.')
		.replace(/Reflect /g, 'Reflekt ').replace(/ reflect /g, ' reflekt ').replace(/ reflect, /g, ' reflekt, ').replace(/ reflect\./g, ' reflekt.')
		.replace(/Pleased /g, 'Stoked ').replace(/ pleased /g, ' stoked ').replace(/ pleased, /g, ' stoked, ').replace(/ pleased\./g, ' stoked.')
		.replace(/Everyone /g, 'Erry1 ').replace(/ everyone /g, ' erry1 ').replace(/ everyone, /g, ' erry1, ').replace(/ everyone\./g, ' erry1.')
		.replace(/Right now /g, 'Rn ').replace(/ right now /g, ' rn ').replace(/ right now, /g, ' rn, ').replace(/ right now\./g, ' rn.')
		.replace(/Defeat /g, 'Slay ').replace(/ defeat /g, ' slay ').replace(/ defeat, /g, ' slay, ').replace(/ defeat\./g, ' slay.')
		.replace(/Greatest /g, 'Sickest ').replace(/ greatest /g, ' sickest ').replace(/ greatest, /g, ' sickest, ').replace(/ greatest\./g, ' sickest.')
		.replace(/Excited for /g, 'Thirsty for ').replace(/ excited for /g, ' thirsty for ').replace(/ excited for, /g, ' thirsty sick, ').replace(/ excited for\./g, ' thirsty for.')
		.replace(/You /g, 'U ').replace(/ you /g, ' u ').replace(/ you, /g, ' u, ').replace(/ you\./g, ' u.')
		.replace(/Every day /g, 'Errday ').replace(/ every day /g, ' errday ').replace(/ every day, /g, ' errday, ').replace(/ every day\./g, ' errday.')
		.replace(/Straight /g, 'Str8 ').replace(/ straight /g, ' str8 ').replace(/ straight, /g, ' str8, ').replace(/ straight\./g, ' str8.')
		.replace(/And /g, 'N ').replace(/ and /g, ' n ').replace(/ and, /g, ' n, ')
		.replace(/Through /g, 'Thru ').replace(/ through /g, ' thru ').replace(/ through, /g, ' thru, ').replace(/ through\./g, ' thru.')
		.replace(/Girls /g, 'Gurlz ').replace(/ girls /g, ' gurlz ').replace(/ girls, /g, ' gurlz, ').replace(/ girls\./g, ' gurlz.')
		.replace(/Boys /g, 'Boyz ').replace(/ boys /g, ' boyz ').replace(/ boys, /g, ' boyz, ').replace(/ boys\./g, ' boyz.')
		.replace(/Completely /g, 'Totes ').replace(/ completely /g, ' totes ').replace(/ completely, /g, ' totes, ').replace(/ completely\./g, ' totes.')
		.replace(/About /g, 'Bout ').replace(/ about /g, ' bout ').replace(/ about, /g, ' bout, ').replace(/ about\./g, ' bout.')
		.replace(/Style /g, 'Steez ').replace(/ style /g, ' steez ').replace(/ style, /g, ' steez, ').replace(/ style\./g, ' steez.')
		.replace(/Awards /g, 'Awardz ').replace(/ awards /g, ' awardz ').replace(/ awards, /g, ' awardz, ').replace(/ awards\./g, ' awardz.')
		.replace(/Jobs /g, 'Jobz💰 ').replace(/ jobs /g, ' jobz💰 ').replace(/ jobs, /g, ' jobz💰, ').replace(/ jobs\./g, ' jobz💰.')
		.replace(/Wonderful /g, 'Dope ').replace(/ wonderful /g, ' dope ').replace(/ wonderful, /g, ' dope, ').replace(/ wonderful\./g, ' dope.')
		.replace(/Representing /g, 'Repping ').replace(/ representing /g, ' repping ').replace(/ representing, /g, ' repping, ').replace(/ representing\./g, ' repping.')
		.replace(/Represent /g, 'Rep ').replace(/ represent /g, ' rep ').replace(/ represent, /g, ' rep, ').replace(/ represent\./g, ' rep.')
		.replace(/Represented /g, 'Repped ').replace(/ represented /g, ' repped ').replace(/ represented, /g, ' repped, ').replace(/ represented\./g, ' repped.')
		.replace(/Confidence /g, 'Swag ').replace(/ confidence /g, ' swag ').replace(/ confidence, /g, ' swag, ').replace(/ confidence\./g, ' swag.')
		.replace(/Without /g, 'W/ out ').replace(/ without /g, ' w/ out ').replace(/ without, /g, ' w/ out, ').replace(/ without\./g, ' w/ out.')
		.replace(/An respect /g, 'An honour ').replace(/ an respect /g, ' an honour ').replace(/ an respect, /g, ' an honour, ').replace(/ an respect\./g, ' an honour.')
		.replace(/The sick outdoors /g, 'The gr8 outdoors ').replace(/ the sick outdoors /g, ' the gr8 outdoors ').replace(/ the sick outdoors, /g, ' the gr8 outdoors, ').replace(/ the sick outdoors\./g, ' the gr8 outdoors.')
		.replace(/Popular /g, 'Hype ').replace(/ popular /g, ' hype ').replace(/ popular, /g, ' hype, ').replace(/ popular\./g, ' hype.')
		.replace(/Sick 🍀 /g, 'Good 🍀 ').replace(/ sick 🍀 /g, ' good 🍀 ').replace(/ sick 🍀, /g, ' good 🍀, ').replace(/ sick 🍀\./g, ' good 🍀.')
		.replace(/Bad /g, '💩 ').replace(/ bad /g, ' 💩 ').replace(/ bad, /g, ' 💩, ').replace(/ bad\./g, ' 💩.')
		.replace(/Inadequate /g, '💩 ').replace(/ inadequate /g, ' 💩 ').replace(/ inadequate, /g, ' 💩, ').replace(/ inadequate\./g, ' 💩.')
		.replace(/Awful /g, '💩 ').replace(/ awful /g, ' 💩 ').replace(/ awful, /g, ' 💩, ').replace(/ awful\./g, ' 💩.')
		.replace(/Terrible /g, '💩 ').replace(/ terrible /g, ' 💩 ').replace(/ terrible, /g, ' 💩, ').replace(/ terrible\./g, ' 💩.')
		.replace(/Inferior /g, '💩 ').replace(/ inferior /g, ' 💩 ').replace(/ inferior, /g, ' 💩, ').replace(/ inferior\./g, ' 💩.')
		.replace(/Shoddy /g, '💩 ').replace(/ shoddy /g, ' 💩 ').replace(/ shoddy, /g, ' 💩, ').replace(/ shoddy\./g, ' 💩.')
		.replace(/Inept /g, '💩 ').replace(/ inept /g, ' 💩 ').replace(/ inept, /g, ' 💩, ').replace(/ inept\./g, ' 💩.')
		.replace(/Atrocious /g, '💩 ').replace(/ atrocious /g, ' 💩 ').replace(/ atrocious, /g, ' 💩, ').replace(/ atrocious\./g, ' 💩.')
		.replace(/Weak /g, '💩 ').replace(/ weak /g, ' 💩 ').replace(/ weak, /g, ' 💩, ').replace(/ weak\./g, ' 💩.')
		.replace(/Subpar /g, '💩 ').replace(/ subpar /g, ' 💩 ').replace(/ subpar, /g, ' 💩, ').replace(/ subpar\./g, ' 💩.')
		.replace(/Sub-par /g, '💩 ').replace(/ sub-par /g, ' 💩 ').replace(/ sub-par, /g, ' 💩, ').replace(/ sub-par\./g, ' 💩.')
		.replace(/Poor /g, '💩 ').replace(/ poor /g, ' 💩 ').replace(/ poor, /g, ' 💩, ').replace(/ poor\./g, ' 💩.')
		.replace(/Crummy /g, '💩 ').replace(/ crummy /g, ' 💩 ').replace(/ crummy, /g, ' 💩, ').replace(/ crummy\./g, ' 💩.')
		.replace(/Dreadful /g, '💩 ').replace(/ dreadful /g, ' 💩 ').replace(/ dreadful, /g, ' 💩, ').replace(/ dreadful\./g, ' 💩.')
		.replace(/Unacceptable /g, '💩 ').replace(/ unacceptable /g, ' 💩 ').replace(/ unacceptable, /g, ' 💩, ').replace(/ unacceptable\./g, ' 💩.')
		.replace(/Garbage /g, '💩 ').replace(/ garbage /g, ' 💩 ').replace(/ garbage, /g, ' 💩, ').replace(/ garbage\./g, ' 💩.')
		.replace(/Erroneous /g, '💩 ').replace(/ erroneous /g, ' 💩 ').replace(/ erroneous, /g, ' 💩, ').replace(/ erroneous\./g, ' 💩.')
		.replace(/Horrible /g, '💩 ').replace(/ horrible /g, ' 💩 ').replace(/ horrible, /g, ' 💩, ').replace(/ horrible\./g, ' 💩.')
		.replace(/Biggest /g, 'Phatest ').replace(/ biggest /g, ' phatest ').replace(/ biggest, /g, ' phatest, ').replace(/ biggest\./g, ' phatest.')
		.replace(/Largest /g, 'Phatest ').replace(/ largest /g, ' phatest ').replace(/ largest, /g, ' phatest, ').replace(/ largest\./g, ' phatest.')
		.replace(/ best /g, ' sickest ').replace(/ best, /g, ' sickest, ').replace(/ best\./g, ' sickest.')
		.replace(/Details /g, 'Deets ').replace(/ details /g, ' deets ').replace(/ details, /g, ' deets, ').replace(/ details\./g, ' deets.')
		.replace(/Opportunities /g, 'Oppor2nities ').replace(/ opportunities /g, ' oppor2nities ').replace(/ opportunities, /g, ' oppor2nities, ').replace(/ opportunities\./g, ' oppor2nities.')
		.replace(/Strange /g, 'Random ').replace(/ strange /g, ' random ').replace(/ strange, /g, ' random, ').replace(/ strange\./g, ' random.')
		.replace(/Peculiar /g, 'Random ').replace(/ peculiar /g, ' random ').replace(/ peculiar, /g, ' random, ').replace(/ peculiar\./g, ' random.')
		.replace(/Weird /g, 'Random ').replace(/ weird /g, ' random ').replace(/ weird, /g, ' random, ').replace(/ weird\./g, ' random.')
		.replace(/Bizzarre /g, 'Random ').replace(/ bizzarre /g, ' random ').replace(/ bizzarre, /g, ' random, ').replace(/ bizzarre\./g, ' random.')
		.replace(/Unusual /g, 'Random ').replace(/ unusual /g, ' random ').replace(/ unusual, /g, ' random, ').replace(/ unusual\./g, ' random.')
		.replace(/Champions /g, 'Champions🏆').replace(/ champions /g, ' champions🏆').replace(/ champions, /g, ' champions🏆,').replace(/ champions\./g, ' champions🏆.')
		.replace(/Prayers /g, 'Prayers🙏 ').replace(/ prayers /g, ' prayers🙏 ').replace(/ prayers, /g, ' prayers🙏, ').replace(/ prayers\./g, ' prayers🙏.')
		.replace(/Praying /g, 'Praying🙏 ').replace(/ praying /g, ' praying🙏 ').replace(/ praying, /g, ' praying🙏, ').replace(/ praying\./g, ' praying🙏.')
		.replace(/ hot /g, ' hot 🔥 ')
		.replace(/ saddened /g, ' saddened 😢 ')
		.replace(/Police /g, 'Fuzz👮 ').replace(/ police /g, ' fuzz👮 ').replace(/ police, /g, ' fuzz👮, ').replace(/ police\./g, ' fuzz👮.')
		.replace(/Luck /g, ' 🍀 ').replace(/ luck /g, ' 🍀 ').replace(/ luck, /g, ' 🍀, ').replace(/ luck\./g, ' 🍀.')
		.replace(/Luck /g, ' 🍀 ').replace(/ luck /g, ' 🍀 ').replace(/ luck, /g, ' 🍀, ').replace(/ luck\./g, ' 🍀.')
		.replace(/Strong /g, '💪 ').replace(/ strong /g, ' 💪 ').replace(/ strong, /g, ' 💪, ').replace(/ strong\./g, ' 💪.')
		.replace(/Football /g, '🏈 ').replace(/ football /g, ' 🏈 ').replace(/ football, /g, ' 🏈, ').replace(/ football\./g, ' 🏈.')
		.replace(/Basketball /g, '🏀 ').replace(/ basketball /g, ' 🏀 ').replace(/ basketball, /g, ' 🏀, ').replace(/ basketball\./g, ' 🏀.')
		.replace(/Baseball /g, '⚾ ').replace(/ baseball /g, ' ⚾ ').replace(/ baseball, /g, ' ⚾, ').replace(/ baseball\./g, ' ⚾.')
		.replace(/Golf /g, '⛳ ').replace(/ golf /g, ' ⛳ ').replace(/ golf, /g, ' ⛳, ').replace(/ golf\./g, ' ⛳.')

		//////////////////////////////
		///      IF NO CHANGES     ///
		//////////////////////////////

		.replace(/ &amp; /g, ' & ')
		.replace(/ &amp; /g, ' & ')
		.replace(/ & /g, ' n ')
		.replace(/\.  #/g, ' #')
		.replace(/\. #/g, ' #')
		.replace(/  /g, ' ')


		///////////////////////////////
		///      APPEND LANGUAGE    ///
		///////////////////////////////


		const toPoli = ' #topoli';
		if(newTweet.length < (140 - toPoli.length)){
			newTweet = newTweet + toPoli;
		}

		const haterade = [' #JealousHaters', ' #HatersNeverProsper'];
		if(newTweet.length < (140 - haterade[1].length) &&
		   newTweet.includes('Racist ') || newTweet.includes(' racist ') || newTweet.includes(' racist, ') || newTweet.includes(' racist.') || newTweet.includes(' racist!') ||
		   newTweet.includes('Discrimination ') || newTweet.includes(' discrimination ') || newTweet.includes(' discrimination, ') || newTweet.includes(' discrimination.') || newTweet.includes(' discrimination!') ||
		   newTweet.includes('Hate ') || newTweet.includes(' hate ') || newTweet.includes(' hate,') || newTweet.includes(' hate.') || newTweet.includes(' hate!') ||
		   newTweet.includes('anti-Semitism') || newTweet.includes('Anti-Semitism') || newTweet.includes('anti-semitism')
		  ){
			newTweet = newTweet + haterade[Math.floor(Math.random() * haterade.length)];
		}

		// RANDOM HASHTAG GENERATOR
		const butCoffeeFirst = [' #butCoffeeFirst', ' #CoffeeIsForClosers'];
		if(newTweet.length < (140 - butCoffeeFirst[1].length) &&
		   newTweet.includes('Tired ') || newTweet.includes(' tired ') || newTweet.includes(' tired, ') || newTweet.includes(' tired.') || newTweet.includes(' tired!') ||
		   newTweet.includes('Morning ') || newTweet.includes(' morning ') || newTweet.includes(' morning,') || newTweet.includes(' morning.') || newTweet.includes(' morning!') ||
		   newTweet.includes('Coffee ')  || newTweet.includes(' coffee ') || newTweet.includes(' coffee, ') || newTweet.includes(' coffee.') || newTweet.includes(' coffee!')
		  ){
			newTweet = newTweet + butCoffeeFirst[Math.floor(Math.random() * butCoffeeFirst.length)];
		}

		// RANDOM HASHTAG GENERATOR
		const fastAndFurious = [' #FastAndFurious', ' #Need4Speed'];
		if(newTweet.length < (140 - fastAndFurious[0].length) &&
		   newTweet.includes('Transit ') || newTweet.includes(' transit ') || newTweet.includes(' transit, ') || newTweet.includes(' transit.') || newTweet.includes(' transit!')
		   ){
			newTweet = newTweet + fastAndFurious[Math.floor(Math.random() * fastAndFurious.length)];
		}


		// RANDOM HASHTAG GENERATOR
		const squadGoals = [' #SquadGoals', ' #StackedTeam', ' #PhatSquadProblems'];
		if(newTweet.length < (140 - squadGoals[2].length) &&
		   newTweet.includes('Squad ') || newTweet.includes(' squad ') || newTweet.includes(' squad, ') || newTweet.includes(' squad.') || newTweet.includes(' squad!') ||
		   newTweet.includes('Athletes ') || newTweet.includes(' athletes ') || newTweet.includes(' athletes, ') || newTweet.includes(' athletes.') || newTweet.includes(' athletes!') ||
		   newTweet.includes('Champion ') || newTweet.includes(' champion ') || newTweet.includes(' champion, ') || newTweet.includes(' champion.') || newTweet.includes(' champion!') ||
		   newTweet.includes('Blue Jays ') || newTweet.includes(' Blue Jays ') || newTweet.includes(' Blue Jays, ') || newTweet.includes(' Blue Jays.') || newTweet.includes(' Blue Jays!') ||
		   newTweet.includes('blue jays ') || newTweet.includes(' blue jays ') || newTweet.includes(' blue jays, ') || newTweet.includes(' blue jays.') || newTweet.includes(' blue jays!') ||
		   newTweet.includes('Jays ') || newTweet.includes(' Jays ') || newTweet.includes(' Jays, ') || newTweet.includes('Jays.') || newTweet.includes('Jays!') ||
		   newTweet.includes('Raptors ') || newTweet.includes(' Raptors ') || newTweet.includes(' Raptors, ') || newTweet.includes(' Raptors.') || newTweet.includes(' Raptors!') ||
		   newTweet.includes('raptors ') || newTweet.includes(' raptors ') || newTweet.includes(' raptors, ') || newTweet.includes(' raptors.') || newTweet.includes(' raptors!') ||
		   newTweet.includes('Argos ') || newTweet.includes(' argos ') || newTweet.includes(' argos, ') || newTweet.includes(' argos.') || newTweet.includes(' argos!') ||
		   newTweet.includes('maple leafs ') || newTweet.includes(' maple leafs ') || newTweet.includes(' maple leafs, ') || newTweet.includes(' maple leafs.') || newTweet.includes(' maple leafs!') ||
		   newTweet.includes('mapleleafs ') || newTweet.includes(' mapleleafs ') || newTweet.includes(' mapleleafs, ') || newTweet.includes(' mapleleafs.') || newTweet.includes(' mapleleafs!') ||
		   newTweet.includes('Maple Leafs ') || newTweet.includes(' Maple Leafs ') || newTweet.includes(' Maple Leafs, ') || newTweet.includes(' Maple Leafs.') || newTweet.includes(' Maple Leafs!') ||
		   newTweet.includes('NHL ') || newTweet.includes(' NHL ') || newTweet.includes(' NHL, ') || newTweet.includes(' NHL.') || newTweet.includes(' NHL!') ||
		   newTweet.includes('NBA ') || newTweet.includes(' NBA ') || newTweet.includes(' NBA, ') || newTweet.includes(' NBA.') || newTweet.includes(' NBA!') ||
		   newTweet.includes('CFL ') || newTweet.includes(' CFL ') || newTweet.includes(' CFL, ') || newTweet.includes(' CFL.') || newTweet.includes(' CFL!') ||
		   newTweet.includes('MapleLeafs ') || newTweet.includes(' MapleLeafs ') || newTweet.includes(' MapleLeafs, ') || newTweet.includes(' MapleLeafs.') || newTweet.includes(' MapleLeafs!')
		  ){
			newTweet = newTweet + squadGoals[Math.floor(Math.random() * squadGoals.length)];
		}


		const illuminati = ' #Illuminati';
		if(newTweet.length < (140 - illuminati.length) &&
		   newTweet.includes('Corporations ') || newTweet.includes(' corporations ') || newTweet.includes(' corporations, ') || newTweet.includes(' corporations.') || newTweet.includes(' corporations!') ||
		   newTweet.includes('CEO ') || newTweet.includes(' CEO ') || newTweet.includes(' CEO, ') || newTweet.includes(' CEO.') || newTweet.includes(' CEO!') ||
		   newTweet.includes('CEOs ') || newTweet.includes(' CEOs ') || newTweet.includes(' CEOs, ') || newTweet.includes(' CEOs.') || newTweet.includes(' CEOs!') ||
		   newTweet.includes('Phat business ') || newTweet.includes(' phat business ') || newTweet.includes(' phat business, ') || newTweet.includes(' phat business.') || newTweet.includes('phat business!') ||
		   newTweet.includes('Business leaders ') || newTweet.includes(' business leaders ') || newTweet.includes(' business leaders, ') || newTweet.includes(' business leaders.') || newTweet.includes('business leaders!')
		  ){
			newTweet = newTweet + illuminati;
		}

		const swag = ' #swag';
		if(newTweet.length < (140 - swag.length) &&
		   newTweet.includes('Confidence ') || newTweet.includes(' confidence ') || newTweet.includes(' confidence, ') || newTweet.includes(' confidence.') || newTweet.includes(' confidence!')
		  ){
			newTweet = newTweet + swag;
		}


		const fatCheques = [' #fatCheques', ' #StaxOnStax', ' #RacksOnRacks', ' #fatCheques', ' #Money'];
		if(newTweet.length < (140 - fatCheques[2].length) &&
		   newTweet.includes('Business ') || newTweet.includes(' business ') || newTweet.includes(' business, ') || newTweet.includes(' business.') || newTweet.includes(' business!') ||
		   newTweet.includes('Jobz💰 ') || newTweet.includes(' jobz💰 ') || newTweet.includes(' jobz💰, ') || newTweet.includes(' jobz💰.') || newTweet.includes(' jobz💰!')
		  ){
			newTweet = newTweet + fatCheques[Math.floor(Math.random() * fatCheques.length)];
		}

		// RANDOM HASHTAG GENERATOR
		const divaOnAdime = [' #CouponClippers', ' #PaperChasers', ' #BrokePlayas'];
		if(newTweet.length < (140 - divaOnAdime[0].length) &&
		   newTweet.includes('Affordable ') || newTweet.includes(' affordable ') || newTweet.includes(' affordable, ') || newTweet.includes(' affordable.') || newTweet.includes(' affordable!') ||
		   newTweet.includes('Affordability ') || newTweet.includes(' affordability ') || newTweet.includes(' affordability, ') || newTweet.includes(' affordability.') || newTweet.includes(' affordability!')
		  ){
			newTweet = newTweet + divaOnAdime[Math.floor(Math.random() * divaOnAdime.length)];
		}

		const fitspo = [' #fitspo', ' #swole'];
		if(newTweet.length < (140 - fitspo[0].length) &&
		   newTweet.includes('Yoga ') || newTweet.includes(' yoga ') || newTweet.includes(' yoga, ') || newTweet.includes(' yoga.') || newTweet.includes(' yoga!') ||
		   newTweet.includes('Exercise ') || newTweet.includes(' exercise ') || newTweet.includes(' exercise, ') || newTweet.includes(' exercise.') || newTweet.includes(' exercise!') ||
		   newTweet.includes('Active lifestyle ') || newTweet.includes(' active lifestyle ') || newTweet.includes(' active lifestyle, ') || newTweet.includes(' active lifestyle.') || newTweet.includes(' active lifestyle!') ||
		   newTweet.includes(' fitness ') ||
		   newTweet.includes(' sports ')
		  ){
			newTweet = newTweet + fitspo[Math.floor(Math.random() * fitspo.length)];
		}

		const cannabis = [' #FatCones', ' #420', ' #Blitted'];
		if(newTweet.length < (140 - cannabis[0].length) &&
		   newTweet.includes('Cannabis ') || newTweet.includes(' cannabis ') || newTweet.includes(' cannabis, ') || newTweet.includes(' cannabis.') || newTweet.includes(' cannabis!') ||
		   newTweet.includes('#Cannabis ') || newTweet.includes(' #cannabis ') || newTweet.includes(' #cannabis, ') || newTweet.includes(' #cannabis.') || newTweet.includes(' #cannabis!') ||
		   newTweet.includes('marijuana ') || newTweet.includes(' marijuana ') || newTweet.includes(' marijuana, ') || newTweet.includes(' marijuana.') || newTweet.includes(' marijuana!')
		  ){
			newTweet = newTweet + cannabis[Math.floor(Math.random() * cannabis.length)];
		}

		const struggleIsReal = [' #StruggleIsReal', ' #Hustlin'];
		if(newTweet.length < (140 - struggleIsReal[0].length) &&
		   newTweet.includes('Challenge ') || newTweet.includes(' challenge ') || newTweet.includes(' challenge, ') || newTweet.includes(' challenge.') || newTweet.includes(' challenge!') ||
		   newTweet.includes('Difficult ') || newTweet.includes(' difficult ') || newTweet.includes(' difficult, ') || newTweet.includes(' difficult.') || newTweet.includes(' difficult!') ||
		   newTweet.includes('Struggle ') || newTweet.includes(' struggle ') || newTweet.includes(' struggle, ') || newTweet.includes(' struggle.') || newTweet.includes(' struggle!')
		  ){
			newTweet = newTweet + struggleIsReal[Math.floor(Math.random() * struggleIsReal.length)];
		}

		const stayWoke = 'Stay woke: ';
		if(newTweet.length < (140 - stayWoke.length) &&
		   newTweet.includes('Corporation ') || newTweet.includes(' corporation ') || newTweet.includes(' corporation, ') || newTweet.includes(' corporation.') || newTweet.includes('corporation!') ||
		   newTweet.includes('Politics ') || newTweet.includes(' politics ') || newTweet.includes(' politics, ') || newTweet.includes(' politics.') || newTweet.includes('politics!') ||
		   newTweet.includes('Political ') || newTweet.includes(' political ') || newTweet.includes(' political, ') || newTweet.includes(' political.') || newTweet.includes('political!') ||
		   newTweet.includes('Information ') || newTweet.includes(' information ') || newTweet.includes(' information, ') || newTweet.includes(' information.') || newTweet.includes(' information!') ||
		   newTweet.includes('Corruption ') || newTweet.includes(' corruption ') || newTweet.includes(' corruption, ') || newTweet.includes(' corruption.') || newTweet.includes(' corruption!') ||
		   newTweet.includes('Lies ') || newTweet.includes(' lies ')  || newTweet.includes(' lies, ')  || newTweet.includes(' lies.')  || newTweet.includes(' lies!')  ||
		   newTweet.includes('Lied ') || newTweet.includes(' lies ')  || newTweet.includes(' lied, ')  || newTweet.includes(' lied.')  || newTweet.includes(' lied!')  ||
		   newTweet.includes('Fake ') || newTweet.includes(' fake ') || newTweet.includes(' fake, ') || newTweet.includes(' fake.') || newTweet.includes(' fake!') ||
		   newTweet.includes('Revealed ') || newTweet.includes(' revealed ') || newTweet.includes(' revealed, ') || newTweet.includes(' revealed.') || newTweet.includes(' revealed!')
		  ){
			newTweet = stayWoke + newTweet;
		}

		return newTweet;
	}
}
