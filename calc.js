function display(num) {
    Result.value+=num
    
}
function allclear() {
    Result.value=""
    
}
function evaluateexp() {
    Result.value=eval(Result.value)
    // currentexp=result.value
    // result.value=eval(currentexp)
    
}
function backspace() {
    Result.value=Result.value.slice(0,-1)
    // data=result.value
    // s=data.slice(0,-1)
    // result.value=s
    
}
