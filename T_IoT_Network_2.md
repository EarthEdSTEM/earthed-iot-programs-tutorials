# T_IoT_Network_2

<!---------------------------------------------------------------  
-------Section 2 of IoT_Network_Tutorial------InComplete--------
----------------------------------------------------------------->
### @activities true

## Introduction
### Introduction @unplugged

![](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_IoT_Network/IoT_Network_Banner.gif)
About IoT
-----------------
In the previous section, we created an IoT actuator device (in this case a fan). In this section, we will code the Gateway.<br>
Connect and pair the micro:bit you intend to use as the Gateway.
**This is part two of this tutorial sequence.**<br>

## Section 1 - Code the Gateway Device  @showdialog
![](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_IoT_Network/IoT_Network_Banner.gif)
Code the Gateway Device
---------------------
The Gateway device transmits and receives data between the IoT control and actuator devices and the server or 'Cloud'. 
In this tutorial we will code a micro:bit computer to receive data from a sensor and then switch on a fan depending on the value of the data.

### Step 1 Connections
Connections
-----------------
Connect the components and then set the Radio Group to the one used in the previous section.
1. Connect one micro:bit, one IoT:Bit, one battery pack and one connector wire.
2. Drag a ``||radio: Set Radio Group||`` block into the ``||Basic: on start||`` block.<br>
3. Set the **Radio Group to 1**.
```blocks
radio.setGroup(1)
```
### Step 2 Receive a String via Radio
Receive a String via Radio
-----------------
For this tutorial, the Gateway will listen for an "OverTemp" message from a sensor, transmitting a trigger to an actuator (fan) when it does.
1. **Drag** a ``||radio: on radio received receivedString||`` block on to the desktop.
2. Place an ``||Logic:if||`` block inside the ``||radio: on radio received receivedString||`` block.

```blocks
radio.onReceivedString(function (receivedString) {
    if () {

    }
})
```

### Step 3 Receive a String via Radio cont.
Receive a String via Radio cont.
-----------------
Next we will add a boolean to check the if string received from the sensor device equals "OverTemp". This string text can say anything, but should relate to the sensor you are using - in this case, a thermometer.
1. **Drag** an ``||Logic: = ||`` boolean block into the placeholder on the ``||Logic:if||`` block.
2. **Drag** the ``||Radio:receivedString||`` from the place holder in the ``||radio: on radio received receivedString||`` block to the **first** placeholder in the ``||Logic: = ||`` boolean block.
3. Type **"OverTemp"** into the **second** placeholder.

```blocks
radio.onReceivedString(function (receivedString) {
    if (receivedString == "OverTemp") {
      
    }
})
```

### Step 4 Receive a String via Radio cont.
Transmit a String via Radio
-----------------
1. **Place** a ``||Radio:radio send string||`` into the ``||Logic:if||`` block.
2. Type **"FanOn"** into the placeholder.


```blocks
radio.onReceivedString(function (receivedString) {
    if (receivedString == "OverTemp") {
        radio.sendString("FanOn")
    }
})
radio.setGroup(1)
```

### Step 5 Save and Download
Save and Download
-----------------
This is the end of the Gateway section. Before you move on to code the Sensor:<br>
1. **Download your work to your micro:bit**<br>
2. **[Click this link to continue to the next section](https://www.google.com/url?q=https%3A%2F%2Fmakecode.microbit.org%2F%23tutorial%3Agithub%3Aearthedstem%2Fearthed-iot-programs-tutorials%2FT_IoT_Network_3&sa=D&sntz=1&usg=AOvVaw3jaYNJlZTmHx4bGHfEZMW-)**<br>
<br>[- Click here to return to the Home menu](https://sites.google.com/earthed.vic.edu.au/tutorial-iot/home)<br>
 

<script src="https://makecode.com/gh-pages-embed.js" > </script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{ { site.github.repository_name } } ");</script>

----------------------------------------------
