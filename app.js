function getNumber(num)
{
    var input = document.getElementById("input");
    input.value +=num;
}

function clearResult()
{
    var getResult = document.getElementById('input');
    getResult.value ="";
}

function getResult() {
    var result= document.getElementById('input');
    input.value= eval(input.value);
}
