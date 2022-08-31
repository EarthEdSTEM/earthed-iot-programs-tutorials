# T_Radio_Chat_Tutorial

<!---------------------------------------------------------------
------------------------- Radio Chat TUTORIAL-----InComplete-----
----------------------------------------------------------------->

## Step 1 About the Radio @showdialog

![](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_DHT11/DHT11_Banner.gif)
One of the fundamental ideas behind IoT, is the connection between multiple computers. Micro:bits can communicate using short range radio signals. The Radio menu contains commands for sending and recieving data.<br>
In this tutorial we will connect two micro:bit computers and send 'Chat' messages between them. For IoT projects, the goal would be to share data.
-------------------------------------------

## Step 2 Collect the parts. @unplugged
Collect the parts
-----------------
For this tutorial, you will need these parts: <br>
2x micro:bit computers, <br>
Work with a partner. Connect and pair each micro:bit to a computer.<br>
![Parts Needed: 2x micro:bits,](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Crash_Sensor/IoT_Crash_Sensor_Parts_List.png)
<br>

## Step 3 - Create the code
Coding: Create the Code
--------------------------
This code begins by setting the radio group. 

```blocks
input.onButtonPressed(Button.A, function () {
    radio.sendString(":)")
    basic.showString(":)")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
```