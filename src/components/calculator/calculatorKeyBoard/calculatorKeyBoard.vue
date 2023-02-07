<template>
    <calculator-screen :screenValue="screenValue" />
    <div class="calculator-keyboard">
        <button @click="resetScreenValues" id="ac" class="operator">AC</button>
        <button  id="de" class="de operator"></button>
        <button @click="(event) => sendValueToScreen(event)" id="." class="operator">.</button>
        <button @click="(event) => sendValueToScreen(event)" id="/" class="operator">/</button>

        <button @click="(event) => sendValueToScreen(event)" id="7">7</button>
        <button @click="(event) => sendValueToScreen(event)" id="8">8</button>
        <button @click="(event) => sendValueToScreen(event)" id="9">9</button>
        <button @click="(event) => sendValueToScreen(event)" id="*" class="operator">*</button>

        <button @click="(event) => sendValueToScreen(event)" id="7">4</button>
        <button @click="(event) => sendValueToScreen(event)" id="8">5</button>
        <button @click="(event) => sendValueToScreen(event)" id="9">6</button>
        <button @click="(event) => sendValueToScreen(event)" id="-" class="operator">-</button>

        <button @click="(event) => sendValueToScreen(event)" id="1">1</button>
        <button @click="(event) => sendValueToScreen(event)" id="2">2</button>
        <button @click="(event) => sendValueToScreen(event)" id="3">3</button>
        <button @click="(event) => sendValueToScreen(event)" id="+" class="operator">+</button>

        <button @click="resetScreenValues" id="00">00</button>
        <button @click="(event) => sendValueToScreen(event)" id="0">0</button>
        <button @click="calculateScreenValues" id="=" class="equal operator">=</button>
    </div>
  </template>
  
  <script lang="js" src="./calculatorKeyBoard.js" />
  <style scoped lang='css' src="./calculatorKeyBoard.css" />
  
  