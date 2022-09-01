# T_Radio_Chat_Tutorial

<!---------------------------------------------------------------
------------------------- Radio Chat TUTORIAL-----Complete-----
----------------------------------------------------------------->
## Activity 1 - Radio Chat
----------------------------
### Step 1 About the Radio @showdialog

![](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Radio_Chat/Radio_Chat_Banner.gif)
-------------------------------------------
One of the fundamental ideas behind IoT, is the connection between multiple computers. Micro:bits can communicate using short range radio signals. The Radio menu contains commands for sending and recieving data.<br>
In this tutorial we will connect two micro:bit computers and send 'Chat' messages between them. For IoT projects, the goal would be to share data.
 

### Step 2 Collect the parts.
Collect the parts
-----------------
For this tutorial, you will need 2x micro:bit computers, connected to two computers via USB - one for you and one for a partner.<br>
Both you and your partner will need to create the following code.<br>

### Step 3 - Create the code
Coding: Set the radio group
--------------------------
This code begins by setting the radio group. Any micro:bit on this radio group can communicate if they have the right coding, allowing for larger groups.<br>
Place a ``||radio: Set Radio Group||`` block into the ``||Basic: on start||`` block.<br>
The number in the place holder needs to be the same as the one on your partner's computer.

```blocks
radio.setGroup(1)
```
### Step 4 - Create the code
Coding: Create a send button
--------------------------
1. Use ``||Input: on Button A pressed||`` block to send a message. Here it will be a smiley face. 
2. Select a ``||radio: Send string||`` block and add it inside the ``||Input: on Button A pressed||`` block. This command sends text over the micro:bit radio.
3. Add a ``||Basic: Show string||`` block to show that the text has been sent.
4. Place a 'smiley face' into each place holder.

```blocks
input.onButtonPressed(Button.A, function () {
    radio.sendString(":)")
    basic.showString(":)")
})

```
### Step 5 - Create the code
Coding: Receive a message
--------------------------
1. Add a ``||radio: on radio received||`` block to the work space.
2. Add a ``||Basic: Show string||`` block **inside** the ``||radio: on radio received||`` block.
3. **Drag** the ``||radio: receivedString block||`` from the ``||radio: on radio received||`` block place holder and **place** it into the placeholder on the ``||Basic: Show string||`` block.

```blocks
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
```
## Activity 2 - Trigger an event on another device
----------------------------
### Step 6 - Extending further
Extending further
--------------------------
In this example we used a ``||Input: on Button A pressed||`` block as the trigger input for the radio event. 
A trigger could be another input could be used. 
Eg. A computer senses a high body temperature and tells a security computer to make an automated announcement. 
The security computer then tells a traffic flow computer to shut transit gates.<br>
What ideas can you come up with?<br>

** [- Click here to return to the menu](https://sites.google.com/earthed.vic.edu.au/tutorial-iot/home)**<br>


<script src="https://makecode.com/gh-pages-embed.js" > </script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{ { site.github.repository_name } } ");</script>
