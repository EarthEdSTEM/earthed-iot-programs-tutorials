# T_IoT_Network

<!---------------------------------------------------------------  
-------------------IoT_Network_Tutorial------InComplete----------
----------------------------------------------------------------->
### @activities true

## Introduction
### Introduction @showdialog

![](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_IoT_Network/IoT_Network_Banner.gif)
About IoT
-----------------
In an IoT system such as a smart home, a series of devices interact with each other to automate everyday tasks. Often in such a system, a 'cloud' based server is used to process the data that is being received and to allow multiple devices to interact with each other.<br>

**This is an advanced tutorial and relies on skills learnt in previous tutorials.**<br>

### Introduction @unplugged
About IoT Systems
-----------------
At the centre of an IoT system is the Gateway. This device connects IoT devices and sensors to cloud-based computing and data processing. An example of this that you might see in a home is an Alexa or Google Hub.<br>
In the image above, a sensor collects data and sends it to the Gateway. From the Gateway, the data is sent to a server. This server is sometimes refered to as 'The Cloud', but really, it is just a big computer with lots of storage space. <br>
The 'Back End' is the software that is used to process the data on the server. This is used to interact with the user interface, collect information, sort it and prepare responses which are sent back to the IoT devices on the system.
![](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_IoT_Network/IoT%20System.png)

### IoT Network Tutorial Goals
Tutorial Goals
-----------------
In this set of tutorials, we will aim to simulate an IoT System. We will use several micro:bit computers, communicating wirelessly, to trigger an event.

### What you will need
What you will need
-----------------
This set of tutorials require a micro:bit computer and battery pack for each device on the system, plus one more to simulate the Gateway. <br>
In addition, you will need devices and connectors, depending on how you configure your system.<br>

## Section 1 - Code an Actuator Device  @showdialog
![](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_IoT_Network/IoT_Network_Banner.gif)
Code an Actuator Device
---------------------
Each section requires its own micro:bit computer and MakeCode file.
We will start this section by preparing an actuator device. For this example it will be a fan, but ither devices can be subsituted.<br>
 

### Step 1 Connections
Connections
-----------------
Connect the components and then set the Radio Group. Each device that you want to communicate with, needs to be in the same Radio Group.
1. Connect one micro:bit, one battery pack and one connector wire.
2. Drag a ``||radio: Set Radio Group||`` block into the ``||Basic: on start||`` block.<br>
3. Set the **Radio Group to 1**
```blocks
radio.setGroup(1)
```
### Step 2 Receive a String via Radio
Receive a String via Radio
-----------------
For this tutorial, the trigger to turn on the fan will be received via the radio on the micro:bit.
1. **Drag** a ``||radio: on radio received receivedString||`` block on to the desktop. This is a function block like Forever.
2. Place a ``||Logic:if||`` block inside the ``||radio: on radio received receivedString||``
```blocks
radio.onReceivedString(function (receivedString) {
    if (receivedString == "FanOn") {
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
```
### Step 3 Receive a String via Radio cont.
Receive a String via Radio cont.
-----------------
1. Place a 
2. **Drag** the ``||radio: receivedString||`` block from. This is a function block like Forever.
2. Place a ``||Logic:if||`` block inside the ``||radio: on radio received receivedString||``
```blocks
radio.onReceivedString(function (receivedString) {
    if (receivedString == "FanOn") {
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
```

<br>**Download your work to your micro:bit**<br><br>
<br><br>
** [- Click here to continue to the next section](https://sites.google.com/earthed.vic.edu.au/tutorial-iot/home)**<br>
[- Click here to return to the menu](https://sites.google.com/earthed.vic.edu.au/tutorial-iot/home)<br>

<script src="https://makecode.com/gh-pages-embed.js" > </script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{ { site.github.repository_name } } ");</script>

----------------------------------------------
