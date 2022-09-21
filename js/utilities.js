function getInputValue(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.value;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}
