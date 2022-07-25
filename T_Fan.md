# T_Fan Tutorial
<!---------------------------------------------------------------
----------------------- FAN TUTORIAL---------------------------
----------------------------------------------------------------->


## Step 1 - Control a Fan @showdialog

![](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/General/EarthEd_Horizontal_Logo.png)
Control a Fan
---------------------------------

In this tutorial we will use input commands and output pins, to activate a fan. The pins can be switched between active (having power) or not active (not having power) states. Pins can also receive signals from sensors.

## Step 2 - Collect the parts. @unplugged
Collect the parts
-----------------
For this tutorial, you will need these parts: <br>
1x iot:bit sheild, 1x micro:bit, 1x Connector Wire, 1x Fan <br><br>
![Parts Needed: 1x iot:bit sheild, 1x micro:bit, 1x Connector Wire, 1x Fan](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Fan/IoT_Fan_Parts_List.png)
<br>

## Step 3 - Connect Up!
Connect the Parts Together
--------------------------
1. Plug the micro: bit into the iot:bit sheild.
2. Connect the wire to Pin 2 on the iot:bit sheild.
3. Connect the other end of the wire to the Fan.
![image](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Fan/IoT_Fan_Connections.png)

## Step 4 - Prepare to Code!
Delete unused blocks if needed
------------------------------
1. If starting fresh, clear the previous blocks by dragging them to the menu bar where a 'bin' will appear.
2. Place a ``||basic: forever||`` block and a ``||on start||`` onto the work space.
![Image](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/General/Delete_blocks.png)

## Step 5 - Set the Environment
Coding: Creating Variables
--------------------------
Setting up the environment means getting things ready for the program. In this case, we will set up the variables we will use. Variables are containers that hold a value.
1. Click ``|| Variables: Make a Variable...||`` to create a variable and call it 'FanOn'.
2. Go to ``|| Variables ||`` and place the ``|| Variables: Set FanOn to||`` block inside the ``|| Basic: on Start ||`` block.
3. Check that the value of the ``|| Variables: Set FanOn to||`` is set to '0'. This will ensure that the fan doesn't run until it is switched on.
![Image](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Fan/IoT_Fan_Create_Variables.png)

## Step 6 - Add some inputs
Coding: Add Inputs to Trigger the Fan
---------------------------------------
For this tutorial, we will use Buttons A and B on the Microbit as user inputs to trigger the fan. Pressing a button will store either a '1' for true or a '0' for false.
1. Place a ``||input: If Button A Pressed||`` block from the Input menu onto the workspace.
2. Go to ``||Variables||`` and place a ``||Variables: Set FanOn to||`` block in the ``||input: If Button A Pressed||`` block.
3. Go to ``||Variables||`` and replace the value '0' with the rounded FanOn block.
4. Repeat steps 1 - 3 to create an input for Button B.

```blocks
input.onButtonPressed(Button.A, function () {
    FanOn = 1
})
input.onButtonPressed(Button.B, function () {
    FanOn = 0
})
```

## Step 7 - Add the Fan Control Command
Coding: Add the Fan Control Command
-------------------------------------
1. Place a ``||Pins: DigitalWritePin||`` block from the ``||Pins||`` menu into the ``||Basic: Forever||`` block. Set the Pin to '16'.
2. Add a ``||variables: FanOn||`` block into the value box to replace the '0'. When FanOn is "1" (true), power is sent to Pin 16. When '0', no power is sent.
** Note: The Pin value on the ``||Pins: DigitalWritePin||`` block can be changed, but needs to match the pin number that the fan is attached to. This is useful when more than one device or sensor is attached to the iot:bit sheild<br>

```blocks
input.onButtonPressed(Button.A, function () {
    FanOn = 1
})
input.onButtonPressed(Button.B, function () {
    FanOn = 0
})
let FanOn = 0
FanOn = 0
basic.forever(function () {
    if (FanOn == 1) {
        pins.digitalWritePin(DigitalPin.P0, 16)
    }
})

```
## Step 8 - Optional Relay
Optional relay
------------------
The voltage from the IoT:Bit is three volts and may not be enough to start the motor. Check by turning the fan. One way to solve this, is by using a relay. A relay is an electronic switch. A low voltage signal triggers the switch which allows a higher voltage or current to pass through an attached circuit.
To use a relay, attach the wires from Pin 16 to the low voltage trigger on teh relay. Attach a high voltage fan circuit to the high voltage 
## Step 9 - Test It
Test It! Debug it!
------------------
Time to test your code. Download the code to the micro:bit and try it out. Observe what happens and adjust the values as needed.<br>
How could you integrate the other sensors into your code to trigger the servo in a different way?<br><br>


Congratulations! You have finished this tutorial.
** [- Click here to return to the menu](https://sites.google.com/earthed.vic.edu.au/tutorial-iot/home)**<br>


<script src="https://makecode.com/gh-pages-embed.js" > </script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{ { site.github.repository_name } } ");</script>

