(window["webpackJsonptft-react-app"]=window["webpackJsonptft-react-app"]||[]).push([[0],{38:function(e,a,t){e.exports=t(66)},43:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(13),r=t.n(l),s=(t(43),t(7)),i=t(9),m=function(e,a){if(!a)return"";var t=e.split("/"),n=t[t.length-1];return c.a.createElement(s.b,{to:"/champion/".concat(n),className:"breadcrumb"},n)},o=Object(i.f)(function(e){return console.log(e,"navbarjs"),c.a.createElement("nav",{className:"nav-extended"},c.a.createElement("div",{className:"nav-wrapper grey darken-4"},c.a.createElement("div",{className:"container"},c.a.createElement(s.b,{to:"/",className:"brand-logo center hide-on-small-only"},"Teamfight Tactics Data App"),c.a.createElement(s.b,{to:"/",className:"brand-logo center hide-on-med-and-up"},"TFT Data App"))),c.a.createElement("div",{className:"nav-content grey"},c.a.createElement("div",{className:"center"},c.a.createElement(s.b,{to:"/",className:"breadcrumb"}," Home "),m(e.location.pathname,e.location.pathname.indexOf("/champion")>-1))))}),d=function(){return c.a.createElement("footer",{className:"grey"},c.a.createElement("div",{className:"container section"},c.a.createElement("div",{className:"center grey-text text-lighten-4"},"All data is pulled from the Riot Games API. A valid internet connection is required.")),c.a.createElement("div",{className:"section grey darken-1 no-padding"},c.a.createElement("div",{className:"center grey-text text-lighten-2"},"Copyright \xa9 2019 Harry Nguon")))},u=t(10),p=t(32),h=t(33),E=t(36),v=t(34),b=t(37),f=function(e){var a=e.champion;return c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement(s.b,{to:"/champion/".concat(a.name),key:a.id},a.name)),c.a.createElement("td",null,a.origin.join(", ")),c.a.createElement("td",null,a.class.join(", ")))},N=function(e){function a(e){var t;return Object(p.a)(this,a),(t=Object(E.a)(this,Object(v.a)(a).call(this,e))).sortTable=function(e){return function(){var a=t.state.championData.slice();switch(e){case"champions":a.sort(),t.state.ascChampion&&a.reverse(),t.setState({ascChampion:!t.state.ascChampion,championData:a});break;case"origins":a.sort(function(e,a){return e[1].origin[0].localeCompare(a[1].origin[0])}),t.state.ascOrigins&&a.reverse(),t.setState({ascOrigins:!t.state.ascOrigins,championData:a});break;case"classes":a.sort(function(e,a){return e[1].class[0].localeCompare(a[1].class[0])}),t.state.ascClasses&&a.reverse(),t.setState({ascClasses:!t.state.ascClasses,championData:a});break;default:return}}},t.state={ascChampion:!0,ascOrigins:!0,ascClasses:!0,championData:e.championData},t}return Object(b.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("table",{className:"highlight centered"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{className:"rowTableActive",onClick:this.sortTable("champions")},"Champion"),c.a.createElement("th",{className:"rowTableActive",onClick:this.sortTable("origins")},"Origin"),c.a.createElement("th",{className:"rowTableActive",onClick:this.sortTable("classes")},"Class"))),c.a.createElement("tbody",null,this.state.championData.map(function(e){return c.a.createElement(f,{champion:e[1],key:e[1].id})}))))}}]),a}(c.a.Component),g=Object(u.b)(function(e){return{championData:e.championData}})(function(e){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row center"}),c.a.createElement("div",{className:"row center"},c.a.createElement("p",{className:"flow-text"},"This is a very basic ",c.a.createElement("i",null,"React+Redux")," Web Application that retrieves and displays data for all champions in Teamfight Tactics."),c.a.createElement("p",{className:"flow-text"},"Redux is used to store the data that gets retrieved in the application. The application then uses the Redux store to retrieve the data."),c.a.createElement("p",{className:"flow-text"},"Right below is the table of all the champions in Teamfight Tactics. All data is pulled from the Riot Games API. "),c.a.createElement("p",{className:"flow-text"},"You can click on a champion to view detailed stats about them.")),c.a.createElement("div",{className:"row center"},c.a.createElement("div",{className:"hide-on-med-and-up scrollableTable"},c.a.createElement(N,{championData:e.championData})),c.a.createElement("div",{className:"hide-on-small-only"},c.a.createElement(N,{championData:e.championData}))))}),y=Object(u.b)(function(e,a){var t=a.match.params.champName;return{champion:e.championData.filter(function(e){return e[1].name===t})[0][1]}})(function(e){var a=e.champion;return c.a.createElement("div",{className:"container center"},c.a.createElement("h4",null,"Champion: ",c.a.createElement("b",null,a.name)),c.a.createElement("div",{className:"divider"}),c.a.createElement("div",{className:"section"}),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12 m6 l6"},c.a.createElement("div",{className:"card grey darken-1"},c.a.createElement("div",{className:"card-content white-text"},c.a.createElement("span",{className:"card-title"},c.a.createElement("b",null,"About")),c.a.createElement("p",null,"ID: ",a.id),c.a.createElement("p",null,"Origin: ",a.origin.join(", ")),c.a.createElement("p",null,"Class: ",a.class.join(", ")),c.a.createElement("p",null,"Cost: ",a.cost)))),c.a.createElement("div",{className:"col s12 m6 l6"},c.a.createElement("div",{className:"card grey darken-1"},c.a.createElement("div",{className:"card-content white-text"},c.a.createElement("span",{className:"card-title"},c.a.createElement("b",null,"Preferred items")),c.a.createElement("ul",{className:"collection"},a.items.map(function(e){return c.a.createElement("li",{className:"collection-item grey white-text",key:a.id+e},e)})))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12 m6 l6"},c.a.createElement("div",{className:"card grey darken-1"},c.a.createElement("div",{className:"card-content white-text"},c.a.createElement("span",{className:"card-title"},c.a.createElement("b",null,"Stats")),c.a.createElement("h6",null,c.a.createElement("u",null,"Offense")),c.a.createElement("p",null,"Damage: ",a.stats.offense.damage),c.a.createElement("p",null,"Attack Speed: ",a.stats.offense.attackSpeed),c.a.createElement("p",null,"DPS: ",a.stats.offense.dps),c.a.createElement("p",null,"Range: ",a.stats.offense.range),c.a.createElement("h6",null,c.a.createElement("u",null,"Defense")),c.a.createElement("p",null,"Health: ",a.stats.defense.health),c.a.createElement("p",null,"Armor: ",a.stats.defense.armor),c.a.createElement("p",null,"Magic Resist: ",a.stats.defense.magicResist)))),c.a.createElement("div",{className:"col s12 m6 l6"},c.a.createElement("div",{className:"card grey darken-1"},c.a.createElement("div",{className:"card-content white-text"},c.a.createElement("span",{className:"card-title"},c.a.createElement("b",null,"Ability")),c.a.createElement("p",null,"Name: ",a.ability.name),"Description:    ",c.a.createElement("blockquote",null,a.ability.description),c.a.createElement("p",null,"Type: ",a.ability.type),c.a.createElement("p",null,"Mana Cost: ",a.ability.manaCost),c.a.createElement("p",null,"Mana Start: ",a.ability.manaStart),"Stats:",c.a.createElement("ul",{className:"collection"},a.ability.stats.map(function(e){return c.a.createElement("li",{className:"collection-item grey white-text",key:a.id+e.type},"Type: ",e.type," ",c.a.createElement("br",null),"Value: ",e.value)})))))))});var w=function(){return c.a.createElement(s.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(o,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:g}),c.a.createElement(i.a,{path:"/champion/:champName",component:y})),c.a.createElement(d,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=t(15),x=function(e,a){return a.type,e},D=t(35);t.n(D).a.get("https://solomid-resources.s3.amazonaws.com/blitz/tft/data/champions.json?api_key=".concat("RGAPI-978ac3cc-3162-47e8-94c8-13346d3b52d8")).then(function(e){C({championData:Object.entries(e.data)})}).catch(function(e){console.log(e,"index.js"),C({championData:[]})});var C=function(e){var a=Object(k.b)(x,e);console.log(a.getState(),"index.js"),r.a.render(c.a.createElement(u.a,{store:a},c.a.createElement(w,null)),document.getElementById("root"))};"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.93183c6d.chunk.js.map