# T_IoT_Network

<!---------------------------------------------------------------  
---------Section 1 of IoT_Network_Tutorial----InComplete----------
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
This set of tutorials require a micro:bit computer, IoT:Bit sheild and battery pack for each device on the system, plus one more to simulate the Gateway. <br>
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
3. Set the **Radio Group to 1**.
```blocks
radio.setGroup(1)
```
### Step 2 Receive a String via Radio
Receive a String via Radio
-----------------
For this tutorial, the trigger to turn on the fan will be received via the radio on the micro:bit.
1. **Drag** a ``||radio: on radio received receivedString||`` block on to the desktop. This is a function block like Forever.
2. Place a ``||Logic:if||`` block inside the ``||radio: on radio received receivedString||``.
3. Click the **'+'** to add an **'else'** section.

```blocks
radio.onReceivedString(function (receivedString) {
    if () {
        
    } else {
       
    }
})
```

### Step 3 Receive a String via Radio cont.
Receive a String via Radio cont.
-----------------
Next we will add a boolean to check the message received from the Gateway.
1. **Drag** a ``||Logic: = ||`` boolean block into the placeholder on the ``||Logic:if||`` block.
2. **Drag** the ``||Radio:receivedString||`` from the place holder in the ``||radio: on radio received receivedString||`` block to the **first** placeholder in the ``||Logic: = ||`` boolean block.
3. Type **"FanOn"** into the **second** placeholder.

```blocks
radio.onReceivedString(function (receivedString) {
    if (receivedString == "FanOn") {
        
    } else {
       
    }
})
```

### Step 4 Receive a String via Radio cont.
Receive a String via Radio cont.
-----------------
1. Place a ``||pins:digital write pin||`` block into the **'if'** section of the ``||Logic:if||`` block.
2. Set the Pin number. This will be the pin used to connect to the sensor/actuator device the IoT:Bit Sheild.
3. Place a ``||pins:digital write pin||`` block into the **'else'** section of the ``||Logic:if||`` block.
4. Set the Pin number to match the **'if'** section.

```blocks
radio.onReceivedString(function (receivedString) {
    if (receivedString == "FanOn") {
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
```

### Step 5 Save and Download
Save and Download
-----------------
This is the end of this section. Before you move on to code the Gateway:<br>
1. **Download your work to your micro:bit**<br>
2. **[Click this link to continue to the next section](https://www.google.com/url?q=https%3A%2F%2Fmakecode.microbit.org%2F%23tutorial%3Agithub%3Aearthedstem%2Fearthed-iot-programs-tutorials%2FT_IoT_Network_2&sa=D&sntz=1&usg=AOvVaw3jaYNJlZTmHx4bGHfEZMW-)**<br>
<br>[- Click here to return to the Home menu](https://sites.google.com/earthed.vic.edu.au/tutorial-iot/home)<br>
 

<script src="https://makecode.com/gh-pages-embed.js" > </script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{ { site.github.repository_name } } ");</script>

----------------------------------------------
