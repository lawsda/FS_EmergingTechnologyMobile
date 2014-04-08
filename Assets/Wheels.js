#pragma strict


function Start () {

}

function Update () {
	var rotationAmount = Input.GetAxis("Vertical") * 5;
	transform.Rotate(0, rotationAmount, 0);
}