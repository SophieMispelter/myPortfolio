function toggleMenu()
{
    var maDiv = document.getElementById('hiddenbody');
    var monAnim = document.getElementsByClassName('introAnim');
    // console.log(maDiv);
    // console.log(monAnim);
    // console.log(monAnim[0]);

    monAnim[0].style.display = "none";
    maDiv.style.display = "block";
}

function isLoaded()
{
    // console.log("test");
    // console.log(screen.width);
    // console.log(screen.height);
    // console.log(window.innerWidth);
    // console.log(window.innerHeight);

    var myContainer = document.getElementsByClassName('introAnim');
    // console.log(myBody);

    myContainer[0].style.width = window.innerWidth + 'px';
    myContainer[0].style.height = window.innerHeight + 'px';
}