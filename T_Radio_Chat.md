# Radio Chat Tutorial

<!----Radio Chat TUTORIAL---------------------------Complete-----
-----------------------------------------------------------------
----------------------------------------------------------------->

## Step 1 About the Radio @showdialog

![](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Radio_Chat/Radio_Chat_Banner.gif)
-------------------------------------------
One of the fundamental ideas behind IoT, is the connection between multiple computers. Micro:bit computers can 
communicate using short range radio signals. The Radio menu contains commands for sending and receiving data.<br>
In this tutorial we will connect two micro:bit computers and send 'Chat' messages between them. 
For IoT projects, the goal would be to share data.
 

## Step 2 Collect the parts.
Collect the parts
-----------------
For this tutorial, you will need 2x micro:bit computers, connected to two computers via USB - one for you and one for your partner.<br>
Both you and your partner will need to create the code the following pages. Click 'Next'.<br>

## Step 3 - Create the code
Coding: Set the radio group
--------------------------
This code begins by setting the radio group. Any micro:bit on this radio group can communicate if they have the right coding. When commanded to, 
the micro:bit sends a packet of data using wifi. A data packet is a unit of data made into a single package that travels along a given network 
path. The radio group number is placed at the front (first bit) of the packet, so that other micro:bits know that the data packet is for them.<br>
Place a ``||radio: Set Radio Group||`` block into the ``||Basic: on start||`` block.<br>
The number in the place holder needs to be the same as the one on your partner's computer.

```blocks
radio.setGroup(1)
```
## Step 4 - Create the code
Coding: Create a send button
--------------------------
1. Use ``||Input: on Button A pressed||`` block to send a message. Here it will be a smiley face. 
2. Select a ``||radio: Send string||`` block and add it inside the ``||Input: on Button A pressed||`` block. 
This command sends a string (text) over the micro:bit's radio, each .
3. Add a ``||Basic: Show string||`` block to show that the text has been sent.
4. Place a 'smiley face' into each place holder.

```blocks
input.onButtonPressed(Button.A, function () {
    radio.sendString(":)")
    basic.showString(":)")
})

```
## Step 5 - Create the code
Coding: Receive a message
--------------------------
1. Add a ``||radio: on radio received||`` block to the work space.
2. Add a ``||Basic: Show string||`` block **inside** the ``||radio: on radio received||`` block.
3. **Drag** the ``||radio: receivedString block||`` from the ``||radio: on radio received||`` block place holder 
and **place** it into the placeholder on the ``||Basic: Show string||`` block.

```blocks
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
```
## Step 6 - Extending further
Extending further
--------------------------
In this example we used an ``||Input: on Button A pressed||`` block as the trigger to start the radio event. 
A trigger could be creaed using another input or a sensor. 
Eg. A computer senses a high body temperature and tells a security computer to make an automated announcement. 
The security computer then tells a traffic flow computer to shut transit gates.<br>
What ideas can you come up with? You can exit here or move on to more advanced ideas.<br>

## Step 7 - Extending further
Extending further
--------------------------
In this section, we will use one micro:bit to switch on a fan attached to a second micro:bit.
You will need a partner and two computers,  two micro:bit computers, an GPIO shield, a fan and a connecting wire.

## Step 8 - Extending further
Connections
--------------------------
Connect one micro:bit to a computer via USB.<br>
Connect the other micro:bit to a computer via USB, place it into the GPIO shield, then attach the fan to Pin 16. 

## Step 9 - Create the code for Computer One
Coding: Set the radio group
--------------------------
**On computer 1**<br>
Place a ``||radio: Set Radio Group||`` block into the ``||Basic: on start||`` block.<br>
The number in the place holder needs to be the same as the one on your partner's computer. 
It is similar to switching to a particular station on a Walkie-Talkie.<br>
**Repeat this step on Computer Two**
```blocks
radio.setGroup(1)
```

## Step 10 - Create the code for Computer One
Coding: Set micro:bit One to send
--------------------------
**On computer 1**<br>
1. Use ``||Input: on Button A pressed||`` block to send a message. Here, pressing Button A will send an 'On' command. 
2. Select a ``||radio: Send string||`` block and add it inside the ``||Input: on Button A pressed||`` block. 
This command sends text over the micro:bit radio.
3. Add a ``||Basic: Show string||`` block to show that the text has been sent.
4. Type the word **'On'** into each place holder.

```blocks
input.onButtonPressed(Button.A, function () {
    radio.sendString("On")
    basic.showString("On")
})
```

## Step 11 - Create the code for Computer One
Coding: Set micro:bit One to send continued
--------------------------
**On computer 1**<br>
1. Use ``||Input: on Button B pressed||`` block to send a message. Here, pressing Button B will send an 'Off' command. Click the down arrow on the ``||Input: on Button A pressed||`` to access Button B.
2. Select a ``||radio: Send string||`` block and add it inside the ``||Input: on Button B pressed||`` block.
3. Add a ``||Basic: Show string||`` block to show that the text has been sent.
4. Type the word **'Off'** into each place holder.

```blocks
input.onButtonPressed(Button.B, function () {
    radio.sendString("Off")
    basic.showString("Off")
})
```
## Step 12 - Create the code for Computer One
Coding: Set micro:bit One to send continued
--------------------------
**On computer 1**<br>
1. Use ``||Input: on Button A+B pressed||`` block to send a message. Here, pressing **both Buttons** will send a 'Pulse' command. 
2. Select a ``||radio: Send string||`` block and add it inside the ``||Input: on Button A+B pressed||`` block.
3. Add a ``||Basic: Show string||`` block to show that the text has been sent.
4. Type the word **'Off'** into each place holder.

```blocks
input.onButtonPressed(Button.AB, function () {
    radio.sendString("Pulse")
    basic.showString("Pulse")
})
```
## Step 13 - Create the code for Computer One
Coding: Set micro:bit One to send continued
--------------------------
**On computer 2**<br>
1. Check that the radio group is the same as your partner's.
2. Check which Pin the fan is connected to on the GPIO shield.
3. Place an  ``||Logic: If||`` block into the ``||Basic: Forever||`` block.

## Step 14 - Create the code for Computer One
Coding: Receive a message
--------------------------
**On computer 2**<br>
1. Add a ``||radio: on radio received||`` block to the work space.
2. Add a ``||Basic: Show string||`` block **inside** the ``||radio: on radio received||`` block.
3. **Drag** the ``||radio: receivedString block||`` from the ``||radio: on radio received||`` block place holder 
and **place** it into the placeholder on the ``||Basic: Show string||`` block.

```blocks
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
```

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



** [- Click here to return to the menu](https://sites.google.com/earthed.vic.edu.au/tutorial-iot/home)**<br>


<script src="https://makecode.com/gh-pages-embed.js" > </script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{ { site.github.repository_name } } ");</script>
