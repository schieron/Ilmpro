/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

import { Sound } from "@workadventure/iframe-api-typings/Api/iframe/Sound/Sound";
import {bootstrapExtra} from "@workadventure/scripting-api-extra";

console.log('Skript is Staten');
// The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure.
bootstrapExtra().then(() =>{
    console.log('API is runnig');
}).catch(e => console.error(e));

let currentPopup: any = undefined;
let playAuftritt: any = undefined;
const today = new Date();
const time = today.getHours() + ":" + today.getMinutes();

WA.room.onEnterZone('clock', () => {
    currentPopup =  WA.ui.openPopup("clockPopup","It's " + time,[]);
})

WA.room.onLeaveZone('clock', closePopUp)


function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}



// let stream = "ilmpro.m3u"
let stream ="https://schieron.ddns.net:8443/ilmpro.opus"

WA.room.onEnterZone('life', () => {
    console.log("Enter Zone")
    playAuftritt =  WA.sound.loadSound(stream);
    var config = {
        volume : 1.5,
        loop : false,
        rate : 1,
        detune : 1,
        delay : 0,
        seek : 0,
        mute : false
    }
    playAuftritt.play(config);
});


WA.room.onLeaveZone('life', stopStream)
function stopStream(){
    playAuftritt =  WA.sound.loadSound(stream);
    var config = {
        volume : 1.5,
        loop : false,
        rate : 1,
        detune : 1,
        delay : 0,
        seek : 0,
        mute : true
    }
    playAuftritt.stop();
}

/*
WA.onInit().then(() => {
    console.log("Scripting API Ok");
    WA.room.onEnterLayer(layername: 'door').subscribe(next : () => {
       (WA.state.voteA as number)++;
      //  currentPopup =  WA.ui.openPopup("door","Enter The Password",[]);
      //  WA.chat.sendChatMessage("Hello!", "Mr Robot");
   })
}).catch(e => console.error(e));
    

WA.room.onEnterLayer('myLayer').subscribe(() => {
    WA.chat.sendChatMessage("Hello!", 'Woka');
});

WA.room.onLeaveLayer('myLayer').subscribe(() => {
    WA.chat.sendChatMessage("Goodbye!", 'Woka');
});

/*
WA.room.onEnterZone('door', () => {
    currentPopup =  WA.ui.openPopup("door","Enter The Password",[]);
})
*/

//WA.room.onLeaveZone('door', closePopUp)

