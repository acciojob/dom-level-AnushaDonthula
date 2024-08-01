//your JS code here. If required.
window.onload = function() {
    function getDomLevel(elementId) {
        let element = document.getElementById(elementId);
        let level = 0;

        while (element) {
            level++;
            element = element.parentElement;
        }

        return level;
    }

    const elementId = 'level';
    const domLevel = getDomLevel(elementId);
    alert(`The level of the element is: ${domLevel}`);
};
