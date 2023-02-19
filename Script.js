// ==UserScript==
// @name         Message sender
// @description  Sending Messages
// @author       Huntresse
// @match        https://www.torn.com/messages.php*
// @grant        none
// ==/UserScript==

function addButton() {
        var counter=0
        let div = '<span id="demo" style="margin-left: 0; margin-right: 0;"></span>';
        const button = '<button id="SendBeer" style="color: var(--default-blue-color); cursor: pointer; margin-right: 4px; margin-left: 3px;"> cut!</button>'
        $('div.header-wrapper-bottom').append(button).append(div);
        $('#SendBeer').on('click', async () => {
            await getAction({
                type: 'post',
                action: 'messages.php',
                data: {
                    step: 'sendMessage',
                    confirm: 1,
                    step: "sendMessage",
                    sendto: "2339855",
                    msg: "<p>Check whatsapp bruh</p>",
                    subject: "Why not? hehe!",
                    theanon: "0",
                    prevID: "0"
                },
                success: (str) => {
                    try {
                        const msg = JSON.parse(str);
                        $('#demo').html('Works').css('color', msg.success ? 'green' : 'red');
                    } catch (e) {
                        console.log(e);
                    }
                }
            });
        });
    }


(function() {
    'use strict';

    addButton();
})();
