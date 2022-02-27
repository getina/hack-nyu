chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript({
      file: 'jquery-3.6.0.min.js'
  }, function() {
      // Guaranteed to execute only after the previous script returns
      chrome.tabs.executeScript({
          file: 'script.js'
      });
  });
});

/**
chrome.runtime.onInstalled.addListener( () => {
  chrome.contextMenus.create({
    id: 'textBox',
    title: "textbox: %s", 
    contexts:[ "selection" ]
  });
});

chrome.contextMenus.onClicked.addListener( ( info, tab ) => {
  if ( 'textBox' === info.menuItemId ) {
    notify( info.selectionText );
  }
} );
*/