# T_IoT_Network

<!---------------------------------------------------------------  
-------------------IoT_Network_Tutorial------InComplete----------
----------------------------------------------------------------->
### @activities true

## Introduction @showdialog

![](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_IoT_Network/IoT_Network_Banner.gif)
About IoT
-----------------
In an IoT system such as a smart home, a series of devices interact with each other to automate everyday tasks. Often in such a system, a 'cloud' based server is used to process the data that is being received and to allow multiple devices to interact with each other.<br>

**This is an advanced tutorial and relies on skills learnt in previous tutorials.**<br>

## Step 2 IoT Network Tutorial @showdialog

![](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_IoT_Network/IoT%20System.png)
About IoT Systems
-----------------
At the centre of an IoT system is the Gateway. This device connects IoT devices and sensors to cloud-based computing and data processing. An example of this that you might see in a home is an Alexa or Google Hub.<br>
In the image above, a sensor collects data and sends it to the Gateway. From the Gateway, the data is sent to a server. This server is sometimes refered to as 'The Cloud', but really, it is just a big computer with lots of storage space. <br>
The 'Back End' is the software that is used to process the data on the server. This is used to interact with the user interface, collect information, sort it and prepare responses which are sent back to the IoT devices on the system.

## Step 3 IoT Network Tutorial Goals
![](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_IoT_Network/IoT_Network_Banner.gif)
Tutorial Goals
-----------------
In this tutorial, we will aim to simulate an IoT System.

## Step 4 What you will need
![](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_IoT_Network/IoT_Network_Banner.gif)
What you will need
-----------------
This tutorial requires a micro:bit computer and battery pack for each device on the system, plus one more to simulate the Gateway. <br>
In addition, you will devices and connectors, depending on how you configure your system.<br>

## Step 5 IoT First Link
![](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_IoT_Network/IoT_Network_Banner.gif)
First Link
-----------------
Begin with the code from the Chat Tutorial.
```blocks
radio.onReceivedString(function (receivedString) {
    if (receivedString == "On") {
        smarthome.motorFan(AnalogPin.P2, true)
    } else if (receivedString == "Off") {
        smarthome.motorFan(AnalogPin.P2, false)
    } else {
        if (receivedString == "Pulse") {
            for (let index = 0; index < 4; index++) {
                smarthome.motorFan(AnalogPin.P2, true)
                basic.pause(500)
                smarthome.motorFan(AnalogPin.P2, false)
                basic.pause(500)
            }
        }
    }
})

radio.setGroup(1)
```

<br>**Under construction**<br><br>
** [- Click here to return to the menu](https://sites.google.com/earthed.vic.edu.au/tutorial-iot/home)**<br>

<script src="https://makecode.com/gh-pages-embed.js" > </script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{ { site.github.repository_name } } ");</script>

----------------------------------------------
