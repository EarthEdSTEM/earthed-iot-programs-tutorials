# T_LED
<! To do:
    -Change URLs for Graphics
    - Change the variables graphics
>
<!  ---------------------------------------------------------------
    ------------------------- LED TUTORIAL-------------------------
    --------------------------------------------------------------- >

## Step 1 Coding Light Emitting Diodes (LED's) @showdialog
--------------------
In this tutorial, we will use [variables](https://launchschool.com/books/ruby/read/variables) and booleans to control a Light Emitting Diode (LED).
![](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/Earth%20Ed%20Horizontal%20Logo.png)



## Step 2 - Collect the parts. @unplugged
Collect the parts
-----------------
For this tutorial, you will need these parts: <br>
1x Servo Motor, 1x IoT: Bit sheild, 1x micro: bit, 1x Connector Wire < br > <br>
![Parts Needed: 1x IoT Smart City LED (Red, Green or Yellow), 1x IoT: Bit sheild, 1x micro: bit, 1x Connector Wire](https://raw.githubusercontent.com/EarthEdSTEM/IOT_Smart_City/main/Images/IoT_LED_Parts_List.svg)
<br>

## Step 3 - Connect Up!
Physical Connections
--------------------
1. Plug the micro:bit into the SensorBit sheild.
2. Use the wire to connect the LED to Pin 2 on the SensorBit sheild.
3. Connect the other end of the wire to the LED.
![image](https://raw.githubusercontent.com/EarthEdSTEM/IOT_Smart_City/main/Images/IoT_LED_Connections.svg)

## Step 4 - Prepare to Code!
Delete unused blocks
--------------------
1. Clear the previous blocks by dragging them to the menu bar.
2. Place a ``||basic:forever||`` block and a ``||basic: on start||`` onto the work space.
![Deleting code](https://raw.githubusercontent.com/EarthEdSTEM/IOT_Smart_City/main/Images/Delete_code.png)

## Step 5 - Create Variables (Setting the Environment)
Coding: Creating Variables
--------------------------
Variables are containers that hold a value. For this task, we will use the values 1 for 'true' and 0 for 'False'.
We will start by creating a new variable, adding it and then setting it to 'false'.
1. Click ``||Variables: Make a Variable...||`` to create a variable and call it ButtonAPress.
2. Go to ``||Variables: Variables||`` and place the ``||Variables:Set ButtonAPress to||`` block inside the ``||Basic:on Start||`` block.
3. Check that the value of the ``||Variables:Set ButtonAPress to||`` block is set to 0 (for false).
![Making a variable](https://raw.githubusercontent.com/EarthEdSTEM/IOT_Smart_City/main/Images/Make_variable.jpg)
Each time the program starts the value of ButtonAPress will be '0'.

## Step 6 - Add a Conditional Block
Coding: Add an If block
-----------------------
The switch for turning on the LED will be the A button on the micro:bit. We will use the 'If...then' Logic Block to check if the A button is pressed and if the LED is off. If both are true the LED is set to on.
1. Place a ``||logic:if||`` block from the Logic menu into the ``||basic.forever||`` block.

```blocks
let ButtonAPressed = 0
basic.forever(function () {
    if () {
     
})
```

## Step 7 - Add a Conditional Block
Coding: Set conditions
----------------------
This section asks the question: Is the A button pressed and the LED switched off? To code it:
1. Place a Boolean ``||logic:and||`` block from the Logic Menu into the placeholder at the top of the ``||logic:if||`` block. <br>
**Note that the placeholder has pointed ends. Only blocks with pointed ends can fit in the placeholder. The ``||logic:and||`` block has two placeholders with rounded ends for adding variables and values.
2. Place a Comparison ``||logic:equals||`` block from the Logic Menu into the placeholder at the top of the ``||logic:if||`` block. Add a ``||variables:ButtonAPress||`` and a value of 0.
3. Place a ``||input: button A is pressed||`` input into the ``||logic:and||``.
This section asks the question: Is the A button pressed and the LED switched off? To code it:

```blocks
let ButtonAPressed = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && ButtonAPress == 0) {
    
})
```

## Step 8 - Add a Conditional Block
Coding: If True
---------------
The 'if' block checks if a condition is 'true' and executes commands if it is. Here, we enable Pin 2 then pause, allowing the user to remove their finger from Button A.
1. Add a ``||pins:digital write pin||`` block to the ``||logic:if||`` and set it to 'P2' and 1.
2. Add a ``||control:waitMicros||`` and set it to 240 milliseconds. this will allow time for the button to be released.
3. Set the ButtonAPressed variable to 1 (True).

```blocks
let ButtonAPressed = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && ButtonAPress == 0) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        control.waitMicros(242)
        ButtonAPressed = 1
    
})
```
## Step 9 - Program Continued
Coding: Turning the LED off
---------------------------
Now we add what will happen if the condition is not true. 
1. Click the 'plus' symbol on the if block to add an 'else' condition.
2. Add blocks to turn off the LED. Try it yourself or check the Hint to find out how.

```blocks
let ButtonAPressed = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && ButtonAPressed == 0) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        control.waitMicros(242)
        ButtonAPressed = 1
    } else {
        if (input.buttonIsPressed(Button.A) && ButtonAPressed == 1) {
            pins.digitalWritePin(DigitalPin.P2, 0)
            control.waitMicros(242)
            ButtonAPressed = 0
        }
    }
})
```

## Step 10 - Test It
Test It! Debug it!
------------------
Time to test your code. Download the code to the micro: bit and try it out. Observe what happens and adjust the values as needed.<br>
How could you integrate the other sensors into your code to trigger the servo in a different way?

<script src="https://makecode.com/gh-pages-embed.js" > </script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{ { site.github.repository_name } } ");</script>

