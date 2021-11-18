/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

import { Sound } from "@workadventure/iframe-api-typings/Api/iframe/Sound/Sound";
import {bootstrapExtra} from "@workadventure/scripting-api-extra";

// The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure.
bootstrapExtra().catch(e => console.error(e));

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
let stream ="https://ilmprokombinat.ddns.net/ilmpro"

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



//mySound.stop();