function openInfographicPopup() {
    // Create a new window for the pop-up
    var popupWindow = window.open('about:blank', '_blank', 'width=500,height=500');

    // Create an iframe within the pop-up window to display the PDF
    var iframe = document.createElement('iframe');
    iframe.src = 'assets/cv/TSCO infograph updated.pdf';
    iframe.style.width = '100%';
    iframe.style.height = '100%';

    // Append the iframe to the pop-up window
    popupWindow.document.body.appendChild(iframe);
}
