// Write your JavaScript code here.
// Remember to pay attention to page loading!

//window load
window.addEventListener("load", function() {
    console.log("window loaded");
});
function init() {
    let verticalMovement = 250;
    let horizontalMovement = 0;
    
    function takeOffClicked() {
        let answer = window.confirm("Confirm that the shuttle is ready for takeoff.");
        
        if (answer) {
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").innerHTML = 10000;
        }
    }
    document.getElementById("takeoff").addEventListener("click", takeOffClicked);

    function landClicked() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
        document.getElementById("rocket").style.top = "250px";
        document.getElementById("rocket").style.right = "0px";
        verticalMovement = 250;
        horizontalMovement = 0;
    }
    document.getElementById("landing").addEventListener("click", landClicked);

    function abortClicked() {
        let answer = window.confirm("Confirm to abort the mission.")

        if (answer) {
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.background = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = 0;
            document.getElementById("rocket").style.top = "250px";
            document.getElementById("rocket").style.right = "0px";
            verticalMovement = 250;
            horizontalMovement = 0;
        }
    }
    document.getElementById("missionAbort").addEventListener("click", abortClicked);

    
    function upClick(height) {
        verticalMovement -= 10;
        document.getElementById("rocket").style.top = verticalMovement + "px";

        if (verticalMovement <= 0) {
            verticalMovement = 0;
            document.getElementById("rocket").style.top = verticalMovement + "px";
        }
        

        let addHeight = Number(document.getElementById("spaceShuttleHeight").innerHTML) + 10;
        document.getElementById("spaceShuttleHeight").innerHTML = String(addHeight);
    
        
    }
    document.getElementById("up").addEventListener("click", upClick);

    function downClick() {
        verticalMovement += 10;
        document.getElementById("rocket").style.top = verticalMovement + "px";
        
        if (verticalMovement >= 250) {
            verticalMovement = 250;
            document.getElementById("rocket").style.top = verticalMovement + "px";
        }
        let decreaseHeight = Number(document.getElementById("spaceShuttleHeight").innerHTML) - 10;
        document.getElementById("spaceShuttleHeight").innerHTML = String(decreaseHeight);

        if (Number(document.getElementById("spaceShuttleHeight").innerHTML) <= 0) {
            document.getElementById("spaceShuttleHeight").innerHTML = String(0);
        }
    }
    document.getElementById("down").addEventListener("click", downClick);

    
    function leftClick() {
        horizontalMovement += 10;
        document.getElementById("rocket").style.right = horizontalMovement + "px";

        if (horizontalMovement >= 190) {
            horizontalMovement = 190;
            document.getElementById("rocket").style.right = horizontalMovement + "px";
        }
    }
    document.getElementById("left").addEventListener("click", leftClick);

    function rightClick() {
        horizontalMovement -= 10;
        document.getElementById("rocket").style.right = horizontalMovement + "px";

        if (horizontalMovement <= -190) {
            horizontalMovement = -190;
            document.getElementById("rocket").style.right = horizontalMovement + "px";
        }
    }
    document.getElementById("right").addEventListener("click", rightClick);
}

window.onload = init;