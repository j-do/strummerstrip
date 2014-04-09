chrome.app.runtime.onLaunched.addListener(function() {
    var width = 800;
    var height = 150;

    chrome.app.window.create('index.html', {
        id: "StummerStripID",
        bounds: {
            width: width,
            height: height
        },
        resizable: true
    });
});