document.addEventListener('DOMContentLoaded', function() {
    var saveOptionsButton = document.getElementById('saveOption');
    var apiKey = document.getElementById('apiKey');
    saveOptionsButton.addEventListener('click', function() {

        chrome.tabs.getSelected(null, function(tab) {
            d = document;
            chrome.storage.sync.set({apiKey: apiKey.value}, function() {

            });

        });
    }, false);
}, false);