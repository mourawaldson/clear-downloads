chrome.downloads.onChanged.addListener(function (delta) {
    if (delta.state && delta.state.current == 'complete') {
        chrome.downloads.erase({id : delta.id});
    }
});
