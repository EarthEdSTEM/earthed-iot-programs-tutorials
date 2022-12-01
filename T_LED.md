# LED Tutorial

<!----LED Tutorial-----------------------------------Complete----
------Control an LED---------------------------------------------
----------------------------------------------------------------->

## Step 1 Coding Light Emitting Diodes (LED's) @showdialog

![](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_LED/LED_Banner.gif)
Making an LED shine
-----------------

In this tutorial, we will use [variables](https://launchschool.com/books/ruby/read/variables) and [boolean operators](https://www.youtube.com/watch?v=KrR7D58Onzw) to control a Light Emitting Diode (LED).
Booleans work by comparing, adding or subtracting two values. We often use booleans in 'if' statements to decide what code to run.
This process is called branching.

## Step 2 Collect the parts. @unplugged
Collect the parts
-----------------
For this tutorial, you will need these parts: <br>
1x micro:bit, 1x GPIO shield, 1x Connector Wire, 1x LED (Red, Green or Yellow) <br><br>
![Parts Needed: 1x micro:bit, 1x GPIO shield, 1x Connector Wire, 1x LED (Red, Green or Yellow) ](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_LED/IoT_LED_Parts_List.png)
<br>

## Step 3 Connect Up!
Physical connections
--------------------
1. Plug the micro:bit into the GPIO shield.
2. Use the wire to connect the LED to Pin 2 on the GPIO shield.
3. Connect the other end of the wire to the LED.
![image](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_LED/IoT_LED_Connections.png)

## Step 4 Prepare to Code!
Using MakeCode
------------------------------
The software we are using is called MakeCode. In these tutorials, if you see coloured words such as ``||basic: forever||``, 
this is a command that can be found and dragged out of a menu. The command colour corresponds with the menu colour. 
The commands click together like a jigsaw. 
If you need to delete blocks, dragging them to the menu bar will cause a 'bin' to appear. 
You can delete single blocks or groups of blocks, but make sure that you leave 
a ``||basic: forever||`` block and a ``||basic: on start||`` block on the work space.
![Image](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/General/Delete_blocks.png)

## Step 5 Create Variables (Setting the Environment)
Coding: creating variables
--------------------------
Variables are containers that hold a value. For this task we will use the values 1 for 'true' and 0 for 'false'.
We will start by creating a new variable, asigning it to a button press and then set it to 'false' by entering '0'.
1. Click ``||Variables: Make a Variable...||`` to create a variable and call it **ButtonAPress**.
2. Go to ``||Variables: Variables||`` and place the ``||Variables:Set ButtonAPress to||`` block inside the ``||Basic:on Start||`` block.
3. Check that the value of the ``||Variables:Set ButtonAPress to||`` block is set to **'0'** (for false).
Now, each time the program starts, the value of 'ButtonAPress' will be '0'.
![Making a variable](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_LED/IoT_LED_Create_Variable.png)


## Step 6 Add a Conditional Block
Coding: Add an 'if' block
-----------------------
For this tutorial, there will be one physical switch for turning on the LED. This will be the 'A' button on the micro:bit. 
We will use the 'If...then' Logic Block to check if the 'A' button is pressed and if the LED is switched off. 
If both are true, then the LED is switched on.
1. Place a ``||logic:if||`` block from the Logic menu into the ``||basic.forever||`` block.

```blocks
basic.forever(function () {
    if (true) {
    	
    }
})
```

## Step 7 Add a Conditional Block
Coding: Creating the boolean for 'On'
-----------------------------------------------------
This section asks the question: "Is the A button pressed **and** is the LED switched **off**?" (the ButtonAPress variable = '0') by using an ``||logic: and ||`` boolean. ``||logic: and ||`` booleans only are 'true' if all conditions (values being compared) are met. If 'true', then Pin 2 is set to '1' and is activated. To code it:
1. Place a Boolean ``||logic: and ||`` block from the Logic Menu into the placeholder at the top of the ``||logic: if ||`` block.
2. Place a Comparison ``||logic: equals ||`` block from the Logic Menu into the placeholder at the top of the ``||logic:if ||`` block. Add a ``||variables: ButtonAPress ||`` with a value of 0.
3. Place a ``||input: button A is pressed ||`` input into the ``|| logic: and ||``.

```blocks
let ButtonAPress = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && ButtonAPress == 0) {
    	
    }
})
```

## Step 8 Add a Conditional Block
Coding: If true....then switch on!
----------------------------------
The 'if' block checks if a condition is 'true' and executes a set of commands if it is. 
The commands in this 'if' statement start by enabling Pin 2 if the Button is pressed A and the LED is off, 
followed by the ``||control:waitMicros||`` command, which gives the user time to remove their finger from Button A.
1. Add a ``||pins:digital write pin||`` block to the ``||logic:if||`` and set it to 'P2' and '1'.
2. Add a ``||control:waitMicros||`` and set it to 240 milliseconds. this will allow time for the button to be released.
3. Set the ButtonAPressed variable to 1 (True) to indicate that Button A has been pressed.

```blocks
let ButtonAPress = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && ButtonAPress == 0) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        control.waitMicros(240)
        ButtonAPress = 1
    }
})
```
## Step 9 Program Continued
Coding: Turning the LED off using an else condition
---------------------------------------------------
This section asks the question: "Is the A button pressed **and** is the LED switched **on**?" (the ButtonAPress variable = '1'). 
This is done using another ``||logic:and||`` boolean. If both conditions are True then the Pin 2 is set to '0' and powers down.
1. Click the 'plus' symbol on the if block that was added in the last step to add an 'else' condition.
2. Add blocks to turn off the LED. Try it yourself or check the Hint to find out how.

```blocks
let ButtonAPressed = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && ButtonAPressed == 0) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        control.waitMicros(240)
        ButtonAPressed = 1
    } else {
        if (input.buttonIsPressed(Button.A) && ButtonAPressed == 1) {
            pins.digitalWritePin(DigitalPin.P2, 0)
            control.waitMicros(240)
            ButtonAPressed = 0
        }
    }
})
```

## Step 10 Test It
Test it! Debug it!
------------------
Time to test your code. Download the code to the micro: bit and try it out. Observe what happens and adjust the values as needed.<br>
How could you use a boolean operator in another way? What else could it be used for?<br><br>


Congratulations! You have finished this tutorial.
** [- Click here to return to the menu](https://sites.google.com/earthed.vic.edu.au/tutorial-iot/home)**<br>


<script src="https://makecode.com/gh-pages-embed.js" > </script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{ { site.github.repository_name } } ");</script>

